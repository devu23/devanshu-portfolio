import type { Metadata } from "next";
import localFont from "next/font/local";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { identity } from "@/data/site";

const geist = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist",
  weight: "100 900",
  display: "swap",
});
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devanshu-portfolio-mocha.vercel.app"),
  title: `${identity.name} — ${identity.role}`,
  description: identity.tagline,
  openGraph: {
    type: "website",
    title: `${identity.name} — ${identity.role}`,
    description: identity.tagline,
    siteName: identity.name,
  },
  twitter: { card: "summary_large_image", title: `${identity.name} — ${identity.role}`, description: identity.tagline },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${serif.variable}`} suppressHydrationWarning>
      <head>
        {/* Marks "JS is running" before paint, so reveal-hiding never happens without JS. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="bg-canvas font-sans text-ink antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
