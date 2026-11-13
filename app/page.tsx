"use client";

import Link from "next/link";
import { useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from "react";

const lenses = {
  brand: {
    label: "01 / BRAND",
    title: <>Give the<br />brand a <em>pulse.</em></>,
    copy: "Positioning, identity and campaigns with a point of view. Build a world people can recognise before they read the logo.",
    output: "Positioning · Identity · Art direction · Campaign worlds",
    color: "violet"
  },
  social: {
    label: "02 / SOCIAL",
    title: <>Make the<br />scroll <em>stop.</em></>,
    copy: "Platform-native content that earns attention, gives people a reason to care and keeps the brand unmistakable.",
    output: "Instagram · TikTok · YouTube · LinkedIn · Facebook",
    color: "acid"
  },
  performance: {
    label: "03 / PERFORMANCE",
    title: <>Turn the<br />signal into <em>action.</em></>,
    copy: "Paid media with a job to do. Creative, targeting, landing experiences and measurement working as one system.",
    output: "Meta Ads · Google Ads · TikTok Ads · LinkedIn Ads",
    color: "orange"
  },
  digital: {
    label: "04 / DIGITAL",
    title: <>Make the<br />next move <em>easy.</em></>,
    copy: "Digital experiences that feel considered and remove friction between discovery, decision and conversion.",
    output: "Websites · Landing pages · SEO · Email · CRO",
    color: "blue"
  }
} as const;

type Lens = keyof typeof lenses;

const studies = [
  { id: "A", title: "SCROLL CULTURE", platform: "INSTAGRAM / REELS", format: "9:16", style: "reel", note: "A visual language built to move at feed speed." },
  { id: "B", title: "THE BIG IDEA", platform: "META / PAID SOCIAL", format: "1:1", style: "poster", note: "One sharp message, built to earn the next second." },
  { id: "C", title: "POINT OF VIEW", platform: "LINKEDIN / YOUTUBE", format: "16:9", style: "frame", note: "A story system that makes expertise worth watching." }
];

export default function HomePage() {
  const [active, setActive] = useState<Lens>("social");
  const [menuOpen, setMenuOpen] = useState(false);
  const [pointer, setPointer] = useState({ x: 50, y: 50 });
  const current = lenses[active];
  const rootStyle = {
    "--pointer-x": pointer.x + "%",
    "--pointer-y": pointer.y + "%"
  } as CSSProperties;

  function moveArt(event: ReactPointerEvent<HTMLElement>) {
    if (event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: Math.max(0, Math.min(100, ((event.clientX - bounds.left) / bounds.width) * 100)),
      y: Math.max(0, Math.min(100, ((event.clientY - bounds.top) / bounds.height) * 100))
    });
  }

  return (
    <main className={`imago-art imago-art--${current.color}`} style={rootStyle} onPointerMove={moveArt}>
      <header className="ia-nav">
        <Link href="/" className="ia-brand" aria-label="Imago home"><span className="ia-brand-mark">✳</span><span>imago<span className="ia-period">.</span></span></Link>
        <div className="ia-nav-center"><span>INDEPENDENT CREATIVE / GROWTH STUDIO</span><i /></div>
        <nav className={menuOpen ? "ia-links ia-links--open" : "ia-links"} aria-label="Main navigation">
          <Link href="/services">CAPABILITIES</Link>
          <Link href="/work">FIELD NOTES</Link>
          <a href="#channels" onClick={() => setMenuOpen(false)}>CHANNELS</a>
          <Link className="ia-nav-contact" href="/growth">START A PROJECT <span>↗</span></Link>
        </nav>
        <button className="ia-menu" type="button" aria-expanded={menuOpen} aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "CLOSE −" : "MENU +"}</button>
      </header>

      <section className="ia-stage" id="top" aria-labelledby="ia-title">
        <div className="ia-stage-grid" aria-hidden="true" />
        <div className="ia-coordinate ia-coordinate--left">23° 02′ N&nbsp; / &nbsp;72° 34′ E<br />IDEAS IN MOTION</div>
        <div className="ia-coordinate ia-coordinate--right">FIG. 001 — IMAGO SIGNAL OBJECT<br />MOVE YOUR CURSOR TO DISTURB THE FIELD</div>

        <div className="ia-stage-copy">
          <p className="ia-overline"><span className="ia-live-dot" /> STRATEGY × CREATIVE × DISTRIBUTION</p>
          <h1 id="ia-title" key={active}>{current.title}</h1>
          <p className="ia-hero-description">{current.copy}</p>
          <div className="ia-hero-actions">
            <Link href="/growth" className="ia-button">LET’S MAKE SOMETHING <span>↗</span></Link>
            <a href="#signal" className="ia-text-link">EXPLORE THE STUDIO <span>↓</span></a>
          </div>
        </div>

        <div className="ia-object-wrap" aria-hidden="true">
          <div className="ia-object-halo" />
          <div className="ia-object-shadow" />
          <div className="ia-orbit ia-orbit--one"><i /></div>
          <div className="ia-orbit ia-orbit--two"><i /></div>
          <div className="ia-orbit ia-orbit--three"><i /></div>
          <div className="ia-object">
            <div className="ia-object-surface"><span>IM</span></div>
            <div className="ia-object-cut" />
            <div className="ia-object-glint" />
          </div>
          <div className="ia-object-cross ia-object-cross--one" />
          <div className="ia-object-cross ia-object-cross--two" />
          <div className="ia-object-caption">FORM / FEEL / FUNCTION<br /><b>THE WORK IS THE SIGNAL.</b></div>
          <span className="ia-floating-tag ia-floating-tag--a">IDEAS<br />WITH INTENT</span>
          <span className="ia-floating-tag ia-floating-tag--b">NO TEMPLATE<br />ENERGY</span>
          <span className="ia-floating-tag ia-floating-tag--c">EST. FOR<br />WHAT’S NEXT</span>
        </div>

        <div className="ia-lens-control" aria-label="Explore Imago disciplines">
          <div className="ia-lens-label"><span>CHOOSE YOUR FREQUENCY</span><span>0{Object.keys(lenses).indexOf(active) + 1} / 04</span></div>
          <div className="ia-lens-buttons">
            {(Object.keys(lenses) as Lens[]).map((key) => (
              <button key={key} type="button" className={active === key ? "ia-lens ia-lens--active" : "ia-lens"} onClick={() => setActive(key)} aria-pressed={active === key}>
                <span>{lenses[key].label}</span><b>{active === key ? "↗" : "+"}</b>
              </button>
            ))}
          </div>
          <p className="ia-lens-output">{current.output}</p>
        </div>

        <div className="ia-stage-index"><span>SCROLL TO EXPLORE</span><span>01 — 04</span></div>
        <div className="ia-scroll-line" aria-hidden="true"><i /></div>
      </section>

      <div className="ia-marquee" aria-hidden="true"><div className="ia-marquee-track">{Array.from({length: 4}).map((_, i) => <span key={i}>MAKE CULTURE <b>✳</b> MOVE PEOPLE <b>✳</b> BUILD MOMENTUM <b>✳</b> STAY UNEXPECTED <b>✳</b></span>)}</div></div>

      <section className="ia-manifesto" id="signal">
        <div className="ia-manifesto-stamp">IMAGO / A POINT OF VIEW<br />NOT A CONTENT FACTORY</div>
        <div className="ia-manifesto-main">
          <p className="ia-kicker">THE SHORT VERSION / 001</p>
          <h2>We don’t make<br />more <span>noise.</span><br />We make it <em>mean something.</em></h2>
          <div className="ia-manifesto-foot"><p>Imago brings brand thinking, creative production and performance together. Not as separate departments. As one connected idea—from the first impression to the next action.</p><span>LESS FORMULA.<br />MORE FEELING.<br />BETTER INTENT.</span></div>
        </div>
        <div className="ia-manifesto-mark" aria-hidden="true">✳</div>
      </section>

      <section className="ia-channel-world" id="channels">
        <div className="ia-channel-heading">
          <div><p className="ia-kicker">THE DISTRIBUTION FIELD / 002</p><h2>Same soul.<br /><em>Different stages.</em></h2></div>
          <p>We don’t resize one idea and call it a strategy. Each platform has its own language, pace and reason to exist.</p>
        </div>
        <div className="ia-platform-cloud" aria-label="Platforms supported by Imago">
          <span className="ia-platform ia-platform--instagram">INSTAGRAM <b>↗</b><small>REELS / STORIES / FEED</small></span>
          <span className="ia-platform ia-platform--tiktok">TikTok <b>↗</b><small>SHORT-FORM / SPARK ADS</small></span>
          <span className="ia-platform ia-platform--meta">META ADS <b>↗</b><small>PAID SOCIAL / LEADS</small></span>
          <span className="ia-platform ia-platform--linkedin">LinkedIn <b>↗</b><small>B2B / THOUGHT LEADERSHIP</small></span>
          <span className="ia-platform ia-platform--youtube">YOUTUBE <b>↗</b><small>SHORTS / VIDEO</small></span>
          <span className="ia-platform ia-platform--google">GOOGLE <b>↗</b><small>SEARCH / DISPLAY</small></span>
          <span className="ia-platform ia-platform--email">EMAIL + CRM <b>↗</b><small>AUTOMATION / RETENTION</small></span>
        </div>
        <div className="ia-platform-foot"><span>ONE BRAND, MANY CONTEXTS.</span><span>BUILT FOR THE MEDIUM — NEVER JUST THE FORMAT.</span></div>
      </section>

      <section className="ia-studies">
        <div className="ia-studies-head"><p className="ia-kicker">VISUAL EXPERIMENTS / 003</p><div><h2>Signals from<br /><em>the imagination.</em></h2><p>Speculative art-direction studies. Not client campaigns. A look at how an idea can take shape when the medium is part of the concept.</p></div></div>
        <div className="ia-study-grid">
          {studies.map((study) => (
            <article className={`ia-study ia-study--${study.style}`} key={study.id}>
              <div className="ia-study-meta"><span>STUDY / {study.id}</span><span>{study.format}</span></div>
              <div className="ia-study-art">
                {study.style === "reel" && <><div className="ia-reel-sun" /><div className="ia-reel-type">FEEL<br /><i>THE</i><br />FUTURE.</div><div className="ia-reel-pill">PLAY / PAUSE / REPEAT</div><div className="ia-reel-orbit" /></>}
                {study.style === "poster" && <><div className="ia-poster-type">DON’T<br /><em>BLEND.</em></div><div className="ia-poster-stamp">MAKE<br />A MARK</div><div className="ia-poster-bar" /></>}
                {study.style === "frame" && <><div className="ia-frame-top">A BETTER QUESTION / 00:24</div><div className="ia-frame-object"><span>?</span></div><div className="ia-frame-title">WHAT IF<br />WE <em>SHIFTED?</em></div><div className="ia-frame-bottom">IDEAS ARE A BUSINESS TOOL.</div></>}
              </div>
              <div className="ia-study-info"><div><span>{study.platform}</span><h3>{study.title}</h3><p>{study.note}</p></div><b>↗</b></div>
            </article>
          ))}
        </div>
        <div className="ia-study-disclaimer"><span>ART DIRECTION / CONCEPT EXPLORATIONS</span><span>NO BORROWED CASE STUDIES. NO INVENTED NUMBERS.</span></div>
      </section>

      <section className="ia-engine">
        <div className="ia-engine-intro"><p className="ia-kicker">THE ENGINE / 004</p><h2>Creative<br />with a <em>job.</em></h2><p>Good-looking work gets attention. Good thinking gives that attention somewhere to go.</p></div>
        <div className="ia-engine-orbit" aria-hidden="true"><div className="ia-engine-ring ia-engine-ring--a" /><div className="ia-engine-ring ia-engine-ring--b" /><div className="ia-engine-core">IDEA<br /><span>→</span><br />IMPACT</div><i className="ia-engine-node ia-engine-node--a">01</i><i className="ia-engine-node ia-engine-node--b">02</i><i className="ia-engine-node ia-engine-node--c">03</i></div>
        <div className="ia-engine-steps">
          <article><span>01 / ATTENTION</span><h3>Earn the pause.</h3><p>Reach, impressions, video views and the signals that tell us a story is landing.</p></article>
          <article><span>02 / INTENT</span><h3>Find the signal.</h3><p>Engagement, clicks, qualified leads and the actions that reveal real interest.</p></article>
          <article><span>03 / ACTION</span><h3>Make it count.</h3><p>Conversions, cost per acquisition and return on ad spend—where tracking supports it.</p></article>
        </div>
        <p className="ia-engine-note">No guaranteed outcomes or made-up dashboards. We agree what success means, instrument what can be measured, then improve from evidence.</p>
      </section>

      <section className="ia-audience">
        <div className="ia-audience-side"><span>05 / OPEN BY DESIGN</span><span>NO INDUSTRY BOXES</span></div>
        <div><p className="ia-kicker">A GOOD FIT FOR / 005</p><h2>Ambition is<br />the common <em>ground.</em></h2><p>Startups, consumer brands, SaaS, retail, hospitality, healthcare, real estate, professional services and teams building something that deserves to be noticed.</p><div className="ia-audience-tags"><span>EARLY IDEAS</span><span>GROWING BRANDS</span><span>NEW MARKETS</span><span>FRESH THINKING</span></div></div>
        <div className="ia-audience-glyph" aria-hidden="true">↗</div>
      </section>

      <section className="ia-contact" id="contact">
        <div className="ia-contact-top"><span>06 / YOUR TURN</span><span>THE NEXT GOOD THING STARTS SOMEWHERE.</span></div>
        <div className="ia-contact-layout"><div><p className="ia-kicker">HAVE A BRIEF. HAVE A QUESTION. HAVE A HUNCH.</p><h2>Let’s make<br /><em>that move.</em></h2></div><Link href="/growth" className="ia-contact-orb"><span>START<br />A PROJECT</span><b>↗</b></Link></div>
        <div className="ia-contact-bottom"><a href="mailto:inquiries.imago@gmail.com">INQUIRIES.IMAGO@GMAIL.COM ↗</a><span>IMAGO / CREATIVE × GROWTH</span><span>© {new Date().getFullYear()} IMAGO STUDIO</span></div>
      </section>

      <footer className="ia-footer"><Link href="/" className="ia-brand"><span className="ia-brand-mark">✳</span><span>imago<span className="ia-period">.</span></span></Link><div><Link href="/services">CAPABILITIES</Link><Link href="/work">FIELD NOTES</Link><Link href="/growth">CONTACT</Link></div><span>BUILT TO MOVE.</span></footer>
    </main>
  );
}
