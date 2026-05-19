"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { FaArrowRight } from "react-icons/fa";

const journeySteps = [
  {
    logo: null,
    fallback: "CS",
    title: "Capital Spirits",
    subtitle: "AI/Software Engineer Intern",
    tags: "(MeiliSearch, Next.js, TypeScript)",
    date: "2025",
    bgColor: "bg-emerald-600",
    highlight: false,
  },
  {
    logo: "/uconn-logo.svg",
    fallback: "UCONN",
    title: "University of Connecticut",
    subtitle: "Masters in Computer Science",
    tags: "Data & AI Operations Engineer\nResearch & Development",
    date: "2024 - 2026",
    bgColor: "bg-[#0e2240]",
    highlight: true,
  },
  {
    logo: null,
    fallback: null,
    title: "Next Role",
    subtitle: "Open to Work as AI Engineer",
    tags: "(AI/ML, Backend, and Full Stack)",
    date: "2026",
    bgColor: "bg-slate-800",
    highlight: false,
    isNextRole: true,
  },
];

export default function Journey() {
  return (
    <section id="experience" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="section-header"
        >
          <h2 className="section-title">Journey</h2>
        </motion.div>

        {/* Horizontal timeline - desktop */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
          className="hidden md:flex items-center justify-center gap-4 lg:gap-6"
        >
          {/* Dotted line before */}
          <div className="hidden lg:block w-16 border-t-2 border-dashed border-slate-700" />

          {journeySteps.map((step, index) => (
            <div key={index} className="flex items-center gap-4 lg:gap-6">
              {/* Card */}
              <div
                className={`rounded-xl border text-center transition-all w-56 lg:w-64 ${
                  step.isNextRole
                    ? "bg-slate-800 border-slate-600 p-5"
                    : step.highlight
                      ? "bg-[#0e2240] border-[#1a3a5c] p-4"
                      : "bg-[#141414] border-white/10 p-5"
                }`}
              >
                {/* Logo */}
                {step.logo ? (
                  <div className="flex justify-center mb-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={step.logo}
                      alt={step.title}
                      className="h-12 w-auto object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        if (target.nextElementSibling) {
                          (
                            target.nextElementSibling as HTMLElement
                          ).style.display = "block";
                        }
                      }}
                    />
                    <span className="text-white font-bold text-sm hidden">
                      {step.fallback}
                    </span>
                  </div>
                ) : step.fallback ? (
                  <div className="flex justify-center mb-3">
                    <div
                      className={`w-10 h-10 rounded-lg ${step.bgColor} flex items-center justify-center`}
                    >
                      <span className="text-white font-bold text-xs">
                        {step.fallback}
                      </span>
                    </div>
                  </div>
                ) : null}

                <h3 className="font-bold text-sm mb-1 text-white">
                  {step.title}
                </h3>
                <p
                  className={`text-xs leading-relaxed whitespace-pre-line ${
                    step.isNextRole
                      ? "text-white/80 font-medium"
                      : step.highlight
                        ? "text-slate-300"
                        : "text-slate-400"
                  }`}
                >
                  {step.subtitle}
                </p>
                {step.tags && (
                  <p
                    className={`text-[10px] mt-1 whitespace-pre-line ${
                      step.isNextRole || step.highlight
                        ? "text-slate-400"
                        : "text-slate-500"
                    }`}
                  >
                    {step.tags}
                  </p>
                )}
              </div>

              {/* Arrow between cards */}
              {index < journeySteps.length - 1 && (
                <FaArrowRight
                  className="shrink-0 text-slate-600"
                  size={16}
                />
              )}
            </div>
          ))}

          {/* Dotted line after */}
          <div className="hidden lg:block w-16 border-t-2 border-dashed border-slate-700" />
        </motion.div>

        {/* Mobile - vertical cards with connecting line */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
          className="md:hidden"
        >
          {journeySteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Card */}
              <div
                className={`rounded-xl border p-4 w-full ${
                  step.isNextRole
                    ? "bg-slate-800 border-slate-700"
                    : step.highlight
                      ? "bg-[#0e2240] border-[#1a3a5c]"
                      : "bg-[#141414] border-white/10"
                }`}
              >
                <div className="flex items-center gap-3">
                  {step.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={step.logo}
                      alt={step.title}
                      className="h-10 w-auto object-contain"
                    />
                  ) : step.fallback ? (
                    <div
                      className={`w-10 h-10 rounded-lg ${step.bgColor} flex items-center justify-center shrink-0`}
                    >
                      <span className="text-white font-bold text-xs">
                        {step.fallback}
                      </span>
                    </div>
                  ) : null}
                  <div className="flex-1">
                    <h3 className="font-bold text-sm text-white">
                      {step.title}
                    </h3>
                    <p
                      className={`text-xs ${
                        step.isNextRole
                          ? "text-white/80"
                          : step.highlight
                            ? "text-slate-300"
                            : "text-slate-400"
                      }`}
                    >
                      {step.subtitle}
                    </p>
                  </div>
                  <span className="text-slate-500 text-xs shrink-0">
                    {step.date}
                  </span>
                </div>
              </div>

              {/* Arrow between cards on mobile */}
              {index < journeySteps.length - 1 && (
                <div className="py-2 text-slate-600">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="rotate-90">
                    <path d="M1 8H15M15 8L9 2M15 8L9 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Date labels under desktop cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="hidden md:flex items-center justify-center gap-4 lg:gap-6 mt-3"
        >
          <div className="hidden lg:block w-16" />
          {journeySteps.map((step, index) => (
            <div key={index} className="flex items-center gap-4 lg:gap-6">
              <div className="w-56 lg:w-64 text-center">
                <p className="text-xs text-slate-500">
                  {step.date}
                </p>
              </div>
              {index < journeySteps.length - 1 && (
                <div className="w-4 shrink-0" />
              )}
            </div>
          ))}
          <div className="hidden lg:block w-16" />
        </motion.div>
      </div>
    </section>
  );
}
