import { generateAppMetadata } from '@/lib/seo';
import CasosContent from '@/components/CasosContent';




export default function CasosPage() {
  return <CasosContent />;
}

export async function generateMetadata() {
  return generateAppMetadata('casos', '/cases');
}
