import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/navigation/logo";
import { CtaLink } from "@/components/ui/cta-link";
import { promise } from "@/data/growth";
import { cta, footerNav, legalNav, site } from "@/lib/config/site";

export function Footer() {
  // Only profiles that exist are shown.
  const social = Object.entries(site.social).filter(([, url]) => url);

  return (
    <footer className="relative overflow-hidden bg-navy-deep text-white">
      <div aria-hidden className="grid-lines-dark absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_45%)]" />
      <div aria-hidden className="absolute -top-48 left-1/4 size-[36rem] rounded-full bg-blue/15 blur-[130px]" />

      <div className="shell relative pt-14 md:pt-20">
        {/* Opening line */}
        <div className="flex flex-col gap-8 border-b border-white/12 pb-10 lg:flex-row lg:items-end lg:justify-between lg:pb-12">
          <div>
            <Link href="/" aria-label="SERPMOZ home" className="inline-block rounded-md"><Logo tone="dark" /></Link>
            <p className="mt-6 max-w-2xl text-[clamp(1.75rem,1.2rem+2.4vw,3rem)] leading-[1.15] font-semibold tracking-[-0.035em]">
              AI can do the work. <span className="text-white/45">Experts know what work matters.</span>
            </p>
            <p className="mt-4 text-[0.9375rem] text-white/60">{site.category}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <CtaLink href={cta.audit.href} variant="primary" size="lg" data-cta="footer-audit">{cta.audit.label}</CtaLink>
            <CtaLink href={cta.strategist.href} variant="onDark" size="lg" arrow={false} data-cta="footer-contact">Contact us</CtaLink>
          </div>
        </div>

        {/* Link columns: the column you are in stays bright, the rest step back */}
        <nav aria-label="Footer" className="group/nav grid grid-cols-2 gap-x-6 gap-y-10 py-10 sm:grid-cols-3 lg:grid-cols-5 lg:py-12">
          {footerNav.map((col) => (
            <div key={col.title} className="group/col transition-opacity duration-300 lg:group-hover/nav:opacity-50 lg:hover:!opacity-100">
              <h2 className="label-mono flex items-center gap-2 text-white/50 transition-colors group-hover/col:text-cyan">
                <span aria-hidden className="h-px w-4 bg-current transition-[width] duration-300 group-hover/col:w-8" />
                {col.title}
              </h2>
              <ul className="mt-5 space-y-1">
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link href={l.href} className="group/l inline-flex items-center gap-1.5 py-1.5 text-[0.9375rem] text-white/75 transition-all duration-200 hover:translate-x-1 hover:text-white">
                      {l.label}
                      <ArrowUpRight aria-hidden className="size-3.5 -translate-x-1 text-orange opacity-0 transition-all duration-200 group-hover/l:translate-x-0 group-hover/l:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Promise + utilities */}
        <div className="flex flex-col gap-6 border-t border-white/12 py-8 md:flex-row md:items-center md:justify-between">
          <ol className="label-mono flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-white/55" aria-label="The SERPMOZ promise">
            {promise.map((p, i) => (
              <li key={p} className="flex items-center gap-2.5">
                <span className={i === promise.length - 1 ? "text-orange" : undefined}>{p}</span>
                {i < promise.length - 1 ? <span aria-hidden>→</span> : null}
              </li>
            ))}
          </ol>
          <div className="flex items-center gap-6">
            {social.length ? (
              <ul className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Social">
                {social.map(([name, url]) => (
                  <li key={name}>
                    <a href={url} rel="noopener noreferrer" target="_blank" className="text-sm text-white/70 transition-colors hover:text-white">{name}</a>
                  </li>
                ))}
              </ul>
            ) : null}
            <a href="#main" className="group/top inline-flex items-center gap-2 rounded-full border border-white/20 py-2 pr-4 pl-2 text-sm text-white/80 transition-colors hover:border-white hover:text-white">
              <span className="flex size-7 items-center justify-center rounded-full bg-white/10 transition-colors group-hover/top:bg-orange group-hover/top:text-navy"><ArrowUp aria-hidden className="size-3.5" /></span>
              Back to top
            </a>
          </div>
        </div>
      </div>

      {/* Wordmark: outlined at rest, lit as the pointer passes */}
      <div aria-hidden className="group/word relative flex justify-center overflow-hidden px-3 select-none">
        <span className="bg-gradient-to-r from-blue via-cyan to-orange bg-clip-text text-[clamp(4rem,19vw,19rem)] leading-[0.82] font-semibold tracking-[-0.04em] text-transparent opacity-0 transition-opacity duration-700 group-hover/word:opacity-100">
          SERPMOZ
        </span>
        <span className="absolute inset-0 flex justify-center px-3 text-[clamp(4rem,19vw,19rem)] leading-[0.82] font-semibold tracking-[-0.04em] text-transparent transition-opacity duration-700 [-webkit-text-stroke:1px_rgb(255_255_255/0.16)] group-hover/word:opacity-0">
          SERPMOZ
        </span>
      </div>

      <div className="relative border-t border-white/12">
        <div className="shell flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-white/50">© {new Date().getFullYear()} SERPMOZ. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Legal">
            {legalNav.map((l) => (
              <li key={l.href}><Link href={l.href} className="text-sm text-white/50 transition-colors hover:text-white">{l.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
