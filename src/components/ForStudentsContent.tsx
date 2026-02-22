'use client';

import React from 'react';
import { Brain } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import PersonalizedServiceTemplate from '@/components/templates/PersonalizedServiceTemplate';

export default function ForStudentsContent() {
  const { t } = useLanguage();

  const benefits = [
    t('personalized.students.benefit1'),
    t('personalized.students.benefit2'),
    t('personalized.students.benefit3'),
    t('personalized.students.benefit4')
  ];

  return (
    <PersonalizedServiceTemplate
      serviceId="students"
      translationKey="personalized.students"
      Icon={Brain}
      seoKeys={{
        title: 'seo.students.title',
        description: 'seo.students.description',
        keywords: 'seo.students.keywords'
      }}
      recommendedServices={[
        {
          titleKey: 'personalized.students.services.kinesiologyStress.title',
          descriptionKey: 'personalized.students.services.kinesiologyStress.description',
          href: '/services/kinesiology',
          duration: '60 min'
        },
        {
          titleKey: 'personalized.students.services.relaxingMassage.title',
          descriptionKey: 'personalized.students.services.relaxingMassage.description',
          href: '/services/massage',
          duration: '60-90 min'
        }
      ]}
      benefits={benefits}
      showMethodology={true}
    />
  );
}
