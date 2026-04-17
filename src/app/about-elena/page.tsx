import { generateAppMetadata } from '@/lib/seo';
import { Metadata } from 'next';
import AboutElenaContent from '@/components/AboutElenaContent';




export default function AboutElenaPage() {
  return <AboutElenaContent />;
}

export async function generateMetadata() {
  return generateAppMetadata('about', '/about-elena');
}
