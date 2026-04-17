import { generateAppMetadata } from '@/lib/seo';
import { Metadata } from 'next';
import ForAthletesContent from '@/components/ForAthletesContent';



export default function AthletesPage() {
  return <ForAthletesContent />;
}

export async function generateMetadata() {
  return generateAppMetadata('services', '/services/athletes');
}
