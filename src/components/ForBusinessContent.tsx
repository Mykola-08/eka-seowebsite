'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/PageLayout';

import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard';
import { ServiceItem } from '@/shared/types';
import Link from 'next/link';
import { ArrowRight01Icon, CheckmarkCircle01Icon } from '@/lib/icons';

const BUSINESS_SERVICES_DATA: ServiceItem[] = [
  {
    id: 'business-massage',
    titleKey: 'business.massage.title',
    subtitleKey: 'business.massage.subtitle',
    descriptionKey: 'business.massage.description',
    iconName: 'Heart',
    color: 'orange',
    durations: [60, 90],
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '/services/massage',
    benefitsKeys: ['business.massage.b1', 'business.massage.b2', 'business.massage.b3']
  },
  {
    id: 'business-kinesio',
    titleKey: 'business.kinesio.title',
    subtitleKey: 'business.kinesio.subtitle',
    descriptionKey: 'business.kinesio.description',
    iconName: 'Brain',
    color: 'blue',
    durations: [60, 90],
    image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '/services/kinesiology',
    benefitsKeys: ['business.kinesio.b1', 'business.kinesio.b2', 'business.kinesio.b3']
  },
  {
    id: 'business-nutrition',
    titleKey: 'business.nutrition.title',
    subtitleKey: 'business.nutrition.subtitle',
    descriptionKey: 'business.nutrition.description',
    iconName: 'Leaf',
    color: 'green',
    durations: [],
    image: 'https://images.pexels.com/photos/4098228/pexels-photo-4098228.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '/services/nutrition',
    benefitsKeys: ['business.nutrition.b1', 'business.nutrition.b2', 'business.nutrition.b3']
  },
  {
    id: 'business-360',
    titleKey: 'business.360.title',
    subtitleKey: 'business.360.subtitle',
    descriptionKey: 'business.360.description',
    iconName: 'RotateCcw',
    color: 'purple',
    durations: [60, 90, 120],
    image: 'https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '/360-revision',
    benefitsKeys: ['business.360.b1', 'business.360.b2', 'business.360.b3']
  }
];

export default function ForBusinessContent() {
  const { t } = useLanguage();

  const faqItems = [
    {
      id: 'business-q1',
      question: t('personalized.business.faq.q1'),
      answer: t('personalized.business.faq.a1')
    },
    {
      id: 'business-q2',
      question: t('personalized.business.faq.q2'),
      answer: t('personalized.business.faq.a2')
    },
    {
      id: 'business-q3',
      question: t('personalized.business.faq.q3'),
      answer: t('personalized.business.faq.a3')
    }
  ];

  return (
    <>
      
      <PageLayout
        hero={{
          title: t('personalized.business.hero.title'),
          subtitle: t('personalized.business.hero.description'),
          backgroundImage: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1600',
          themeColor: 'blue'
        }}
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4 mb-20 relative z-20">
          <Button asChild size="xl" className="rounded-full transition-all px-8">
            <Link href="/booking">
              {t('nav.bookNow')}
              <ArrowRight01Icon className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <Button asChild size="xl" variant="outline" className="rounded-full backdrop-blur-sm px-8">
            <Link href="/booking">
              {t('common.askQuestions')}
            </Link>
          </Button>
        </div>

        {/* Services Grid (Core) - Transparent Background */}
        <section className="py-16 bg-muted/30 relative overflow-hidden">
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 max-w-3xl mx-auto"
            >
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-6">
                {t('personalized.business.bento.title')}
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">
                {t('personalized.business.bento.subtitle')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {BUSINESS_SERVICES_DATA.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ServiceCard service={service} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tiers / Plans Section - Rounded Style */}
        <section className="py-24 bg-card relative overflow-hidden" id="plans">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-foreground mb-6">
                {t('personalized.business.plans.title')}
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">
                  {t("personalized.business.plans.subtitle")}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative">
              {/* Background gradient blur */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-150 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />

              {/* Plan 1 - Teams */}
              <div className="bg-card rounded-[2rem] p-8 sm:p-10 border border-border relative transition-all duration-300 flex flex-col h-full">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 rounded-bl-full bg-primary/30 pointer-events-none" />
                <h3 className="text-3xl font-semibold tracking-tight text-foreground mb-3 relative z-10">{t("personalized.business.plans.teams.title")}</h3>
                <p className="text-muted-foreground font-medium mb-8 grow relative z-10">{t("personalized.business.plans.teams.desc")}</p>
                
                <div className="mb-8 relative z-10">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-medium text-foreground tracking-tighter">€100</span>
                    <span className="text-xl text-muted-foreground font-medium">{t('common.mo')}</span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1 font-medium">{t("personalized.business.plans.teams.price")}</div>
                </div>

                <ul className="space-y-5 mb-10 relative z-10 grow">
                  <li className="flex items-start">
                    <CheckmarkCircle01Icon className="w-6 h-6 text-primary mr-3 shrink-0" />
                    <span className="text-foreground/80 leading-snug">{t("personalized.business.plans.teams.feature1")}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckmarkCircle01Icon className="w-6 h-6 text-primary mr-3 shrink-0" />
                    <span className="text-foreground/80 leading-snug">{t('personalized.business.plans.teams.feature2')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckmarkCircle01Icon className="w-6 h-6 text-primary mr-3 shrink-0" />
                    <span className="text-foreground/80 leading-snug">{t('personalized.business.plans.teams.feature3')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckmarkCircle01Icon className="w-6 h-6 text-primary mr-3 shrink-0" />
                    <span className="text-foreground/80 leading-snug">{t('personalized.business.plans.teams.feature4')}</span>
                  </li>
                </ul>

                <Button asChild className="w-full rounded-[2rem] py-6 relative z-10">
                  <Link href="/booking?subject=teams">{t('common.getStarted')}</Link>
                </Button>
              </div>

              {/* Plan 2 - Office */}
              <div className="bg-foreground rounded-[2rem] p-8 sm:p-10 relative transition-transform duration-300 flex flex-col h-full overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 opacity-20 rounded-bl-full bg-card pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 opacity-10 rounded-tr-full bg-card pointer-events-none" />
                
                <h3 className="text-3xl font-semibold tracking-tight text-primary-foreground mb-3 relative z-10">{t('personalized.business.plans.enterprise.title')}</h3>
                <p className="text-primary-foreground/80 font-medium mb-8 grow relative z-10">{t('personalized.business.plans.enterprise.desc')}</p>
                
                <div className="mb-8 relative z-10">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-medium text-primary-foreground tracking-tighter">{t('personalized.business.plans.enterprise.priceValue') || 'Custom'}</span>
                  </div>
                  <div className="text-sm text-primary-foreground/80 mt-2 font-medium">{t('personalized.business.plans.enterprise.price')}</div>
                </div>

                <ul className="space-y-5 mb-10 relative z-10 grow">
                  <li className="flex items-start">
                    <CheckmarkCircle01Icon className="w-6 h-6 text-primary-foreground mr-3 shrink-0" />
                    <span className="text-primary-foreground/90 leading-snug">{t('personalized.business.plans.enterprise.feature1')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckmarkCircle01Icon className="w-6 h-6 text-primary-foreground mr-3 shrink-0" />
                    <span className="text-primary-foreground/90 leading-snug">{t('personalized.business.plans.enterprise.feature2')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckmarkCircle01Icon className="w-6 h-6 text-primary-foreground mr-3 shrink-0" />
                    <span className="text-primary-foreground/90 leading-snug">{t('personalized.business.plans.enterprise.feature3')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckmarkCircle01Icon className="w-6 h-6 text-primary-foreground mr-3 shrink-0" />
                    <span className="text-primary-foreground/90 leading-snug">{t('personalized.business.plans.enterprise.feature4')}</span>
                  </li>
                </ul>

                <Button asChild className="w-full rounded-[2rem] py-6 relative z-10">
                  <Link href="/booking?subject=office">{t('common.getStarted')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>


        <FAQ items={faqItems} />
        <CTASection />
      </PageLayout>
    </>
  );
}
