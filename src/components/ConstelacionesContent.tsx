'use client';

import React from 'react';
import { StarIcon } from '@/lib/icons';
import CoreServiceTemplate from '@/components/templates/CoreServiceTemplate';

export default function ConstelacionesContent() {
  return (
    <CoreServiceTemplate
      serviceId="constelaciones"
      hero={{
        titleKey: 'services.constelaciones.title',
        subtitleKey: 'services.constelaciones.description',
        badgeKey: 'services.constelaciones.subtitle',
        icon: StarIcon,
        backgroundImage: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=1440'
      }}
      bentoGrid={{
        titleKey: 'constelaciones.bento.title',
        subtitleKey: 'constelaciones.bento.subtitle',
        items: [
          {
            titleKey: 'constelaciones.bento.laws.title',
            descriptionKey: 'constelaciones.bento.laws.desc',
            detailsKey: 'constelaciones.bento.laws.details',
            colSpan: 2
          },
          {
            titleKey: 'constelaciones.bento.loyalties.title',
            descriptionKey: 'constelaciones.bento.loyalties.desc',
            detailsKey: 'constelaciones.bento.loyalties.details',
            colSpan: 1
          },
          {
            titleKey: 'constelaciones.bento.healing.title',
            descriptionKey: 'constelaciones.bento.healing.desc',
            detailsKey: 'constelaciones.bento.healing.details',
            colSpan: 1
          },
          {
            titleKey: 'constelaciones.bento.resolution.title',
            descriptionKey: 'constelaciones.bento.resolution.desc',
            detailsKey: 'constelaciones.bento.resolution.details',
            colSpan: 2
          }
        ]
      }}
      features={{
        titleKey: 'services.constelaciones.subtitle',
        subtitleKey: 'services.constelaciones.description',
        benefits: [
          'services.benefits.stress',
          'services.benefits.energy',
          'services.benefits.relaxation',
          'services.benefits.blockages'
        ]
      }}
      pricing={{
        titleKey: 'services.pricing.title',
        subtitleKey: 'services.pricing.subtitle',
        options: [
          { duration: 90, price: 90 }
        ]
      }}
    />
  );
}
