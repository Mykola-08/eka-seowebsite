import { generateAppMetadata } from '@/lib/seo';
import { Metadata } from 'next';
import KinesiologiaContent from '@/components/KinesiologyContent';



export default function KinesiologiaPage() {
  return <KinesiologiaContent />;
}

export async function generateMetadata() {
  return generateAppMetadata('services', '/services/kinesiology');
}
