import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Tirth. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/TirthShahh28"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-cyan-400 transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-cyan-400 transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="text-gray-500 hover:text-cyan-400 transition-colors"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
