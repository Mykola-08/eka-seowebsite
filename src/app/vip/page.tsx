import { Metadata } from 'next';
import VIPContent from '@/components/VIPContent';

export const dynamic = 'force-dynamic';


export const metadata: Metadata = {
  title: 'VIP Club & Luxury Wellness Plans | EKA Balance',
  description: 'Membresies exclusives de benestar premium. Inclou visites a domicili, prioritat de reserva i plans de salut familiar.',
  keywords: ["Membresia VIP", "Benestar Premium", "Luxury Wellness", "Visites a domicili", "EKA Balance", "Barcelona", "Pla familiar"],
  openGraph: {
    title: 'VIP Club & Luxury Wellness | EKA Balance Barcelona',
    description: 'Experimenta el màxim nivell d\'atenció personalitzada amb els nostres plans VIP.',
    type: 'website',
    images: [{ url: '/images/eka_logo.png', width: 1200, height: 630, alt: 'EKA Balance VIP Club' }],
  },
};

export default function VIPPage() {
  return (
    <VIPContent />
  );
}
