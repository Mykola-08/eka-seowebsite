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
    <section className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-50" />
      <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10 text-center">
        <h2 className="heading-2 mb-6 font-bold text-eka-dark">
          {t('common.readyToStart') || 'Ready to start your journey?'}
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          {t('common.bookConsultation') || 'Book a consultation today and take the first step towards better health and wellbeing.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => navigateToBooking()}
            size="xl"
            className="btn btn-primary"
          >
            {t('common.bookNow')}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Link href="/contact">
            <Button 
              size="xl" 
              className="btn btn-outline bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
            >
              {t('common.contactUs') || 'Contact Us'}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
