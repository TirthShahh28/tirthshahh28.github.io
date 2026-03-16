import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import Section from '../layout/Section'
import { fadeIn } from '../../utils/animations'

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="max-w-lg"
      >
        <p className="text-slate-300 leading-relaxed mb-6">
          I&apos;m actively looking for full-time AI Engineering roles starting May 2026.
          If you have an opportunity, want to collaborate, or just want to chat — feel free
          to reach out.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="mailto:jmt24002@uconn.edu"
            className="text-sm px-5 py-2.5 border border-blue-500 text-blue-400 rounded hover:bg-blue-500/10 transition-colors"
          >
            jmt24002@uconn.edu
          </a>
          <a
            href="https://github.com/TirthShahh28"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </motion.div>
    </Section>
  )
}
