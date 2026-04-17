import { Metadata } from 'next';
import { cookies } from 'next/headers';
import seoData from './seo-metadata.json'; // The file we created

export type Language = 'ca' | 'en' | 'es' | 'ru';

export async function getLocale(): Promise<Language> {
  const cookieStore = await cookies();
  const locale = cookieStore.get('NEXT_LOCALE')?.value;
  if (locale === 'ca' || locale === 'es' || locale === 'ru') {
    return locale as Language;
  }
  return 'en';
}

export async function generateAppMetadata(
  pageKey: string,
  path: string
): Promise<Metadata> {
  const lang = await getLocale();
  const data = (seoData as Record<string, any>)[lang] || seoData['en'];

  const title = data[`seo.${pageKey}.title`] || "EKA Balance | Elena Kucherova - Integrative Somatic Therapies in Barcelona";
  const description = data[`seo.${pageKey}.description`] || "Restore your systemic vitality with Elena Kucherova. Specialist in somatic integration, kinesiology, and nervous system regulation in Barcelona. Book your session today.";
  const keywords = data[`seo.${pageKey}.keywords`] || "Elena Kucherova, EKA Balance, somatic therapies Barcelona, kinesiology, integrative wellness";

  return {
    title,
    description,
    keywords: keywords.split(',').map((k: string) => k.trim()),
    openGraph: {
      title,
      description,
      type: 'website',
      images: [
        {
          url: '/images/eka_logo.png',
          width: 800,
          height: 600,
          alt: 'EKA Balance - Integrative Wellness Center',
        },
      ],
      url: `https://ekabalance.com${path}`,
    },
    alternates: {
      canonical: `https://ekabalance.com${path}`,
    }
  };
}