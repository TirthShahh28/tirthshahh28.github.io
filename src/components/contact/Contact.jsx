import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaGoogleScholar } from 'react-icons/fa6'
import Section from '../layout/Section'
import { fadeInUp, staggerContainer, scaleIn } from '../../utils/animations'

const socials = [
  {
    icon: <FaGithub size={28} />,
    label: 'GitHub',
    href: 'https://github.com/tirthshah2812',
    color: 'hover:text-white hover:border-white/40 hover:shadow-white/10',
  },
  {
    icon: <FaLinkedin size={28} />,
    label: 'LinkedIn',
    href: 'https://linkedin.com/',
    color: 'hover:text-blue-400 hover:border-blue-400/40 hover:shadow-blue-400/10',
  },
  {
    icon: <FaEnvelope size={28} />,
    label: 'Email',
    href: 'mailto:your.email@example.com',
    color: 'hover:text-cyan-400 hover:border-cyan-400/40 hover:shadow-cyan-400/10',
  },
  {
    icon: <FaGoogleScholar size={28} />,
    label: 'Scholar',
    href: 'https://scholar.google.com/',
    color: 'hover:text-emerald-400 hover:border-emerald-400/40 hover:shadow-emerald-400/10',
  },
]

export default function Contact() {
  return (
    <Section id="contact" title="Let's Connect">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="text-center mb-10"
      >
        <p className="text-gray-400 max-w-lg mx-auto">
          I&apos;m currently looking for AI Engineering opportunities. Whether you have a
          question, a project idea, or just want to say hi — feel free to reach out!
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex items-center justify-center gap-6 flex-wrap"
      >
        {socials.map((social) => (
          <motion.a
            key={social.label}
            variants={scaleIn}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            href={social.href}
            target={social.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className={`flex flex-col items-center gap-2 w-24 h-24 rounded-xl bg-white/5 border border-white/10 justify-center text-gray-500 transition-all duration-300 shadow-lg ${social.color}`}
            aria-label={social.label}
          >
            {social.icon}
            <span className="text-xs font-medium">{social.label}</span>
          </motion.a>
        ))}
      </motion.div>
    </Section>
  )
}
