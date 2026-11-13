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
  <style jsx global>{`
  .workflow-section{padding:135px 0;background:#e8e6df;border-top:1px solid #d8d5cc;border-bottom:1px solid #d8d5cc}
  .workflow-heading{display:flex;justify-content:space-between;align-items:end;gap:50px;margin-bottom:60px}
  .workflow-heading h2{font-size:clamp(58px,8vw,100px);line-height:.9;letter-spacing:-.09em;margin:35px 0 0}
  .workflow-heading h2 em{font-family:Georgia,serif;font-weight:400;letter-spacing:-.09em}
  .workflow-lede{font-size:14px;line-height:1.8;color:#706e67;max-width:390px;margin:0 0 8px}
  .workflow-track{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;position:relative}
  .workflow-step{background:#f8f7f3;border:1px solid #d9d6ce;border-radius:18px;padding:20px;min-height:250px;display:flex;flex-direction:column}
  .workflow-step-top{display:flex;justify-content:space-between;align-items:center;font:11px 'DM Mono',monospace;color:#77746d}
  .workflow-node{width:28px;height:28px;display:grid;place-items:center;border:1px solid #d8d5cc;border-radius:50%;color:#3859ff}
  .workflow-step h3{font-size:24px;letter-spacing:-1px;margin:35px 0 10px}
  .workflow-step>p{font-size:11px;line-height:1.65;color:#77746d;margin:0}
  .workflow-output{margin-top:auto;padding-top:20px;display:grid;gap:6px;border-top:1px solid #e5e2da}
  .workflow-output small{font:9px 'DM Mono',monospace;color:#8b8981;letter-spacing:.1em}
  .workflow-output strong{font-size:11px}
  .workflow-loop{display:flex;align-items:center;gap:14px;margin:17px 0 35px;padding:15px 20px;background:#10110f;color:#f3f1eb;border-radius:12px}
  .workflow-loop>span{font-size:23px;color:#d8ff45}.workflow-loop p{font-size:11px;line-height:1.6;color:#b8b6ae;margin:0}.workflow-loop strong{color:#fff}
  .workflow-bottom{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
  .workflow-bottom>div{display:flex;align-items:center;gap:9px;font-size:11px;font-weight:700}
  .workflow-bottom small{font-size:10px;font-weight:400;color:#77746d;margin-left:auto}
  .flow-key{width:8px;height:8px;border-radius:50%;flex:none}.flow-organic{background:#3859ff}.flow-paid{background:#d8a93b}.flow-convert{background:#8baa42}
  @media(max-width:900px){.workflow-track{grid-template-columns:repeat(2,1fr)}.workflow-step{min-height:220px}.workflow-bottom{grid-template-columns:1fr}.workflow-bottom small{margin-left:0}.workflow-heading{align-items:start;flex-direction:column}}
  @media(max-width:620px){.workflow-section{padding:85px 0}.workflow-track{grid-template-columns:1fr}.workflow-step{min-height:190px}.workflow-step h3{margin-top:25px}.workflow-heading h2{font-size:65px}.workflow-bottom>div{flex-wrap:wrap}.workflow-bottom small{flex-basis:100%;padding-left:17px}}
  `}</style>
  </>;
}
