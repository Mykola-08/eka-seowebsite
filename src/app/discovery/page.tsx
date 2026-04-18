import { generateAppMetadata } from '@/lib/seo';
import DiscoveryContent from '@/components/DiscoveryContent';




export default function DiscoveryPage() {
  return (
    <DiscoveryContent />
  );
}

export async function generateMetadata() {
  return generateAppMetadata('discovery', '/discovery');
}
