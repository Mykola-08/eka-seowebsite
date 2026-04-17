import { generateAppMetadata } from '@/lib/seo';
import { Metadata } from 'next';
import AdultsContent from '@/components/AdultsContent';



export default function AdultsPage() {
  return <AdultsContent />;
}

export async function generateMetadata() {
  return generateAppMetadata('services', '/services/adults');
}
