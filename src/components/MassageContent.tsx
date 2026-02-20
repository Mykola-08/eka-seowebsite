'use client';

import React from 'react';
import { Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import CoreServiceTemplate from '@/components/templates/CoreServiceTemplate';

export default function MassageContent() {
  const { t } = useLanguage();

  return (
    <CoreServiceTemplate
      serviceId="massatge"
      hero={{
        titleKey: 'services.massage.title',
        subtitleKey: 'services.massage.description',
        badgeKey: 'services.massage.subtitle',
        icon: Heart
      }}
      seoKeys={{
        title: 'seo.massage.title',
        description: 'seo.massage.description',
        keywords: 'seo.massage.keywords'
      }}
      features={{
        titleKey: 'massage.page.benefitsTitle',
        subtitleKey: 'massage.page.benefitsSubtitle',
        benefits: [
          'massage.benefits.pain',
          'services.massage.subtitle',
          'massage.benefits.circulation',
          'massage.benefits.wellbeing'
        ]
      }}
      pricing={{
        titleKey: 'massage.page.durationsTitle',
        subtitleKey: 'massage.page.durationsSubtitle',
        options: [
          { duration: 60, descriptionKey: 'massage.page.duration60' },
          { duration: 90, descriptionKey: 'massage.page.duration90' },
          { duration: 120, descriptionKey: 'massage.page.duration120' }
        ]
      }}
      testimonials={{
        titleKey: 'massage.page.testimonialsTitle',
        items: [
          {
            name: 'Maria S.',
            text: t('massage.testimonial.1.text'),
            rating: 5
          },
          {
            name: 'Jordi M.',
            text: t('massage.testimonial.2.text'),
            rating: 5
          }
        ]
      }}
    />
  );
}
