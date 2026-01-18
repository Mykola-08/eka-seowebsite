import { Metadata } from 'next';
import DiscoveryContent from '@/app/components/DiscoveryContent';
import MainLayout from '@/app/components/MainLayout';

export const metadata: Metadata = {
  title: 'Descobreix el teu servei ideal - EKA Balance',
  description: "Formulari personalitzat per trobar el servei de teràpia holística que millor s'adapti a les teves necessitats específiques.",
};

export default function DiscoveryPage() {
  return (
    <DiscoveryContent />
  );
}
