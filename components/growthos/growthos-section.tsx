import { GrowthosPreview } from "@/components/growthos/growthos-preview";
import { Reveal } from "@/components/layout/reveal";
import { Section, SectionHeader } from "@/components/layout/section";
import { CtaLink } from "@/components/ui/cta-link";
import { cta } from "@/lib/config/site";

export function GrowthosSection() {
  return (
    <Section aria-labelledby="growthos-title" className="overflow-hidden border-t border-line">
      <div aria-hidden className="atmosphere absolute inset-0 -scale-x-100" />
      <div aria-hidden className="grid-lines absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]" />
      <div className="shell relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            id="growthos-title"
            index="07"
            label="GrowthOS"
            title={["Meet GrowthOS.", "Your Growth Intelligence Layer."]}
            lead="GrowthOS brings your search visibility, AI visibility, competitors, campaigns, conversions and revenue into one intelligence layer."
          />
          <Reveal delay={0.1} className="shrink-0">
            <CtaLink href={cta.growthos.href} variant="solid" size="lg">
              {cta.growthos.label}
            </CtaLink>
          </Reveal>
        </div>
        <Reveal className="mt-12 lg:mt-16" y={24}>
          <GrowthosPreview />
        </Reveal>
        <p className="mt-5 text-xs text-muted">
          Product preview. Select a module to explore the interface. All figures are illustrative and do not describe a real account.
        </p>
      </div>
    </Section>
  );
}
