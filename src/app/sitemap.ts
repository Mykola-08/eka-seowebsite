import type { MetadataRoute } from 'next';

const BASE_URL = 'https://ekabalance.com';
const LOCALES = ['ca', 'en', 'es', 'ru'] as const;

type RouteEntry = {
  path: string;
  changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' | 'always' | 'hourly';
  priority: number;
};

const ROUTES: RouteEntry[] = [
  { path: '', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/about-elena', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/booking', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/cases', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/discovery', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/discounts', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/first-time', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/vip', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/360-revision', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/personalized-services', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/agenyz', changeFrequency: 'weekly', priority: 0.6 },

  // Service detail pages
  { path: '/services/massage', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/kinesiology', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/nutrition', changeFrequency: 'monthly', priority: 0.8 },

  // Audience-specific pages
  { path: '/for-athletes', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/for-business', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/for-musicians', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/for-office-workers', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/for-students', changeFrequency: 'monthly', priority: 0.7 },

  // Service audience pages
  { path: '/services/adults', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/services/children', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/services/families', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/services/athletes', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/services/artists', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/services/musicians', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/services/students', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/services/office-workers', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/services/parents', changeFrequency: 'monthly', priority: 0.6 },

  // Technique
  { path: '/technique', changeFrequency: 'monthly', priority: 0.6 },

  // Legal
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms-of-service', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/cookie-policy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/disclaimer', changeFrequency: 'yearly', priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  return ROUTES.map(({ path, changeFrequency, priority }) => {
    const url = `${BASE_URL}${path}`;
    const languages: Record<string, string> = { 'x-default': url };
    for (const l of LOCALES) {
      languages[l] = url;
    }
    return {
      url,
      lastModified: now,
      changeFrequency,
      priority,
      alternates: { languages },
    };
  });
}