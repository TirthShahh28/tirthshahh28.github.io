"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";
import { fadeIn, stagger } from "@/lib/animations";
import { useEffect, useState } from "react";

export default function Projects() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains("dark-mode"));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    setIsDark(document.body.classList.contains("dark-mode"));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-10 px-6">
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
              {/* Colored header bar */}
              <div className={`h-32 flex items-center justify-center ${
                isDark
                  ? "bg-linear-to-br from-emerald-500/20 via-emerald-400/10 to-transparent"
                  : "bg-linear-to-br from-emerald-500/10 via-emerald-400/5 to-transparent"
              }`}>
                <span className="text-emerald-400/50 text-4xl font-bold font-mono">
                  {project.title
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 3)}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className={`font-semibold text-base mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <p className={`text-xs ${isDark ? "text-slate-600" : "text-slate-400"}`}>
                    {project.tags.join(", ")}
                  </p>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-emerald-500 transition-colors flex items-center gap-1.5 text-xs"
                    >
                      <FaGithub size={14} />
                      GitHub ↗
                    </a>
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
