import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/animations'

export default function Section({ id, title, children, className = '' }) {
  return (
    <section id={id} className={`py-20 px-6 ${className}`}>
      <div className="max-w-5xl mx-auto">
        {title && (
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="text-2xl font-semibold text-white mb-10 flex items-center gap-3"
          >
            <span>{title}</span>
            <span className="flex-1 h-px bg-slate-800" />
          </motion.h2>
        )}
        {children}
      </div>
    </section>
  )
}
