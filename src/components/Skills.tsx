"use client";

import Reveal from "@/components/Reveal";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">04 — toolkit</span>
            <h2 className="section-title">Skills</h2>
            <p className="section-sub">
              Backend-first, comfortable across the stack, and fluent with the
              applied-AI toolchain.
            </p>
          </div>
        </div>
        <div className="skills-grid">
          {skills.map((g, i) => (
            <Reveal key={g.category} className="skill-card" delay={i * 60}>
              <div className="cat">{g.category}</div>
              <div className="skill-items">
                {g.items.map((it) => (
                  <span key={it} className="chip">
                    {it}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
