'use client';

import React from 'react';
import { CheckCircle, Clock01Icon } from '@/lib/icons';
import { useBooking } from '@/hooks/useBooking';
import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
  };
  features: {
    titleKey: string;
    subtitleKey: string;
    benefits: string[];
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

export default function CoreServiceTemplate({
  serviceId,
  hero,
  features,
  bentoGrid,
  pricing,
  faqItems,
  testimonials
}: CoreServiceTemplateProps) {
  const { t } = useLanguage();
  const { openBooking } = useBooking();

  return (
    <>
      <PageLayout
        seo={{
          title: t(`seo.${serviceId}.title`),
          description: t(`seo.${serviceId}.description`),
          keywords: t(`seo.${serviceId}.keywords`),
        }}
      >
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              {hero.badgeKey && (
                <Badge variant="outline" className="mb-6 px-4 py-1 rounded-full border-primary/20 text-primary bg-primary/5 uppercase tracking-wider text-[10px] font-bold">
                  {t(hero.badgeKey)}
                </Badge>
              )}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground mb-6 leading-[0.95]">
                {t(hero.titleKey)}
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10">
                {t(hero.subtitleKey)}
              </p>
              <Button size="lg" className="rounded-full px-8 h-14 text-base" onClick={openBooking}>
                {t('common.bookNow')}
              </Button>
            </div>
          </div>
        </section>

        {/* Features / Benefits */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                   <h2 className="heading-2 mb-6">{t(features.titleKey)}</h2>
                   <p className="text-lg text-muted-foreground mb-10">{t(features.subtitleKey)}</p>
                   <div className="grid gap-4">
                      {features.benefits.map((benefitKey, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-background border border-border">
                           <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                           <span className="text-foreground/80 font-medium">{t(benefitKey)}</span>
                        </div>
                      ))}
                   </div>
                </div>
                <div className="relative rounded-[2.5rem] overflow-hidden aspect-square lg:aspect-[4/5] shadow-2xl">
                   <img src={hero.backgroundImage} alt={t(hero.titleKey)} className="absolute inset-0 w-full h-full object-cover" />
                </div>
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   {bentoGrid.items.map((item, i) => (
                      <div key={i} className={item.colSpan === 2 ? 'md:col-span-2' : ''}>
                        <BentoCard 
                          href="/booking"
                        >
                            <div className="p-8 h-full flex flex-col">
                                <h3 className="text-2xl font-semibold mb-2">{t(item.titleKey)}</h3>
                                <p className="text-muted-foreground">{t(item.descriptionKey)}</p>
                                {item.detailsKey && <p className="text-sm mt-4 opacity-70 leading-relaxed">{t(item.detailsKey)}</p>}
                            </div>
                        </BentoCard>
                      </div>
                   ))}
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
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {pricing.options.map((option, i) => (
                      <div key={i} className="bg-background rounded-3xl p-8 border border-border flex flex-col items-center text-center">
                          <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                             <Clock01Icon className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{option.nameKey ? t(option.nameKey) : `${option.duration} min`}</h3>
                          {option.price && <p className="text-3xl font-bold text-foreground mb-4">{option.price}€</p>}
                          {option.descriptionKey && <p className="text-muted-foreground text-sm mb-6">{t(option.descriptionKey)}</p>}
                          <Button variant="outline" className="w-full mt-auto rounded-full" onClick={openBooking}>
                            {t('common.bookNow')}
                          </Button>
                      </div>
                    ))}
                </div>
             </div>
          </section>
        )}

        {testimonials && (
           <section className="py-20 lg:py-32 bg-background">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="heading-2 text-center mb-16">{t(testimonials.titleKey)}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.items.map((test, i) => (
                      <div key={i} className="p-8 rounded-[2rem] bg-muted/30 border border-border/50">
                        <p className="text-lg italic mb-6">"{test.text}"</p>
                        <p className="font-semibold">{test.name}</p>
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
