'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useBooking } from '@/hooks/useBooking';
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
  const { navigateToBooking } = useBooking();
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
          badge: t('personalizedServices.title'),
          icon: <Icon className="w-4 h-4" />,
          backgroundImage: serviceData?.image,
          themeColor: serviceData?.color || 'orange'
        }}
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center -mt-8 mb-16 relative z-20">
          <Button
            onClick={() => navigateToBooking()}
            size="xl"
            variant="default"
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
            <div className={`${theme.bg} ${theme.border} border rounded-[2rem] shadow-sm p-8 sm:p-12 transition duration-500 ease-out`}>
              <h2 className={`heading-2 mb-6 font-bold ${theme.accent}`}>
                {t(`${translationKey}.understanding.title`)}
              </h2>
              <div className={`space-y-4 ${theme.subtext} leading-relaxed text-lg`}>
                <p>{t(`${translationKey}.understanding.description1`)}</p>
                <p>{t(`${translationKey}.understanding.description2`)}</p>

                {/* Benefits List */}
                {benefits.length > 0 && (
                  <div className={`mt-8 bg-white/60 rounded-xl p-6 border ${theme.border}`}>
                    <h3 className={`font-bold ${theme.text} mb-4`}>
                      {t('common.benefits') || t(`${translationKey}.benefits.title`) || 'Beneficis clau'}
                    </h3>
                    <ul className="space-y-2">
                      {benefits.map((benefit: string, i: number) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${theme.dots} shrink-0`} />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <p className={`font-medium ${theme.text} mt-6`}>
                  {t(`${translationKey}.understanding.callToAction`)}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        {showMethodology && validSteps.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-8">
              <h2 className="heading-2 mb-12 font-bold text-center text-eka-dark">
                {t(`${translationKey}.method.title`)}
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {validSteps.map((step, index) => (
                  <div key={index} className={`${theme.stepsBg} rounded-2xl p-8 border ${theme.border}`}>
                    <div className={`w-10 h-10 rounded-full ${theme.stepsIconBg} flex items-center justify-center ${theme.stepsIconText} font-bold mb-4`}>
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Recommended Services Section */}
        <section className={`py-16 bg-gradient-to-b ${theme.servicesBgFrom} ${theme.servicesBgTo}`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4 font-bold text-eka-dark">
                {t(`${translationKey}.services.title`)}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t(`${translationKey}.services.subtitle`)}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {recommendedServices.map((service, index) => (
                <div key={index} className="bg-white rounded-[2rem] border border-gray-100 shadow-sm transition duration-300 hover:shadow-md hover:-translate-y-1 p-8 group">
                  <Link href={service.href} className="flex flex-col h-full">
                    <h3 className={`text-2xl font-bold text-gray-900 mb-4 ${theme.serviceCardHoverText} transition-colors`}>
                      {t(service.titleKey)}
                    </h3>
                    <p className="text-gray-600 mb-6 flex-grow">
                      {t(service.descriptionKey)}
                    </p>
                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-500">{service.duration || '60-90 min'}</span>
                      <span className={`${theme.serviceLinkText} font-medium hover:opacity-80 flex items-center`}>
                        {t('common.moreInfo')} <ArrowRight className="w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </Link>
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
