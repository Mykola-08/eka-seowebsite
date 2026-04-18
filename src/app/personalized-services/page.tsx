import { generateAppMetadata } from '@/lib/seo';
import PersonalizedServicesContent from '@/components/PersonalizedServicesContent';




export default function PersonalizedServicesPage() {
  return <PersonalizedServicesContent />;
}

export async function generateMetadata() {
  return generateAppMetadata('personalized', '/personalized-services');
}
