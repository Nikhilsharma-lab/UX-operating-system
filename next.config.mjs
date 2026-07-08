/** @type {import('next').NextConfig} */

// Old nested case URLs → flat /cases/<slug> (Decision 072 IA flattening).
const CASE_REDIRECTS = [
  ["/cases/safe-second-account/safety/fraud-alarm", "/cases/fraud-alarm"],
  ["/cases/safe-second-account/trust/transparent-banking", "/cases/transparent-banking"],
  ["/cases/safe-second-account/digital-onboarding/ckyc-onboarding", "/cases/ckyc-onboarding"],
  ["/cases/safe-second-account/activation/welcome-kit", "/cases/welcome-kit"],
  ["/cases/big-project/airtel-payments-bank-app", "/cases/airtel-payments-bank-app"],
  ["/cases/big-project/airtel-payments-bank-for-business", "/cases/airtel-payments-bank-for-business"],
  ["/cases/big-project/ai-and-automation", "/cases/ai-led-support-automation"],
];

const nextConfig = {
  // Production QA builds run with NEXT_DIST_DIR=.next-prod so they never
  // race the dev preview server, which owns .next/ on port 3000.
  distDir: process.env.NEXT_DIST_DIR || ".next",

  async redirects() {
    return CASE_REDIRECTS.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },

  // The dev server watches the project with its own `.next` dist dir. Production
  // QA builds run with NEXT_DIST_DIR=.next-prod; without this, `next dev`'s file
  // watcher sees the thousands of files a prod build writes into `.next-prod`,
  // storms Fast Refresh, and desyncs the client bundle so <Link> navigation
  // stalls. Explicitly ignore the prod dist dir (plus the usual noise).
  webpack(config, { dev }) {
    if (dev) {
      config.watchOptions = {
        ...(config.watchOptions || {}),
        ignored: ["**/node_modules/**", "**/.next/**", "**/.next-prod/**", "**/.git/**"],
      };
    }
    return config;
  },
};

export default nextConfig;
