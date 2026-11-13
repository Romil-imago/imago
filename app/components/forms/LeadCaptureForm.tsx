"use client";
import { useState, type FormEvent } from "react";
type LeadType = "agency_prospect" | "homeowner_quote";
export function LeadCaptureForm({ leadType, heading }: { leadType: LeadType; heading: string }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState(""), [score, setScore] = useState<number | null>(null);
  const [smsPreview, setSmsPreview] = useState<string | null>(null);
  const homeowner = leadType === "homeowner_quote";
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget, data = new FormData(form), payload: Record<string, unknown> = {};
    data.forEach((v, k) => { payload[k] = v; });
    payload.leadType = leadType; payload.privacyConsent = data.get("privacyConsent") === "on"; payload.smsConsent = data.get("smsConsent") === "on";
    setStatus("submitting"); setMessage(""); setScore(null); setSmsPreview(null);
    try {
      const response = await fetch("/api/leads/webhook", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) });
      const result = await response.json() as { ok: boolean; error?: string; message?: string; leadScore?: number; smsPreview?: string | null };
      if (!response.ok || !result.ok) throw new Error(result.error || "Unable to submit your request.");
      setStatus("success"); setMessage(result.message || "Request received."); setScore(result.leadScore ?? null); setSmsPreview(result.smsPreview ?? null); form.reset();
    } catch (error) { setStatus("error"); setMessage(error instanceof Error ? error.message : "Something went wrong."); }
  }
  return <form className="lead-form" onSubmit={submit}>
    <h3 className="form-heading">{heading}</h3>
    <div className="form-grid">
      <label>Full name<input name="name" autoComplete="name" required maxLength={100} placeholder="Your name" /></label>
      <label>Phone number<input name="phone" type="tel" autoComplete="tel" required={homeowner} maxLength={40} placeholder="+1 555 010 2020" /></label>
      <label>Email address<input name="email" type="email" autoComplete="email" maxLength={160} placeholder="you@company.com" /></label>
      <label>City / service area<input name="city" required maxLength={100} placeholder="Austin, TX" /></label>
      {!homeowner && <label>Company<input name="company" maxLength={120} placeholder="Your business" /></label>}
      <label>Service<select name="service" defaultValue={homeowner ? "Kitchen Remodel" : "Growth & lead generation"}>
        {homeowner ? <><option>Kitchen Remodel</option><option>Bathroom Remodel</option><option>Roofing</option><option>Whole-home Renovation</option><option>Other</option></> : <><option>Growth & lead generation</option><option>Paid social advertising</option><option>Conversion funnel</option><option>CRM & automation</option><option>Full growth system</option></>}
      </select></label>
      {homeowner ? <>
        <label>Project scope<select name="scope" defaultValue="Full Remodel"><option>Full Remodel</option><option>Partial Remodel</option><option>Design consultation</option><option>Repair / replacement</option></select></label>
        <label>Start timeline<select name="timeline" defaultValue="Within 30 Days"><option>Immediately</option><option>Within 30 Days</option><option>Within 3 Months</option><option>Just researching</option></select></label>
        <label>US ZIP code<input name="zipCode" inputMode="numeric" maxLength={12} placeholder="78701" /></label>
      </> : <>
        <label>Trade<select name="trade" defaultValue="Roofing"><option>Roofing</option><option>Kitchen & Bath</option><option>HVAC</option><option>Other</option></select></label>
        <label>Monthly growth budget<select name="scope" defaultValue="Not sure yet"><option>Under $2,500</option><option>$2,500–$5,000</option><option>$5,000–$10,000</option><option>$10,000+</option><option>Not sure yet</option></select></label>
      </>}
    </div>
    <label className="honeypot" aria-hidden="true">Leave empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
    <div className="consent-stack">
      <label className="consent"><input type="checkbox" name="privacyConsent" required /><span>I agree to be contacted about this request and acknowledge the <a href="/privacy" target="_blank" rel="noreferrer">privacy notice</a>.</span></label>
      <label className="consent"><input type="checkbox" name="smsConsent" /><span>I separately agree to receive SMS updates about this request. Consent is optional and not a condition of purchase. Reply STOP to opt out.</span></label>
    </div>
    <button className="button button-lime form-submit" type="submit" disabled={status === "submitting"}>{status === "submitting" ? "Sending securely…" : homeowner ? "Request my estimate" : "Request my growth audit"} <span>↗</span></button>
    {status !== "idle" && <div className={`form-feedback ${status}`} role="status" aria-live="polite">{message}
      {score !== null && <span className="score-note">Internal qualification score: {score}/100</span>}
      {smsPreview && <p className="sms-preview"><strong>SMS draft only — not sent:</strong> {smsPreview}</p>}
    </div>}
    <p className="form-fineprint">Your details are used to respond to this request. Marketing messages are only sent where separately consented and configured.</p>
  </form>;
}
