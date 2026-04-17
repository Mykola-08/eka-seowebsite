import { generateAppMetadata } from '@/lib/seo';
import { Metadata } from 'next';
import MassageContent from '@/components/MassageContent';



export default function MassagePage() {
  return <MassageContent />;
}

export async function generateMetadata() {
  return generateAppMetadata('services', '/services/massage');
}
