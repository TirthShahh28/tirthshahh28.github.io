import { motion } from 'framer-motion'
import { fadeInLeft } from '../../utils/animations'

export default function TimelineItem({ date, title, subtitle, description, tags, isLast }) {
  return (
    <motion.div
      variants={fadeInLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative pl-8 pb-10"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[7px] top-3 bottom-0 w-px bg-gradient-to-b from-cyan-400/40 to-violet-500/40" />
      )}

      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 shadow-lg shadow-cyan-400/20" />

      {/* Card */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm hover:border-white/20 transition-colors">
        <span className="text-xs text-cyan-400 font-medium tracking-wider uppercase">
          {date}
        </span>
        <h3 className="text-white font-semibold text-lg mt-1">{title}</h3>
        <p className="text-violet-400 text-sm font-medium mt-0.5">{subtitle}</p>

        {typeof description === 'string' ? (
          <p className="text-gray-400 text-sm mt-3 leading-relaxed">{description}</p>
        ) : (
          <ul className="text-gray-400 text-sm mt-3 space-y-1.5 list-disc list-inside">
            {description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}

        {tags && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-violet-400/10 text-violet-300 border border-violet-400/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
