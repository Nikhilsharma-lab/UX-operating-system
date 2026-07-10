import type { ReactNode } from "react";
import Link from "next/link";
import { Arrow } from "@/components/ui";

/*
 * Shared article/detail-page primitives in the site's dark kamran language.
 * Used inside <PageShell> by the Cases, Transformations, and Operating-Manual
 * detail pages so every long-form page reads as one system.
 */

export function ArticleHead({
  eyebrow,
  title,
  dek,
  meta,
}: {
  eyebrow?: string;
  title: string;
  dek?: ReactNode;
  meta?: { label: string; value: string }[];
}) {
  return (
    <header className="border-b border-ash pb-8">
      {eyebrow && <span className="k-label block">{eyebrow}</span>}
      <h1 className="mt-3 text-balance text-[1.6875rem] font-semibold leading-tight tracking-tight text-ink sm:text-[2rem]">
        {title}
      </h1>
      {dek && <div className="mt-4 max-w-[56ch] text-pretty text-[1rem] leading-[1.68] text-carbon">{dek}</div>}
      {meta && meta.length > 0 && (
        <dl className="mt-7 grid border-t border-ash sm:grid-cols-2">
          {meta.map((m) => (
            <div key={m.label} className="border-b border-ash py-3 sm:odd:pr-5 sm:even:pl-5">
              <dt className="text-[11px] font-medium uppercase tracking-wider text-sage">{m.label}</dt>
              <dd className="mt-1 text-[14px] leading-snug text-ink">{m.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </header>
  );
}

export function Section({ label, children }: { label?: string; children: ReactNode }) {
  return (
    <section className="mt-14 border-t border-ash pt-8">
      {label && <span className="k-label block">{label}</span>}
      <div className={label ? "mt-4" : ""}>{children}</div>
    </section>
  );
}

export function P({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 max-w-[64ch] text-pretty text-[1rem] leading-[1.72] text-carbon first:mt-0">{children}</p>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((it, i) => (
        <li key={i} className="flex gap-2.5 text-[15px] leading-[1.6] text-carbon">
          <span aria-hidden="true" className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent-blue" />
          <span className="max-w-[62ch]">{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function MetricStrip({
  items,
  className = "sm:grid-cols-3",
}: {
  items: { value: ReactNode; label: ReactNode }[];
  className?: string;
}) {
  return (
    <dl className={`grid grid-cols-2 gap-x-6 gap-y-7 ${className}`}>
      {items.map((s, i) => (
        <div key={i}>
          <dt className="text-[21px] font-medium leading-none tracking-tight tabular-nums text-ink">
            {s.value}
          </dt>
          <dd className="mt-2 text-[12.5px] leading-snug text-lichen">
            {s.label}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function LedgerList({
  children,
  className = "mt-5",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`${className} border-y border-ash`}>{children}</div>;
}

export function LedgerItem({
  marker,
  eyebrow,
  title,
  meta,
  children,
}: {
  marker?: ReactNode;
  eyebrow?: ReactNode;
  title?: ReactNode;
  meta?: ReactNode;
  children?: ReactNode;
}) {
  const hasMarker = marker !== undefined && marker !== null;

  return (
    <div
      className={`border-b border-ash py-4 last:border-b-0 ${
        hasMarker ? "grid gap-2 sm:grid-cols-[44px_1fr] sm:gap-5" : ""
      }`}
    >
      {hasMarker && (
        <div className="font-geometric-mono text-[12px] tabular-nums text-sage">
          {marker}
        </div>
      )}
      <div>
        {eyebrow && (
          <p className="mb-2 text-[11px] font-medium uppercase tracking-wider text-sage">
            {eyebrow}
          </p>
        )}
        {title && (
          <h3 className="text-balance text-[14px] font-medium leading-snug text-ink">
            {title}
          </h3>
        )}
        {meta && (
          <p className="mt-1 text-[12.5px] leading-snug text-sage">{meta}</p>
        )}
        {children && <div className={title || meta ? "mt-2" : ""}>{children}</div>}
      </div>
    </div>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 max-w-[62ch] border-l-2 border-accent-blue/50 pl-4 text-[15px] italic leading-[1.6] text-lichen">
      {children}
    </p>
  );
}

export function DecisionList({
  items,
}: {
  items: { decision: string; why: string; tradeoff: string; result: string }[];
}) {
  return (
    <div className="mt-5 border-y border-ash">
      {items.map((d, i) => (
        <div key={i} className={i > 0 ? "border-t border-ash py-4" : "py-4"}>
          <p className="text-[14px] font-medium text-ink">{d.decision}</p>
          <dl className="mt-2.5 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-[13px] leading-[1.5]">
            <dt className="text-sage">Why</dt>
            <dd className="text-carbon">{d.why}</dd>
            <dt className="text-sage">Tradeoff</dt>
            <dd className="text-carbon">{d.tradeoff}</dd>
            <dt className="text-sage">Result</dt>
            <dd className="text-carbon">{d.result}</dd>
          </dl>
        </div>
      ))}
    </div>
  );
}

export function RelatedLinks({
  items,
}: {
  items: { title: string; href: string; description?: string }[];
}) {
  return (
    <div className="mt-4 border-t border-ash">
      {items.map((r) => {
        const external = !r.href.startsWith("/");
        const inner = (
          <>
            <div className="min-w-0 flex-1">
              <span className="text-[14px] font-medium text-ink">{r.title}</span>
              {r.description && <p className="mt-0.5 text-[13px] leading-[1.5] text-lichen">{r.description}</p>}
            </div>
            <Arrow className="interactive-arrow mt-1 shrink-0 text-sage" />
          </>
        );
        const cls = "interactive-row group -mx-2 flex min-h-11 items-start gap-3 border-b border-ash px-2 py-3 last:border-b-0";
        return external ? (
          <a key={r.href} href={r.href} className={cls} target="_blank" rel="noopener noreferrer">
            {inner}
          </a>
        ) : (
          <Link key={r.href} href={r.href} className={cls}>
            {inner}
          </Link>
        );
      })}
    </div>
  );
}
