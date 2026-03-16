"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { fadeIn, stagger } from "@/lib/animations";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="section-title"
        >
          Experience
        </motion.h2>

        <div className="relative pl-8">
          <div className="timeline-line" />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-12"
          >
            {experience.map((item, index) => (
              <motion.div key={index} variants={fadeIn} className="relative">
                <div className="timeline-dot" />
                <div>
                  <p className="text-emerald-400 text-sm font-medium mb-1">
                    {item.company}
                  </p>
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {item.role}
                  </h3>
                  <p className="text-slate-500 text-sm mb-3">{item.date}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.tags.join(", ")}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Next role */}
            <motion.div variants={fadeIn} className="relative">
              <div className="timeline-dot" />
              <div>
                <h3 className="text-white font-semibold text-lg mb-1">
                  Next Role
                </h3>
                <p className="text-emerald-400 text-sm">
                  Open to Work as AI / Software Engineer
                </p>
                <p className="text-slate-500 text-sm">2026</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
