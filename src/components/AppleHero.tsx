'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnalytics } from '@/hooks/useAnalytics';
import AnimateIn from './AnimateIn';

// High-quality, clean, therapeutic images
const heroImages = [
  'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1920', // Clean massage/therapy setup
  'https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=1920', // Relaxing atmosphere
  'https://images.pexels.com/photos/3820288/pexels-photo-3820288.jpeg?auto=compress&cs=tinysrgb&w=1920', // Minimalist wellness
];

export default function AppleHero() {
  const { t } = useLanguage();
  const { logEvent } = useAnalytics();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % heroImages.length);
    }, 5000); // Faster rotation for engagement
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-[#f5f5f7] pt-20 pb-12 md:pt-32 md:pb-24 overflow-hidden">
      <div className="apple-container flex flex-col items-center text-center px-6">

        {/* Main Content Area */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16 z-10">
          <AnimateIn delay={0.1} duration={0.6}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-gray-900 tracking-tight leading-[1.1] mb-6">
              {t('hero.title')}
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.2} duration={0.6}>
            <p className="text-xl md:text-2xl text-gray-500 font-normal leading-relaxed max-w-2xl mx-auto mb-8 md:mb-10 text-balance">
              {t('hero.subtitle')}
            </p>
          </AnimateIn>

          <AnimateIn delay={0.3} duration={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/first-time" onClick={() => logEvent('hero_first_time_click')}>
                <Button size="xl" variant="primary" className="text-lg px-8 py-6 h-auto">
                  {t('hero.firstTime')}
                </Button>
              </Link>

              <Link href="/services" onClick={() => logEvent('hero_services_click')}>
                <Button size="xl" variant="secondary" className="text-lg px-8 py-6 h-auto">
                  {t('hero.discoverServices')}
                </Button>
              </Link>
            </div>
          </AnimateIn>
        </div>

        {/* Hero Image Slider Container */}
        <AnimateIn delay={0.4} duration={0.8} className="w-full max-w-[1200px] mx-auto">
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[24px] md:rounded-[40px] overflow-hidden shadow-sm bg-white">
            {heroImages.map((image, index) => (
              <div
                key={image}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <Image
                  src={image}
                  alt={`Wellness atmosphere ${index + 1}`}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                />
              </div>
            ))}
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
