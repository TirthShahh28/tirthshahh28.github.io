"use client";

import { motion } from "framer-motion";
import { FaGithub, FaCode } from "react-icons/fa";
import { fadeIn, stagger } from "@/lib/animations";
import { useEffect, useState } from "react";

const dsaStats = {
  total: { solved: 158, total: 1074 },
  easy: { solved: 128, total: 345, color: "bg-green-400", label: "Easy" },
  medium: { solved: 25, total: 476, color: "bg-yellow-400", label: "Medium" },
  hard: { solved: 5, total: 253, color: "bg-red-400", label: "Hard" },
};

export default function CodingActivity() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains("dark-mode"));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    setIsDark(document.body.classList.contains("dark-mode"));
    return () => observer.disconnect();
  }, []);

  const difficulties = [dsaStats.easy, dsaStats.medium, dsaStats.hard];

  return (
    <section id="coding" className="py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="section-header"
        >
          <h2 className="section-title">Coding <span>Profile</span></h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* GitHub Contributions - Clickable Card */}
          <motion.a
            href="https://github.com/TirthShahh28"
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeIn}
            className="activity-card cursor-pointer group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <FaGithub className="text-emerald-500" size={20} />
              </div>
              <div>
                <h3 className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
                  GitHub Contributions
                </h3>
                <p className="text-slate-500 text-xs">
                  View full profile on GitHub
                </p>
              </div>
            </div>
            <div className={`rounded-lg overflow-hidden p-3 border ${
              isDark ? "bg-[#0d1117] border-white/5" : "bg-slate-50 border-slate-200"
            }`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ghchart.rshah.org/4ade80/TirthShahh28"
                alt="GitHub Contribution Graph"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <p className="inline-flex items-center gap-2 mt-4 text-sm text-emerald-500 group-hover:text-emerald-400 transition-colors">
              View GitHub Profile <span className="text-xs">&#8599;</span>
            </p>
          </motion.a>

          {/* TakeUForward / Coding Profile - Clickable Card */}
          <motion.a
            href="https://takeuforward.org/profile/Tirthzz28"
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeIn}
            className="activity-card cursor-pointer group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <FaCode className="text-emerald-500" size={20} />
              </div>
              <div>
                <h3 className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
                  Coding Profile
                </h3>
                <p className="text-slate-500 text-xs">
                  Striver&apos;s A2Z DSA Sheet
                </p>
              </div>
            </div>
            <div className={`rounded-lg p-5 flex-1 border ${
              isDark ? "bg-[#141414] border-white/5" : "bg-slate-50 border-slate-200"
            }`}>
              {/* Total stat */}
              <div className="text-center mb-5">
                <p className="text-3xl font-bold text-emerald-500">
                  {dsaStats.total.solved}
                  <span className={`text-base font-normal ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                    /{dsaStats.total.total}
                  </span>
                </p>
                <p className="text-slate-500 text-xs mt-1">Problems Solved</p>
              </div>

              {/* Difficulty breakdown */}
              <div className="space-y-3">
                {difficulties.map((diff) => (
                  <div key={diff.label}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className={isDark ? "text-slate-400" : "text-slate-500"}>
                        {diff.label}
                      </span>
                      <span className={isDark ? "text-slate-300" : "text-slate-600"}>
                        {diff.solved}/{diff.total}
                      </span>
                    </div>
                    <div className={`w-full h-2 rounded-full overflow-hidden ${
                      isDark ? "bg-white/5" : "bg-slate-200"
                    }`}>
                      <div
                        className={`h-full ${diff.color} rounded-full transition-all duration-500`}
                        style={{ width: `${(diff.solved / diff.total) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="inline-flex items-center gap-2 mt-4 text-sm text-emerald-500 group-hover:text-emerald-400 transition-colors">
              View TakeUForward Profile <span className="text-xs">&#8599;</span>
            </p>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
