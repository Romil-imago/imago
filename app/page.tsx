import Link from "next/link";
import { SiteHeader } from "@/app/components/SiteHeader";

const pillars = [
  {n:"01",name:"Strategy",tag:"Find the signal",text:"Audience research, positioning and offers that give the right people a reason to care."},
  {n:"02",name:"Creative",tag:"Earn attention",text:"Social-first content and ad creative built around real customer motivations—not trends for trends' sake."},
  {n:"03",name:"Performance",tag:"Turn it into action",text:"Paid distribution, landing pages and lead capture designed to move interested people forward."}
];
const journey = [
  ["01","Understand","Your audience, offer and growth constraints."],
  ["02","Create","A clear message and creative worth stopping for."],
  ["03","Activate","Organic + paid distribution to reach the right people."],
  ["04","Convert","A focused path from click to qualified inquiry."],
  ["05","Improve","Learn from lead quality and campaign signals."]
];
export default function HomePage(){return <><SiteHeader/><main className="new-home">
 <section className="nh-hero">
  <div className="container nh-hero-inner">
   <div className="nh-kicker"><span /> INDEPENDENT GROWTH PARTNER <span className="nh-kicker-right">IMAGO / 2026</span></div>
   <div className="nh-hero-main">
    <div className="nh-hero-copy">
     <h1>Make your<br/>marketing <em>mean</em><br/>something.</h1>
     <p className="nh-lede">We help ambitious businesses turn social media into attention, demand and qualified leads—with strategy, creative and performance working together.</p>
     <div className="nh-actions">
      <Link className="button button-dark" href="/growth">Get a growth audit</Link>
      <a className="nh-link" href="#approach">See how we work ↓</a>
     </div>
    </div>
    <div className="nh-art" aria-label="Abstract Imago brand artwork">
     <div className="nh-art-ring ring-one" />
     <div className="nh-art-ring ring-two" />
     <div className="nh-art-core"><span>IM</span></div>
     <span className="nh-art-label">ATTENTION<br/>→ ACTION</span>
    </div>
   </div>
   <div className="nh-hero-foot"><span>STRATEGY · CREATIVE · PERFORMANCE</span><span>BUILT FOR BUSINESS, NOT BUSYWORK.</span></div>
  </div>
 </section>
<section className="nh-manifesto"><div className="container nh-manifesto-grid"><span className="nh-label">THE PROBLEM</span><h2>More content isn't the answer.<br/><em>A better system is.</em></h2><p>Posting consistently is not a growth strategy by itself. Your message, creative, distribution and conversion experience need to work as one—so attention has somewhere useful to go.</p></div></section>
 <section className="nh-pillars" id="services">
  <div className="container">
   <div className="nh-section-top">
    <span className="nh-label">WHAT IMAGO DOES / 01</span>
    <p>One partner. Three connected disciplines.</p>
   </div>
   <div className="nh-pillar-grid">
    {pillars.map((p) => (
     <article className="nh-pillar" key={p.n}>
      <span className="nh-number">{p.n}</span>
      <span className="nh-pillar-tag">{p.tag}</span>
      <h3>{p.name}</h3>
      <p>{p.text}</p>
      <span className="nh-pillar-arrow">↗</span>
     </article>
    ))}
   </div>
  </div>
 </section>
 <section className="nh-system" id="approach">
  <div className="container">
   <div className="nh-system-head">
    <span className="nh-label">THE GROWTH LOOP / 02</span>
    <h2>From first glance<br/>to <em>next step.</em></h2>
    <p>Every campaign should have a job. Here's the simple system behind the work—and how we keep making it better.</p>
   </div>
   <div className="nh-journey">
    {journey.map((j, i) => (
     <article className="nh-journey-step" key={j[0]}>
      <span>{j[0]}</span><h3>{j[1]}</h3><p>{j[2]}</p>
      {i < journey.length - 1 && <b aria-hidden="true">→</b>}
     </article>
    ))}
   </div>
   <div className="nh-loop-note"><span>↻</span><p><strong>Then we learn and repeat.</strong> Lead quality and campaign signals shape the next round of strategy, creative and spend.</p></div>
   <div className="nh-path"><span>ORGANIC SOCIAL</span><i>+</i><span>PAID MEDIA</span><i>→</i><span className="nh-path-result">QUALIFIED DEMAND</span></div>
  </div>
 </section>
 <section className="nh-fit">
  <div className="container nh-fit-grid">
   <span className="nh-label">A GOOD FIT / 03</span>
   <div>
    <h2>For teams ready<br/>to <em>grow with intent.</em></h2>
    <p>Imago works best with businesses that have a real offer, a clear ambition and the willingness to learn from the market. We bring the marketing system; your team brings the product expertise and closes the conversations.</p>
    <div className="nh-fit-list"><span>✓ Clear offer or service</span><span>✓ Growth-minded team</span><span>✓ Ready to measure outcomes</span></div>
   </div>
  </div>
 </section>
 <section className="nh-trust">
  <div className="container nh-trust-grid">
   <span className="nh-label">HOW WE MEASURE / 04</span>
   <div>
    <h2>Clarity over<br/><em>vanity metrics.</em></h2>
    <p>We look beyond likes and impressions: qualified inquiries, cost per lead, booked conversations and pipeline—where tracking is available. We don't publish made-up case studies or promise guaranteed results.</p>
    <Link className="nh-link" href="/dashboard">See the sample Growth OS ↗</Link>
   </div>
   <div className="nh-metric-card">
    <span>THE SCORECARD</span>
    {["Reach","Engagement","Qualified leads","Booked calls","Pipeline"].map((m, i) => (
     <div key={m}><b>0{i+1}</b><strong>{m}</strong><span>TRACK · LEARN · IMPROVE</span></div>
    ))}
    <small>Framework preview · not client data</small>
   </div>
  </div>
 </section>
 <section className="nh-cta">
  <div className="container nh-cta-inner">
   <span className="nh-label">YOUR NEXT MOVE / 05</span>
   <h2>Let's find your<br/><em>growth gap.</em></h2>
   <div><p>Tell us where you want to go. We'll start with the opportunity, not a sales script.</p><Link className="button button-lime" href="/growth">Start with a growth audit ↗</Link></div>
  </div>
 </section>
 </main>
 <footer className="site-footer">
  <div className="container footer-inner">
   <Link className="wordmark" href="/"><span className="wordmark-mark"/>imago<span className="wordmark-period">.</span></Link>
   <span>BUILD WITH INTENT.</span><Link href="/dashboard">Growth OS ↗</Link><span>© {new Date().getFullYear()} Imago Studio</span>
  </div>
 </footer>
 </>}
