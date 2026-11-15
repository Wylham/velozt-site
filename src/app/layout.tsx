import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Sora } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/config/site";

const display = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });
const body = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument", display: "swap" });
const hero = localFont({
  src: "../font/LeniaSans-SemiBold.ttf",
  variable: "--font-lenia",
  display: "swap",
  weight: "600",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: "%s | Velozt" },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: { card: "summary", title: site.title, description: site.description },
  icons: {
    icon: { url: "/brand/icone2-velozt.svg", type: "image/svg+xml" },
    shortcut: "/brand/icone2-velozt.svg",
    apple: "/brand/icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable} ${hero.variable}`}>
      <body>{children}</body>
    </html>
  );
}
