"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { fadeIn } from "@/lib/animations";

export default function About() {
  return (
    <Section id="about" title="About">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="max-w-3xl"
      >
        <p className="text-slate-300 leading-relaxed mb-4">
          I&apos;m an AI/Software Engineer finishing my M.S. in Computer Science
          &amp; Engineering at the{" "}
          <span className="text-white font-medium">
            University of Connecticut
          </span>
          . I specialize in building production-grade AI systems — RAG pipelines,
          LLM integrations, search engines, and data-driven backends.
        </p>
        <p className="text-slate-300 leading-relaxed mb-4">
          At{" "}
          <span className="text-white font-medium">Capital Spirits</span>, I
          integrated AI-powered search across 30,000+ products with sub-50ms
          latency. At UConn&apos;s Center for Students with Disabilities, I
          built Python automation pipelines that reduced manual workload by 40%.
        </p>
        <p className="text-slate-300 leading-relaxed">
          I&apos;m passionate about turning ML research into real products. My
          toolkit spans from LangChain and PyTorch to FastAPI and Docker — and
          I&apos;m always looking to learn more.
        </p>
      </motion.div>
    </Section>
  );
}
