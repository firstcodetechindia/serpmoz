import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Footer } from "@/components/footer/footer";
import { MotionProvider } from "@/components/layout/motion-provider";
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
      <head>
        {/* Enables scroll-reveal styles only when scripts run; see globals.css */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="min-h-dvh antialiased">
        <MotionProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <AnalyticsEvents />
        <TagManager />
      </body>
    </html>
  );
}
