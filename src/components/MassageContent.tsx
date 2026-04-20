'use client';

import React from 'react';
import { FavouriteIcon } from '@/lib/icons';
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
        icon: FavouriteIcon,
        backgroundImage: 'https://images.pexels.com/photos/3997983/pexels-photo-3997983.jpeg?auto=compress&cs=tinysrgb&w=1440',
        featureImage: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1440'
      }}
      bentoGrid={{
        titleKey: 'massage.bento.title',
        subtitleKey: 'massage.bento.subtitle',
        items: [
          {
            titleKey: 'massage.techniques.deepTissue',
            descriptionKey: 'massage.techniques.deepTissue.desc',
            detailsKey: 'massage.techniques.deepTissue.details',
            icon: 'Activity',
            color: 'orange',
            size: 'large'
          },
          {
            titleKey: 'massage.techniques.recovery',
            descriptionKey: 'massage.techniques.recovery.desc',
            detailsKey: 'massage.techniques.recovery.details',
            icon: 'Zap',
            color: 'blue',
            size: 'medium'
          },
          {
            titleKey: 'massage.techniques.relaxation',
            descriptionKey: 'massage.techniques.relaxation.desc',
            detailsKey: 'massage.techniques.relaxation.details',
            icon: 'Wind',
            color: 'green',
            size: 'medium'
          }
        ]
      }}
      features={{
        titleKey: 'massage.page.benefitsTitle',
        subtitleKey: 'massage.page.benefitsSubtitle',
        benefits: [
          'massage.benefits.pain',
          'massage.benefits.circulation',
          'massage.benefits.wellbeing',
          'services.benefits.relaxation'
        ]
      }}
      pricing={{
        titleKey: 'massage.page.durationsTitle',
        subtitleKey: 'massage.page.durationsSubtitle',
        options: [
          { duration: 60, price: 70, descriptionKey: 'massage.page.duration60' },
          { duration: 90, price: 90, descriptionKey: 'massage.page.duration90' },
          { duration: 120, price: 140, descriptionKey: 'massage.page.duration120' }
        ]
      }}
      stats={{ clients: '800+', years: '10+', satisfaction: '99%', sessions: '6000+' }}
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
          },
          {
            name: 'Laura P.',
            text: t('massage.testimonial.3.text'),
            rating: 5
          },
          {
            name: 'Carles V.',
            text: t('massage.testimonial.4.text'),
            rating: 5
          }
        ]
      }}
    />
  );
}
