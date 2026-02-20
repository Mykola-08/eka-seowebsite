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
import { PERSONALIZED_SERVICES_DATA } from '@/shared/constants';

export default function ForStudentsContent() {
  const { navigateToBooking } = useBooking();
  const { t } = useLanguage();
  const serviceData = PERSONALIZED_SERVICES_DATA.find(s => s.id === 'students');


  return (
    <>
      <SEOUpdater
        titleKey="seo.students.title"
        descriptionKey="seo.students.description"
        keywordsKey="seo.students.keywords"
      />
      <PageLayout
        hero={{
          title: t('personalized.students.hero.title'),
          subtitle: t('personalized.students.hero.description'),
          badge: t('personalizedServices.title'),
          icon: <Brain className="w-4 h-4" />,
          backgroundImage: serviceData?.image,
          themeColor: serviceData?.color || 'green'
        }}
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center -mt-8 mb-16 relative z-20">
            <Button
                onClick={() => navigateToBooking()}
                size="xl"
                variant="apple"
                className="shadow-xl"
            >
                {t('common.bookNow')}
                <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Link href="/contact">
                <Button 
                    size="xl" 
                    variant="outline"
                    className="bg-white/90 backdrop-blur-sm text-gray-800 border-gray-200 hover:bg-white"
                >
                    {t('common.askQuestions')}
                </Button>
            </Link>
        </div>

        {/* Understanding Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-8">
            <div className="bg-blue-50/50 border border-blue-100 rounded-[2rem] shadow-sm p-8 sm:p-12 transition-all duration-500 ease-out">
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
                <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 p-8 group">
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
                <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 p-8 group">
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
