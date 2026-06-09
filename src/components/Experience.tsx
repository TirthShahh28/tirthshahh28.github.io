"use client";

import { Zap } from "lucide-react";
import Reveal from "@/components/Reveal";
import { experience, type ExperienceItem } from "@/data/experience";
import { highlightMetrics } from "@/lib/highlightMetrics";

function Tags({ items }: { items: string[] }) {
  return (
    <div className="xp-tags">
      {items.map((t) => (
        <span key={t} className="chip">
          {t}
        </span>
      ))}
    </div>
  );
}

function XPCard({ item }: { item: ExperienceItem }) {
  return (
    <div className={`xp-card ${item.standout ? "standout" : ""}`}>
      <div className="xp-top">
        <div>
          {item.standout && (
            <div className="badge-standout" style={{ marginBottom: 8 }}>
              <Zap size={14} /> Flagship role
            </div>
          )}
          <div className="xp-role">{item.role}</div>
          <div className="xp-co">{item.company}</div>
        </div>
        <span className="chip" style={{ flex: "none" }}>
          {item.date}
        </span>
      </div>
      <p className="xp-summary">{item.summary}</p>
      <ul className="xp-bullets">
        {item.description.map((d, i) => (
          <li key={i}>{highlightMetrics(d)}</li>
        ))}
      </ul>
      <Tags items={item.tags} />
    </div>
  );
}

export default function Experience() {
  const head = (
    <div className="section-head">
      <div>
        <span className="eyebrow">02 — where I&apos;ve worked</span>
        <h2 className="section-title">Experience</h2>
        <p className="section-sub">
          Three roles, one through-line: dependable systems that move real
          metrics for real teams.
        </p>
      </div>
      <span className="chip chip-accent" style={{ alignSelf: "flex-start" }}>
        <Zap size={13} /> 30k+ products · 1k+ students · 40% less manual work
      </span>
    </div>
  );

  return (
    <section id="experience" className="section-pad">
      <div className="wrap">
        {head}
        <div className="tl">
          {experience.map((item, i) => (
            <Reveal
              key={item.company}
              className={`tl-item ${item.standout ? "standout" : ""}`}
              delay={i * 70}
            >
              <div className="tl-date">{item.date}</div>
              <div className="tl-body">
                <XPCard item={item} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
