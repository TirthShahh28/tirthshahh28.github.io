"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20 relative z-10">
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6"
          >
            <span className="text-indigo-400 text-sm font-medium">
              Available for full-time roles
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight leading-tight"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">Tirth Shah</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl font-medium text-slate-400 mb-6"
          >
            AI & Software Engineer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-400 max-w-xl leading-relaxed mb-8 mx-auto md:mx-0 text-lg"
          >
            M.S. in Computer Science at the University of Connecticut. I build
            intelligent systems — from RAG pipelines and LLM integrations to
            scalable data workflows.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-4 justify-center md:justify-start flex-wrap"
          >
            <a
              href="mailto:tirth.shah@uconn.edu"
              className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-indigo-500/25 text-sm"
            >
              Get in Touch
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white rounded-xl font-medium transition-all hover:bg-white/5 text-sm flex items-center gap-2"
            >
              <FaFileAlt size={14} />
              Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-5 justify-center md:justify-start mt-8"
          >
            <a
              href="https://github.com/TirthShahh28"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-indigo-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/tirth-shah14/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-indigo-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="mailto:tirth.shah@uconn.edu"
              className="text-slate-500 hover:text-indigo-400 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={22} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="shrink-0"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-cyan-500/30 blur-2xl scale-110" />
            <div className="relative w-52 h-52 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
              <Image
                src="/profile.jpeg"
                alt="Tirth Shah"
                width={288}
                height={288}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
