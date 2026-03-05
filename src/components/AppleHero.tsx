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
  'https://images.pexels.com/photos/3820288/pexels-photo-3820288.jpeg?auto=compress&cs=tinysrgb&w=1920', // Minimalist wellness
];

export default function AppleHero() {
  const { t } = useLanguage();
  const { logEvent } = useAnalytics();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] bg-secondary flex flex-col items-center justify-start pt-32 pb-16 overflow-hidden">

      {/* Content Layer - Centered Text */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 text-center mb-12 sm:mb-16">
        <AnimateIn delay={0.1} duration={0.8} from="bottom">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05] mb-6 text-gray-900 drop-shadow-sm">
            {t('hero.title')}
          </h1>
        </AnimateIn>

        <AnimateIn delay={0.3} duration={0.8} from="bottom">
          <p className="text-xl md:text-2xl font-medium text-gray-600 max-w-2xl mx-auto mb-10 text-balance leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </AnimateIn>

        <AnimateIn delay={0.5} duration={0.8} from="bottom">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary Button: Apple Blue */}
            <Button
              asChild
              variant="default"
              size="xl"
              className="px-8 py-6 text-lg h-auto rounded-full w-full sm:w-auto"
              onClick={() => logEvent('hero_first_time_click')}
            >
              <Link href="/first-time">
                {t('hero.firstTime')}
              </Link>
            </Button>

            {/* Secondary Button: Outline (Blue Border/Text) */}
            <Button
              asChild
              variant="outline"
              size="xl"
              className="px-8 py-6 text-lg h-auto rounded-full w-full sm:w-auto backdrop-blur-sm bg-transparent"
              onClick={() => logEvent('hero_services_click')}
            >
              <Link href="/services">
                {t('hero.discoverServices')}
              </Link>
            </Button>
          </div>
        </AnimateIn>
      </div>

      {/* Image Container - Rounded Apple Style */}
      <div className="relative w-full max-w-[90%] md:max-w-6xl aspect-video md:aspect-[21/9] rounded-[32px] md:rounded-[48px] overflow-hidden shadow-2xl mx-auto">
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
            {/* Subtle Gradient Overlay for Text Readability if needed, mostly for image depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
}
