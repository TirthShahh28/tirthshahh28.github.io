"use client";

import { motion } from "framer-motion";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import Section from "./Section";
import { fadeIn } from "@/lib/animations";

export default function CodingProfile() {
  return (
    <Section id="coding" title="Coding Profile">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="glass-card p-6 max-w-lg group">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
              <FaCode className="text-indigo-400" size={18} />
            </div>
            <h3 className="text-white font-semibold text-lg">TakeUForward</h3>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            Practicing Data Structures & Algorithms on Striver&apos;s A2Z DSA
            Sheet. Solving problems across arrays, trees, graphs, dynamic
            programming, and more.
          </p>
          <a
            href="https://takeuforward.org/profile/Tirthzz28"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
          >
            View Profile <FaExternalLinkAlt size={12} />
          </a>
        </div>
      </motion.div>
    </Section>
  );
}
