import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationPage } from "@/components/locations/location-page";
import { getMarket, locationPath, markets } from "@/data/locations";
import { buildMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ country: string }> };

// Only locations with a record exist; everything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return markets.map((m) => ({ country: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const l = getMarket((await params).country);
  return l ? buildMetadata({ title: l.seo.title, description: l.seo.metaDescription, path: locationPath(l) }) : {};
}

export default async function MarketPage({ params }: Props) {
  const l = getMarket((await params).country);
  if (!l) notFound();
  return <LocationPage location={l} />;
}
