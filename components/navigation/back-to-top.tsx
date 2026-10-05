"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Floating "back to top". Appears once the first screen has been scrolled past
 * and stays for the rest of the page; the ring fills as the page is read.
 */
export function BackToTop() {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const read = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setShow(window.scrollY > window.innerHeight * 0.9);
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(read);
    };
    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  const r = 22;
  const c = 2 * Math.PI * r;

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
      className={cn(
        "group fixed right-4 bottom-4 z-40 flex size-12 items-center justify-center rounded-full bg-navy text-white shadow-float transition-all duration-300 ease-out-quint hover:bg-orange hover:text-navy md:right-6 md:bottom-6",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <svg aria-hidden viewBox="0 0 48 48" className="absolute inset-0 size-full -rotate-90">
        <circle cx="24" cy="24" r={r} fill="none" stroke="rgb(255 255 255 / 0.18)" strokeWidth="2" />
        <circle cx="24" cy="24" r={r} fill="none" stroke="var(--color-orange)" strokeWidth="2" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - progress)} className="group-hover:stroke-navy" />
      </svg>
      <ArrowUp aria-hidden className="relative size-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
    </button>
  );
}
