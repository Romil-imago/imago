import Link from "next/link";
import { SiteHeader } from "@/app/components/SiteHeader";
const capabilities = [
  { n: "01", title: "Demand generation", text: "Paid social, landing pages and focused campaigns built around a measurable acquisition goal." },
  { n: "02", title: "Conversion systems", text: "Fast funnels, lead qualification and follow-up workflows that turn interest into booked conversations." },
  { n: "03", title: "Growth intelligence", text: "A clear view of lead quality, pipeline movement and the economics behind every campaign." }
];
const workflow = [
  { n: "01", title: "Discover", detail: "Audience · offer · competitors · goals", output: "Growth strategy" },
  { n: "02", title: "Create", detail: "Content pillars · hooks · creatives", output: "Content & ad assets" },
  { n: "03", title: "Launch", detail: "Organic publishing · paid campaigns", output: "Attention & traffic" },
  { n: "04", title: "Convert", detail: "Landing page · lead form · CRM · follow-up", output: "Qualified leads" },
  { n: "05", title: "Optimize", detail: "Test · measure · improve · report", output: "Better performance" }
];
export default function HomePage() {
  return <><SiteHeader /><main>
    <section className="hero-section"><div className="hero-orbit" aria-hidden="true"><span /></div><div className="container hero-content">
      <p className="eyebrow"><span className="eyebrow-dot" /> DIGITAL GROWTH PARTNER · BUILT FOR AMBITION</p>
      <h1>Make growth<br /><em>intentional.</em></h1>
      <div className="hero-lower"><p className="hero-copy">We build the systems behind better marketing: demand, conversion and follow-through that move businesses forward.</p>
        <div className="hero-actions"><Link className="button button-dark" href="/growth">Get a growth audit <span>↗</span></Link><Link className="text-link" href="#services">Explore the approach ↓</Link></div>
      </div>
      <div className="hero-foot"><span>STRATEGY × CREATIVE × SYSTEMS</span><span>INDEPENDENT BY DESIGN · INTERNATIONAL BY DEFAULT</span></div>
    </div></section>
    <section className="manifesto-section" id="method"><div className="container manifesto-grid"><p className="eyebrow">01 / THE IMAGO APPROACH</p><div>
      <h2>Attention is a start.<br /><em>Revenue is the point.</em></h2>
      <p className="section-copy">More clicks are not a growth strategy. We connect the full journey—from the first impression to the qualified conversation—so marketing is accountable to business outcomes.</p>
    </div></div></section>
    <section className="services-section" id="services"><div className="container">
      <div className="section-heading"><p className="eyebrow">02 / WHAT WE BUILD</p><p className="small-note">A connected growth engine, not disconnected tactics.</p></div>
      <div className="capability-grid">{capabilities.map(c => <article className="capability-card" key={c.n}><span className="capability-number">{c.n}</span><h3>{c.title}</h3><p>{c.text}</p><span className="card-arrow">↗</span></article>)}</div>
    </div></section>
    <section className="workflow-section" id="how-it-works"><div className="container">
      <div className="workflow-heading"><div><p className="eyebrow">03 / THE GROWTH LOOP</p><h2>From scroll<br /><em>to sale.</em></h2></div><p className="workflow-lede">A transparent operating rhythm. Every stage has a purpose, an owner and an outcome—then insights feed the next cycle.</p></div>
      <div className="workflow-track" aria-label="Imago social media marketing workflow">{workflow.map((step,i)=><article className="workflow-step" key={step.n}><div className="workflow-step-top"><span>{step.n}</span><span className="workflow-node">{i===4?"↻":"↗"}</span></div><h3>{step.title}</h3><p>{step.detail}</p><div className="workflow-output"><small>OUTPUT</small><strong>{step.output}</strong></div></article>)}</div>
      <div className="workflow-loop"><span>↺</span><p><strong>Learn & repeat</strong> — performance data informs new audiences, creative angles and budget decisions.</p></div>
      <div className="workflow-bottom"><div><span className="flow-key flow-organic" /> Organic social <small>Trust · community · consistency</small></div><div><span className="flow-key flow-paid" /> Paid social <small>Reach · testing · demand</small></div><div><span className="flow-key flow-convert" /> Conversion <small>Landing page · CRM · sales follow-up</small></div></div>
    </div></section>
    <section className="cta-section"><div className="container cta-panel"><p className="eyebrow">04 / START WITH CLARITY</p><h2>Find the constraint.<br /><em>Then remove it.</em></h2>
      <div className="cta-bottom"><p>Tell us what you sell, who you serve and where growth gets stuck. We’ll start with the numbers—not a generic pitch.</p><Link className="button button-lime" href="/growth">Request a growth audit ↗</Link></div>
    </div></section>
  </main><footer className="site-footer"><div className="container footer-inner"><Link className="wordmark" href="/"><span className="wordmark-mark" />imago<span className="wordmark-period">.</span></Link><span>BUILD WITH INTENT.</span><Link href="/dashboard">Growth OS ↗</Link><span>© {new Date().getFullYear()} Imago Studio</span></div></footer>
  </>;
}
