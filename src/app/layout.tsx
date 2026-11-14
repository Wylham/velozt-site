import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Sora } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";

const display = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });
const body = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument", display: "swap" });

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
    icon: "/brand/icongradient-velozt.webp",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
