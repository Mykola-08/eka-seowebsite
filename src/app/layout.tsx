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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ekabalance.com'),
  title: {
    default: "EKA Balance - Teràpies Somàtiques i Integratives a Barcelona",
    template: "%s | EKA Balance",
  },
  description: "Especialistes en teràpies somàtiques, kinesiologia, Movement Lesson i regulació del sistema nerviós a Barcelona per a adults, nens, atletes i professionals.",
  applicationName: "EKA Balance",
  keywords: [
    "teràpies integratives",
    "teràpies somàtiques",
    "kinesiologia",
    "Movement Lesson",
    "Jeremy Krauss Approach",
    "JKA",
    "regulació del sistema nerviós",
    "benestar",
    "massatge terapèutic",
    "Feldenkrais",
    "Barcelona",
    "Elena Kucherova",
    "salut holística",
    "teràpia corporal",
    "recuperació d'energia",
    "dolor crònic",
    "reducció d'estrès",
    "teràpia per a músics",
    "teràpia per a atletes",
    "teràpia per a nens"
  ],
  authors: [{ name: "Elena Kucherova" }],
  creator: "EKA Balance",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "EKA Balance - Teràpies Somàtiques i Integratives a Barcelona",
    description: "Restaura la teva vitalitat sistèmica amb teràpies somàtiques, kinesiologia i Movement Lesson. Reserva la teva cita a Barcelona.",
    url: "/",
    siteName: "EKA Balance",
    images: [
      {
        url: "/images/eka_logo.png",
        width: 1200,
        height: 630,
        alt: "EKA Balance - Teràpies Integratives",
      },
    ],
    locale: "ca_ES",
    alternateLocale: ["es_ES", "en_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EKA Balance - Teràpies Somàtiques",
    description: "Restaura la teva vitalitat sistèmica amb teràpies somàtiques a Barcelona.",
    images: ["/images/eka_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
    <html lang="en" className={inter.variable} suppressHydrationWarning>
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
