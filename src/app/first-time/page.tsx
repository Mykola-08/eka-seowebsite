import { Metadata } from 'next';
import FirstTimeContent from '@/components/FirstTimeContent';

export const dynamic = 'force-dynamic';


export const metadata: Metadata = {
  title: 'Primera Visita - Descobreix el teu Pla Ideal | EKA Balance',
  description: 'Respon unes preguntes ràpides i obtén el teu pla personalitzat de benestar holístic amb kinesiologia i Movement Lesson.',
  keywords: ["Primera Visita", "Qüestionari Benestar", "Pla Ideal", "EKA Balance", "Avaluació", "Diagnòstic Somàtic"],
  openGraph: {
    title: 'Primera Visita | Descobreix el teu Pla Ideal a EKA Balance',
    description: 'Inicia el teu camí de benestar amb un diagnòstic personalitzat en teràpies integratives.',
    type: 'website',
    images: [{ url: '/images/eka_logo.png', width: 1200, height: 630, alt: 'Primera Visita EKA Balance' }],
  },
};

export default function FirstTimePage() {
  return <FirstTimeContent />;
}
