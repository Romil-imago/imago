"use client";
import Link from "next/link";
import { useState } from "react";
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="container nav-wrap">
    <Link className="wordmark" href="/" aria-label="Imago home"><span className="wordmark-mark" aria-hidden="true" /><span>imago<span className="wordmark-period">.</span></span></Link>
    <button className="menu-toggle" type="button" aria-expanded={open} aria-label="Toggle navigation" onClick={() => setOpen(!open)}>☰</button>
    <nav className={`main-nav${open ? " nav-open" : ""}`} aria-label="Main navigation">
      <Link onClick={() => setOpen(false)} href="/#services">What we do</Link>
      <Link onClick={() => setOpen(false)} href="/#approach">Our method</Link>
      <Link onClick={() => setOpen(false)} href="/work">Work</Link>
      <Link onClick={() => setOpen(false)} href="/dashboard">Growth OS</Link>
    </nav>
    <Link className="button button-dark button-small nav-cta" href="/growth">Get a growth audit <span>↗</span></Link>
  </div></header>;
}
