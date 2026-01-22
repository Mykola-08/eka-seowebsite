import { Metadata } from 'next';
import TermsContent from '@/app/components/TermsContent';

export const dynamic = 'force-dynamic';


export const metadata: Metadata = {
  title: 'Terms of Service | EKA Balance',
  description: 'Understand the rules and regulations for using EKA Balance services.',
};

export default function TermsOfServicePage() {
  return <TermsContent />;
}
