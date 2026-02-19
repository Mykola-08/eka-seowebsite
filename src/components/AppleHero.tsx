'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnalytics } from '@/hooks/useAnalytics';
import AnimateIn from './AnimateIn';

const heroImages = [
  'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=1920', // Barcelona Skyline
  'https://images.pexels.com/photos/10521232/pexels-photo-10521232.jpeg?auto=compress&cs=tinysrgb&w=1920', // Wellness Bed / Spa Room
  'https://images.pexels.com/photos/6628817/pexels-photo-6628817.jpeg?auto=compress&cs=tinysrgb&w=1920', // Women talking in massage room (Candid)
  'https://images.pexels.com/photos/7176059/pexels-photo-7176059.jpeg?auto=compress&cs=tinysrgb&w=1920', // Consultation with notes (Candid)
];

export default function AppleHero() {
  const { t } = useLanguage();
  const { logEvent } = useAnalytics();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % heroImages.length);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-section-full">
      {/* Background Image with smooth transitions */}
      <div className="absolute inset-0 transition-opacity duration-1000">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      {/* Overlay for text readability */}
      <div className="bg-overlay-dark" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-5 sm:px-6 max-w-6xl mx-auto py-16 sm:py-0">
        {/* Badge - Glassy Style */}
        <AnimateIn delay={0.2} from="top">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6 sm:mb-8 animate-fade-in">
            <span className="text-sm md:text-base font-medium tracking-wide text-white/90">
              {t('hero.badge')}
            </span>
          </div>
        </AnimateIn>

        {/* Main Title */}
        <AnimateIn delay={0.4} duration={0.8}>
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-4 sm:mb-6 md:mb-8 font-bold tracking-tight drop-shadow-2xl leading-[1.1]">
            {t('hero.title')}
          </h1>
        </AnimateIn>

        {/* Subtitle */}
        <AnimateIn delay={0.6}>
          <p className="apple-subtitle text-white/90 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto text-balance text-base sm:text-lg md:text-xl">
            {t('hero.subtitle')}
          </p>
        </AnimateIn>

        {/* CTA Buttons */}
        <AnimateIn delay={0.8}>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link href="/first-time" className="group w-full sm:w-auto" onClick={() => logEvent('hero_first_time_click')}>
              <Button size="xl" className="w-full sm:w-auto shadow-lg hover:shadow-xl text-base sm:text-lg">
                {t('hero.firstTime')}
              </Button>
            </Link>

            <Link href="/services" className="group w-full sm:w-auto" onClick={() => logEvent('hero_services_click')}>
              <Button variant="accent" size="xl" className="w-full sm:w-auto shadow-lg hover:shadow-xl font-medium text-base sm:text-lg">
                {t('hero.discoverServices')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
