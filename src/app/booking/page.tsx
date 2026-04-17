import { Metadata } from 'next';
import { Suspense } from 'react';
import BookingContent from '@/components/BookingContent';


export const metadata: Metadata = {
  title: "Book an Appointment | EKA Balance Barcelona",
  description: "Book your integrative therapy session with Elena Kucherova. Choose from massage, kinesiology, nutrition, and more.",
  alternates: {
    canonical: 'https://ekabalance.com/booking',
  }
};

export default function BookingPage() {
  return (
    <Suspense>
      <BookingContent />
    </Suspense>
  );
}
