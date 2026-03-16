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
    <section id={id} className={`py-24 px-6 ${className}`}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-3xl font-bold text-white whitespace-nowrap">
            {title}
          </h2>
          <div className="section-line flex-1" />
        </motion.div>
        {children}
      </div>
    </section>
  );
}
