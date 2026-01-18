import { Metadata } from 'next';
import FirstTimeContent from '@/app/components/FirstTimeContent';

export const metadata: Metadata = {
  title: 'Primera Visita - Descubre tu Plan Ideal | EKA Balance',
  description: 'Responde unas preguntas rápidas y obtén tu plan personalizado de bienestar.',
};

export default function FirstTimePage() {
  return <FirstTimeContent />;
}
