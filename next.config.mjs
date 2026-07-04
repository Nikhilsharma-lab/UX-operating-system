/** @type {import('next').NextConfig} */
const nextConfig = {
  // Production QA builds run with NEXT_DIST_DIR=.next-prod so they never
  // race the dev preview server, which owns .next/ on port 3000.
  distDir: process.env.NEXT_DIST_DIR || ".next",
};

export default nextConfig;
