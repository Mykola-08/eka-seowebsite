import { HugeiconsIcon } from '@hugeicons/react';
import { 
  BodyPartMuscleIcon, 
  BrainIcon, 
  FirstAidKitIcon, 
  IdeaIcon, 
  AppleIcon,
  Moon01Icon,
  Activity01Icon,
  FlashIcon
} from '@hugeicons/core-free-icons';

export type ProblemState = 
  | 'back_pain'
  | 'headaches'
  | 'digestion'
  | 'sleep'
  | 'stress_anxiety'
  | 'fatigue'
  | 'posture_office'
  | 'sports_recovery'
  | 'emotional_block'
  | 'broader';

export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  text: string;
}

export interface FunnelContent {
  id: ProblemState;
  label: string;
  heroHeadline: string;
  heroSubheadline: string;
  transformation: string;
  authoritativeMethod: string;
  methodologyTitle: string;
  methodologyText: string;
  methodologyIcon: any;
  testimonials: Testimonial[];
  recommendedServices: string[];
}

export const FUNNEL_DATA: Record<ProblemState, FunnelContent> = {
  back_pain: {
    id: 'back_pain',
    label: 'funnel.back_pain.label',
    heroHeadline: 'funnel.back_pain.heroHeadline',
    heroSubheadline: 'funnel.back_pain.heroSubheadline',
    transformation: 'funnel.back_pain.transformation',
    authoritativeMethod: 'funnel.back_pain.authoritativeMethod',
    methodologyTitle: 'funnel.back_pain.methodologyTitle',
    methodologyText: 'funnel.back_pain.methodologyText',
    methodologyIcon: BodyPartMuscleIcon,
    recommendedServices: ['massatge', 'for-office-workers', 'revisio360'],      
    testimonials: [
      { id: 'bp1', name: 'Carlos M.', initials: 'CM', text: 'funnel.back_pain.t1.text' },
      { id: 'bp2', name: 'Anna R.', initials: 'AR', text: 'funnel.back_pain.t2.text' }
    ]
  },
  headaches: {
    id: 'headaches',
    label: 'funnel.headaches.label',
    heroHeadline: 'funnel.headaches.heroHeadline',
    heroSubheadline: 'funnel.headaches.heroSubheadline',
    transformation: 'funnel.headaches.transformation',
    authoritativeMethod: 'funnel.headaches.authoritativeMethod',
    methodologyTitle: 'funnel.headaches.methodologyTitle',
    methodologyText: 'funnel.headaches.methodologyText',
    methodologyIcon: BrainIcon,
    recommendedServices: ['massatge', 'kinesiologia', 'revisio360'],
    testimonials: [
      { id: 'h1', name: 'Laura B.', initials: 'LB', text: 'funnel.headaches.t1.text' },
      { id: 'h2', name: 'Joan P.', initials: 'JP', text: 'funnel.headaches.t2.text' }
    ]
  },
  digestion: {
    id: 'digestion',
    label: 'funnel.digestion.label',
    heroHeadline: 'funnel.digestion.heroHeadline',
    heroSubheadline: 'funnel.digestion.heroSubheadline',
    transformation: 'funnel.digestion.transformation',
    authoritativeMethod: 'funnel.digestion.authoritativeMethod',
    methodologyTitle: 'funnel.digestion.methodologyTitle',
    methodologyText: 'funnel.digestion.methodologyText',
    methodologyIcon: AppleIcon,
    recommendedServices: ['nutritio', 'kinesiologia', 'revisio360'],
    testimonials: [
      { id: 'd1', name: 'Elena C.', initials: 'EC', text: 'funnel.digestion.t1.text' },
      { id: 'd2', name: 'Marc T.', initials: 'MT', text: 'funnel.digestion.t2.text' }
    ]
  },
  sleep: {
    id: 'sleep',
    label: 'funnel.sleep.label',
    heroHeadline: 'funnel.sleep.heroHeadline',
    heroSubheadline: 'funnel.sleep.heroSubheadline',
    transformation: 'funnel.sleep.transformation',
    authoritativeMethod: 'funnel.sleep.authoritativeMethod',
    methodologyTitle: 'funnel.sleep.methodologyTitle',
    methodologyText: 'funnel.sleep.methodologyText',
    methodologyIcon: Moon01Icon,
    recommendedServices: ['kinesiologia', 'massatge', 'revisio360'],
    testimonials: [
      { id: 's1', name: 'Sofia V.', initials: 'SV', text: 'funnel.sleep.t1.text' },
      { id: 's2', name: 'David L.', initials: 'DL', text: 'funnel.sleep.t2.text' }
    ]
  },
  stress_anxiety: {
    id: 'stress_anxiety',
    label: 'funnel.stress_anxiety.label',
    heroHeadline: 'funnel.stress_anxiety.heroHeadline',
    heroSubheadline: 'funnel.stress_anxiety.heroSubheadline',
    transformation: 'funnel.stress_anxiety.transformation',
    authoritativeMethod: 'funnel.stress_anxiety.authoritativeMethod',
    methodologyTitle: 'funnel.stress_anxiety.methodologyTitle',
    methodologyText: 'funnel.stress_anxiety.methodologyText',
    methodologyIcon: BrainIcon,
    recommendedServices: ['kinesiologia', 'revisio360'],
    testimonials: [
      { id: 'sa1', name: 'Isabel G.', initials: 'IG', text: 'funnel.stress_anxiety.t1.text' },
      { id: 'sa2', name: 'Marta S.', initials: 'MS', text: 'funnel.stress_anxiety.t2.text' }
    ]
  },
  fatigue: {
    id: 'fatigue',
    label: 'funnel.fatigue.label',
    heroHeadline: 'funnel.fatigue.heroHeadline',
    heroSubheadline: 'funnel.fatigue.heroSubheadline',
    transformation: 'funnel.fatigue.transformation',
    authoritativeMethod: 'funnel.fatigue.authoritativeMethod',
    methodologyTitle: 'funnel.fatigue.methodologyTitle',
    methodologyText: 'funnel.fatigue.methodologyText',
    methodologyIcon: FlashIcon,
    recommendedServices: ['nutritio', 'kinesiologia', 'revisio360'],
    testimonials: [
      { id: 'f1', name: 'Pol R.', initials: 'PR', text: 'funnel.fatigue.t1.text' },
      { id: 'f2', name: 'Ana M.', initials: 'AM', text: 'funnel.fatigue.t2.text' }
    ]
  },
  posture_office: {
    id: 'posture_office',
    label: 'funnel.posture_office.label',
    heroHeadline: 'funnel.posture_office.heroHeadline',
    heroSubheadline: 'funnel.posture_office.heroSubheadline',
    transformation: 'funnel.posture_office.transformation',
    authoritativeMethod: 'funnel.posture_office.authoritativeMethod',
    methodologyTitle: 'funnel.posture_office.methodologyTitle',
    methodologyText: 'funnel.posture_office.methodologyText',
    methodologyIcon: BodyPartMuscleIcon,
    recommendedServices: ['for-office-workers', 'massatge'],
    testimonials: [
      { id: 'po1', name: 'Jordi F.', initials: 'JF', text: 'funnel.posture_office.t1.text' },
      { id: 'po2', name: 'Silvia P.', initials: 'SP', text: 'funnel.posture_office.t2.text' }
    ]
  },
  sports_recovery: {
    id: 'sports_recovery',
    label: 'funnel.sports_recovery.label',
    heroHeadline: 'funnel.sports_recovery.heroHeadline',
    heroSubheadline: 'funnel.sports_recovery.heroSubheadline',
    transformation: 'funnel.sports_recovery.transformation',
    authoritativeMethod: 'funnel.sports_recovery.authoritativeMethod',
    methodologyTitle: 'funnel.sports_recovery.methodologyTitle',
    methodologyText: 'funnel.sports_recovery.methodologyText',
    methodologyIcon: Activity01Icon,
    recommendedServices: ['for-athletes', 'massatge', 'kinesiologia'],
    testimonials: [
      { id: 'sr1', name: 'Alex V.', initials: 'AV', text: 'funnel.sports_recovery.t1.text' },
      { id: 'sr2', name: 'Nuria C.', initials: 'NC', text: 'funnel.sports_recovery.t2.text' }
    ]
  },
  emotional_block: {
    id: 'emotional_block',
    label: 'funnel.emotional_block.label',
    heroHeadline: 'funnel.emotional_block.heroHeadline',
    heroSubheadline: 'funnel.emotional_block.heroSubheadline',
    transformation: 'funnel.emotional_block.transformation',
    authoritativeMethod: 'funnel.emotional_block.authoritativeMethod',
    methodologyTitle: 'funnel.emotional_block.methodologyTitle',
    methodologyText: 'funnel.emotional_block.methodologyText',
    methodologyIcon: BrainIcon,
    recommendedServices: ['kinesiologia', 'revisio360'],
    testimonials: [
      { id: 'eb1', name: 'Clara T.', initials: 'CT', text: 'funnel.emotional_block.t1.text' },
      { id: 'eb2', name: 'Oriol M.', initials: 'OM', text: 'funnel.emotional_block.t2.text' }
    ]
  },
  broader: {
    id: 'broader',
    label: 'funnel.broader.label',
    heroHeadline: 'funnel.broader.heroHeadline',
    heroSubheadline: 'funnel.broader.heroSubheadline',
    transformation: 'funnel.broader.transformation',
    authoritativeMethod: 'funnel.broader.authoritativeMethod',
    methodologyTitle: 'funnel.broader.methodologyTitle',
    methodologyText: 'funnel.broader.methodologyText',
    methodologyIcon: IdeaIcon,
    recommendedServices: ['revisio360', 'massatge', 'kinesiologia', 'nutritio'],
    testimonials: [
      { id: 'br1', name: 'Marc T.', initials: 'MT', text: 'funnel.broader.t1.text' },
      { id: 'br2', name: 'Isabel G.', initials: 'IG', text: 'funnel.broader.t2.text' }
    ]
  }
};
