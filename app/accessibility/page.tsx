import { LegalPage, legalMetadata } from "@/components/layout/legal-page";

export const metadata = legalMetadata("accessibility");

export default function Page() {
  return <LegalPage slug="accessibility" />;
}
