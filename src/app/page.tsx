import { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';

export const dynamic = 'force-dynamic';


export const metadata: Metadata = {
  title: "EKA Balance | Teràpies Somàtiques i Integratives a Barcelona",
  description: "Restaura la teva vitalitat sistèmica amb Elena Kucherova. Especialista en integració somàtica, kinesiologia, Movement Lesson i regulació del sistema nerviós a Barcelona.",
  keywords: ["Elena Kucherova", "EKA Balance", "Teràpies Somàtiques", "Barcelona", "Kinesiologia", "Integració Somàtica", "Benestar", "Salut", "Movement Lesson", "JKA"],
  openGraph: {
    title: "EKA Balance | Teràpies Somàtiques a Barcelona",
    description: "Restaura la teva vitalitat sistèmica. Centre de referència en teràpies somàtiques i regulació del sistema nerviós a Barcelona.",
    type: 'website',
    images: [
      {
        url: '/images/eka_logo.png',
        width: 1200,
        height: 630,
        alt: 'EKA Balance Logo - Teràpies Integratives',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EKA Balance | Teràpies Somàtiques",
    description: "Restaura la teva vitalitat sistèmica a Barcelona.",
    images: ["/images/eka_logo.png"],
  }
};

export default function Home() {
  return <HomeContent />;
}
