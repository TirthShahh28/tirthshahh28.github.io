"use client";

import { motion } from "framer-motion";
import { education } from "@/data/education";
import { fadeIn, stagger } from "@/lib/animations";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className="py-14 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="section-header"
        >
          <h2 className="section-title">Education</h2>
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
            {education.map((item, index) => (
              <motion.div key={index} variants={fadeIn} className="relative">
                <div className="timeline-dot" />
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <FaGraduationCap className="text-emerald-400" size={14} />
                    <p className="text-emerald-400 text-xs font-medium">
                      {item.school}
                    </p>
                  </div>
                  <h3 className="text-white font-semibold text-base mb-0.5">
                    {item.degree}
                  </h3>
                  <p className="text-slate-500 text-xs mb-0.5">
                    {item.location} · GPA: {item.gpa}
                  </p>
                  <p className="text-slate-600 text-xs">{item.date}</p>
                  {item.coursework.length > 0 && (
                    <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                      {item.coursework.join(" · ")}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
