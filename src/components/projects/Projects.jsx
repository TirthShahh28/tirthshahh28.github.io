import { motion } from 'framer-motion'
import Section from '../layout/Section'
import ProjectCard from './ProjectCard'
import { projects } from '../../assets/data/projects'
import { staggerContainer } from '../../utils/animations'

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </Section>
  )
}
