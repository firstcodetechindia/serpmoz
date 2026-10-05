"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Briefcase } from "lucide-react";
import { industryIcons } from "@/components/industries/industry-icons";
import { Photo } from "@/components/ui/photo";
import { photos, type PhotoKey } from "@/data/images";
import { cn } from "@/lib/utils";

export type ShowcaseItem = { slug: string; name: string; line: string; services: string[] };

const photoFor = (slug: string) => photos[slug as PhotoKey] ?? photos.teamOffice;

/**
 * Photo panels that open as you move across them. On large screens the active
 * panel widens to show its detail; on small screens it is a swipeable rail.
 */
export function IndustryShowcase({ items }: { items: ShowcaseItem[] }) {
  const [active, setActive] = useState(0);

  return (
    <>
      <ul className="hidden h-[32rem] gap-3 lg:flex">
        {items.map((ind, i) => {
          const on = i === active;
          const Icon = industryIcons[ind.slug] ?? Briefcase;
          return (
            <li
              key={ind.slug}
              className={cn("relative min-w-0 overflow-hidden rounded-panel transition-[flex-grow] duration-700 ease-out-quint", on ? "grow-[5]" : "grow")}
              style={{ flexBasis: 0 }}
            >
              <Link
                href={`/industries/${ind.slug}/`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group absolute inset-0 block text-white"
              >
                <Photo photo={photoFor(ind.slug)} sizes="(min-width: 1024px) 45vw, 80vw" wash="strong" className="absolute inset-0" imgClassName={cn("transition-transform duration-[1200ms] ease-out", on && "scale-105")} />
                <div className={cn("absolute inset-0 bg-navy-deep/55 transition-opacity duration-500", on ? "opacity-0" : "opacity-100")} aria-hidden />

                {/* Collapsed: name runs up the panel */}
                <div className={cn("absolute inset-0 flex flex-col items-center justify-between py-6 transition-opacity duration-300", on ? "opacity-0" : "opacity-100")} aria-hidden={on}>
                  <span className="flex size-10 items-center justify-center rounded-full bg-white/12 backdrop-blur-sm"><Icon aria-hidden className="size-5" /></span>
                  <span className="text-lg font-semibold tracking-[-0.01em] whitespace-nowrap [writing-mode:vertical-rl] rotate-180">{ind.name}</span>
                  <span className="label-mono text-white/55">{String(i + 1).padStart(2, "0")}</span>
                </div>

                {/* Open */}
                <div className={cn("absolute inset-0 flex flex-col justify-between p-8 transition-opacity duration-500", on ? "opacity-100 delay-200" : "pointer-events-none opacity-0")}>
                  <div className="flex items-center justify-between">
                    <span className="flex size-12 items-center justify-center rounded-full bg-white/12 backdrop-blur-sm"><Icon aria-hidden className="size-6" /></span>
                    <span className="flex size-12 items-center justify-center rounded-full bg-orange text-navy transition-transform duration-300 group-hover:rotate-45"><ArrowUpRight aria-hidden className="size-5" /></span>
                  </div>
                  <div className="w-[26rem] max-w-full">
                    <p className="label-mono text-cyan">Industry · {String(i + 1).padStart(2, "0")}</p>
                    <h3 className="mt-2 text-4xl font-semibold tracking-[-0.035em]">{ind.name}</h3>
                    <p className="mt-3 text-[1.0625rem] leading-snug text-white/85">{ind.line}</p>
                    <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Services typically involved">
                      {ind.services.map((s) => (
                        <li key={s} className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs text-white/90 backdrop-blur-sm">{s}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Small screens */}
      <ul tabIndex={0} aria-label="Industries. Swipe horizontally." className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-5 px-5 md:-mx-10 md:scroll-px-10 md:px-10 lg:hidden">
        {items.map((ind) => {
          const Icon = industryIcons[ind.slug] ?? Briefcase;
          return (
            <li key={ind.slug} className="w-[78vw] max-w-[22rem] shrink-0 snap-start">
              <Link href={`/industries/${ind.slug}/`} className="relative block h-[24rem] overflow-hidden rounded-panel text-white">
                <Photo photo={photoFor(ind.slug)} sizes="80vw" wash="strong" className="absolute inset-0" />
                <div className="relative flex h-full flex-col justify-between p-5">
                  <span className="flex size-10 items-center justify-center rounded-full bg-white/12 backdrop-blur-sm"><Icon aria-hidden className="size-5" /></span>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em]">{ind.name}</h3>
                    <p className="mt-2 text-sm leading-snug text-white/85">{ind.line}</p>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
