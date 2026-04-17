import { generateAppMetadata } from '@/lib/seo';
import { Metadata } from 'next';
import FamiliesContent from '@/components/FamiliesContent';



export default function FamiliesPage() {
  return <FamiliesContent />;
}

export async function generateMetadata() {
  return generateAppMetadata('services', '/services/families');
}
