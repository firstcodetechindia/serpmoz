import type { LucideIcon } from "lucide-react";
import { Photo } from "@/components/ui/photo";
import type { PhotoRef } from "@/data/images";
import { cn } from "@/lib/utils";

/**
 * A hero picture: a photograph of the work, with an illustration of what the
 * service produces set over its lower edge and two short signals floating
 * beside it.
 */
export function HeroScene({ photo, children, chips, flip }: { photo: PhotoRef; children: React.ReactNode; chips: { icon: LucideIcon; text: string }[]; flip?: boolean }) {
  return (
    <div className="relative pb-6 sm:pb-10">
      <div aria-hidden className="glow absolute inset-x-6 top-10 bottom-10 rounded-full bg-blue/30" />
      <Photo
        photo={photo}
        sizes="(min-width: 1024px) 560px, 100vw"
        decorative
        wash="soft"
        className={cn("relative aspect-[5/4] rounded-[1.75rem] border border-white/10 shadow-[0_40px_90px_-30px_rgb(0_0_0/0.75)] sm:w-[84%]", flip ? "sm:mr-auto" : "sm:ml-auto")}
      />
      <div className={cn("relative z-10 -mt-24 w-[88%] sm:absolute sm:bottom-0 sm:mt-0 sm:w-[62%]", flip ? "ml-auto sm:right-0" : "sm:left-0")}>{children}</div>
      <ul className={cn("absolute top-5 z-10 hidden flex-col gap-2 sm:flex", flip ? "left-0" : "right-0")}>
        {chips.map((c, i) => (
          <li key={c.text} className="flex items-center gap-2 rounded-full border border-white/15 bg-navy-soft/95 py-1.5 pr-3.5 pl-1.5 text-xs font-medium text-white shadow-[0_18px_36px_-18px_rgb(0_0_0/0.7)] motion-safe:animate-float-slow" style={{ animationDelay: `${i * -2.5}s` }}>
            <span className={cn("flex size-6 items-center justify-center rounded-full", i ? "bg-cyan text-navy" : "bg-orange text-navy")}><c.icon className="size-3.5" /></span>
            {c.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
