"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#coding", label: "Activity" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // Watch for dark-mode class changes on body
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains("dark-mode"));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    setIsDark(document.body.classList.contains("dark-mode"));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5"
            : "bg-white/90 backdrop-blur-xl border-b border-slate-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#hero"
          className={`text-lg font-bold tracking-tight font-mono ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          <span className="text-emerald-500">Tirth</span> Shah
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors text-sm px-3 py-2 rounded-lg ${
                isDark
                  ? "text-slate-400 hover:text-white hover:bg-white/5"
                  : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-sm px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-lg hover:bg-emerald-500/20 transition-all"
          >
            Resume
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className={`p-2 rounded-lg transition-colors ${
              isDark
                ? "text-slate-400 hover:text-white hover:bg-white/5"
                : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className={`md:hidden backdrop-blur-xl border-t ${
            isDark
              ? "bg-[#0a0a0a]/95 border-white/5"
              : "bg-white/95 border-slate-200"
          }`}
        >
          <div className="flex flex-col items-center gap-2 py-6 px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors w-full text-center py-2 rounded-lg ${
                  isDark
                    ? "text-slate-400 hover:text-white hover:bg-white/5"
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-sm px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-lg hover:bg-emerald-500/20 transition-all"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
