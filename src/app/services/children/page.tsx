import { generateAppMetadata } from '@/lib/seo';
import ChildrenContent from '@/components/ChildrenContent';



export default function ChildrenPage() {
  return <ChildrenContent />;
}

export async function generateMetadata() {
  return generateAppMetadata('services', '/services/children');
}
