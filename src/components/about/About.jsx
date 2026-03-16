import { motion } from 'framer-motion'
import { FaRobot, FaGraduationCap, FaCode } from 'react-icons/fa'
import Section from '../layout/Section'
import { fadeInUp, staggerContainer, scaleIn } from '../../utils/animations'

const highlights = [
  { icon: <FaRobot />, label: '5+ AI Projects', color: 'text-cyan-400' },
  { icon: <FaGraduationCap />, label: "Master's Student", color: 'text-violet-400' },
  { icon: <FaCode />, label: '3+ Years Coding', color: 'text-emerald-400' },
]

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Photo */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 blur-xl opacity-20" />
            <div className="relative w-full h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 p-[3px]">
              <div className="w-full h-full rounded-full bg-[#0a0a0f] flex items-center justify-center overflow-hidden">
                {/* Replace with your photo: <img src={profileImg} alt="Tirth" className="w-full h-full object-cover" /> */}
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <p className="text-gray-300 leading-relaxed mb-4">
            I&apos;m a graduate student in my final semester, specializing in{' '}
            <span className="text-cyan-400 font-medium">Artificial Intelligence</span> and{' '}
            <span className="text-violet-400 font-medium">Machine Learning</span>. My passion
            lies in building intelligent systems that solve real-world problems.
          </p>
          <p className="text-gray-400 leading-relaxed mb-6">
            From fine-tuning large language models to deploying scalable ML pipelines, I enjoy
            the full spectrum of AI engineering. I&apos;m actively seeking opportunities where I
            can contribute to cutting-edge AI research and product development.
          </p>

          {/* Highlight cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-3"
          >
            {highlights.map((item) => (
              <motion.div
                key={item.label}
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-center backdrop-blur-sm"
              >
                <span className={`text-2xl ${item.color} block mb-2`}>{item.icon}</span>
                <span className="text-xs text-gray-300 font-medium">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}
