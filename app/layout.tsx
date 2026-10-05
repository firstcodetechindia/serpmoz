import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Footer } from "@/components/footer/footer";
import { MotionProvider } from "@/components/layout/motion-provider";
import { RevealGate } from "@/components/layout/reveal";
import { BackToTop } from "@/components/navigation/back-to-top";
import { Header } from "@/components/navigation/header";
import { AnalyticsEvents } from "@/components/seo/analytics-events";
import { TagManager } from "@/components/seo/tag-manager";
import { JsonLd } from "@/components/seo/json-ld";
import { site } from "@/lib/config/site";
import { organizationSchema, websiteSchema } from "@/lib/seo/schema";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#F7F9FC",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      {/* Browser extensions add attributes to <html> and <body> before React loads; ignore those two elements only. */}
      <body className="min-h-dvh antialiased" suppressHydrationWarning>
        <MotionProvider>
          <Header />
          <main id="main" className="page-sheet">{children}</main>
          <Footer />
        </MotionProvider>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <BackToTop />
        <RevealGate />
        <AnalyticsEvents />
        <TagManager />
      </body>
    </html>
  );
}
