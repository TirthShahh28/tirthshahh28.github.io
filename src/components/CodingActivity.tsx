"use client";

import { motion } from "framer-motion";
import { FaGithub, FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { fadeIn, stagger } from "@/lib/animations";

export default function CodingActivity() {
  return (
    <section id="coding" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="section-title"
        >
          Coding <span>Activity</span>
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* GitHub Contributions */}
          <motion.div variants={fadeIn} className="activity-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <FaGithub className="text-emerald-400" size={20} />
              </div>
              <div>
                <h3 className="text-white font-semibold">
                  GitHub Contributions
                </h3>
                <p className="text-slate-500 text-xs">
                  123 contributions in the last year
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden bg-[#0d1117] p-3 border border-white/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ghchart.rshah.org/4ade80/TirthShahh28"
                alt="GitHub Contribution Graph"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <a
              href="https://github.com/TirthShahh28"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              View GitHub Profile <FaExternalLinkAlt size={11} />
            </a>
          </motion.div>

          {/* TakeUForward / DSA Profile */}
          <motion.div variants={fadeIn} className="activity-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <FaCode className="text-emerald-400" size={20} />
              </div>
              <div>
                <h3 className="text-white font-semibold">DSA Practice</h3>
                <p className="text-slate-500 text-xs">
                  Striver&apos;s A2Z DSA Sheet
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-[#141414] border border-white/5 p-5 flex-1">
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div className="text-center">
                  <p className="text-2xl font-bold text-emerald-400">A2Z</p>
                  <p className="text-slate-500 text-xs mt-1">DSA Sheet</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">Daily</p>
                  <p className="text-slate-500 text-xs mt-1">Practice</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">Arrays & Hashing</span>
                    <span className="text-emerald-400">Practicing</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-400 rounded-full"
                      style={{ width: "75%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">Trees & Graphs</span>
                    <span className="text-emerald-400">Practicing</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-400 rounded-full"
                      style={{ width: "60%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">Dynamic Programming</span>
                    <span className="text-emerald-400">Practicing</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-400 rounded-full"
                      style={{ width: "45%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <a
              href="https://takeuforward.org/profile/Tirthzz28"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              View TakeUForward Profile <FaExternalLinkAlt size={11} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
