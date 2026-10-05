import type { Metadata } from "next";
import { CaseStudiesSection } from "@/components/case-studies/case-studies-section";
import { AiReality } from "@/components/growth/ai-reality";
import { AiVisibility } from "@/components/growth/ai-visibility";
import { Engagement } from "@/components/growth/engagement";
import { ExpertsComparison } from "@/components/growth/experts-comparison";
import { FinalCta } from "@/components/growth/final-cta";
import { GrowthSystem } from "@/components/growth/growth-system";
import { Methodology } from "@/components/growth/methodology";
import { SearchEverywhere } from "@/components/growth/search-everywhere";
import { Trust } from "@/components/growth/trust";
import { WhySerpmoz } from "@/components/growth/why-serpmoz";
import { GrowthosSection } from "@/components/growthos/growthos-section";
import { Hero } from "@/components/hero/hero";
import { IndustriesSection } from "@/components/industries/industries-section";
import { LocationsSection } from "@/components/locations/locations-section";
import { ResourcesSection } from "@/components/resources/resources-section";
import { JsonLd } from "@/components/seo/json-ld";
import { ServicesSection } from "@/components/services/services-section";
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
