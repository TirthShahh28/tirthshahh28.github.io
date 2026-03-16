import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, scaleIn } from '../../utils/animations'

const colorMap = {
  cyan: {
    text: 'text-cyan-300',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20',
    icon: 'text-cyan-400',
  },
  violet: {
    text: 'text-violet-300',
    bg: 'bg-violet-400/10',
    border: 'border-violet-400/20',
    icon: 'text-violet-400',
  },
  emerald: {
    text: 'text-emerald-300',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/20',
    icon: 'text-emerald-400',
  },
  amber: {
    text: 'text-amber-300',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/20',
    icon: 'text-amber-400',
  },
}

export default function SkillCategory({ category, icon, color, items }) {
  const c = colorMap[color] || colorMap.cyan

  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className={`text-xl ${c.icon}`}>{icon}</span>
        <h3 className="text-white font-semibold">{category}</h3>
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap gap-2"
      >
        {items.map((item) => (
          <motion.span
            key={item}
            variants={scaleIn}
            whileHover={{ scale: 1.1 }}
            className={`text-xs px-3 py-1.5 rounded-full ${c.bg} ${c.text} border ${c.border} cursor-default`}
          >
            {item}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  )
}
