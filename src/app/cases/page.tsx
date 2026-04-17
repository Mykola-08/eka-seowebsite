import { generateAppMetadata } from '@/lib/seo';
import { Metadata } from 'next';
import CasosContent from '@/components/CasosContent';




export default function CasosPage() {
  return <CasosContent />;
}

export async function generateMetadata() {
  return generateAppMetadata('casos', '/cases');
}
