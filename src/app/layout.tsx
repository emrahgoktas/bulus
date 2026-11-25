import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Suspense } from "react";
import { Analytics } from "@/components/analytics";
import { Footer } from "@/components/footer";
import { Header, HeaderFallback } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { MobileCtaBar, MobileCtaFallback } from "@/components/mobile-cta-bar";
import { RegisterServiceWorker } from "@/components/register-sw";
import { lodgingJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#FF385C",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  title: {
    default: "Bursa Apart | Temiz Daireler | bursaapartbulus.com",
    template: "%s",
  },
  description: site.description,
  authors: [{ name: site.name }],
  creator: site.name,
  category: "lodging",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: site.host,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/icon", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
  appleWebApp: {
    capable: true,
    title: site.shortName,
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  other: {
    "geo.region": "TR-16",
    "geo.placename": "Bursa",
    "geo.position": `${site.geo.latitude};${site.geo.longitude}`,
    ICBM: `${site.geo.latitude}, ${site.geo.longitude}`,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${sans.className} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white pb-[calc(5.75rem+env(safe-area-inset-bottom))] text-ink md:pb-0">
        <JsonLd data={lodgingJsonLd()} />
        <a
          href="#icerik"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[80] focus:rounded-xl focus:bg-white focus:px-4 focus:py-3 focus:shadow-lg"
        >
          İçeriğe geç
        </a>
        <Suspense fallback={<HeaderFallback />}>
          <Header />
        </Suspense>
        <main id="icerik" className="flex-1">
          {children}
        </main>
        <Footer />
        <Suspense fallback={<MobileCtaFallback />}>
          <MobileCtaBar />
        </Suspense>
        <Analytics />
        <RegisterServiceWorker />
      </body>
    </html>
  );
}
