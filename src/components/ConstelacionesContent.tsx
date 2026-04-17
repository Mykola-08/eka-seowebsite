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
          { duration: 90, price: 80 },
          { duration: 120, price: 100 }
        ]
      }}
      seoKeys={{
        title: 'seo.constelaciones.title',
        description: 'seo.constelaciones.description',
        keywords: 'seo.constelaciones.keywords'
      }}
    />
  );
}
