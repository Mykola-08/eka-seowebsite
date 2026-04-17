import { generateAppMetadata } from '@/lib/seo';
import { Metadata } from 'next';
import PersonalizedServicesContent from '@/components/PersonalizedServicesContent';




export default function PersonalizedServicesPage() {
  return <PersonalizedServicesContent />;
}

export async function generateMetadata() {
  return generateAppMetadata('personalized', '/personalized-services');
}
