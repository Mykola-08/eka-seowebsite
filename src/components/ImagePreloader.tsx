'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Key images for each route that should be preloaded when user is on adjacent pages
const ROUTE_PRELOAD: Record<string, string[]> = {
  '/': [
    // 360 revision page hero & final section
    'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1920',
    // Services page images
    'https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ],
  '/360-revision': [
    // Home hero images
    'https://images.pexels.com/photos/3760262/pexels-photo-3760262.jpeg?auto=compress&cs=tinysrgb&w=2000',
    'https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=2000',
    // Why360 section images
    'https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=800',
  ],
  '/services': [
    'https://images.pexels.com/photos/3760262/pexels-photo-3760262.jpeg?auto=compress&cs=tinysrgb&w=2000',
    'https://images.pexels.com/photos/4506105/pexels-photo-4506105.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
  ],
};

function preloadImage(src: string) {
  // Use native Image object to warm up the browser cache and Pexels CDN
  const img = new window.Image();
  img.src = src;
}

export default function ImagePreloader() {
  const pathname = usePathname();

  useEffect(() => {
    const images = ROUTE_PRELOAD[pathname] ?? [];
    if (images.length === 0) return;

    const run = () => {
      images.forEach(preloadImage);
    };

    // Only preload once the browser is idle so it doesn't compete with LCP
    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(run, { timeout: 4000 });
      return () => cancelIdleCallback(id);
    } else {
      const id = setTimeout(run, 3000);
      return () => clearTimeout(id);
    }
  }, [pathname]);

  return null;
}
