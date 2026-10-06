import Link from "next/link";
import { citiesOf, locationPath, markets } from "@/data/locations";
import { marketShapes, projectWorld } from "@/data/locations/geo.generated";
import { worldMap } from "@/data/world-map";
import { cn } from "@/lib/utils";
import type { LocationRecord } from "@/types";

/**
 * The location map. One component for every location page: give it a record
 * and it works out which outline to light, where the city marker goes, which
 * nearby cities to show and which routes to draw. Nothing is positioned by
 * hand per page; coordinates come from the records and outlines from
 * Natural Earth (data/locations/geo.generated.ts).
 *
 * Two views are drawn. The world view places the market among the others and
 * is shown from tablet width up. The close-up shows the market on its own
 * with its cities, and is the only view on phones, where a whole-world map
 * would be too small to read.
 */

const label = { font: "600 11px var(--font-sans)", letterSpacing: "0.08em", paintOrder: "stroke", stroke: "var(--color-navy-deep)", strokeWidth: 4, strokeLinejoin: "round" } as const;

function arc(a: [number, number], b: [number, number]) {
  const dist = Math.hypot(b[0] - a[0], b[1] - a[1]);
  return `M${a[0].toFixed(1)},${a[1].toFixed(1)} Q${((a[0] + b[0]) / 2).toFixed(1)},${((a[1] + b[1]) / 2 - dist * 0.26).toFixed(1)} ${b[0].toFixed(1)},${b[1].toFixed(1)}`;
}

/** The selected market among the others. */
function WorldView({ location }: { location: LocationRecord }) {
  const isCity = location.kind === "city";
  const market = isCity ? markets.find((m) => m.slug === location.parent)! : location;
  const shape = marketShapes[market.market];
  const focus = isCity ? projectWorld(location.longitude, location.latitude) : shape.centre;
  const others = markets.filter((m) => m.slug !== market.slug);
  const children = citiesOf(market.slug);

  return (
    <svg viewBox="0 6 1000 345" aria-hidden className="h-auto w-full overflow-visible">
      <path d={worldMap.dots} fill="none" stroke="rgb(255 255 255 / 0.22)" strokeWidth="3" strokeLinecap="round" className="motion-safe:animate-[fade-in_0.6s_ease-out_both]" />

      {/* Other markets: quiet outlines that link to their own pages */}
      {others.map((m) => (
        <Link key={m.slug} href={locationPath(m)} aria-label={m.name} className="group/m outline-none">
          <title>{m.name}</title>
          <path d={marketShapes[m.market].world} fill="rgb(255 255 255 / 0.05)" stroke="rgb(255 255 255 / 0.3)" strokeWidth="0.7" className="transition-colors duration-300 group-hover/m:fill-cyan/30 group-hover/m:stroke-cyan group-focus-visible/m:fill-cyan/30" />
        </Link>
      ))}

      {/* Routes from the selected place to the other markets */}
      {others.map((m, i) => {
        const d = arc(focus, marketShapes[m.market].centre);
        return (
          <g key={m.slug} className="motion-safe:animate-[fade-in_0.6s_ease-out_both]" style={{ animationDelay: `${0.7 + i * 0.06}s` }}>
            <path d={d} fill="none" stroke="rgb(255 255 255 / 0.14)" strokeWidth="0.8" />
            <path d={d} fill="none" stroke={i % 3 === 0 ? "var(--color-orange)" : "var(--color-cyan)"} strokeWidth="1.4" strokeLinecap="round" strokeDasharray="4 20" className="motion-safe:animate-dash" style={{ animationDuration: `${2.6 + (i % 4) * 0.5}s` }} />
          </g>
        );
      })}

      {/* Other markets: hub dot and code */}
      {others.map((m) => {
        const [x, y] = marketShapes[m.market].centre;
        return (
          <g key={m.slug} pointerEvents="none">
            <circle cx={x} cy={y} r="2.6" fill="rgb(255 255 255 / 0.75)" />
            <text x={x} y={y - 7} textAnchor="middle" style={{ ...label, font: "500 9px var(--font-mono)", fill: "rgb(255 255 255 / 0.6)", strokeWidth: 3 }}>{m.code}</text>
          </g>
        );
      })}

      {/* The selected market */}
      <g className="motion-safe:animate-[fade-in_0.7s_ease-out_both]" style={{ animationDelay: "0.35s" }}>
        <path d={shape.world} fill="none" stroke="var(--color-cyan)" strokeOpacity="0.35" strokeWidth="6" strokeLinejoin="round" className="motion-safe:animate-[location-glow_3.2s_ease-in-out_infinite]" />
        <path d={shape.world} fill="var(--color-blue)" fillOpacity="0.55" stroke="var(--color-cyan)" strokeWidth="1.2" strokeLinejoin="round" />
        {shape.tiny ? (
          <>
            <circle cx={shape.centre[0]} cy={shape.centre[1]} r="13" fill="var(--color-blue)" fillOpacity="0.25" stroke="var(--color-cyan)" strokeWidth="1.2" />
            <circle cx={shape.centre[0]} cy={shape.centre[1]} r="13" fill="none" stroke="var(--color-cyan)" strokeWidth="1" className="origin-center [transform-box:fill-box] motion-safe:animate-ping-soft" />
          </>
        ) : null}
      </g>

      {/* Its cities, at world scale */}
      {children.map((c) => {
        const [x, y] = projectWorld(c.longitude, c.latitude);
        const on = isCity && c.slug === location.slug;
        return on ? null : <circle key={c.slug} cx={x} cy={y} r="1.8" fill="#fff" fillOpacity="0.85" pointerEvents="none" />;
      })}

      {/* Marker and name */}
      <g className="motion-safe:animate-[fade-in_0.5s_ease-out_both]" style={{ animationDelay: "0.6s" }} pointerEvents="none">
        {isCity ? (
          <>
            <circle cx={focus[0]} cy={focus[1]} r="9" fill="none" stroke="var(--color-orange)" strokeWidth="1.2" className="origin-center [transform-box:fill-box] motion-safe:animate-ping-soft" />
            <circle cx={focus[0]} cy={focus[1]} r="4.2" fill="var(--color-orange)" stroke="var(--color-navy-deep)" strokeWidth="1.4" />
            <text x={focus[0] + 11} y={focus[1] + 5} style={{ ...label, fill: "#fff", font: "700 15px var(--font-sans)", letterSpacing: "0" }}>{location.name}</text>
            <text x={shape.centre[0]} y={shape.centre[1] + (focus[1] < shape.centre[1] ? 24 : -18)} textAnchor="middle" style={{ ...label, fill: "var(--color-cyan)", font: "600 12px var(--font-sans)" }}>{market.name.toUpperCase()}</text>
          </>
        ) : (
          <text x={shape.centre[0]} y={shape.centre[1] - (shape.tiny ? 20 : 0) + (shape.tiny ? 0 : 4)} textAnchor="middle" style={{ ...label, fill: "#fff", font: "700 13px var(--font-sans)" }}>{market.name.toUpperCase()}</text>
        )}
      </g>
    </svg>
  );
}

/** The market on its own, with its cities. */
function CloseUp({ location }: { location: LocationRecord }) {
  const isCity = location.kind === "city";
  const market = isCity ? markets.find((m) => m.slug === location.parent)! : location;
  const { lens } = marketShapes[market.market];
  const pad = 40;
  // Sizes are in drawing units; the drawing is about 480 wide and shown at roughly 280px.
  const u = (Math.max(lens.w, lens.h) + pad * 2) / 480;
  const project = (lon: number, lat: number): [number, number] => [(lon - lens.lonMin) * lens.kx + pad, (lens.latMax - lat) * lens.ky + pad];

  const children = citiesOf(market.slug);
  const points = (children.length ? children : [market]).map((c) => ({ record: c, xy: project(c.longitude, c.latitude) }));
  const selected = isCity ? location.slug : null;
  const nearby = new Set(isCity ? (location.nearby ?? []) : []);

  // Cities that sit on top of each other share one label, named after their area.
  const named = points.map((p, i) => {
    const crowd = points.filter((q, j) => j !== i && Math.hypot(q.xy[0] - p.xy[0], q.xy[1] - p.xy[1]) < 14 * u);
    const on = p.record.slug === selected;
    const hidden = !on && crowd.some((q) => q.record.slug === selected || points.indexOf(q) < i);
    // A shared label only when every city in the huddle belongs to the same named area.
    const shared = crowd.length > 0 && !selected && p.record.cluster !== undefined && crowd.every((q) => q.record.cluster === p.record.cluster);
    const text = shared ? p.record.cluster! : p.record.name;
    return { ...p, on, hidden, text, size: (on ? 28 : 21) * u };
  });

  // Each label takes the first side of its marker where it stays inside the
  // drawing and clear of the other markers and the labels already placed.
  type Box = [number, number, number, number];
  const width = lens.w + pad * 2;
  const hits = (a: Box, b: Box) => a[0] < b[2] && b[0] < a[2] && a[1] < b[3] && b[1] < a[3];
  const dots: Box[] = named.map((p) => [p.xy[0] - 9 * u, p.xy[1] - 9 * u, p.xy[0] + 9 * u, p.xy[1] + 9 * u]);
  const placed: Box[] = [];
  const labelled = named.map((p, i) => {
    const [x, y] = p.xy;
    const w = p.text.length * p.size * 0.56;
    const gap = 17 * u;
    const options: { side: "start" | "end"; dy: number; box: Box }[] = [0, -1, 1].flatMap((row) =>
      (["start", "end"] as const).map((side) => {
        const dy = 7 * u + row * p.size * 0.95;
        const x0 = side === "start" ? x + gap : x - gap - w;
        return { side, dy, box: [x0, y + dy - p.size * 0.8, x0 + w, y + dy + p.size * 0.25] as Box };
      }),
    );
    const clear = (o: (typeof options)[number]) =>
      o.box[0] >= 4 && o.box[2] <= width - 4 && !placed.some((b) => hits(o.box, b)) && !dots.some((d, j) => j !== i && hits(o.box, d));
    const pick = p.hidden ? options[0] : (options.find(clear) ?? options.find((o) => o.box[0] >= 4 && o.box[2] <= width - 4) ?? options[0]);
    if (!p.hidden) placed.push(pick.box);
    return { ...p, anchor: pick.side, dy: pick.dy };
  });

  return (
    <svg viewBox={`0 0 ${lens.w + pad * 2} ${lens.h + pad * 2}`} role="img" aria-label={`Map of ${market.name}${isCity ? ` with ${location.name} marked` : children.length ? ` with ${children.map((c) => c.name).join(", ")} marked` : ""}.`} className="mx-auto h-auto max-h-[17rem] w-full overflow-visible md:max-h-[14.5rem]">
      <g transform={`translate(${pad} ${pad})`} className="motion-safe:animate-[fade-in_0.7s_ease-out_both]" style={{ animationDelay: "0.3s" }}>
        <path d={lens.d} fill="none" stroke="var(--color-cyan)" strokeOpacity="0.3" strokeWidth="10" strokeLinejoin="round" className="motion-safe:animate-[location-glow_3.2s_ease-in-out_infinite]" />
        <path data-map-selected={market.slug} d={lens.d} fill="var(--color-blue)" fillOpacity="0.45" stroke="var(--color-cyan)" strokeWidth="1.6" strokeLinejoin="round" />
      </g>

      {/* Lines from the selected city to its neighbours and the other cities */}
      {selected
        ? labelled.filter((p) => !p.on).map((p) => {
            const from = labelled.find((q) => q.on)!.xy;
            return <path key={p.record.slug} d={arc(from, p.xy)} fill="none" stroke="rgb(255 255 255 / 0.22)" strokeWidth="1" strokeDasharray="2 5" />;
          })
        : null}

      {labelled.map((p, i) => {
        const [x, y] = p.xy;
        const near = nearby.has(p.record.slug);
        const marker = (
          <g className="motion-safe:animate-[fade-in_0.4s_ease-out_both]" style={{ animationDelay: `${0.6 + i * 0.05}s` }}>
            <title>{p.record.name}</title>
            {p.on ? <circle cx={x} cy={y} r={22 * u} fill="none" stroke="var(--color-orange)" strokeWidth="1.5" className="origin-center [transform-box:fill-box] motion-safe:animate-ping-soft" /> : null}
            <circle cx={x} cy={y} r={(p.on ? 22 : 14) * u} fill={p.on ? "var(--color-orange)" : "#fff"} fillOpacity={p.on ? 0.22 : 0.12} />
            <circle data-map-city={p.on ? p.record.slug : undefined} cx={x} cy={y} r={(p.on ? 10 : near ? 6.5 : 6) * u} fill={p.on ? "var(--color-orange)" : "#fff"} stroke="var(--color-navy-deep)" strokeWidth={2.2 * u} className="transition-[fill] duration-200 group-hover/c:fill-orange" />
            {p.hidden ? null : (
              <text
                x={x + (p.anchor === "end" ? -17 : 17) * u}
                y={y + p.dy}
                textAnchor={p.anchor}
                style={{ ...label, letterSpacing: "0", fill: p.on ? "#fff" : "rgb(255 255 255 / 0.82)", font: `${p.on ? 700 : 500} ${p.size.toFixed(1)}px var(--font-sans)`, strokeWidth: 7 * u }}
                className="transition-[fill] duration-200 group-hover/c:fill-white"
              >
                {p.text}
              </text>
            )}
          </g>
        );
        // The page's own marker is not a link to itself.
        return p.on || p.record.kind !== "city" ? <g key={p.record.slug}>{marker}</g> : (
          <Link key={p.record.slug} href={locationPath(p.record)} aria-label={p.record.name} className="group/c outline-none">{marker}</Link>
        );
      })}
    </svg>
  );
}

export function LocationWorldMap({ location, className }: { location: LocationRecord; className?: string }) {
  const isCity = location.kind === "city";
  const market = isCity ? markets.find((m) => m.slug === location.parent)! : location;
  const children = citiesOf(market.slug);
  const nearby = isCity ? children.filter((c) => (location.nearby ?? []).includes(c.slug)) : [];
  const chips = isCity ? (nearby.length ? nearby : children.filter((c) => c.slug !== location.slug).slice(0, 3)) : children;

  return (
    <figure className={className}>
      {/* World view: tablet and up */}
      <div className="hidden md:block lg:-mr-8 lg:w-[112%] xl:-mr-16 xl:w-[116%]">
        <WorldView location={location} />
      </div>

      {/* The close-up sits over the quiet lower-left of the world view (open ocean on this projection). */}
      <div className="relative grid grid-cols-1 items-end gap-5 md:-mt-24 md:grid-cols-[minmax(0,16rem)_1fr] md:gap-6 lg:-mt-28 lg:grid-cols-[minmax(0,17.5rem)_1fr] xl:-mt-32">
        {/* Close-up: beside the notes on larger screens, the whole map on phones */}
        <div className="rounded-[1.5rem] border border-white/15 bg-[#0d2547] p-4 shadow-[0_24px_60px_-30px_rgb(0_0_0/0.8)]">
          <p className="label-mono flex items-center justify-between gap-3 text-[0.625rem] text-white/60">
            <span className="text-cyan">{market.code === market.name ? market.name : `${market.code} · ${market.name}`}</span>
            <span className="truncate">{isCity ? (location.cluster ?? location.name) : market.continent}</span>
          </p>
          <div className="mt-2"><CloseUp location={location} /></div>
        </div>

      {/* The same information as text */}
      <figcaption className="md:pb-3">
        <p className="text-sm leading-relaxed text-white/65">
          {isCity ? (
            <>
              <span className="font-semibold text-white">{location.name}</span>
              {location.aka?.length ? `, also searched as ${location.aka.join(" and ")},` : ""} in <Link href={locationPath(market)} className="font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-orange">{market.name}</Link>
              {location.cluster && location.cluster !== location.name ? `. Part of ${location.cluster}.` : "."}
            </>
          ) : (
            <>
              <span className="font-semibold text-white">{market.name}</span> is highlighted{children.length ? `, with the ${children.length === 1 ? "city" : `${children.length} cities`} we publish local notes for.` : "."}
            </>
          )}
        </p>
        {chips.length ? (
          <ul className="mt-3 flex flex-wrap gap-1.5" aria-label={isCity ? "Nearby and related cities" : `Cities in ${market.name}`}>
            {chips.map((c) => (
              <li key={c.slug}>
                <Link href={locationPath(c)} className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-1 text-xs font-medium text-white/85 transition-colors hover:border-cyan hover:bg-cyan/15 hover:text-white">
                  <span aria-hidden className="size-1.5 rounded-full bg-orange" />
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </figcaption>
      </div>
    </figure>
  );
}

/** Every market at once, for the locations index. Each outline links to its page. */
export function LocationsOverviewMap({ className }: { className?: string }) {
  return (
    <svg viewBox="0 6 1000 345" role="img" aria-label={`World map highlighting the markets SERPMOZ works in: ${markets.map((m) => m.name).join(", ")}.`} className={cn("h-auto w-full overflow-visible", className)}>
      <path d={worldMap.dots} fill="none" stroke="rgb(255 255 255 / 0.16)" strokeWidth="3" strokeLinecap="round" />
      {markets.map((m, i) => {
        const shape = marketShapes[m.market];
        const [x, y] = shape.centre;
        return (
          <Link key={m.slug} href={locationPath(m)} aria-label={m.name} className="group/m outline-none">
            <title>{m.name}</title>
            <g className="motion-safe:animate-[fade-in_0.6s_ease-out_both]" style={{ animationDelay: `${0.2 + i * 0.08}s` }}>
              <path d={shape.world} fill="var(--color-blue)" fillOpacity="0.4" stroke="var(--color-cyan)" strokeWidth="1" strokeLinejoin="round" className="transition-all duration-300 group-hover/m:fill-orange group-hover/m:stroke-orange group-focus-visible/m:fill-orange" />
              {shape.tiny ? <circle cx={x} cy={y} r="11" fill="var(--color-blue)" fillOpacity="0.25" stroke="var(--color-cyan)" strokeWidth="1" className="transition-colors duration-300 group-hover/m:stroke-orange" /> : null}
              <text x={x} y={shape.tiny ? y - 16 : y + 4} textAnchor="middle" style={{ ...label, fill: "#fff", font: "700 11px var(--font-sans)" }}>{m.name.toUpperCase()}</text>
            </g>
          </Link>
        );
      })}
    </svg>
  );
}
