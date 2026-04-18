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
}: {
  children: React.ReactNode;
}) {
  const lang = 'ca'; 

  return (
    <html lang={lang} className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
        <ErrorBoundary>
          <LanguageProvider>
            <DiscountProvider>
              <BookingProvider>
                <SmoothScrolling>
                  <MainLayout>
                    {children}
                  </MainLayout>
                </SmoothScrolling>
                <JsonLd />
                <Toaster position="top-center" expand={false} richColors />
              </BookingProvider>
            </DiscountProvider>
          </LanguageProvider>
        </ErrorBoundary>
        
        <Analytics />
        <SpeedInsights />

        {process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID && (
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
