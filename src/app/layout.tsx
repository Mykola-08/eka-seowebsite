
import type { Metadata, Viewport } from "next";
import "@/react-app/index.css";
import "@/app/styles/design-system.css";
import MainLayout from "@/app/components/MainLayout";
import { LanguageProvider } from '@/react-app/contexts/LanguageContext';
import { DiscountProvider } from "@/react-app/contexts/DiscountContext";
import { BookingProvider } from '@/react-app/components/BookingProvider';
import SmoothScrolling from "@/app/components/SmoothScrolling";
import TDRPresentation from "@/app/components/TDRPresentation";
import { TDRProvider } from "@/app/components/TDRContext";

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
