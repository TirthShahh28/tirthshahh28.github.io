"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { FaArrowRight } from "react-icons/fa";

const journeySteps = [
  {
    logo: null,
    fallback: "CS",
    title: "Capital Spirits",
    subtitle: "Software Engineer",
    tags: "C# \u00B7 ASP.NET MVC \u00B7 SQL Server \u00B7 REST APIs \u00B7 Git\nE-commerce + admin portal; catalog/checkout; production support",
    date: "Jun 2025 \u2013 Mar 2026",
    bgColor: "bg-emerald-600",
    highlight: false,
  },
  {
    logo: null,
    fallback: "DfH",
    title: "Digital for Humanity",
    subtitle: "Software Engineer \u00B7 Remote",
    tags: "Python \u00B7 SQL \u00B7 C# \u00B7 ASP.NET MVC \u00B7 Airflow \u00B7 ETL\nETL pipelines + internal C# tools on SQL Server",
    date: "Jan 2022 \u2013 Apr 2024",
    bgColor: "bg-slate-700",
    highlight: false,
  },
  {
    logo: "/uconn-logo.svg",
    fallback: "UCONN",
    title: "University of Connecticut",
    subtitle: "Software Engineer",
    tags: "Python \u00B7 SQL \u00B7 Automation \u00B7 PostgreSQL\nOps automation for accommodation/exam scheduling; ETL validation",
    date: "Sep 2024 \u2013 May 2026",
    bgColor: "bg-[#0e2240]",
    highlight: true,
  },
  {
    logo: null,
    fallback: null,
    title: "Next Role",
    subtitle: "Open to Full-Time Roles",
    tags: "Software Engineer \u00B7 Backend \u00B7 Enterprise Applications \u00B7 Applied AI",
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
          className="hidden lg:flex items-center justify-center gap-3"
        >
          <div className="w-8 border-t-2 border-dashed border-slate-700" />

          {journeySteps.map((step, index) => (
            <div key={index} className="flex items-center gap-3">
              <div
                className={`rounded-xl border text-center transition-all w-52 xl:w-56 ${
                  step.isNextRole
                    ? "bg-slate-800 border-slate-600 p-4"
                    : step.highlight
                      ? "bg-[#0e2240] border-[#1a3a5c] p-4"
                      : "bg-[#141414] border-white/10 p-4"
                }`}
              >
                {step.logo ? (
                  <div className="flex justify-center mb-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={step.logo}
                      alt={step.title}
                      className="h-10 w-auto object-contain"
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

              {index < journeySteps.length - 1 && (
                <FaArrowRight
                  className="shrink-0 text-slate-600"
                  size={14}
                />
              )}
            </div>
          ))}

          <div className="w-8 border-t-2 border-dashed border-slate-700" />
        </motion.div>

        {/* Tablet - 2x2 grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
          className="hidden md:grid lg:hidden grid-cols-2 gap-4"
        >
          {journeySteps.map((step, index) => (
            <div
              key={index}
              className={`rounded-xl border text-center p-4 ${
                step.isNextRole
                  ? "bg-slate-800 border-slate-600"
                  : step.highlight
                    ? "bg-[#0e2240] border-[#1a3a5c]"
                    : "bg-[#141414] border-white/10"
              }`}
            >
              {step.fallback && !step.logo && (
                <div className="flex justify-center mb-3">
                  <div
                    className={`w-10 h-10 rounded-lg ${step.bgColor} flex items-center justify-center`}
                  >
                    <span className="text-white font-bold text-xs">
                      {step.fallback}
                    </span>
                  </div>
                </div>
              )}
              {step.logo && (
                <div className="flex justify-center mb-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={step.logo}
                    alt={step.title}
                    className="h-10 w-auto object-contain"
                  />
                </div>
              )}
              <h3 className="font-bold text-sm mb-1 text-white">{step.title}</h3>
              <p className="text-xs text-slate-400 whitespace-pre-line">
                {step.subtitle}
              </p>
              {step.tags && (
                <p className="text-[10px] mt-1 text-slate-500 whitespace-pre-line">
                  {step.tags}
                </p>
              )}
              <p className="text-[10px] mt-2 text-slate-600">{step.date}</p>
            </div>
          ))}
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
                    {step.date.split(" \u2013 ")[0]}
                  </span>
                </div>
              </div>

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
          className="hidden lg:flex items-center justify-center gap-3 mt-3"
        >
          <div className="w-8" />
          {journeySteps.map((step, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-52 xl:w-56 text-center">
                <p className="text-xs text-slate-500">{step.date}</p>
              </div>
              {index < journeySteps.length - 1 && (
                <div className="w-3.5 shrink-0" />
              )}
            </div>
          ))}
          <div className="w-8" />
        </motion.div>
      </div>
    </section>
  );
}
