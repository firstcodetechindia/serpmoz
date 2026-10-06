"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Floating "back to top". Appears once the first screen has been scrolled past
 * and stays for the rest of the page; the ring fills as the page is read.
 */
const R = 22;
const C = 2 * Math.PI * R;

export function BackToTop() {
  const [show, setShow] = useState(false);
  const ring = useRef<SVGCircleElement>(null);

  useEffect(() => {
    let frame = 0;
    const read = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const on = window.scrollY > window.innerHeight * 0.9;
      setShow((cur) => (cur === on ? cur : on));
      const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      ring.current?.setAttribute("stroke-dashoffset", String(C * (1 - progress)));
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


  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
      className={cn(
        "back-to-top group fixed right-4 bottom-4 z-40 flex size-12 items-center justify-center rounded-full bg-navy text-white shadow-float transition-all duration-300 ease-out-quint hover:bg-orange hover:text-navy md:right-6 md:bottom-6",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <svg aria-hidden viewBox="0 0 48 48" className="absolute inset-0 size-full -rotate-90">
        <circle cx="24" cy="24" r={R} fill="none" stroke="rgb(255 255 255 / 0.18)" strokeWidth="2" />
        <circle ref={ring} cx="24" cy="24" r={R} fill="none" stroke="var(--color-orange)" strokeWidth="2" strokeLinecap="round" strokeDasharray={C} strokeDashoffset={C} className="group-hover:stroke-navy" />
      </svg>
      <ArrowUp aria-hidden className="relative size-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
    </button>
  );
}
