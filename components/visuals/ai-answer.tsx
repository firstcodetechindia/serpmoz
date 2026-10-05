import { Link2, Sparkles, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";

const entries = [
  { name: "Your brand", why: "Named for the specific need in the question, with a source to check.", you: true },
  { name: "Another provider", why: "Mentioned for a different use case.", you: false },
  { name: "Another provider", why: "Listed without a supporting source.", you: false },
];

/**
 * What an AI-generated answer to a buying question looks like, and where a
 * brand can appear in it. A drawing of the format, not a recorded answer.
 */
export function AiAnswer({ className }: { className?: string }) {
  return (
    <figure className={cn("glass-dark rounded-panel p-5 md:p-7", className)}>
      <div className="flex items-start gap-3">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white"><UserRound aria-hidden className="size-4" /></span>
        <p className="rounded-2xl rounded-tl-sm bg-white/10 px-4 py-2.5 text-[0.9375rem] text-white">
          Which companies should I shortlist for this, and why?
        </p>
      </div>

      <div className="mt-5 flex items-start gap-3">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-cyan text-navy"><Sparkles aria-hidden className="size-4" /></span>
        <div className="min-w-0 flex-1">
          <p className="label-mono text-cyan">AI-generated answer</p>
          <ol className="mt-3 space-y-2.5">
            {entries.map((e, i) => (
              <li key={i} className={cn("rounded-xl border p-3.5", e.you ? "border-cyan/50 bg-cyan/10" : "border-white/10 bg-white/[0.03]")}>
                <p className="flex items-center justify-between gap-3 text-[0.9375rem] font-semibold text-white">
                  <span className={e.you ? undefined : "text-white/60"}>{i + 1}. {e.name}</span>
                  {e.you ? <span className="label-mono rounded-full bg-orange px-2 py-0.5 text-[0.5625rem] text-navy">Recommended</span> : null}
                </p>
                <p className={cn("mt-1 text-[0.8125rem] leading-snug", e.you ? "text-white/75" : "text-white/45")}>{e.why}</p>
              </li>
            ))}
          </ol>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Sources the answer cites">
            {["yourbusiness.com", "industry publication", "review platform"].map((s, i) => (
              <li key={s} className={cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[0.625rem]", i === 0 ? "bg-cyan/15 text-cyan" : "bg-white/[0.06] text-white/55")}>
                <Link2 aria-hidden className="size-3" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <figcaption className="mt-5 border-t border-white/10 pt-4 text-xs leading-relaxed text-white/50">
        Illustration of the format. Real answers differ between assistants and between runs of the same question.
      </figcaption>
    </figure>
  );
}
