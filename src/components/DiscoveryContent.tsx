'use client';


import { useState } from 'react';
import { ClipboardList, CheckmarkCircle01Icon, Message01Icon, SparklesIcon, ArrowLeft01Icon, ArrowRight01Icon, Location01Icon, GlobeIcon, Brain01Icon, FavouriteIcon } from '@/lib/icons';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
interface FormData {
  location: string;
  description: string;
  userType: string;
  tensionAreas: string[];
  emotionalState: string;
  timeCommitment: string;
  budget: string;
}

interface Recommendation {
  service: string;
  description: string;
  price: string;
  duration: string;
  benefits: string[];
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  analysis?: {
    problem?: string;
    goal?: string;
    feeling?: string;
  };
  diagnosis?: {
    profile: string;
    symptoms: string[];
    rootCause: string;
    strategy: string;
    frequency: string;
  };
}

// Fixed Keyword Weights with Multi-language support
const KEYWORD_WEIGHTS: Record<string, { category: 'physical' | 'emotional' | 'complex', weight: number }> = {
  // Physical (High Intensity)
  'agony': { category: 'physical', weight: 5 },
  'unbearable': { category: 'physical', weight: 5 },
  'injury': { category: 'physical', weight: 4 },
  'sciatica': { category: 'physical', weight: 4 },
  'contracture': { category: 'physical', weight: 3 },
  'pain': { category: 'physical', weight: 2 },
  'ache': { category: 'physical', weight: 2 },
  'stiff': { category: 'physical', weight: 2 },
  'dolor': { category: 'physical', weight: 2 },
  'lesion': { category: 'physical', weight: 4 },
  'ciatica': { category: 'physical', weight: 4 },
  'contractura': { category: 'physical', weight: 3 },
  'боль': { category: 'physical', weight: 2 },
  'травма': { category: 'physical', weight: 4 },
  'ишиас': { category: 'physical', weight: 4 },
  // Catalan additions
  'ferida': { category: 'physical', weight: 4 },
  'lesió': { category: 'physical', weight: 4 },
  'contractura_ca': { category: 'physical', weight: 3 }, // using suffix if common word conflicts but usually handled by lowercase
  'mal': { category: 'physical', weight: 2 },

  // Emotional (High Intensity)
  'panic': { category: 'emotional', weight: 5 },
  'anxiety': { category: 'emotional', weight: 4 },
  'insomnia': { category: 'emotional', weight: 4 },
  'stress': { category: 'emotional', weight: 3 },
  'overwhelmed': { category: 'emotional', weight: 3 },
  'sad': { category: 'emotional', weight: 2 },
  'ansiedad': { category: 'emotional', weight: 4 },
  'insomnio': { category: 'emotional', weight: 4 },
  'estres': { category: 'emotional', weight: 3 },
  'agobio': { category: 'emotional', weight: 3 },
  'паника': { category: 'emotional', weight: 5 },
  'тревога': { category: 'emotional', weight: 4 },
  'бессонница': { category: 'emotional', weight: 4 },
  'стресс': { category: 'emotional', weight: 3 },
  // Catalan additions
  'pànic': { category: 'emotional', weight: 5 },
  'ansietat': { category: 'emotional', weight: 4 },
  'insomni': { category: 'emotional', weight: 4 },
  'estrès': { category: 'emotional', weight: 3 },
  'atabalat': { category: 'emotional', weight: 3 },
  'trist': { category: 'emotional', weight: 2 },

  // Complex/Integrative (High Intensity)
  'fibromyalgia': { category: 'complex', weight: 5 },
  'chronic': { category: 'complex', weight: 4 },
  'migraine': { category: 'complex', weight: 4 },
  'burnout': { category: 'complex', weight: 4 },
  'digestive': { category: 'complex', weight: 3 },
  'hormonal': { category: 'complex', weight: 3 },
  'fatigue': { category: 'complex', weight: 3 },
  'fibromialgia': { category: 'complex', weight: 5 },
  'cronico': { category: 'complex', weight: 4 },
  'migraña': { category: 'complex', weight: 4 },
  'digestivo': { category: 'complex', weight: 3 },
  'фибромиалгия': { category: 'complex', weight: 5 },
  'хронический': { category: 'complex', weight: 4 },
  'мигрень': { category: 'complex', weight: 4 },
  'выгорание': { category: 'complex', weight: 4 },
  // Catalan additions
  'crònic': { category: 'complex', weight: 4 },
  'migranya': { category: 'complex', weight: 4 },
  'fatiga': { category: 'complex', weight: 3 }
};

export default function DiscoveryContent() {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0); // 0 = Location, 1 = Description, 2 = UserType...
  const [viewMode, setViewMode] = useState<'basic' | 'advanced'>('basic');
  const [formData, setFormData] = useState<FormData>({
    location: '',
    description: '',
    userType: '',
    tensionAreas: [],
    emotionalState: '',
    timeCommitment: '',
    budget: ''
  });
  const [showRecommendation, setShowRecommendation] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');

  // Move these to functional getters or keep as memos if they depend purely on 't'
  // But since 't' is from hook, we can keep them inside or use useMemo
  // For simplicity and clarity, I'll use useMemo for large arrays
  const locations = [
    { id: 'barcelona', title: t('discovery.location.barcelona'), icon: Location01Icon },
    { id: 'rubi', title: t('discovery.location.rubi'), icon: Location01Icon },
    { id: 'online', title: t('discovery.location.online'), icon: GlobeIcon },
  ];

  const userTypes = [
    {
      id: 'mother',
      title: t('discovery.userTypes.mother.title'),
      description: t('discovery.userTypes.mother.desc'),
      type: 'emotional'
    },
    {
      id: 'woman',
      title: t('discovery.userTypes.woman.title'),
      description: t('discovery.userTypes.woman.desc'),
      type: 'emotional'
    },
    {
      id: 'regular',
      title: t('discovery.userTypes.regular.title'),
      description: t('discovery.userTypes.regular.desc'),
      type: 'mixed'
    },
    {
      id: 'office',
      title: t('discovery.userTypes.office.title'),
      description: t('discovery.userTypes.office.desc'),
      type: 'physical'
    },
    {
      id: 'athlete',
      title: t('discovery.userTypes.athlete.title'),
      description: t('discovery.userTypes.athlete.desc'),
      type: 'physical'
    }
  ];

  const tensionOptions = [
    t('discovery.tension.neck'),
    t('discovery.tension.lumbar'),
    t('discovery.tension.legs'),
    t('discovery.tension.head'),
    t('discovery.tension.full'),
    t('discovery.tension.none')
  ];

  const emotionalStates = [
    {
      id: 'stressed',
      title: t('discovery.emotional.stressed.title'),
      description: t('discovery.emotional.stressed.desc')
    },
    {
      id: 'sad',
      title: t('discovery.emotional.sad.title'),
      description: t('discovery.emotional.sad.desc')
    },
    {
      id: 'balanced',
      title: t('discovery.emotional.balanced.title'),
      description: t('discovery.emotional.balanced.desc')
    },
    {
      id: 'focus_physical',
      title: t('discovery.emotional.focus_physical.title'),
      description: t('discovery.emotional.focus_physical.desc')
    }
  ];

  const timeCommitments = [
    {
      id: 'short',
      title: t('discovery.time.short.title'),
      description: t('discovery.time.short.desc')
    },
    {
      id: 'standard',
      title: t('discovery.time.standard.title'),
      description: t('discovery.time.standard.desc')
    },
    {
      id: 'long',
      title: t('discovery.time.long.title'),
      description: t('discovery.time.long.desc')
    }
  ];

  const budgetOptions = [
    {
      id: 'basic',
      title: t('discovery.budget.basic.title'),
      description: t('discovery.budget.basic.desc')
    },
    {
      id: 'standard',
      title: t('discovery.budget.standard.title'),
      description: t('discovery.budget.standard.desc')
    },
    {
      id: 'premium',
      title: t('discovery.budget.premium.title'),
      description: t('discovery.budget.premium.desc')
    }
  ];

  const getRecommendation = (): Recommendation => {
    // 0. Online Location -> Online Service
    if (formData.location === 'online') {
      return {
        service: t('discovery.recommendation.online.service'),
        description: t('discovery.recommendation.online.desc'),
        price: '50-70€',
        duration: '1h',
        benefits: [
          t('discovery.recommendation.online.benefit1'),
          t('discovery.recommendation.online.benefit2'),
          t('discovery.recommendation.online.benefit3'),
          t('discovery.recommendation.online.benefit4')
        ],
        icon: GlobeIcon,
        color: 'blue'
      };
    }

    const desc = formData.description.toLowerCase();

    // Scoring System
    const scores = {
      manual: 0,
      emotional: 0,
      integrative: 0,
      relax: 0
    };

    // 1. Analyze Description Keywords with Weights
    Object.entries(KEYWORD_WEIGHTS).forEach(([keyword, info]) => {
      if (desc.includes(keyword)) {
        if (info.category === 'physical') scores.manual += info.weight;
        if (info.category === 'emotional') scores.emotional += info.weight;
        if (info.category === 'complex') scores.integrative += info.weight;
      }
    });

    // 2. Analyze User Type
    const selectedType = userTypes.find(obj => obj.id === formData.userType);
    if (selectedType?.type === 'physical') scores.manual += 3;
    if (selectedType?.type === 'emotional') scores.emotional += 3;
    if (selectedType?.type === 'mixed') scores.relax += 2;

    // 3. Analyze Tension Areas
    const hasPain = formData.tensionAreas.length > 0 && !formData.tensionAreas.includes(t('discovery.tension.none'));
    const fullBodyTension = formData.tensionAreas.includes(t('discovery.tension.full'));
    const headTension = formData.tensionAreas.includes(t('discovery.tension.head'));

    if (hasPain) scores.manual += 2;
    if (fullBodyTension) scores.integrative += 3;
    if (headTension) {
      scores.integrative += 2; // Head tension often relates to stress/posture complex
      scores.manual += 1;
    }

    // 4. Analyze Emotional State
    if (formData.emotionalState === 'stressed') scores.emotional += 3;
    if (formData.emotionalState === 'sad') scores.emotional += 2;
    if (formData.emotionalState === 'focus_physical') scores.manual += 2;
    if (formData.emotionalState === 'balanced') scores.relax += 2;

    // 5. Apply Constraints (Time & Budget)
    if (formData.timeCommitment === 'short' || formData.budget === 'basic') {
      scores.integrative -= 5; // Penalize complex treatments if time/budget is low
      scores.manual += 2; // Prefer manual for quick fixes
      scores.relax += 2;
    } else if (formData.timeCommitment === 'long' || formData.budget === 'premium') {
      scores.integrative += 4; // Boost integrative for premium/long sessions
      scores.emotional += 2;
    }

    // 6. Complex Interaction (Synergy)
    // If high physical AND high emotional score, boost integrative significantly
    if (scores.manual > 3 && scores.emotional > 3) {
      scores.integrative += 5;
    }

    // Determine Winner
    const maxScore = Math.max(scores.manual, scores.emotional, scores.integrative, scores.relax);

    // Dynamic Benefit Generation
    const generateBenefits = (baseBenefits: string[]) => {
      const dynamicBenefits = [...baseBenefits];

      // Add specific benefits based on inputs
      if (desc.includes('sleep') || desc.includes('insomnia') || desc.includes('dormir')) {
        dynamicBenefits[0] = t('casos.problems.sleep.results'); // "Improves deep sleep..."
      }
      if (desc.includes('migraine') || desc.includes('headache') || headTension) {
        dynamicBenefits[1] = t('casos.problems.migraines.results'); // "Reduces migraine frequency..."
      }
      if (selectedType?.id === 'athlete') {
        dynamicBenefits[2] = t('personalizedServices.athletes.result'); // "Faster recovery..."
      }
      if (selectedType?.id === 'office') {
        dynamicBenefits[2] = t('personalizedServices.officeWorkers.result'); // "Better posture..."
      }

      return dynamicBenefits.slice(0, 4); // Keep it to 4 items
    };

    // --- Analysis Logic ---
    const analysis: Recommendation['analysis'] = {};
    const diagnosis: Recommendation['diagnosis'] = {
      profile: '',
      symptoms: [],
      rootCause: '',
      strategy: '',
      frequency: ''
    };

    // 1. Problem & Symptoms
    if (formData.tensionAreas.length > 0 && !formData.tensionAreas.includes(t('discovery.tension.none'))) {
      analysis.problem = formData.tensionAreas.join(', ');
      diagnosis.symptoms = [...formData.tensionAreas];
    } else if (desc.length > 0) {
      const foundKeyword = Object.keys(KEYWORD_WEIGHTS).find(k => desc.includes(k));
      if (foundKeyword) {
        analysis.problem = foundKeyword;
        diagnosis.symptoms.push(foundKeyword);
      }
    }

    // Add keywords to symptoms
    Object.keys(KEYWORD_WEIGHTS).forEach(k => {
      if (desc.includes(k) && !diagnosis.symptoms.includes(k)) {
        diagnosis.symptoms.push(k);
      }
    });

    // 2. Goal & Profile
    if (selectedType?.id === 'athlete') analysis.goal = t('discovery.goal.athlete');
    else if (selectedType?.id === 'office') analysis.goal = t('discovery.goal.office');
    else if (formData.emotionalState === 'stressed') analysis.goal = t('discovery.goal.stress');
    else if (hasPain) analysis.goal = t('discovery.goal.pain');
    else analysis.goal = t('discovery.goal.general');

    const emotionalStateObj = emotionalStates.find(e => e.id === formData.emotionalState);
    diagnosis.profile = `${selectedType?.title || ''} • ${emotionalStateObj?.title || ''}`;

    // 3. Feeling & Root Cause
    if (formData.emotionalState === 'stressed') analysis.feeling = t('discovery.feeling.relaxed');
    else if (formData.emotionalState === 'sad') analysis.feeling = t('discovery.feeling.energized');
    else if (formData.emotionalState === 'balanced') analysis.feeling = t('discovery.feeling.balanced');
    else if (hasPain) analysis.feeling = t('discovery.feeling.painfree');
    else analysis.feeling = t('discovery.feeling.relaxed');

    // Root Cause Logic
    if (selectedType?.id === 'office' && (headTension || formData.tensionAreas.includes(t('discovery.tension.neck')))) {
      diagnosis.rootCause = t('discovery.diagnosis.cause.posture');
    } else if (selectedType?.id === 'athlete') {
      diagnosis.rootCause = t('discovery.diagnosis.cause.overload');
    } else if (formData.emotionalState === 'stressed' && (headTension || fullBodyTension)) {
      diagnosis.rootCause = t('discovery.diagnosis.cause.stress');
    } else if (formData.emotionalState === 'sad') {
      diagnosis.rootCause = t('discovery.diagnosis.cause.emotional');
    } else {
      diagnosis.rootCause = t('discovery.diagnosis.cause.metabolic');
    }

    // Strategy Logic
    if (scores.integrative >= scores.manual && scores.integrative >= scores.emotional) {
      diagnosis.strategy = t('discovery.diagnosis.strategy.rebalance');
    } else if (scores.emotional > scores.manual) {
      diagnosis.strategy = t('discovery.diagnosis.strategy.regulation');
    } else {
      diagnosis.strategy = t('discovery.diagnosis.strategy.structural');
    }

    // Frequency Logic
    if (hasPain || formData.emotionalState === 'stressed' || formData.emotionalState === 'sad') {
      diagnosis.frequency = t('discovery.diagnosis.freq.high');
    } else if (formData.emotionalState === 'balanced') {
      diagnosis.frequency = t('discovery.diagnosis.freq.low');
    } else {
      diagnosis.frequency = t('discovery.diagnosis.freq.medium');
    }

    if (maxScore === scores.integrative && scores.integrative > 0) {
      return {
        service: t('discovery.recommendation.integrative.service'),
        description: t('discovery.recommendation.integrative.desc'),
        price: '90-140€',
        duration: '90-120 min',
        benefits: generateBenefits([
          t('discovery.recommendation.integrative.benefit1'),
          t('discovery.recommendation.integrative.benefit2'),
          t('discovery.recommendation.integrative.benefit3'),
          t('discovery.recommendation.integrative.benefit4')
        ]),
        icon: SparklesIcon,
        color: 'blue',
        analysis,
        diagnosis
      };
    }

    if (maxScore === scores.emotional) {
      return {
        service: t('discovery.recommendation.emotional.service'),
        description: t('discovery.recommendation.emotional.desc'),
        price: '70€',
        duration: '1-1,5h',
        benefits: generateBenefits([
          t('discovery.recommendation.emotional.benefit1'),
          t('discovery.recommendation.emotional.benefit2'),
          t('discovery.recommendation.emotional.benefit3'),
          t('discovery.recommendation.emotional.benefit4')
        ]),
        icon: Brain01Icon,
        color: 'purple',
        analysis,
        diagnosis
      };
    }

    if (maxScore === scores.manual) {
      // Contextual Title for Manual Therapy
      let serviceTitle = t('discovery.recommendation.manual.service');
      if (selectedType?.id === 'athlete') serviceTitle += ` (${t('discovery.userTypes.athlete.title')})`;
      if (selectedType?.id === 'office') serviceTitle += ` (${t('discovery.userTypes.office.title')})`;

      return {
        service: serviceTitle,
        description: t('discovery.recommendation.manual.desc'),
        price: '60-75€',
        duration: '1-1,5h',
        benefits: generateBenefits([
          t('discovery.recommendation.manual.benefit1'),
          t('discovery.recommendation.manual.benefit2'),
          t('discovery.recommendation.manual.benefit3'),
          t('discovery.recommendation.manual.benefit4')
        ]),
        icon: FavouriteIcon,
        color: 'orange',
        analysis,
        diagnosis
      };
    }

    // Default Fallback
    return {
      service: t('discovery.recommendation.relax.service'),
      description: t('discovery.recommendation.relax.desc'),
      price: '60-80€',
      duration: '1-1,5h',
      benefits: generateBenefits([
        t('discovery.recommendation.relax.benefit1'),
        t('discovery.recommendation.relax.benefit2'),
        t('discovery.recommendation.relax.benefit3'),
        t('discovery.recommendation.relax.benefit4')
      ]),
      icon: FavouriteIcon,
      color: 'green',
      analysis,
      diagnosis
    };
  };

  const handleNext = () => {
    // Flow: 0 (Loc) -> 1 (Desc) -> 2 (User) -> 3 (Tension) -> 4 (Emotional) -> 5 (Time) -> 6 (Budget) -> 7 (Rec)
    setCurrentStep(currentStep + 1);
    if (currentStep === 6) { // 6 is budget, so +1 = 7 (Rec)
      setShowRecommendation(true);
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return formData.location !== '';
      case 1:
        return formData.description.length > 3; // Require at least 3 chars
      case 2:
        return formData.userType !== '';
      case 3:
        return formData.tensionAreas.length > 0;
      case 4:
        return formData.emotionalState !== '';
      case 5:
        return formData.timeCommitment !== '';
      case 6:
        return formData.budget !== '';
      default:
        return false;
    }
  };

  const recommendation = showRecommendation ? getRecommendation() : null;
  const Icon = recommendation?.icon;

  const handleBooking = () => {
    if (!selectedTime) {
      alert(t('booking.form.validationError'));
      return;
    }

    const message = `${t('booking.whatsapp.greeting', { name: 'Client' })}

${t('booking.whatsapp.service', { service: recommendation?.service || '' })}
${t('booking.whatsapp.comments', { comments: formData.description })}
${t('booking.whatsapp.location', { location: formData.location })}
${t('booking.whatsapp.time', { time: selectedTime })}`;

    const url = `https://wa.me/34658867133?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const getColorClasses = (color: string) => {
    const colors = {
      purple: 'bg-primary/5 border-0 text-primary',
      orange: 'bg-gold/5 border-0 text-gold-dark',
      blue: 'bg-primary/5 border-0 text-primary',
      green: 'bg-primary/5 border-0 text-primary'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  if (showRecommendation && recommendation) {
    return (
      <>
        {/* Replaced SEOHead with metadata in page.tsx */}

        <section className="py-16 sm:py-24 bg-muted/30 min-h-screen">
          <div className="max-w-4xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full mb-8">
                <CheckmarkCircle01Icon className="w-5 h-5 text-primary mr-2" />
                <span className="text-primary font-medium">{t('discovery.recommendation.badge')}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-light text-foreground mb-6 leading-tight">
                {t('discovery.recommendation.title')}
              </h1>

              <p className="text-xl text-foreground/80 mb-8">
                {t('discovery.recommendation.subtitle')}
              </p>

              {recommendation.analysis && (
                <div className="bg-primary/5 p-6 rounded-[2rem] mb-12 text-center max-w-2xl mx-auto">
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {t('discovery.analysis.intro')}
                    {recommendation.analysis.problem && (
                      <span> {t('discovery.analysis.have')} <strong className="text-primary font-semibold">{recommendation.analysis.problem}</strong></span>
                    )}
                    {recommendation.analysis.goal && (
                      <span> {t('discovery.analysis.want')} <strong className="text-primary font-semibold">{recommendation.analysis.goal}</strong></span>
                    )}
                    {recommendation.analysis.feeling && (
                      <span> {t('discovery.analysis.feel')} <strong className="text-primary font-semibold">{recommendation.analysis.feeling}</strong></span>
                    )}
                    .
                  </p>
                </div>
              )}

              {/* Toggle */}
              <div className="inline-flex bg-muted p-1 rounded-[2rem] mb-8">
                <Button
                  onClick={() => setViewMode('basic')}
                  variant={viewMode === 'basic' ? 'secondary' : 'ghost'}
                  size="sm"
                  className="rounded-full"
                >
                  {t('discovery.view.basic')}
                </Button>
                <Button
                  onClick={() => setViewMode('advanced')}
                  variant={viewMode === 'advanced' ? 'secondary' : 'ghost'}
                  size="sm"
                  className="rounded-full"
                >
                  {t('discovery.view.advanced')}
                </Button>
              </div>
            </div>

            {viewMode === 'basic' ? (
              <div className={`bg-card rounded-[2rem] border ${getColorClasses(recommendation.color)} p-8 sm:p-12 mb-8`}>
                <div className="text-center mb-8">
                  {Icon && (
                    <div className="w-20 h-20 bg-card rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-10 h-10 text-foreground/80" />
                    </div>
                  )}

                  <h2 className="text-3xl font-semibold text-foreground mb-4">
                    {recommendation.service}
                  </h2>

                  <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                    {recommendation.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="text-center p-4 bg-muted/40 rounded-[2rem]">
                      <h4 className="font-semibold text-foreground mb-2">{t('common.price')}</h4>
                      <p className="text-2xl font-medium text-foreground">{recommendation.price}</p>
                    </div>
                    <div className="text-center p-4 bg-muted/40 rounded-[2rem]">
                      <h4 className="font-semibold text-foreground mb-2">{t('common.duration')}</h4>
                      <p className="text-2xl font-medium text-foreground">{recommendation.duration}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-foreground mb-4">{t('common.benefits')}:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {recommendation.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center text-foreground/80">
                          <div className="w-2 h-2 bg-muted rounded-full mr-3 shrink-0"></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-foreground mb-4">{t('booking.form.timeSlot')}:</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {['morning', 'noon', 'afternoon', 'evening'].map((slot) => (
                        <button
                          key={slot}
                          onClick={() => setSelectedTime(t(`booking.options.timeSlot.${slot}`))}
                          className={`py-2 px-4 rounded-[2rem] border border-border/20 transition duration-200 text-sm font-medium ${selectedTime === t(`booking.options.timeSlot.${slot}`)
                            ? 'border-0 bg-primary/5 text-primary'
                            : 'border-0 text-foreground/80 hover:border-0'
                            }`}
                        >
                          {t(`booking.options.timeSlot.${slot}`)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {formData.location === 'online' && (
                    <div className="bg-gold/5 p-4 rounded-[2rem] mb-6 text-gold-dark text-sm">
                      {t('discovery.recommendation.online.note')}
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={handleBooking}
                    className="bg-brand-whatsapp hover:bg-brand-whatsapp/80 text-primary-foreground font-medium px-8 py-4 rounded-full transition-colors duration-200 flex items-center justify-center"
                  >
                    <Message01Icon className="w-5 h-5 mr-2" />
                    {t('booking.direct.button')}
                  </Button>
                  <Button
                    onClick={() => setShowRecommendation(false)}
                    variant="secondary"
                    size="xl"
                  >
                    {t('discovery.recommendation.restart')}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="bg-card rounded-[2rem] border border-border p-8 sm:p-12 mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-8 flex items-center justify-center">
                  <ClipboardList className="w-6 h-6 mr-3 text-primary" />
                  {t('discovery.diagnosis.title')}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Profile */}
                  <div className="bg-muted/40 p-6 rounded-[2rem]">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">{t('discovery.diagnosis.profile')}</h3>
                    <p className="text-lg font-medium text-foreground">{recommendation.diagnosis?.profile}</p>
                  </div>

                  {/* Symptoms */}
                  <div className="bg-muted/40 p-6 rounded-[2rem]">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">{t('discovery.diagnosis.symptoms')}</h3>
                    <div className="flex flex-wrap gap-2">
                      {recommendation.diagnosis?.symptoms.map((s, i) => (
                        <span key={i} className="px-3 py-1 bg-card border border-border rounded-full text-sm text-foreground/80">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Root Cause */}
                  <div className="bg-primary/5 p-6 rounded-[2rem]">
                    <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">{t('discovery.diagnosis.rootCause')}</h3>
                    <p className="text-lg font-medium text-foreground">{recommendation.diagnosis?.rootCause}</p>
                  </div>

                  {/* Strategy */}
                  <div className="bg-primary/5 p-6 rounded-[2rem]">
                    <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">{t('discovery.diagnosis.strategy')}</h3>
                    <p className="text-lg font-medium text-foreground">{recommendation.diagnosis?.strategy}</p>
                  </div>
                </div>

                {/* Frequency */}
                <div className="mb-12 p-6 bg-primary/5 rounded-[2rem] text-center">
                  <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">{t('discovery.diagnosis.frequency')}</h3>
                  <p className="text-lg font-medium text-foreground">{recommendation.diagnosis?.frequency}</p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={handleBooking}
                    className="bg-brand-whatsapp hover:bg-brand-whatsapp/80 text-primary-foreground font-medium px-8 py-4 rounded-full transition-colors duration-200 flex items-center justify-center"
                  >
                    <Message01Icon className="w-5 h-5 mr-2" />
                    {t('booking.direct.button')}
                  </Button>
                  <Button
                    onClick={() => setShowRecommendation(false)}
                    variant="secondary"
                    size="xl"
                  >
                    {t('discovery.recommendation.restart')}
                  </Button>
                </div>
              </div>
            )}

            <div className="text-center text-muted-foreground">
              <p className="mb-4">{t('discovery.recommendation.why')}</p>
              <Link
                href="/booking"
                className="text-primary hover:text-primary font-medium"
              >
                {t('common.contact')}
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="py-16 sm:py-24 bg-muted/30 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full mb-8">
              <SparklesIcon className="w-5 h-5 text-primary mr-2" />
              <span className="text-primary font-medium">{t('discovery.recommendation.badge')}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-light text-foreground mb-6 leading-tight flex items-center justify-center gap-3">
              👋 {t('hero.title')}
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                BETA
              </span>
            </h1>

            <p className="text-xl text-foreground/80 mb-8">
              {t('discovery.recommendation.subtitle')}
            </p>

            {/* Progress indicator - 7 steps now */}
            <div className="flex items-center justify-center space-x-2 mb-8">
              {[0, 1, 2, 3, 4, 5, 6].map((step) => (
                <div
                  key={step}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${step <= currentStep ? 'bg-primary' : 'bg-muted'
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-[2rem] border border-border p-8 sm:p-12">

            {/* Step 0: Location */}
            {currentStep === 0 && (
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  📍 {t('discovery.step.location.title')}
                </h2>
                <p className="text-foreground/80 mb-8">{t('discovery.step.location.subtitle')}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {locations.map((loc) => {
                    
                    return (
                      <button
                        key={loc.id}
                        onClick={() => setFormData({ ...formData, location: loc.id })}
                        className={`text-center p-6 rounded-[2rem] border border-border/20 transition duration-200  flex flex-col items-center justify-center ${formData.location === loc.id
                          ? 'border-0 bg-primary/5'
                          : ''
                          }`}
                      >
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${formData.location === loc.id ? 'bg-primary/10 text-primary' : 'bg-muted text-foreground/80'
                          }`}>
                          <loc.icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold text-foreground">{loc.title}</h3>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 1: Description */}
            {currentStep === 1 && (
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  📝 {t('discovery.step.description.title')}
                </h2>
                <p className="text-foreground/80 mb-8">{t('discovery.step.description.subtitle')}</p>

                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder={t('discovery.step.description.placeholder')}
                  className="w-full h-40 p-4 rounded-[2rem] border-0 focus:border-0 focus-visible:ring-2 focus-visible:ring-ring resize-none text-lg"
                />
                <p className="text-sm text-muted-foreground mt-2 text-right">
                  {formData.description.length}/3 {t('discovery.step.description.minChars')}
                </p>
              </div>
            )}

            {/* Step 2: User Type */}
            {currentStep === 2 && (
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  💡 {t('discovery.step1.title')}
                </h2>
                <p className="text-foreground/80 mb-8">{t('discovery.step1.subtitle')}</p>

                <div className="space-y-4">
                  {userTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setFormData({ ...formData, userType: type.id })}
                      className={`w-full text-left p-6 rounded-[2rem] border border-border/20 transition duration-200  ${formData.userType === type.id
                        ? 'border-0 bg-primary/5'
                        : ''
                        }`}
                    >
                      <h3 className="font-semibold text-foreground mb-2">{type.title}</h3>
                      <p className="text-foreground/80 text-sm">{type.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Tension Areas */}
            {currentStep === 3 && (
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  📍 {t('discovery.step2.title')}
                </h2>
                <p className="text-foreground/80 mb-8">{t('discovery.step2.subtitle')}</p>

                <div className="space-y-4">
                  {tensionOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        const newAreas = formData.tensionAreas.includes(option)
                          ? formData.tensionAreas.filter(area => area !== option)
                          : [...formData.tensionAreas, option];
                        setFormData({ ...formData, tensionAreas: newAreas });
                      }}
                      className={`w-full text-left p-4 rounded-[2rem] border border-border/20 transition duration-200 ${formData.tensionAreas.includes(option)
                        ? 'border-0 bg-primary/5'
                        : ''
                        }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-foreground">{option}</span>
                        {formData.tensionAreas.includes(option) && (
                          <CheckmarkCircle01Icon className="w-5 h-5 text-primary" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Emotional State */}
            {currentStep === 4 && (
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  🧘 {t('discovery.step4.title')}
                </h2>
                <p className="text-foreground/80 mb-8">{t('discovery.step4.subtitle')}</p>

                <div className="space-y-4">
                  {emotionalStates.map((state) => (
                    <button
                      key={state.id}
                      onClick={() => setFormData({ ...formData, emotionalState: state.id })}
                      className={`w-full text-left p-6 rounded-[2rem] border border-border/20 transition duration-200  ${formData.emotionalState === state.id
                        ? 'border-0 bg-primary/5'
                        : ''
                        }`}
                    >
                      <h3 className="font-semibold text-foreground mb-2">{state.title}</h3>
                      <p className="text-foreground/80 text-sm">{state.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Time Commitment */}
            {currentStep === 5 && (
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  ⏰ {t('discovery.step5.title')}
                </h2>
                <p className="text-foreground/80 mb-8">{t('discovery.step5.subtitle')}</p>

                <div className="space-y-4">
                  {timeCommitments.map((time) => (
                    <button
                      key={time.id}
                      onClick={() => setFormData({ ...formData, timeCommitment: time.id })}
                      className={`w-full text-left p-6 rounded-[2rem] border border-border/20 transition duration-200  ${formData.timeCommitment === time.id
                        ? 'border-0 bg-primary/5'
                        : ''
                        }`}
                    >
                      <h3 className="font-semibold text-foreground mb-2">{time.title}</h3>
                      <p className="text-foreground/80 text-sm">{time.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 6: Budget */}
            {currentStep === 6 && (
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  💰 {t('discovery.step6.title')}
                </h2>
                <p className="text-foreground/80 mb-8">{t('discovery.step6.subtitle')}</p>

                <div className="space-y-4">
                  {budgetOptions.map((budget) => (
                    <button
                      key={budget.id}
                      onClick={() => setFormData({ ...formData, budget: budget.id })}
                      className={`w-full text-left p-6 rounded-[2rem] border border-border/20 transition duration-200  ${formData.budget === budget.id
                        ? 'border-0 bg-primary/5'
                        : ''
                        }`}
                    >
                      <h3 className="font-semibold text-foreground mb-2">{budget.title}</h3>
                      <p className="text-foreground/80 text-sm">{budget.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center mt-12 pt-8">
              <Button
                onClick={handleBack}
                variant="ghost"
                disabled={currentStep === 0}
              >
                <ArrowLeft01Icon className="w-4 h-4 mr-2" />
                {t('discovery.back')}
              </Button>

              <span className="text-sm text-muted-foreground">
                {t('common.step')} {currentStep + 1} {t('common.of')} 7
              </span>

              <Button
                onClick={handleNext}
                disabled={!canProceed()}
                variant="default"
                className="w-auto"
              >
                {currentStep === 6 ? t('discovery.seeRecommendation') : t('discovery.next')}
                <ArrowRight01Icon className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
