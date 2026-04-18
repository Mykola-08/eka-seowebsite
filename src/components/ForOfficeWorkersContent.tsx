'use client';

import React from 'react';
import { ComputerIcon } from '@/lib/icons';
import PersonalizedServiceTemplate from '@/components/templates/PersonalizedServiceTemplate';

export default function ForOfficeWorkersContent() {
  return (
    <PersonalizedServiceTemplate
      serviceId="office-workers"
      hero={{
        titleKey: 'personalized.officeWorkers.hero.title',
        subtitleKey: 'personalized.officeWorkers.hero.description',
        icon: ComputerIcon,
        backgroundImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1440'
      }}
      benefits={{
        titleKey: 'personalized.officeWorkers.understanding.title',
        subtitleKey: 'personalized.officeWorkers.understanding.description1',
        items: [
          'personalized.officeWorkers.understanding.description1',
          'personalized.officeWorkers.understanding.description2'
        ]
      }}
      recommendedServices={[
        {
          titleKey: 'personalized.officeWorkers.services.therapeuticMassage.title',
          descriptionKey: 'personalized.officeWorkers.services.therapeuticMassage.description',
          href: '/services/massage',
          duration: '60-90 min'
        },
        {
          titleKey: 'personalized.officeWorkers.services.feldenkrais.title',
          descriptionKey: 'personalized.officeWorkers.services.feldenkrais.description',
          href: '/services/kinesiology',
          duration: '60 min'
        }
      ]}
    />
  );
}
