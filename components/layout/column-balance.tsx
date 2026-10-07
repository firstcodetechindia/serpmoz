"use client";

import { useEffect } from "react";
import { photos, type PhotoKey } from "@/data/images";

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
    const pool: PhotoKey[] = ["strategyWhiteboard", "analystScreens", "teamWorkshop", "analystDesk", "teamMeeting", "technology"];
    const topics: [RegExp, PhotoKey][] = [
      [/measur|report|data|result|number|track|analytic/i, "analystScreens"],
      [/process|how|step|work|plan|roadmap/i, "teamWorkshop"],
      [/search|ai|answer|technical|build|system/i, "technology"],
      [/market|city|local|place|region|where/i, "skyline"],
      [/challenge|problem|hard|why|risk|mistake/i, "strategyWhiteboard"],
      [/who|team|fit|suits|model|engage/i, "teamMeeting"],
    ];
    /** A photo that belongs to the page: the sector for an industry page, otherwise the section's own topic. */
    const pick = (el: HTMLElement): { id: string; alt: string; focus?: string } => {
      const slug = location.pathname.match(/\/industries\/([^/]+)|-for-([a-z-]+?)\/?$/);
      const sector = (slug?.[1] ?? slug?.[2]) as PhotoKey | undefined;
      if (sector && photos[sector]) return photos[sector];
      const head = el.closest("section")?.querySelector("h2")?.textContent ?? el.textContent ?? "";
      const hit = topics.find(([re]) => re.test(head));
      return photos[hit ? hit[1] : pool[seed++ % pool.length]];
    };
    const addPhoto = (host: HTMLElement, kind: "col" | "head", height: number, tone: string) => {
      const ph = pick(host);
      const box = document.createElement("div");
      box.className = "col-photo";
      box.setAttribute("data-photo", "");
      box.setAttribute("data-kind", kind);
      box.setAttribute("data-tone", tone);
      box.setAttribute("aria-hidden", "true");
      box.style.height = `${Math.round(height)}px`;
      const img = document.createElement("img");
      img.alt = "";
      img.loading = "lazy";
      img.decoding = "async";
      img.src = `https://images.unsplash.com/${ph.id}?auto=format&fit=crop&w=900&q=65`;
      if (ph.focus) img.style.objectPosition = ph.focus;
      box.appendChild(img);
      host.appendChild(box);
    };
    /** A heading block that fills only the left of a full-width row gets a photo on the right, so the row is not half empty. */
    const headings = () => {
      for (const h of document.querySelectorAll<HTMLElement>("main section h2")) {
        if (h.closest("[data-hero], header, [aria-labelledby='growth-system-title'], [aria-labelledby='final-cta-title']")) continue;
        const shell = h.closest<HTMLElement>(".shell");
        if (!shell) continue;
        let block: HTMLElement = h;
        while (block.parentElement && block.parentElement !== shell) block = block.parentElement;
        // A heading placed straight in the shell has no wrapper of its own: the shell hosts the photo and only the heading area counts.
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
        if (height < 100 || hostBox.width < sr.width * 0.9 || sr.right - right < 340) continue;
        if (!direct && block.querySelector("img, picture, svg, video, form, input, button, a, ul, ol, table")) continue;
        block = host;
        block.setAttribute("data-head-art", "");
        addPhoto(block, "head", height, toneOf(block));
      }
    };
    const run = () => {
      seed = 0;
      frame = 0;
      document.querySelectorAll("[data-photo]").forEach((e) => e.remove());
      document.querySelectorAll<HTMLElement>("[data-pin]").forEach((e) => e.removeAttribute("data-pin"));
      document.querySelectorAll<HTMLElement>("[data-head-art]").forEach((e) => e.removeAttribute("data-head-art"));
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
            // A short text column also gets a photo under it, so the space is used and not just kept.
            const plain = text < 500 && !k.querySelector("img, picture, video, form, input, textarea, select, table");
            const fill = Math.min(tall - h - 40, room - h - 40, 560);
            const art = plain && tall - h >= 300 && fill >= 220;
            if (!art && h > room) continue;
            k.setAttribute("data-pin", "");
            if (art) addPhoto(k, "col", fill, toneOf(k));
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
