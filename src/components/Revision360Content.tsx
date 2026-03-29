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
    <div className="min-h-screen bg-[#09090f]">
      <SEOUpdater
        titleKey="revision360.seo.title"
        descriptionKey="revision360.seo.description"
        keywordsKey="revision360.seo.keywords"
      />
      <HeroSection />

      {/* Dark → Light transition */}
      <div className="h-16 bg-gradient-to-b from-[#09090f] to-[#f5f5f7]" aria-hidden="true" />

      <Why360Section />
      <ServiceSection />

      {/* Light → Dark transition */}
      <div className="h-16 bg-gradient-to-b from-white to-[#09090f]" aria-hidden="true" />

      <VariantsSection />

      {/* Dark → Light transition */}
      <div className="h-16 bg-gradient-to-b from-[#09090f] to-white" aria-hidden="true" />

      <BenefitsSection />
      <FinalInvitationSection />
    </div>
  );
}
