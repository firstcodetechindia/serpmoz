"""Builds the SERPMOZ logo files in public/brand/ and the header wordmark paths.

Run:  python3 scripts/build-brand.py      (needs fonttools; PNGs need Pillow + cairosvg or are made by scripts/build-brand-png.mjs)

The symbol is drawn here from first principles (see docs/BRAND_IDENTITY.md).
The wordmark is Montserrat Bold (SIL Open Font License) converted to outlines,
so no file depends on a font being installed.
"""
from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "brand"
OUT.mkdir(parents=True, exist_ok=True)

NAVY, BLUE, CYAN, ORANGE, WHITE, MUTED = "#0B1F3A", "#1677FF", "#00B8D9", "#FF7A00", "#FFFFFF", "#64748B"

# ---------------------------------------------------------------- symbol
# 64 x 64 grid. A ring (the search field) that an arrow leaves at 45 degrees
# (direction and growth). The ring is cut where the arrow crosses it, so the
# two read as one drawn form and the cut survives at favicon size.
CX, CY, R, W = 27.0, 37.0, 16.0, 10.0          # ring centre, mid radius, thickness
A0, A1 = (29.0, 35.0), (50.5, 13.5)            # arrow shaft, tail to neck
SHAFT = 7.5
HEAD = "M38.5 5.5 H58.5 V25.5 Z"               # right-angled head, corner at the tip
GAP = SHAFT + 5.5                               # width of the cut through the ring


def symbol(ring=NAVY, arrow=ORANGE, accent=True, uid="s"):
    """The mark as SVG elements (no <svg> wrapper), drawn on the 64 grid."""
    crescent = f'''
  <circle cx="{CX}" cy="{CY}" r="{R}" fill="none" stroke="url(#{uid}g)" stroke-width="{W}" mask="url(#{uid}c)"/>''' if accent else ""
    grad = f'''
    <linearGradient id="{uid}g" x1="8" y1="30" x2="40" y2="58" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="{BLUE}"/><stop offset="1" stop-color="{CYAN}"/>
    </linearGradient>
    <mask id="{uid}c" maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
      <rect width="64" height="64" fill="#fff"/>
      <circle cx="{CX + 4.2}" cy="{CY - 4.2}" r="18.6" fill="#000"/>
      <path d="M{A0[0]} {A0[1]} L64 0" stroke="#000" stroke-width="{GAP}" stroke-linecap="round"/>
    </mask>''' if accent else ""
    return f'''<defs>
    <mask id="{uid}m" maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
      <rect width="64" height="64" fill="#fff"/>
      <path d="M{A0[0]} {A0[1]} L64 0" stroke="#000" stroke-width="{GAP}" stroke-linecap="round"/>
    </mask>{grad}
  </defs>
  <circle cx="{CX}" cy="{CY}" r="{R}" fill="none" stroke="{ring}" stroke-width="{W}" mask="url(#{uid}m)"/>{crescent}
  <path d="M{A0[0]} {A0[1]} L{A1[0]} {A1[1]}" stroke="{arrow}" stroke-width="{SHAFT}" stroke-linecap="round"/>
  <path d="{HEAD}" fill="{arrow}"/>'''


# ---------------------------------------------------------------- lettering
def outline(font_file, text, size, tracking=0.0):
    """Text as one SVG path, baseline at y=0, plus its advance width."""
    font = TTFont(font_file)
    glyphs, cmap, upm = font.getGlyphSet(), font.getBestCmap(), font["head"].unitsPerEm
    k = size / upm
    x, parts = 0.0, []
    for ch in text:
        name = cmap[ord(ch)]
        pen = SVGPathPen(glyphs, ntos=lambda v: f"{v:.2f}".rstrip("0").rstrip("."))
        glyphs[name].draw(TransformPen(pen, (k, 0, 0, -k, x, 0)))
        parts.append(pen.getCommands())
        x += glyphs[name].width * k + tracking
    return "".join(parts), x - tracking


BOLD = Path(__file__).parent / "brand" / "Montserrat-Bold.woff"
SEMI = Path(__file__).parent / "brand" / "Montserrat-SemiBold.woff"
CAP = 0.7                                        # Montserrat cap height / em
SIZE = 40.0                                      # wordmark em size on the 64 grid: caps are 28 high
TRACK = 0.6
serp, serp_w = outline(BOLD, "SERP", SIZE, TRACK)
moz, moz_w = outline(BOLD, "MOZ", SIZE, TRACK)
WORD_W = serp_w + TRACK + moz_w
TAG = "AI-POWERED DIGITAL GROWTH"
TAG_SIZE = 8.6
tag, tag_w = outline(SEMI, TAG, TAG_SIZE, 0)
TAG_TRACK = (WORD_W - tag_w) / (len(TAG) - 1)    # the tagline is set to the exact width of the name
tag, tag_w = outline(SEMI, TAG, TAG_SIZE, TAG_TRACK)


def word(x, baseline, a=NAVY, b=BLUE):
    return f'<path transform="translate({x:.2f} {baseline:.2f})" fill="{a}" d="{serp}"/>\n  <path transform="translate({x + serp_w + TRACK:.2f} {baseline:.2f})" fill="{b}" d="{moz}"/>'


def tagline(x, baseline, fill=MUTED):
    return f'<path transform="translate({x:.2f} {baseline:.2f})" fill="{fill}" d="{tag}"/>'


def svg(w, h, body, title="SERPMOZ"):
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w:.0f} {h:.0f}" width="{w:.0f}" height="{h:.0f}" role="img" aria-label="{title}">\n  <title>{title}</title>\n  {body}\n</svg>\n'


GAP_X = 14.0                                     # space between symbol and name
X = 64 + GAP_X
CAPS = SIZE * CAP                                # 28

# Horizontal, no tagline: caps centred on the symbol's height.
h_plain = lambda ring=NAVY, arrow=ORANGE, a=NAVY, b=BLUE, accent=True: svg(X + WORD_W, 64, symbol(ring, arrow, accent) + "\n  " + word(X, 32 + CAPS / 2 + 2, a, b))
# Horizontal with tagline: name and tagline as a block centred on the symbol.
def h_tag(ring=NAVY, arrow=ORANGE, a=NAVY, b=BLUE, t=MUTED, accent=True):
    return svg(X + WORD_W, 64, symbol(ring, arrow, accent) + "\n  " + word(X, 14 + CAPS, a, b) + "\n  " + tagline(X, 14 + CAPS + 13, t), "SERPMOZ, AI-powered digital growth")

def stacked():
    w = WORD_W + 8
    sx = (w - 64) / 2
    body = f'<g transform="translate({sx:.2f} 0)">{symbol()}</g>\n  ' + word(4, 64 + 12 + CAPS) + "\n  " + tagline(4, 64 + 12 + CAPS + 13)
    return svg(w, 64 + 12 + CAPS + 13 + 4, body, "SERPMOZ, AI-powered digital growth")

def tile(bg, ring, arrow=ORANGE, accent=True, radius=14, pad=10):
    """The symbol on a rounded square, for favicons and app icons."""
    k = (64 - pad * 2) / 64
    return svg(64, 64, f'<rect width="64" height="64" rx="{radius}" fill="{bg}"/>\n  <g transform="translate({pad} {pad}) scale({k:.4f})">{symbol(ring, arrow, accent)}</g>', "SERPMOZ")

files = {
    "logo-primary.svg": h_tag(),
    "logo-primary-no-tagline.svg": h_plain(),
    "logo-stacked.svg": stacked(),
    "logo-icon.svg": svg(64, 64, symbol()),
    "logo-monochrome.svg": h_tag(NAVY, NAVY, NAVY, NAVY, NAVY, accent=False),
    "logo-white.svg": h_tag(WHITE, ORANGE, WHITE, BLUE, "#B8C4D6"),
    "logo-white-mono.svg": h_tag(WHITE, WHITE, WHITE, WHITE, WHITE, accent=False),
    "icon-dark.svg": tile(NAVY, WHITE),
    "icon-light.svg": tile(WHITE, NAVY),
    # Browser tab: less padding so the symbol holds at 16 pixels.
    "favicon.svg": tile(NAVY, WHITE, radius=14, pad=7),
    # App icons are full-bleed squares; the operating system rounds the corners.
    "icon-app.svg": tile(NAVY, WHITE, radius=0, pad=12),
}
for name, content in files.items():
    (OUT / name).write_text(content)

# The header draws the logo inline so it can follow the header's colours.
(ROOT / "components" / "navigation" / "logo-paths.ts").write_text(f'''/** GENERATED by scripts/build-brand.py from Montserrat Bold (OFL). Do not edit by hand. */
export const wordmark = {{
  /** Width of the whole name and its height box, in the same units as the 64-unit symbol */
  width: {WORD_W:.2f},
  capHeight: {CAPS:.2f},
  serp: "{serp}",
  /** Where "MOZ" starts */
  mozX: {serp_w + TRACK:.2f},
  moz: "{moz}",
}};
''')
print("wrote", len(files), "SVG files; wordmark width", round(WORD_W, 1), "tagline tracking", round(TAG_TRACK, 2))
