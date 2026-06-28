import type { ReactNode } from "react";

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="t-caption font-geometric-mono font-medium uppercase text-lichen">
      {children}
    </p>
  );
}

export function SectionShell({
  id,
  eyebrow,
  title,
  intro,
  children,
  bordered = true,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: ReactNode;
  children?: ReactNode;
  bordered?: boolean;
}) {
  return (
    <section
      id={id}
      className={`py-20 ${bordered ? "border-t border-ash" : ""}`}
    >
      <div className="page-shell">
        {(eyebrow || title || intro) && (
          <header className="mb-12 max-w-[680px]">
            {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
            {title && (
              <h2 className="mt-4 font-editorial-serif font-light text-[clamp(1.7rem,3.4vw,2.25rem)] leading-[1.08] tracking-[-0.02em] text-ink">
                {title}
              </h2>
            )}
            {intro && (
              <div className="mt-5 space-y-3 t-body text-olive-char">
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
