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
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[1080px] bg-black overflow-hidden flex flex-col justify-end pb-16 md:pb-24">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
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
              className="object-cover opacity-70" // Slightly darkened for text contrast without heavy overlay
              sizes="100vw"
            />
            {/* Subtle Gradient Overlay for Text Readability - Bottom Up */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Content Layer - Floating above */}
      <div className="relative z-20 w-full max-w-[1024px] mx-auto px-6 text-center text-white">
        <AnimateIn delay={0.1} duration={0.8} from="bottom">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05] mb-6 drop-shadow-sm">
            {t('hero.title')}
          </h1>
        </AnimateIn>

        <AnimateIn delay={0.3} duration={0.8} from="bottom">
          <p className="text-xl md:text-2xl font-medium text-gray-100 max-w-2xl mx-auto mb-10 text-balance drop-shadow-sm leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </AnimateIn>

        <AnimateIn delay={0.5} duration={0.8} from="bottom">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/first-time" onClick={() => logEvent('hero_first_time_click')}>
              <Button size="xl" className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-6 h-auto rounded-full border-0 active:scale-[0.97] transition-all">
                {t('hero.firstTime')}
              </Button>
            </Link>

            <Link href="/services" onClick={() => logEvent('hero_services_click')}>
              <Button size="xl" className="bg-transparent text-white border border-white hover:bg-white/10 text-lg px-8 py-6 h-auto rounded-full active:scale-[0.97] transition-all">
                {t('hero.discoverServices')}
              </Button>
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
