import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          Built by <span className="text-slate-400">Tirth Shah</span>
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/TirthShahh28"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-indigo-400 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/tirth-shah14/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-indigo-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
