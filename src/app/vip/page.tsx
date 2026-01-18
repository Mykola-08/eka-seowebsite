import { Metadata } from 'next';
import VIPContent from '@/app/components/VIPContent';
import MainLayout from '@/app/components/MainLayout';

export const metadata: Metadata = {
  title: 'VIP Club & Luxury Wellness Plans | EKA Balance',
  description: 'Exclusive memberships offering priority booking, home visits, and comprehensive family wellness plans.',
};

export default function VIPPage() {
  return (
    <VIPContent />
  );
}
