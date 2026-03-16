import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-blue-400 text-sm font-medium mb-3"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 tracking-tight"
          >
            Tirth Shah
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-400 mb-6"
          >
            AI & Software Engineer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-slate-400 max-w-lg leading-relaxed mb-8 mx-auto md:mx-0"
          >
            M.S. in Computer Science at the University of Connecticut. I build
            intelligent systems — from RAG pipelines and LLM integrations to
            scalable data workflows. Currently seeking full-time AI Engineering roles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex items-center gap-5 justify-center md:justify-start"
          >
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
            <a
              href="mailto:jmt24002@uconn.edu"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={22} />
            </a>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="shrink-0"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-slate-700">
            <img
              src="/profile.jpeg"
              alt="Tirth Shah"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
