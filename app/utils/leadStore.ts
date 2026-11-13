import "server-only";
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { neon } from "@neondatabase/serverless";
export type StoredLead = {
  id: string; leadType: "agency_prospect" | "homeowner_quote"; leadScore: number;
  name: string; email: string | null; phone: string | null; city: string; company: string | null;
  service: string; scope: string; timeline: string; zipCode: string | null; trade: string | null;
  privacyConsent: boolean; smsConsent: boolean; createdAt: string;
};
export async function storeLead(lead: StoredLead): Promise<"database" | "local-file"> {
  if (process.env.DATABASE_URL) {
    const sql = neon(process.env.DATABASE_URL);
    await sql`INSERT INTO leads (
      id, lead_type, lead_score, name, email, phone, city, company, service, scope,
      timeline, zip_code, trade, privacy_consent, sms_consent, created_at
    ) VALUES (
      ${lead.id}::uuid, ${lead.leadType}, ${lead.leadScore}, ${lead.name},
      ${lead.email}, ${lead.phone}, ${lead.city}, ${lead.company}, ${lead.service},
      ${lead.scope}, ${lead.timeline}, ${lead.zipCode}, ${lead.trade},
      ${lead.privacyConsent}, ${lead.smsConsent}, ${lead.createdAt}::timestamptz
    )`;
    return "database";
  }
  if (process.env.NODE_ENV === "production") throw new Error("LEAD_STORAGE_NOT_CONFIGURED");
  const dir = path.join(process.cwd(), "logs", "leads");
  await mkdir(dir, { recursive: true });
  const file = path.join(dir, `leads-${lead.createdAt.slice(0, 10)}.jsonl`);
  await appendFile(file, JSON.stringify(lead) + "\n", { encoding: "utf8", mode: 0o600 });
  return "local-file";
}
