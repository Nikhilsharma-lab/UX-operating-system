import Link from "next/link";
import { SectionShell } from "@/components/section-shell";
import { caseCount, caseProjects } from "@/lib/cases";

const readLink =
  "inline-flex items-center gap-2 font-geometric-mono text-[13px] font-medium tracking-[-0.01em] text-ink transition-colors hover:text-lichen";
const metaLabel =
  "font-geometric-mono text-[11px] font-medium uppercase tracking-[0.07em]";

const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? "" : "s"}`;

/*
 * Homepage Cases preview (nested Cases IA prototype, Decision 062): a
 * compact, high-level view — the big product systems only, with their
 * subproject and case counts. Never the nested subprojects or cases
 * themselves. Every card links to /cases; no placeholder case detail page is
 * linked from the homepage, and no real names or metrics appear.
 */
export function CasesSection() {
  return (
    <SectionShell
      id="cases"
      title="Product systems and UX cases being prepared."
      intro={
        <p>
          A future archive of product systems, subprojects, and UX cases
          showing how strategy, journey diagnosis, design decisions, and
          shipped experience moved measurable outcomes.
        </p>
      }
    >
      <ul className="grid gap-4 border-t border-ash pt-8 sm:grid-cols-2 lg:grid-cols-4">
        {caseProjects.map((project) => (
          <li key={project.slug} className="flex">
            <Link
              href="/cases"
              className="group flex w-full flex-col rounded-lg border border-ash bg-paper p-5 transition-colors hover:border-olive-char"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-geometric-mono text-[12px] font-medium tabular-nums text-ink">
                  {project.number}
                </span>
                <span className={`${metaLabel} text-sage`}>
                  {project.status}
                </span>
              </div>
              <h3 className="mt-4 t-hed-card text-ink">{project.title}</h3>
              <p className="mt-2 t-body-sm text-olive-char">
                {plural(project.subprojects.length, "subproject")} ·{" "}
                {plural(caseCount(project), "case")} planned
              </p>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Link href="/cases" className={readLink}>
          See the case library
          <span aria-hidden="true" className="text-lichen">
            →
          </span>
        </Link>
      </div>
    </SectionShell>
  );
}
