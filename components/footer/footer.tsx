import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/navigation/logo";
import { CtaLink } from "@/components/ui/cta-link";
import { promise } from "@/data/growth";
import { cta, footerNav, legalNav, site } from "@/lib/config/site";

/**
 * The footer sits fixed behind the page. As the last section scrolls away it
 * is uncovered from the bottom, like a shutter lifting (see .footer-reveal in
 * globals.css; on short or small screens it scrolls normally).
 */
export function Footer() {
  // Only profiles that exist are shown.
  const social = Object.entries(site.social).filter(([, url]) => url);

  return (
    <footer className="footer-reveal relative overflow-hidden bg-navy-deep text-white">
      <div aria-hidden className="grid-lines-dark absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_50%)]" />
      <div aria-hidden className="absolute -top-48 left-1/4 size-[36rem] rounded-full bg-blue/20 glow" />
      <div aria-hidden className="absolute right-0 -bottom-40 size-[28rem] rounded-full bg-orange/10 glow" />

      <div className="shell relative pt-12 md:pt-14">
        {/* Call to action */}
        <div className="glass-dark flex flex-col gap-5 rounded-[1.5rem] p-6 md:flex-row md:items-center md:justify-between md:p-7">
          <div>
            <p className="label-mono text-cyan">Start here</p>
            <p className="mt-2 text-[clamp(1.25rem,1.05rem+0.9vw,1.75rem)] leading-snug font-semibold tracking-[-0.025em]">Find the highest-impact opportunities in your growth.</p>
          </div>
          <div className="flex shrink-0 flex-col gap-2.5 sm:flex-row">
            <CtaLink href={cta.audit.href} variant="primary" size="lg" data-cta="footer-audit">{cta.audit.label}</CtaLink>
            <CtaLink href={cta.strategist.href} variant="onDark" size="lg" arrow={false} data-cta="footer-contact">Contact us</CtaLink>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 py-10 lg:grid-cols-12 lg:gap-8">
          {/* Who we are */}
          <div className="lg:col-span-4">
            <Link href="/" aria-label="SERPMOZ home" className="inline-block rounded-md"><Logo tone="dark" /></Link>
            <p className="mt-5 max-w-xs text-xl leading-snug font-semibold tracking-[-0.02em]">
              AI can do the work. <span className="text-white/50">Experts know what work matters.</span>
            </p>
            <p className="mt-3 text-sm text-white/55">{site.category}</p>
            <ol className="label-mono mt-6 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-[0.625rem] text-white/50" aria-label="The SERPMOZ promise">
              {promise.map((p, i) => (
                <li key={p} className="flex items-center gap-2">
                  <span className={i === promise.length - 1 ? "rounded-full bg-orange px-2 py-0.5 text-navy" : "rounded-full border border-white/15 px-2 py-0.5"}>{p}</span>
                  {i < promise.length - 1 ? <span aria-hidden>→</span> : null}
                </li>
              ))}
            </ol>
            {social.length ? (
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2" aria-label="Social">
                {social.map(([name, url]) => (
                  <li key={name}><a href={url} rel="noopener noreferrer" target="_blank" className="text-sm text-white/70 transition-colors hover:text-white">{name}</a></li>
                ))}
              </ul>
            ) : null}
          </div>

          {/* Link columns: the column you are in stays bright, the rest step back */}
          <nav aria-label="Footer" className="group/nav grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-5">
            {footerNav.map((col) => (
              <div key={col.title} className="group/col transition-opacity duration-300 lg:group-hover/nav:opacity-45 lg:hover:!opacity-100">
                <h2 className="label-mono flex items-center gap-2 text-white/50 transition-colors group-hover/col:text-cyan">
                  <span aria-hidden className="size-1.5 rounded-full bg-current transition-colors group-hover/col:bg-orange" />
                  {col.title}
                </h2>
                <ul className="mt-4">
                  {col.links.map((l) => (
                    <li key={l.href + l.label}>
                      <Link href={l.href} className="group/l inline-flex items-center gap-1.5 py-[0.3125rem] text-[0.9375rem] text-white/75 transition-all duration-200 hover:translate-x-1 hover:text-white">
                        {l.label}
                        <ArrowUpRight aria-hidden className="size-3.5 -translate-x-1 text-orange opacity-0 transition-all duration-200 group-hover/l:translate-x-0 group-hover/l:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Wordmark: outlined at rest, lit as the pointer passes */}
      <div aria-hidden className="group/word relative flex justify-center overflow-hidden border-t border-white/10 px-3 pt-4 select-none">
        <span className="bg-gradient-to-r from-blue via-cyan to-orange bg-clip-text text-[clamp(3.5rem,15.5vw,15rem)] leading-[0.8] font-semibold tracking-[-0.04em] text-transparent opacity-0 transition-opacity duration-700 group-hover/word:opacity-100">
          SERPMOZ
        </span>
        <span className="absolute inset-0 flex justify-center px-3 pt-4 text-[clamp(3.5rem,15.5vw,15rem)] leading-[0.8] font-semibold tracking-[-0.04em] text-transparent transition-opacity duration-700 [-webkit-text-stroke:1px_rgb(255_255_255/0.18)] group-hover/word:opacity-0">
          SERPMOZ
        </span>
      </div>

      <div className="relative border-t border-white/12 bg-navy-deep">
        <div className="shell flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-white/50">© {new Date().getFullYear()} SERPMOZ. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 pr-14 md:pr-16" aria-label="Legal">
            {legalNav.map((l) => (
              <li key={l.href}><Link href={l.href} className="text-sm text-white/50 transition-colors hover:text-white">{l.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
