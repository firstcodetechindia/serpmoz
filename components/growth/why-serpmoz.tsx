import { Reveal } from "@/components/layout/reveal";
import { Section, SectionHeader } from "@/components/layout/section";
import { pillars } from "@/data/growth";

export function WhySerpmoz() {
  return (
    <Section aria-labelledby="why-title" className="border-t border-line bg-surface">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:sticky lg:top-32 lg:col-span-5 lg:self-start">
          <SectionHeader id="why-title" index="12" label="Why us" title={["Why SERPMOZ?"]} />
          <Reveal delay={0.1}>
            <blockquote className="mt-10 border-l-2 border-orange pl-6">
              <p className="text-[clamp(1.375rem,1.1rem+1.1vw,1.875rem)] leading-[1.25] font-medium tracking-[-0.02em] text-navy">
                We don’t replace expertise with AI.
                <span className="block text-ink/55">We use AI to make expertise faster, deeper and more scalable.</span>
              </p>
            </blockquote>
          </Reveal>
        </div>

        <ul className="grid border-b border-line sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
          {pillars.map((p, i) => (
            <Reveal as="li" key={p.name} delay={i * 0.04} className="border-t border-line py-7 sm:odd:pr-8 sm:even:border-l sm:even:pl-8">
              <span className="label-mono text-muted">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-navy">{p.name}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{p.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
