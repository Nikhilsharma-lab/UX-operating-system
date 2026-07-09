import Link from "next/link";
import Image from "next/image";
import { CommandButton } from "@/components/command-button";

/*
 * Homepage - kamran.fyi single-column system, identity block after jpdanks.com,
 * keeg.in-style ⌘ command menu (top-right). All content is Nikhil's own.
 */

const EMAIL = "hi.nikhilsharma@gmail.com";
const RESUME = "/resume"; // dedicated résumé page (app/resume)

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={`h-3.5 w-3.5 ${className}`}>
      <path d="M5 11L11 5M6 5h5v5" />
    </svg>
  );
}

/* Amber geometric marks stand in for project logos (Nikhil has none yet). */
function Shape({ kind }: { kind: string }) {
  return (
    <span className="grid h-6 w-6 shrink-0 place-items-center" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px] text-accent-blue">
        {kind === "triangle" ? (
          <path d="M12 4.5 20.5 19.5H3.5z" />
        ) : kind === "square" ? (
          <rect x="5" y="5" width="14" height="14" rx="2.5" />
        ) : kind === "diamond" ? (
          <path d="M12 2.5 21.5 12 12 21.5 2.5 12z" />
        ) : kind === "plus" ? (
          <path d="M10 4h4v6h6v4h-6v6h-4v-6H4v-4h6z" />
        ) : (
          <circle cx="12" cy="12" r="7.5" />
        )}
      </svg>
    </span>
  );
}

function Dot() {
  return <span aria-hidden="true" className="text-sage">·</span>;
}

/* ------------------------------- content -------------------------------- */

const nowPills = [
  { label: "LANE", href: "/cases/lane", emoji: "🛣️" },
  { label: "Svenklas", href: "/#building", emoji: "🧳" },
  { label: "Operating Manual", href: "/operating-manual", emoji: "📖" },
];

const LINKEDIN = "https://www.linkedin.com/in/nikhilsharma09/";
const X_PROFILE = "https://x.com/thesharmaxp";

const social: { label: string; href: string; external?: boolean }[] = [
  { label: "Email", href: `mailto:${EMAIL}` },
  { label: "LinkedIn", href: LINKEDIN, external: true },
  { label: "X", href: X_PROFILE, external: true },
];

const outcomes: [string, string][] = [
  ["0→20", "Product design capability built & scaled"],
  ["12M+", "Monthly active users, regulated finance"],
  ["1B+", "Transactions since 2017"],
  ["85%", "QA/UAT reduction via AI-assisted workflow"],
  ["28×", "Digital Gold purchase growth"],
  ["62%", "Fraud-related reduction"],
  ["500+", "User interviews / research conversations"],
];

const snapshot: { label: string; line: string }[] = [
  { label: "Leadership", line: "Head of Product Design at Airtel Payments Bank; built and scaled the design function 0→20 across consumer, merchant, and internal products." },
  { label: "Organization", line: "Built the rituals, research practices, design reviews, hiring systems, and cross-functional operating rhythms behind a maturing design org." },
  { label: "Scale", line: "Regulated financial products serving 12M+ monthly active users and 1B+ transactions since 2017." },
  { label: "Building", line: "Building LANE, an AI-native product operating system; co-founder of Svenklas, a design-led travel accessories brand." },
];

const systems: [string, string][] = [
  ["Hiring", "creates the team."],
  ["Research", "changes decisions."],
  ["Reviews", "protect quality."],
  ["Design systems", "reduce drift."],
  ["AI workflows", "compress translation."],
  ["Trust", "compounds execution."],
  ["Culture", "is what repeats."],
];

const ventures: { name: string; emoji: string; tag: string; copy: string; href?: string }[] = [
  {
    name: "LANE",
    emoji: "🛣️",
    tag: "AI product operating system",
    copy: "An AI-native product operating system for product and design teams, built on the belief that product work should start with clearer problems, better decisions, and stronger validation before execution.",
    href: "/cases/lane",
  },
  {
    name: "Svenklas",
    emoji: "🧳",
    tag: "Design-led consumer brand",
    copy: "A design-led travel accessories brand that brings founder-level ownership across product, brand, manufacturing, distribution, and commercial execution.",
    href: "https://www.svenklas.com",
  },
];

const evolution: [string, string][] = [
  ["Architecture", "taught systems and space."],
  ["Healthcare", "taught safety-critical complexity."],
  ["Payments", "taught scale and trust."],
  ["Banking", "taught regulation and business outcomes."],
  ["AI-native building", "is teaching new operating models."],
  ["Entrepreneurship", "is teaching ownership."],
];

const featured = [
  { shape: "circle", title: "CKYC Onboarding", href: "/cases/ckyc-onboarding", desc: "Turned account opening into a 24/7 digital scale engine with CKYC-based verification.", stats: [["10x+", "daily digital onboardings"], ["3-4 min", "account-opening TAT"]] },
  { shape: "triangle", title: "Fraud Alarm", href: "/cases/fraud-alarm", desc: "Fraud reporting turned from a helpline dependency into an in-app emergency-control workflow.", stats: [["62%", "fraud-related reduction"]] },
  { shape: "square", title: "Airtel Payments Bank: App", href: "/cases/airtel-payments-bank-app", desc: "Consumer payments and banking app experience at national scale.", stats: [["12M+", "monthly active users"]] },
  { shape: "diamond", title: "Airtel Payments Bank: Business", href: "/cases/airtel-payments-bank-for-business", desc: "Merchant and business banking surface for the payments bank.", stats: [["Business", "banking"]] },
];

const secondary = [
  { shape: "plus", title: "AI-led Support Automation", href: "/cases/ai-led-support-automation", desc: "Customer support run by AI agents" },
  { shape: "circle", title: "Digital Gold Growth", href: "/cases/digital-gold-growth", desc: "Investment reframed as a savings habit" },
  { shape: "triangle", title: "Welcome Kit", href: "/cases/welcome-kit", desc: "Activation welcome experience" },
  { shape: "square", title: "Transparent Banking", href: "/cases/transparent-banking", desc: "Trust through transparency" },
];

const writing = [
  { title: "Design creates systems that create products", meta: "Thesis", href: "/#thesis" },
  { title: "Building a design organization", meta: "Transformation", href: "/transformations/building-design-organization" },
  { title: "An AI workflow for product design", meta: "Guide", href: "/operating-manual/ai-workflow" },
];

/* -------------------------------- pieces -------------------------------- */

function Pill({ label, href, emoji }: { label: string; href: string; emoji: string }) {
  const internal = href.startsWith("/");
  const cls =
    "inline-flex items-center gap-1.5 rounded-full border border-ash bg-paper px-2.5 py-1 text-[13px] font-medium text-lichen transition-colors hover:border-rule-dark hover:text-ink";
  const inner = (
    <>
      <span aria-hidden="true" className="text-[12px] leading-none">{emoji}</span>
      {label}
      <Arrow className="h-3 w-3 text-sage" />
    </>
  );
  return internal ? (
    <Link href={href} className={cls}>{inner}</Link>
  ) : (
    <a href={href} className={cls}>{inner}</a>
  );
}

function ProjectCard({ p, full = false }: { p: (typeof featured)[number]; full?: boolean }) {
  return (
    <Link href={p.href} className={`group flex flex-col rounded-xl border border-ash bg-paper p-4 transition-colors hover:border-rule-dark${full ? " sm:col-span-2" : ""}`}>
      <div className="flex items-start gap-2">
        <Shape kind={p.shape} />
        <span className="flex-1 text-[15px] font-medium leading-tight text-ink">{p.title}</span>
        <Arrow className="mt-0.5 shrink-0 text-sage transition-colors group-hover:text-lichen" />
      </div>
      <p className="mt-2.5 text-[13.5px] leading-[1.55] text-lichen">{p.desc}</p>
      <div className="mt-3.5 flex flex-wrap gap-x-4 gap-y-1">
        {p.stats.map(([n, l]) => (
          <span key={l} className="text-[12.5px]">
            <b className="font-medium text-carbon">{n}</b> <span className="text-lichen">{l}</span>
          </span>
        ))}
      </div>
    </Link>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <span className="k-label block">{children}</span>;
}

/* --------------------------------- page --------------------------------- */

export default function HomePage() {
  return (
    <main id="main" className="mx-auto max-w-[560px] px-6 pb-28 pt-24">
      {/* Identity - jpdanks layout: mark + ⌘ row, then name, role, divider */}
      <header className="hero-enter">
        <div className="flex items-center justify-between">
          <Image
            src="/avatar.jpg"
            alt="Nikhil Sharma"
            width={44}
            height={44}
            priority
            className="h-11 w-11 rounded-full object-cover"
          />
          <CommandButton className="-mr-1.5" />
        </div>
        <div className="mt-8">
          <h1 className="text-[15px] font-medium leading-snug text-ink">Nikhil Sharma</h1>
          <p className="text-[15px] leading-snug text-lichen">Head of Design, Airtel Payments Bank</p>
        </div>
        <div className="mt-9 border-t border-ash" />
      </header>

      {/* Serif-italic tagline (Newsreader) - the editorial accent */}
      <p className="hero-enter hero-enter-1 mt-9 font-editorial-serif text-[21px] italic leading-[1.35] text-ink">
        From ambiguity to shipped outcomes.
      </p>

      {/* Intro */}
      <p className="hero-enter hero-enter-2 mt-5 text-[17px] leading-[1.7] text-carbon">
        I build AI-native product design organizations that turn unclear problems into trusted
        systems, faster decisions, and measurable product impact.
      </p>

      {/* Now */}
      <section className="hero-enter hero-enter-3 mt-14">
        <Label>Now</Label>
        <p className="mt-4 text-[15px] leading-[1.6] text-carbon">
          Product Design Head at <span className="font-medium text-ink">Airtel Payments Bank</span>,
          leading product design and building AI-native operating systems, turning ambiguous
          problems into shipped outcomes across fintech and consumer products.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {nowPills.map((p) => (
            <Pill key={p.label} {...p} />
          ))}
        </div>
        <p className="mt-4 text-[13.5px] leading-[1.55] text-sage">
          On the side, building small ventures and writing an operating manual for AI-native product
          teams.
        </p>
      </section>

      {/* Social */}
      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-[14px] text-lichen">
        {social.map((s, i) => (
          <span key={s.label} className="inline-flex items-center gap-4">
            {i > 0 && <Dot />}
            <a
              href={s.href}
              {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="underline underline-offset-2 hover:text-ink"
            >
              {s.label}
            </a>
          </span>
        ))}
      </div>

      {/* Selected outcomes */}
      <section className="mt-14">
        <Label>Selected outcomes</Label>
        <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-3">
          {outcomes.map(([v, l]) => (
            <div key={l}>
              <div className="text-[21px] font-medium leading-none tracking-tight tabular-nums text-ink">{v}</div>
              <div className="mt-2 text-[12.5px] leading-snug text-lichen">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Snapshot */}
      <section className="mt-14">
        <Label>Snapshot</Label>
        <div className="mt-4 space-y-5">
          {snapshot.map((s) => (
            <div key={s.label}>
              <div className="text-[11px] font-medium uppercase tracking-wider text-sage">{s.label}</div>
              <p className="mt-1.5 text-[13.5px] leading-[1.55] text-carbon">{s.line}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Operating thesis */}
      <section id="thesis" className="mt-14 scroll-mt-20">
        <Label>Operating thesis</Label>
        <p className="mt-4 font-editorial-serif text-[19px] italic leading-[1.4] text-ink">
          Design creates systems that create products.
        </p>
        <p className="mt-3 max-w-[62ch] text-[15px] leading-[1.7] text-carbon">
          Most portfolios show the visible layer: screens, flows, launches, and metrics. But products
          are shaped much earlier: by how teams frame problems, how research changes decisions, how
          product and engineering collaborate, how quality is reviewed, and how leaders create the
          conditions for repeatable execution.
        </p>
        <div className="mt-5 border-t border-ash">
          {systems.map(([k, rest]) => (
            <div key={k} className="border-b border-ash py-2.5 text-[14px] text-lichen">
              <b className="font-medium text-ink">{k}</b> {rest}
            </div>
          ))}
        </div>
      </section>

      {/* Recent Projects */}
      <section className="mt-14">
        <Label>Recent Projects</Label>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {featured.map((p, i) => (
            <ProjectCard
              key={p.title}
              p={p}
              full={featured.length % 2 === 1 && i === featured.length - 1}
            />
          ))}
        </div>
        <div className="mt-3 border-t border-ash">
          {secondary.map((s) => (
            <Link key={s.title} href={s.href} className="group flex items-center gap-3 border-b border-ash py-2.5">
              <Shape kind={s.shape} />
              <span className="text-[14px] font-medium text-ink">{s.title}</span>
              <span className="hidden text-[13px] text-lichen sm:inline">{s.desc}</span>
              <Arrow className="ml-auto text-sage transition-colors group-hover:text-lichen" />
            </Link>
          ))}
        </div>
        <Link href="/cases" className="mt-4 inline-flex items-center gap-1 text-[13px] text-lichen underline underline-offset-2 hover:text-ink">
          More in Cases <Arrow className="h-3 w-3" />
        </Link>
      </section>

      {/* Building */}
      <section id="building" className="mt-14 scroll-mt-20">
        <Label>Building</Label>
        <p className="mt-4 max-w-[58ch] text-[15px] leading-[1.6] text-carbon">
          LANE and Svenklas are builder proof that the operating philosophy extends beyond advisory
          into product and business creation.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {ventures.map((v, i) => {
            const external = v.href?.startsWith("http");
            const spanFull =
              ventures.length % 2 === 1 && i === ventures.length - 1
                ? " sm:col-span-2"
                : "";
            const cardCls = `group rounded-xl border border-ash bg-paper p-4 transition-colors hover:border-rule-dark${spanFull}`;
            const inner = (
              <>
                <div className="flex items-center gap-2">
                  <span aria-hidden="true" className="text-[14px] leading-none">{v.emoji}</span>
                  <span className="text-[15px] font-medium text-ink">{v.name}</span>
                  {v.href && (
                    <Arrow className="ml-auto text-sage transition-colors group-hover:text-lichen" />
                  )}
                </div>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-sage">{v.tag}</p>
                <p className="mt-2.5 text-[13.5px] leading-[1.55] text-lichen">{v.copy}</p>
              </>
            );
            if (!v.href) {
              return (
                <div key={v.name} className={`rounded-xl border border-ash bg-paper p-4${spanFull}`}>
                  {inner}
                </div>
              );
            }
            return external ? (
              <a
                key={v.name}
                href={v.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cardCls}
              >
                {inner}
              </a>
            ) : (
              <Link key={v.name} href={v.href} className={cardCls}>
                {inner}
              </Link>
            );
          })}
        </div>
      </section>

      {/* Writing / Thinking */}
      <section id="writing" className="mt-14 scroll-mt-20">
        <Label>Writing</Label>
        <div className="mt-4 border-t border-ash">
          {writing.map((w) => (
            <Link key={w.title} href={w.href} className="group flex items-center justify-between gap-4 border-b border-ash py-3">
              <span className="text-[15px] text-ink group-hover:underline group-hover:underline-offset-2">{w.title}</span>
              <span className="shrink-0 text-[13px] text-lichen">{w.meta}</span>
            </Link>
          ))}
        </div>
        <Link href="/operating-manual" className="mt-4 inline-flex items-center gap-1 text-[13px] text-lichen underline underline-offset-2 hover:text-ink">
          All writing <Arrow className="h-3 w-3" />
        </Link>
      </section>

      {/* Evolution */}
      <section className="mt-14">
        <Label>Evolution</Label>
        <div className="mt-4 border-t border-ash">
          {evolution.map(([era, lesson], i) => (
            <div key={era} className="flex items-baseline gap-3 border-b border-ash py-2.5">
              <span className="w-6 shrink-0 font-geometric-mono text-[12px] tabular-nums text-sage">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-[14px] font-medium text-ink">{era}</span>
              <span className="text-[13.5px] text-lichen">{lesson}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mt-14 scroll-mt-20">
        <Label>Contact</Label>
        <p className="mt-4 max-w-[52ch] text-[15px] leading-[1.6] text-carbon">
          Open to product &amp; design leadership, advisory, speaking, and AI-native product
          conversations.
        </p>
        <p className="mt-3">
          <a href={`mailto:${EMAIL}`} className="text-[18px] font-medium text-ink underline underline-offset-2 hover:text-lichen">
            {EMAIL}
          </a>
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[14px] text-lichen">
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-ink">LinkedIn</a>
          <Dot />
          <a href={X_PROFILE} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-ink">X</a>
          <Dot />
          <a href={RESUME} className="underline underline-offset-2 hover:text-ink">Résumé</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-14 border-t border-ash pt-6 text-[13px] text-sage">
        © 2026 Nikhil Sharma · Head of Design, Airtel Payments Bank
      </footer>
    </main>
  );
}
