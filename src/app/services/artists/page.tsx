import { generateAppMetadata } from '@/lib/seo';
import ArtistsContent from '@/components/ArtistsContent';



export default function ArtistsPage() {
  return <ArtistsContent />;
}

export async function generateMetadata() {
  return generateAppMetadata('artists', '/services/artists');
}
