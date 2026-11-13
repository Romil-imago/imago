const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const US_ZIP_RE = /^\d{5}(?:-\d{4})?$/;
export function validatePhone(phone: string): boolean {
  const digits = phone.trim().replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}
export function validateEmail(email: string): boolean { return EMAIL_RE.test(email.trim()); }
export function validateZipCode(zip: string): boolean { return !zip.trim() || US_ZIP_RE.test(zip.trim()); }
export function sanitizeString(value: unknown, maxLength = 160): string {
  if (typeof value !== "string") return "";
  return value.replace(/[<>]/g, "").replace(/[\u0000-\u001F\u007F]/g, " ").trim().slice(0, maxLength);
}
