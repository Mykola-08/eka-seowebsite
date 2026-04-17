import { generateAppMetadata } from '@/lib/seo';
import AgenyzContent from '@/components/AgenyzContent';
import { Metadata } from 'next';



export default function AgenyzPage() {
  return <AgenyzContent />;
}

export async function generateMetadata() {
  return generateAppMetadata('agenyz', '/agenyz');
}
