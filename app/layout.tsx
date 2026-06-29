import type { Metadata } from "next";
import { Libre_Caslon_Text, Inter } from "next/font/google";
import "./globals.css";

// Serif display — substitute for TNY Adobe Caslon Pro (proprietary).
const caslon = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-caslon",
  display: "swap",
});

// Body + UI — substitute for Inter/Graphik (New Yorker UI stack).
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
    <html lang="en" className={`${caslon.variable} ${inter.variable}`}>
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
