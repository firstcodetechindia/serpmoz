import { networkInterfaces } from "node:os";
import type { NextConfig } from "next";

/**
 * `next dev` refuses script and hot-reload requests from any host other than
 * localhost. Opening the dev server by its network address (another device, or
 * http://192.168.x.x:3000 on the same machine) would then load HTML that never
 * becomes interactive. This allows the machine's own LAN addresses, plus any
 * extra hosts listed in DEV_ORIGINS (comma-separated). Development only.
 */
const lanAddresses = Object.values(networkInterfaces())
  .flat()
  .filter((n) => n && n.family === "IPv4" && !n.internal)
  .map((n) => n!.address);
const extraOrigins = (process.env.DEV_ORIGINS ?? "").split(",").map((s) => s.trim()).filter(Boolean);

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  allowedDevOrigins: [...lanAddresses, ...extraOrigins, "*.local"],
  // Canonical URLs across the site end in a slash (see lib/seo).
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // Photography is served straight from the Unsplash CDN (see components/ui/photo.tsx).
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
