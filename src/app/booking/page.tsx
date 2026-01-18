import { Metadata } from 'next';
import BookingContent from '@/app/components/BookingContent';

export const metadata: Metadata = {
  title: "Reserva Cita | EKA Balance",
  description: "Reserva la teva cita per a teràpies integratives i serveis de benestar.",
};

export default function BookingPage() {
  return <BookingContent />;
}
