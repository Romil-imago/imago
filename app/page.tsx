"use client";
import { useEffect, useRef, useState } from "react";

const capabilities = [
  { n:"01", title:"Brand worlds", copy:"Identity systems and digital places with a point of view." },
  { n:"02", title:"Digital products", copy:"Useful interfaces, platforms and experiences people return to." },
  { n:"03", title:"Intelligent tools", copy:"AI and automation that make work feel lighter." },
];
const experiments = [
  { n:"EXP—01", name:"The living identity", type:"Brand / Motion", tone:"mint" },
  { n:"EXP—02", name:"A calmer commerce", type:"Product / UX", tone:"orange" },
  { n:"EXP—03", name:"Signals, surfaced", type:"AI / Interface", tone:"blue" },
];
export default function Home(){
  const [menu,setMenu]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  const root=useRef<HTMLElement>(null);
  useEffect(()=>{
    const onScroll=()=>setScrolled(window.scrollY>24);
    window.addEventListener("scroll",onScroll,{passive:true});onScroll();
    const els=document.querySelectorAll("[data-reveal]");
    const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("is-in");io.unobserve(e.target)}}),{threshold:.12});
    els.forEach(el=>io.observe(el));
    return()=>{window.removeEventListener("scroll",onScroll);io.disconnect()};
  },[]);
  return <main className="scratch" ref={root}>
    <header className={"s-nav "+(scrolled?"is-scrolled":"")}><a className="s-wordmark" href="#top">IMAGO<span>®</span></a><span className="s-nav-center">INDEPENDENT DIGITAL PRACTICE · INDIA</span><button className="s-menu-btn" onClick={()=>setMenu(v=>!v)}>{menu?"CLOSE":"INDEX"} <b>{menu?"−":"+"}</b></button></header>
    {menu&&<div className="s-menu-panel"><a href="#thinking" onClick={()=>setMenu(false)}>Point of view <i>01</i></a><a href="#capabilities" onClick={()=>setMenu(false)}>What we do <i>02</i></a><a href="#lab" onClick={()=>setMenu(false)}>Experiments <i>03</i></a><a href="#contact" onClick={()=>setMenu(false)}>Say hello <i>↗</i></a></div>}
    <section className="s-hero" id="top">
      <div className="s-hero-top"><span><i className="s-live"/> DESIGN × TECHNOLOGY</span><span>MADE FOR THE NEXT</span></div>
      <div className="s-hero-grid">
        <h1>Make<br/><span>meaning</span><br/>move<span className="s-period">.</span></h1>
        <div className="s-stage" aria-label="Animated abstract Imago artwork"><div className="s-sun"/><div className="s-loop loop-one"/><div className="s-loop loop-two"/><div className="s-loop loop-three"/><div className="s-stage-cross">I<br/>M</div><span className="s-stage-tag">IMAGO / 26</span></div>
      </div>
      <div className="s-hero-bottom"><p>We shape <strong>brands, digital products and intelligent experiences</strong> for people building what comes next.</p><a href="#thinking">SCROLL TO EXPLORE <span>↓</span></a></div>
      <div className="s-marquee" aria-hidden="true"><div>IDEAS INTO EXPERIENCE · EXPERIENCE INTO IMPACT · IDEAS INTO EXPERIENCE · EXPERIENCE INTO IMPACT ·</div></div>
    </section>
    <section className="s-thinking" id="thinking"><div className="s-eyebrow" data-reveal>01 — OUR POINT OF VIEW</div><div className="s-thinking-content" data-reveal><h2>Less noise.<br/><em>More meaning.</em></h2><p>Good digital work isn’t decoration. It’s a clear idea, made useful—through design, technology and a little bit of courage.</p><span className="s-big-mark">↗</span></div></section>
    <section className="s-capabilities" id="capabilities"><div className="s-section-heading" data-reveal><span className="s-eyebrow">02 — WHAT WE DO</span><h2>Build the<br/><em>right thing.</em></h2><p>From a first spark to a real thing in the world.</p></div><div className="s-cap-list">{capabilities.map(c=><article key={c.n} data-reveal><span>{c.n}</span><h3>{c.title}</h3><p>{c.copy}</p><b>↗</b></article>)}</div></section>
    <section className="s-lab" id="lab"><div className="s-lab-head" data-reveal><span className="s-eyebrow">03 — THE PLAYGROUND</span><h2>Ideas in<br/><em>progress.</em></h2><span className="s-lab-note">A few directions we love exploring.<br/>Concept studies—not client case studies.</span></div><div className="s-experiments">{experiments.map((x,i)=><article className={"s-experiment "+x.tone} key={x.n} data-reveal><div className="s-ex-art"><span>{x.n}</span><div className="s-ex-shape"/><b>↗</b></div><div className="s-ex-caption"><h3>{x.name}</h3><span>{x.type}</span></div></article>)}</div></section>
    <section className="s-manifesto"><span className="s-eyebrow" data-reveal>04 — HOW WE WORK</span><h2 data-reveal>Curious minds.<br/><em>Close collaboration.</em><br/>Work that works.</h2><div className="s-manifesto-foot" data-reveal><p>Small by design. Senior hands on every detail. We bring strategy, design and engineering into one room—and stay there until it feels right.</p><span>THOUGHT → FORM → FUNCTION</span></div></section>
    <section className="s-contact" id="contact"><span className="s-eyebrow">05 — YOUR TURN</span><h2>Have a good<br/><em>idea?</em></h2><a className="s-contact-link" href="mailto:inquiries.imago@gmail.com">LET’S TALK <b>↗</b></a><footer><a className="s-wordmark" href="#top">IMAGO<span>®</span></a><span>INDEPENDENT BY DESIGN · © 2026</span><a href="#top">BACK TO TOP ↑</a></footer></section>
  </main>;
}