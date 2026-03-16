"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { fadeIn, stagger } from "@/lib/animations";
import { useEffect, useState } from "react";

export default function Experience() {
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
    <section id="experience" className="py-10 px-6">
      <div className="max-w-6xl mx-auto">
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
                  <p className="text-emerald-500 text-xs font-medium mb-0.5">
                    {item.company}
                  </p>
                  <h3 className={`font-semibold text-base mb-0.5 ${isDark ? "text-white" : "text-slate-900"}`}>
                    {item.role}
                  </h3>
                  <p className="text-slate-500 text-xs mb-2">{item.date}</p>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {item.tags.join(" \u00B7 ")}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Next role */}
            <motion.div variants={fadeIn} className="relative">
              <div className="timeline-dot" />
              <div>
                <h3 className={`font-semibold text-base mb-0.5 ${isDark ? "text-white" : "text-slate-900"}`}>
                  Next Role
                </h3>
                <p className="text-emerald-500 text-xs">
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
