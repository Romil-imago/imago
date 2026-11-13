import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/app/components/SiteHeader";
import { LeadCaptureForm } from "@/app/components/forms/LeadCaptureForm";
export const metadata: Metadata = { title: "Remodeling quote demo" };
export default function RemodelingQuoteDemoPage() {
  return <><SiteHeader /><main className="form-page"><div className="container form-page-grid">
    <section className="form-intro"><p className="eyebrow"><span className="eyebrow-dot" /> CLIENT FUNNEL / DEMO</p><h1>Your next<br /><em>project starts here.</em></h1>
      <p>This is a demonstration homeowner intake funnel for a remodeling or roofing partner. It is not a live contractor quote or a guaranteed voucher.</p>
      <div className="process-list"><div><span>01</span><p><strong>Tell us</strong> — what you’re planning and where.</p></div><div><span>02</span><p><strong>Get reviewed</strong> — a team member checks your request.</p></div><div><span>03</span><p><strong>Discuss next steps</strong> — scope, schedule and estimate.</p></div></div>
      <Link className="back-link" href="/">← Back to Imago</Link>
    </section><section className="form-panel"><LeadCaptureForm leadType="homeowner_quote" heading="Request a project conversation" /></section>
  </div></main></>;
}
