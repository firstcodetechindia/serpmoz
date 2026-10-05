import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/layout/reveal";
import { Section, SectionHeader } from "@/components/layout/section";
import { serviceIcons } from "@/components/sections/hero-visual";
import { CtaLink } from "@/components/ui/cta-link";
import { cta, navigation } from "@/lib/config/site";

/** The eight core services, stated plainly, directly under the hero. */
export function WhatWeDo() {
  const services = navigation[0].links ?? [];
  return (
    <Section aria-labelledby="what-we-do-title" space="tight" className="bg-surface md:py-24">
      <div className="shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            id="what-we-do-title"
            label="What we do"
            title={["A Digital Growth Company.", "Eight Services, One Team."]}
            lead="Search, paid media, content, conversion and web, planned together and measured against leads and revenue."
          />
          <Reveal delay={0.1} className="shrink-0">
            <CtaLink href={cta.strategist.href} variant="solid" size="lg" data-cta="what-we-do-strategist">
              {cta.strategist.label}
            </CtaLink>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-panel border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.href];
            return (
              <Reveal as="li" key={s.href} delay={(i % 4) * 0.05} className="bg-surface">
                <Link href={s.href} className="group flex h-full flex-col p-6 transition-colors duration-300 hover:bg-navy md:p-7">
                  <div className="flex items-center justify-between">
                    <span className="flex size-11 items-center justify-center rounded-full bg-blue-wash text-blue-ink transition-colors duration-300 group-hover:bg-white/12 group-hover:text-white">
                      {Icon ? <Icon aria-hidden className="size-5" /> : null}
                    </span>
                    <ArrowUpRight aria-hidden className="size-4 text-line-strong transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-orange" />
                  </div>
                  <h3 className="mt-8 text-xl font-semibold tracking-[-0.02em] text-navy transition-colors duration-300 group-hover:text-white">{s.label}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted transition-colors duration-300 group-hover:text-white/70">{s.description}</p>
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
