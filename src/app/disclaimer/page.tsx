import { Metadata } from 'next';
import DisclaimerContent from '@/components/DisclaimerContent';

export const metadata: Metadata = {
  title: 'Alternative Therapy Disclaimer | EKA Balance',
  description: 'Important disclaimer about EKA Balance complementary wellness services. These services are not medical treatment. Always consult your doctor.',
  robots: { index: true, follow: true },
};

export default function DisclaimerPage() {
  return <DisclaimerContent />;
}
