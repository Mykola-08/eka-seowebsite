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
    <div className="min-h-screen bg-secondary">
      <SEOUpdater 
        titleKey="revision360.seo.title"
        descriptionKey="revision360.seo.description"
        keywordsKey="revision360.seo.keywords"
      />
      <HeroSection />
      <Why360Section />
      <ServiceSection />
      <VariantsSection />
      <BenefitsSection />
      <FinalInvitationSection />
    </div>
  );
}
