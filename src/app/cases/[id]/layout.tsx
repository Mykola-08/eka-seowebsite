import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = params.id;

  const titles: Record<string, string> = {
    'back-pain': "Tractament de Dolor d'esquena",
    'stress-anxiety': "Alleujament de l'Estrès i Ansietat",
    'digestive-problems': 'Solucions per a Problemes Digestius',
    'migraines': 'Tractament Natural per a Migranyes',
    'low-energy': "Recuperació d'Energia Vital",
    'hormonal-problems': 'Equilibri Hormonal Natural',
    'sleep-difficulties': 'Millora la Qualitat del Son',
    'injury-recovery': 'Recuperació de Lesions i Traumes'
  };

  const title = titles[id] ? `${titles[id]} | EKA Balance Barcelona` : 'Casos Clínics | EKA Balance';
  const description = titles[id]
    ? `Descobreix com tractem ${titles[id].toLowerCase()} mitjançant teràpies integratives, kinesiologia i Movement Lesson a EKA Balance Barcelona.`
    : 'Casos i tractaments a EKA Balance.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      images: ['/images/eka_logo.png'],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/eka_logo.png"],
    }
  };
}

export default function CaseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
