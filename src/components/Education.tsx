"use client";

import { motion } from "framer-motion";
import { education } from "@/data/education";
import { fadeIn, stagger } from "@/lib/animations";
import { FaGraduationCap } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Education() {
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
    <section id="education" className="py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="section-header"
        >
          <h2 className="section-title">Education</h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-6"
        >
          {education.map((item, index) => {
            const isUConn = item.school === "University of Connecticut";

            return (
              <motion.div
                key={index}
                variants={fadeIn}
                className={`rounded-xl p-5 border transition-all ${
                  isUConn
                    ? isDark
                      ? "bg-emerald-500/5 border-emerald-500/20 shadow-lg shadow-emerald-500/5"
                      : "bg-emerald-50 border-emerald-200 shadow-md shadow-emerald-100"
                    : isDark
                      ? "bg-[#141414] border-white/6"
                      : "bg-white border-slate-200"
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Logo / Icon */}
                  {isUConn ? (
                    <div className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${
                      isDark
                        ? "bg-[#0e2240] border border-[#1a3a5c]"
                        : "bg-[#0e2240] border border-[#1a3a5c]"
                    }`}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/0/07/UConn_Huskies_logo.svg/200px-UConn_Huskies_logo.svg.png"
                        alt="UConn Logo"
                        className="w-10 h-10 object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = '<span class="text-white font-bold text-lg">UC</span>';
                          }
                        }}
                      />
                    </div>
                  ) : (
                    <div className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${
                      isDark
                        ? "bg-white/5 border border-white/10"
                        : "bg-slate-100 border border-slate-200"
                    }`}>
                      <FaGraduationCap className="text-emerald-500" size={24} />
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="text-emerald-500 text-sm font-semibold">
                        {item.school}
                      </p>
                      {isUConn && (
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                          isDark
                            ? "bg-emerald-500/15 text-emerald-400"
                            : "bg-emerald-100 text-emerald-700"
                        }`}>
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className={`font-semibold text-base mb-0.5 ${isDark ? "text-white" : "text-slate-900"}`}>
                      {item.degree}
                    </h3>
                    <p className="text-slate-500 text-xs mb-0.5">
                      {item.location} &middot; GPA: {item.gpa}
                    </p>
                    <p className={`text-xs ${isDark ? "text-slate-600" : "text-slate-400"}`}>{item.date}</p>
                    {item.coursework.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {item.coursework.map((course) => (
                          <span
                            key={course}
                            className={`text-xs px-2 py-0.5 rounded-md ${
                              isDark
                                ? "bg-white/5 text-slate-400 border border-white/8"
                                : "bg-slate-100 text-slate-500 border border-slate-200"
                            }`}
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
