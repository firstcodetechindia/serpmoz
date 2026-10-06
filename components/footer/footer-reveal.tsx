"use client";

import { useEffect } from "react";

/**
 * Two small jobs for the footer, both set as attributes on <html> so the
 * styling stays in CSS:
 *  - data-footer-reveal: the whole footer fits on screen, so it can sit behind
 *    the page and be uncovered like a shutter. Checked on every resize and
 *    whenever the footer changes height (a row opened on a phone).
 *  - data-footer-live: the visitor has reached the bottom, which starts the
 *    wordmark animation. It is off the rest of the time so nothing animates
 *    behind the page.
 */
export function FooterReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const footer = document.querySelector<HTMLElement>("footer.footer-reveal");
    if (!footer) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const fits = footer.offsetHeight <= root.clientHeight;
      root.toggleAttribute("data-footer-reveal", fits);
      const left = root.scrollHeight - (window.scrollY + window.innerHeight);
      root.toggleAttribute("data-footer-live", left < Math.min(footer.offsetHeight * 0.45, 260));
    };
    const queue = () => { if (!frame) frame = requestAnimationFrame(update); };

    update();
    const sizes = new ResizeObserver(queue);
    sizes.observe(footer);
    window.addEventListener("resize", queue);
    window.addEventListener("scroll", queue, { passive: true });
    return () => {
      sizes.disconnect();
      window.removeEventListener("resize", queue);
      window.removeEventListener("scroll", queue);
      if (frame) cancelAnimationFrame(frame);
      root.removeAttribute("data-footer-reveal");
      root.removeAttribute("data-footer-live");
    };
  }, []);
  return null;
}
