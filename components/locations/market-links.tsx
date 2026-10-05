import Link from "next/link";
import { ArrowUpRight, Briefcase } from "lucide-react";
import { industryIcons } from "@/components/industries/industry-icons";
import { Block, LinkList } from "@/components/services/page-parts";
import { getIndustry } from "@/data/industries";
import { getService } from "@/data/services";

type Props = {
  /** Place name as it reads in a sentence, e.g. "the UK" or "Gurgaon" */
  place: string;
  services: string[];
  industries: string[];
};

/**
 * Two blocks shared by country and city pages: the services most often needed
 * in a market and the industries with real weight there. Both are editorial
 * judgements held in data/locations, and neither implies a local office.
 */
export function MarketLinks({ place, services, industries }: Props) {
  const svc = services.map(getService).filter((s) => s !== undefined);
  const inds = industries.map(getIndustry).filter((i) => i !== undefined);

  return (
    <>
      {svc.length ? (
        <Block label="Services" title={`Most often needed in ${place}.`}>
          <LinkList links={svc.map((s) => ({ label: s.name, href: `/${s.slug}/`, note: s.summary }))} />
          <p className="mt-8 max-w-2xl text-[0.9375rem] leading-relaxed text-muted">
            This is a starting list based on how demand works in this market. The right mix for your business is set after the diagnostic. Work is delivered remotely.
          </p>
        </Block>
      ) : null}

      {inds.length ? (
        <section className="border-t border-line bg-surface py-16 md:py-24">
          <div className="shell">
            <p className="label-mono text-muted">Industries</p>
            <h2 className="mt-4 max-w-2xl text-h2 font-semibold text-navy">Industries we see in this market.</h2>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {inds.map((ind) => {
                const Icon = industryIcons[ind.slug] ?? Briefcase;
                return (
                  <li key={ind.slug} className="min-w-0">
                    <Link href={`/industries/${ind.slug}/`} className="group flex h-full gap-4 rounded-panel border border-line bg-canvas p-5 transition-colors hover:border-navy md:p-6">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-wash text-blue-ink">
                        <Icon aria-hidden className="size-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center justify-between gap-3 text-lg font-semibold tracking-[-0.02em] text-navy">
                          {ind.name}
                          <ArrowUpRight aria-hidden className="size-4 shrink-0 text-line-strong transition-colors group-hover:text-blue-ink" />
                        </span>
                        <span className="mt-1 block text-[0.9375rem] leading-snug text-muted">{ind.line}</span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      ) : null}
    </>
  );
}
