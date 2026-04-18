'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useBooking } from '@/hooks/useBooking';
import PageLayout from '@/components/PageLayout';
import { Section, PageHero } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import CTASection from '@/components/CTASection';
import { CheckCircle, ArrowRight, Clock01Icon } from '@/lib/icons';

interface PersonalizedServiceTemplateProps {
  serviceId: string;
  hero: {
    titleKey: string;
    subtitleKey: string;
    badgeKey?: string;
    icon: React.ElementType;
    backgroundImage: string;
  };
  benefits: {
    titleKey: string;
    subtitleKey: string;
    items: string[];
  };
  recommendedServices: Array<{
    titleKey: string;
    descriptionKey: string;
    href: string;
    duration?: string;
    price?: string;
  }>;
  showMethodology?: boolean;
}

export default function PersonalizedServiceTemplate({
  serviceId,
  hero,
  benefits,
  recommendedServices,
  showMethodology = true
}: PersonalizedServiceTemplateProps) {
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
        {/* Hero */}
        <Section spacing="loose" className="pt-32">
          <PageHero
            eyebrow={hero.badgeKey ? t(hero.badgeKey) : undefined}
            title={t(hero.titleKey)}
            subtitle={t(hero.subtitleKey)}
            actions={
              <Button size="lg" className="rounded-full px-8" onClick={openBooking}>
                {t('common.bookNow')}
              </Button>
            }
          />
          <div className="mt-16 relative rounded-[2.5rem] overflow-hidden aspect-[21/9] shadow-2xl">
             <img src={hero.backgroundImage} alt={t(hero.titleKey)} className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </Section>

        {/* Benefits Section */}
        <Section tone="muted">
          <div className="max-w-7xl mx-auto">
             <div className="text-center mb-16">
                <h2 className="heading-2 mb-4">{t(benefits.titleKey)}</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">{t(benefits.subtitleKey)}</p>
             </div>
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.items.map((itemKey, i) => (
                  <div key={i} className="bg-background p-6 rounded-2xl border border-border flex gap-4">
                     <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                     <p className="text-foreground/80 font-medium leading-relaxed">{t(itemKey)}</p>
                  </div>
                ))}
             </div>
          </div>
        </Section>

        {/* Methodology (Optional) */}
        {showMethodology && (
          <Section>
            <div className="max-w-4xl mx-auto">
               <div className="text-center mb-16">
                  <h2 className="heading-2 mb-4">{t('common.methodology.title') || 'Nuestro Método'}</h2>
                  <p className="text-muted-foreground">{t('common.methodology.subtitle') || 'Un enfoque integrado para resultados duraderos.'}</p>
               </div>
               <div className="space-y-12">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex gap-6 md:gap-12">
                       <div className="text-4xl font-bold text-primary/20 shrink-0">0{step}</div>
                       <div>
                          <h3 className="text-xl font-semibold mb-2">{t(`personalized.${serviceId}.method.step${step}.title`)}</h3>
                          <p className="text-muted-foreground leading-relaxed">{t(`personalized.${serviceId}.method.step${step}.desc`)}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </Section>
        )}

        {/* Recommended Services */}
        <Section tone="muted">
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                 <h2 className="heading-2 mb-4">{t('personalized.recommendedServices') || 'Servicios Recomendados'}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                 {recommendedServices.map((service, i) => (
                    <Card key={i} className="bg-background border-border overflow-hidden rounded-3xl">
                       <CardContent className="p-8">
                          <div className="flex justify-between items-start mb-6">
                             <div className="p-3 rounded-2xl bg-primary/5">
                                <hero.icon className="w-6 h-6 text-primary" />
                             </div>
                             {service.duration && (
                               <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                                  <Clock01Icon className="w-3.5 h-3.5" />
                                  {service.duration}
                               </div>
                             )}
                          </div>
                          <h3 className="text-2xl font-semibold mb-4">{t(service.titleKey)}</h3>
                          <p className="text-muted-foreground mb-8 leading-relaxed">{t(service.descriptionKey)}</p>
                          <Button asChild variant="outline" className="w-full rounded-full group">
                             <a href={service.href}>
                                {t('common.readMore')}
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                             </a>
                          </Button>
                       </CardContent>
                    </Card>
                 ))}
              </div>
           </div>
        </Section>

        <CTASection />
      </PageLayout>
    </>
  );
}
