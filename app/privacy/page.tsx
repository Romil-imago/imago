import Link from "next/link";
import { SiteHeader } from "@/app/components/SiteHeader";
export default function PrivacyPage() {
  return <><SiteHeader /><main className="form-page"><article className="container policy-copy">
    <p className="eyebrow">IMAGO / PRIVACY</p><h1>Privacy <em>notice.</em></h1>
    <p>This starter notice explains the intended handling of information submitted through the Imago Growth OS demonstration forms. It is not a substitute for a jurisdiction-specific privacy policy approved by the business and its counsel.</p>
    <h2>Information collected</h2><p>When you submit a form, we may collect your name, contact details, city or service area, business or project information, and consent preferences.</p>
    <h2>How it is used</h2><p>Information is used to respond to the request, assess the enquiry and, where separately consented, prepare follow-up communications. This release does not automatically send SMS or marketing email.</p>
    <h2>Sharing and retention</h2><p>When configured, a submitted enquiry may be forwarded to the agency&apos;s designated customer relationship management provider. Production storage and retention periods must be configured by the operator before launch.</p>
    <h2>Your choices</h2><p>SMS consent is optional and separate from the request itself. You can decline SMS and still submit. Do not submit sensitive personal information through these forms.</p>
    <p>Before public launch, replace this starter notice with the correct business identity, contact address, controller details, retention periods, international transfer information and local rights language.</p>
    <Link className="back-link" href="/">← Back to Imago</Link>
  </article></main></>;
}
