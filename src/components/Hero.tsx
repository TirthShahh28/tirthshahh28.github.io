"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { identity, metrics, terminalLines } from "@/lib/portfolio";
import { fmt, useCountUp } from "@/lib/hooks";

function Terminal({ compact }: { compact?: boolean }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setN(terminalLines.length);
      return;
    }
    if (n >= terminalLines.length) return;
    const id = setTimeout(() => setN((v) => v + 1), n === 0 ? 450 : 360);
    return () => clearTimeout(id);
  }, [n]);

  return (
    <div className="terminal">
      <div className="term-bar">
        <span className="tdot" style={{ background: "#ff5f57" }} />
        <span className="tdot" style={{ background: "#febc2e" }} />
        <span className="tdot" style={{ background: "#28c840" }} />
        <span className="name">tirth@portfolio — zsh</span>
      </div>
      <div className="term-body" style={compact ? { minHeight: 0 } : undefined}>
        <p className="comment" style={{ margin: "0 0 10px" }}>
          # whoami
        </p>
        {terminalLines.slice(0, n).map((l, i) => (
          <div key={i} className="term-line">
            {l.prompt ? (
              <>
                <span className="pmt">❯</span>
                <span className="pmt-text">{l.text}</span>
              </>
            ) : (
              <span className="out">{l.text || "\u00a0"}</span>
            )}
          </div>
        ))}
        {n >= terminalLines.length && (
          <div className="term-line">
            <span className="pmt">❯</span>
            <span className="cursor" />
          </div>
        )}
        {n < terminalLines.length && <span className="cursor" />}
      </div>
    </div>
  );
}

function Metric({
  value,
  suffix,
  label,
  sub,
}: {
  value: number;
  suffix: string;
  label: string;
  sub: string;
}) {
  const [ref, val] = useCountUp(value);
  return (
    <div className="metric" ref={ref}>
      <div className="num">
        {fmt(val)}
        <span className="suf">{suffix}</span>
      </div>
      <div className="lab">{label}</div>
      <div className="sub">{sub}</div>
    </div>
  );
}

function HeroCopy() {
  const L = identity.links;
  return (
    <div>
      <Reveal className="eyebrow" as="span">
        software / ai engineer
      </Reveal>
      <Reveal as="h1" delay={60}>
        Backend systems &amp;
        <br />
        <span className="accent">applied AI</span> that ship.
      </Reveal>
      <Reveal as="p" className="lede" delay={120}>
        {identity.blurb}
      </Reveal>
      <Reveal className="hero-cta" delay={180}>
        <a href="#projects" className="btn btn-primary">
          View projects <ArrowRight size={16} />
        </a>
        <a
          href={L.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost"
        >
          <Download size={16} /> Download résumé
        </a>
      </Reveal>
      <Reveal className="hero-socials" delay={230}>
        <a
          className="icon-btn"
          href={L.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github size={18} />
        </a>
        <a
          className="icon-btn"
          href={L.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
        <a className="icon-btn" href={`mailto:${L.email}`} aria-label="Email">
          <Mail size={18} />
        </a>
      </Reveal>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <HeroCopy />
          <Reveal delay={140}>
            <Terminal />
          </Reveal>
        </div>
        <div className="metrics">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 70}>
              <Metric {...m} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
