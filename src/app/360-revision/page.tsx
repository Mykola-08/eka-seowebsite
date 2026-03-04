import { Metadata } from 'next';
import Revision360Content from '@/components/Revision360Content';

export const dynamic = 'force-dynamic';


export const metadata: Metadata = {
  title: 'Revisió 360° | Anàlisi complet de benestar | EKA Balance',
  description: "Un anàlisi complet del teu benestar físic i emocional. Obtén un mapa d'accions personalitzat per assolir el teu màxim potencial energètic.",
  keywords: ["Revisió 360", "Benestar integral", "Diagnòstic", "Energia", "EKA Balance", "Mapa d'accions", "Consultoria holística"],
  openGraph: {
    title: 'Revisió 360° | El teu mapa de benestar personalitzat',
    description: "Diagnòstic complet i mapa d'accions per restaurar el teu equilibri i vitalitat sistèmica.",
    type: 'website',
    images: [{ url: '/images/eka_logo.png', width: 1200, height: 630, alt: 'Revisió 360 EKA Balance' }],
  },
};

export default function Revision360Page() {
  return <Revision360Content />;
}
