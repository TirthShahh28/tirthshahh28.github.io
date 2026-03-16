"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Section from "./Section";
import { projects } from "@/data/projects";
import { fadeIn, stagger } from "@/lib/animations";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
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
            className="glass-card p-6 group flex flex-col"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-white font-semibold text-lg leading-snug pr-4">
                {project.title}
              </h3>
              <div className="flex items-center gap-3 shrink-0 pt-1">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-indigo-400 transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub size={18} />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-indigo-400 transition-colors"
                    aria-label="Demo"
                  >
                    <FaExternalLinkAlt size={16} />
                  </a>
                )}
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
