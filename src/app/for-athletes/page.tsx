import { generateAppMetadata } from '@/lib/seo';
import ForAthletesContent from '@/components/ForAthletesContent';




export default function AthletesPage() {
  return <ForAthletesContent />;
}

export async function generateMetadata() {
  return generateAppMetadata('forAthletes', '/for-athletes');
}
