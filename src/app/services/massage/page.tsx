import { Metadata } from 'next';
import MassageContent from '@/components/MassageContent';

export const metadata: Metadata = {
  title: 'Therapeutic Massage & Bodywork | EKA Balance Barcelona',
  description: 'Expert therapeutic massage in Barcelona: deep tissue, myofascial release, somatic experiencing, and relaxation massage. Relieve chronic pain and restore mobility.',
  keywords: ['therapeutic massage Barcelona', 'deep tissue massage', 'myofascial release', 'somatic massage', 'relaxation massage'],
  openGraph: {
    title: 'Therapeutic Massage & Bodywork | EKA Balance',
    description: 'Expert therapeutic massage in Barcelona: deep tissue, myofascial release, and somatic experiencing.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://ekabalance.com/services/massage',
  }
};

export default function MassagePage() {
  return <MassageContent />;
}
