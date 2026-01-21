import { Metadata } from 'next';
import AgenyzContent from '@/app/components/AgenyzContent';

export const dynamic = 'force-dynamic';


export const metadata: Metadata = {
  title: 'Agenyz - Unlock Your Cellular Potential | EKA Balance',
  description: 'Discover Agenyz bio-available supplements. Smart cell food designed to restore balance, defy aging, and fuel your vitality at the DNA level.',
  keywords: 'Agenyz, biohacking, cellular nutrition, XBi-A, liposomal vitamins, anti-aging, EKA Balance',
};

export default function AgenyzPage() {
  return <AgenyzContent />;
}
