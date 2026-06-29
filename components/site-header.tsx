import Link from "next/link";

const navLinks = [
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Transformations", href: "/transformations" },
  { label: "Operating Manual", href: "/#operating-manual" },
  { label: "Thinking", href: "/#thinking" },
  { label: "Building", href: "/#building" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink bg-paper">
      <div className="page-shell flex flex-col gap-2 py-3 sm:h-16 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-0">
        <Link
          href="/"
          className="font-heading-serif text-[24px] leading-none tracking-[0.01em] text-ink"
        >
          Nikhil Sharma
        </Link>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-geometric-mono text-[12px] font-medium uppercase tracking-[0.06em] text-ink/65 transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
