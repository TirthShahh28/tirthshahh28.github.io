import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { fadeInUp } from '../../utils/animations'

export default function ProjectCard({ project }) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -8 }}
      className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-400/5 transition-all duration-300"
    >
      {/* Gradient top bar */}
      <div className="h-1 bg-gradient-to-r from-cyan-400 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center gap-3 ml-3 shrink-0">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-cyan-400 transition-colors"
                aria-label="Live demo"
              >
                <FaExternalLinkAlt size={16} />
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
