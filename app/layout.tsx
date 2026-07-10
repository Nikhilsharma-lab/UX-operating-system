import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CommandMenu } from "@/components/command-menu";

/*
 * Fonts (self-hosted, OFL) - the kamran.fyi type system:
 * Geist (sans, everything), Geist Mono (small numeric bits), Newsreader
 * (serif-italic accent). Files in app/fonts/.
 */
const geist = localFont({
  src: "./fonts/geist-variable.woff2",
  variable: "--font-geist",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/geist-mono-variable.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

const newsreader = localFont({
  src: "./fonts/newsreader-italic.woff2",
  variable: "--font-newsreader",
  weight: "200 800",
  style: "italic",
  display: "swap",
});

const SITE_TITLE = "Nikhil Sharma · AI-native Product & Design Executive";
const SITE_DESCRIPTION =
  "An executive knowledge system documenting transformation stories, operating guides, and systems for building AI-native product organizations.";

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: "%s",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    siteName: "Nikhil Sharma · Executive Knowledge System",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geist.variable} ${geistMono.variable} ${newsreader.variable}`}
    >
      <body>
        <CommandMenu />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:border focus:border-ash focus:bg-paper focus:px-4 focus:py-2 focus:text-ink t-body-sm"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
