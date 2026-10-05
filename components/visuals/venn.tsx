import { cn } from "@/lib/utils";

/** AI and expertise as overlapping fields; the overlap is where SERPMOZ works. */
export function Venn({ className }: { className?: string }) {
  return (
    <div className={cn("relative mx-auto aspect-[5/3] w-full max-w-xl", className)}>
      <svg aria-hidden viewBox="0 0 500 300" className="absolute inset-0 size-full">
        <defs>
          <clipPath id="venn-left"><circle cx="185" cy="150" r="135" /></clipPath>
        </defs>
        <circle cx="185" cy="150" r="135" fill="var(--color-cyan)" fillOpacity="0.1" stroke="var(--color-cyan)" strokeWidth="1.5" strokeDasharray="3 5" />
        <circle cx="315" cy="150" r="135" fill="var(--color-navy)" fillOpacity="0.05" stroke="var(--color-navy)" strokeWidth="1.5" />
        <circle cx="315" cy="150" r="135" fill="var(--color-navy)" clipPath="url(#venn-left)" />
        <circle cx="250" cy="150" r="5" fill="var(--color-orange)" />
      </svg>
      <div className="absolute top-1/2 left-[13%] w-[21%] -translate-y-1/2">
        <p className="label-mono text-blue-ink">AI</p>
        <p className="mt-1 text-xs leading-snug text-muted sm:text-sm">Speed, scale, pattern-finding</p>
      </div>
      <div className="absolute top-1/2 right-[13%] w-[21%] -translate-y-1/2 text-right">
        <p className="label-mono text-navy">Experts</p>
        <p className="mt-1 text-xs leading-snug text-muted sm:text-sm">Judgement, context, accountability</p>
      </div>
      <p className="absolute top-[31%] left-1/2 -translate-x-1/2 text-center text-[0.6875rem] font-semibold tracking-[0.14em] text-white sm:text-xs">SERPMOZ</p>
      <p className="absolute top-[58%] left-1/2 w-[20%] -translate-x-1/2 text-center text-[0.625rem] leading-tight text-white/75 sm:text-xs">Work that matters, done faster</p>
    </div>
  );
}
