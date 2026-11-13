import { NextResponse } from "next/server";
import { calculateLeadScore, generateSmsPreview, type LeadType } from "@/app/utils/leadScoring";
import { sanitizeString, validateEmail, validatePhone, validateZipCode } from "@/app/utils/validators";
import { storeLead } from "@/app/utils/leadStore";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
function isRecord(v: unknown): v is Record<string, unknown> { return typeof v === "object" && v !== null && !Array.isArray(v); }
async function forwardToGhl(payload: Record<string, unknown>): Promise<"sent" | "not_configured" | "failed"> {
  const target = process.env.GHL_WEBHOOK_URL;
  if (!target) return "not_configured";
  let url: URL;
  try { url = new URL(target); } catch { return "failed"; }
  if (url.protocol !== "https:") return "failed";
  try {
    const res = await fetch(url, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload), signal: AbortSignal.timeout(4000), cache: "no-store" });
    return res.ok ? "sent" : "failed";
  } catch { return "failed"; }
}
export async function POST(request: Request) {
  const declaredLength = Number(request.headers.get("content-length") || 0);
  if (declaredLength > 12000) return NextResponse.json({ ok: false, error: "Request is too large." }, { status: 413 });
  let raw = "";
  try {
    const reader = request.body?.getReader();
    if (!reader) return NextResponse.json({ ok: false, error: "Request body is required." }, { status: 400 });
    const decoder = new TextDecoder();
    let byteLength = 0;
    while (true) {
      const part = await reader.read();
      if (part.done) break;
      byteLength += part.value.byteLength;
      if (byteLength > 12000) {
        await reader.cancel();
        return NextResponse.json({ ok: false, error: "Request is too large." }, { status: 413 });
      }
      raw += decoder.decode(part.value, { stream: true });
    }
    raw += decoder.decode();
  } catch {
    return NextResponse.json({ ok: false, error: "Unable to read request body." }, { status: 400 });
  }
  let body: unknown;
  try { body = JSON.parse(raw); } catch { return NextResponse.json({ ok: false, error: "A valid JSON body is required." }, { status: 400 }); }
  if (!isRecord(body)) return NextResponse.json({ ok: false, error: "Invalid lead payload." }, { status: 400 });
  // Honeypot is a basic deterrent only; add edge rate limiting before paid traffic.
  if (sanitizeString(body.website, 200)) return NextResponse.json({ ok: true }, { status: 202 });
  if (body.leadType !== "agency_prospect" && body.leadType !== "homeowner_quote") return NextResponse.json({ ok: false, error: "Unsupported lead type." }, { status: 400 });
  const leadType: LeadType = body.leadType;
  const name = sanitizeString(body.name, 100), email = sanitizeString(body.email, 160).toLowerCase();
  const phone = sanitizeString(body.phone, 40), city = sanitizeString(body.city, 100);
  const company = sanitizeString(body.company, 120), service = sanitizeString(body.service, 100);
  const scope = sanitizeString(body.scope, 100), timeline = sanitizeString(body.timeline, 60);
  const zipCode = sanitizeString(body.zipCode, 12), trade = sanitizeString(body.trade, 80);
  const privacyConsent = body.privacyConsent === true, smsConsent = body.smsConsent === true;
  if (!name || !city || !service) return NextResponse.json({ ok: false, error: "Name, city and service are required." }, { status: 400 });
  if (leadType === "homeowner_quote" && !phone) return NextResponse.json({ ok: false, error: "A phone number is required for a quote request." }, { status: 400 });
  if (!phone && !email) return NextResponse.json({ ok: false, error: "Provide at least one contact method." }, { status: 400 });
  if (phone && !validatePhone(phone)) return NextResponse.json({ ok: false, error: "Enter a valid phone number." }, { status: 400 });
  if (email && !validateEmail(email)) return NextResponse.json({ ok: false, error: "Enter a valid email address." }, { status: 400 });
  if (!validateZipCode(zipCode)) return NextResponse.json({ ok: false, error: "Enter a valid US ZIP code." }, { status: 400 });
  if (!privacyConsent) return NextResponse.json({ ok: false, error: "Please acknowledge the privacy notice to submit." }, { status: 400 });
  const createdAt = new Date().toISOString(), id = crypto.randomUUID();
  const lead = {
    id, leadType, leadScore: calculateLeadScore({ leadType, timeline, phone, email, trade, service, company }),
    name, email: email || null, phone: phone || null, city, company: company || null, service,
    scope, timeline, zipCode: zipCode || null, trade: trade || null, privacyConsent, smsConsent, createdAt
  };
  try {
    const storage = await storeLead(lead);
    const webhookStatus = await forwardToGhl({
      id, createdAt, leadType, leadScore: lead.leadScore,
      contact: { name, email: lead.email, phone: lead.phone, city, zipCode: lead.zipCode, company: lead.company },
      project: { service, scope, timeline, trade }, consent: { privacyConsent, smsConsent }
    });
    return NextResponse.json({
      ok: true, leadId: id, leadScore: lead.leadScore, storage, webhookStatus,
      smsPreview: smsConsent ? generateSmsPreview({ name, city, service }) : null,
      message: "Your request has been received. The team will review it and follow up."
    }, { status: 201 });
  } catch (err) {
    const unavailable = err instanceof Error && err.message === "LEAD_STORAGE_NOT_CONFIGURED";
    console.error("Lead intake failed:", err instanceof Error ? err.message : "unknown");
    return NextResponse.json({
      ok: false,
      error: unavailable ? "Lead capture is not enabled on this deployment. Configure DATABASE_URL and apply the lead schema." : "We could not save your request. Please try again shortly."
    }, { status: unavailable ? 503 : 500 });
  }
}
