"use client";

import { MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="section-pad">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">05 — academics</span>
            <h2 className="section-title">Education</h2>
          </div>
        </div>
        <div className="edu-grid">
          {education.map((e, i) => (
            <Reveal key={e.school} className="edu-card" delay={i * 70}>
              <div className="edu-date">{e.date}</div>
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-school">{e.school}</div>
              <div className="edu-meta">
                <span>
                  <MapPin
                    size={14}
                    style={{
                      verticalAlign: "-2px",
                      marginRight: 5,
                      color: "var(--muted)",
                      display: "inline",
                    }}
                  />
                  {e.location}
                </span>
                <span>GPA {e.gpa}</span>
              </div>
              {e.coursework.length > 0 && (
                <div className="skill-items" style={{ marginTop: "var(--s4)" }}>
                  {e.coursework.map((c) => (
                    <span key={c} className="chip">
                      {c}
                    </span>
                  ))}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
