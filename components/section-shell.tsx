import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[12px] font-medium uppercase leading-[17px] tracking-[0.1em] font-rubric text-lichen">
      {children}
    </p>
  );
}

/*
 * Section furniture. The two-digit ledger indices were retired in the
 * homepage recomposition (see DECISION_LOG.md): the rubric voice alone is
 * the section grammar; numbers remain only where a real sequence exists
 * (case files, the evolution timeline).
 */
export function SectionShell({
  id,
  eyebrow,
  title,
  intro,
  children,
  bordered = true,
  align = "left",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: ReactNode;
  children?: ReactNode;
  bordered?: boolean;
  align?: "left" | "center";
}) {
  return (
    <section
      id={id}
      className={`py-20 md:py-24 ${bordered ? "border-t border-ash" : ""}`}
    >
      <div className="page-shell">
        {(eyebrow || title || intro) && (
          <Reveal>
            <header
              className={`mb-12 max-w-[700px] ${
                align === "center" ? "mx-auto text-center" : ""
              }`}
            >
              {eyebrow && (
                <div className="mb-5">
                  <SectionEyebrow>{eyebrow}</SectionEyebrow>
                </div>
              )}
              {title && <h2 className="t-hed-2 text-ink">{title}</h2>}
              {intro && (
                <div className="mt-5 space-y-3 t-dek text-olive-char">
                  {intro}
                </div>
              )}
            </header>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
