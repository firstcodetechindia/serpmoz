import { ShieldCheck } from "lucide-react";
import { HeroVisual } from "@/components/sections/hero-visual";
import { CtaLink } from "@/components/ui/cta-link";
import { SignalField } from "@/components/visuals/signal-field";
import { platforms } from "@/data/growth";
import { industries } from "@/data/industries";
import { countries } from "@/data/locations";
import { services } from "@/data/services";
import { cta } from "@/lib/config/site";

/* Counts of what is on this site. They describe coverage, not results. */
const coverage = [
  { value: services.length, label: "specialist services" },
  { value: industries.length, label: "industries understood" },
  { value: countries.length, label: "markets covered" },
];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="stage relative overflow-hidden text-white">
      <div aria-hidden className="grid-lines-dark absolute inset-0 [mask-image:linear-gradient(to_bottom,black_10%,transparent_75%)]" />
      <SignalField className="hidden lg:block" cx={70} cy={46} />
      <div aria-hidden className="absolute -bottom-40 -left-40 size-[32rem] rounded-full bg-blue/20 blur-[120px]" />

      <div className="shell relative grid gap-x-10 gap-y-14 pt-28 pb-14 md:pt-36 lg:grid-cols-12 lg:items-center lg:pb-16">
        <div className="lg:col-span-6">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] py-1.5 pr-4 pl-2.5 text-[0.8125rem] font-medium text-white/85 backdrop-blur-sm">
            <span className="relative flex size-2" aria-hidden>
              <span className="absolute inset-0 rounded-full bg-orange motion-safe:animate-ping-soft" />
              <span className="relative size-2 rounded-full bg-orange" />
            </span>
            AI-Powered Digital Growth Company
          </p>

          <h1 id="hero-title" className="mt-8 text-[clamp(2.375rem,1.2rem+3.6vw,4rem)] leading-[1.08] font-semibold tracking-[-0.035em]">
            <span className="block">AI Can Do the Work.</span>
            <span className="mt-1 block bg-gradient-to-r from-cyan via-[#7cc4ff] to-white bg-clip-text pb-2 text-transparent">Experts Know What Work Matters.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lead text-white/75">
            SERPMOZ combines AI-powered execution, human expertise and growth strategy to turn digital visibility into
            qualified demand, customers and measurable revenue.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CtaLink href={cta.audit.href} variant="primary" size="lg" data-cta="hero-audit">
              {cta.audit.label}
            </CtaLink>
            <CtaLink href="#services" variant="onDark" size="lg" arrow={false} data-cta="hero-services">
              Explore Our Services
            </CtaLink>
          </div>

          <p className="mt-6 flex max-w-md items-start gap-2.5 text-sm leading-relaxed text-white/60">
            <ShieldCheck aria-hidden className="mt-0.5 size-4 shrink-0 text-cyan" />
            Built for businesses that want measurable growth, not just marketing activity.
          </p>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-3">
            {coverage.map((c) => (
              <div key={c.label} className="flex flex-col-reverse rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-sm transition-colors hover:border-cyan/40 hover:bg-white/[0.08]">
                <dt className="mt-2 text-xs leading-snug text-white/60">{c.label}</dt>
                <dd className="tabular text-3xl leading-none font-semibold tracking-[-0.04em] md:text-[2.5rem]">{c.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-6 lg:pl-4">
          <HeroVisual />
        </div>
      </div>

      {/* Platform strip: names only, with an explicit label so nothing reads as an endorsement */}
      <div className="relative border-t border-white/10 bg-navy-deep/40">
        <div className="shell flex flex-col gap-4 py-6 md:flex-row md:items-center md:gap-10">
          <p className="label-mono shrink-0 text-white/50">Platforms we work across</p>
          <div className="relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <ul className="flex w-max gap-10 motion-safe:animate-marquee" aria-label="Platforms we work across">
              {[...platforms, ...platforms].map((name, i) => (
                <li key={`${name}-${i}`} aria-hidden={i >= platforms.length} className="text-[0.9375rem] font-medium whitespace-nowrap text-white/65">
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
