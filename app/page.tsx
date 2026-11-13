"use client";
import Link from "next/link";
import {useEffect,useState} from "react";

const words=["UNIGNORABLE.","UNEXPECTED.","UNMISTAKABLE."];
const projects=[
 {id:"01",name:"LOUDER THAN LOGO",type:"SOCIAL CAMPAIGN",tone:"pink",line:"A little less polished. A lot more personality."},
 {id:"02",name:"THE DAILY REMIX",type:"CONTENT SYSTEM",tone:"blue",line:"Built for the scroll. Made for the real world."},
 {id:"03",name:"GOOD MOOD CLUB",type:"BRAND WORLD",tone:"cream",line:"A universe people want to belong to."}
];
export default function Home(){
 const [word,setWord]=useState(0),[menu,setMenu]=useState(false);
 useEffect(()=>{const t=setInterval(()=>setWord(v=>(v+1)%words.length),1900);return()=>clearInterval(t)},[]);
 return <main className="fresh">
 <header className="fresh-nav"><Link href="/" className="fresh-logo">imago<span>✳</span></Link><span className="fresh-nav-note">INDEPENDENT SOCIAL CREATIVE STUDIO · INDIA / EVERYWHERE</span><button onClick={()=>setMenu(!menu)}>{menu?"CLOSE −":"MENU +"}</button></header>
 {menu&&<nav className="fresh-menu"><Link href="/work">WORK ↗</Link><Link href="/services">WHAT WE DO ↗</Link><Link href="/growth">LET’S TALK ↗</Link></nav>}
 <section className="fresh-hero"><div className="fresh-kicker"><span>WE MAKE BRANDS FEEL LIKE SOMETHING.</span><span>SCROLL TO GET INTO IT ↓</span></div><div className="fresh-hero-art" aria-hidden="true"><div className="fresh-sun"/><div className="fresh-orbit orbit-one"/><div className="fresh-orbit orbit-two"/><span className="fresh-stamp">SOCIAL<br/>IS THE<br/>STAGE</span><span className="fresh-side">STRATEGY × CULTURE × CREATIVE</span></div><h1>MAKE IT<br/><i>{words[word]}</i></h1><div className="fresh-hero-foot"><p>We turn sharp thinking into social-first creative people <b>stop for, share, and remember.</b></p><Link href="/work">SEE WHAT WE MAKE <span>↘</span></Link></div><div className="fresh-scroll">01 — THE INTRO</div></section>
 <div className="fresh-ticker"><div>IDEAS WITH A PULSE ✳ CONTENT WITH A POINT OF VIEW ✳ CULTURE, NOT CONTENT CALENDARS ✳ IDEAS WITH A PULSE ✳ CONTENT WITH A POINT OF VIEW ✳</div></div>
 <section className="fresh-statement"><span className="fresh-label">02 / THE REASON WE EXIST</span><h2>The internet doesn’t<br/>need <em>more posts.</em><br/>It needs <span>more feeling.</span></h2><p>We find the interesting bit hiding in your brand—and turn it into work with a voice, a visual world, and a reason to exist in someone’s feed.</p><div className="fresh-scribble">MAKE<br/>SOME<br/>MEANING.</div></section>
 <section className="fresh-work"><div className="fresh-section-head"><span className="fresh-label">03 / LITTLE WORLDS, BIG ENERGY</span><Link href="/work">THE WORK INDEX ↗</Link></div><div className="fresh-projects">{projects.map(p=><Link href="/work" className={"fresh-project "+p.tone} key={p.id}><div className="fresh-project-art"><span>{p.id} / IMAGO STUDY</span><b>{p.name.split(" ").map((x,i)=><ReactWord key={i} word={x}/>)}</b><i className="fresh-project-shape"/></div><div className="fresh-project-caption"><span>{p.type}</span><p>{p.line}</p><b>↗</b></div></Link>)}</div><small className="fresh-disclaimer">ORIGINAL SELF-INITIATED CREATIVE STUDIES · NOT CLIENT COMMISSIONS</small></section>
 <section className="fresh-practice"><span className="fresh-label">04 / OUR PRACTICE</span><h2>Think sharp.<br/><em>Make strange.</em><br/>Make it matter.</h2><div className="fresh-practice-list"><Link href="/services"><span>01</span><b>STRATEGY & SOCIAL DNA</b><i>↗</i></Link><Link href="/services"><span>02</span><b>CONTENT & CAMPAIGNS</b><i>↗</i></Link><Link href="/services"><span>03</span><b>COMMUNITY & CULTURE</b><i>↗</i></Link><Link href="/services"><span>04</span><b>CREATIVE PERFORMANCE</b><i>↗</i></Link></div></section>
 <section className="fresh-cta"><span>05 / YOUR MOVE</span><h2>GOT A BRAND?<br/><em>LET’S MAKE<br/>IT FEEL ALIVE.</em></h2><Link href="/growth">START A CONVERSATION ↗</Link><footer><Link href="/">imago✳</Link><span>STRATEGY · SOCIAL · CREATIVE</span><span>© 2026</span></footer></section>
 </main>
}
function ReactWord({word}:{word:string}){return <span>{word} </span>}
