import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/app/components/SiteHeader";
export const metadata: Metadata = { title: "Demo operations dashboard", robots: { index: false, follow: false } };
const metrics = [{ label: "New leads", value: "24", delta: "+12% vs last period" }, { label: "Qualified", value: "16", delta: "66.7% qualification rate" }, { label: "Appointments", value: "9", delta: "Demo data — not connected" }, { label: "Pipeline value", value: "$18.4k", delta: "Illustrative only" }];
const funnel = [{ label: "Captured", value: 24, width: "100%" }, { label: "Qualified", value: 16, width: "67%" }, { label: "Contacted", value: 12, width: "50%" }, { label: "Booked", value: 9, width: "38%" }];
const tasks = [{ id: "01", title: "Review new roofing enquiries", owner: "Sales operations", status: "Needs review" }, { id: "02", title: "Approve first client campaign brief", owner: "Campaign strategy", status: "Awaiting approval" }, { id: "03", title: "Connect persistent lead storage", owner: "Platform setup", status: "Setup required" }];
export default function DashboardPage() {
  return <><SiteHeader /><main className="dashboard-page"><div className="container">
    <div className="dashboard-top"><div><p className="eyebrow"><span className="eyebrow-dot" /> IMAGO / OPERATIONS</p><h1>Growth <em>overview.</em></h1><p className="dashboard-subtitle">Your acquisition and delivery workspace.</p></div><Link className="button button-dark" href="/growth">+ New agency lead</Link></div>
    <div className="demo-banner"><strong>DEMO WORKSPACE</strong><span>Figures and tasks below are illustrative sample data. No ad accounts, CRM or payment systems are connected yet.</span></div>
    <div className="metric-grid">{metrics.map(m => <article className="metric-card" key={m.label}><span>{m.label}</span><strong>{m.value}</strong><small>{m.delta}</small></article>)}</div>
    <div className="dashboard-grid">
      <section className="dashboard-card"><div className="card-heading"><div><p className="eyebrow">01 / ACQUISITION</p><h2>Lead funnel</h2></div><span>Sample period · 30 days</span></div>
        <div className="funnel-list">{funnel.map(f => <div className="funnel-row" key={f.label}><div><span>{f.label}</span><strong>{f.value}</strong></div><div className="funnel-track"><i style={{ width: f.width }} /></div></div>)}</div>
      </section>
      <section className="dashboard-card"><div className="card-heading"><div><p className="eyebrow">02 / PLATFORM</p><h2>System status</h2></div><span>Setup checklist</span></div>
        <div className="status-list"><div><span className="status-dot status-demo" /><p><strong>Lead intake UI</strong><small>Built in this release</small></p><em>Ready</em></div><div><span className="status-dot status-pending" /><p><strong>Persistent database</strong><small>Requires DATABASE_URL and schema</small></p><em>Pending</em></div><div><span className="status-dot status-pending" /><p><strong>CRM webhook</strong><small>Requires secure HTTPS endpoint</small></p><em>Optional</em></div><div><span className="status-dot status-pending" /><p><strong>Ad accounts</strong><small>Connect after client approval</small></p><em>Not linked</em></div></div>
      </section>
    </div>
    <section className="dashboard-card work-card"><div className="card-heading"><div><p className="eyebrow">03 / WORK QUEUE</p><h2>Next actions</h2></div><span>Illustrative backlog</span></div>
      <div className="task-list">{tasks.map(t => <div className="task-row" key={t.id}><span className="task-number">{t.id}</span><p><strong>{t.title}</strong><small>{t.owner}</small></p><span className="task-status">{t.status}</span></div>)}</div>
    </section>
    <div className="dashboard-actions"><Link href="/growth">Capture an agency prospect ↗</Link><Link href="/demo/remodeling-quote">Preview client funnel ↗</Link><Link href="/api/health">View API health ↗</Link><Link href="/privacy">Privacy notice ↗</Link></div>
  </div></main></>;
}
