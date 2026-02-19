'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useBooking } from '@/hooks/useBooking';
import { Button } from 'keep-react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  const { t } = useLanguage();
  const { navigateToBooking } = useBooking();

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
      <div className="section-container relative z-10 text-center">
        <h2 className="text-4xl sm:text-5xl mb-6 font-semibold text-gray-900 tracking-tight text-balance">
          {t('common.readyToStart') || 'Ready to start your journey?'}
        </h2>
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          {t('common.bookConsultation') || 'Book a consultation today and take the first step towards better health and wellbeing.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => navigateToBooking()}
            size="xl"
            className="rounded-full px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 shadow-lg shadow-gray-200 transition-all hover:scale-105"
          >
            {t('common.bookNow')}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Link href="/contact">
            <Button 
              size="xl" 
              className="rounded-full px-8 py-4 bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 shadow-sm"
            >
              {t('common.contactUs') || 'Contact Us'}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
