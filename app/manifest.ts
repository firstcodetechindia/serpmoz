import type { MetadataRoute } from "next";
import { site } from "@/lib/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.title,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "browser",
    background_color: "#F7F9FC",
    theme_color: "#0B1F3A",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
