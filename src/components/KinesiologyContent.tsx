'use client';

import React from 'react';
import { Brain } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import CoreServiceTemplate from '@/components/templates/CoreServiceTemplate';

export default function KinesiologiaContent() {
  const { t } = useLanguage();

  return (
    <CoreServiceTemplate
      serviceId="kinesiologia"
      hero={{
        titleKey: 'services.kinesiology.title',
        subtitleKey: 'services.kinesiology.description',
        badgeKey: 'services.kinesiology.subtitle',
        icon: Brain
      }}
      seoKeys={{
        title: 'seo.kinesiology.title',
        description: 'seo.kinesiology.description',
        keywords: 'seo.kinesiology.keywords'
      }}
      features={{
        titleKey: 'kinesiology.page.benefitsTitle',
        subtitleKey: 'kinesiology.page.benefitsSubtitle',
        benefits: [
          'services.kinesiology.subtitle',
          'kinesiology.benefits.posture',
          'kinesiology.benefits.stress',
          'kinesiology.benefits.energy'
        ]
      }}
      pricing={{
        titleKey: 'kinesiology.page.durationsTitle',
        subtitleKey: 'kinesiology.page.durationsSubtitle',
        options: [
          { duration: 60, descriptionKey: 'kinesiology.page.duration60' },
          { duration: 90, descriptionKey: 'kinesiology.page.duration90' }
        ]
      }}
      testimonials={{
        titleKey: 'kinesiology.page.testimonialsTitle',
        items: [
          {
            name: 'Anna Puig',
            text: t('kinesiology.testimonial.1.text'),
            rating: 5
          },
          {
            name: 'Marc Rivera',
            text: t('kinesiology.testimonial.2.text'),
            rating: 5
          }
        ]
      }}
    />
  );
}
