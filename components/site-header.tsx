import Link from "next/link";

const navLinks = [
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Transformations", href: "/transformations" },
  { label: "Manual", href: "/operating-manual" },
  { label: "Thinking", href: "/#thinking" },
  { label: "Building", href: "/#building" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-paper/10 bg-ink">
      <div className="page-shell flex flex-col items-center gap-3 py-4 text-center">
        <Link
          href="/"
          className="font-heading-serif text-[24px] leading-none tracking-[0.01em] text-paper"
        >
          Nikhil Sharma
        </Link>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-geometric-mono text-[12px] font-medium uppercase tracking-[0.06em] text-paper/65 transition-colors hover:text-paper"
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
