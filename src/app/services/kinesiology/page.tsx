import { Metadata } from 'next';
import KinesiologiaContent from '@/components/KinesiologyContent';
export const dynamic = 'force-dynamic';


export const metadata: Metadata = {
  title: "Kinesiologia i Reset del Sistema Nerviós | EKA Balance Barcelona",
  description: "Teràpia de Kinesiologia per alliberar traumes somàtics, equilibrar el sistema nerviós, millorar la digestió i recuperar el son.",
  keywords: ["Kinesiologia", "Sistema nerviós", "Reset energètic", "Alliberament emocional", "EKA Balance", "Barcelona", "Recuperació del son", "Problemes digestius"],
  openGraph: {
    title: "Kinesiologia Especialitzada a Barcelona | EKA Balance",
    description: "Allibera traumes profunds i reequilibra la teva energia amb Kinesiologia avançada.",
    type: 'website',
    images: [{ url: '/images/eka_logo.png', width: 1200, height: 630, alt: 'Kinesiologia EKA Balance' }],
  },
};

export default function KinesiologiaPage() {
  return <KinesiologiaContent />;
}
