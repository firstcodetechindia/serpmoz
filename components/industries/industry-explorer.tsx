"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Briefcase } from "lucide-react";
import { industryIcons } from "@/components/industries/industry-icons";
import { Photo } from "@/components/ui/photo";
import { photos, type PhotoKey } from "@/data/images";
import { industries } from "@/data/industries";
import { cn } from "@/lib/utils";

const photoFor = (slug: string) => photos[slug as PhotoKey] ?? photos.teamOffice;

/** Image card used in the mobile rail and on the industries index page. */
export function IndustryCard({ slug, className, sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 80vw" }: { slug: string; className?: string; sizes?: string }) {
  const ind = industries.find((i) => i.slug === slug)!;
  const Icon = industryIcons[slug] ?? Briefcase;
  return (
    <Link href={`/industries/${slug}/`} className={cn("group relative block overflow-hidden rounded-2xl bg-navy text-white", className)}>
      <Photo photo={photoFor(slug)} sizes={sizes} wash="strong" className="absolute inset-0" imgClassName="group-hover:scale-105 group-hover:grayscale-0" />
      <div className="relative flex h-full min-h-[18rem] flex-col justify-between p-5">
        <span className="flex size-10 items-center justify-center rounded-full bg-white/12">
          <Icon aria-hidden className="size-5" />
        </span>
        <div>
          <h3 className="flex items-center justify-between text-xl font-semibold tracking-[-0.02em]">
            {ind.name}
            <ArrowUpRight aria-hidden className="size-4 opacity-60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
          </h3>
          <p className="mt-1.5 text-sm leading-snug text-white/75">{ind.line}</p>
        </div>
      </div>
    </Link>
  );
}

/**
 * Industry explorer. Desktop: an index of twenty names beside one large image
 * that follows the pointer or keyboard focus. Mobile: a swipeable rail of cards.
 */
export function IndustryExplorer() {
  const [active, setActive] = useState(industries[0].slug);
  const ind = industries.find((i) => i.slug === active) ?? industries[0];
  const Icon = industryIcons[ind.slug] ?? Briefcase;

  return (
    <>
      <div className="hidden gap-8 lg:grid lg:grid-cols-12">
        <ul className="col-span-7 grid grid-cols-2 gap-x-8 border-b border-line">
          {industries.map((item, i) => {
            const on = item.slug === active;
            return (
              <li key={item.slug} className="border-t border-line">
                <Link
                  href={`/industries/${item.slug}/`}
                  onMouseEnter={() => setActive(item.slug)}
                  onFocus={() => setActive(item.slug)}
                  className="group flex items-baseline gap-4 py-3.5"
                >
                  <span className={cn("label-mono w-6 shrink-0 transition-colors", on ? "text-orange-ink" : "text-muted")}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={cn("flex-1 text-xl font-semibold tracking-[-0.025em] transition-colors", on ? "text-navy" : "text-ink/45")}>{item.name}</span>
                  <ArrowUpRight aria-hidden className={cn("size-4 shrink-0 translate-y-0.5 transition-all duration-200", on ? "text-navy" : "text-transparent")} />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="col-span-5">
          <div className="sticky top-28 overflow-hidden rounded-panel bg-navy text-white">
            <Photo key={ind.slug} photo={photoFor(ind.slug)} sizes="(min-width: 1024px) 480px, 100vw" wash="strong" className="aspect-[4/5] motion-safe:animate-fade-in" />
            <div className="absolute inset-0 flex flex-col justify-between p-7">
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-full bg-white/12">
                  <Icon aria-hidden className="size-5" />
                </span>
                <span className="label-mono text-white/60">Industry</span>
              </div>
              <div>
                <p className="text-[2rem] leading-none font-semibold tracking-[-0.035em]">{ind.name}</p>
                <p className="mt-3 max-w-xs text-[1.0625rem] leading-snug text-white/80">{ind.line}</p>
                <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1 border-t border-white/15 pt-4 text-xs text-white/65">
                  {ind.measures.slice(0, 2).map((m) => (
                    <li key={m} className="flex items-center gap-1.5">
                      <span aria-hidden className="size-1 rounded-full bg-orange" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ul tabIndex={0} aria-label="Industries. Swipe horizontally." className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-5 px-5 md:-mx-10 md:scroll-px-10 md:px-10 lg:hidden">
        {industries.map((item) => (
          <li key={item.slug} className="w-[72vw] max-w-[19rem] shrink-0 snap-start">
            <IndustryCard slug={item.slug} sizes="(min-width: 640px) 304px, 72vw" />
          </li>
        ))}
      </ul>
    </>
  );
}
