import type { Metadata } from 'next';
import ContactContent from '@/components/ContactContent';

export const metadata: Metadata = {
  title: 'Contact EKA Balance | Barcelona',
  description:
    "Get in touch with EKA Balance in Barcelona. Book a session, ask about our integrative somatic therapies, or request a consultation. We reply within 24 hours.",
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact EKA Balance | Barcelona',
    description:
      'Book a session or ask us anything about integrative somatic therapies in Barcelona. We reply within 24 hours.',
    url: '/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact EKA Balance | Barcelona',
    description:
      'Book a session or ask us anything about integrative somatic therapies in Barcelona. We reply within 24 hours.',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
