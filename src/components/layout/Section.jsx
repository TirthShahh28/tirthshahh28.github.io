import { motion } from 'framer-motion'
import { fadeInUp } from '../../utils/animations'

export default function Section({ id, title, children, className = '' }) {
  return (
    <section id={id} className={`py-20 px-6 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {title && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-white mb-4">
              {title}
            </h2>
            <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}
