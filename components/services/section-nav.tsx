"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * "On this page" bar for long service pages. Sticks under the header and marks
 * the section being read. Plain anchor links, so it works without JavaScript.
 */
export function SectionNav({ items, action }: { items: { id: string; label: string }[]; action: React.ReactNode }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const nodes = items.map((i) => document.getElementById(i.id)).filter((n): n is HTMLElement => n !== null);
    if (!nodes.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-25% 0px -65% 0px" },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav aria-label="On this page" className="sticky top-16 z-30 border-b border-line bg-white/95">
      <div className="shell flex items-center gap-4">
        <ul className="no-scrollbar -mx-2 flex flex-1 gap-1 overflow-x-auto py-2">
          {items.map((i) => (
            <li key={i.id}>
              <a
                href={`#${i.id}`}
                aria-current={active === i.id ? "true" : undefined}
                className={cn("block rounded-full px-3.5 py-2 text-sm font-medium whitespace-nowrap transition-colors", active === i.id ? "bg-navy text-white" : "text-muted hover:bg-canvas hover:text-navy")}
              >
                {i.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden shrink-0 lg:block">{action}</div>
      </div>
    </nav>
  );
}
