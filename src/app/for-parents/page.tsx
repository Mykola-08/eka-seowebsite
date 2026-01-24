import { Metadata } from 'next';
import ForParentsContent from '@/components/ForParentsContent';

export const dynamic = 'force-dynamic';


export const metadata: Metadata = {
  title: 'Bienestar para Madres y Padres | EKA Balance',
  description: 'Apoyo para el estrés, ansiedad y bienestar emocional en la crianza.',
};

export default function ParentsPage() {
  return <ForParentsContent />;
}
