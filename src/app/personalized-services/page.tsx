import { Metadata } from 'next';
import PersonalizedServicesContent from '@/components/PersonalizedServicesContent';

export const dynamic = 'force-dynamic';


export const metadata: Metadata = {
  title: "Plans Personalitzats i Serveis VIP | EKA Balance",
  description: "Descobreix els nostres plans de benestar personalitzats dissenyats específicament per a oficinistes, atletes, músics i més professionals.",
  keywords: ["Plans personalitzats", "Serveis VIP", "Benestar oficinistes", "Benestar atletes", "Benestar músics", "EKA Balance", "Teràpia específica"],
  openGraph: {
    title: "Plans de Benestar Personalitzats per a Professionals | EKA Balance",
    description: "Programes a mida per oficinistes, atletes, músics i executius que busquen optimitzar el seu rendiment i benestar.",
    type: 'website',
    images: [{ url: '/images/personalized-bg.jpg', width: 1200, height: 630, alt: 'Serveis Personalitzats EKA Balance' }],
  },
};

export default function PersonalizedServicesPage() {
  return <PersonalizedServicesContent />;
}
