import { Inter } from "next/font/google";
import type { Metadata, Viewport } from 'next';
import "./globals.css";
import MainLayout from "@/components/MainLayout";
import { LanguageProvider } from '@/contexts/LanguageContext';
import { DiscountProvider } from "@/contexts/DiscountContext";
import { BookingProvider } from '@/components/BookingProvider';
import SmoothScrolling from "@/components/SmoothScrolling";

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
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased text-gray-900 bg-white">
        <SmoothScrolling>
          <LanguageProvider>
            <DiscountProvider>
              <BookingProvider>
                <MainLayout>
                  {children}
                </MainLayout>
              </BookingProvider>
            </DiscountProvider>
          </LanguageProvider>
        </SmoothScrolling>
      </body>
    </html>
  );
}
