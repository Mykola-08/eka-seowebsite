'use client';

import React from 'react';
import { PaintBoardIcon } from '@/lib/icons';

import PersonalizedServiceTemplate from '@/components/templates/PersonalizedServiceTemplate';

export default function ArtistsContent() {


  return (
    <PersonalizedServiceTemplate
      serviceId="artists"
      hero={{
        titleKey: "personalized.artists.hero.title",
        subtitleKey: "personalized.artists.hero.description",
        icon: PaintBoardIcon,
        backgroundImage: "https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&w=800"
      }}
      benefits={{
        titleKey: "personalized.artists.benefits.title",
        subtitleKey: "personalizedServices.artists.desc",
        items: [
          "personalized.artists.benefits.benefit1",
          "personalized.artists.benefits.benefit2",
          "personalized.artists.benefits.benefit3"
        ]
      }}
      recommendedServices={[
        {
          titleKey: 'artists.session.title', // Reusing existing key
          descriptionKey: 'artists.session.cta', // Reusing
          href: '/booking',
          duration: '60 min'
        }
      ]}
      showMethodology={true}
    />
  );
}
