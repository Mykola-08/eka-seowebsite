import { Metadata } from 'next';
import DiscoveryContent from '@/components/DiscoveryContent';

export const dynamic = 'force-dynamic';


export const metadata: Metadata = {
  title: 'Descobreix el teu servei ideal | EKA Balance',
  description: "Formulari personalitzat i avaluació per trobar el servei de teràpia holística que millor s'adapti a les teves necessitats específiques (massatge, kinesiologia, JKA).",
  keywords: ["Avaluació de serveis", "Formulari", "Descobriment", "EKA Balance", "Orientació terapèutica"],
  openGraph: {
    title: 'Descobreix el servei ideal per a tu | EKA Balance',
    description: "Completa el nostre formulari i t'indicarem el camí òptim per recuperar el teu benestar.",
    type: 'website',
    images: [{ url: '/images/eka_logo.png', width: 1200, height: 630, alt: 'Descobreix els serveis EKA Balance' }],
  },
};

export default function DiscoveryPage() {
  return (
    <DiscoveryContent />
  );
}
