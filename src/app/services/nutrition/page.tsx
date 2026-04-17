import { Metadata } from 'next';
import NutritionContent from '@/components/NutritionContent';

export const metadata: Metadata = {
  title: 'Nutrition & Dietary Counseling | EKA Balance Barcelona',
  description: 'Personalized nutrition plans to improve your health: gut health optimization, anti-inflammatory diet guidance, and energy-boosting protocols.',
  keywords: ['nutrition counseling Barcelona', 'personalized diet plans', 'gut health', 'anti-inflammatory nutrition', 'holistic nutrition'],
  openGraph: {
    title: 'Nutrition & Dietary Counseling | EKA Balance Barcelona',
    description: 'Personalized nutrition plans for optimal health and wellbeing.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://ekabalance.com/services/nutrition',
  }
};

export default function NutritionPage() {
  return <NutritionContent />;
}
