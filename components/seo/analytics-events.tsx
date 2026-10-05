"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { track } from "@/lib/analytics";

const DEPTHS = [25, 50, 75, 100] as const;

/**
 * First-party interaction events, pushed to the dataLayer:
 *  - `cta_click` for any element carrying a `data-cta` label
 *  - `nav_click` for links inside the primary navigation
 *  - `scroll_depth` once per threshold per page view
 * Nothing here reads form values or any personal data.
 */
export function AnalyticsEvents() {
  const pathname = usePathname();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const cta = target?.closest<HTMLElement>("[data-cta]");
      if (cta) return track({ event: "cta_click", label: cta.dataset.cta ?? "", location: pathname });
      const nav = target?.closest<HTMLAnchorElement>("header nav a, [data-nav] a");
      if (nav) track({ event: "nav_click", label: nav.textContent?.trim().slice(0, 60) ?? "", location: pathname });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pathname]);

  useEffect(() => {
    const seen = new Set<number>();
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (max <= 0) return;
        const pct = (window.scrollY / max) * 100;
        for (const d of DEPTHS) {
          if (pct >= d - 0.5 && !seen.has(d)) {
            seen.add(d);
            track({ event: "scroll_depth", percent: d, location: pathname });
          }
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return null;
}
