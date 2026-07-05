/**
 * EditorialArt: painterly abstract placeholder art (Decision 051).
 *
 * In-code, deterministic SVG compositions that hold every art slot until
 * Nikhil generates the final raster paintings in ChatGPT using the prompts
 * in ART-DIRECTION.md (slot IDs match 1:1). No external assets, no canvas,
 * no runtime randomness: each slot's composition derives from a hash of its
 * slotId, so output is stable across renders and builds.
 *
 * Palette (restrained, art-only): warm paper, ink, ash, muted olive, and the
 * site accent used sparingly. No text, no logos, no product UI in the art.
 */

const PAPER = "#f6f4ef";
const INK = "#231f20";
const ASH = "#dadada";
const OLIVE = "#5f5e46";
const ACCENT = "#0066ff";

export type ArtVariant =
  | "hero-painting"
  | "transformation-plate"
  | "diagram-painting"
  | "journey-painting"
  | "spot";

type Aspect = "wide" | "plate" | "strip" | "square";

const ASPECTS: Record<Aspect, { w: number; h: number }> = {
  wide: { w: 1360, h: 560 },
  plate: { w: 1360, h: 680 },
  strip: { w: 1360, h: 240 },
  square: { w: 680, h: 680 },
};

/** Deterministic tiny PRNG seeded from the slotId string. */
function seeded(slotId: string) {
  let h = 2166136261;
  for (let i = 0; i < slotId.length; i++) {
    h ^= slotId.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    const t = ((h ^= h >>> 16) >>> 0) / 4294967296;
    return t;
  };
}

const R = (rnd: () => number, min: number, max: number) =>
  min + rnd() * (max - min);

/** Rough, brush-like blob path around (cx, cy). */
function blob(
  rnd: () => number,
  cx: number,
  cy: number,
  r: number,
  irregular = 0.35,
) {
  const pts: [number, number][] = [];
  const n = 9;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const rr = r * (1 - irregular / 2 + rnd() * irregular);
    pts.push([cx + Math.cos(a) * rr, cy + Math.sin(a) * rr * 0.82]);
  }
  let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
  for (let i = 1; i <= n; i++) {
    const [x, y] = pts[i % n];
    const [px, py] = pts[i - 1];
    d += ` Q ${((px + x) / 2 + R(rnd, -r, r) * 0.12).toFixed(1)} ${(
      (py + y) / 2 +
      R(rnd, -r, r) * 0.12
    ).toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  return d + " Z";
}

/** Loose ink stroke from (x1,y1) to (x2,y2) with a hand wobble. */
function stroke(
  rnd: () => number,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
) {
  const mx = (x1 + x2) / 2 + R(rnd, -30, 30);
  const my = (y1 + y2) / 2 + R(rnd, -24, 24);
  return `M ${x1.toFixed(1)} ${y1.toFixed(1)} Q ${mx.toFixed(1)} ${my.toFixed(
    1,
  )} ${x2.toFixed(1)} ${y2.toFixed(1)}`;
}

function hatch(
  rnd: () => number,
  x: number,
  y: number,
  w: number,
  n: number,
  color: string,
  opacity: number,
) {
  const lines = [];
  for (let i = 0; i < n; i++) {
    const ox = x + (i / n) * w + R(rnd, -3, 3);
    lines.push(
      <line
        key={i}
        x1={ox}
        y1={y + R(rnd, -4, 4)}
        x2={ox + R(rnd, 6, 14)}
        y2={y + 26 + R(rnd, -4, 4)}
        stroke={color}
        strokeWidth={R(rnd, 1.4, 2.6)}
        opacity={opacity}
        strokeLinecap="round"
      />,
    );
  }
  return lines;
}

function Composition({
  variant,
  rnd,
  w,
  h,
  rough,
}: {
  variant: ArtVariant;
  rnd: () => number;
  w: number;
  h: number;
  rough: string;
}) {
  switch (variant) {
    case "hero-painting": {
      // Ambiguity (left, loose gestures) resolving into structure (right, grid order).
      const cols = 5;
      return (
        <g filter={rough}>
          <path d={blob(rnd, w * 0.24, h * 0.52, h * 0.34, 0.5)} fill={OLIVE} opacity={0.18} />
          <path d={blob(rnd, w * 0.36, h * 0.4, h * 0.2, 0.45)} fill={INK} opacity={0.08} />
          {Array.from({ length: 7 }, (_, i) => (
            <path
              key={i}
              d={stroke(rnd, R(rnd, w * 0.05, w * 0.3), R(rnd, h * 0.15, h * 0.85), R(rnd, w * 0.42, w * 0.58), R(rnd, h * 0.3, h * 0.7))}
              stroke={INK}
              strokeWidth={R(rnd, 2, 5)}
              opacity={R(rnd, 0.35, 0.75)}
              fill="none"
              strokeLinecap="round"
            />
          ))}
          {Array.from({ length: cols * 3 }, (_, i) => {
            const cx = w * 0.62 + (i % cols) * (w * 0.075);
            const cy = h * 0.26 + Math.floor(i / cols) * (h * 0.24);
            return (
              <rect
                key={i}
                x={cx + R(rnd, -4, 4)}
                y={cy + R(rnd, -4, 4)}
                width={w * 0.05}
                height={h * 0.14}
                fill="none"
                stroke={INK}
                strokeWidth={2}
                opacity={R(rnd, 0.4, 0.8)}
              />
            );
          })}
          <circle cx={w * 0.845} cy={h * 0.5} r={9} fill={ACCENT} opacity={0.85} />
          {hatch(rnd, w * 0.1, h * 0.82, w * 0.14, 8, OLIVE, 0.5)}
        </g>
      );
    }
    case "transformation-plate": {
      // Layered strata (old state) with a rising path and ritual marks.
      return (
        <g filter={rough}>
          {Array.from({ length: 4 }, (_, i) => (
            <path
              key={i}
              d={blob(rnd, w * R(rnd, 0.3, 0.7), h * (0.28 + i * 0.18), h * R(rnd, 0.12, 0.2), 0.55)}
              fill={i % 2 ? OLIVE : INK}
              opacity={0.07 + i * 0.03}
            />
          ))}
          {Array.from({ length: 4 }, (_, i) => (
            <path
              key={`s${i}`}
              d={stroke(rnd, w * 0.08, h * (0.8 - i * 0.16), w * 0.92, h * (0.76 - i * 0.17))}
              stroke={INK}
              strokeWidth={R(rnd, 1.4, 2.4)}
              opacity={0.28}
              fill="none"
            />
          ))}
          <path
            d={`M ${w * 0.1} ${h * 0.86} Q ${w * 0.4} ${h * 0.82} ${w * 0.55} ${h * 0.5} T ${w * 0.9} ${h * 0.18}`}
            stroke={INK}
            strokeWidth={4.5}
            fill="none"
            opacity={0.8}
            strokeLinecap="round"
          />
          {Array.from({ length: 6 }, (_, i) => (
            <circle
              key={`c${i}`}
              cx={w * (0.16 + i * 0.13) + R(rnd, -8, 8)}
              cy={h * (0.84 - i * 0.115) + R(rnd, -10, 10)}
              r={R(rnd, 4, 7)}
              fill={i === 5 ? ACCENT : INK}
              opacity={i === 5 ? 0.85 : 0.55}
            />
          ))}
          {hatch(rnd, w * 0.72, h * 0.72, w * 0.16, 9, OLIVE, 0.45)}
        </g>
      );
    }
    case "diagram-painting": {
      // Hand-drawn system: imperfect grid, nodes, flows, one governance gate.
      const nodes = Array.from({ length: 6 }, () => [
        R(rnd, w * 0.14, w * 0.86),
        R(rnd, h * 0.22, h * 0.78),
      ]);
      return (
        <g filter={rough}>
          {Array.from({ length: 5 }, (_, i) => (
            <line
              key={`v${i}`}
              x1={w * (0.16 + i * 0.17) + R(rnd, -6, 6)}
              y1={h * 0.12}
              x2={w * (0.16 + i * 0.17) + R(rnd, -6, 6)}
              y2={h * 0.88}
              stroke={ASH}
              strokeWidth={1.4}
            />
          ))}
          {nodes.map(([x, y], i) => (
            <g key={i}>
              {i > 0 && (
                <path
                  d={stroke(rnd, nodes[i - 1][0], nodes[i - 1][1], x, y)}
                  stroke={INK}
                  strokeWidth={2}
                  opacity={0.5}
                  fill="none"
                />
              )}
              <path d={blob(rnd, x, y, R(rnd, 14, 26), 0.4)} fill={i === 3 ? OLIVE : PAPER} stroke={INK} strokeWidth={2.2} opacity={0.9} />
            </g>
          ))}
          <line x1={w * 0.62} y1={h * 0.1} x2={w * 0.62} y2={h * 0.9} stroke={INK} strokeWidth={3} opacity={0.55} strokeDasharray="14 10" />
          <circle cx={nodes[5][0]} cy={nodes[5][1]} r={5} fill={ACCENT} opacity={0.9} />
          {hatch(rnd, w * 0.08, h * 0.14, w * 0.1, 6, OLIVE, 0.4)}
        </g>
      );
    }
    case "journey-painting": {
      // A journey: crowd density, threshold, hesitation loop, commitment.
      return (
        <g filter={rough}>
          {Array.from({ length: 22 }, (_, i) => (
            <circle
              key={i}
              cx={R(rnd, w * 0.06, w * 0.3)}
              cy={R(rnd, h * 0.2, h * 0.8)}
              r={R(rnd, 3, 6.5)}
              fill={INK}
              opacity={R(rnd, 0.25, 0.6)}
            />
          ))}
          <line x1={w * 0.4} y1={h * 0.12} x2={w * 0.4} y2={h * 0.88} stroke={INK} strokeWidth={2.6} opacity={0.6} />
          <path
            d={`M ${w * 0.3} ${h * 0.5} C ${w * 0.44} ${h * 0.5}, ${w * 0.46} ${h * 0.24}, ${w * 0.52} ${h * 0.34} S ${w * 0.5} ${h * 0.62}, ${w * 0.58} ${h * 0.52} T ${w * 0.88} ${h * 0.5}`}
            stroke={INK}
            strokeWidth={4}
            fill="none"
            opacity={0.85}
            strokeLinecap="round"
          />
          <path d={blob(rnd, w * 0.52, h * 0.42, h * 0.16, 0.5)} fill={OLIVE} opacity={0.16} />
          {Array.from({ length: 5 }, (_, i) => (
            <circle
              key={`d${i}`}
              cx={w * (0.62 + i * 0.06)}
              cy={h * 0.5 + R(rnd, -6, 6)}
              r={4.4}
              fill={INK}
              opacity={0.5}
            />
          ))}
          <circle cx={w * 0.9} cy={h * 0.5} r={10} fill={ACCENT} opacity={0.9} />
          {hatch(rnd, w * 0.66, h * 0.72, w * 0.12, 7, OLIVE, 0.4)}
        </g>
      );
    }
    case "spot": {
      // Small breathing mark: one wash, one gesture, three ticks.
      return (
        <g filter={rough}>
          <path d={blob(rnd, w * 0.5, h * 0.52, h * 0.3, 0.5)} fill={OLIVE} opacity={0.18} />
          <path
            d={stroke(rnd, w * 0.3, h * 0.62, w * 0.72, h * 0.38)}
            stroke={INK}
            strokeWidth={3.4}
            opacity={0.75}
            fill="none"
            strokeLinecap="round"
          />
          {hatch(rnd, w * 0.42, h * 0.66, w * 0.14, 5, INK, 0.4)}
          <circle cx={w * 0.68} cy={h * 0.4} r={5} fill={ACCENT} opacity={0.8} />
        </g>
      );
    }
  }
}

export function EditorialArt({
  slotId,
  variant,
  aspect = "wide",
  caption,
  className = "",
}: {
  slotId: string;
  variant: ArtVariant;
  aspect?: Aspect;
  caption?: string;
  className?: string;
}) {
  const { w, h } = ASPECTS[aspect];
  const rnd = seeded(slotId);
  const filterId = `rough-${slotId.replace(/[^a-z0-9-]/gi, "")}`;

  return (
    <figure className={className} data-art-slot={slotId}>
      <div className="overflow-hidden rounded-sm border border-ash">
        <svg
          viewBox={`0 0 ${w} ${h}`}
          role="img"
          aria-label={caption ?? "Abstract editorial illustration placeholder"}
          className="block h-auto w-full"
        >
          <defs>
            <filter id={filterId} x="-4%" y="-4%" width="108%" height="108%">
              <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="2" seed="7" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="7" />
            </filter>
          </defs>
          <rect width={w} height={h} fill={PAPER} />
          {/* faint paper grain */}
          <rect width={w} height={h} fill={INK} opacity={0.015} />
          <Composition variant={variant} rnd={rnd} w={w} h={h} rough={`url(#${filterId})`} />
        </svg>
      </div>
      {caption && (
        <figcaption className="mt-2 flex items-baseline gap-3 border-b border-ash pb-2">
          <span className="font-geometric-mono text-[10px] font-medium uppercase tracking-[0.08em] text-sage">
            Plate
          </span>
          <span className="t-caption text-lichen">{caption}</span>
        </figcaption>
      )}
    </figure>
  );
}
