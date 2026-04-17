import { generateAppMetadata } from '@/lib/seo';
import { Metadata } from 'next';
import ArtistsContent from '@/components/ArtistsContent';



export default function ArtistsPage() {
  return <ArtistsContent />;
}

export async function generateMetadata() {
  return generateAppMetadata('services', '/services/artists');
}
