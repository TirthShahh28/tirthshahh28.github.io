import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'

const navLinks = [
  { to: 'about', label: 'About' },
  { to: 'experience', label: 'Experience' },
  { to: 'projects', label: 'Projects' },
  { to: 'skills', label: 'Skills' },
  { to: 'education', label: 'Education' },
  { to: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0f172a]/90 backdrop-blur-sm border-b border-slate-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="hero"
          smooth
          duration={500}
          className="text-lg font-semibold text-white cursor-pointer tracking-tight"
        >
          Tirth Shah
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy
              smooth
              offset={-80}
              duration={500}
              activeClass="!text-blue-400"
              className="text-slate-400 hover:text-slate-200 transition-colors cursor-pointer text-sm"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-1.5 border border-blue-500 text-blue-400 rounded hover:bg-blue-500/10 transition-colors"
          >
            Resume
          </a>
        </div>

        <button
          className="md:hidden text-slate-400 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0f172a] border-t border-slate-800">
          <div className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy
                smooth
                offset={-80}
                duration={500}
                className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-1.5 border border-blue-500 text-blue-400 rounded hover:bg-blue-500/10 transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
