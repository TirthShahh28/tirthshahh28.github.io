"use client";

import { useRef, useState } from "react";
import {
  Check,
  ExternalLink,
  Github,
  Layers,
  Lock,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { projects, type Project } from "@/data/projects";

function categoryIcon(cat: string) {
  const map: Record<string, typeof Layers> = {
    Backend: Layers,
    AI: Sparkles,
    Data: Lock,
    Agents: Zap,
    RAG: Shield,
    Evaluation: Check,
  };
  return map[cat] || Layers;
}

function ProjLinks({ p, small }: { p: Project; small?: boolean }) {
  return (
    <div
      className="proj-foot"
      style={
        small
          ? { marginTop: "var(--s4)", paddingTop: "var(--s4)" }
          : undefined
      }
    >
      <a
        className={`btn btn-ghost btn-sm ${p.github ? "" : "disabled"}`}
        href={p.github || "#"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github size={15} /> {p.github ? "Source" : "Private repo"}
      </a>
      <a
        className={`btn btn-ghost btn-sm ${p.demo ? "" : "disabled"}`}
        href={p.demo || "#"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ExternalLink size={15} /> {p.demo ? "Live demo" : "No demo"}
      </a>
    </div>
  );
}

function ProjectCard({ p, idx }: { p: Project; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div className="proj" ref={ref} onMouseMove={onMove}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <span className="proj-idx">{String(idx + 1).padStart(2, "0")}</span>
        <div className="proj-cats">
          {p.categories.map((c) => {
            const Ic = categoryIcon(c);
            return (
              <span key={c} className="chip chip-accent">
                <Ic size={13} /> {c}
              </span>
            );
          })}
        </div>
      </div>
      <h3 className="proj-title">{p.title}</h3>
      <div className="proj-sub">{p.subtitle}</div>
      <p className="proj-desc">{p.description}</p>
      <div className="proj-high">
        {p.highlights.map((h) => (
          <div className="h" key={h}>
            <Check size={15} /> {h}
          </div>
        ))}
      </div>
      <div className="proj-tech">
        {p.tech.map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>
      <ProjLinks p={p} />
    </div>
  );
}

export default function Projects() {
  const allCats = [
    "All",
    ...Array.from(new Set(projects.flatMap((p) => p.categories))),
  ];
  const [filter, setFilter] = useState("All");
  const shown =
    filter === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(filter));

  return (
    <section id="projects" className="section-pad">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">03 — selected work</span>
            <h2 className="section-title">Projects</h2>
            <p className="section-sub">
              Production-style backends and applied-AI systems — built end to
              end, from schema to CI/CD.
            </p>
          </div>
          <div className="proj-cats" role="tablist" aria-label="Filter projects">
            {allCats.map((c) => (
              <button
                key={c}
                type="button"
                className={`chip ${filter === c ? "chip-accent" : ""}`}
                style={{ cursor: "pointer" }}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="proj-grid">
          {shown.map((p) => (
            <Reveal key={p.id} delay={(p.id % 2) * 60}>
              <ProjectCard p={p} idx={projects.indexOf(p)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
