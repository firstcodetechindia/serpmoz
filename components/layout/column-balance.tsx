"use client";

import { useEffect } from "react";

/**
 * Two-column sections often have one long column and one short one, which
 * leaves a gap under the short one. On large screens this pins the shorter
 * column so it stays in view while the longer one scrolls, as the heading
 * columns already do. It only touches a column that is clearly shorter than
 * its neighbour and fits on screen, and it leaves columns that already pin
 * themselves alone. Rules for the attribute are in globals.css.
 */
export function ColumnBalance() {
  useEffect(() => {
    const wide = window.matchMedia("(min-width: 1024px)");
    let frame = 0;
    /** How tall a column's content really is. A grid stretches every column to the tallest, so the box itself says nothing. */
    const contentHeight = (k: HTMLElement) => {
      const top = k.getBoundingClientRect().top;
      let bottom = top;
      for (const d of k.querySelectorAll<HTMLElement>("*")) {
        const r = d.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) continue;
        const pos = getComputedStyle(d).position;
        if (pos === "absolute" || pos === "fixed") continue;
        bottom = Math.max(bottom, r.bottom);
      }
      return bottom - top;
    };
    const run = () => {
      frame = 0;
      const marked = document.querySelectorAll<HTMLElement>("[data-pin]");
      marked.forEach((e) => e.removeAttribute("data-pin"));
      if (!wide.matches) return;
      const room = window.innerHeight - 150;
      for (const grid of document.querySelectorAll<HTMLElement>("main .grid")) {
        if (grid.closest('[aria-labelledby="growth-system-title"]')) continue;
        if (getComputedStyle(grid).gridTemplateColumns.split(" ").length < 2) continue;
        const kids = [...grid.children].filter((k): k is HTMLElement => k instanceof HTMLElement && k.getBoundingClientRect().height > 40);
        const rows = new Map<number, HTMLElement[]>();
        for (const k of kids) {
          const top = Math.round(k.getBoundingClientRect().top / 6);
          rows.set(top, [...(rows.get(top) ?? []), k]);
        }
        for (const row of rows.values()) {
          if (row.length < 2) continue;
          const tall = Math.max(...row.map((k) => k.getBoundingClientRect().height));
          for (const k of row) {
            const h = contentHeight(k);
            const pinned = getComputedStyle(k).position === "sticky" || [...k.querySelectorAll<HTMLElement>("*")].some((d) => getComputedStyle(d).position === "sticky");
            const real = k.getAttribute("aria-hidden") !== "true" && (k.textContent ?? "").trim().length > 60 && h >= 120;
            if (!pinned && real && h <= tall * 0.8 && tall - h >= 200 && h <= room) k.setAttribute("data-pin", "");
          }
        }
      }
    };
    const queue = () => { if (!frame) frame = requestAnimationFrame(run); };
    const settle = window.setTimeout(queue, 600);
    const watch = new ResizeObserver(queue);
    watch.observe(document.body);
    wide.addEventListener("change", queue);
    window.addEventListener("load", queue);
    return () => {
      window.clearTimeout(settle);
      watch.disconnect();
      wide.removeEventListener("change", queue);
      window.removeEventListener("load", queue);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
  return null;
}
