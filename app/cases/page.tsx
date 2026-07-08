import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { Arrow, Mono } from "@/components/ui";
import { caseList, caseHref } from "@/lib/case-list";

export const metadata: Metadata = {
  title: "Cases · Nikhil Sharma",
  description:
    "Selected product and UX cases — how strategy, journey diagnosis, and design decisions moved measurable outcomes.",
};

export default function CasesIndex() {
  return (
    <PageShell>
      <span className="k-label block">Cases</span>
      <h1 className="mt-3 text-[26px] font-semibold leading-tight tracking-tight text-ink">
        Product &amp; UX cases
      </h1>
      <p className="mt-3 max-w-[52ch] text-[15px] leading-[1.6] text-carbon">
        How strategy, journey diagnosis, and design decisions moved measurable outcomes.
      </p>

      <div className="mt-8 border-t border-ash">
        {caseList.map((c) => (
          <Link
            key={c.slug}
            href={caseHref(c.slug)}
            className="group flex items-start gap-3 border-b border-ash py-4"
          >
            <Mono label={c.mono} />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="text-[15px] font-medium leading-tight text-ink">{c.title}</span>
                {c.program && <span className="text-[12px] text-sage">{c.program}</span>}
              </div>
              <p className="mt-1.5 text-[13.5px] leading-[1.5] text-lichen">{c.summary}</p>
            </div>
            <Arrow className="mt-1 shrink-0 text-sage transition-colors group-hover:text-lichen" />
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
