import { generateAppMetadata } from '@/lib/seo';
import ForBusinessContent from '@/components/ForBusinessContent';



export default function BusinessPage() {
  return <ForBusinessContent />;
}

export async function generateMetadata() {
  return generateAppMetadata('forBusiness', '/for-business');
}
