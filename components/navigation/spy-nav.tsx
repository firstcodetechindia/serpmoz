"use client";

import { useEffect, useRef, type ComponentProps } from "react";

/**
 * An in-page menu that marks where the reader is. It watches the sections its
 * own `#links` point at and sets `aria-current="location"` on the link for the
 * section currently under the header. Style the active link with
 * `aria-[current=location]:` classes.
 */
export function SpyNav({ offset = 140, children, ...props }: ComponentProps<"nav"> & { offset?: number }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = ref.current;
    if (!nav) return;
    const links = [...nav.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')];
    const pairs = links
      .map((link) => ({ link, target: document.getElementById(decodeURIComponent(link.hash.slice(1))) }))
      .filter((p): p is { link: HTMLAnchorElement; target: HTMLElement } => p.target !== null);
    if (!pairs.length) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      // The last section whose top has passed under the header is the current one.
      let current: HTMLAnchorElement | null = null;
      for (const p of pairs) if (p.target.getBoundingClientRect().top <= offset) current = p.link;
      // At the very end of the page the last section may never reach the header.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4 && pairs.at(-1)!.target.getBoundingClientRect().top < window.innerHeight) current = pairs.at(-1)!.link;
      for (const p of pairs) {
        if (p.link === current) p.link.setAttribute("aria-current", "location");
        else p.link.removeAttribute("aria-current");
      }
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [offset]);

  return <nav ref={ref} {...props}>{children}</nav>;
}
