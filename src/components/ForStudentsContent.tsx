'use client';

import React from 'react';
import { Brain01Icon } from '@/lib/icons';
import PersonalizedServiceTemplate from '@/components/templates/PersonalizedServiceTemplate';

export default function ForStudentsContent() {
  return (
    <PersonalizedServiceTemplate
      serviceId="students"
      hero={{
        titleKey: 'personalized.students.hero.title',
        subtitleKey: 'personalized.students.hero.description',
        icon: Brain01Icon,
        backgroundImage: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1440'
      }}
      benefits={{
        titleKey: 'personalized.students.understanding.title',
        subtitleKey: 'personalized.students.understanding.description1',
        items: [
          'personalized.students.understanding.description1',
          'personalized.students.understanding.description2'
        ]
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
      showMethodology={false}
    />
  );
}
