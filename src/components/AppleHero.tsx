'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnalytics } from '@/hooks/useAnalytics';
import AnimateIn from './AnimateIn';
import { Sparkles } from 'lucide-react';

// Premium aesthetic wellness images from Unsplash
const heroImages = [
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2000', // Wellness / Yoga clean aesthetic
  'https://images.unsplash.com/photo-1519824145371-29681b328e2b?auto=format&fit=crop&q=80&w=2000', // Relaxing elements
  'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=2000', // Massage / Spa therapy
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
    <section className="relative w-full min-h-[90vh] bg-[#fdfdfd] flex flex-col items-center justify-start pt-32 pb-16 overflow-hidden">
      
      {/* Subtle background glows for depth */}
      <div className="absolute top-0 left-0 w-full h-[500px] overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[100px] mix-blend-multiply" />
        <div className="absolute top-[10%] right-[-5%] w-[30%] h-[30%] bg-purple-100/40 rounded-full blur-[80px] mix-blend-multiply" />
      </div>

      {/* Content Layer - Centered Text */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 text-center mb-12 sm:mb-16">
        <AnimateIn delay={0.1} duration={0.8} from="bottom">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/60 border border-gray-200/60 shadow-sm backdrop-blur-md mb-8">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-800 tracking-wide">EKA Balance Method</span>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.2} duration={0.8} from="bottom">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05] mb-6 text-gray-900 drop-shadow-sm">
            {t('hero.title')}
          </h1>
        </AnimateIn>

        <AnimateIn delay={0.3} duration={0.8} from="bottom">
          <p className="text-xl md:text-2xl font-medium text-gray-500 max-w-2xl mx-auto mb-10 text-balance leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </AnimateIn>

        <AnimateIn delay={0.4} duration={0.8} from="bottom">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary Button */}
            <Button
              asChild
              variant="default"
              size="xl"
              className="px-8 py-6 text-lg h-auto rounded-full w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => logEvent('hero_first_time_click')}
            >
              <Link href="/first-time">
                {t('hero.firstTime')}
              </Link>
            </Button>

            {/* Secondary Button */}
            <Button
              asChild
              variant="outline"
              size="xl"
              className="px-8 py-6 text-lg h-auto rounded-full w-full sm:w-auto backdrop-blur-md bg-white/50 border-gray-300 hover:bg-white/80 transition-all duration-300"
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
      <div className="relative w-full max-w-[90%] md:max-w-6xl aspect-video md:aspect-[21/9] rounded-[32px] md:rounded-[48px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] mx-auto group">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
              index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={image}
              alt={`Wellness atmosphere ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover transition-transform duration-[20s] ease-linear scale-100 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
            {/* Subtle Gradient Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
}