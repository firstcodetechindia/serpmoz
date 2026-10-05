import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/layout/reveal";
import { Section, SectionHeader } from "@/components/layout/section";
import { Ecosystem } from "@/components/visuals/ecosystem";
import { promiseSteps, searchServices } from "@/data/growth";
import { cn } from "@/lib/utils";

const traditional = ["Google", "Website", "Traffic"];

export function SearchEverywhere() {
  return (
    <Section aria-labelledby="search-everywhere-title" className="overflow-hidden">
      <div aria-hidden className="grid-lines absolute inset-0 [mask-image:radial-gradient(50%_45%_at_70%_38%,black,transparent)]" />
      <div className="shell relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <SectionHeader
              id="search-everywhere-title"
              index="03"
              label="Search everywhere"
              title={["Be Discoverable Everywhere", "Your Customers Search."]}
              lead="Search used to be one box and ten links. Now a buying decision passes through assistants, maps, feeds, forums and marketplaces before anyone reaches your site."
            />
            <Reveal delay={0.1} className="mt-10 rounded-2xl border border-dashed border-line-strong p-5">
              <p className="label-mono text-muted">How it used to work</p>
              <ol className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                {traditional.map((t, i) => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="text-lg font-medium tracking-[-0.02em] text-muted line-through decoration-line-strong decoration-1">{t}</span>
                    {i < traditional.length - 1 ? <ArrowRight aria-hidden className="size-4 text-line-strong" /> : null}
                  </li>
                ))}
              </ol>
              <p className="mt-3 text-sm leading-relaxed text-muted">One channel, one destination, one metric. Still part of the picture, no longer all of it.</p>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-7" y={24} delay={0.1}>
            <Ecosystem />
          </Reveal>
        </div>

        {/* The promise: each stage is a little more filled than the last */}
        <Reveal className="mt-20 lg:mt-28">
          <p className="label-mono text-muted">What discovery is for</p>
          <ol className="mt-6 grid gap-y-6 md:grid-cols-5 md:gap-x-0">
            {promiseSteps.map((s, i) => {
              const last = i === promiseSteps.length - 1;
              return (
                <li key={s.name} className="relative md:pr-6">
                  <div className="flex items-center gap-3">
                    <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-line">
                      <span className={cn("block h-full rounded-full", last ? "bg-orange" : "bg-blue")} style={{ width: `${((i + 1) / promiseSteps.length) * 100}%` }} />
                    </span>
                    {!last ? <ArrowRight aria-hidden className="hidden size-4 shrink-0 text-line-strong md:block" /> : <span aria-hidden className="hidden size-2 rounded-full bg-orange md:block" />}
                  </div>
                  <p className="label-mono mt-4 text-muted">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className={cn("mt-1 text-2xl font-semibold tracking-[-0.03em]", last ? "text-orange-ink" : "text-navy")}>{s.name}</h3>
                  <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-muted">{s.body}</p>
                </li>
              );
            })}
          </ol>
        </Reveal>

        <Reveal className="mt-16 border-t border-line pt-10 lg:mt-20">
          <p className="label-mono text-muted">How we cover it</p>
          <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-1 text-[clamp(1.125rem,0.95rem+0.9vw,1.75rem)] leading-snug font-medium tracking-[-0.025em]">
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
