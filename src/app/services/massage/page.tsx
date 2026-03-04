import { Metadata } from 'next';
import MassageContent from '@/components/MassageContent';
export const dynamic = 'force-dynamic';


export const metadata: Metadata = {
  title: "Massatge Terapèutic i Alliberament Miofascial | EKA Balance Barcelona",
  description: "Tractaments profunds de massatge terapèutic, esportiu, cupping i Maderoteràpia per alleujar el dolor muscular i l'estrès físic.",
  keywords: ["Massatge Terapèutic", "Alliberament Miofascial", "Cupping", "Maderoteràpia", "Dolor d'esquena", "Massatge Esportiu", "EKA Balance", "Barcelona"],
  openGraph: {
    title: "Massatges Terapèutics i Alliberament Miofascial a Barcelona",
    description: "Recupera la flexibilitat i alleuja el dolor corporal crònic amb els nostres massatges especialitzats.",
    type: 'website',
    images: [{ url: '/images/eka_logo.png', width: 1200, height: 630, alt: 'Massatge Terapèutic EKA Balance' }],
  },
};

export default function MassagePage() {
  return <MassageContent />;
}
