'use client';

import React from 'react';
import { Brain01Icon } from '@/lib/icons';
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
        icon: Brain01Icon,
        backgroundImage: 'https://images.pexels.com/photos/4506105/pexels-photo-4506105.jpeg?auto=compress&cs=tinysrgb&w=1440',
        featureImage: 'https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&w=1440'
      }}
      bentoGrid={{
        titleKey: 'kinesiology.page.benefitsTitle',
        subtitleKey: 'kinesiology.page.benefitsSubtitle',
        items: [
          {
            titleKey: 'services.kinesiology.subtitle',
            descriptionKey: 'kinesiologia.bento.structural.desc',
            detailsKey: 'services.kinesiology.description',
            icon: 'Activity',
            color: 'blue',
            size: 'large'
          },
          {
            titleKey: 'kinesiology.benefits.posture',
            descriptionKey: 'kinesiologia.bento.posture.desc',
            detailsKey: 'services.kinesiology.description',
            icon: 'Zap',
            color: 'green',
            size: 'medium'
          },
          {
            titleKey: 'kinesiology.benefits.stress',
            descriptionKey: 'kinesiologia.bento.stress.desc',
            detailsKey: 'services.kinesiology.description',
            icon: 'Heart',
            color: 'purple',
            size: 'medium'
          },
          {
            titleKey: 'kinesiology.benefits.energy',
            descriptionKey: 'kinesiologia.bento.energy.desc',
            detailsKey: 'services.kinesiology.description',
            icon: 'Brain',
            color: 'orange',
            size: 'large'
          }
        ]
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
        titleKey: 'kinesiologia.page.durationsTitle',
        subtitleKey: 'kinesiologia.page.durationsSubtitle',
        options: [
          { duration: 60, price: 70, descriptionKey: 'kinesiologia.page.duration60' },
          { duration: 90, price: 90, descriptionKey: 'kinesiologia.page.duration90' }
        ]
      }}
      stats={{ clients: '600+', years: '10+', satisfaction: '97%', sessions: '4500+' }}
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
          },
          {
            name: 'Elena Costa',
            text: t('kinesiology.testimonial.3.text'),
            rating: 5
          },
          {
            name: 'Pau Gómez',
            text: t('kinesiology.testimonial.4.text'),
            rating: 5
          }
        ]
      }}
    />
  );
}
