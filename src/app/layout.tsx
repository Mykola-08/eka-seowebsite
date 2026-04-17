import { Inter } from "next/font/google";
import type { Viewport } from 'next';
import Script from 'next/script';
import "./globals.css";
import MainLayout from "@/components/MainLayout";
import { LanguageProvider } from '@/contexts/LanguageContext';
import { DiscountProvider } from "@/contexts/DiscountContext";
import { BookingProvider } from '@/components/BookingProvider';
import SmoothScrolling from "@/components/SmoothScrolling";
import JsonLd from "@/components/JsonLd";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/sonner";
import { getLocale } from '@/lib/seo';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = await getLocale();
  return (
    <html lang={lang} className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Preconnect to external image hosts to reduce network chain depth */}
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        <meta name="wot-verification" content="96379ee3c82e2684e400"/>
      </head>
      <body className="font-sans text-foreground bg-background overflow-x-hidden relative">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-background focus:px-4 focus:py-2 focus:rounded-full focus:text-primary focus:font-medium">
          Skip to main content
        </a>
        <SmoothScrolling>
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
        <SpeedInsights sampleRate={0.5} />
        <Toaster position="top-center" richColors closeButton />
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
