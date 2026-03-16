"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-20 px-6 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          className="text-2xl font-semibold text-white mb-10 flex items-center gap-4"
        >
          <span>{title}</span>
          <span className="flex-1 h-px bg-slate-800" />
        </motion.h2>
        {children}
      </div>
    </section>
  );
}
