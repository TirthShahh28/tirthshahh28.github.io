"use client";

import { useEffect, useRef, useState } from "react";

export const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function fmt(n: number) {
  return n.toLocaleString("en-US");
}

export function startRevealManager() {
  if (typeof window === "undefined" || window.__revealMgr) return;
  window.__revealMgr = true;

  const inView = (el: Element) =>
    el.getBoundingClientRect().top < (window.innerHeight || 800) * 0.94;

  const scan = () => {
    document.querySelectorAll(".reveal:not(.in)").forEach((el) => {
      if (inView(el)) el.classList.add("in");
    });
  };

  const finalize = () => {
    document.querySelectorAll(".reveal.in").forEach((el) => {
      if (inView(el)) {
        (el as HTMLElement).style.transition = "none";
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "none";
      }
    });
  };

  if (prefersReduced()) {
    document.querySelectorAll(".reveal").forEach((el) => {
      el.classList.add("in");
      (el as HTMLElement).style.transition = "none";
    });
    return;
  }

  scan();
  window.addEventListener("scroll", scan, { passive: true });
  window.addEventListener("resize", scan);
  const iv = setInterval(scan, 250);
  const fin = setInterval(finalize, 400);
  setTimeout(() => {
    clearInterval(iv);
    clearInterval(fin);
  }, 6000);
}

export function useCountUp(target: number, { duration = 1500 } = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (prefersReduced()) {
      setVal(target);
      return;
    }

    let iv: ReturnType<typeof setInterval> | undefined;
    let started = false;

    const begin = () => {
      if (started) return;
      started = true;
      const t0 = Date.now();
      iv = setInterval(() => {
        const p = Math.min(1, (Date.now() - t0) / duration);
        setVal(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p >= 1 && iv) clearInterval(iv);
      }, 16);
    };

    let io: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window && ref.current) {
      io = new IntersectionObserver(
        (es) => es.forEach((e) => e.isIntersecting && begin()),
        { threshold: 0.3 },
      );
      io.observe(ref.current);
    }

    const fbStart = setTimeout(begin, 450);
    const fbEnd = setTimeout(() => setVal(target), duration + 800);

    return () => {
      if (iv) clearInterval(iv);
      clearTimeout(fbStart);
      clearTimeout(fbEnd);
      io?.disconnect();
    };
  }, [target, duration]);

  return [ref, val] as const;
}

export function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const pick = () => {
      const y = window.scrollY + window.innerHeight * 0.36;
      let cur = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      }
      setActive(cur);
    };

    pick();
    window.addEventListener("scroll", pick, { passive: true });
    const iv = setInterval(pick, 400);
    return () => {
      window.removeEventListener("scroll", pick);
      clearInterval(iv);
    };
  }, [ids]);

  return active;
}

declare global {
  interface Window {
    __revealMgr?: boolean;
  }
}
