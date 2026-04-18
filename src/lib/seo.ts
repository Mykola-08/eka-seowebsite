import { Metadata } from 'next';
import seoMetadata from './seo-metadata.json';

interface SEOItem {
    title: string;
    description: string;
    keywords: string;
}

interface SEOLang {
    [key: string]: SEOItem;
}

interface SEOMetadata {
    en: SEOLang;
    es: SEOLang;
    ca: SEOLang;
    ru: SEOLang;
}

export function generateAppMetadata(section: string, path: string): Metadata {
  const metadata = seoMetadata as unknown as SEOMetadata;
  const langData = metadata.en || {};
  
  // Fallback chain: section -> home -> empty strings
  const data = langData[section] || langData['home'] || {
      title: 'EKA Balance',
      description: 'Professional wellness practices in Barcelona',
      keywords: 'wellness, barcelona'
  };
  
  return {
    title: data.title || 'EKA Balance',
    description: data.description || '',
    keywords: data.keywords || '',
    alternates: {
      canonical: `https://ekabalance.com${path}`,
    },
    openGraph: {
      title: data.title || 'EKA Balance',
      description: data.description || '',
      url: `https://ekabalance.com${path}`,
      siteName: 'EKA Balance',
      locale: 'ca_ES',
      type: 'website',
    },
  };
}
