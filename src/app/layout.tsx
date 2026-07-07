import type { Metadata, Viewport } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { BUSINESS } from "@/lib/business";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#c9a84c",
};

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default: `${BUSINESS.name} | Ceramic Coating & Car Detailing Bolton`,
    template: `%s | ${BUSINESS.name}`,
  },
  description:
    "Bolton's trusted ceramic coating & car detailing specialists. Ceramic Pro 9H, KAVACA PPF, professional valet services. Serving Greater Manchester. Call or WhatsApp 07375 759686.",
  keywords: [
    "ceramic coating Bolton",
    "car detailing Bolton",
    "paint protection film Bolton",
    "PPF Bolton",
    "ceramic coating Greater Manchester",
    "Ceramic Pro North West",
    "car valet Bolton",
    "KAVACA PPF",
    "Initial Detail",
  ],
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: BUSINESS.url,
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} | Ceramic Coating & Car Detailing Bolton`,
    description:
      "Bolton's trusted ceramic coating & car detailing specialists. Ceramic Pro 9H, KAVACA PPF, professional valet services. 4.7★ Google rating.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Ceramic Pro North West – Ceramic Coating & Car Detailing Bolton",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS.name} | Ceramic Coating Bolton`,
    description:
      "Bolton's trusted ceramic coating & car detailing specialists. 4.7★ Google rating.",
    images: ["/images/og-default.jpg"],
  },
  alternates: {
    canonical: BUSINESS.url,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon", sizes: "64x64", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
  other: {
    "geo.region": "GB-MAN",
    "geo.placename": "Bolton, Greater Manchester",
    "geo.position": `${BUSINESS.geo.lat};${BUSINESS.geo.lng}`,
    "ICBM": `${BUSINESS.geo.lat}, ${BUSINESS.geo.lng}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${syne.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
