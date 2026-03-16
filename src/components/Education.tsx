"use client";

import { motion } from "framer-motion";
import { education } from "@/data/education";
import { fadeIn, stagger } from "@/lib/animations";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="section-title"
        >
          Education
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
            {education.map((item, index) => (
              <motion.div key={index} variants={fadeIn} className="relative">
                <div className="timeline-dot" />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <FaGraduationCap className="text-emerald-400" size={16} />
                    <p className="text-emerald-400 text-sm font-medium">
                      {item.school}
                    </p>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {item.degree}
                  </h3>
                  <p className="text-slate-500 text-sm mb-1">
                    {item.location} · GPA: {item.gpa}
                  </p>
                  <p className="text-slate-600 text-sm">{item.date}</p>
                  {item.coursework.length > 0 && (
                    <p className="text-slate-500 text-xs mt-2">
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
