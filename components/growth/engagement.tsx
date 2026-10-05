import { Reveal } from "@/components/layout/reveal";
import { Section, SectionHeader } from "@/components/layout/section";
import { CtaLink } from "@/components/ui/cta-link";
import { engagements } from "@/data/growth";
import { cta } from "@/lib/config/site";

/** Engagement models as a ruled table – scope and fit, not price-list cards. */
export function Engagement() {
  return (
    <Section aria-labelledby="engagement-title" className="border-t border-line bg-surface">
      <div className="shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            id="engagement-title"
            index="14"
            label="Engagement"
            title={["Scoped to Your Stage,", "Not Sold as a Package."]}
            lead="Five ways to work with us. Each is scoped after a diagnostic, around outcomes and strategic opportunities instead of deliverable counts."
          />
          <Reveal delay={0.1} className="shrink-0">
            <CtaLink href={cta.strategist.href} variant="primary" size="lg">
              {cta.strategist.label}
            </CtaLink>
          </Reveal>
        </div>

        <div className="mt-14 border-b border-line lg:mt-20">
          <div className="label-mono hidden grid-cols-12 gap-6 pb-4 text-muted lg:grid" aria-hidden>
            <span className="col-span-3">Engagement</span>
            <span className="col-span-4">Designed for</span>
            <span className="col-span-5">Typically includes</span>
          </div>
          {engagements.map((e, i) => (
            <Reveal key={e.name} delay={i * 0.04} className="grid gap-x-6 gap-y-4 border-t border-line py-8 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <h3 className="text-h3 font-semibold text-navy">{e.name}</h3>
                <p className="label-mono mt-2 text-blue-ink">{e.focus}</p>
              </div>
              <p className="max-w-md text-[1.0625rem] text-ink lg:col-span-4">{e.forWhom}</p>
              <ul className="grid gap-x-6 gap-y-2 text-[0.9375rem] text-muted sm:grid-cols-2 lg:col-span-5">
                {e.includes.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span aria-hidden className="mt-[0.6em] size-1 shrink-0 rounded-full bg-navy/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm text-muted">
          Pricing depends on market, scope and starting point. You will get a specific proposal after the growth audit, with
          the reasoning behind it.
        </p>
      </div>
    </Section>
  );
}
