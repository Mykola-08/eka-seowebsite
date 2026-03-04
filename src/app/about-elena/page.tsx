import { Metadata } from 'next';
import AboutElenaContent from '@/components/AboutElenaContent';

export const dynamic = 'force-dynamic';


export const metadata: Metadata = {
  title: "Sobre Elena Kucherova | EKA Balance",
  description: "Descobreix la trajectòria d'Elena Kucherova, especialista en integració somàtica, rehabilitació neuro-motora, kinesiologia i Movement Lesson a Barcelona.",
  keywords: ["Elena Kucherova", "Biografia", "EKA Balance", "Integració Somàtica", "Rehabilitació", "Barcelona", "Terapeuta", "Kinesiòloga"],
  openGraph: {
    title: "Sobre Elena Kucherova | Especialista en Integració Somàtica",
    description: "Especialista en integració somàtica, kinesiologia i Movement Lesson. Descobreix el mètode i la trajectòria d'Elena Kucherova.",
    type: 'profile',
    images: [
        {
          url: '/images/therapist_photo.jpg',
          width: 800,
          height: 800,
          alt: 'Elena Kucherova',
        },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre Elena Kucherova | EKA Balance",
    description: "Especialista en integració somàtica i kinesiologia a Barcelona.",
    images: ["/images/therapist_photo.jpg"],
  }
};

export default function AboutElenaPage() {
  return <AboutElenaContent />;
}
