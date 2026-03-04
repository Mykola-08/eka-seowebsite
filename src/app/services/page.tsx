import { Metadata } from 'next';
import ServicesContent from '@/components/ServicesContent';
export const dynamic = 'force-dynamic';


export const metadata: Metadata = {
  title: "Serveis i Teràpies Somàtiques | EKA Balance",
  description: "Teràpies integratives a Barcelona per a l'equilibri físic i emocional: Movement Lesson, Jeremy Krauss Approach (JKA), Kinesiologia, i Massatge Terapèutic.",
  keywords: ["Teràpies Somàtiques", "Serveis", "EKA Balance", "Benestar", "Integració", "Movement Lesson", "JKA", "Kinesiologia", "Massatge Terapèutic"],
  openGraph: {
    title: "Serveis i Teràpies Somàtiques | EKA Balance Barcelona",
    description: "Descobreix els nostres serveis de benestar integratiu. Kinesiologia, Movement Lesson i més.",
    type: 'website',
    images: [
      {
        url: '/images/eka_logo.png',
        width: 1200,
        height: 630,
        alt: 'Serveis EKA Balance',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Serveis i Teràpies Somàtiques | EKA Balance",
    description: "Descobreix els nostres serveis de benestar integratiu a Barcelona.",
    images: ["/images/eka_logo.png"],
  }
};

export default function ServicesPage() {
  return <ServicesContent />;
}
