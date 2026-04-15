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
  methodologyTitle: string;
  methodologyText: string;
  methodologyIcon: any;
  testimonials: Testimonial[];
  recommendedServices: string[]; // IDs of services in SERVICES_DATA or PERSONALIZED_SERVICES_DATA
}

export const FUNNEL_DATA: Record<ProblemState, FunnelContent> = {
  back_pain: {
    id: 'back_pain',
    label: 'chronic back or neck pain',
    heroHeadline: 'Stop Living with Back Pain.',
    heroSubheadline: 'Relieve tension and restore your body\'s natural mobility with targeted, professional care.',
    methodologyTitle: 'Targeting the Root of Your Pain',
    methodologyText: 'Physical pain often stems from deep-rooted tension and postural imbalances. Through advanced manual techniques and deep tissue massage, we release tight muscles and restore correct alignment.',
    methodologyIcon: BodyPartMuscleIcon,
    recommendedServices: ['massatge', 'for-office-workers', 'revisio360'],
    testimonials: [
      {
        id: 'bp1',
        name: 'Carlos M.',
        initials: 'CM',
        text: '"My lower back pain disappeared after just two sessions. I had been suffering for months, and Elena knew exactly where the problem was. Magic hands!"'
      },
      {
        id: 'bp2',
        name: 'Anna R.',
        initials: 'AR',
        text: '"The neck and shoulder tension from working at a desk was unbearable. The massage therapy here completely transformed my daily comfort and focus."'
      }
    ]
  },
  headaches: {
    id: 'headaches',
    label: 'frequent headaches or migraines',
    heroHeadline: 'Reclaim Clear, Pain-Free Days.',
    heroSubheadline: 'Address the muscular tension and stress triggers causing your debilitating headaches.',
    methodologyTitle: 'Relieving Cranial Tension',
    methodologyText: 'Headaches and migraines are frequently caused by cervical stiffness, jaw tension, or overloaded stress responses. We use precise muscle release and kinesiology to relieve the pressure in your head and neck.',
    methodologyIcon: BrainIcon,
    recommendedServices: ['massatge', 'kinesiologia', 'revisio360'],
    testimonials: [
      {
        id: 'h1',
        name: 'Laura B.',
        initials: 'LB',
        text: '"I used to get migraines weekly. After a few sessions focusing on my neck and shoulder tension, they have practically vanished."'
      },
      {
        id: 'h2',
        name: 'Joan P.',
        initials: 'JP',
        text: '"Elena identified that my jaw and stress levels were triggering my headaches. The combination of massage and kinesiology was the perfect solution."'
      }
    ]
  },
  digestion: {
    id: 'digestion',
    label: 'digestive issues or bloating',
    heroHeadline: 'Heal Your Gut. Feel Lighter.',
    heroSubheadline: 'Find the nutritional balance and stress reduction your digestive system needs to function perfectly.',
    methodologyTitle: 'Restoring Digestive Harmony',
    methodologyText: 'Your gut health is deeply connected to your emotional state and nutrition. We create personalized eating adjustments and use kinesiology to reduce the inflammation and stress impacting your digestion.',
    methodologyIcon: AppleIcon,
    recommendedServices: ['nutritio', 'kinesiologia', 'revisio360'],
    testimonials: [
      {
        id: 'd1',
        name: 'Elena C.',
        initials: 'EC',
        text: '"Making small changes to my diet based on Elena\'s advice completely fixed my daily bloating. I didn\'t know I could feel this light."'
      },
      {
        id: 'd2',
        name: 'Marc T.',
        initials: 'MT',
        text: '"It wasn\'t just what I ate, it was how my body handled stress. The holistic approach here settled my stomach issues permanently."'
      }
    ]
  },
  sleep: {
    id: 'sleep',
    label: 'improving my sleep quality',
    heroHeadline: 'Finally Get the Rest You Deserve.',
    heroSubheadline: 'Calm your overactive nervous system and prepare your body for deep, restorative sleep.',
    methodologyTitle: 'Resetting Your Sleep Cycle',
    methodologyText: 'Insomnia and poor sleep often mean your nervous system is stuck in fight-or-flight mode. We help you unwire these stress responses and relax muscular tension to help you sleep deeply again.',
    methodologyIcon: Moon01Icon,
    recommendedServices: ['kinesiologia', 'massatge', 'revisio360'],
    testimonials: [
      {
        id: 's1',
        name: 'Sofia V.',
        initials: 'SV',
        text: '"For years, my mind would race at night. The kinesiology sessions helped me release that anxiety, and now I actually sleep through the night."'
      },
      {
        id: 's2',
        name: 'David L.',
        initials: 'DL',
        text: '"Physical relaxation before bed was impossible until I started getting these targeted massages to release built-up daytime stress."'
      }
    ]
  },
  stress_anxiety: {
    id: 'stress_anxiety',
    label: 'constant stress and anxiety',
    heroHeadline: 'Relieve Stress and Find Inner Peace.',
    heroSubheadline: 'Clear emotional blocks and calm your nervous system using specialized kinesiology.',
    methodologyTitle: 'Releasing Emotional Blocks',
    methodologyText: 'Stress and anxiety manifest physically. Using Kinesiology, we identify and release the subconscious emotional blocks that keep your nervous system in a state of constant tension.',
    methodologyIcon: BrainIcon,
    recommendedServices: ['kinesiologia', 'revisio360'],
    testimonials: [
      {
        id: 'sa1',
        name: 'Isabel G.',
        initials: 'IG',
        text: '"I finally feel emotionally balanced. The sessions helped me release anxiety that I didn\'t even consciously realize I was holding on to."'
      },
      {
        id: 'sa2',
        name: 'Marta S.',
        initials: 'MS',
        text: '"This therapy goes way beyond traditional psychology. It actually clears the physical sensation of stress from your body. Life-changing."'
      }
    ]
  },
  fatigue: {
    id: 'fatigue',
    label: 'low energy or constant fatigue',
    heroHeadline: 'Regain Your Vitality and Energy.',
    heroSubheadline: 'Optimize your nutrition and clear energy blocks to overcome daily fatigue.',
    methodologyTitle: 'Fueling Your Body Right',
    methodologyText: 'Low energy is often a sign of nutritional imbalances or chronic underlying stress. We restore your natural vitality with realistic nutrition tweaks and energy-balancing kinesiology.',
    methodologyIcon: FlashIcon,
    recommendedServices: ['nutritio', 'kinesiologia', 'revisio360'],
    testimonials: [
      {
        id: 'f1',
        name: 'Pol R.',
        initials: 'PR',
        text: '"I was exhausted by 3 PM every day. Elena helped me identify the nutritional gaps and stress factors holding me back. My energy is totally stable now."'
      },
      {
        id: 'f2',
        name: 'Ana M.',
        initials: 'AM',
        text: '"A realistic plan that fit my lifestyle. My digestion is perfect and my energy levels have never been higher."'
      }
    ]
  },
  posture_office: {
    id: 'posture_office',
    label: 'stiffness from sitting at a desk',
    heroHeadline: 'Undo the Damage of Desk Work.',
    heroSubheadline: 'Relieve posture-induced stiffness and protect your long-term mobility.',
    methodologyTitle: 'Decompressing Office Posture',
    methodologyText: 'Sitting for hours locks your body into unnatural positions, shortening muscles and compressing joints. We use specific massage techniques to open up your chest, release your neck, and relieve your lower back.',
    methodologyIcon: BodyPartMuscleIcon,
    recommendedServices: ['for-office-workers', 'massatge'],
    testimonials: [
      {
        id: 'po1',
        name: 'Jordi F.',
        initials: 'JF',
        text: '"As a programmer, my shoulders were permanently hunched. The targeted back and neck work here completely opened up my posture."'
      },
      {
        id: 'po2',
        name: 'Silvia P.',
        initials: 'SP',
        text: '"I no longer leave the office feeling stiff as a board. Elena\'s approach to office-related pain is exactly what my body needed."'
      }
    ]
  },
  sports_recovery: {
    id: 'sports_recovery',
    label: 'sports injuries or slow recovery',
    heroHeadline: 'Recover Faster. Perform Better.',
    heroSubheadline: 'Keep your body operating at peak performance and prevent re-injury.',
    methodologyTitle: 'Accelerating Muscle Recovery',
    methodologyText: 'Athletic bodies need specialized care. We break down scar tissue, increase blood flow to overworked muscles, and restore optimal joint mechanics so you can get back to training pain-free.',
    methodologyIcon: Activity01Icon,
    recommendedServices: ['for-athletes', 'massatge', 'kinesiologia'],
    testimonials: [
      {
        id: 'sr1',
        name: 'Alex V.',
        initials: 'AV',
        text: '"I was struggling with a recurring calf strain. The deep tissue work and biomechanical adjustments got me back to running without pain."'
      },
      {
        id: 'sr2',
        name: 'Nuria C.',
        initials: 'NC',
        text: '"My recovery time has halved. Elena understands exactly how to address sports-induced tightness and improve flexibility."'
      }
    ]
  },
  emotional_block: {
    id: 'emotional_block',
    label: 'feeling emotionally blocked or stuck',
    heroHeadline: 'Break Free from Emotional Blocks.',
    heroSubheadline: 'Release trapped emotions and trauma that are preventing you from moving forward.',
    methodologyTitle: 'Unlocking Emotional Freedom',
    methodologyText: 'Sometimes we feel physically fine but emotionally stagnant. Kinesiology bypasses the conscious mind to identify and gently release the suppressed emotions that keep you repeating unhelpful patterns.',
    methodologyIcon: BrainIcon,
    recommendedServices: ['kinesiologia', 'revisio360'],
    testimonials: [
      {
        id: 'eb1',
        name: 'Clara T.',
        initials: 'CT',
        text: '"I couldn\'t explain why I felt so stuck in my life. The kinesiology uncovered historical stress I didn\'t know was there. I feel incredibly light now."'
      },
      {
        id: 'eb2',
        name: 'Oriol M.',
        initials: 'OM',
        text: '"A transformative experience. It\'s amazing how releasing a subconscious block immediately changes how you feel and act."'
      }
    ]
  },
  broader: {
    id: 'broader',
    label: 'none of these completely match my problem',
    heroHeadline: 'Your Body is Unique. Your Care Should Be Too.',
    heroSubheadline: 'Book a full assessment to find exactly what your body and mind need to heal.',
    methodologyTitle: 'The 360° Comprehensive Revision',
    methodologyText: 'When the issue isn\'t clear, or it\'s a mix of many symptoms, our thorough 360 Revision looks at every aspect—structural, chemical, and emotional—to create a completely tailored roadmap for your recovery.',
    methodologyIcon: IdeaIcon,
    recommendedServices: ['revisio360', 'massatge', 'kinesiologia', 'nutritio'],
    testimonials: [
      {
        id: 'br1',
        name: 'Marc T.',
        initials: 'MT',
        text: '"I had a mix of digestive issues, back pain, and poor sleep. The 360 Revision connected all the dots. Having a clear, structured plan was exactly what I needed."'
      },
      {
        id: 'br2',
        name: 'Isabel G.',
        initials: 'IG',
        text: '"I didn\'t know where to start, but Elena\'s assessment was incredibly thorough. She identified issues I didn\'t even mention. The best investment in my health."'
      }
    ]
  }
};
