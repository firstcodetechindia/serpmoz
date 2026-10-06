import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationPage } from "@/components/locations/location-page";
import { getCityRecord, locationPath, locations } from "@/data/locations";
import { buildMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ country: string; city: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locations.filter((l) => l.kind === "city").map((l) => ({ country: l.parent!, city: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country, city } = await params;
  const l = getCityRecord(country, city);
  return l ? buildMetadata({ title: l.seo.title, description: l.seo.metaDescription, path: locationPath(l) }) : {};
}

export default async function CityPage({ params }: Props) {
  const { country, city } = await params;
  const l = getCityRecord(country, city);
  if (!l) notFound();
  return <LocationPage location={l} />;
}
