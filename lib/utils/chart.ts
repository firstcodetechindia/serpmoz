/** Small SVG path helpers for the hand-drawn dashboard charts (no chart library). */

export type Point = [x: number, y: number];

export function scalePoints(values: number[], width: number, height: number, pad = 4): Point[] {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  const step = values.length > 1 ? width / (values.length - 1) : 0;
  return values.map((v, i) => [
    +(i * step).toFixed(2),
    +(height - pad - ((v - min) / span) * (height - pad * 2)).toFixed(2),
  ]);
}

/** Catmull-Rom spline converted to cubic béziers – a smooth line through every point. */
export function smoothPath(points: Point[], tension = 0.18): string {
  if (points.length < 2) return "";
  let d = `M${points[0][0]},${points[0][1]}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;
    const c1: Point = [p1[0] + (p2[0] - p0[0]) * tension, p1[1] + (p2[1] - p0[1]) * tension];
    const c2: Point = [p2[0] - (p3[0] - p1[0]) * tension, p2[1] - (p3[1] - p1[1]) * tension];
    d += ` C${c1[0].toFixed(2)},${c1[1].toFixed(2)} ${c2[0].toFixed(2)},${c2[1].toFixed(2)} ${p2[0]},${p2[1]}`;
  }
  return d;
}

export function areaPath(points: Point[], height: number): string {
  if (points.length < 2) return "";
  const line = smoothPath(points);
  const last = points[points.length - 1];
  return `${line} L${last[0]},${height} L${points[0][0]},${height} Z`;
}
