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
    /** A card with its own fill, border or shadow already holds its content. It does not get a photo. */
    const isCard = (el: HTMLElement) => {
      const c = getComputedStyle(el);
      const m = c.backgroundColor.match(/[\d.]+/g);
      const alpha = m && m.length > 3 ? Number(m[3]) : m ? 1 : 0;
      return alpha > 0.05 || c.backgroundImage !== "none" || c.boxShadow !== "none" || parseFloat(c.borderTopWidth) > 0;
    };
    /** Does anything inside already carry its own fill or shadow? Then the column is a wrapper around a card, not bare text. */
    const holdsCard = (k: HTMLElement) =>
      [...k.querySelectorAll<HTMLElement>("*")].some((d) => {
        const c = getComputedStyle(d);
        const m = c.backgroundColor.match(/[\d.]+/g);
        const alpha = m && m.length > 3 ? Number(m[3]) : m ? 1 : 0;
        return alpha > 0.05 || c.backgroundImage !== "none" || c.boxShadow !== "none";
      });
    // Which photo belongs to which kind of section. Each photo is used once per page.
    const topics: [RegExp, PhotoKey][] = [
      [/challenge|hard|problem|why|strateg|approach|roadmap|method|mistake|risk/i, "strategyWhiteboard"],
      [/measur|report|data|dashboard|attribut|analytic|track|number|revenue/i, "analystScreens"],
      [/conversion|funnel|lost|rate|performance|audit|diagnos|baseline|enquir/i, "analystDesk"],
      [/process|how we|step|content|creative|build|workshop|programme|delivery/i, "teamWorkshop"],
      [/who|team|fit|suits|model|partner|collaborat|engage|work together/i, "teamMeeting"],
      [/search|ai\b|answer|technical|schema|crawl|speed|system|platform|website/i, "technology"],
      [/market|city|region|where|country|national|global|discover/i, "skyline"],
      [/local|map|profile|listing|nearby|store|shop|small/i, "local-business"],
      [/b2b|enterprise|buyer|sales|pipeline|lead|account/i, "b2b"],
      [/advice|trust|expert|credib|review|reputation|consult/i, "professional-services"],
    ];
    const general: PhotoKey[] = ["teamOffice", "strategyWhiteboard", "analystScreens", "teamWorkshop", "teamMeeting", "analystDesk", "technology", "skyline", "b2b", "local-business", "professional-services"];
    const used = new Set<string>();
    /** The sector photo first on an industry page, then the photo that fits the section's own words, never one twice on a page. */
    const pick = (el: HTMLElement) => {
      const slug = location.pathname.match(/\/industries\/([^/]+)|-for-([a-z-]+?)\/?$/);
      const sector = (slug?.[1] ?? slug?.[2]) as PhotoKey | undefined;
      if (sector && photos[sector] && !used.has(sector)) { used.add(sector); return photos[sector]; }
      const words = `${el.closest("section")?.querySelector("h2")?.textContent ?? ""} ${el.textContent ?? ""}`;
      let best: PhotoKey | undefined;
      let score = 0;
      for (const [re, key] of topics) {
        if (used.has(key)) continue;
        const n = (words.match(new RegExp(re.source, "gi")) ?? []).length;
        if (n > score) { score = n; best = key; }
      }
      best ??= general.find((k) => !used.has(k)) ?? general[used.size % general.length];
      used.add(best);
      return photos[best];
    };
    /** A full-bleed photo behind the host. Text sits on top and turns white. */
    const addPhoto = (host: HTMLElement, kind: "col" | "head" | "cell", height: number) => {
      const ph = pick(host);
      const box = document.createElement("div");
      box.className = "col-photo";
      box.setAttribute("data-photo", "");
      box.setAttribute("data-kind", kind);
      box.setAttribute("aria-hidden", "true");
      if (kind === "head") box.style.height = `${Math.round(height) + 40}px`;
      const img = document.createElement("img");
      img.alt = "";
      img.loading = "lazy";
      img.decoding = "async";
      img.src = `https://images.unsplash.com/${ph.id}?auto=format&fit=crop&w=1400&q=65`;
      if (ph.focus) img.style.objectPosition = ph.focus;
      box.appendChild(img);
      host.insertBefore(box, host.firstChild);
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
        if (isCard(host) || host.hasAttribute("data-head-art") || host.closest("[data-photo-col]")) continue;
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
        for (const el of direct ? parts : [block]) el.setAttribute("data-on-photo", "");
        addPhoto(block, "head", height);
      }
    };
    const run = () => {
      frame = 0;
      document.querySelectorAll("[data-photo]").forEach((e) => e.remove());
      for (const attr of ["data-pin", "data-photo-col", "data-head-art", "data-on-photo", "data-photo-host"]) document.querySelectorAll(`[${attr}]`).forEach((e) => e.removeAttribute(attr));
      used.clear();
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
          if (row.length === 1) {
            // A lone card in the first column leaves the rest of its row empty: a photo fills that slot.
            const [only] = row;
            const g = grid.getBoundingClientRect();
            const r = only.getBoundingClientRect();
            const free = g.right - r.right;
            if (r.left - g.left < 24 && r.width < g.width * 0.62 && free >= 300 && r.height >= 120 && r.height <= 700 && !grid.hasAttribute("data-photo-host")) {
              const gap = parseFloat(getComputedStyle(grid).columnGap) || 24;
              grid.setAttribute("data-photo-host", "");
              addPhoto(grid, "cell", r.height);
              const cell = grid.querySelector<HTMLElement>(":scope > [data-kind='cell']");
              if (cell) {
                cell.style.left = `${Math.round(r.right - g.left + gap)}px`;
                cell.style.top = `${Math.round(r.top - g.top)}px`;
                cell.style.width = `${Math.round(free - gap)}px`;
                cell.style.height = `${Math.round(r.height)}px`;
              }
            }
            continue;
          }
          const tall = Math.max(...row.map((k) => k.getBoundingClientRect().height));
          for (const k of row) {
            const h = contentHeight(k);
            const pinned = getComputedStyle(k).position === "sticky" || [...k.querySelectorAll<HTMLElement>("*")].some((d) => getComputedStyle(d).position === "sticky");
            const text = (k.textContent ?? "").trim().length;
            const real = k.getAttribute("aria-hidden") !== "true" && text > 15 && h >= 50;
            if (!real || isCard(k) || h > tall * 0.8 || tall - h < 140) continue;
            // A short text column becomes a photo card the full height of its row, with its text on the photo.
            const plain = text < 500 && !k.querySelector("img, picture, video, form, input, textarea, select, table") && !holdsCard(k);
            if (plain) {
              k.setAttribute("data-photo-col", "");
              k.setAttribute("data-on-photo", "");
              addPhoto(k, "col", tall);
            } else if (!pinned && h >= 90 && h <= room) {
              k.setAttribute("data-pin", "");
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
