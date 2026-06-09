"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { identity } from "@/lib/portfolio";
import { useScrollSpy } from "@/lib/hooks";

const links = [
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["education", "Education"],
  ["contact", "Contact"],
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useScrollSpy([
    "hero",
    "experience",
    "projects",
    "skills",
    "education",
    "contact",
  ]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <a href="#hero" className="logo" onClick={() => setOpen(false)}>
          <span className="dot" />
          tirth<span style={{ color: "var(--muted)" }}>.sh</span>
        </a>

        <div className="nav-links">
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`navlink ${active === id ? "active" : ""}`}
            >
              {label}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span className="nav-status" title={identity.status}>
            <span className="pulse" /> Open to 2026 roles
          </span>
          <a
            href={identity.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            <Download size={16} /> Résumé
          </a>
          <button
            className="nav-toggle"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu pop-in">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            href={identity.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Download résumé →
          </a>
        </div>
      )}
    </nav>
  );
}
