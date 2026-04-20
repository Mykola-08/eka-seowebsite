import type { Metadata } from 'next';
import seoMetadata from './seo-metadata.json';
import { getServerLocale, SUPPORTED_LOCALES, OG_LOCALE, type Locale } from './i18n';

type FlatLangData = Record<string, string>;
type SEOMetadata = Record<Locale, FlatLangData>;

interface SEOItem {
  title: string;
  description: string;
  keywords: string;
}

const SITE_URL = 'https://ekabalance.com';
const DEFAULT_OG_IMAGE = '/images/eka_logo.png';

function getSeoItem(langData: FlatLangData, section: string): SEOItem {
  return {
    title:
      langData[`seo.${section}.title`] ||
      langData['seo.home.title'] ||
      'EKA Balance',
    description:
      langData[`seo.${section}.description`] ||
      langData['seo.home.description'] ||
      '',
    keywords:
      langData[`seo.${section}.keywords`] ||
      langData['seo.home.keywords'] ||
      '',
  };
}

function pickSeoData(
  metadata: SEOMetadata,
  locale: Locale,
  section: string
): SEOItem {
  const lang = metadata[locale] || {};
  const fallbackEn = metadata.en || {};
  const fallbackCa = metadata.ca || {};

  const primary = getSeoItem(lang, section);
  if (primary.title && primary.description) return primary;

  const en = getSeoItem(fallbackEn, section);
  if (en.title && en.description) return en;

  return getSeoItem(fallbackCa, section);
}

/**
 * Generate locale-aware Next metadata for an App Router page.
 *
 * Locale is resolved server-side from the `x-locale` request header (set by
 * `src/middleware.ts`) with a cookie/default fallback. Returns proper OG +
 * Twitter cards and emits hreflang alternates so search engines understand
 * the multi-language nature of the site.
 */
export async function generateAppMetadata(
  section: string,
  path: string,
  options?: { ogImage?: string }
): Promise<Metadata> {
  const locale = await getServerLocale();
  const metadata = seoMetadata as unknown as SEOMetadata;
  const data = pickSeoData(metadata, locale, section);

  const canonicalUrl = `${SITE_URL}${path || ''}`;
  const ogImage = options?.ogImage || DEFAULT_OG_IMAGE;
  const ogImageUrl = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`;

  // Hreflang alternates. We use cookie-based locale negotiation (no URL
  // prefix), so all alternates resolve to the same canonical path; the
  // x-default points to the same URL too. This is acceptable per Google
  // multi-regional guidelines for content-negotiation setups.
  const languages: Record<string, string> = { 'x-default': canonicalUrl };
  for (const l of SUPPORTED_LOCALES) {
    languages[l] = canonicalUrl;
  }

  return {
    metadataBase: new URL(SITE_URL),
    title: data.title || 'EKA Balance',
    description: data.description || '',
    keywords: data.keywords || '',
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title: data.title || 'EKA Balance',
      description: data.description || '',
      url: canonicalUrl,
      siteName: 'EKA Balance',
      locale: OG_LOCALE[locale],
      alternateLocale: SUPPORTED_LOCALES.filter((l) => l !== locale).map(
        (l) => OG_LOCALE[l]
      ),
      type: 'website',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: data.title || 'EKA Balance',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title || 'EKA Balance',
      description: data.description || '',
      images: [ogImageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  };
}