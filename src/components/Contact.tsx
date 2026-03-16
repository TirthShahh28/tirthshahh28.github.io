"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { fadeIn } from "@/lib/animations";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Wanna Build something together?
          </h2>

          <div className="mt-8 space-y-6">
            <div>
              <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">
                Email
              </p>
              <a
                href="mailto:tirth.shah@uconn.edu"
                className="text-emerald-400 hover:text-emerald-300 transition-colors text-lg"
              >
                tirth.shah@uconn.edu
              </a>
            </div>

            <div>
              <p className="text-slate-500 text-xs uppercase tracking-wider mb-3">
                Connect with me
              </p>
              <div className="flex items-center justify-center gap-6">
                <a
                  href="https://www.linkedin.com/in/tirth-shah14/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://github.com/TirthShahh28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="mailto:tirth.shah@uconn.edu"
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                  aria-label="Email"
                >
                  <FaEnvelope size={24} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
