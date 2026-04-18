import { generateAppMetadata } from '@/lib/seo';
import PrivacyPolicyContent from '@/components/PrivacyPolicyContent';




export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}

export async function generateMetadata() {
  return generateAppMetadata('privacy', '/privacy-policy');
}
