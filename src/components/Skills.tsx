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
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {skills.map((group) => (
          <motion.div key={group.category} variants={fadeIn} className="glass-card p-6">
            <h3 className="text-indigo-400 text-sm font-semibold uppercase tracking-wider mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="tag-pill">
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
