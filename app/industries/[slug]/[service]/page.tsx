import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryServicePage } from "@/components/industries/industry-service-page";
import { getIndustryService, industryServicePath, industryServices } from "@/data/industries/services";
import { buildMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ slug: string; service: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return industryServices.map((r) => ({ slug: r.industry, service: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, service } = await params;
  const r = getIndustryService(slug, service);
  return r ? buildMetadata({ title: r.seo.title, description: r.seo.metaDescription, path: industryServicePath(r) }) : {};
}

export default async function Page({ params }: Props) {
  const { slug, service } = await params;
  const r = getIndustryService(slug, service);
  if (!r) notFound();
  return <IndustryServicePage record={r} />;
}
