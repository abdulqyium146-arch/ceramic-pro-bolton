import type { Metadata, Viewport } from "next";
import { Inter, Syne } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { BUSINESS } from "@/lib/business";
import AnalyticsProvider from "@/components/AnalyticsProvider";

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
    default: `${BUSINESS.name} | Car Ceramic Coating Bolton & Greater Manchester`,
    template: `%s | ${BUSINESS.name}`,
  },
  description:
    "Bolton & Greater Manchester's car ceramic coating specialists. Latin King Detailing — Ceramic Pro 9H, KAVACA PPF, paint protection film, paint correction & professional car detailing. Farnworth, Bolton BL4. Call 07482 225323.",
  keywords: [
    "car ceramic coating Bolton",
    "car ceramic coating Manchester",
    "car ceramic coating Greater Manchester",
    "ceramic coating near me Bolton",
    "car ceramic coat Bolton",
    "professional ceramic coating Bolton",
    "Ceramic Pro 9H Bolton",
    "Ceramic Pro certified installer Bolton",
    "KAVACA PPF Bolton",
    "paint protection film Bolton",
    "paint correction Bolton",
    "car detailing Bolton",
    "car detailing Manchester",
    "car valet Bolton",
    "vehicle ceramic coating Bolton",
    "Latin King Detailing",
    "ceramic coating Farnworth",
    "ceramic coating Horwich",
    "ceramic coating Westhoughton",
    "ceramic coating Kearsley",
    "ceramic coating Little Lever",
    "ceramic coating Harwood",
    "ceramic coating Walkden",
    "ceramic coating Worsley",
    "ceramic coating Leigh",
    "ceramic coating Atherton",
    "ceramic coating Tyldesley",
    "ceramic coating Radcliffe",
    "ceramic coating Whitefield",
    "ceramic coating Swinton",
    "ceramic coating Eccles",
    "ceramic coating Salford",
    "ceramic coating Bury",
    "ceramic coating Wigan",
    "ceramic coating Chorley",
    "ceramic coating Altrincham",
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
    title: `${BUSINESS.name} | Car Ceramic Coating Bolton & Greater Manchester`,
    description:
      "Bolton & Greater Manchester's car ceramic coating specialists. Latin King Detailing — Ceramic Pro 9H, KAVACA PPF, paint protection film & professional car detailing. 4.7★ Google rated.",
    images: [
      {
        url: "/images/lamborghini-aventador-ceramic-coating-bolton.webp",
        width: 1280,
        height: 853,
        alt: "Lamborghini Aventador ceramic coating — Latin King Detailing, Bolton, Greater Manchester",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS.name} | Car Ceramic Coating Bolton`,
    description:
      "Bolton & Manchester's car ceramic coating specialists. Ceramic Pro 9H, KAVACA PPF. 4.7★ Google rated.",
    images: ["/images/lamborghini-aventador-ceramic-coating-bolton.webp"],
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
  verification: {
    google: "EDqKilAP8MiJrd6dfyZHWtowvmexERAAMqiQKOR8eqM",
  },
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
      <body className="min-h-full flex flex-col antialiased">
        <AnalyticsProvider>{children}</AnalyticsProvider>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ERSBK6JG2N"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ERSBK6JG2N');
          `}
        </Script>
      </body>
    </html>
  );
}
