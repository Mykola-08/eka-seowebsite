import { generateAppMetadata } from '@/lib/seo';
import ForParentsContent from '@/components/ForParentsContent';




export default function ParentsPage() {
  return <ForParentsContent />;
}

export async function generateMetadata() {
  return generateAppMetadata('parents', '/services/parents');
}
