"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { education } from "@/data/education";
import { fadeIn, stagger } from "@/lib/animations";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-6"
      >
        {education.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            className="glass-card p-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 shrink-0 mt-0.5">
                <FaGraduationCap className="text-indigo-400" size={20} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-white font-semibold text-lg">{item.degree}</h3>
                    <p className="text-indigo-400 text-sm font-medium">
                      {item.school} — {item.location}
                    </p>
                  </div>
                  <span className="text-slate-500 text-sm shrink-0 bg-white/5 px-3 py-1 rounded-full">
                    {item.date}
                  </span>
                </div>
                <p className="text-slate-400 text-sm mb-3">
                  <span className="text-slate-300 font-medium">GPA:</span> {item.gpa}
                </p>

                {item.coursework.length > 0 && (
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-2 font-medium">
                      Relevant Coursework
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.coursework.map((course) => (
                        <span key={course} className="tag-pill">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
