import { generateAppMetadata } from '@/lib/seo';
import { Metadata } from 'next';
import ForOfficeWorkersContent from '@/components/ForOfficeWorkersContent';



export default function OfficeWorkersPage() {
  return <ForOfficeWorkersContent />;
}

export async function generateMetadata() {
  return generateAppMetadata('services', '/services/office-workers');
}
