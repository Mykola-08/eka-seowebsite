import { generateAppMetadata } from '@/lib/seo';
import FirstTimeContent from '@/components/FirstTimeContent';




export default function FirstTimePage() {
  return <FirstTimeContent />;
}

export async function generateMetadata() {
  return generateAppMetadata('firsttime', '/first-time');
}
