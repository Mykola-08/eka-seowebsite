import { Metadata } from 'next';
import TechniqueDetailContent from '@/app/components/TechniqueDetailContent';
import MainLayout from '@/app/components/MainLayout';

const techniqueMap: Record<string, string> = {
  'myofascial': 'Detailed technique description',
  'kinesio': 'Kinesiology and movement',
  'reflexology': 'Reflexology points',
  'lymphatic': 'Lymphatic drainage',
  'craniosacral': 'Craniosacral therapy',
  'acupressure': 'Acupressure points'
};

export async function generateStaticParams() {
  return Object.keys(techniqueMap).map((id) => ({
    id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = params.id;
  // Note: True localization for metadata requires server-side translation logic or mapped static strings.
  // For now using a generic title format.
  return {
    title: `Technique: ${id.charAt(0).toUpperCase() + id.slice(1)} | EKA Balance`,
    description: `Learn more about our ${id} technique and its benefits.`,
  };
}

export default function TechniquePage({ params }: { params: { id: string } }) {
  return (
    <TechniqueDetailContent id={params.id} />
  );
}
