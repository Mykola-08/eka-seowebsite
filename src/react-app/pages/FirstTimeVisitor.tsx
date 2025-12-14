import SEOOptimized from '@/react-app/components/SEOOptimized';
import PersonalizedOnboarding from '@/react-app/components/PersonalizedOnboarding';

export default function FirstTimeVisitor() {
  return (
    <SEOOptimized
      title="No saps què triar? - Troba el teu servei ideal a EKA Balance"
      description="Sistema personalitzat intel·ligent per descobrir el servei de teràpia holística perfecte per a les teves necessitats específiques. Recomanacions empàtiques basades en qui ets i què busques."
      keywords="no sé què triar, formulari personalitzat, recomanacions teràpia, servei ideal, Barcelona, onboarding intel·ligent"
      url="https://ekabalance.com/primer-cop"
    >
      <PersonalizedOnboarding />
    </SEOOptimized>
  );
}
