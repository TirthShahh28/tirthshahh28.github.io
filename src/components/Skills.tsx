"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { skills } from "@/data/skills";
import { fadeIn, stagger } from "@/lib/animations";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-6"
      >
        {skills.map((group) => (
          <motion.div key={group.category} variants={fadeIn}>
            <h3 className="text-white text-sm font-medium mb-3">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-sm px-3 py-1.5 rounded bg-slate-800/60 border border-slate-700/50 text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
