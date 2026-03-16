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
        className="space-y-8"
      >
        {experience.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            className="group border-l-2 border-slate-800 pl-6 hover:border-blue-500/50 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <div>
                <h3 className="text-white font-medium">{item.role}</h3>
                <p className="text-blue-400 text-sm">{item.company}</p>
              </div>
              <span className="text-slate-500 text-sm shrink-0">
                {item.date}
              </span>
            </div>
            <ul className="text-slate-400 text-sm space-y-1.5 mb-3">
              {item.description.map((point, i) => (
                <li key={i} className="leading-relaxed">
                  <span className="text-slate-600 mr-2">▸</span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400"
                >
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
