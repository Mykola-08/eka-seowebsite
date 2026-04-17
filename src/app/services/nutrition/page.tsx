import { generateAppMetadata } from '@/lib/seo';
import { Metadata } from 'next';
import NutritionContent from '@/components/NutritionContent';



export default function NutritionPage() {
  return <NutritionContent />;
}

export async function generateMetadata() {
  return generateAppMetadata('services', '/services/nutrition');
}
