import { Metadata } from 'next';
import VIPContent from '@/components/VIPContent';

export const dynamic = 'force-dynamic';


export const metadata: Metadata = {
  title: 'VIP Club & Luxury Wellness Plans | EKA Balance',
  description: 'Exclusive memberships offering priority booking, home visits, and comprehensive family wellness plans.',
};

export default function VIPPage() {
  return (
    <VIPContent />
  );
}
