import { generateAppMetadata } from '@/lib/seo';
import DiscountsContent from '@/components/DiscountsContent';




export default function DiscountsPage() {
  return <DiscountsContent />;
}

export async function generateMetadata() {
  return generateAppMetadata('discounts', '/discounts');
}
