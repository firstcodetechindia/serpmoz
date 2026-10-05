import Link from "next/link";
import { Logo } from "@/components/navigation/logo";
import { promise } from "@/data/growth";
import { footerNav, legalNav, site } from "@/lib/config/site";

export function Footer() {
  const social = Object.entries(site.social);
  return (
    <footer className="border-t border-line bg-surface">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link href="/" aria-label="SERPMOZ home" className="inline-block rounded-md">
              <Logo />
            </Link>
            <p className="mt-5 text-lg font-medium tracking-[-0.01em] text-navy">AI-Powered Digital Growth</p>
            <p className="mt-2 max-w-xs text-[0.9375rem] text-muted">
              AI can do the work. Experts know what work matters.
            </p>
            <ol className="label-mono mt-8 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-muted" aria-label="The SERPMOZ promise">
              {promise.map((p, i) => (
                <li key={p} className="flex items-center gap-2">
                  <span className={i === promise.length - 1 ? "text-orange-ink" : undefined}>{p}</span>
                  {i < promise.length - 1 ? <span aria-hidden>→</span> : null}
                </li>
              ))}
            </ol>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4 lg:col-span-8">
            {footerNav.map((col) => (
              <div key={col.title}>
                <h2 className="label-mono text-ink">{col.title}</h2>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href + l.label}>
                      <Link href={l.href} className="text-[0.9375rem] text-muted transition-colors hover:text-navy">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Legal">
            {legalNav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-muted transition-colors hover:text-navy">{l.label}</Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Social">
            {social.map(([name, url]) => (
              <li key={name} className="text-sm">
                {url ? (
                  <a href={url} rel="noopener noreferrer" target="_blank" className="text-muted transition-colors hover:text-navy">{name}</a>
                ) : (
                  <span className="text-muted/70" title="Profile link not yet configured">{name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-8 text-sm text-muted">© {new Date().getFullYear()} SERPMOZ. All rights reserved.</p>
      </div>
    </footer>
  );
}
