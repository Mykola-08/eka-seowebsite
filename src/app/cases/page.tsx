import { Metadata } from 'next';
import CasosContent from '@/components/CasosContent';

export const dynamic = 'force-dynamic';


export const metadata: Metadata = {
    title: 'Casos Freqüents i Tractaments | EKA Balance',
    description: "Descobreix com ajudem a resoldre problemes comuns com dolor d'esquena, estrès, ansietat, migranyes, problemes digestius i més amb teràpies integratives.",
    keywords: ["Dolor d'esquena", "Estrès", "Ansietat", "Migranyes", "Problemes digestius", "Tractaments", "Casos d'èxit", "EKA Balance"],
    openGraph: {
        title: 'Casos Freqüents resolts amb Teràpies Integratives | EKA Balance',
        description: "Descobreix com ajudem a resoldre problemes comuns d'estrès, dolors i salut amb les nostres teràpies.",
        type: 'website',
        images: [
          {
            url: '/images/eka_logo.png',
            width: 1200,
            height: 630,
            alt: 'Casos Freqüents EKA Balance',
          },
        ],
    },
};

export default function CasosPage() {
  return <CasosContent />;
}
