'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle, Clock01Icon } from '@/lib/icons';
import { useBooking } from '@/hooks/useBooking';
import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import CTASection from '@/components/CTASection';
import FAQ from '@/components/FAQ';
import { BentoCard } from '@/components/ui/bento-card';

interface CoreServiceTemplateProps {
  serviceId: string;
  hero: {
    titleKey: string;
    subtitleKey: string;
    badgeKey?: string;
    icon: React.ElementType;
    backgroundImage: string;
    featureImage?: string;
  };
  features: {
    titleKey: string;
    subtitleKey: string;
    benefits: string[];
  };
  stats?: {
    clients: string;
    years: string;
    satisfaction: string;
    sessions: string;
  };
  bentoGrid?: {
    titleKey: string;
    subtitleKey: string;
    items: Array<{
      titleKey: string;
      descriptionKey: string;
      detailsKey?: string;
      icon?: string;
      color?: 'purple' | 'blue' | 'orange' | 'green' | 'pink' | 'amber';
      size?: 'small' | 'medium' | 'large';
      colSpan?: number;
    }>;
  };
  faqItems?: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
  pricing?: {
    titleKey?: string;
    subtitleKey?: string;
    options: Array<{
      duration: string | number;
      price?: number | string;
      nameKey?: string;
      descriptionKey?: string;
    }>;
  };
  testimonials?: {
    titleKey: string;
    items: Array<{
        name: string;
        text: string;
        rating: number;
    }>;
  };
}

const colorMap: Record<string, string> = {
  purple: 'bg-violet-500/10 border-violet-500/20 text-violet-600 dark:text-violet-400',
  blue: 'bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400',
  orange: 'bg-orange-500/10 border-orange-500/20 text-orange-600 dark:text-orange-400',
  green: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400',
  pink: 'bg-pink-500/10 border-pink-500/20 text-pink-600 dark:text-pink-400',
  amber: 'bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400',
};

export default function CoreServiceTemplate({
  serviceId,
  hero,
  features,
  stats,
  bentoGrid,
  pricing,
  faqItems,
  testimonials
}: CoreServiceTemplateProps) {
  const { t } = useLanguage();
  const { openBooking } = useBooking();

  const defaultStats = stats || {
    clients: '500+',
    years: '10+',
    satisfaction: '98%',
    sessions: '5000+',
  };

  const statItems = [
    { value: defaultStats.clients, label: t('services.stats.clients') },
    { value: defaultStats.years, label: t('services.stats.years') },
    { value: defaultStats.satisfaction, label: t('services.stats.satisfaction') },
    { value: defaultStats.sessions, label: t('services.stats.sessions') },
  ];

  return (
    <>
      <PageLayout
        seo={{
          title: t(`seo.${serviceId}.title`),
          description: t(`seo.${serviceId}.description`),
          keywords: t(`seo.${serviceId}.keywords`),
        }}
        hero={{
          title: t(hero.titleKey),
          subtitle: t(hero.subtitleKey),
          badge: hero.badgeKey ? t(hero.badgeKey) : undefined,
          backgroundImage: hero.backgroundImage,
        }}
      >

        {/* CTA Buttons */}
        <section className="py-10 bg-background border-b border-border/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="rounded-full px-10 h-14 text-base" onClick={openBooking}>
              {t('common.bookNow')}
            </Button>
            <a
              href={`https://wa.me/34658867133?text=${encodeURIComponent(t('whatsapp.booking'))}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-base">
                {t('common.askQuestions')}
              </Button>
            </a>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-12 bg-background border-b border-border/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {statItems.map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features / Benefits */}
        <section id="benefits" className="py-20 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="heading-2 mb-6">{t(features.titleKey)}</h2>
                <p className="text-lg text-muted-foreground mb-10">{t(features.subtitleKey)}</p>
                <div className="grid gap-4">
                  {features.benefits.map((benefitKey, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-muted/40 border border-border/50">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground/80 font-medium">{t(benefitKey)}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-square lg:aspect-[4/5] shadow-2xl">
                <img src={hero.featureImage || hero.backgroundImage} alt={t(features.titleKey)} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="heading-2 mb-4">{t('services.howItWorks')}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { num: '01', titleKey: 'services.step1.title', descKey: 'services.step1.description' },
                { num: '02', titleKey: 'services.step2.title', descKey: 'services.step2.description' },
                { num: '03', titleKey: 'services.step3.title', descKey: 'services.step3.description' },
              ].map((step, i) => (
                <div key={i} className="relative bg-background rounded-[2rem] p-8 border border-border/50 shadow-sm">
                  <div className="text-5xl font-bold text-primary/10 mb-4 leading-none">{step.num}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t(step.titleKey)}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t(step.descKey)}</p>
                  {i < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-border z-10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bento Grid (Optional) */}
        {bentoGrid && (
          <section className="py-20 lg:py-32 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="heading-2 mb-4">{t(bentoGrid.titleKey)}</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">{t(bentoGrid.subtitleKey)}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bentoGrid.items.map((item, i) => {
                  const colorClasses = colorMap[item.color || 'blue'] || colorMap.blue;
                  return (
                    <div key={i} className={item.colSpan === 2 ? 'md:col-span-2' : ''}>
                      <BentoCard href="/booking">
                        <div className={`p-8 h-full flex flex-col rounded-[2rem] border ${colorClasses}`}>
                          <h3 className="text-xl font-semibold mb-3">{t(item.titleKey)}</h3>
                          <p className="text-sm leading-relaxed opacity-90">{t(item.descriptionKey)}</p>
                          {item.detailsKey && (
                            <p className="text-sm mt-4 opacity-70 leading-relaxed">{t(item.detailsKey)}</p>
                          )}
                        </div>
                      </BentoCard>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Pricing / Sessions */}
        {pricing && (
          <section className="py-20 lg:py-32 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="heading-2 mb-4">{t(pricing.titleKey || 'services.pricing.title')}</h2>
                {pricing.subtitleKey && <p className="text-muted-foreground">{t(pricing.subtitleKey)}</p>}
              </div>
              <div className="flex flex-wrap justify-center gap-8">
                {pricing.options.map((option, i) => (
                  <div key={i} className="bg-background rounded-3xl p-8 border border-border flex flex-col items-center text-center w-full max-w-xs shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center mb-6">
                      <Clock01Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{option.nameKey ? t(option.nameKey) : `${option.duration} min`}</h3>
                    {option.price && <p className="text-4xl font-bold text-foreground mb-1">{option.price}€</p>}
                    {option.descriptionKey && (
                      <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{t(option.descriptionKey)}</p>
                    )}
                    <Button variant="outline" className="w-full mt-auto rounded-full" onClick={openBooking}>
                      {t('common.bookNow')}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Testimonials */}
        {testimonials && (
          <section className="py-20 lg:py-32 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="heading-2 mb-4">{t(testimonials.titleKey)}</h2>
                <p className="text-muted-foreground">{t('services.reviews.subtitle')}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {testimonials.items.map((test, i) => (
                  <div key={i} className="p-8 rounded-[2rem] bg-muted/30 border border-border/50 flex flex-col gap-5">
                    {/* Stars */}
                    <div className="flex gap-1">
                      {Array.from({ length: test.rating }).map((_, j) => (
                        <span key={j} className="text-amber-400 text-base leading-none">★</span>
                      ))}
                    </div>
                    <p className="text-foreground/80 leading-relaxed flex-1">"{test.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                        {test.name.charAt(0)}
                      </div>
                      <p className="font-semibold text-foreground">{test.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {faqItems ? <FAQ items={faqItems} /> : <FAQ />}
        <CTASection />
      </PageLayout>
    </>
  );
}
