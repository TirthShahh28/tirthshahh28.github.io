"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";
import { fadeIn, stagger } from "@/lib/animations";

const categoryColors: Record<string, string> = {
  AI: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  RAG: "bg-sky-500/15 text-sky-400 border-sky-500/20",
  Backend: "bg-amber-500/15 text-amber-400 border-amber-500/20",
  Data: "bg-violet-500/15 text-violet-400 border-violet-500/20",
  Agents: "bg-rose-500/15 text-rose-400 border-rose-500/20",
  Evaluation: "bg-cyan-500/15 text-cyan-400 border-cyan-500/20",
};

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="section-header"
        >
          <h2 className="section-title">Projects</h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeIn}
              className="project-card flex flex-col"
            >
              <div className="h-28 flex items-center justify-center bg-linear-to-br from-emerald-500/20 via-emerald-400/10 to-transparent relative">
                <span className="text-emerald-400/40 text-5xl font-bold font-mono tracking-tight">
                  {project.title.split(/[\s:]+/)[0]}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <h3 className="font-semibold text-base text-white">
                    {project.title}
                  </h3>
                  <div className="flex gap-1.5 shrink-0 mt-0.5">
                    {project.categories.map((cat) => (
                      <span
                        key={cat}
                        className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${categoryColors[cat] ?? "bg-slate-500/15 text-slate-400 border-slate-500/20"}`}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-slate-500 text-xs mb-3">
                  {project.subtitle}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] text-slate-500 bg-white/[0.04] px-2 py-0.5 rounded-md border border-white/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 bg-white/[0.06] hover:bg-emerald-500/15 hover:text-emerald-400 px-3 py-1.5 rounded-lg border border-white/[0.08] hover:border-emerald-500/25 transition-all"
                    >
                      <FaGithub size={13} />
                      GitHub
                    </a>
                  ) : (
                    <span className="text-[11px] text-slate-600 italic">
                      Case Study Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mt-8 text-slate-500 text-sm"
        >
          For more projects, visit my{" "}
          <a
            href="https://github.com/TirthShahh28"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-500 hover:underline"
          >
            GitHub
          </a>{" "}
          profile.
        </motion.p>
      </div>
    </section>
  );
}
