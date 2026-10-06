import { LogoMark } from "@/components/navigation/logo";
import { promise } from "@/data/growth";

const bars = [28, 40, 34, 56, 48, 72, 88];

/**
 * The opening animation shown whenever a page is loaded afresh: a short growth
 * story in the site's own terms. A line climbs through the five stages of the
 * SERPMOZ promise (Search, Discovery, Trust, Conversion, Revenue) and the
 * screen lifts away like the footer shutter.
 *
 * It is plain HTML and CSS, so it paints with the first frame and needs no
 * script. The page underneath is already in the document, so search engines
 * and screen readers are not held up. It removes itself (visibility) after
 * about a second and a half and never blocks a click for longer. Client-side
 * navigation does not replay it, only a real page load does (see HomeLink).
 */
export function Preloader() {
  return (
    <div aria-hidden className="preloader" data-preloader>
      <div className="preloader-grid grid-lines-dark" />
      <div className="preloader-glow" />
      <div className="preloader-stage">
        <div className="preloader-brand">
          <LogoMark className="size-14 text-white" />
          <span className="preloader-name">SERP<span>MOZ</span></span>
        </div>

        <div className="preloader-chart">
          <div className="preloader-bars">
            {bars.map((h, i) => (
              <span key={i} style={{ height: `${h}%`, "--i": i } as React.CSSProperties} />
            ))}
          </div>
          <svg viewBox="0 0 280 110" fill="none" preserveAspectRatio="none" className="preloader-line">
            <path className="preloader-path" pathLength={1} d="M4 98 C40 96 52 78 84 74 S130 80 160 56 S214 34 270 10" />
            <circle className="preloader-dot" cx="270" cy="10" r="5" />
          </svg>
        </div>

        <ol className="preloader-steps">
          {promise.map((p, i) => (
            <li key={p} style={{ "--i": i } as React.CSSProperties}>{p}</li>
          ))}
        </ol>
        <p className="preloader-tag">AI-powered digital growth</p>
      </div>
      <div className="preloader-progress"><span /></div>
    </div>
  );
}
