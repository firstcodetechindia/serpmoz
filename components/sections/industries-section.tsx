import Link from "next/link";
import { IndustryShowcase } from "@/components/industries/industry-showcase";
import { Reveal } from "@/components/layout/reveal";
import { Section, SectionHeader } from "@/components/layout/section";
import { CtaLink } from "@/components/ui/cta-link";
import { industries } from "@/data/industries";
import { getService } from "@/data/services";

const featured = ["saas", "ecommerce", "healthcare", "real-estate", "finance", "education"];

export function IndustriesSection() {
  const items = featured.map((slug) => {
    const i = industries.find((x) => x.slug === slug)!;
    return { slug, name: i.name, line: i.line, services: i.services.slice(0, 4).map((s) => getService(s)?.name ?? s) };
  });
  const rest = industries.filter((i) => !featured.includes(i.slug));

  return (
    <Section inset aria-labelledby="industries-title" className="bg-navy-deep text-white">
      <div aria-hidden className="absolute top-0 left-1/2 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />
      <div aria-hidden className="absolute -top-40 left-1/3 size-[36rem] rounded-full bg-blue/15 blur-[120px]" />
      <div className="shell relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <SectionHeader
            id="industries-title"
            label="Industries"
            title={["Growth Strategies Built", "Around Your Business."]}
            tone="dark"
            className="lg:col-span-8"
          />
          <Reveal className="lg:col-span-4 lg:pt-12" delay={0.1}>
            <p className="text-lead text-white/70">
              A dental practice and a SaaS company do not share a buyer, a sales cycle or a search landscape. The plan should
              not look the same either.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-10 lg:mt-12" y={24}>
          <IndustryShowcase items={items} />
        </Reveal>

        <Reveal className="mt-10 flex flex-col gap-6 border-t border-white/12 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <p className="label-mono text-white/50">Also</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {rest.map((i) => (
                <li key={i.slug}>
                  <Link href={`/industries/${i.slug}/`} className="inline-block rounded-full border border-white/15 px-3.5 py-1.5 text-sm text-white/80 transition-colors hover:border-cyan hover:bg-cyan/10 hover:text-white">
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <CtaLink href="/industries/" variant="onDark" size="lg" className="shrink-0">All {industries.length} industries</CtaLink>
        </Reveal>
      </div>
    </Section>
  );
}
