import { identity } from "@/lib/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="logo">
          <span className="dot" /> {identity.name}
        </div>
        <span className="mono">
          Designed &amp; built in React · Next.js · Tailwind · Framer Motion
        </span>
        <span>
          © {new Date().getFullYear()} · {identity.location}
        </span>
      </div>
    </footer>
  );
}
