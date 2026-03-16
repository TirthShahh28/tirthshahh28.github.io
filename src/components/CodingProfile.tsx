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
        <div className="bg-slate-800/30 border border-slate-800 rounded-lg p-6 hover:border-slate-700 transition-colors max-w-lg">
          <div className="flex items-center gap-3 mb-3">
            <FaCode className="text-blue-400" size={20} />
            <h3 className="text-white font-medium">TakeUForward</h3>
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
            className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            View Profile <FaExternalLinkAlt size={12} />
          </a>
        </div>
      </motion.div>
    </Section>
  );
}
