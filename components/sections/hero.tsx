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

      <div className="shell relative grid gap-x-10 gap-y-14 pt-32 pb-16 md:pt-40 lg:grid-cols-12 lg:items-center lg:pb-20">
        <div className="lg:col-span-6">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] py-1.5 pr-4 pl-2.5 text-[0.8125rem] font-medium text-white/85 backdrop-blur-sm">
            <span className="relative flex size-2" aria-hidden>
              <span className="absolute inset-0 rounded-full bg-orange motion-safe:animate-ping-soft" />
              <span className="relative size-2 rounded-full bg-orange" />
            </span>
            AI-Powered Digital Growth Company
          </p>

          <h1 id="hero-title" className="mt-7 text-[clamp(2.5rem,1.3rem+3.7vw,4.125rem)] leading-[0.98] font-semibold tracking-[-0.04em]">
            <span className="block">AI Can Do the Work.</span>
            <span className="block bg-gradient-to-r from-cyan via-[#7cc4ff] to-white bg-clip-text text-transparent">Experts Know What Work Matters.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lead text-white/75">
            SERPMOZ combines AI-powered execution, human expertise and growth strategy to turn digital visibility into
            qualified demand, customers and measurable revenue.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CtaLink href={cta.audit.href} variant="primary" size="lg" data-cta="hero-audit">
              {cta.audit.label}
            </CtaLink>
            <CtaLink href="#services" variant="onDark" size="lg" arrow={false} data-cta="hero-services">
              Explore Our Services
            </CtaLink>
          </div>

          <p className="mt-8 max-w-md border-l-2 border-orange pl-4 text-sm text-white/65">
            Built for businesses that want measurable growth, not just marketing activity.
          </p>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-white/12 pt-6">
            {coverage.map((c) => (
              <div key={c.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-xs leading-snug text-white/55">{c.label}</dt>
                <dd className="tabular text-3xl font-semibold tracking-[-0.04em] md:text-4xl">{c.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-6">
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
