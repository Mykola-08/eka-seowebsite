import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CaseDetailContent from './CaseDetailContent';

const caseSlugs: Record<string, { title: string; description: string }> = {
  'back-pain': { title: 'Back Pain Relief', description: 'Effective integrative approach for back pain relief using massage and somatic techniques.' },
  'stress-anxiety': { title: 'Stress & Anxiety Relief', description: 'Holistic kinesiology and somatic work for managing stress and anxiety.' },
  'digestive-problems': { title: 'Digestive Health Solutions', description: 'Nutritional wellness and kinesiology for digestive health.' },
  'migraines': { title: 'Migraine Relief Support', description: 'Holistic massage and integrative approaches for migraine relief.' },
  'low-energy': { title: 'Energy Restoration', description: 'Kinesiology-based support to restore natural energy levels.' },
  'hormonal-problems': { title: 'Hormonal Balance Support', description: 'Integrative kinesiology for hormonal health and balance.' },
  'sleep-difficulties': { title: 'Sleep Improvement Support', description: 'Somatic and kinesiology practices for better sleep quality.' },
  'injury-recovery': { title: 'Injury Recovery', description: 'Holistic bodywork for accelerated injury recovery.' },
};

export async function generateStaticParams() {
  return Object.keys(caseSlugs).map((id) => ({ id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const caseInfo = caseSlugs[id];
  if (!caseInfo) return { title: 'Case Not Found | EKA Balance' };

  return {
    title: `${caseInfo.title} | EKA Balance`,
    description: caseInfo.description,
    openGraph: {
      title: `${caseInfo.title} | EKA Balance`,
      description: caseInfo.description,
      type: 'article',
    },
  };
}

export default async function CasoDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!caseSlugs[id]) return notFound();

  return <CaseDetailContent id={id} />;
}
