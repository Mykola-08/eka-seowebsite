import { generateAppMetadata } from '@/lib/seo';
import AdultsContent from '@/components/AdultsContent';



export default function AdultsPage() {
  return <AdultsContent />;
}

export async function generateMetadata() {
  return generateAppMetadata('services', '/services/adults');
}
