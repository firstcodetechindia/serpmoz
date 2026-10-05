"use client";

import Image, { type ImageLoaderProps } from "next/image";
import type { PhotoRef } from "@/data/images";
import { cn } from "@/lib/utils";

/**
 * Asks the Unsplash CDN for exactly the width the browser needs, in the best
 * format it supports (AVIF/WebP via auto=format). No server-side optimiser
 * round trip, and nothing to cache on our side.
 */
function unsplashLoader({ src, width, quality }: ImageLoaderProps) {
  return `https://images.unsplash.com/${src}?auto=format&fit=crop&w=${width}&q=${quality ?? 70}`;
}

type Props = {
  photo: PhotoRef;
  /** Tells the browser how wide the image renders, e.g. "(min-width: 1024px) 40vw, 100vw" */
  sizes: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  /** Navy wash over the image. "strong" when text sits on top. */
  wash?: "none" | "soft" | "strong";
  /** Decorative images are hidden from assistive technology */
  decorative?: boolean;
};

/** A photograph in the house treatment. The parent sets the size and aspect ratio. */
export function Photo({ photo, sizes, className, imgClassName, priority, wash = "soft", decorative }: Props) {
  return (
    <div className={cn("relative overflow-hidden bg-navy-soft", className)}>
      <Image
        loader={unsplashLoader}
        src={photo.id}
        alt={decorative ? "" : photo.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("photo-tone object-cover", imgClassName)}
        style={photo.focus ? { objectPosition: photo.focus } : undefined}
      />
      {wash !== "none" ? (
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 mix-blend-multiply",
            wash === "strong" ? "bg-gradient-to-t from-navy via-navy/55 to-navy/10" : "bg-gradient-to-tr from-navy/55 via-blue/15 to-transparent",
          )}
        />
      ) : null}
    </div>
  );
}
