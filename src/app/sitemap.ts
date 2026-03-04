import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ekabalance.com';

  // Static routes
  const routes = [
    '',
    '/about-elena',
    '/services',
    '/cases',
    '/360-revision',
    '/vip',
    '/booking',
    '/contact',
    '/personalized-services',
    '/first-time',
    '/discovery',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Specific Services routes
  const services = [
    '/services/kinesiology',
    '/services/massage',
    '/services/nutrition',
    '/services/adults',
    '/services/artists',
    '/services/athletes',
    '/services/children',
    '/services/families',
    '/services/musicians',
    '/services/office-workers',
    '/services/parents',
    '/services/students'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Cases routes
  const cases = [
    '/cases/back-pain',
    '/cases/stress-anxiety',
    '/cases/digestive-problems',
    '/cases/migraines',
    '/cases/low-energy',
    '/cases/hormonal-problems',
    '/cases/sleep-difficulties',
    '/cases/injury-recovery',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...services, ...cases];
}
