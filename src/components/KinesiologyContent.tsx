'use client';

import React from 'react';
import { Brain } from '@/lib/icons';
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
        icon: Brain01Icon
      }}
      bentoGrid={{
        titleKey: 'kinesiology.page.benefitsTitle',
        subtitleKey: 'kinesiology.page.benefitsSubtitle',
        items: [
          {
            titleKey: 'services.kinesiology.subtitle',
            descriptionKey: 'kinesiology.bento.balance.desc',
            detailsKey: 'services.kinesiology.description',
            image: 'https://images.pexels.com/photos/4506105/pexels-photo-4506105.jpeg?auto=compress&cs=tinysrgb&w=800',
            colSpan: 1
          },
          {
            titleKey: 'kinesiology.benefits.posture',
            descriptionKey: 'kinesiology.bento.posture.desc',
            detailsKey: 'services.kinesiology.description',
            image: 'https://images.pexels.com/photos/5793981/pexels-photo-5793981.jpeg?auto=compress&cs=tinysrgb&w=1200',
            colSpan: 2
          },
          {
            titleKey: 'kinesiology.benefits.stress',
            descriptionKey: 'kinesiology.bento.stress.desc',
            detailsKey: 'services.kinesiology.description',
            image: 'https://images.pexels.com/photos/3865523/pexels-photo-3865523.jpeg?auto=compress&cs=tinysrgb&w=1200',
            colSpan: 2
          },
          {
            titleKey: 'kinesiology.benefits.energy',
            descriptionKey: 'kinesiology.bento.energy.desc',
            detailsKey: 'services.kinesiology.description',
            image: 'https://images.pexels.com/photos/3760270/pexels-photo-3760270.jpeg?auto=compress&cs=tinysrgb&w=800',
            colSpan: 1
          }
        ]
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
          'kinesiology.benefits.posture',
          'kinesiology.benefits.stress',
          'kinesiology.benefits.energy',
          'services.kinesiology.shortDesc'
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
