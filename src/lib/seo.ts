import { Metadata } from 'next';
import seoMetadata from './seo-metadata.json';

type Language = 'en' | 'es' | 'ca' | 'ru';
type FlatLangData = Record<string, string>;
type SEOMetadata = Record<Language, FlatLangData>;

const SITE = 'https://ekabalance.com';

function getItem(langData: FlatLangData, section: string) {
  return {
    title: langData[`seo.${section}.title`] || langData['seo.home.title'] || 'EKA Balance',
    description: langData[`seo.${section}.description`] || langData['seo.home.description'] || '',
    keywords: langData[`seo.${section}.keywords`] || langData['seo.home.keywords'] || '',
  };
}

export function generateAppMetadata(section: string, path: string, lang: Language = 'es'): Metadata {
  const metadata = seoMetadata as unknown as SEOMetadata;
  // Prefer requested language, fall back to Spanish, then English
  const langData: FlatLangData =
    metadata[lang] || metadata.es || metadata.en || {};
  const data = getItem(langData, section);

  const canonicalUrl = `${SITE}${path}`;

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'es': canonicalUrl,
        'ca': canonicalUrl,
        'en': canonicalUrl,
        'ru': canonicalUrl,
        'x-default': canonicalUrl,
      },
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: canonicalUrl,
      siteName: 'EKA Balance',
      locale: lang === 'ca' ? 'ca_ES' : lang === 'ru' ? 'ru_RU' : lang === 'en' ? 'en_GB' : 'es_ES',
      type: 'website',
      images: [
        {
          url: `${SITE}/images/og-default.jpg`,
          width: 1200,
          height: 630,
          alt: 'EKA Balance – Holistic Wellness Barcelona',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description: data.description,
      images: [`${SITE}/images/og-default.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}
