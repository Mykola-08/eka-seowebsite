import { generateAppMetadata } from '@/lib/seo';
import NutritionContent from '@/components/NutritionContent';



export default function NutritionPage() {
  return <NutritionContent />;
}

export async function generateMetadata() {
  return generateAppMetadata('nutrition', '/services/nutrition');
}
