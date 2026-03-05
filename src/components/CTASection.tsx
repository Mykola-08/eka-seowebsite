'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useBooking } from '@/hooks/useBooking';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ParallaxBackground from '@/components/ParallaxBackground';

export default function CTASection() {
  const { t } = useLanguage();
  const { navigateToBooking } = useBooking();

  return (
    <ParallaxBackground
        src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1920"
        className="py-24 sm:py-32"
        overlayOpacity={0.6}
    >
      <div className="section-container relative z-10 text-center">
        <h2 className="text-4xl sm:text-5xl mb-6 font-semibold text-white tracking-tight text-balance">
          {t('common.readyToStart') || 'Ready to start your journey?'}
        </h2>
        <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          {t('common.bookConsultation') || 'Book a consultation today and take the first step towards better health and wellbeing.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => navigateToBooking()}
            size="xl"
            variant="default"
            className="px-10 py-6 text-lg h-auto bg-white text-black hover:bg-gray-100 border-none"
          >
            {t('common.bookNow')}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Link href="/contact">
            <Button
              size="xl"
              variant="outline"
              className="px-10 py-6 text-lg h-auto text-white border-white hover:bg-white/10"
            >
              {t('common.contactUs') || 'Contact Us'}
            </Button>
          </Link>
        </div>
      </div>
    </ParallaxBackground>
  );
}
