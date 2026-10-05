import type { Metadata } from "next";
import { AiReality } from "@/components/sections/ai-reality";
import { AiVisibility } from "@/components/sections/ai-visibility";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { Engagement } from "@/components/sections/engagement";
import { ExpertsComparison } from "@/components/sections/experts-comparison";
import { FinalCta } from "@/components/sections/final-cta";
import { GrowthSystem } from "@/components/sections/growth-system";
import { Hero } from "@/components/sections/hero";
import { IndustriesSection } from "@/components/sections/industries-section";
import { LocationsSection } from "@/components/sections/locations-section";
import { Methodology } from "@/components/sections/methodology";
import { ResourcesSection } from "@/components/sections/resources-section";
import { SearchEverywhere } from "@/components/sections/search-everywhere";
import { ServicesSection } from "@/components/sections/services-section";
import { WhySerpmoz } from "@/components/sections/why-serpmoz";
import { JsonLd } from "@/components/seo/json-ld";
import { site } from "@/lib/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";

export const metadata: Metadata = buildMetadata({
  title: site.title,
  description: site.description,
  path: "/",
  absoluteTitle: true,
});

/* Each section sits on its own ground: navy, white, canvas, tinted or photographic. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AiReality />
      <ExpertsComparison />
      <SearchEverywhere />
      <AiVisibility />
      <GrowthSystem />
      <Methodology />
      <IndustriesSection />
      <LocationsSection />
      <CaseStudiesSection />
      <WhySerpmoz />
      <Engagement />
      <ResourcesSection />
      <FinalCta />
      <JsonLd data={webPageSchema({ path: "/", title: site.title, description: site.description })} />
    </>
  );
}
