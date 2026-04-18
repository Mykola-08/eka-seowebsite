import { generateAppMetadata } from '@/lib/seo';
import HomeContent from '@/components/HomeContent';




export default function Home() {
  return <HomeContent />;
}

export async function generateMetadata() {
  return generateAppMetadata('home', '');
}
