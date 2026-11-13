import Link from "next/link";
import { SiteHeader } from "@/app/components/SiteHeader";

const steps = [
  {n:"01",title:"Strategy",detail:"ICP · positioning · offer",output:"A clear growth plan"},
  {n:"02",title:"Content",detail:"Hooks · creative · calendar",output:"Content that earns attention"},
  {n:"03",title:"Distribution",detail:"Organic social · paid ads",output:"Reach & qualified traffic"},
  {n:"04",title:"Conversion",detail:"Landing page · lead capture",output:"Leads with intent"},
  {n:"05",title:"Follow-up",detail:"CRM · nurture · booking",output:"Sales-ready conversations"},
  {n:"06",title:"Optimization",detail:"Attribution · testing · reporting",output:"Smarter next cycle"}
];
const services=[
  ["01","Social strategy","Positioning, audience research, channel plans and content systems."],
  ["02","Creative & content","Short-form video, static creative, copy and publishing."],
  ["03","Paid social","Campaign setup, testing, audience strategy and optimization."],
  ["04","Lead generation","Conversion pages, forms, CRM routing and follow-up."],
  ["05","Analytics","Tracking, performance reviews and actionable reporting."]
];
export default function HomePage(){return <><SiteHeader/><main>
<section className="hero-section"><div className="hero-orbit" aria-hidden="true"><span/></div><div className="hero-gridlines" aria-hidden="true"/>
<div className="container hero-content"><p className="eyebrow"><span className="eyebrow-dot"/> IMAGO · GROWTH STUDIO</p>
<div className="hero-title-wrap"><h1>Attention<br/>is only the<br/><em>beginning.</em></h1><div className="hero-aside"><span className="hero-aside-index">IM / 001</span><p>We turn social attention into a system for business growth.</p><Link className="button button-dark" href="/growth">Build your growth plan <span>↗</span></Link></div></div>
<div className="hero-bottom"><span>STRATEGY / CREATIVE / PERFORMANCE</span><span>SCROLL TO EXPLORE <b>↓</b></span></div></div></section>
<section className="intro-band"><div className="container intro-band-grid"><p className="eyebrow">NOT JUST POSTS.</p><h2>Marketing should do more than look busy.<br/><em>It should move business forward.</em></h2><p className="intro-note">Imago connects the creative, campaigns and conversion systems that make marketing measurable.</p></div></section>
<section className="services-section" id="services"><div className="container"><div className="section-heading"><div><p className="eyebrow">01 / WHAT WE DO</p><h2 className="section-title">One connected<br/><em>growth system.</em></h2></div><p className="small-note">Built around your goals, audience and economics.</p></div><div className="services-list">{services.map(s=><article className="service-row" key={s[0]}><span>{s[0]}</span><h3>{s[1]}</h3><p>{s[2]}</p><b>↗</b></article>)}</div></div></section>
<section className="workflow-section" id="how-it-works"><div className="container"><div className="workflow-heading"><div><p className="eyebrow">02 / THE IMAGO METHOD</p><h2>From scroll<br/><em>to sale.</em></h2></div><p className="workflow-lede">Here is how the work actually happens. Each stage creates the input for the next—and the data loops back into better decisions.</p></div>
<div className="flow-diagram"><div className="flow-rail"><span>THE CUSTOMER JOURNEY</span><span>IMAGO OPERATING SYSTEM ↻</span></div><div className="flow-steps">{steps.map((s,i)=><article className="flow-step" key={s.n}><div className="flow-step-head"><span>{s.n}</span><i>{i===5?"↻":"↗"}</i></div><h3>{s.title}</h3><p>{s.detail}</p><div className="flow-result"><small>DELIVERABLE</small><strong>{s.output}</strong></div>{i<5&&<div className="flow-connector" aria-hidden="true">→</div>}</article>)}</div><div className="flow-feedback"><span>↺</span><p><strong>Measure. Learn. Improve.</strong> Campaign insights inform new creative, audiences, offers and budget allocation—then the cycle starts again.</p></div></div>
<div className="channel-row"><div><i className="channel-dot organic"/> Organic social <small>Trust + community</small></div><div><i className="channel-dot paid"/> Paid social <small>Reach + demand</small></div><div><i className="channel-dot convert"/> Conversion <small>Leads + pipeline</small></div></div></div></section>
<section className="proof-section"><div className="container proof-grid"><p className="eyebrow">03 / BUILT FOR CLARITY</p><div><h2>Know what<br/><em>is working.</em></h2><p>Track the journey beyond likes: cost per lead, lead quality, booked calls and pipeline. No vanity dashboards. No invented results.</p><Link className="text-link" href="/dashboard">Explore the Growth OS ↗</Link></div><div className="proof-visual"><div className="proof-top"><span>CAMPAIGN SIGNALS</span><span className="live-dot">● SAMPLE DATA</span></div><div className="signal"><span>Reach</span><div><i style={{width:"88%"}}/></div><b>01</b></div><div className="signal"><span>Intent</span><div><i style={{width:"62%"}}/></div><b>02</b></div><div className="signal"><span>Leads</span><div><i style={{width:"45%"}}/></div><b>03</b></div><div className="signal"><span>Pipeline</span><div><i style={{width:"28%"}}/></div><b>04</b></div><small className="sample-note">Illustrative visual · not client performance</small></div></div></section>
<section className="cta-section"><div className="container cta-panel"><p className="eyebrow">04 / LET'S BUILD</p><h2>Make your next<br/><em>move count.</em></h2><div className="cta-bottom"><p>Start with your goals. We’ll map the opportunity, identify the bottleneck and propose a practical path forward.</p><Link className="button button-lime" href="/growth">Request a growth audit ↗</Link></div></div></section>
</main><footer className="site-footer"><div className="container footer-inner"><Link className="wordmark" href="/"><span className="wordmark-mark"/>imago<span className="wordmark-period">.</span></Link><span>BUILD WITH INTENT.</span><Link href="/dashboard">Growth OS ↗</Link><span>© {new Date().getFullYear()} Imago Studio</span></div></footer></>}
