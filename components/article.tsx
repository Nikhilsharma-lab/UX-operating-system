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
    <header>
      {eyebrow && <span className="k-label block">{eyebrow}</span>}
      <h1 className="mt-3 text-[26px] font-semibold leading-tight tracking-tight text-ink sm:text-[30px]">
        {title}
      </h1>
      {dek && <div className="mt-4 max-w-[56ch] text-[16px] leading-[1.6] text-carbon">{dek}</div>}
      {meta && meta.length > 0 && (
        <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-ash pt-5">
          {meta.map((m) => (
            <div key={m.label}>
              <dt className="text-[11px] font-medium uppercase tracking-wider text-sage">{m.label}</dt>
              <dd className="mt-0.5 text-[14px] text-ink">{m.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </header>
  );
}

export function Section({ label, children }: { label?: string; children: ReactNode }) {
  return (
    <section className="mt-12">
      {label && <span className="k-label block">{label}</span>}
      <div className={label ? "mt-4" : ""}>{children}</div>
    </section>
  );
}

export function P({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 max-w-[64ch] text-[15px] leading-[1.7] text-carbon first:mt-0">{children}</p>
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
    <div className="mt-4 space-y-3">
      {items.map((d, i) => (
        <div key={i} className="rounded-xl border border-ash bg-paper p-4">
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
            <Arrow className="mt-1 shrink-0 text-sage transition-colors group-hover:text-lichen" />
          </>
        );
        const cls = "group flex items-start gap-3 border-b border-ash py-3";
        return external ? (
          <a key={r.href} href={r.href} className={cls}>
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
