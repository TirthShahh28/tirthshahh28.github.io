"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains("dark-mode"));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    setIsDark(document.body.classList.contains("dark-mode"));
    return () => observer.disconnect();
  }, []);

  return (
    <footer className={`py-8 px-6 border-t ${isDark ? "border-white/5" : "border-slate-200"}`}>
      <div className="max-w-6xl mx-auto text-center">
        <p className={`text-sm ${isDark ? "text-slate-600" : "text-slate-400"}`}>
          &copy; {new Date().getFullYear()} Tirth Shah
        </p>
      </div>
    </footer>
  );
}
