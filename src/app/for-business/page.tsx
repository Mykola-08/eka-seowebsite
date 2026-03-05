import { Metadata } from 'next';
import ForBusinessContent from '@/components/ForBusinessContent';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Wellness for Business | EKA Balance',
  description: 'Corporate wellness programs, group classes, and consulting to improve team health and reduce workplace stress.',
};

export default function BusinessPage() {
  return <ForBusinessContent />;
}
