import { generateAppMetadata } from '@/lib/seo';
import TermsContent from '@/components/TermsContent';




export default function TermsOfServicePage() {
  return <TermsContent />;
}

export async function generateMetadata() {
  return generateAppMetadata('terms', '/terms-of-service');
}
