import { generateAppMetadata } from '@/lib/seo';
import { Metadata } from 'next';
import ForMusiciansContent from '@/components/ForMusiciansContent';



export default function MusiciansPage() {
  return <ForMusiciansContent />;
}

export async function generateMetadata() {
  return generateAppMetadata('services', '/services/musicians');
}
