export type LeadType = "agency_prospect" | "homeowner_quote";
export type LeadInput = { leadType: LeadType; timeline?: string; phone?: string; email?: string; trade?: string; service?: string; company?: string };
export function calculateLeadScore(data: LeadInput): number {
  let score = 45;
  if (data.leadType === "agency_prospect") {
    if (data.trade === "Roofing" || data.trade === "Kitchen & Bath") score += 20;
    if (data.phone) score += 10;
    if (data.email) score += 10;
    if (data.company) score += 10;
  }
  if (data.leadType === "homeowner_quote") {
    if (data.timeline === "Immediately" || data.timeline === "Within 30 Days") score += 25;
    else if (data.timeline === "Within 3 Months") score += 15;
    if (data.phone) score += 15;
    if (data.email) score += 5;
  }
  if (data.service) score += 5;
  return Math.max(0, Math.min(score, 100));
}
export function generateSmsPreview(data: { name: string; city: string; service?: string; clientBrand?: string }): string {
  return `Hi ${data.name || "there"}, this is ${data.clientBrand || "the project team"}. We received your ${data.service || "project"} request for ${data.city || "your area"}. What is a convenient time for a quick conversation? Reply STOP to opt out.`;
}
