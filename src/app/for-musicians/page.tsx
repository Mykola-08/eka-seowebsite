import { generateAppMetadata } from '@/lib/seo';
import ForMusiciansContent from '@/components/ForMusiciansContent';




export default function MusiciansPage() {
  return <ForMusiciansContent />;
}

export async function generateMetadata() {
  return generateAppMetadata('musicians', '/for-musicians');
}
