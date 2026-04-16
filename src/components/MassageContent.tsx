'use client';

import React from 'react';
import { Heart } from '@/lib/icons';
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
        icon: FavouriteIcon
      }}
      bentoGrid={{
        titleKey: 'massage.bento.title',
        subtitleKey: 'massage.bento.subtitle',
        items: [
          {
            titleKey: 'massage.techniques.deepTissue',
            descriptionKey: 'massage.techniques.deepTissue.desc',
            detailsKey: 'massage.techniques.deepTissue.details',
            image: 'https://images.pexels.com/photos/3760262/pexels-photo-3760262.jpeg?auto=compress&cs=tinysrgb&w=1200',
            colSpan: 2
          },
          {
            titleKey: 'massage.techniques.recovery',
            descriptionKey: 'massage.techniques.recovery.desc',
            detailsKey: 'massage.techniques.recovery.details',
            image: 'https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=800',
            colSpan: 1
          },
          {
            titleKey: 'massage.techniques.relaxation',
            descriptionKey: 'massage.techniques.relaxation.desc',
            detailsKey: 'massage.techniques.relaxation.details',
            image: 'https://images.pexels.com/photos/3865803/pexels-photo-3865803.jpeg?auto=compress&cs=tinysrgb&w=1200',
            colSpan: 3
          }
        ]
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
          'massage.benefits.circulation',
          'massage.benefits.wellbeing',
          'services.benefits.relaxation'
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
