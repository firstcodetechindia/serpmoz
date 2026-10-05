"use client";

import { useEffect, useLayoutEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Seconds */
  delay?: number;
  /** Vertical travel in px. Keep small – this is a settle, not an entrance. */
  y?: number;
  as?: "div" | "li" | "section";
};

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * Scroll reveal for section-level blocks.
 *
 * Fail-safe by design: content is server-rendered visible and is only hidden
 * once React has actually hydrated (RevealGate below sets a flag on <html>).
 * If scripts are blocked, fail to load or never hydrate, nothing is hidden –
 * the page simply shows everything without the entrance animation.
 */
export function Reveal({ children, className, delay = 0, y = 16, as = "div" }: Props) {
  const ref = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;
    const show = () => node.setAttribute("data-revealed", "");
    if (!("IntersectionObserver" in window)) return show();
    // Anything already on screen (or above it, e.g. after an anchor jump) shows immediately.
    if (node.getBoundingClientRect().top < window.innerHeight * 1.1) return show();
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          show();
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px 12% 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const props = {
    className,
    "data-reveal": "",
    style: { "--reveal-y": `${y}px`, "--reveal-delay": `${delay}s` } as React.CSSProperties,
  };

  // Explicit branches keep the ref typed per element.
  if (as === "li") return <li ref={ref as React.RefObject<HTMLLIElement>} {...props}>{children}</li>;
  if (as === "section") return <section ref={ref} {...props}>{children}</section>;
  return <div ref={ref as React.RefObject<HTMLDivElement>} {...props}>{children}</div>;
}

/**
 * Mounted once in the root layout. Its only job is to tell the stylesheet that
 * hydration succeeded, which is what arms the hidden state for Reveal blocks.
 */
export function RevealGate() {
  useIsoLayoutEffect(() => {
    document.documentElement.setAttribute("data-reveal-ready", "");
  }, []);
  return null;
}
