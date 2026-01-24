import { Metadata } from 'next';
import ForOfficeWorkersContent from '@/components/ForOfficeWorkersContent';
export const dynamic = 'force-dynamic';


export const metadata: Metadata = {
  title: 'Bienestar en la Oficina | EKA Balance',
  description: 'Ergonomía, gestión del estrés y bienestar para trabajadores de oficina.',
};

export default function OfficeWorkersPage() {
  return <ForOfficeWorkersContent />;
}
