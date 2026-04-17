import { Metadata } from 'next';
import AboutElenaContent from '@/components/AboutElenaContent';


export const metadata: Metadata = {
  title: "About Elena Kucherova | EKA Balance Barcelona",
  description: "Meet Elena Kucherova, certified integrative therapist specializing in somatic integration, kinesiology, and nervous system regulation in Barcelona.",
  keywords: ["Elena Kucherova", "integrative therapist Barcelona", "somatic specialist", "kinesiology expert", "EKA Balance founder"],
  openGraph: {
    title: "About Elena Kucherova | EKA Balance",
    description: "Meet Elena Kucherova, certified integrative therapist specializing in somatic integration and kinesiology in Barcelona.",
    type: 'profile',
    images: [
        {
          url: 'https://5tghbndjb61dnqaj.public.blob.vercel-storage.com/therapist_photo.jpg',
          width: 800,
          height: 800,
          alt: 'Elena Kucherova - Integrative Therapist',
        },
    ],
  },
  alternates: {
    canonical: 'https://ekabalance.com/about-elena',
  }
};

export default function AboutElenaPage() {
  return <AboutElenaContent />;
}
