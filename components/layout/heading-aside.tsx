import type { ReactNode } from "react";
import { SectionArt, type SectionArtKind } from "@/components/visuals/section-art";
import { cn } from "@/lib/utils";

/**
 * The heading column of a two-column section. On large screens it stays in
 * view while the longer column scrolls, with a drawing under the heading so
 * the space beside the text is used. On small screens the same drawing sits
 * faintly behind the heading.
 */
export function HeadingAside({ art = "search", className, children }: { art?: SectionArtKind; className?: string; children: ReactNode }) {
  return (
    <div className={cn("relative", className)}>
      <SectionArt kind={art} className="pointer-events-none absolute -top-6 -right-2 w-40 opacity-45 [mask-image:linear-gradient(to_left,black_30%,transparent)] sm:w-52 lg:hidden" />
      <div className="relative lg:sticky lg:top-28">
        {children}
        <SectionArt kind={art} className="mt-10 hidden max-w-[22rem] lg:block" />
      </div>
    </div>
  );
}
