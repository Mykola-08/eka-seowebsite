import { Metadata } from 'next';
import ForOfficeWorkersContent from '@/app/components/ForOfficeWorkersContent';

export const metadata: Metadata = {
  title: 'Bienestar para Oficinistas | EKA Balance',
  description: 'Soluciones personalizadas para aliviar el dolor de espalda, reducir el estrés y mejorar la postura en el trabajo.',
};

export default function OfficeWorkersPage() {
  return <ForOfficeWorkersContent />;
}
