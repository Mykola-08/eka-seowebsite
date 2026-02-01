'use client';

import { ArrowRight, HeartPulse, Salad } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import PageLayout from '@/components/PageLayout';
import { Button } from 'keep-react';

export default function AdultsContent() {
  const { t } = useLanguage();

  const HeroCustom = (
      <section className="py-20 sm:py-28 bg-gradient-to-br from-white via-amber-50/30 to-orange-50/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 flex flex-col items-center text-center">
            <h1 className="heading-1 mb-6 max-w-4xl">
              {t('elena.target.adults.title')}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mb-12 font-light leading-relaxed">
              {t('elena.target.adults.desc')}
            </p>
        </div>
      </section>
  );

  return (
    <PageLayout>
      {HeroCustom}
      
      <section className="py-16 bg-white relative z-10 -mt-10 rounded-t-[3rem] shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-16">
              <h2 className="heading-2 mb-4 text-gray-900 font-bold">
                {t('adult.recommended')}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
                {t('adult.recommended.desc')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
               {/* Kinesiology */}
               <div className="group relative bg-white rounded-3xl border border-gray-100 hover:border-amber-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden relative">
                     <Image
                        src="https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2070&auto=format&fit=crop"
                        alt="Kinesiología"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                     />
                  </div>
                  <div className="p-8">
                     <div className="flex items-center gap-3 mb-4 text-amber-600">
                        <div className="p-2 bg-amber-50 rounded-full">
                            <HeartPulse className="w-6 h-6" />
                        </div>
                        <span className="font-medium">Equilibrio Integral</span>
                     </div>
                     <h3 className="text-2xl font-light text-gray-900 mb-3 group-hover:text-amber-700 transition-colors">
                        {t('services.kinesiology.title')}
                     </h3>
                     <p className="text-gray-600 mb-8 font-light line-clamp-3">
                        {t('services.kinesiology.shortDesc')}
                     </p>
                     <Link href="/services/kinesiology" className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors">
                        {t('common.moreInfo')} <ArrowRight className="w-5 h-5 ml-2" />
                     </Link>
                  </div>
               </div>

               {/* Nutrition */}
               <div className="group relative bg-white rounded-3xl border border-gray-100 hover:border-green-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden relative">
                     <Image
                        src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop"
                        alt="Nutrición"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                     />
                  </div>
                  <div className="p-8">
                     <div className="flex items-center gap-3 mb-4 text-green-600">
                        <div className="p-2 bg-green-50 rounded-full">
                            <Salad className="w-6 h-6" />
                        </div>
                        <span className="font-medium">Salud Digestiva</span>
                     </div>
                     <h3 className="text-2xl font-light text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                        {t('services.nutrition.title')}
                     </h3>
                     <p className="text-gray-600 mb-8 font-light line-clamp-3">
                        {t('services.nutrition.shortDesc')}
                     </p>
                     <Link href="/services/nutrition" className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors">
                        {t('common.moreInfo')} <ArrowRight className="w-5 h-5 ml-2" />
                     </Link>
                  </div>
               </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="heading-2 mb-6 font-bold">{t('adult.cta.title')}</h2>
            <p className="text-xl text-gray-600 mb-8 font-light">
                {t('adult.cta.desc')}
            </p>
            <Link href="/booking">
                <Button size="xl" className="btn btn-accent">
                    {t('common.bookNow')}
                </Button>
            </Link>
        </div>
      </section>
    </PageLayout>
  );
}
