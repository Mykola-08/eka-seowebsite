import { generateAppMetadata } from '@/lib/seo';
import { Metadata } from 'next';
import CookiePolicyContent from '@/components/CookiePolicyContent';




export default function CookiePolicyPage() {
  return <CookiePolicyContent />;
}

export async function generateMetadata() {
  return generateAppMetadata('cookies', '/cookie-policy');
}
