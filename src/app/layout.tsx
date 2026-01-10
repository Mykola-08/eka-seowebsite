
import type { Metadata, Viewport } from "next";
import "@/react-app/index.css";
import MainLayout from "@/app/components/MainLayout";
import { Inter } from "next/font/google";
import { LanguageProvider } from '@/react-app/contexts/LanguageContext';
import { DiscountProvider } from "@/react-app/contexts/DiscountContext";
import { BookingProvider } from '@/react-app/components/BookingProvider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EKA Balance - Teràpies Integratives",
  description: "Serveis premium de benestar amb teràpies integratives.",
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
      <body className={inter.className}>
        <LanguageProvider>
           <DiscountProvider>
              <BookingProvider>
                <MainLayout>
                  {children}
                </MainLayout>
              </BookingProvider>
            </DiscountProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
