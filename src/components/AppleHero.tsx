'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnalytics } from '@/hooks/useAnalytics';
import AnimateIn from './AnimateIn';
import { Sparkles } from '@/lib/icons';
import { shimmerBlurDataURL } from '@/lib/image-utils';

// Curated massage therapy visuals — reduced set for faster load times
const heroImages = [
  'https://images.pexels.com/photos/3760262/pexels-photo-3760262.jpeg?auto=compress&cs=tinysrgb&w=2000', // Woman getting a back massage at a spa
  'https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=2000', // Woman lying on bed getting massage, serene spa scene
  'https://images.pexels.com/photos/5240678/pexels-photo-5240678.jpeg?auto=compress&cs=tinysrgb&w=2000', // Back massage in spa salon
  'https://images.pexels.com/photos/3865803/pexels-photo-3865803.jpeg?auto=compress&cs=tinysrgb&w=2000', // Masseuse massaging shoulder and back of client
  'https://images.pexels.com/photos/3760270/pexels-photo-3760270.jpeg?auto=compress&cs=tinysrgb&w=2000', // Woman getting a head massage, serene spa
  'https://images.pexels.com/photos/6628613/pexels-photo-6628613.jpeg?auto=compress&cs=tinysrgb&w=2000', // Woman having a massage on comfortable couch in spa
];

export default function AppleHero() {
  const { t } = useLanguage();
  const { logEvent } = useAnalytics();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Track which image indices have ever been rendered — once in DOM, never unmount
  // This prevents the white-flash blink caused by the outgoing image being removed
  // from the DOM before the incoming image finishes fading in.
  const [mountedIndices, setMountedIndices] = useState<Set<number>>(() => new Set([0, 1]));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => {
        const next = (prev + 1) % heroImages.length;
        const upcoming = (next + 1) % heroImages.length;
        setMountedIndices(s => {
          if (s.has(upcoming)) return s;
          const ns = new Set(s);
          ns.add(upcoming);
          return ns;
        });
        return next;
      });
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-svh md:h-svh bg-background flex flex-col items-center justify-start pt-20 sm:pt-28 md:pt-24 pb-8 sm:pb-10 overflow-hidden">

      {/* Subtle background glows — hidden on mobile to protect performance */}
      <div className="hidden sm:block absolute top-0 left-0 w-full h-125 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-2/5 h-2/5 bg-primary/10 rounded-full blur-3xl mix-blend-multiply" />
        <div className="absolute bottom-[-10%] right-[-10%] w-2/5 h-2/5 bg-primary/5 rounded-full blur-3xl mix-blend-multiply" />
      </div>

      {/* Content Layer - Centered Text */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 text-center mb-6 sm:mb-8 md:mb-6">
        <AnimateIn delay={0} duration={0.3} from="bottom">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-card/60 border border-border/60 backdrop-blur-md mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground tracking-wide">EKA Balance Method</span>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.05} duration={0.3} from="bottom">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05] mb-6 text-foreground">
            {t('hero.title')}
          </h1>
        </AnimateIn>

        <AnimateIn delay={0.1} duration={0.3} from="bottom">
          <p className="text-xl md:text-2xl font-medium text-muted-foreground max-w-2xl mx-auto mb-10 text-balance leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </AnimateIn>

        <AnimateIn delay={0.15} duration={0.3} from="bottom">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary Button */}
            <Button
              asChild
              variant="default"
              size="xl"
              className="px-8 py-6 h-auto w-full sm:w-auto transition-all shadow-none font-medium"
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
              className="px-8 py-6 h-auto w-full sm:w-auto backdrop-blur-md transition-all shadow-none font-medium"
              onClick={() => logEvent('hero_services_click')}
            >
              <Link href="/services">
                {t('hero.discoverServices')}
              </Link>
            </Button>
          </div>
        </AnimateIn>
      </div>

      {/* Image Container - Rounded Apple Style, fills remaining viewport on desktop */}
      <div className="relative w-full max-w-[92%] md:max-w-6xl aspect-[4/3] sm:aspect-video md:aspect-auto md:flex-1 md:min-h-[380px] rounded-apple overflow-hidden mx-auto group shadow-apple-sm border border-border/10">
        {heroImages.map((image, index) => {
          if (!mountedIndices.has(index)) return null;
          return (
            <div
              key={image}
              className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <Image
                src={image}
                alt={`Wellness atmosphere ${index + 1}`}
                fill
                priority={index === 0}
                loading={index === 0 ? 'eager' : 'lazy'}
                placeholder="blur"
                blurDataURL={shimmerBlurDataURL(1200, 800)}
                className={`object-cover transition-transform duration-7500 ease-out ${
                  index === currentImageIndex ? 'scale-105' : 'scale-100'
                }`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                quality={85}
              />
              {/* Gradient Overlay for depth and text contrast */}
              <div className="absolute inset-0 bg-linear-to-t from-foreground/30 via-foreground/10 to-transparent pointer-events-none" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
