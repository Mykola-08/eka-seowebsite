'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import SEOUpdater from '@/components/SEOUpdater';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import ServiceCard from '@/components/ServiceCard';
import { SERVICES_DATA } from '@/shared/constants';
import { ServiceItem } from '@/shared/types';

export default function ChildrenContent() {
  const { t } = useLanguage();
  
  const kinesiologyBase = SERVICES_DATA.find(s => s.id === 'kinesiologia');
  const customKinesiology: ServiceItem = {
      ...kinesiologyBase!,
      id: 'kinesiology-child-learning',
      // titleKey remains 'services.kinesiology.title'
      subtitleKey: 'children.kinesiology.badge',
      descriptionKey: 'children.kinesiology.desc',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2072&auto=format&fit=crop'
  };

  const customHealth: ServiceItem = {
      ...kinesiologyBase!,
      id: 'kinesiology-child-health',
      titleKey: 'children.health.title',
      subtitleKey: 'children.health.badge',
      descriptionKey: 'children.health.desc',
      image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop'
  };

  const Hero = (
      <section className="py-12 sm:py-20 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
                <span className="text-blue-700 font-medium text-sm">{t('nav.personalizedServices')}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-eka-dark mb-6 leading-tight">
                {t('elena.target.children.title')}
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                {t('elena.target.children.desc')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                 <Link href="/booking">
                   <Button size="xl" variant="primary" className="px-8 py-4 normal-case">
                      {t('common.reserveSession')}
                   </Button>
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative w-full h-[400px] sm:h-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?w=1920&h=1080&fit=crop"
                  alt={t('elena.target.children.title')}
                  fill
                  className="object-cover rounded-apple-xl shadow-2xl -rotate-1 hover:rotate-0 transition-transform duration-500"
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
        titleKey="seo.children.title"
        descriptionKey="seo.children.description"
        keywordsKey="seo.children.keywords"
      />
      <PageLayout>
      {Hero}
      
      {/* Recommended Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-16">
              <h2 className="heading-2 mb-4 text-gray-900">
                {t('children.recommended')}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
                {t('children.recommended.desc')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
               <ServiceCard service={customKinesiology} />
               <ServiceCard service={customHealth} />
            </div>
        </div>
      </section>

      <FAQ />
      <CTASection />
      </PageLayout>
    </>
  );
}
