'use client';

import React from 'react';
import { UserGroupIcon } from '@/lib/icons';
import PersonalizedServiceTemplate from '@/components/templates/PersonalizedServiceTemplate';

export default function ForParentsContent() {
  return (
    <PersonalizedServiceTemplate
      serviceId="parents"
      hero={{
        titleKey: 'personalized.parents.hero.title',
        subtitleKey: 'personalized.parents.hero.description',
        icon: UserGroupIcon,
        backgroundImage: 'https://images.pexels.com/photos/1683975/pexels-photo-1683975.jpeg?auto=compress&cs=tinysrgb&w=1440'
      }}
      benefits={{
        titleKey: 'personalized.parents.understanding.title',
        subtitleKey: 'personalized.parents.understanding.description1',
        items: [
          'personalized.parents.understanding.description1',
          'personalized.parents.understanding.description2'
        ]
      }}
      recommendedServices={[
        {
          titleKey: 'personalized.parents.services.emotionalKinesiology.title',
          descriptionKey: 'personalized.parents.services.emotionalKinesiology.description',
          href: '/services/kinesiology',
          duration: '60-90 min'
        },
        {
          titleKey: 'personalized.parents.services.relaxingMassage.title',
          descriptionKey: 'personalized.parents.services.relaxingMassage.description',
          href: '/services/massage',
          duration: '60-90 min'
        }
      ]}
      showMethodology={false}
    />
  );
}
