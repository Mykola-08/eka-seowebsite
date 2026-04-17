import { generateAppMetadata } from '@/lib/seo';
import { Metadata } from 'next';
import { Suspense } from 'react';
import BookingContent from '@/components/BookingContent';




export default function BookingPage() {
  return (
    <Suspense>
      <BookingContent />
    </Suspense>
  );
}

export async function generateMetadata() {
  return generateAppMetadata('booking', '/booking');
}
