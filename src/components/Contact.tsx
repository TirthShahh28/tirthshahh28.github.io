"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { fadeIn } from "@/lib/animations";
import { useEffect, useState } from "react";

export default function Contact() {
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
    <section id="contact" className="py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          className="text-center"
        >
          <h2 className={`text-xl font-semibold mb-3 ${isDark ? "text-white" : "text-slate-900"}`}>
            Wanna Build something together?
          </h2>

          <div className="mt-5 space-y-4">
            <div>
              <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">
                Email
              </p>
              <a
                href="mailto:tirth.shah@uconn.edu"
                className="text-emerald-500 hover:text-emerald-400 transition-colors text-lg"
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
                  className={`hover:text-emerald-500 transition-colors ${isDark ? "text-slate-400" : "text-slate-500"}`}
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://github.com/TirthShahh28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:text-emerald-500 transition-colors ${isDark ? "text-slate-400" : "text-slate-500"}`}
                  aria-label="GitHub"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="mailto:tirth.shah@uconn.edu"
                  className={`hover:text-emerald-500 transition-colors ${isDark ? "text-slate-400" : "text-slate-500"}`}
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
