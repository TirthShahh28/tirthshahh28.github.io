"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { fadeIn } from "@/lib/animations";

export default function CodingActivity() {
  return (
    <section id="coding" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="section-header"
        >
          <h2 className="section-title">Coding <span>Activity</span></h2>
        </motion.div>

        <motion.a
          href="https://github.com/TirthShahh28"
          target="_blank"
          rel="noopener noreferrer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
          className="activity-card cursor-pointer group block max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <FaGithub className="text-emerald-500" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-white">
                GitHub Contributions
              </h3>
              <p className="text-slate-500 text-xs">
                View full profile on GitHub
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden p-3 border bg-[#0d1117] border-white/5">
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
      </div>
    </section>
  );
}
