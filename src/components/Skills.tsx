"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { fadeIn, stagger } from "@/lib/animations";
import { useEffect, useState } from "react";

export default function Skills() {
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
    <section id="skills" className="py-10 px-6">
      <div className="max-w-6xl mx-auto">
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
              className={`rounded-xl p-5 border ${
                isDark
                  ? "bg-[#141414] border-white/6"
                  : "bg-white border-slate-200"
              }`}
            >
              <h3 className="text-emerald-500 text-xs font-semibold uppercase tracking-wider mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`text-xs px-2.5 py-1 rounded-md border ${
                      isDark
                        ? "text-slate-300 bg-white/5 border-white/8"
                        : "text-slate-600 bg-slate-50 border-slate-200"
                    }`}
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
