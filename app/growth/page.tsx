import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/app/components/SiteHeader";
import { LeadCaptureForm } from "@/app/components/forms/LeadCaptureForm";
export const metadata: Metadata = { title: "Growth audit" };
export default function GrowthPage() {
  return <><SiteHeader /><main className="form-page"><div className="container form-page-grid">
    <section className="form-intro"><p className="eyebrow"><span className="eyebrow-dot" /> IMAGO / GROWTH AUDIT</p><h1>Let&apos;s make<br /><em>growth work.</em></h1>
      <p>Share a little about your business. We’ll use it to understand your goals, current acquisition motion and where a better system could help.</p>
      <div className="process-list"><div><span>01</span><p><strong>Understand</strong> — your market, offer and current funnel.</p></div><div><span>02</span><p><strong>Identify</strong> — friction, missed opportunities and priorities.</p></div><div><span>03</span><p><strong>Recommend</strong> — a practical next step, grounded in your goals.</p></div></div>
      <Link className="back-link" href="/">← Back to Imago</Link>
    </section><section className="form-panel"><LeadCaptureForm leadType="agency_prospect" heading="Tell us about your business" /></section>
  </div></main></>;
}
