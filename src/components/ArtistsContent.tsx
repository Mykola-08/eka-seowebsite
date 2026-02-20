'use client';

import { Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import SEOUpdater from '@/components/SEOUpdater';

export default function ArtistsContent() {
  const { t } = useLanguage();

  const Hero = (
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
                <span className="text-blue-700 font-medium text-sm">{t('nav.personalizedServices')}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-eka-dark mb-6 leading-tight">
                {t('nav.artists')}
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t('artists.hero.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking">
                    <Button size="xl" variant="accent">
                      {t('common.reserveSession')}
                    </Button>
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative w-full h-[400px] sm:h-[500px] rounded-apple-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1599447421405-0c325d26d77e?w=1920&h=1080&fit=crop"
                  alt={t('nav.artists')}
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
        titleKey="seo.artists.title"
        descriptionKey="seo.artists.description"
        keywordsKey="seo.artists.keywords"
      />
      <PageLayout>
      {Hero}

      {/* Problems & Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Problems */}
            <div>
              <h2 className="text-3xl font-bold text-eka-dark mb-8">
                {t('artists.challenges.title')}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start bg-red-50 p-6 rounded-2xl">
                  <AlertCircle className="w-6 h-6 text-red-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t('artists.challenge1.title')}</h3>
                    <p className="text-gray-600">{t('artists.challenge1.desc')}</p>
                  </div>
                </div>
                <div className="flex items-start bg-red-50 p-6 rounded-2xl">
                  <AlertCircle className="w-6 h-6 text-red-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t('artists.challenge2.title')}</h3>
                    <p className="text-gray-600">{t('artists.challenge2.desc')}</p>
                  </div>
                </div>
                <div className="flex items-start bg-red-50 p-6 rounded-2xl">
                   <AlertCircle className="w-6 h-6 text-red-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t('artists.challenge3.title')}</h3>
                    <p className="text-gray-600">{t('artists.challenge3.desc')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-eka-dark mb-8">
                {t('artists.help.title')}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start bg-green-50 p-6 rounded-2xl">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t('artists.help1.title')}</h3>
                    <p className="text-gray-600 font-light">{t('artists.help1.desc')}</p>
                  </div>
                </div>
                <div className="flex items-start bg-green-50 p-6 rounded-2xl">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t('artists.help2.title')}</h3>
                    <p className="text-gray-600 font-light">{t('artists.help2.desc')}</p>
                  </div>
                </div>
                <div className="flex items-start bg-green-50 p-6 rounded-2xl">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t('artists.help3.title')}</h3>
                    <p className="text-gray-600 font-light">{t('artists.help3.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 bg-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <div className="bg-white p-12 rounded-apple-xl shadow-xl">
            <h2 className="text-3xl font-light mb-6 text-yellow-600">
              {t('artists.result.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-light">
              {t('artists.result.desc')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 border-t border-gray-100 pt-12">
              <div className="text-center">
                <div className="text-4xl font-light text-yellow-600 mb-2">88%</div>
                <div className="text-gray-600">{t('artists.stats.confidence')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-yellow-600 mb-2">82%</div>
                <div className="text-gray-600">{t('artists.stats.tension')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-yellow-600 mb-2">76%</div>
                <div className="text-gray-600">{t('artists.stats.anxiety')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Card */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gray-50 rounded-apple-xl p-4 lg:p-8 overflow-hidden border border-gray-100">
            <div className="relative h-64 lg:h-96 rounded-apple-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1544367563-121542f85488?w=800&auto=format&fit=crop"
                alt="Sessió de teràpia per a artistes"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="p-4 lg:p-8">
              <h3 className="text-3xl font-light mb-6 text-gray-900">
                {t('artists.session.title')}
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-gray-500 mr-3" />
                  <span className="text-gray-700 text-lg">1 {t('common.hour')}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-4xl font-light text-gray-900">70€</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking">
                   <Button size="xl" variant="gold" className="w-full sm:w-auto">
                    {t('artists.session.cta')}
                   </Button>
                </Link>
                <Link href="/services">
                  <Button
                    size="xl"
                    variant="outline"
                    className="bg-white border-gray-200 text-gray-700 hover:bg-gray-50 w-full sm:w-auto"
                  >
                    {t('artists.session.other')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
    </>
  );
}
