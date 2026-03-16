"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Section from "./Section";
import { fadeIn } from "@/lib/animations";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="glass-card p-8 max-w-2xl text-center mx-auto"
      >
        <h3 className="text-2xl font-bold text-white mb-4">
          Let&apos;s Work Together
        </h3>
        <p className="text-slate-300 leading-relaxed mb-8 text-[15px]">
          I&apos;m actively looking for full-time AI Engineering roles starting
          May 2026. If you have an opportunity, want to collaborate, or just want
          to chat — feel free to reach out.
        </p>

        <a
          href="mailto:tirth.shah@uconn.edu"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-indigo-500/25 mb-8"
        >
          <FaEnvelope size={16} />
          tirth.shah@uconn.edu
        </a>

        <div className="flex items-center justify-center gap-6 pt-6 border-t border-white/5">
          <a
            href="https://github.com/TirthShahh28"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors text-sm"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/tirth-shah14/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors text-sm"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>
      </motion.div>
    </Section>
  );
}
