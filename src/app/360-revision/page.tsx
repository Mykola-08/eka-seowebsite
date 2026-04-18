import { generateAppMetadata } from '@/lib/seo';
import Revision360Content from '@/components/Revision360Content';




export default function Revision360Page() {
  return <Revision360Content />;
}

export async function generateMetadata() {
  return generateAppMetadata('360', '/360-revision');
}
