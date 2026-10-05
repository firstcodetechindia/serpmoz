import { CtaLink } from "@/components/ui/cta-link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80dvh] items-center overflow-hidden pt-32 pb-20">
      <div aria-hidden className="grid-lines absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]" />
      <div className="shell relative">
        <p className="label-mono text-muted">Error 404</p>
        <h1 className="mt-5 max-w-3xl text-display font-semibold text-navy">
          This page isn’t discoverable. <span className="text-ink/55">Yours should be.</span>
        </h1>
        <p className="mt-6 max-w-lg text-lead text-muted">The address may have changed, or the page may never have existed.</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <CtaLink href="/" variant="solid" size="lg">Back to the homepage</CtaLink>
          <CtaLink href="/contact/" variant="outline" size="lg" arrow={false}>Contact us</CtaLink>
        </div>
      </div>
    </section>
  );
}
