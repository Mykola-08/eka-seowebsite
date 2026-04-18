'use client';

import React from 'react';
import { FlashIcon } from '@/lib/icons';
import PersonalizedServiceTemplate from '@/components/templates/PersonalizedServiceTemplate';

export default function ForAthletesContent() {
  const recommendedServices = [
    {
      titleKey: 'personalized.athletes.services.sportsMassage.title',
      descriptionKey: 'personalized.athletes.services.sportsMassage.description',
      href: '/services/massage',
      duration: '60-90 min'
    },
    {
      titleKey: 'personalized.athletes.services.osteobalance.title',
      descriptionKey: 'personalized.athletes.services.osteobalance.description',
      href: '/services/osteobalance',
      duration: '60-90 min'
    }
  ];

  return (
    <PersonalizedServiceTemplate
      serviceId="athletes"
      hero={{
        titleKey: "personalized.athletes.hero.title",
        subtitleKey: "personalized.athletes.hero.description",
        icon: FlashIcon,
        backgroundImage: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800"
      }}
      benefits={{
        titleKey: "personalized.athletes.benefits.title",
        subtitleKey: "personalizedServices.athletes.desc",
        items: [
          "personalizedServices.athletes.benefit1",
          "personalizedServices.athletes.benefit2",
          "personalizedServices.athletes.benefit3"
        ]
      }}
      recommendedServices={recommendedServices}
    />
  );
}
