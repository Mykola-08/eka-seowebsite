import { generateAppMetadata } from '@/lib/seo';
import AboutElenaContent from '@/components/AboutElenaContent';




export default function AboutElenaPage() {
  return <AboutElenaContent />;
}

export async function generateMetadata() {
  return generateAppMetadata('about', '/about-elena');
}
