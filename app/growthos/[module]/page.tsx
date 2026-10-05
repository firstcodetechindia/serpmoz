import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GrowthosPreview } from "@/components/growthos/growthos-preview";
import { PageHero } from "@/components/layout/page-hero";
import { Reveal } from "@/components/layout/reveal";
import { FinalCta } from "@/components/sections/final-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { RuledRows } from "@/components/services/page-parts";
import { ArrowLink, CtaLink } from "@/components/ui/cta-link";
import { growthosPages } from "@/data/growthos";
import { cta } from "@/lib/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";

type Props = { params: Promise<{ module: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return growthosPages.map((p) => ({ module: p.slug }));
}

const find = (slug: string) => growthosPages.find((p) => p.slug === slug);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = find((await params).module);
  if (!page) return {};
  return buildMetadata({ title: `GrowthOS ${page.name} Module`, description: page.metaDescription, path: `/growthos/${page.slug}/` });
}

export default async function GrowthosModulePage({ params }: Props) {
  const page = find((await params).module);
  if (!page) notFound();
  const path = `/growthos/${page.slug}/`;

  return (
    <>
      <PageHero
        crumbs={[
          { name: "GrowthOS", href: "/growthos/" },
          { name: page.name, href: path },
        ]}
        label={`GrowthOS · ${page.name} module`}
        title={page.title}
        lead={page.lead}
        className="pb-10 md:pb-14"
      >
        <CtaLink href={cta.strategist.href} variant="primary" size="lg" data-cta="growthos-module-walkthrough">Request a walkthrough</CtaLink>
        <CtaLink href="/growthos/" variant="onDark" size="lg" arrow={false}>All modules</CtaLink>
      </PageHero>

      <section className="stage -mt-px overflow-hidden pb-16 text-white md:pb-24">
        <div className="shell">
          <Reveal y={24}>
            <GrowthosPreview initialModule={page.module} />
          </Reveal>
          <p className="mt-5 text-xs text-white/55">Interactive product preview with illustrative figures. {page.caveat}</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="shell">
          <p className="label-mono text-muted">What the module does</p>
          <h2 className="mt-4 max-w-2xl text-h2 font-semibold text-navy">Four things it keeps in view.</h2>
          <div className="mt-12">
            <RuledRows rows={[...page.points]} />
          </div>
          <ArrowLink href={page.service} className="mt-10">The service behind this module</ArrowLink>
        </div>
      </section>

      <FinalCta title={["See GrowthOS", "on your own data."]} body="A growth audit is the quickest way in. We connect what you already have and show you what this module would say about your business." />
      <JsonLd data={webPageSchema({ path, title: `GrowthOS ${page.name} Module`, description: page.metaDescription })} />
    </>
  );
}
