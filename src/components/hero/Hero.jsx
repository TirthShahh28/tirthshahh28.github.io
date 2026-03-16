import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaDownload, FaArrowRight, FaChevronDown } from 'react-icons/fa'
import ParticlesBg from './ParticlesBg'
import TypedTagline from './TypedTagline'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticlesBg />

      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg mb-4 tracking-widest uppercase"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-heading)] mb-6"
        >
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            Tirth
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          I&apos;m a <TypedTagline />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Master&apos;s student passionate about building intelligent systems.
          Exploring the intersection of AI, machine learning, and software engineering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/resume.pdf"
            download
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300"
          >
            <FaDownload className="group-hover:animate-bounce" />
            Download Resume
          </a>
          <Link
            to="contact"
            smooth
            duration={500}
            offset={-80}
            className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 cursor-pointer"
          >
            Get in Touch
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link to="about" smooth duration={500} offset={-80} className="cursor-pointer">
          <FaChevronDown className="text-gray-500 text-xl animate-bounce" />
        </Link>
      </motion.div>
    </section>
  )
}
