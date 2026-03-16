"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { fadeIn, stagger } from "@/lib/animations";

export default function Skills() {
  return (
    <section id="skills" className="py-14 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="section-header"
        >
          <h2 className="section-title">Technical <span>Skills</span></h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skills.map((group) => (
            <motion.div
              key={group.category}
              variants={fadeIn}
              className="rounded-xl bg-[#141414] border border-white/6 p-5"
            >
              <h3 className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs text-slate-300 bg-white/5 border border-white/8 px-2.5 py-1 rounded-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
