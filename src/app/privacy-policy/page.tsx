import { Metadata } from 'next';
import PrivacyPolicyContent from '@/app/components/PrivacyPolicyContent';

export const dynamic = 'force-dynamic';


export const metadata: Metadata = {
  title: 'Privacy Policy | EKA Balance',
  description: 'Learn how EKA Balance collects, uses, and protects your personal data.',
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
