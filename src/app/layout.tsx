
import type { Metadata, Viewport } from "next";
import "./globals.css";
import MainLayout from "@/components/MainLayout";
import { LanguageProvider } from '@/contexts/LanguageContext';
import { DiscountProvider } from "@/contexts/DiscountContext";
import { BookingProvider } from '@/components/BookingProvider';
import SmoothScrolling from "@/components/SmoothScrolling";
import TDRPresentation from "@/components/TDRPresentation";
import { TDRProvider } from "@/components/TDRContext";

export const metadata: Metadata = {
  metadataBase: new URL('https://ekabalance.com'),
  title: "EKA Balance - Teràpies Integratives",
  description: "Serveis premium de benestar amb teràpies integratives.",
  icons: {
    icon: '/images/eka_logo.png',
    apple: '/images/eka_logo.png',
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <SmoothScrolling>
          <LanguageProvider>
            <DiscountProvider>
              <BookingProvider>
                <TDRProvider>
                  <MainLayout>
                    {children}
                    <TDRPresentation />
                  </MainLayout>
                </TDRProvider>
              </BookingProvider>
            </DiscountProvider>
          </LanguageProvider>
        </SmoothScrolling>
      </body>
    </html>
  );
}
