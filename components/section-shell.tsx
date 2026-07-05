import type { ReactNode } from "react";

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[12px] font-medium uppercase leading-[17px] tracking-[0.1em] font-rubric text-lichen">
      {children}
    </p>
  );
}

export function SectionShell({
  id,
  index,
  eyebrow,
  title,
  intro,
  children,
  bordered = true,
}: {
  id?: string;
  index?: string;
  eyebrow?: string;
  title?: string;
  intro?: ReactNode;
  children?: ReactNode;
  bordered?: boolean;
}) {
  return (
    <section
      id={id}
      className={`py-20 md:py-24 ${bordered ? "border-t border-ash" : ""}`}
    >
      <div className="page-shell">
        {(eyebrow || title || intro) && (
          <header className="mb-12 max-w-[700px]">
            {eyebrow && (
              <div className="mb-5 flex items-center gap-3">
                {index && (
                  <span className="font-geometric-mono text-[12px] font-medium tabular-nums text-ink">
                    {index}
                  </span>
                )}
                <SectionEyebrow>{eyebrow}</SectionEyebrow>
              </div>
            )}
            {title && (
              <h2 className="t-hed-2 text-ink">
                {title}
              </h2>
            )}
            {intro && (
              <div className="mt-5 space-y-3 t-dek text-olive-char">
                {intro}
              </div>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
