"use client";

import Link from "next/link";
import { useState, type PointerEvent as ReactPointerEvent } from "react";

const signals = {
  brand: { name:"BRAND", index:"01", word:"BE", accent:"KNOWN.", note:"A point of view people can recognise.", detail:"Brand strategy · Identity systems · Art direction · Campaign concepts", hue:"#c5a6ff", shape:"orbit" },
  social: { name:"SOCIAL", index:"02", word:"MAKE", accent:"CULTURE.", note:"Ideas that belong in the feed—and beyond it.", detail:"Social strategy · Content systems · Reels · Community", hue:"#d9ff43", shape:"flower" },
  performance: { name:"PERFORMANCE", index:"03", word:"MOVE", accent:"INTENT.", note:"Attention is only the beginning.", detail:"Paid media · Meta & Google Ads · Testing · Measurement", hue:"#ff754b", shape:"rings" },
  digital: { name:"DIGITAL", index:"04", word:"MAKE", accent:"IT FLOW.", note:"Less friction. More forward.", detail:"Web experiences · Landing pages · SEO · Email · CRO", hue:"#79c9ff", shape:"grid" }
} as const;
type Signal = keyof typeof signals;

export default function HomePage(){
  const [active,setActive]=useState<Signal>("social");
  const [panel,setPanel]=useState<"menu"|"about"|"contact"|null>(null);
  const s=signals[active];
  function pointer(e:ReactPointerEvent<HTMLElement>){
    if(e.pointerType==="touch")return;
    const r=e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx",((e.clientX-r.left)/r.width*100)+"%");
    e.currentTarget.style.setProperty("--my",((e.clientY-r.top)/r.height*100)+"%");
  }
  return <main className="imago-canvas" style={{"--signal":s.hue} as React.CSSProperties} onPointerMove={pointer}>
    <div className="ic-grain" aria-hidden="true"/>
    <header className="ic-header">
      <Link href="/" className="ic-logo" aria-label="Imago home">imago<span>✳</span></Link>
      <div className="ic-status"><i/> INDEPENDENT CREATIVE / GROWTH STUDIO <span>— INDIA · EVERYWHERE</span></div>
      <button className="ic-menu-button" onClick={()=>setPanel(panel==="menu"?null:"menu")}>{panel==="menu"?"CLOSE −":"INDEX +"}</button>
    </header>

    <div className="ic-index" aria-hidden="true"><span>IM—001</span><span>AN INTERACTIVE POINT OF VIEW</span></div>
    <section className="ic-world" aria-label="Imago creative signal">
      <div className="ic-type" key={active}><small>WE MAKE THINGS</small><h1>{s.word}<br/><em>{s.accent}</em></h1><p>{s.note}</p></div>
      <div className={"ic-art ic-art--"+s.shape} aria-hidden="true">
        <div className="ic-art-core"><span>i</span></div><i className="ic-ring ic-ring-a"/><i className="ic-ring ic-ring-b"/><i className="ic-ring ic-ring-c"/>
        <span className="ic-art-label">FORM FOLLOWS FEELING<br/>FEELING MOVES PEOPLE</span><span className="ic-art-coordinate">FIELD / {s.index}</span>
      </div>
      <div className="ic-bottomline"><span>SELECT A SIGNAL TO CHANGE THE FIELD</span><span>{s.index} / 04</span></div>
    </section>

    <nav className="ic-signals" aria-label="Explore Imago disciplines">
      {(Object.keys(signals) as Signal[]).map(k=><button key={k} className={active===k?"ic-signal is-active":"ic-signal"} onClick={()=>setActive(k)} aria-pressed={active===k}><span>{signals[k].index}</span><b>{signals[k].name}</b><i>{active===k?"↗":"+"}</i></button>)}
    </nav>
    <div className="ic-detail" key={active+"detail"}><span>IN THIS FREQUENCY</span><p>{s.detail}</p></div>
    <footer className="ic-footer"><span>STRATEGY × CREATIVE × DISTRIBUTION</span><span>© IMAGO {new Date().getFullYear()}</span><a href="mailto:inquiries.imago@gmail.com">SAY HELLO ↗</a></footer>

    {panel&&<div className="ic-overlay" role="dialog" aria-modal="true" aria-label={panel==="menu"?"Site index":panel==="about"?"About Imago":"Contact Imago"}>
      <button className="ic-overlay-close" onClick={()=>setPanel(null)}>CLOSE ×</button>
      {panel==="menu"?<div className="ic-overlay-content"><small>THE INDEX / NAVIGATE BY INTENTION</small><button onClick={()=>setPanel("about")}>01 — WHAT IS IMAGO <span>↗</span></button><button onClick={()=>{setPanel(null);setActive("brand")}}>02 — BRAND <span>↗</span></button><button onClick={()=>{setPanel(null);setActive("social")}}>03 — SOCIAL <span>↗</span></button><button onClick={()=>{setPanel(null);setActive("performance")}}>04 — PERFORMANCE <span>↗</span></button><button onClick={()=>{setPanel(null);setActive("digital")}}>05 — DIGITAL <span>↗</span></button><button onClick={()=>setPanel("contact")}>06 — START SOMETHING <span>↗</span></button></div>:panel==="about"?<div className="ic-overlay-content ic-about"><small>THE SHORT VERSION</small><h2>Not another<br/><em>content factory.</em></h2><p>Imago connects brand thinking, creative production and performance into one clear system. We make work with a point of view—and give that work somewhere to go.</p><p className="ic-about-small">Independent by design. Curious by default. Built for brands with ambition.</p><button onClick={()=>setPanel("contact")}>MAKE A MOVE <span>↗</span></button></div>:<div className="ic-overlay-content ic-contact"><small>THE NEXT GOOD THING STARTS HERE</small><h2>Have a brief?<br/><em>Have a hunch?</em></h2><a href="mailto:inquiries.imago@gmail.com">INQUIRIES.IMAGO@GMAIL.COM ↗</a><p>Tell us what you’re building, changing or figuring out.</p></div>}
    </div>}
  </main>
}
