import { Inter } from "next/font/google";
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import "./globals.css";
import MainLayout from "@/components/MainLayout";
import { LanguageProvider } from '@/contexts/LanguageContext';
import { DiscountProvider } from "@/contexts/DiscountContext";
import { BookingProvider } from '@/components/BookingProvider';
import SmoothScrolling from "@/components/SmoothScrolling";
import JsonLd from "@/components/JsonLd";
import ErrorBoundary from "@/components/ErrorBoundary";
import ImagePreloader from "@/components/ImagePreloader";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ekabalance.com'),
  title: {
    default: "EKA Balance - Integrative Somatic Therapies in Barcelona",
    template: "%s | EKA Balance",
  },
  description: "Expert integrative somatic therapies in Barcelona: massage, kinesiology, nutrition, and movement therapy by Elena Kucherova. Book your session today.",
  applicationName: "EKA Balance",
  keywords: [
    "integrative therapy Barcelona",
    "somatic therapy",
    "kinesiology Barcelona",
    "therapeutic massage Barcelona",
    "Feldenkrais Barcelona",
    "wellness center Barcelona",
    "holistic health",
    "Elena Kucherova",
    "nutrition counseling",
    "corporate wellness programs",
    "employee wellbeing",
    "movement therapy",
    "teràpies integratives",
    "kinesiologia",
    "massatge terapèutic",
    "benestar"
  ],
  authors: [{ name: "Elena Kucherova", url: "https://ekabalance.com/about-elena" }],
  creator: "EKA Balance",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "EKA Balance - Integrative Somatic Therapies in Barcelona",
    description: "Expert integrative somatic therapies in Barcelona: massage, kinesiology, nutrition, and movement therapy. Book your session today.",
    url: "/",
    siteName: "EKA Balance",
    images: [
      {
        url: "/images/eka_logo.png",
        width: 512,
        height: 512,
        alt: "EKA Balance - Integrative wellness center logo",
      },
    ],
    locale: "ca_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EKA Balance - Integrative Somatic Therapies in Barcelona",
    description: "Expert integrative somatic therapies: massage, kinesiology, nutrition, and movement therapy by Elena Kucherova.",
    images: ["/images/eka_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: '/images/eka_logo.png',
    apple: '/images/eka_logo.png',
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ca" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Preconnect to external image hosts to reduce network chain depth */}
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        <meta name="wot-verification" content="96379ee3c82e2684e400"/>
      </head>
      <body className="font-sans text-foreground bg-background overflow-x-hidden">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-background focus:px-4 focus:py-2 focus:rounded-lg focus:text-primary focus:font-medium">
          Skip to main content
        </a>
        <SmoothScrolling>
          <ImagePreloader />
          <LanguageProvider>
            <DiscountProvider>
              <BookingProvider>
                <ErrorBoundary>
                  <JsonLd />
                  <MainLayout>
                    {children}
                  </MainLayout>
                </ErrorBoundary>
              </BookingProvider>
            </DiscountProvider>
          </LanguageProvider>
        </SmoothScrolling>
        <Analytics />
        <SpeedInsights />
        {/* HubSpot tracking script — loads after cookie consent via CookieBanner */}
        {process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID && process.env.NEXT_PUBLIC_HUBSPOT_TRACKING_ENABLED !== 'false' && (
          <Script
            id="hs-script-loader"
            src={`//js.hs-scripts.com/${process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID}.js`}
            strategy="lazyOnload"
          />
        )}
      </body>
    </html>
  );
}
