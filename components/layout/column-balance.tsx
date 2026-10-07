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
    /** Light or dark: the first solid background behind the column. */
    const toneOf = (el: HTMLElement) => {
      for (let n: HTMLElement | null = el; n; n = n.parentElement) {
        const m = getComputedStyle(n).backgroundColor.match(/[\d.]+/g);
        if (m && (m.length < 4 || Number(m[3]) > 0.6)) {
          const [r, g, b] = m.map(Number);
          return (0.299 * r + 0.587 * g + 0.114 * b) / 255 < 0.45 ? "dark" : "light";
        }
      }
      return "light";
    };
    let seed = 0;
    /** A heading block that fills only the left of a full-width row gets a drawing on the right, so the row is not half empty. */
    const headings = () => {
      for (const h of document.querySelectorAll<HTMLElement>("main section h2")) {
        if (h.closest("[data-hero], header, [aria-labelledby='growth-system-title'], [aria-labelledby='final-cta-title']")) continue;
        const shell = h.closest<HTMLElement>(".shell");
        if (!shell) continue;
        let block: HTMLElement = h;
        while (block.parentElement && block.parentElement !== shell) block = block.parentElement;
        // A heading placed straight in the shell has no wrapper of its own: the shell hosts the drawing and only the heading area counts.
        const direct = block === h;
        const host = direct ? shell : block;
        if (host.hasAttribute("data-head-art") || host.hasAttribute("data-pin") || host.closest("[data-pin]")) continue;
        const sr = shell.getBoundingClientRect();
        const sib = getComputedStyle(shell);
        if (sib.display === "grid" && sib.gridTemplateColumns.split(" ").length > 1) continue;
        if (sib.display.includes("flex") && sib.flexDirection.startsWith("row")) continue;
        const parts: HTMLElement[] = direct ? [h, ...(h.previousElementSibling instanceof HTMLElement ? [h.previousElementSibling] : []), ...(h.nextElementSibling instanceof HTMLElement && h.nextElementSibling.tagName === "P" ? [h.nextElementSibling] : [])] : [block];
        const hostBox = host.getBoundingClientRect();
        let right = hostBox.left;
        let bottom = hostBox.top;
        for (const el of parts) {
          for (const d of [el, ...el.querySelectorAll<HTMLElement>("h1, h2, h3, p")]) {
            // Where the words really end, not where their block does.
            const range = document.createRange();
            range.selectNodeContents(d);
            right = Math.max(right, range.getBoundingClientRect().right);
            bottom = Math.max(bottom, d.getBoundingClientRect().bottom);
          }
        }
        const height = direct ? bottom - hostBox.top : hostBox.height;
        if (height < 90 || hostBox.width < sr.width * 0.9 || sr.right - right < 340) continue;
        if (!direct && block.querySelector("img, picture, svg, video, form, input, button, a, ul, ol, table")) continue;
        block = host;
        block.style.setProperty("--head-h", `${Math.round(height)}px`);
        block.setAttribute("data-head-art", String(seed++ % 4));
        block.setAttribute("data-tone", toneOf(block));
      }
    };
    const run = () => {
      seed = 0;
      frame = 0;
      document.querySelectorAll<HTMLElement>("[data-pin]").forEach((e) => {
        e.removeAttribute("data-pin");
        e.removeAttribute("data-art");
        e.removeAttribute("data-tone");
      });
      document.querySelectorAll<HTMLElement>("[data-head-art]").forEach((e) => {
        e.removeAttribute("data-head-art");
        e.removeAttribute("data-tone");
        e.style.removeProperty("--head-h");
      });
      if (!wide.matches) return;
      const room = window.innerHeight - 150;
      headings();
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
            const text = (k.textContent ?? "").trim().length;
            const real = k.getAttribute("aria-hidden") !== "true" && text > 15 && h >= 90;
            if (pinned || !real || h > tall * 0.8 || tall - h < 200) continue;
            // A short text column also gets a drawing under it, so the space is used and not just kept.
            const plain = text < 500 && !k.querySelector("img, picture, video, form, input, textarea, select, table");
            const art = plain && tall - h >= 300 && h + 340 <= room;
            if (!art && h > room) continue;
            k.setAttribute("data-pin", "");
            if (art) {
              k.setAttribute("data-art", String(seed++ % 4));
              k.setAttribute("data-tone", toneOf(k));
            }
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
