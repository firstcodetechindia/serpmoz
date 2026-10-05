import { Reveal } from "@/components/layout/reveal";
import { Section, SectionHeader } from "@/components/layout/section";
import { EngagementLadder } from "@/components/sections/engagement-ladder";
import { CtaLink } from "@/components/ui/cta-link";
import { cta } from "@/lib/config/site";

export function Engagement() {
  return (
    <Section inset aria-labelledby="engagement-title" className="bg-orange-tint">
      <div aria-hidden className="absolute -top-32 right-0 size-[34rem] rounded-full bg-surface/70 glow" />
      <div className="shell relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            id="engagement-title"
            label="Engagement"
            title={["Scoped to Your Stage,", "Not Sold as a Package."]}
            lead="Five ways to work with us, ordered by business maturity. Each is scoped after a diagnostic, around outcomes and strategic opportunities instead of deliverable counts."
          />
          <Reveal delay={0.1} className="shrink-0">
            <CtaLink href={cta.audit.href} variant="solid" size="lg" data-cta="engagement-audit">
              {cta.audit.label}
            </CtaLink>
          </Reveal>
        </div>

        <Reveal className="mt-10 lg:mt-14" y={24}>
          <EngagementLadder />
        </Reveal>
        <p className="mt-6 max-w-2xl text-sm text-muted">
          Pricing depends on market, scope and starting point. You will get a specific proposal after the growth audit, with
          the reasoning behind it.
        </p>
      </div>
    </Section>
  );
}
