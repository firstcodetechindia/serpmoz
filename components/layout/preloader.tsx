import { FileText, Mail, Megaphone, Search, Share2 } from "lucide-react";
import { LogoMark } from "@/components/navigation/logo";
import { promise } from "@/data/growth";

/** The channels a digital marketing programme works across. */
const channels = [
  { name: "Search", Icon: Search },
  { name: "Social", Icon: Share2 },
  { name: "Ads", Icon: Megaphone },
  { name: "Email", Icon: Mail },
  { name: "Content", Icon: FileText },
] as const;

const sparks = Array.from({ length: 14 }, (_, i) => ({ x: (i * 37 + 11) % 100, d: 2.2 + ((i * 13) % 9) / 6, s: ((i * 7) % 5) + 2 }));

/**
 * The opening animation shown whenever a page is loaded afresh.
 *
 * The story: marketing channels (search, social, ads, email, content) circle
 * the SERPMOZ mark, a signal travels from each into the centre while the ring
 * fills, and the five stages of the promise light up in turn. Then the screen
 * lifts away like the footer shutter.
 *
 * Plain HTML and CSS, so it paints with the first frame and needs no script.
 * The page underneath is already in the document, so search engines and
 * screen readers are not held up. It stops taking clicks after about two
 * seconds. Client-side navigation does not replay it; only a real page load
 * does (see HomeLink).
 */
export function Preloader() {
  return (
    <div aria-hidden className="preloader" data-preloader>
      <div className="preloader-grid grid-lines-dark" />
      <div className="preloader-glow" />
      <div className="preloader-sparks">
        {sparks.map((s, i) => (
          <span key={i} style={{ "--x": `${s.x}%`, "--d": `${s.d}s`, "--s": `${s.s}px`, "--i": i } as React.CSSProperties} />
        ))}
      </div>

      <div className="preloader-stage">
        <div className="pl-orbit">
          <div className="pl-ring" />
          <div className="pl-spin">
            {channels.map(({ name, Icon }, i) => (
              <div key={name} className="pl-arm" style={{ "--a": `${i * 72}deg`, "--i": i } as React.CSSProperties}>
                <span className="pl-spoke"><i /></span>
                <span className="pl-node">
                  <span className="pl-node-in"><Icon className="size-[1.1em]" strokeWidth={2} /></span>
                </span>
              </div>
            ))}
          </div>
          <div className="pl-core">
            <div className="pl-fill" />
            <div className="pl-disc"><LogoMark className="size-[2.9em] text-white" /></div>
          </div>
        </div>

        <div className="pl-brand">
          <span className="pl-name">SERP<span>MOZ</span></span>
          <span className="pl-tag">AI-powered digital growth</span>
        </div>

        <ol className="pl-steps">
          {promise.map((p, i) => (
            <li key={p} style={{ "--i": i } as React.CSSProperties}>{p}</li>
          ))}
        </ol>
        <p className="pl-pct" />
      </div>
      <div className="preloader-progress"><span /></div>
    </div>
  );
}
