import { motion } from 'framer-motion'
import { FaCode, FaBrain, FaTools, FaDatabase } from 'react-icons/fa'
import Section from '../layout/Section'
import SkillCategory from './SkillCategory'
import { skills } from '../../assets/data/skills'
import { staggerContainer } from '../../utils/animations'

const iconMap = {
  FaCode: <FaCode />,
  FaBrain: <FaBrain />,
  FaTools: <FaTools />,
  FaDatabase: <FaDatabase />,
}

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {skills.map((skill) => (
          <SkillCategory
            key={skill.category}
            {...skill}
            icon={iconMap[skill.iconName]}
          />
        ))}
      </motion.div>
    </Section>
  )
}
