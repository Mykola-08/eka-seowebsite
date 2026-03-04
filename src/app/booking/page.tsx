import { Metadata } from 'next';
import BookingContent from '@/components/BookingContent';

export const dynamic = 'force-dynamic';


export const metadata: Metadata = {
  title: "Reserva la teva cita | EKA Balance Barcelona",
  description: "Reserva la teva cita per a teràpies integratives, kinesiologia, Movement Lesson i massatge terapèutic a Barcelona.",
  keywords: ["Reserva cita", "Contacte", "EKA Balance", "Teràpies", "Barcelona", "Kinesiologia", "Massatge"],
  openGraph: {
    title: "Reserva la teva cita | Teràpies Integratives EKA Balance",
    description: "Connecta amb el teu benestar. Reserva ara la teva sessió de teràpia somàtica a Barcelona.",
    type: 'website',
    images: [{ url: '/images/eka_logo.png', width: 1200, height: 630, alt: 'Reserva EKA Balance' }],
  },
};

export default function BookingPage() {
  return <BookingContent />;
}
