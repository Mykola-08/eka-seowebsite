'use client';

import { ArrowRight } from 'lucide-react';
import { useBooking } from '@/react-app/hooks/useBooking';
import { useLanguage } from '@/react-app/contexts/LanguageContext';
import Link from 'next/link';
import PageLayout from '@/app/components/PageLayout';
import { Button } from 'keep-react';

export default function ForParentsContent() {
  const { navigateToBooking } = useBooking();
  const { t } = useLanguage();

  const Hero = (
    <section className="py-16 sm:py-24 relative overflow-hidden">
        {/* Grid background handled by PageLayout, but we can override or add to it.
            For Parents page had a side-by-side layout in Hero. I'll maintain that structure inside the Hero component 
            but using PageLayout's wrapper might constrain it.
            Wait, PageLayout centers content. 
            The previous Parents page had:
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            I will replicate this inside the Hero prop function.
        */}
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center px-4 py-2 bg-pink-100 rounded-full mb-6">
                  <span className="text-pink-700 font-medium text-sm">{t('nav.personalizedServices')}</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
                  {t('personalized.parents.hero.title')}
                </h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                  {t('personalized.parents.hero.description')}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => navigateToBooking()}
                    size="xl"
                    className="btn btn-primary bg-[#FFB405] hover:bg-[#e8a204] text-[#000035]"
                  >
                    {t('common.bookNow')}
                  </Button>
                   <Link
                    href="/contact"
                  >
                    <Button
                        size="xl"
                        className="btn btn-outline border-pink-100 text-pink-600 hover:bg-pink-50 hover:border-pink-200"
                    >
                        {t('common.askQuestions')}
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=1920&h=1080&fit=crop"
                    alt={t('personalized.parents.hero.title')}
                    className="w-full h-[400px] sm:h-[500px] object-cover rounded-[2.5rem] shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
  );

  return (
    <PageLayout>
      {Hero}
        {/* Understanding Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-8">
            <div className="card bg-pink-50/50 border-pink-100 p-8 sm:p-12">
              <h2 className="heading-2 mb-6">
                {t('personalized.parents.understanding.title')}
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg font-light">
                <p>{t('personalized.parents.understanding.description1')}</p>
                <p>{t('personalized.parents.understanding.description2')}</p>
                <p className="font-medium text-pink-900">
                  {t('personalized.parents.understanding.callToAction')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Services */}
        <section className="py-16">
            {/* The parents page didn't have the services grid in the read content I saw? 
                Checking read_file content again... 
                Ah, I stopped reading at line 100 on parents page. But I see `const recommendedServices` defined at the top.
                I assume the code follows the same pattern below line 100.
                I will reconstruct it based on the `recommendedServices` array I saw.
            */}
          <div className="max-w-6xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">
                 {/* I need to guess the title key or use generic. 
                     Checking for-office-workers: t('personalized.officeWorkers.services.title')
                     So here it's likely personalized.parents.services.title
                 */}
                {t('personalized.parents.services.title') || "Servicios Recomendados"}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
                {t('personalized.parents.services.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Emotional Kinesiology */}
                <div className="card p-8 group hover:border-pink-200 transition-colors">
                    <h3 className="text-2xl font-light text-gray-900 mb-4 group-hover:text-pink-700 transition-colors">
                        {t('personalized.parents.services.emotionalKinesiology.title')}
                    </h3>
                    <p className="text-gray-600 mb-6 font-light">
                        {t('personalized.parents.services.emotionalKinesiology.description')}
                    </p>
                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-500">60-90 min</span>
                        <Link href="/services/kinesiology" className="text-pink-600 font-medium hover:text-pink-800 flex items-center">
                            {t('common.moreInfo')} <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                    </div>
                </div>

                {/* Relaxing Massage */}
                <div className="card p-8 group hover:border-pink-200 transition-colors">
                    <h3 className="text-2xl font-light text-gray-900 mb-4 group-hover:text-pink-700 transition-colors">
                        {t('personalized.parents.services.relaxingMassage.title')}
                    </h3>
                    <p className="text-gray-600 mb-6 font-light">
                        {t('personalized.parents.services.relaxingMassage.description')}
                    </p>
                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-500">60-90 min</span>
                        <Link href="/services/massage" className="text-pink-600 font-medium hover:text-pink-800 flex items-center">
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
