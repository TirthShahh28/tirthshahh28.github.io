"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";
import { identity } from "@/lib/portfolio";

export default function Contact() {
  const L = identity.links;

  return (
    <section id="contact" className="section-pad contact">
      <div className="wrap">
        <Reveal className="contact-card">
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            07 — let&apos;s talk
          </span>
          <h2 style={{ marginTop: 16 }}>Open to full-time roles in 2026.</h2>
          <p>
            Backend, data, or applied-AI engineering — if your team ships things
            real users depend on, I&apos;d love to chat.
          </p>
          <div className="contact-cta">
            <a className="btn btn-primary" href={`mailto:${L.email}`}>
              <Mail size={16} /> {L.email}
            </a>
            <a
              className="btn btn-ghost"
              href={L.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              className="btn btn-ghost"
              href={L.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
