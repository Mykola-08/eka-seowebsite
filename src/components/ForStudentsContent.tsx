'use client';

import { Brain, ArrowRight } from 'lucide-react';
import { useBooking } from '@/hooks/useBooking';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import SEOUpdater from '@/components/SEOUpdater';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';

export default function ForStudentsContent() {
  const { navigateToBooking } = useBooking();
  const { t } = useLanguage();

  const Hero = (
    <section className="py-16 sm:py-24 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100/50 rounded-full mb-8 border border-blue-100">
                <Brain className="w-10 h-10 text-blue-600" />
              </div>
              
              <h1 className="heading-1 mb-6 font-bold text-eka-dark">
                {t('personalized.students.hero.title')}
              </h1>
              
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
                {t('personalized.students.hero.description')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => navigateToBooking()}
                  size="xl"
                  variant="accent"
                >
                  {t('common.bookNow')}
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Link
                  href="/contact"
                >
                    <Button 
                        size="xl" 
                        variant="outline"
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
    <>
      <SEOUpdater
        titleKey="seo.students.title"
        descriptionKey="seo.students.description"
        keywordsKey="seo.students.keywords"
      />
      <PageLayout>
      {Hero}
        {/* Understanding Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-8">
            <div className="card bg-blue-50/50 border-blue-100 p-8 sm:p-12">
              <h2 className="heading-2 mb-6 font-bold text-eka-dark">
                {t('personalized.students.understanding.title')}
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>{t('personalized.students.understanding.description1')}</p>
                <p>{t('personalized.students.understanding.description2')}</p>
                <p className="font-medium text-blue-900">
                  {t('personalized.students.understanding.callToAction')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Services */}
        <section className="py-16 bg-gradient-to-b from-transparent to-blue-50/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4 font-bold text-eka-dark">
                {t('personalized.students.services.title')}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t('personalized.students.services.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Kinesiology Card */}
                <div className="card card-interactive p-8 group">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                        {t('personalized.students.services.kinesiologyStress.title')}
                    </h3>
                    <p className="text-gray-600 mb-6">
                        {t('personalized.students.services.kinesiologyStress.description')}
                    </p>
                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-500">60 min</span>
                        <Link href="/services/kinesiology" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                            {t('common.moreInfo')} <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                    </div>
                </div>

                {/* Relaxing Massage Card */}
                <div className="card card-interactive p-8 group">
                    <h3 className="text-2xl font-light text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                        {t('personalized.students.services.relaxingMassage.title')}
                    </h3>
                    <p className="text-gray-600 mb-6 font-light">
                        {t('personalized.students.services.relaxingMassage.description')}
                    </p>
                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-500">60-90 min</span>
                        <Link href="/services/massage" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                            {t('common.moreInfo')} <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                    </div>
                </div>
            </div>
          </div>
        </section>

        <FAQ />
        <CTASection />
      </PageLayout>
    </>
  );
}
