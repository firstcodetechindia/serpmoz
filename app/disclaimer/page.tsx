import { LegalPage, legalMetadata } from "@/components/layout/legal-page";

export const metadata = legalMetadata("disclaimer");

export default function Page() {
  return <LegalPage slug="disclaimer" />;
}
