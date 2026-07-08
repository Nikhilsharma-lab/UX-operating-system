/**
 * Typography regression guard — v4 scale (Decision 065).
 *
 * Expected values below are the EMPIRICAL computed styles measured live on
 * newyorker.com this session and recorded in design-audit/nyer-observed.json
 * (article body Caslon 21/31.5, 624px measure; article h2 Caslon 32/36; deks
 * Caslon 21; section title Irvin 28/32). Fails if the served pages drift from
 * that measured scale. Run against a served build:
 *
 *   NEXT_DIST_DIR=.next-prod npm run build
 *   NEXT_DIST_DIR=.next-prod PORT=3100 npm run start &
 *   npm run check:type            # BASE=http://localhost:3100 by default
 *
 * Requires Chrome at the standard macOS path and puppeteer-core available
 * (installed on demand via npx if missing).
 */
import puppeteer from "puppeteer-core";

const BASE = process.env.BASE || "http://localhost:3100";
const CHROME =
  process.env.CHROME_PATH ||
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const CHECKS = [
  {
    page: "/transformations/building-design-organization",
    width: 1440,
    probes: [
      { name: "story body serif", sel: "article section p.t-body-serif", expect: { familyRe: /caslon/i, size: [21, 21], lh: [31, 32] } },
      { name: "story body measure", sel: "article section p.t-body-serif", expect: { maxWidth: 640 } },
      { name: "story h1 weight/size", sel: "article h1", expect: { weight: [400, 400], size: [30, 45] } },
      { name: "story dek", sel: "article h1 + p", expect: { familyRe: /caslon/i, size: [21, 21] } },
      { name: "section heading", sel: "article section h2", expect: { size: [30, 34] } },
      { name: "support text floor", sel: "article section li span.max-w-\\[660px\\]", expect: { minSize: 15 } },
    ],
  },
  {
    page: "/",
    width: 1440,
    probes: [
      { name: "hero display cap", sel: "main h1", expect: { weight: [400, 400], size: [36, 64.5] } },
      { name: "hero dek", sel: "main h1 + p", expect: { familyRe: /caslon/i, size: [21, 21] } },
      { name: "home section title", sel: "section h2", expect: { size: [28, 37] } },
      { name: "card support floor", sel: "section li p", expect: { minSize: 15 } },
    ],
  },
  {
    page: "/operating-manual/ai-workflow",
    width: 1440,
    probes: [
      { name: "guide thesis dek", sel: "h1 + p", expect: { familyRe: /caslon/i, size: [21, 21] } },
      { name: "guide section heading", sel: "article section h2", expect: { size: [27, 33] } },
    ],
  },
];

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox"],
});
const page = await browser.newPage();

let failures = 0;
for (const spec of CHECKS) {
  await page.setViewport({ width: spec.width, height: 1000 });
  await page.goto(BASE + spec.page, { waitUntil: "networkidle0", timeout: 60000 });
  for (const probe of spec.probes) {
    const got = await page.evaluate((sel) => {
      let el = null;
      try { el = document.querySelector(sel); } catch { return { error: "bad selector" }; }
      if (!el) return null;
      const cs = getComputedStyle(el);
      return {
        family: cs.fontFamily,
        size: parseFloat(cs.fontSize),
        lh: parseFloat(cs.lineHeight),
        weight: parseInt(cs.fontWeight, 10),
        width: el.getBoundingClientRect().width,
      };
    }, probe.sel);

    const fail = (msg) => {
      failures++;
      console.log(`  FAIL ${spec.page} :: ${probe.name}: ${msg}`);
    };

    if (!got) { fail("element not found"); continue; }
    if (got.error) { fail(got.error); continue; }
    const e = probe.expect;
    if (e.familyRe && !e.familyRe.test(got.family)) fail(`family=${got.family}`);
    if (e.size && (got.size < e.size[0] || got.size > e.size[1])) fail(`size=${got.size}px (want ${e.size[0]}-${e.size[1]})`);
    if (e.lh && (got.lh < e.lh[0] || got.lh > e.lh[1])) fail(`line-height=${got.lh}px (want ${e.lh[0]}-${e.lh[1]})`);
    if (e.weight && (got.weight < e.weight[0] || got.weight > e.weight[1])) fail(`weight=${got.weight} (want ${e.weight[0]})`);
    if (e.maxWidth && got.width > e.maxWidth) fail(`measure=${Math.round(got.width)}px (max ${e.maxWidth})`);
    if (e.minSize && got.size < e.minSize) fail(`size=${got.size}px (floor ${e.minSize})`);
  }
  console.log(`checked ${spec.page} (${spec.probes.length} probes)`);
}

await browser.close();
if (failures) {
  console.error(`\ncheck:type FAILED with ${failures} drift(s)`);
  process.exit(1);
}
console.log("\ncheck:type PASSED: typography matches the measured (v4) scale");
