'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import SEOUpdater from '@/components/SEOUpdater';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import { PERSONALIZED_SERVICES_DATA } from '@/shared/constants';

interface RecommendedService {
  titleKey: string;
  descriptionKey: string;
  duration?: string;
  href: string;
}

interface MethodStep {
  title: string;
  description: string;
}

interface PersonalizedServiceTemplateProps {
  serviceId: string;
  translationKey: string;
  Icon: React.ElementType;
  seoKeys: {
    title: string;
    description: string;
    keywords: string;
  };
  recommendedServices: RecommendedService[];
  faqItems?: Array<{ id: string; question: string; answer: string }>;
  showMethodology?: boolean;
  benefits?: string[];
  methodSteps?: MethodStep[];
}

const themeConfig: Record<string, {
  bg: string;
  border: string;
  text: string;
  subtext: string;
  accent: string;
  dots: string;
  stepsBg: string;
  stepsIconBg: string;
  stepsIconText: string;
  servicesBgFrom: string;
  servicesBgTo: string;
  serviceCardHoverText: string;
  serviceLinkText: string;
}> = {
  orange: {
    bg: 'bg-orange-50/50',
    border: 'border-orange-100',
    text: 'text-orange-900',
    subtext: 'text-gray-700',
    accent: 'text-eka-dark',
    dots: 'bg-orange-400',
    stepsBg: 'bg-orange-50/30',
    stepsIconBg: 'bg-orange-100',
    stepsIconText: 'text-orange-600',
    servicesBgFrom: 'from-transparent',
    servicesBgTo: 'to-orange-50/30',
    serviceCardHoverText: 'group-hover:text-orange-700',
    serviceLinkText: 'text-orange-600'
  },
  purple: {
    bg: 'bg-purple-50/50',
    border: 'border-purple-100',
    text: 'text-purple-900',
    subtext: 'text-gray-700',
    accent: 'text-eka-dark',
    dots: 'bg-purple-400',
    stepsBg: 'bg-purple-50/30',
    stepsIconBg: 'bg-purple-100',
    stepsIconText: 'text-purple-600',
    servicesBgFrom: 'from-transparent',
    servicesBgTo: 'to-purple-50/30',
    serviceCardHoverText: 'group-hover:text-purple-700',
    serviceLinkText: 'text-purple-600'
  },
  blue: {
    bg: 'bg-blue-50/50',
    border: 'border-blue-100',
    text: 'text-blue-900',
    subtext: 'text-gray-700',
    accent: 'text-eka-dark',
    dots: 'bg-blue-400',
    stepsBg: 'bg-blue-50/30',
    stepsIconBg: 'bg-blue-100',
    stepsIconText: 'text-blue-600',
    servicesBgFrom: 'from-transparent',
    servicesBgTo: 'to-blue-50/30',
    serviceCardHoverText: 'group-hover:text-blue-700',
    serviceLinkText: 'text-blue-600'
  },
  green: {
    bg: 'bg-emerald-50/50',
    border: 'border-emerald-100',
    text: 'text-emerald-900',
    subtext: 'text-gray-700',
    accent: 'text-eka-dark',
    dots: 'bg-emerald-400',
    stepsBg: 'bg-emerald-50/30',
    stepsIconBg: 'bg-emerald-100',
    stepsIconText: 'text-emerald-600',
    servicesBgFrom: 'from-transparent',
    servicesBgTo: 'to-emerald-50/30',
    serviceCardHoverText: 'group-hover:text-emerald-700',
    serviceLinkText: 'text-emerald-600'
  },
  pink: {
    bg: 'bg-pink-50/50',
    border: 'border-pink-100',
    text: 'text-pink-900',
    subtext: 'text-gray-700',
    accent: 'text-eka-dark',
    dots: 'bg-pink-400',
    stepsBg: 'bg-pink-50/30',
    stepsIconBg: 'bg-pink-100',
    stepsIconText: 'text-pink-600',
    servicesBgFrom: 'from-transparent',
    servicesBgTo: 'to-pink-50/30',
    serviceCardHoverText: 'group-hover:text-pink-700',
    serviceLinkText: 'text-pink-600'
  },
  amber: {
    bg: 'bg-amber-50/50',
    border: 'border-amber-100',
    text: 'text-amber-900',
    subtext: 'text-gray-700',
    accent: 'text-eka-dark',
    dots: 'bg-amber-400',
    stepsBg: 'bg-amber-50/30',
    stepsIconBg: 'bg-amber-100',
    stepsIconText: 'text-amber-600',
    servicesBgFrom: 'from-transparent',
    servicesBgTo: 'to-amber-50/30',
    serviceCardHoverText: 'group-hover:text-amber-700',
    serviceLinkText: 'text-amber-600'
  }
};

export default function PersonalizedServiceTemplate({
  serviceId,
  translationKey,
  Icon,
  seoKeys,
  recommendedServices,
  faqItems,
  showMethodology = true,
  benefits = [],
  methodSteps = []
}: PersonalizedServiceTemplateProps) {
  const { t } = useLanguage();
  const serviceData = PERSONALIZED_SERVICES_DATA.find(s => s.id === serviceId);

  const colorKey = serviceData?.color || 'orange';
  const theme = themeConfig[colorKey] || themeConfig.orange;

  // Fallback methodology steps if none provided but showMethodology is true
  // Try to load from translation keys if methodSteps is empty but showMethodology is true
  const stepsToRender = methodSteps.length > 0 ? methodSteps : (showMethodology ? [1, 2, 3].map(step => ({
    title: t(`${translationKey}.method.step${step}.title`),
    description: t(`${translationKey}.method.step${step}.desc`)
  })) : []);

  // Filter out any steps that look like translation keys (if t returns the key)
  const validSteps = stepsToRender.filter(step =>
    !step.title.includes(translationKey) && !step.description.includes(translationKey)
  );

  return (
    <>
      <SEOUpdater
        titleKey={seoKeys.title}
        descriptionKey={seoKeys.description}
        keywordsKey={seoKeys.keywords}
      />
      <PageLayout
        hero={{
          title: t(`${translationKey}.hero.title`),
          subtitle: t(`${translationKey}.hero.description`),
          backgroundImage: serviceData?.image,
          themeColor: serviceData?.color || 'orange'
        }}
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center -mt-8 mb-16 relative z-20">
          <Button
            asChild
            size="xl"
            variant="default"
            className="shadow-xl"
          >
            <Link href={`/booking?service=${encodeURIComponent(t(`${translationKey}.hero.title`))}`}>
              {t('nav.bookNow')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
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

        {/* Understanding Section - Bento Box */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#fbfbfd]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4 text-black">
                {t(`${translationKey}.understanding.title`)}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[1400px] mx-auto">
              {/* Description 1 - Large box */}
              <div className="col-span-1 md:col-span-2 p-6 sm:p-8 md:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden group">
                 <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 rounded-bl-full ${theme.bg} transition-colors duration-500`} />
                 <p className="text-2xl md:text-3xl text-gray-800 font-medium leading-tight relative z-10 text-balance">
                    {t(`${translationKey}.understanding.description1`)}
                 </p>
                 <p className="mt-8 text-lg text-gray-500 leading-relaxed max-w-2xl font-medium relative z-10">
                    {t(`${translationKey}.understanding.description2`)}
                 </p>
                 <div className="mt-8 relative z-10">
                    <p className={`font-semibold tracking-tight ${theme.text}`}>
                      {t(`${translationKey}.understanding.callToAction`)}
                    </p>
                 </div>
              </div>

              {/* Benefits Box */}
              {benefits.length > 0 && (
                <div className={`col-span-1 p-6 sm:p-8 md:p-10 rounded-[2rem] sm:rounded-[2.5rem] ${theme.bg} ${theme.border} border shadow-sm transition-all duration-500 flex flex-col justify-center`}>
                  <h3 className={`font-semibold text-2xl mb-6 tracking-tight ${theme.text}`}>
                    {t('common.benefits') || t(`${translationKey}.benefits.title`) || 'Beneficis clau'}
                  </h3>
                  <ul className="space-y-4">
                    {benefits.map((benefit: string, i: number) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className={`mt-2 w-2 h-2 rounded-full ${theme.dots} shrink-0`} />
                        <span className={`text-lg font-medium leading-tight ${theme.text}`}>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Methodology Section - Apple Bento layout */}
        {showMethodology && validSteps.length > 0 && (
          <section className="py-16 sm:py-20 lg:py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-16 text-center text-black">
                {t(`${translationKey}.method.title`)}
              </h2>
              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                {validSteps.map((step, index) => (
                    <div key={index} className={`rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10 border border-gray-100 ${theme.stepsBg} shadow-sm group hover:shadow-xl transition-all duration-500`}>
                    <div className={`w-14 h-14 rounded-2xl ${theme.stepsIconBg} flex items-center justify-center ${theme.stepsIconText} text-2xl font-semibold mb-8 group-hover:scale-110 transition-transform duration-500`}>
                      {index + 1}
                    </div>
                    <h3 className="text-3xl font-semibold mb-4 text-gray-900 tracking-tight leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Recommended Services Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#fbfbfd]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4 text-black">
                {t(`${translationKey}.services.title`)}
              </h2>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto tracking-tight font-medium">
                {t(`${translationKey}.services.subtitle`)}
              </p>
            </div>

            <div className={`grid md:grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 md:gap-8`}>
              {recommendedServices.map((service, index) => (
                  <div key={index} className="bg-white rounded-[2rem] sm:rounded-[2.5rem] border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl p-6 sm:p-8 md:p-10 group flex flex-col h-full relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 rounded-bl-full ${theme.bg} transition-colors duration-500`} />
                  
                  <div className="flex flex-col h-full relative z-10">
                    <h3 className={`text-4xl font-semibold text-gray-900 mb-4 tracking-tighter leading-[1.1] ${theme.serviceCardHoverText} transition-colors`}>
                      {t(service.titleKey)}
                    </h3>
                    <p className="text-lg text-gray-500 mb-8 flex-grow font-medium leading-relaxed">
                      {t(service.descriptionKey)}
                    </p>
                    
                    <div className="mt-auto pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start justify-between gap-6">
                      <span className="text-lg font-semibold text-gray-900 bg-gray-50 px-4 py-2 rounded-xl whitespace-nowrap border border-gray-100">
                        {service.duration || '60-90 min'}
                      </span>
                      <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                        <Link href={service.href} className={`${theme.serviceLinkText} text-sm font-semibold hover:opacity-80 flex items-center px-4 py-2`}>
                          {t('common.moreInfo')}
                        </Link>
                        <Button asChild size="lg" className="rounded-full w-full sm:w-auto font-medium shadow-md shadow-black/5" variant="default">
                          <Link href={`/booking?service=${encodeURIComponent(t(service.titleKey) || service.titleKey)}`}>
                            {t('nav.bookNow')}
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {faqItems ? <FAQ items={faqItems} /> : <FAQ />}
        <CTASection />
      </PageLayout>
    </>
  );
}





