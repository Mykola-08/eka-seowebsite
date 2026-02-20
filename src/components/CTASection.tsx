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
    <section className="py-24 sm:py-32 relative overflow-hidden bg-white">
      <div className="section-container relative z-10 text-center">
        <h2 className="text-4xl sm:text-5xl mb-6 font-semibold text-gray-900 tracking-tight text-balance">
          {t('common.readyToStart') || 'Ready to start your journey?'}
        </h2>
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto font-normal leading-relaxed">
          {t('common.bookConsultation') || 'Book a consultation today and take the first step towards better health and wellbeing.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => navigateToBooking()}
            size="xl"
            variant="primary"
            className="px-8 py-4 shadow-sm"
          >
            {t('common.bookNow')}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Link href="/contact">
            <Button
              size="xl"
              variant="outline"
              className="px-8 py-4"
            >
              {t('common.contactUs') || 'Contact Us'}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
