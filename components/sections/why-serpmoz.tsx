import { Crosshair, Database, Gauge, Layers, Radar, UserCheck, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/layout/reveal";
import { Section } from "@/components/layout/section";
import { CtaLink } from "@/components/ui/cta-link";
import { Photo } from "@/components/ui/photo";
import { pillars } from "@/data/growth";
import { photos } from "@/data/images";

const icons: LucideIcon[] = [UserCheck, Gauge, Crosshair, Radar, Database, Layers];

export function WhySerpmoz() {
  return (
    <Section aria-labelledby="why-title" className="bg-gradient-to-br from-cyan-wash via-surface to-blue-wash">
      <div className="shell grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
        {/* The argument, with the people behind it */}
        <Reveal className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start" y={24}>
          <div className="overflow-hidden rounded-panel bg-navy text-white shadow-float">
            <Photo photo={photos.teamMeeting} sizes="(min-width: 1024px) 480px, 100vw" className="aspect-[16/10]" />
            <div className="relative p-7 md:p-9">
              <span aria-hidden className="absolute -top-7 left-7 flex size-14 items-center justify-center rounded-full bg-orange font-serif text-4xl leading-none text-navy">“</span>
              <p className="label-mono text-cyan">Why SERPMOZ</p>
              <h2 id="why-title" className="mt-4 text-[clamp(1.625rem,1.3rem+1.3vw,2.25rem)] leading-[1.12] font-semibold tracking-[-0.03em]">
                We don’t replace expertise with AI.
                <span className="block text-white/55">We use AI to make expertise faster, deeper and more scalable.</span>
              </h2>
              <CtaLink href="/about/" variant="onDark" size="md" className="mt-7">About SERPMOZ</CtaLink>
            </div>
          </div>
        </Reveal>

        {/* Six reasons, as a list you read down */}
        <ol className="lg:col-span-6 lg:col-start-7">
          {pillars.map((p, i) => {
            const Icon = icons[i];
            return (
              <Reveal as="li" key={p.name} delay={i * 0.04} className="group relative grid grid-cols-[3.25rem_1fr] gap-x-4 border-b border-navy/10 py-7 first:pt-0 md:grid-cols-[4.5rem_1fr_auto] md:gap-x-6">
                <span aria-hidden className="absolute bottom-[-1px] left-0 h-0.5 w-0 bg-orange transition-[width] duration-500 ease-out-quint group-hover:w-full" />
                <span className="tabular text-4xl leading-none font-semibold tracking-[-0.05em] text-navy/20 transition-colors duration-300 group-hover:text-blue md:text-5xl">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.025em] text-navy">{p.name}</h3>
                  <p className="mt-2 max-w-md text-[0.9375rem] leading-relaxed text-muted">{p.body}</p>
                </div>
                <span className="hidden size-12 items-center justify-center rounded-full border border-navy/10 bg-surface text-navy transition-all duration-300 group-hover:border-navy group-hover:bg-navy group-hover:text-white md:flex">
                  <Icon aria-hidden className="size-5" />
                </span>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
