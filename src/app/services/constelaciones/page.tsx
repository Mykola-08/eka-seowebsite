import { generateAppMetadata } from '@/lib/seo';
import ConstelacionesContent from '@/components/ConstelacionesContent';

export async function generateMetadata() {
  return generateAppMetadata('constelaciones', '/services/constelaciones');
}

export default function ConstelacionesPage() {
  return <ConstelacionesContent />;
}
