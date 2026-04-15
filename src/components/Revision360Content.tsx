'use client';

import HeroSection from '@/components/revision360/HeroSection';
import Why360Section from '@/components/revision360/Why360Section';
import ServiceSection from '@/components/revision360/ServiceSection';
import VariantsSection from '@/components/revision360/VariantsSection';
import BenefitsSection from '@/components/revision360/BenefitsSection';
import FinalInvitationSection from '@/components/revision360/FinalInvitationSection';
import SEOUpdater from '@/components/SEOUpdater';

export default function Revision360Content() {
  return (
    <div className="min-h-screen bg-background">
      <SEOUpdater
        titleKey="revision360.seo.title"
        descriptionKey="revision360.seo.description"
        keywordsKey="revision360.seo.keywords"
      />
      <HeroSection />

      {/* Dark → Light transition */}
      <div className="h-16 bg-linear-to-b from-background to-muted" aria-hidden="true" />

      <Why360Section />
      <ServiceSection />

      {/* Light → Dark transition */}
      <div className="h-16 bg-linear-to-b from-white to-background" aria-hidden="true" />

      <VariantsSection />

      {/* Dark → Light transition */}
      <div className="h-16 bg-linear-to-b from-background to-white" aria-hidden="true" />

      <BenefitsSection />
      <FinalInvitationSection />
    </div>
  );
}
