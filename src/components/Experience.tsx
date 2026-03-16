"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { fadeIn, stagger } from "@/lib/animations";

export default function Experience() {
  return (
    <section id="experience" className="py-14 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="section-header"
        >
          <h2 className="section-title">Experience</h2>
        </motion.div>

        <div className="relative" style={{ paddingLeft: '28px' }}>
          <div className="timeline-line" />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-8"
          >
            {experience.map((item, index) => (
              <motion.div key={index} variants={fadeIn} className="relative">
                <div className="timeline-dot" />
                <div>
                  <p className="text-emerald-400 text-xs font-medium mb-0.5">
                    {item.company}
                  </p>
                  <h3 className="text-white font-semibold text-base mb-0.5">
                    {item.role}
                  </h3>
                  <p className="text-slate-500 text-xs mb-2">{item.date}</p>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {item.tags.join(" · ")}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Next role */}
            <motion.div variants={fadeIn} className="relative">
              <div className="timeline-dot" />
              <div>
                <h3 className="text-white font-semibold text-base mb-0.5">
                  Next Role
                </h3>
                <p className="text-emerald-400 text-xs">
                  Open to Work as AI / Software Engineer
                </p>
                <p className="text-slate-500 text-xs">2026</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
