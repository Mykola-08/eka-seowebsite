'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useBooking } from '@/hooks/useBooking';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import { Button } from 'keep-react';
import SEOUpdater from '@/components/SEOUpdater';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';

export default function ForParentsContent() {
  const { navigateToBooking } = useBooking();
  const { t } = useLanguage();

  const Hero = (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center px-4 py-2 bg-pink-100 rounded-full mb-6">
              <span className="text-pink-700 font-medium text-sm">{t('nav.personalizedServices')}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-eka-dark mb-6 leading-tight">
              {t('personalized.parents.hero.title')}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t('personalized.parents.hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => navigateToBooking()}
                size="xl"
                className="btn btn-accent"
              >
                {t('common.bookNow')}
              </Button>
              <Link href="/contact">
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
            <div className="relative w-full h-[400px] sm:h-[500px] rounded-apple-xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=1920&h=1080&fit=crop"
                alt={t('personalized.parents.hero.title')}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <>
      <SEOUpdater
        titleKey="seo.parents.title"
        descriptionKey="seo.parents.description"
        keywordsKey="seo.parents.keywords"
      />
      <PageLayout hero={Hero}>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="card bg-pink-50/50 border-pink-100 p-8 sm:p-12">
            <h2 className="heading-2 mb-6 font-bold text-eka-dark">
              {t('personalized.parents.understanding.title')}
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>{t('personalized.parents.understanding.description1')}</p>
              <p>{t('personalized.parents.understanding.description2')}</p>
              <p className="font-medium text-pink-900">
                {t('personalized.parents.understanding.callToAction')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-transparent to-pink-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">
              {t('personalized.parents.services.title') || 'Recommended Services'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              {t('personalized.parents.services.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card card-interactive p-8 group">
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

            <div className="card card-interactive p-8 group">
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
                </div>
            </div>
          </div>
        </section>

        <FAQ />
        <CTASection />
    </>
  );
}
