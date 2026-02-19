'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useBooking } from '@/hooks/useBooking';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  const { t } = useLanguage();
  const { navigateToBooking } = useBooking();

  return (
    <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
      <div className="section-container relative z-10 text-center px-5 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 font-semibold text-gray-900 tracking-tight text-balance">
          {t('common.readyToStart') || 'Ready to start your journey?'}
        </h2>
        <p className="text-base sm:text-lg text-gray-500 mb-8 sm:mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          {t('common.bookConsultation') || 'Book a consultation today and take the first step towards better health and wellbeing.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Button
            onClick={() => navigateToBooking()}
            size="xl"
            className="w-full sm:w-auto"
          >
            {t('common.bookNow')}
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button variant="secondary" size="xl" className="w-full">
              {t('common.contactUs') || 'Contact Us'}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
