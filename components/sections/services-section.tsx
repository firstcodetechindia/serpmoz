import Link from "next/link";
import { ArrowUpRight, Code2, LineChart, MousePointerClick, PenLine, Search, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/layout/reveal";
import { Section, SectionHeader } from "@/components/layout/section";
import { ArrowLink, CtaLink } from "@/components/ui/cta-link";
import { Photo } from "@/components/ui/photo";
import { photos } from "@/data/images";
import { serviceCategories } from "@/data/services/catalog";
import { cta } from "@/lib/config/site";
import { cn } from "@/lib/utils";
import type { ServiceCategory, ServiceCategoryId } from "@/types";

const icons: Record<ServiceCategoryId, LucideIcon> = {
  "search-ai": Search,
  performance: MousePointerClick,
  "content-social": PenLine,
  "conversion-automation": LineChart,
  "web-digital": Code2,
};

function Links({ c, dark, cols = 2 }: { c: ServiceCategory; dark?: boolean; cols?: 1 | 2 }) {
  return (
    <ul className={cn("grid gap-x-6", cols === 2 && "sm:grid-cols-2")}>
      {c.items.map((item) => (
        <li key={item.href} className={cn("border-t", dark ? "border-white/12" : "border-line")}>
          <Link
            href={item.href}
            className={cn("group/s flex items-center justify-between gap-3 py-2.5 text-[0.9375rem] font-medium transition-colors", dark ? "text-white/85 hover:text-white" : "text-ink hover:text-blue-ink")}
          >
            {item.name}
            <ArrowUpRight aria-hidden className={cn("size-4 shrink-0 transition-all duration-200 group-hover/s:translate-x-0.5 group-hover/s:-translate-y-0.5", dark ? "text-white/30 group-hover/s:text-orange" : "text-line-strong group-hover/s:text-blue-ink")} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Head({ c, n, dark }: { c: ServiceCategory; n: number; dark?: boolean }) {
  const Icon = icons[c.id];
  return (
    <>
      <div className="flex items-center justify-between">
        <span className={cn("flex size-11 items-center justify-center rounded-full", dark ? "bg-white/10 text-white" : "bg-navy text-white")}>
          <Icon aria-hidden className="size-5" />
        </span>
        <span className={cn("label-mono", dark ? "text-white/45" : "text-muted")}>{String(n).padStart(2, "0")} / 05</span>
      </div>
      <h3 className={cn("mt-6 text-[clamp(1.5rem,1.2rem+1vw,2rem)] leading-tight font-semibold tracking-[-0.03em]", dark ? "text-white" : "text-navy")}>
        <Link href={c.href} className="hover:underline hover:decoration-orange hover:decoration-2 hover:underline-offset-[6px]">{c.label}</Link>
      </h3>
      <p className={cn("mt-2 max-w-md text-[0.9375rem] leading-relaxed", dark ? "text-white/70" : "text-muted")}>{c.statement}</p>
    </>
  );
}

/** Five disciplines and every service page beneath them, as one asymmetric board. */
export function ServicesSection() {
  const [search, performance, content, conversion, web] = serviceCategories;
  return (
    <Section id="services" aria-labelledby="services-title" className="scroll-mt-20 bg-surface">
      <div className="shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            id="services-title"
            label="Services"
            title={["Everything You Need to Build a", "Stronger Digital Growth Engine."]}
            lead="Five disciplines, planned together and run by one team, so each channel makes the others work harder."
          />
          <Reveal delay={0.1} className="shrink-0">
            <CtaLink href={cta.strategist.href} variant="solid" size="lg" data-cta="services-strategist">
              {cta.strategist.label}
            </CtaLink>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 lg:mt-20 lg:grid-cols-12 lg:gap-5">
          {/* Search & AI: the largest discipline, on the navy stage */}
          <Reveal className="stage relative overflow-hidden rounded-panel p-7 text-white md:p-10 lg:col-span-7 lg:row-span-2">
            <div aria-hidden className="absolute -top-32 -right-32 size-96 rounded-full bg-blue/30 blur-3xl" />
            <div aria-hidden className="grid-lines-dark absolute inset-0 [mask-image:radial-gradient(60%_60%_at_80%_10%,black,transparent)]" />
            <div className="relative">
              <Head c={search} n={1} dark />
              <div className="mt-8"><Links c={search} dark /></div>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="rounded-panel border border-line bg-canvas p-7 md:p-8 lg:col-span-5">
            <Head c={performance} n={2} />
            <div className="mt-6"><Links c={performance} /></div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-panel bg-blue-wash p-7 md:p-8 lg:col-span-5">
            <Head c={content} n={3} />
            <div className="mt-6"><Links c={content} /></div>
          </Reveal>

          <Reveal delay={0.05} className="rounded-panel bg-orange-wash p-7 md:p-8 lg:col-span-5">
            <Head c={conversion} n={4} />
            <div className="mt-6"><Links c={conversion} /></div>
          </Reveal>

          <Reveal delay={0.1} className="grid overflow-hidden rounded-panel border border-line bg-surface sm:grid-cols-[1fr_38%] lg:col-span-7">
            <div className="p-7 md:p-8">
              <Head c={web} n={5} />
              <div className="mt-6"><Links c={web} /></div>
            </div>
            <Photo photo={photos.saas} sizes="(min-width: 1024px) 300px, (min-width: 640px) 38vw, 100vw" className="h-48 sm:h-auto" />
          </Reveal>
        </div>

        <ArrowLink href="/services/" className="mt-10">See all {serviceCategories.reduce((n, c) => n + c.items.length, 0)} services</ArrowLink>
      </div>
    </Section>
  );
}
