import { Metadata } from 'next';
import ServicesContent from '@/components/ServicesContent';

export const metadata: Metadata = {
  title: "Wellness Services & Somatic Therapies | EKA Balance Barcelona",
  description: "Explore our integrative wellness services: therapeutic massage, holistic kinesiology, nutrition counseling, and movement therapy. Personalized care in Barcelona.",
  keywords: ["somatic therapies", "wellness services Barcelona", "integrative therapy", "massage therapy", "kinesiology", "nutrition", "movement lesson"],
  openGraph: {
    title: "Wellness Services & Somatic Therapies | EKA Balance",
    description: "Explore our integrative wellness services in Barcelona: massage, kinesiology, nutrition, and movement therapy.",
    type: 'website',
  },
  alternates: {
    canonical: 'https://ekabalance.com/services',
  }
};

export default function ServicesPage() {
  return <ServicesContent />;
}
