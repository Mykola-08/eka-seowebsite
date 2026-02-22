'use client';

import React from 'react';
import { Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import PersonalizedServiceTemplate from '@/components/templates/PersonalizedServiceTemplate';

export default function ForParentsContent() {
  const { t } = useLanguage();

  const benefits = [
    t('personalized.parents.benefit1'),
    t('personalized.parents.benefit2'),
    t('personalized.parents.benefit3'),
    t('personalized.parents.benefit4')
  ];

  return (
    <PersonalizedServiceTemplate
      serviceId="parents"
      translationKey="personalized.parents"
      Icon={Users}
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
      benefits={benefits}
      showMethodology={true}
    />
  );
}
