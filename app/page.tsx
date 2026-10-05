import type { Metadata } from "next";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { AiReality } from "@/components/sections/ai-reality";
import { AiVisibility } from "@/components/sections/ai-visibility";
import { Engagement } from "@/components/sections/engagement";
import { ExpertsComparison } from "@/components/sections/experts-comparison";
import { FinalCta } from "@/components/sections/final-cta";
import { GrowthSystem } from "@/components/sections/growth-system";
import { Methodology } from "@/components/sections/methodology";
import { SearchEverywhere } from "@/components/sections/search-everywhere";
import { Trust } from "@/components/sections/trust";
import { WhySerpmoz } from "@/components/sections/why-serpmoz";
import { GrowthosSection } from "@/components/sections/growthos-section";
import { Hero } from "@/components/sections/hero";
import { IndustriesSection } from "@/components/sections/industries-section";
import { LocationsSection } from "@/components/sections/locations-section";
import { ResourcesSection } from "@/components/sections/resources-section";
import { JsonLd } from "@/components/seo/json-ld";
import { ServicesSection } from "@/components/sections/services-section";
import { site } from "@/lib/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";

export const metadata: Metadata = buildMetadata({
  title: site.title,
  description: site.description,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <AiReality />
      <ExpertsComparison />
      <SearchEverywhere />
      <AiVisibility />
      <GrowthSystem />
      <ServicesSection />
      <GrowthosSection />
      <Methodology />
      <IndustriesSection />
      <LocationsSection />
      <CaseStudiesSection />
      <WhySerpmoz />
      <Trust />
      <Engagement />
      <ResourcesSection />
      <FinalCta />
      <JsonLd data={webPageSchema({ path: "/", title: site.title, description: site.description })} />
    </>
  );
}
