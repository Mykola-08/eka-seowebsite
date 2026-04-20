import { generateAppMetadata } from '@/lib/seo';
import FamiliesContent from '@/components/FamiliesContent';



export default function FamiliesPage() {
  return <FamiliesContent />;
}

export async function generateMetadata() {
  return generateAppMetadata('families', '/services/families');
}
