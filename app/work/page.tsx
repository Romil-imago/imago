import Link from "next/link";
import { SiteHeader } from "@/app/components/SiteHeader";

const concepts = [
 {n:"01",type:"HOSPITALITY · CONCEPT",name:"Make the weekend feel closer.",desc:"A social-first launch direction for a boutique stay: sell the feeling, then make booking frictionless.",tone:"work-warm",mark:"SLOW\nMORNINGS",foot:"STAY A LITTLE LONGER"},
 {n:"02",type:"B2B / SAAS · CONCEPT",name:"Turn complexity into clarity.",desc:"A founder-led content system that makes a complicated product easier to understand—and easier to trust.",tone:"work-blue",mark:"LESS\nFRICTION",foot:"PRODUCT, IN PLAIN ENGLISH"},
 {n:"03",type:"WELLNESS · CONCEPT",name:"A ritual worth returning to.",desc:"A premium wellness campaign built around habit, human stories and a clear next step.",tone:"work-lime",mark:"FEEL\nTHE SHIFT",foot:"SMALL RITUAL. BIG RESET."}
];
export default function WorkPage(){return <><SiteHeader/><main className="work-page">
 <section className="work-hero"><div className="container"><span className="nh-label">IMAGO / WORK & IDEAS</span><h1>Good work<br/>makes you <em>feel.</em></h1><p>Strategy gives it direction. Creative earns attention. A thoughtful journey turns that attention into action.</p><span className="work-disclaimer">CONCEPT LAB — THE EXPLORATIONS BELOW ARE SPECULATIVE, NOT CLIENT CAMPAIGNS.</span></div></section>
 <section className="work-grid-section"><div className="container"><div className="work-grid">
 {concepts.map(c=><article className="work-card" key={c.n}><div className={`work-art ${c.tone}`}><span className="work-art-index">{c.n} / IMAGO CONCEPT</span><div className="work-art-shape"/><strong>{c.mark.split("\n").map((x,i)=><span key={i}>{x}</span>)}</strong><small>{c.foot}</small></div><div className="work-card-copy"><span>{c.type}</span><h2>{c.name}</h2><p>{c.desc}</p><Link href="/growth">Explore a direction ↗</Link></div></article>)}
 </div></div></section>
 <section className="work-process"><div className="container"><span className="nh-label">HOW A BRIEF BECOMES A CAMPAIGN</span><h2>From the first<br/>conversation to <em>launch.</em></h2><div className="work-process-grid">{[["01","Discover","We align on your offer, audience, goals and constraints."],["02","Direction","We define the message, creative territory and channel roles."],["03","Build","We produce content, campaign assets and the conversion path."],["04","Launch & learn","We activate, review signals and refine what comes next."]].map(x=><article key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></div></section>
 <section className="work-bottom"><div className="container"><span className="nh-label">YOUR BRAND, NEXT</span><h2>Let's make something<br/><em>worth stopping for.</em></h2><Link className="button button-lime" href="/growth">Start a growth audit ↗</Link></div></section>
 </main><footer className="site-footer"><div className="container footer-inner"><Link className="wordmark" href="/"><span className="wordmark-mark"/>imago<span className="wordmark-period">.</span></Link><span>BUILD WITH INTENT.</span><Link href="/dashboard">Growth OS ↗</Link><span>© {new Date().getFullYear()} Imago Studio</span></div></footer></>}
