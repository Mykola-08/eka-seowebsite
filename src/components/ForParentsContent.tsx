'use client';

import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { UserGroupIcon } from '@hugeicons/core-free-icons';
import PersonalizedServiceTemplate from '@/components/templates/PersonalizedServiceTemplate';

export default function ForParentsContent() {
  return (
    <PersonalizedServiceTemplate
      serviceId="parents"
      translationKey="personalized.parents"
      Icon={UserGroupIcon}
      seoKeys={{
        title: 'seo.parents.title',
        description: 'seo.parents.description',
        keywords: 'seo.parents.keywords'
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
