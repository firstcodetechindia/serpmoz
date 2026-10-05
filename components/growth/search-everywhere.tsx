import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/layout/reveal";
import { Section, SectionHeader } from "@/components/layout/section";
import { searchServices, searchSurfaces } from "@/data/growth";

const traditional = ["Google", "Website", "Traffic"];

export function SearchEverywhere() {
  return (
    <Section aria-labelledby="search-everywhere-title">
      <div className="shell">
        <SectionHeader
          id="search-everywhere-title"
          index="03"
          label="Search everywhere"
          title={["Be Discoverable Everywhere", "Your Customers Search."]}
          lead="Search used to be one box and ten links. Now a buying decision passes through assistants, maps, feeds, forums and marketplaces before anyone reaches your site."
        />

        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <p className="label-mono text-muted">Traditional</p>
            <ol className="mt-6 flex items-center gap-3 lg:flex-col lg:items-start lg:gap-2">
              {traditional.map((t, i) => (
                <li key={t} className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-2">
                  <span className="text-xl font-medium tracking-[-0.02em] text-muted line-through decoration-line-strong decoration-1 lg:text-2xl">{t}</span>
                  {i < traditional.length - 1 ? <ArrowRight aria-hidden className="size-4 text-line-strong lg:rotate-90" /> : null}
                </li>
              ))}
            </ol>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
              One channel, one destination, one metric. Still part of the picture, no longer all of it.
            </p>
          </Reveal>

          <Reveal className="lg:col-span-8" delay={0.1}>
            <p className="label-mono text-navy">Modern</p>
            <ol className="mt-6 border-b border-line">
              {searchSurfaces.map((s, i) => (
                <li key={s.name} className="group grid grid-cols-[2.5rem_1fr] items-baseline gap-x-4 border-t border-line py-4 sm:grid-cols-[3rem_13rem_1fr] md:py-5">
                  <span className="label-mono text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-xl font-semibold tracking-[-0.025em] text-navy md:text-2xl">{s.name}</span>
                  <span className="col-start-2 text-[0.9375rem] text-muted sm:col-start-3">{s.detail}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <Reveal className="mt-16 lg:mt-24">
          <p className="label-mono text-muted">How we cover it</p>
          <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-1 text-[clamp(1.25rem,1rem+1.2vw,2rem)] leading-snug font-medium tracking-[-0.025em]">
            {searchServices.map((s, i) => (
              <li key={s.name} className="flex items-center gap-2">
                <Link href={s.href} className="text-navy underline decoration-transparent decoration-2 underline-offset-[6px] transition-colors hover:decoration-orange">
                  {s.name}
                </Link>
                {i < searchServices.length - 1 ? <span aria-hidden className="text-line-strong">/</span> : null}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
