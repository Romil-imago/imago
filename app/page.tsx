"use client";
import Link from "next/link";
import { useState } from "react";

const services = [
  ["01", "Digital experiences", "Websites and interfaces that make complex ideas feel effortless."],
  ["02", "Software & systems", "Thoughtful products, platforms and tools built around real needs."],
  ["03", "Intelligent products", "Useful AI and automation that fit into the way people work."],
];
const projects = [
  ["01 / DIGITAL", "A clearer way to move", "Product experience", "lime"],
  ["02 / SYSTEMS", "Less friction. More flow.", "Workflow platform", "blue"],
  ["03 / INTELLIGENCE", "Make the signal useful", "AI experience", "violet"],
];
export default function Home() {
  const [menu,setMenu] = useState(false);
  return <main className="imago-new">
    <header className="in-nav"><Link href="/" className="in-logo">imago<span>®</span></Link><span className="in-nav-note">INDEPENDENT DIGITAL STUDIO / INDIA</span><button onClick={()=>setMenu(!menu)}>{menu?"CLOSE −":"MENU +"}</button></header>
    {menu&&<nav className="in-menu"><a href="#services" onClick={()=>setMenu(false)}>Services ↘</a><a href="#work" onClick={()=>setMenu(false)}>Selected work ↘</a><a href="#about" onClick={()=>setMenu(false)}>Approach ↘</a><a href="#contact" onClick={()=>setMenu(false)}>Contact ↘</a></nav>}
    <section className="in-hero">
      <div className="in-kicker"><i/> DIGITAL STUDIO FOR WHAT’S NEXT <span>EST. 2026</span></div>
      <div className="in-hero-main"><h1>Digital,<br/><em>with intent.</em></h1><div className="in-visual" aria-hidden="true"><div className="in-orb"/><div className="in-ring ring-a"/><div className="in-ring ring-b"/><span className="in-visual-label">IDEAS → REALITY</span><span className="in-visual-index">IM / 001</span></div></div>
      <div className="in-hero-foot"><p>We turn ambitious ideas into <strong>digital experiences, software and intelligent systems</strong> that move businesses forward.</p><a href="#services">EXPLORE WHAT WE DO <b>↓</b></a></div>
      <div className="in-scroll">SCROLL TO DISCOVER <span>↘</span></div>
    </section>
    <section className="in-intro" id="about"><div className="in-label">01 / THE POINT</div><div><h2>Good technology<br/>should feel <em>obvious.</em></h2><p>Behind every useful digital thing is a clear thought. We bring strategy, design and engineering into one conversation—then build the thing that should exist.</p></div><div className="in-intro-mark">i<span>m</span></div></section>
    <section className="in-services" id="services"><div className="in-section-head"><div className="in-label">02 / CAPABILITIES</div><p>From first thought<br/>to shipped product.</p></div><div className="in-service-list">{services.map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><b>↗</b></article>)}</div></section>
    <section className="in-work" id="work"><div className="in-section-head"><div className="in-label">03 / SELECTED DIRECTIONS</div><p>Ideas made tangible.</p></div><div className="in-projects">{projects.map(([n,t,d,c])=><article className={"in-project "+c} key={n}><div className="in-project-art"><span>{n}</span><div className="in-art-core"/><b>↗</b></div><div className="in-project-meta"><h3>{t}</h3><span>{d}</span></div></article>)}</div><p className="in-work-note">CONCEPTUAL DIRECTIONS · NOT CLIENT CASE STUDIES</p></section>
    <section className="in-approach"><div className="in-label">04 / HOW WE THINK</div><h2>Small teams.<br/><em>Clear thinking.</em><br/>Real outcomes.</h2><div className="in-approach-copy"><p>No layers of hand-offs. No technology for technology’s sake. Just a focused team connecting the dots between what you need, what people experience, and what gets built.</p><a href="#contact">A LITTLE MORE ABOUT US ↗</a></div></section>
    <section className="in-contact" id="contact"><div className="in-label">05 / HAVE A GOOD ONE IN MIND?</div><h2>Let’s make<br/><em>it matter.</em></h2><a className="in-contact-link" href="mailto:inquiries.imago@gmail.com">INQUIRIES.IMAGO@GMAIL.COM ↗</a><footer><Link href="/" className="in-logo">imago<span>®</span></Link><span>INDEPENDENT BY DESIGN.</span><span>© 2026 IMAGO</span></footer></section>
  </main>;
}
