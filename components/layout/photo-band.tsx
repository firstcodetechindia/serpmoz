import { Photo } from "@/components/ui/photo";
import type { PhotoRef } from "@/data/images";

/** A wide photograph with a single statement over it. One per page at most. */
export function PhotoBand({ photo, label, statement, children }: { photo: PhotoRef; label: string; statement: string; children?: React.ReactNode }) {
  return (
    <section className="px-3 md:px-5">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-navy text-white">
        <Photo photo={photo} sizes="100vw" wash="strong" className="absolute inset-0" />
        <div className="shell relative flex min-h-[26rem] flex-col justify-end py-12 md:min-h-[32rem] md:py-16">
          <p className="label-mono text-cyan">{label}</p>
          <p className="mt-4 max-w-3xl text-[clamp(1.75rem,1.3rem+2vw,3rem)] leading-[1.15] font-semibold tracking-[-0.03em]">{statement}</p>
          {children ? <div className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-white/75">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
