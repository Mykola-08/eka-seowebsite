import { generateAppMetadata } from '@/lib/seo';
import ServicesContent from '@/components/ServicesContent';



export default function ServicesPage() {
  return <ServicesContent />;
}

export async function generateMetadata() {
  return generateAppMetadata('services', '/services');
}
