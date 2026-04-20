import { generateAppMetadata } from '@/lib/seo';
import MassageContent from '@/components/MassageContent';



export default function MassagePage() {
  return <MassageContent />;
}

export async function generateMetadata() {
  return generateAppMetadata('massage', '/services/massage');
}
