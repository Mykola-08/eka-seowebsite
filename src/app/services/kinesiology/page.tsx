import { Metadata } from 'next';
import KinesiologiaContent from '@/components/KinesiologyContent';

export const metadata: Metadata = {
  title: 'Holistic Kinesiology | EKA Balance Barcelona',
  description: 'Balance your body, mind, and emotions with holistic kinesiology in Barcelona. Using muscle testing to identify structural, chemical, and emotional imbalances.',
  keywords: ['holistic kinesiology Barcelona', 'muscle testing', 'energy balance', 'integrative health', 'kinesiology therapy'],
  openGraph: {
    title: 'Holistic Kinesiology | EKA Balance Barcelona',
    description: 'Balance your body, mind, and emotions with holistic kinesiology.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://ekabalance.com/services/kinesiology',
  }
};

export default function KinesiologiaPage() {
  return <KinesiologiaContent />;
}
