import { motion } from 'framer-motion'
import Section from '../layout/Section'
import { education } from '../../assets/data/education'
import { fadeIn, stagger } from '../../utils/animations'

export default function Education() {
  return (
    <Section id="education" title="Education">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-8"
      >
        {education.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            className="border-l-2 border-slate-800 pl-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
              <div>
                <h3 className="text-white font-medium">{item.degree}</h3>
                <p className="text-blue-400 text-sm">
                  {item.school} — {item.location}
                </p>
              </div>
              <span className="text-slate-500 text-sm shrink-0">{item.date}</span>
            </div>
            <p className="text-slate-400 text-sm mb-3">GPA: {item.gpa}</p>

            {item.coursework.length > 0 && (
              <div>
                <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.coursework.map((course) => (
                    <span
                      key={course}
                      className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
