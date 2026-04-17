'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

import { type ProblemState, FUNNEL_DATA } from '@/lib/funnel-data';
import { FunnelHero } from '@/components/templates/FunnelHero';
import { AdaptiveMethodology } from '@/components/templates/AdaptiveMethodology';
import { AdaptiveServices } from '@/components/templates/AdaptiveServices';
import { FunnelReviews } from '@/components/templates/FunnelReviews';

export default function FirstTimeContent() {
  const { t } = useLanguage();
  const [problem, setProblem] = useState<ProblemState>('back_pain');

  return (
    <main className="bg-background pt-24 pb-16">
      <FunnelHero currentProblem={problem} onProblemChange={setProblem} />
      <AdaptiveMethodology currentProblem={problem} />
      <AdaptiveServices currentProblem={problem} />
      <FunnelReviews testimonials={FUNNEL_DATA[problem].testimonials} />
    </main>
  );
}
