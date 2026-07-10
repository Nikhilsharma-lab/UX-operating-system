import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { Arrow, Mono } from "@/components/ui";
import { caseList, caseHref } from "@/lib/case-list";

export const metadata: Metadata = {
  title: "Cases · Nikhil Sharma",
  description:
    "Selected product and UX cases: how strategy, journey diagnosis, and design decisions moved measurable outcomes.",
};

export default function CasesIndex() {
  const builderProof = caseList.find((c) => c.slug === "lane");
  const orderedCases = builderProof
    ? [builderProof, ...caseList.filter((c) => c.slug !== builderProof.slug)]
    : caseList;

  return (
    <PageShell>
      <span className="k-label block">Cases</span>
      <h1 className="mt-3 text-[26px] font-semibold leading-tight tracking-tight text-ink">
        Product &amp; UX cases
      </h1>
      <p className="mt-3 max-w-[52ch] text-[15px] leading-[1.6] text-carbon">
        Field evidence and builder proof: how strategy, journey diagnosis, and design decisions moved measurable outcomes.
      </p>

      <div className="mt-9 border-y border-ash">
        {orderedCases.map((c) => (
          <Link
            key={c.slug}
            href={caseHref(c.slug)}
            aria-label={`Read case: ${c.title}, ${c.category}${c.program ? `, ${c.program}` : ""}`}
            className="group -mx-2 flex min-h-24 items-start gap-3 border-b border-ash px-2 py-4 transition-colors last:border-b-0 hover:bg-bone"
          >
            <Mono label={c.mono} />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="text-[15px] font-medium leading-tight text-ink">{c.title}</span>
                {c.slug === "lane" && (
                  <span className="rounded-full border border-accent-blue/30 px-2 py-0.5 text-[11px] font-medium text-accent-blue">
                    Builder proof
                  </span>
                )}
              </div>
              <p className="mt-1.5 text-[13.5px] leading-[1.5] text-lichen">{c.summary}</p>
              <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[11.5px] leading-snug text-sage">
                <span>{c.category}</span>
                {c.status && <span>{c.status}</span>}
                {c.program && <span>{c.program}</span>}
              </div>
            </div>
            <Arrow className="mt-1 shrink-0 text-sage transition-colors group-hover:text-lichen" />
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
