'use client';

import React from 'react';
import { MusicNote01Icon } from '@/lib/icons';
import PersonalizedServiceTemplate from '@/components/templates/PersonalizedServiceTemplate';

export default function ForMusiciansContent() {
  return (
    <PersonalizedServiceTemplate
      serviceId="musicians"
      hero={{
        titleKey: 'personalized.musicians.hero.title',
        subtitleKey: 'personalized.musicians.hero.description',
        icon: MusicNote01Icon,
        backgroundImage: 'https://images.pexels.com/photos/164936/pexels-photo-164936.jpeg?auto=compress&cs=tinysrgb&w=1440'
      }}
      benefits={{
        titleKey: 'personalized.musicians.understanding.title',
        subtitleKey: 'personalized.musicians.understanding.description1',
        items: [
          'personalized.musicians.understanding.description1',
          'personalized.musicians.understanding.description2'
        ]
      }}
      recommendedServices={[
        {
          titleKey: 'personalized.musicians.services.feldenkraisExpression.title',
          descriptionKey: 'personalized.musicians.services.feldenkraisExpression.description',
          href: '/services/kinesiology',
          duration: '60-90 min'
        },
        {
          titleKey: 'personalized.musicians.services.kinesiologyPerformance.title',
          descriptionKey: 'personalized.musicians.services.kinesiologyPerformance.description',
          href: '/services/kinesiology',
          duration: '60 min'
        }
      ]}
    />
  );
}
