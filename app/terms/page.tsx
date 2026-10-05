import { LegalPage, legalMetadata } from "@/components/layout/legal-page";

export const metadata = legalMetadata("terms");

export default function Page() {
  return <LegalPage slug="terms" />;
}
