import { Inter } from "next/font/google";
import type { Metadata, Viewport } from 'next';
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
    default: "EKA Balance - Teràpies Integratives",
    template: "%s | EKA Balance",
  },
  description: "Serveis premium de benestar amb teràpies integratives.",
  applicationName: "EKA Balance",
  keywords: [
    "teràpies integratives",
    "kinesiologia",
    "benestar",
    "massatge terapèutic",
    "Feldenkrais",
    "Barcelona",
    "Somatic Therapy",
    "Wellness",
    "Integrative Therapy",
    "Corporate Wellness Programs",
    "Business Wellness Solutions",
    "Employee Well-being",
    "Benestar per a empreses"
  ],
  authors: [{ name: "EKA Balance" }],
  creator: "EKA Balance",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "EKA Balance - Teràpies Integratives",
    description: "Serveis premium de benestar amb teràpies integratives.",
    url: "/",
    siteName: "EKA Balance",
    images: [
      {
        url: "/images/eka_logo.png",
        width: 512,
        height: 512,
        alt: "EKA Balance logo",
      },
    ],
    locale: "ca_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EKA Balance - Teràpies Integratives",
    description: "Serveis premium de benestar amb teràpies integratives.",
    images: ["/images/eka_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
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
        {/* Preload the LCP hero image (first slideshow image) */}
        <link
          rel="preload"
          as="image"
          href="https://images.pexels.com/photos/3760262/pexels-photo-3760262.jpeg?auto=compress&cs=tinysrgb&w=1920"
          fetchPriority="high"
        />
        <meta name="wot-verification" content="96379ee3c82e2684e400"/>
      </head>
      <body className="font-sans text-gray-900 bg-white overflow-x-hidden">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-(--z-toast) focus:bg-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:text-blue-600 focus:font-medium">
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
      </body>
    </html>
  );
}
