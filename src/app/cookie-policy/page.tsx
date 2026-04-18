import { generateAppMetadata } from '@/lib/seo';
import CookiePolicyContent from '@/components/CookiePolicyContent';




export default function CookiePolicyPage() {
  return <CookiePolicyContent />;
}

export async function generateMetadata() {
  return generateAppMetadata('cookies', '/cookie-policy');
}
