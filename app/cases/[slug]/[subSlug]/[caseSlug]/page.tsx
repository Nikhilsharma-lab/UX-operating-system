import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CASE_SHELL, allCaseParams, getCaseStudyRef } from "@/lib/cases";

export function generateStaticParams() {
  return allCaseParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; subSlug: string; caseSlug: string }>;
}): Promise<Metadata> {
  const { slug, subSlug, caseSlug } = await params;
  const ref = getCaseStudyRef(slug, subSlug, caseSlug);
  if (!ref) return { title: "Cases · Nikhil Sharma" };
  return {
    title: `${ref.project.title} · ${ref.sub.title} · ${ref.study.title} · Cases · Nikhil Sharma`,
    description:
      "Placeholder case landing page. Final case content is pending real material.",
  };
}

const metaLabel =
  "font-geometric-mono text-[11px] font-medium uppercase tracking-[0.07em]";
const relatedLink =
  "font-geometric-mono text-[13px] tracking-[-0.02em] text-lichen transition-colors hover:text-ink";

/*
 * Placeholder case landing page (nested Cases IA prototype, Decision 062).
 * Renders the senior case-report shell with every section "Content pending".
 * No invented prose, no real product examples, no metrics.
 */
export default async function PlaceholderCasePage({
  params,
}: {
  params: Promise<{ slug: string; subSlug: string; caseSlug: string }>;
}) {
  const { slug, subSlug, caseSlug } = await params;
  const ref = getCaseStudyRef(slug, subSlug, caseSlug);
  if (!ref) notFound();
  const { project, sub, study } = ref;

  const headerMeta: [string, string][] = [
    ["Big project", project.title],
    ["Subproject", sub.title],
    ["Case study", study.title],
    ["Category", study.category],
    ["Status", study.status],
  ];

  return (
    <>
      <SiteHeader />
      <main id="main">
        <article className="py-16 md:py-20">
          <div className="page-shell max-w-[820px]">
            <Link
              href="/cases"
              className="inline-flex items-center gap-2 font-geometric-mono text-[13px] tracking-[-0.02em] text-lichen transition-colors hover:text-ink"
            >
              <span aria-hidden="true">←</span> Cases
            </Link>

            <header className="mt-8 border-t border-ink pt-6">
              <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="font-geometric-mono text-[12px] font-medium tabular-nums text-ink">
                  {project.number}·{sub.number}·{study.number}
                </span>
                <span className={`${metaLabel} text-lichen`}>
                  {project.title} · {sub.title} · {study.category}
                </span>
              </div>

              <h1 className="t-hed-1 text-balance text-ink">
                {study.title}
              </h1>

              <dl className="mt-8 grid gap-px overflow-hidden rounded-lg border border-ash bg-ash sm:grid-cols-2">
                {headerMeta.map(([label, value]) => (
                  <div key={label} className="bg-paper p-5">
                    <dt className={`${metaLabel} text-sage`}>{label}</dt>
                    <dd className="mt-2 t-body-sm text-carbon">{value}</dd>
                  </div>
                ))}
              </dl>

              <p className="mt-6 rounded-lg border border-ash bg-bone px-5 py-4 t-body-sm text-lichen">
                <span className={`${metaLabel} mb-1 block text-sage`}>
                  Placeholder case landing page
                </span>
                The final case will be written after Nikhil provides the real
                business context, user problem, journey diagnosis, strategic
                design decisions, shipped experience, artifacts, and measured
                outcome.
              </p>
            </header>

            {/* Case-study shell — every section pending */}
            <ol className="mt-14 space-y-10">
              {CASE_SHELL.map((title, i) => (
                <li key={title} className="border-t border-ash pt-6">
                  <div className="flex items-baseline gap-4">
                    <span className="w-6 shrink-0 font-geometric-mono text-[12px] tabular-nums text-sage">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <h2 className="t-hed-3 text-ink">{title}</h2>
                      <p className="mt-2 t-body-sm text-sage">Content pending.</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            <nav aria-label="Related" className="mt-14 border-t border-ash pt-6">
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                <li>
                  <Link href="/cases" className={relatedLink}>
                    Back to Cases
                  </Link>
                </li>
                <li>
                  <Link href="/" className={relatedLink}>
                    Return Home
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
