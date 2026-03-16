"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const lines = [
  { prompt: true, text: "cat > aboutMe.md" },
  { prompt: false, text: "I'm Tirth Shah 👋" },
  { prompt: false, text: "M.S. Computer Science @ UConn" },
  {
    prompt: false,
    text: "I build production-grade AI systems — RAG pipelines,",
  },
  {
    prompt: false,
    text: "LLM integrations, search engines & scalable backends.",
  },
  { prompt: false, text: "" },
  { prompt: false, text: "Interests: AI/ML · Full-Stack · Data Engineering" },
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines < lines.length) {
      const timeout = setTimeout(
        () => setVisibleLines((v) => v + 1),
        visibleLines === 0 ? 600 : 400,
      );
      return () => clearTimeout(timeout);
    }
  }, [visibleLines]);

  return (
    <section id="hero" className="min-h-screen flex items-center px-6 pt-20">
      <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Terminal */}
        <div className="flex-1 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0e0e0e]">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a] border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-xs text-slate-500 font-mono">
                  ~/tirth-shah
                </span>
              </div>

              {/* Terminal body */}
              <div className="p-5 font-mono text-sm leading-7 min-h-65">
                <p className="text-slate-500 mb-3 text-xs">
                  # Introducing@Internet
                </p>
                {lines.slice(0, visibleLines).map((line, i) => (
                  <div key={i} className="flex">
                    {line.prompt ? (
                      <>
                        <span className="text-emerald-400 mr-2 select-none">
                          [ ~ ]$
                        </span>
                        <span className="text-emerald-300">{line.text}</span>
                      </>
                    ) : (
                      <span className="text-slate-300">{line.text}</span>
                    )}
                  </div>
                ))}
                {visibleLines < lines.length && (
                  <span className="text-emerald-400 cursor-blink">█</span>
                )}
                {visibleLines >= lines.length && (
                  <div className="flex mt-1">
                    <span className="text-emerald-400 mr-2 select-none">
                      [ ~ ]$
                    </span>
                    <span className="text-emerald-400 cursor-blink">█</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="shrink-0"
        >
          <div className="w-52 h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/profile.jpeg"
              alt="Tirth Shah"
              width={256}
              height={256}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
