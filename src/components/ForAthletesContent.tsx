'use client';

import { Zap, ArrowRight } from 'lucide-react';
import { useBooking } from '@/hooks/useBooking';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import { Button } from 'keep-react';

export default function ForAthletesContent() {
  const { navigateToBooking } = useBooking();
  const { t } = useLanguage();

  const Hero = (
    <section className="py-16 sm:py-24 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100/50 rounded-full mb-8 border border-orange-100">
                <Zap className="w-10 h-10 text-orange-600" />
              </div>
              
              <h1 className="heading-1 mb-6 font-bold text-eka-dark">
                {t('personalized.athletes.hero.title')}
              </h1>
              
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
                {t('personalized.athletes.hero.description')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => navigateToBooking()}
                  size="xl"
                  className="btn btn-accent"
                >
                  {t('common.bookNow')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Link
                  href="/contact"
                >
                    <Button 
                        size="xl" 
                        className="btn btn-outline bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                    >
                         {t('common.askQuestions')}
                    </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
  );

  return (
    <PageLayout hero={Hero}>
        {/* Understanding Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-8">
            <div className="card bg-orange-50/50 border-orange-100 p-8 sm:p-12">
              <h2 className="heading-2 mb-6 font-bold text-eka-dark">
                {t('personalized.athletes.understanding.title')}
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>{t('personalized.athletes.understanding.description1')}</p>
                <p>{t('personalized.athletes.understanding.description2')}</p>
                <p className="font-medium text-orange-900">
                  {t('personalized.athletes.understanding.callToAction')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Services */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4 font-bold text-eka-dark">
                {t('personalized.athletes.services.title')}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t('personalized.athletes.services.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                 {/* Sports Massage Card */}
                 <div className="card card-interactive p-8 group">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-700 transition-colors">
                         {t('personalized.athletes.services.sportsMassage.title')}
                    </h3>
                    <p className="text-gray-600 mb-6">
                        {t('personalized.athletes.services.sportsMassage.description')}
                    </p>
                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-500">60-90 min</span>
                        <Link href="/services/massage" className="text-orange-600 font-medium hover:text-orange-800 flex items-center">
                            {t('common.moreInfo')} <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                    </div>
                </div>

                {/* Osteobalance Card */}
                <div className="card card-interactive p-8 group">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-700 transition-colors">
                        {t('personalized.athletes.services.osteobalance.title')}
                    </h3>
                    <p className="text-gray-600 mb-6">
                        {t('personalized.athletes.services.osteobalance.description')}
                    </p>
                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-500">60-90 min</span>
                        <Link href="/services/osteobalance" className="text-orange-600 font-medium hover:text-orange-800 flex items-center">
                            {t('common.moreInfo')} <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                    </div>
                </div>
            </div>
          </div>
        </section>
    </PageLayout>
  );
}

