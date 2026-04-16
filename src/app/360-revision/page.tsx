import { Metadata } from 'next';
import Revision360Content from '@/components/Revision360Content';


export const metadata: Metadata = {
  title: '360° Health Revision | EKA Balance Barcelona',
  description: 'Comprehensive 360° health assessment: structural, chemical, emotional, and energetic evaluation. Discover the real origin of your symptoms with our exclusive methodology.',
  keywords: ['360 health revision', 'comprehensive health assessment', 'holistic diagnosis', 'kinesiology assessment Barcelona'],
  openGraph: {
    title: '360° Health Revision | EKA Balance Barcelona',
    description: 'Comprehensive health assessment to discover the real origin of your symptoms.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://ekabalance.com/360-revision',
  }
};

export default function Revision360Page() {
  return <Revision360Content />;
}
