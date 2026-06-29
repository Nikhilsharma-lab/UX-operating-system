import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

// New Yorker editorial faces — self-hosted, licensed (license to be
// purchased before public launch). Files live in app/fonts/ (git-ignored).

// Display / hero serif.
const caslon = localFont({
  src: [
    { path: "./fonts/ACaslonPro-Regular.woff", weight: "400", style: "normal" },
    { path: "./fonts/ACaslonPro-Italic.woff", weight: "400", style: "italic" },
    { path: "./fonts/ACaslonPro-Semibold.woff", weight: "600", style: "normal" },
    { path: "./fonts/ACaslonPro-Bold.woff", weight: "700", style: "normal" },
  ],
  variable: "--font-caslon",
  display: "swap",
});

// Heading face (H2 / H3 / feature titles).
const irvin = localFont({
  src: "./fonts/IrvinHeadingPro.woff2",
  variable: "--font-irvin",
  display: "swap",
});

// Navigation / UI labels.
const graphik = localFont({
  src: [
    { path: "./fonts/Graphik-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Graphik-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Graphik-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-graphik",
  display: "swap",
});

// Body copy.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nikhil Sharma — AI-native Product Executive",
  description:
    "Nikhil Sharma builds AI-native product organizations, systems, and businesses that turn ambiguity into measurable outcomes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${caslon.variable} ${irvin.variable} ${graphik.variable} ${inter.variable}`}
    >
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-carbon focus:px-4 focus:py-2 focus:text-paper font-geometric-mono t-body-sm"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
