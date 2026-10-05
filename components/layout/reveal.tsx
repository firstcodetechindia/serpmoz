"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Seconds */
  delay?: number;
  /** Vertical travel in px. Keep small – this is a settle, not an entrance. */
  y?: number;
  as?: "div" | "li" | "section";
};

/**
 * Scroll reveal for section-level blocks.
 *
 * Content is server-rendered visible. It is only hidden once the `js` class is
 * on <html> (set by an inline script in the root layout), so crawlers, no-JS
 * visitors and reduced-motion users always get the content. The transition is
 * plain CSS (see globals.css) – no animation library on the critical path.
 */
export function Reveal({ children, className, delay = 0, y = 16, as = "div" }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const show = () => node.setAttribute("data-revealed", "");
    if (!("IntersectionObserver" in window)) return show();
    // Anything already on screen (or above it, e.g. after an anchor jump) shows immediately.
    if (node.getBoundingClientRect().top < window.innerHeight * 0.9) return show();
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          show();
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
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
