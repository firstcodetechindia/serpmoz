import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { FooterReveal } from "@/components/footer/footer-reveal";
import { Logo } from "@/components/navigation/logo";
import { CtaLink } from "@/components/ui/cta-link";
import { promise } from "@/data/growth";
import { cta, footerNav, legalNav, site } from "@/lib/config/site";

/**
 * The footer sits fixed behind the page. As the last section scrolls away it
 * is uncovered from the bottom, like a shutter lifting. That works on any
 * screen the whole footer fits on, which FooterReveal checks; on phones the
 * link columns fold into rows so it does. See .footer-reveal in globals.css.
 */
export function Footer() {
  // Only profiles that exist are shown.
  const social = Object.entries(site.social).filter(([, url]) => url);

  return (
    <footer className="footer-reveal relative overflow-hidden bg-navy-deep text-white">
      <FooterReveal />
      <div aria-hidden className="grid-lines-dark absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_50%)]" />
      <div aria-hidden className="absolute -top-48 left-1/4 size-[36rem] rounded-full bg-blue/20 glow" />
      <div aria-hidden className="absolute right-0 -bottom-40 size-[28rem] rounded-full bg-orange/10 glow" />

      <div className="shell relative pt-7 md:pt-14">
        {/* Call to action */}
        <div className="footer-cta glass-dark flex-col gap-5 rounded-[1.5rem] p-6 md:flex-row md:items-center md:justify-between md:p-7">
          <div>
            <p className="label-mono text-cyan">Start here</p>
            <p className="mt-2 text-[clamp(1.25rem,1.05rem+0.9vw,1.75rem)] leading-snug font-semibold tracking-[-0.025em]">Find the highest-impact opportunities in your growth.</p>
          </div>
          <div className="flex shrink-0 flex-col gap-2.5 sm:flex-row">
            <CtaLink href={cta.audit.href} variant="primary" size="lg" data-cta="footer-audit">{cta.audit.label}</CtaLink>
            <CtaLink href={cta.strategist.href} variant="onDark" size="lg" arrow={false} data-cta="footer-contact">Contact us</CtaLink>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 pb-5 md:gap-8 md:py-8 lg:grid-cols-12 lg:gap-8">
          {/* Who we are */}
          <div className="lg:col-span-4">
            <Link href="/" aria-label="SERPMOZ home" className="inline-block rounded-md"><Logo tone="dark" tagline /></Link>
            <p className="mt-4 max-w-xs text-lg leading-snug font-semibold tracking-[-0.02em] md:mt-5 md:text-xl">
              AI can do the work. <span className="text-white/50">Experts know what work matters.</span>
            </p>
            <p className="footer-extra mt-3 text-sm text-white/55">{site.category}</p>
            <ol className="footer-extra label-mono mt-6 flex-wrap items-center gap-x-2 gap-y-1.5 text-[0.625rem] text-white/50" aria-label="The SERPMOZ promise">
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

          {/* Phones: each column is a row that opens, so the whole footer fits one screen */}
          <nav aria-label="Footer" className="border-t border-white/12 lg:hidden">
            {footerNav.map((col) => (
              <details key={col.title} className="group/d border-b border-white/12">
                <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-[0.9375rem] font-medium text-white/85 [&::-webkit-details-marker]:hidden">
                  {col.title}
                  <ChevronDown aria-hidden className="size-4 text-white/50 transition-transform duration-300 group-open/d:rotate-180" />
                </summary>
                <ul className="grid grid-cols-2 gap-x-4 pb-3">
                  {col.links.map((l) => (
                    <li key={l.href + l.label}><Link href={l.href} className="block py-1.5 text-sm text-white/70">{l.label}</Link></li>
                  ))}
                </ul>
              </details>
            ))}
          </nav>

          {/* Link columns: the column you are in stays bright, the rest step back */}
          <nav aria-label="Footer" className="group/nav hidden grid-cols-5 gap-x-6 gap-y-9 lg:col-span-8 lg:grid">
            {footerNav.map((col) => (
              <div key={col.title} className="group/col transition-opacity duration-300 lg:group-hover/nav:opacity-45 lg:hover:!opacity-100">
                <p className="label-mono flex items-center gap-2 text-white/50 transition-colors group-hover/col:text-cyan">
                  <span aria-hidden className="size-1.5 rounded-full bg-current transition-colors group-hover/col:bg-orange" />
                  {col.title}
                </p>
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

      {/* Wordmark: an outline until the visitor reaches the bottom, then it fills with colours that keep moving */}
      <div aria-hidden className="relative flex justify-center overflow-hidden border-t border-white/10 px-3 pt-4 select-none">
        <span className="footer-word-outline">SERPMOZ</span>
        <span className="footer-word-face">SERPMOZ</span>
      </div>

      <div className="relative border-t border-white/12 bg-navy-deep">
        <div className="shell flex flex-col gap-2 py-3 md:flex-row md:items-center md:justify-between md:gap-3 md:py-4">
          <p className="text-sm text-white/50">© {new Date().getFullYear()} SERPMOZ. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-1 pr-14 md:gap-x-6 md:gap-y-2 md:pr-16" aria-label="Legal">
            {legalNav.map((l) => (
              <li key={l.href}><Link href={l.href} className="text-sm text-white/50 transition-colors hover:text-white">{l.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
