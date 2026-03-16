"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { experience } from "@/data/experience";
import { fadeIn, stagger } from "@/lib/animations";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-6"
      >
        {experience.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            className="glass-card p-6 group"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <div>
                <h3 className="text-white font-semibold text-lg">{item.role}</h3>
                <p className="text-indigo-400 text-sm font-medium">{item.company}</p>
              </div>
              <span className="text-slate-500 text-sm shrink-0 bg-white/5 px-3 py-1 rounded-full">
                {item.date}
              </span>
            </div>
            <ul className="text-slate-400 text-sm space-y-2 mb-4">
              {item.description.map((point, i) => (
                <li key={i} className="leading-relaxed flex gap-2">
                  <span className="text-indigo-500 mt-1.5 shrink-0">
                    <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor"><circle cx="3" cy="3" r="3"/></svg>
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
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
