import { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';


export const metadata: Metadata = {
  title: "EKA Balance | Elena Kucherova - Integrative Somatic Therapies in Barcelona",
  description: "Restore your systemic vitality with Elena Kucherova. Specialist in somatic integration, kinesiology, and nervous system regulation in Barcelona. Book your session today.",
  keywords: ["Elena Kucherova", "EKA Balance", "somatic therapies Barcelona", "kinesiology", "integrative wellness", "massage therapy", "movement lesson", "JKA", "holistic health Barcelona"],
  openGraph: {
    title: "EKA Balance | Elena Kucherova - Integrative Somatic Therapies",
    description: "Restore your systemic vitality. Leading center for somatic therapies and nervous system regulation in Barcelona.",
    type: 'website',
    images: [
      {
        url: '/images/eka_logo.png',
        width: 800,
        height: 600,
        alt: 'EKA Balance - Integrative Wellness Center',
      },
    ],
  },
  alternates: {
    canonical: 'https://ekabalance.com',
  }
};

export default function Home() {
  return <HomeContent />;
}
