'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ClipboardList, 
  CheckmarkCircle01Icon, 
  Message01Icon, 
  SparklesIcon, 
  ArrowLeft01Icon, 
  ArrowRight01Icon, 
  Location01Icon, 
  GlobeIcon, 
  Brain01Icon, 
  FavouriteIcon,
  Clock01Icon,
  StarIcon,
  ZapIcon,
  SmileIcon,
  UserIcon,
  LaptopProgrammingIcon,
  Activity01Icon,
  BodyPartMuscleIcon,
  FlashIcon,
  Moon02Icon,
  Money01Icon
} from '@/lib/icons';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import Image from 'next/image';

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
  image: string;
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
  'contractura_ca': { category: 'physical', weight: 3 },
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
  const [currentStep, setCurrentStep] = useState(0); 
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
  const [isProcessing, setIsProcessing] = useState(false);

  const locations = useMemo(() => [
    { id: 'barcelona', title: t('discovery.location.barcelona'), icon: Location01Icon, image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 'rubi', title: t('discovery.location.rubi'), icon: Location01Icon, image: 'https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 'online', title: t('discovery.location.online'), icon: GlobeIcon, image: 'https://images.pexels.com/photos/4050289/pexels-photo-4050289.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ], [t]);

  const userTypes = useMemo(() => [
    { id: 'mother', title: t('discovery.userTypes.mother.title'), description: t('discovery.userTypes.mother.desc'), type: 'emotional', icon: FavouriteIcon },
    { id: 'woman', title: t('discovery.userTypes.woman.title'), description: t('discovery.userTypes.woman.desc'), type: 'emotional', icon: SmileIcon },
    { id: 'regular', title: t('discovery.userTypes.regular.title'), description: t('discovery.userTypes.regular.desc'), type: 'mixed', icon: UserIcon },
    { id: 'office', title: t('discovery.userTypes.office.title'), description: t('discovery.userTypes.office.desc'), type: 'physical', icon: LaptopProgrammingIcon },
    { id: 'athlete', title: t('discovery.userTypes.athlete.title'), description: t('discovery.userTypes.athlete.desc'), type: 'physical', icon: Activity01Icon }
  ], [t]);

  const tensionOptions = useMemo(() => [
    { id: 'neck', title: t('discovery.tension.neck'), icon: BodyPartMuscleIcon },
    { id: 'lumbar', title: t('discovery.tension.lumbar'), icon: BodyPartMuscleIcon },
    { id: 'legs', title: t('discovery.tension.legs'), icon: BodyPartMuscleIcon },
    { id: 'head', title: t('discovery.tension.head'), icon: Brain01Icon },
    { id: 'full', title: t('discovery.tension.full'), icon: ZapIcon },
    { id: 'none', title: t('discovery.tension.none'), icon: SmileIcon }
  ], [t]);

  const emotionalStates = useMemo(() => [
    { id: 'stressed', title: t('discovery.emotional.stressed.title'), description: t('discovery.emotional.stressed.desc'), icon: FlashIcon },
    { id: 'sad', title: t('discovery.emotional.sad.title'), description: t('discovery.emotional.sad.desc'), icon: Moon02Icon },
    { id: 'balanced', title: t('discovery.emotional.balanced.title'), description: t('discovery.emotional.balanced.desc'), icon: SmileIcon },
    { id: 'focus_physical', title: t('discovery.emotional.focus_physical.title'), description: t('discovery.emotional.focus_physical.desc'), icon: Activity01Icon }
  ], [t]);

  const timeCommitments = useMemo(() => [
    { id: 'short', title: t('discovery.time.short.title'), description: t('discovery.time.short.desc') },
    { id: 'standard', title: t('discovery.time.standard.title'), description: t('discovery.time.standard.desc') },
    { id: 'long', title: t('discovery.time.long.title'), description: t('discovery.time.long.desc') }
  ], [t]);

  const budgetOptions = useMemo(() => [
    { id: 'basic', title: t('discovery.budget.basic.title'), description: t('discovery.budget.basic.desc') },
    { id: 'standard', title: t('discovery.budget.standard.title'), description: t('discovery.budget.standard.desc') },
    { id: 'premium', title: t('discovery.budget.premium.title'), description: t('discovery.budget.premium.desc') }
  ], [t]);

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
        color: 'blue',
        image: 'https://images.pexels.com/photos/4050289/pexels-photo-4050289.jpeg?auto=compress&cs=tinysrgb&w=800'
      };
    }

    const desc = formData.description.toLowerCase();
    const scores = { manual: 0, emotional: 0, integrative: 0, relax: 0 };

    Object.entries(KEYWORD_WEIGHTS).forEach(([keyword, info]) => {
      if (desc.includes(keyword)) {
        if (info.category === 'physical') scores.manual += info.weight;
        if (info.category === 'emotional') scores.emotional += info.weight;
        if (info.category === 'complex') scores.integrative += info.weight;
      }
    });

    const selectedType = userTypes.find(obj => obj.id === formData.userType);
    if (selectedType?.type === 'physical') scores.manual += 3;
    if (selectedType?.type === 'emotional') scores.emotional += 3;
    if (selectedType?.type === 'mixed') scores.relax += 2;

    const hasPain = formData.tensionAreas.length > 0 && !formData.tensionAreas.includes(t('discovery.tension.none'));
    const fullBodyTension = formData.tensionAreas.includes(t('discovery.tension.full'));
    const headTension = formData.tensionAreas.includes(t('discovery.tension.head'));

    if (hasPain) scores.manual += 2;
    if (fullBodyTension) scores.integrative += 3;
    if (headTension) scores.integrative += 2;

    if (formData.emotionalState === 'stressed') scores.emotional += 3;
    if (formData.emotionalState === 'sad') scores.emotional += 2;
    if (formData.emotionalState === 'focus_physical') scores.manual += 2;
    if (formData.emotionalState === 'balanced') scores.relax += 2;

    if (formData.timeCommitment === 'short' || formData.budget === 'basic') {
      scores.integrative -= 5;
      scores.manual += 2;
      scores.relax += 2;
    } else if (formData.timeCommitment === 'long' || formData.budget === 'premium') {
      scores.integrative += 4;
      scores.emotional += 2;
    }

    if (scores.manual > 3 && scores.emotional > 3) scores.integrative += 5;

    const maxScore = Math.max(scores.manual, scores.emotional, scores.integrative, scores.relax);

    const generateBenefits = (baseBenefits: string[]) => {
      const dynamicBenefits = [...baseBenefits];
      if (desc.includes('sleep') || desc.includes('insomnia') || desc.includes('dormir')) dynamicBenefits[0] = t('casos.problems.sleep.results');
      if (desc.includes('migraine') || desc.includes('headache') || headTension) dynamicBenefits[1] = t('casos.problems.migraines.results');
      if (selectedType?.id === 'athlete') dynamicBenefits[2] = t('personalizedServices.athletes.result');
      if (selectedType?.id === 'office') dynamicBenefits[2] = t('personalizedServices.officeWorkers.result');
      return dynamicBenefits.slice(0, 4);
    };

    const analysis: Recommendation['analysis'] = {};
    const diagnosis: Recommendation['diagnosis'] = { profile: '', symptoms: [], rootCause: '', strategy: '', frequency: '' };

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

    Object.keys(KEYWORD_WEIGHTS).forEach(k => { if (desc.includes(k) && !diagnosis.symptoms.includes(k)) diagnosis.symptoms.push(k); });

    if (selectedType?.id === 'athlete') analysis.goal = t('discovery.goal.athlete');
    else if (selectedType?.id === 'office') analysis.goal = t('discovery.goal.office');
    else if (formData.emotionalState === 'stressed') analysis.goal = t('discovery.goal.stress');
    else if (hasPain) analysis.goal = t('discovery.goal.pain');
    else analysis.goal = t('discovery.goal.general');

    const emotionalStateObj = emotionalStates.find(e => e.id === formData.emotionalState);
    diagnosis.profile = `${selectedType?.title || ''} • ${emotionalStateObj?.title || ''}`;

    if (formData.emotionalState === 'stressed') analysis.feeling = t('discovery.feeling.relaxed');
    else if (formData.emotionalState === 'sad') analysis.feeling = t('discovery.feeling.energized');
    else if (formData.emotionalState === 'balanced') analysis.feeling = t('discovery.feeling.balanced');
    else if (hasPain) analysis.feeling = t('discovery.feeling.painfree');
    else analysis.feeling = t('discovery.feeling.relaxed');

    if (selectedType?.id === 'office' && (headTension || formData.tensionAreas.includes(t('discovery.tension.neck')))) diagnosis.rootCause = t('discovery.diagnosis.cause.posture');
    else if (selectedType?.id === 'athlete') diagnosis.rootCause = t('discovery.diagnosis.cause.overload');
    else if (formData.emotionalState === 'stressed' && (headTension || fullBodyTension)) diagnosis.rootCause = t('discovery.diagnosis.cause.stress');
    else if (formData.emotionalState === 'sad') diagnosis.rootCause = t('discovery.diagnosis.cause.emotional');
    else diagnosis.rootCause = t('discovery.diagnosis.cause.metabolic');

    if (scores.integrative >= scores.manual && scores.integrative >= scores.emotional) diagnosis.strategy = t('discovery.diagnosis.strategy.rebalance');
    else if (scores.emotional > scores.manual) diagnosis.strategy = t('discovery.diagnosis.strategy.regulation');
    else diagnosis.strategy = t('discovery.diagnosis.strategy.structural');

    if (hasPain || formData.emotionalState === 'stressed' || formData.emotionalState === 'sad') diagnosis.frequency = t('discovery.diagnosis.freq.high');
    else if (formData.emotionalState === 'balanced') diagnosis.frequency = t('discovery.diagnosis.freq.low');
    else diagnosis.frequency = t('discovery.diagnosis.freq.medium');

    if (maxScore === scores.integrative && scores.integrative > 0) {
      return {
        service: t('discovery.recommendation.integrative.service'),
        description: t('discovery.recommendation.integrative.desc'),
        price: '90-140€',
        duration: '90-120 min',
        benefits: generateBenefits([t('discovery.recommendation.integrative.benefit1'), t('discovery.recommendation.integrative.benefit2'), t('discovery.recommendation.integrative.benefit3'), t('discovery.recommendation.integrative.benefit4')]),
        icon: SparklesIcon,
        color: 'blue',
        image: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=800',
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
        benefits: generateBenefits([t('discovery.recommendation.emotional.benefit1'), t('discovery.recommendation.emotional.benefit2'), t('discovery.recommendation.emotional.benefit3'), t('discovery.recommendation.emotional.benefit4')]),
        icon: Brain01Icon,
        color: 'purple',
        image: 'https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&w=800',
        analysis,
        diagnosis
      };
    }

    if (maxScore === scores.manual) {
      let serviceTitle = t('discovery.recommendation.manual.service');
      if (selectedType?.id === 'athlete') serviceTitle += ` (${t('discovery.userTypes.athlete.title')})`;
      if (selectedType?.id === 'office') serviceTitle += ` (${t('discovery.userTypes.office.title')})`;

      return {
        service: serviceTitle,
        description: t('discovery.recommendation.manual.desc'),
        price: '60-75€',
        duration: '1-1,5h',
        benefits: generateBenefits([t('discovery.recommendation.manual.benefit1'), t('discovery.recommendation.manual.benefit2'), t('discovery.recommendation.manual.benefit3'), t('discovery.recommendation.manual.benefit4')]),
        icon: FavouriteIcon,
        color: 'orange',
        image: 'https://images.pexels.com/photos/3997983/pexels-photo-3997983.jpeg?auto=compress&cs=tinysrgb&w=800',
        analysis,
        diagnosis
      };
    }

    return {
      service: t('discovery.recommendation.relax.service'),
      description: t('discovery.recommendation.relax.desc'),
      price: '60-80€',
      duration: '1-1,5h',
      benefits: generateBenefits([t('discovery.recommendation.relax.benefit1'), t('discovery.recommendation.relax.benefit2'), t('discovery.recommendation.relax.benefit3'), t('discovery.recommendation.relax.benefit4')]),
      icon: FavouriteIcon,
      color: 'green',
      image: 'https://images.pexels.com/photos/4098157/pexels-photo-4098157.jpeg?auto=compress&cs=tinysrgb&w=800',
      analysis,
      diagnosis
    };
  };

  const handleNext = () => {
    if (currentStep === 6) {
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setShowRecommendation(true);
        setCurrentStep(7);
      }, 2000);
    } else {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0: return formData.location !== '';
      case 1: return formData.description.length > 3;
      case 2: return formData.userType !== '';
      case 3: return formData.tensionAreas.length > 0;
      case 4: return formData.emotionalState !== '';
      case 5: return formData.timeCommitment !== '';
      case 6: return formData.budget !== '';
      default: return false;
    }
  };

  const recommendation = showRecommendation ? getRecommendation() : null;
  const RecIcon = recommendation?.icon;

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

  const stepVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  if (isProcessing) {
    return (
      <div className="min-h-screen bg-muted/30 flex flex-col items-center justify-center space-y-12">
        <div className="relative w-48 h-48">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-t-4 border-primary/40 border-r-2 border-primary/10"
          />
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center gap-2"
          >
            <SparklesIcon className="w-16 h-16 text-primary" />
            <span className="font-black text-[10px] tracking-[0.3em] text-primary/60">{t('assessment.processing.label')}</span>
          </motion.div>
        </div>
        <div className="text-center space-y-4">
          <h2 className="apple-title text-3xl font-black">{t('assessment.processing.title')}</h2>
          <p className="text-muted-foreground font-bold uppercase tracking-widest text-[10px]">{t('assessment.processing.step2')}</p>
        </div>
      </div>
    );
  }

  if (showRecommendation && recommendation) {
    return (
      <section className="py-16 sm:py-24 bg-muted/30 min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Badge variant="outline" className="rounded-full px-6 py-2 uppercase tracking-[0.3em] text-[11px] font-black bg-primary/5 text-primary border-primary/20">
                {t('discovery.recommendation.badge')}
              </Badge>
            </motion.div>
            <h1 className="apple-headline text-5xl md:text-8xl leading-[0.95] tracking-tight bg-linear-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
              {t('discovery.recommendation.title')}
            </h1>
            <p className="apple-subtitle text-xl md:text-2xl opacity-70 max-w-2xl mx-auto">
              {t('discovery.recommendation.subtitle')}
            </p>

            {recommendation.analysis && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-card/50 backdrop-blur-xl p-8 rounded-[40px] border border-border/40 max-w-3xl mx-auto shadow-sm"
              >
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed italic">
                  &quot;{t('discovery.analysis.intro')}
                  {recommendation.analysis.problem && <span> {t('discovery.analysis.have')} <strong className="text-primary">{recommendation.analysis.problem}</strong></span>}
                  {recommendation.analysis.goal && <span> {t('discovery.analysis.want')} <strong className="text-primary">{recommendation.analysis.goal}</strong></span>}
                  {recommendation.analysis.feeling && <span> {t('discovery.analysis.feel')} <strong className="text-primary">{recommendation.analysis.feeling}</strong></span>}
                  .&quot;
                </p>
              </motion.div>
            )}

            <div className="inline-flex bg-muted/50 backdrop-blur-md p-1.5 rounded-full border border-border/20 mt-10">
              <Button onClick={() => setViewMode('basic')} variant={viewMode === 'basic' ? 'secondary' : 'ghost'} className="rounded-full px-8 h-12 font-black text-[11px] uppercase tracking-widest">
                {t('discovery.view.basic')}
              </Button>
              <Button onClick={() => setViewMode('advanced')} variant={viewMode === 'advanced' ? 'secondary' : 'ghost'} className="rounded-full px-8 h-12 font-black text-[11px] uppercase tracking-widest">
                {t('discovery.view.advanced')}
              </Button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {viewMode === 'basic' ? (
              <motion.div 
                key="basic"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                className="apple-card overflow-hidden grid lg:grid-cols-12 min-h-[700px] border-primary/20 shadow-2xl relative"
              >
                <div className="lg:col-span-5 relative min-h-[500px] lg:min-h-full">
                  <Image src={recommendation.image} alt={recommendation.service} fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-12 left-12 right-12 space-y-8">
                    <div className="flex flex-wrap gap-2">
                      {recommendation.benefits.slice(0, 2).map((b, i) => (
                        <Badge key={i} className="bg-white/10 backdrop-blur-xl border-white/20 text-white uppercase tracking-widest text-[9px] font-black px-3 py-1">
                          {b}
                        </Badge>
                      ))}
                    </div>
                    <div className="space-y-2">
                       <div className="flex items-center gap-3 text-white/70 text-sm font-black uppercase tracking-[0.2em]">
                          <Clock01Icon className="w-5 h-5 text-primary" /> {recommendation.duration}
                       </div>
                       <div className="text-white text-6xl font-black tracking-tighter">{recommendation.price}</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 p-12 md:p-24 flex flex-col justify-center space-y-12 bg-card/80 backdrop-blur-xl relative z-10">
                  <div className="space-y-6">
                    {RecIcon && <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mb-6"><RecIcon className="w-8 h-8" /></div>}
                    <h2 className="apple-title text-4xl md:text-6xl tracking-tight leading-[1.1]">{recommendation.service}</h2>
                    <p className="text-xl text-muted-foreground leading-relaxed font-medium">{recommendation.description}</p>
                  </div>

                  <div className="space-y-8">
                     <h4 className="font-black text-xs uppercase tracking-[0.3em] text-primary">{t('booking.form.timeSlot')}</h4>
                     <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                       {['morning', 'noon', 'afternoon', 'evening'].map((slot) => (
                         <button
                           key={slot}
                           onClick={() => setSelectedTime(t(`booking.options.timeSlot.${slot}`))}
                           className={cn(
                             "py-4 rounded-2xl border transition-all duration-300 text-[10px] font-black uppercase tracking-widest",
                             selectedTime === t(`booking.options.timeSlot.${slot}`)
                               ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                               : "border-border/60 hover:border-primary/40 text-muted-foreground"
                           )}
                         >
                           {t(`booking.options.timeSlot.${slot}`)}
                         </button>
                       ))}
                     </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6 pt-10">
                    <Button onClick={handleBooking} size="xl" className="flex-2 rounded-full h-20 text-lg font-black bg-brand-whatsapp border-0 shadow-xl shadow-green-500/20 group">
                      <Message01Icon className="w-6 h-6 mr-3" />
                      {t('booking.direct.button')}
                    </Button>
                    <Button onClick={() => { setShowRecommendation(false); setCurrentStep(0); }} variant="outline" size="xl" className="flex-1 rounded-full h-20 px-10 font-bold border-border/60">
                      {t('discovery.recommendation.restart')}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="advanced"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                className="apple-card p-12 md:p-20 bg-card border-primary/20 shadow-2xl space-y-16"
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-border/60 pb-12">
                   <div className="space-y-4 text-center md:text-left">
                      <div className="flex items-center gap-3 justify-center md:justify-start text-primary font-black uppercase tracking-[0.3em] text-[11px]">
                         <ClipboardList className="w-6 h-6" /> {t('discovery.diagnosis.title')}
                      </div>
                      <h2 className="text-4xl md:text-6xl font-black tracking-tight">{recommendation.service}</h2>
                   </div>
                   <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(i => <StarIcon key={i} className="w-6 h-6 text-amber-500 fill-amber-500" />)}
                   </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-10">
                     <div className="bg-muted/30 p-10 rounded-[40px] border border-border/40 space-y-4">
                        <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">{t('discovery.diagnosis.profile')}</h3>
                        <p className="text-2xl font-black tracking-tight">{recommendation.diagnosis?.profile}</p>
                     </div>
                     <div className="bg-muted/30 p-10 rounded-[40px] border border-border/40 space-y-6">
                        <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">{t('discovery.diagnosis.symptoms')}</h3>
                        <div className="flex flex-wrap gap-3">
                          {recommendation.diagnosis?.symptoms.map((s, i) => (
                            <Badge key={i} variant="secondary" className="bg-background border-border text-foreground font-bold px-4 py-1.5 rounded-xl uppercase tracking-widest text-[9px]">
                              {s}
                            </Badge>
                          ))}
                        </div>
                     </div>
                  </div>

                  <div className="space-y-10">
                     <div className="bg-primary/5 p-10 rounded-[40px] border border-primary/20 space-y-4">
                        <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">{t('discovery.diagnosis.rootCause')}</h3>
                        <p className="text-2xl font-black tracking-tight leading-snug">{recommendation.diagnosis?.rootCause}</p>
                     </div>
                     <div className="bg-primary/5 p-10 rounded-[40px] border border-primary/20 space-y-4">
                        <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">{t('discovery.diagnosis.strategy')}</h3>
                        <p className="text-2xl font-black tracking-tight leading-snug">{recommendation.diagnosis?.strategy}</p>
                     </div>
                  </div>
                </div>

                <div className="p-10 bg-primary/10 rounded-[40px] text-center border-2 border-primary/20 shadow-xl shadow-primary/5">
                   <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4">{t('discovery.diagnosis.frequency')}</h3>
                   <p className="text-3xl md:text-5xl font-black tracking-tight text-primary">{recommendation.diagnosis?.frequency}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                  <Button onClick={handleBooking} size="xl" className="flex-2 rounded-full h-20 text-lg font-black bg-brand-whatsapp border-0">
                    <Message01Icon className="w-6 h-6 mr-3" />
                    {t('booking.direct.button')}
                  </Button>
                  <Button onClick={() => { setShowRecommendation(false); setCurrentStep(0); }} variant="outline" size="xl" className="flex-1 rounded-full h-20 px-10 font-bold">
                    {t('discovery.recommendation.restart')}
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="text-center space-y-8 py-20 max-w-2xl mx-auto">
             <div className="h-px bg-linear-to-r from-transparent via-border to-transparent" />
             <p className="text-lg text-muted-foreground font-medium leading-relaxed">{t('discovery.recommendation.why')}</p>
             <Link href="/booking" className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-[0.3em] text-[11px] group">
                <span className="underline underline-offset-8 decoration-primary/30 group-hover:decoration-primary transition-all">{t('common.contact')}</span>
                <ArrowRight01Icon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </Link>
          </div>
        </div>
      </section>
    );
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <motion.div key="step0" {...stepVariants} className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="apple-title text-4xl md:text-6xl tracking-tight leading-none">📍 {t('discovery.step.location.title')}</h2>
              <p className="apple-subtitle text-lg opacity-70">{t('discovery.step.location.subtitle')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {locations.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setFormData({ ...formData, location: loc.id })}
                  className={cn(
                    "apple-card p-0 overflow-hidden group transition-all duration-700 relative h-[400px]",
                    formData.location === loc.id ? "ring-4 ring-primary shadow-2xl scale-[1.02]" : "hover:scale-[1.01]"
                  )}
                >
                  <Image src={loc.image} alt={loc.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className={cn("absolute inset-0 transition-opacity duration-700", formData.location === loc.id ? "bg-primary/40" : "bg-black/40 group-hover:bg-black/20")} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 space-y-6">
                    <div className={cn("w-20 h-20 rounded-full flex items-center justify-center backdrop-blur-xl border border-white/30 transition-all duration-700", formData.location === loc.id ? "bg-white text-primary scale-110 shadow-2xl" : "bg-white/10 text-white")}>
                      <loc.icon className="w-10 h-10" />
                    </div>
                    <h3 className="font-black text-2xl text-white uppercase tracking-widest drop-shadow-lg">{loc.title}</h3>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        );

      case 1:
        return (
          <motion.div key="step1" {...stepVariants} className="space-y-12 max-w-3xl mx-auto">
            <div className="text-center space-y-4">
              <h2 className="apple-title text-4xl md:text-6xl tracking-tight leading-none">📝 {t('discovery.step.description.title')}</h2>
              <p className="apple-subtitle text-lg opacity-70">{t('discovery.step.description.subtitle')}</p>
            </div>
            <div className="relative group">
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder={t('discovery.step.description.placeholder')}
                className="w-full h-64 p-10 rounded-[40px] border-0 bg-muted/20 backdrop-blur-xl focus:ring-4 focus:ring-primary/10 resize-none text-2xl font-medium tracking-tight placeholder:opacity-30 transition-all shadow-inner"
              />
              <div className="absolute bottom-8 right-8">
                <Badge variant={formData.description.length > 3 ? "secondary" : "outline"} className="rounded-full px-4 py-1.5 font-black text-[10px] tracking-widest uppercase">
                  {formData.description.length}/3 {t('discovery.step.description.minChars')}
                </Badge>
              </div>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div key="step2" {...stepVariants} className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="apple-title text-4xl md:text-6xl tracking-tight leading-none">💡 {t('discovery.step1.title')}</h2>
              <p className="apple-subtitle text-lg opacity-70">{t('discovery.step1.subtitle')}</p>
            </div>
            <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
              {userTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setFormData({ ...formData, userType: type.id })}
                  className={cn(
                    "apple-card p-10 flex items-center gap-10 text-left group transition-all duration-500",
                    formData.userType === type.id ? "bg-primary/5 border-primary shadow-2xl scale-[1.02] ring-4 ring-primary/5" : "hover:bg-muted/40"
                  )}
                >
                  <div className={cn("w-20 h-20 rounded-[30px] flex items-center justify-center shrink-0 transition-all duration-700", formData.userType === type.id ? "bg-primary text-white scale-110 shadow-xl shadow-primary/20 rotate-3" : "bg-muted text-muted-foreground group-hover:rotate-[-3deg]")}>
                    <type.icon className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-black text-2xl uppercase tracking-tight">{type.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed font-medium">{type.description}</p>
                  </div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight01Icon className="w-8 h-8 text-primary/40" />
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div key="step3" {...stepVariants} className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="apple-title text-4xl md:text-6xl tracking-tight leading-none">📍 {t('discovery.step2.title')}</h2>
              <p className="apple-subtitle text-lg opacity-70">{t('discovery.step2.subtitle')}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {tensionOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => {
                    const newAreas = formData.tensionAreas.includes(option.title)
                      ? formData.tensionAreas.filter(area => area !== option.title)
                      : [...formData.tensionAreas, option.title];
                    setFormData({ ...formData, tensionAreas: newAreas });
                  }}
                  className={cn(
                    "apple-card p-10 flex flex-col items-center gap-6 group transition-all duration-500 relative",
                    formData.tensionAreas.includes(option.title) ? "bg-primary/5 border-primary shadow-2xl scale-[1.05]" : "hover:bg-muted/40"
                  )}
                >
                  <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500", formData.tensionAreas.includes(option.title) ? "bg-primary text-white scale-110 shadow-lg shadow-primary/20" : "bg-muted text-muted-foreground")}>
                    <option.icon className="w-8 h-8" />
                  </div>
                  <span className="font-black text-base text-center uppercase tracking-widest">{option.title}</span>
                  {formData.tensionAreas.includes(option.title) && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute top-4 right-4">
                      <div className="bg-primary text-white rounded-full p-1 shadow-lg">
                        <CheckmarkCircle01Icon className="w-5 h-5" />
                      </div>
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div key="step4" {...stepVariants} className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="apple-title text-4xl md:text-6xl tracking-tight leading-none">🧘 {t('discovery.step4.title')}</h2>
              <p className="apple-subtitle text-lg opacity-70">{t('discovery.step4.subtitle')}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {emotionalStates.map((state) => (
                <button
                  key={state.id}
                  onClick={() => setFormData({ ...formData, emotionalState: state.id })}
                  className={cn(
                    "apple-card p-12 flex flex-col items-center gap-8 text-center group transition-all duration-700 h-full",
                    formData.emotionalState === state.id ? "bg-primary text-white shadow-2xl scale-[1.05] ring-8 ring-primary/5" : "hover:bg-muted/40"
                  )}
                >
                  <div className={cn("w-20 h-20 rounded-full flex items-center justify-center transition-all duration-700", formData.emotionalState === state.id ? "bg-white/20 scale-110 rotate-12" : "bg-primary/5 text-primary group-hover:-rotate-12")}>
                    <state.icon className="w-10 h-10" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-black text-2xl uppercase tracking-widest leading-none">{state.title}</h3>
                    <p className={cn("text-lg font-medium leading-relaxed", formData.emotionalState === state.id ? "text-white/80" : "text-muted-foreground")}>{state.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        );

      case 5:
        return (
          <motion.div key="step5" {...stepVariants} className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="apple-title text-4xl md:text-6xl tracking-tight leading-none">⏰ {t('discovery.step5.title')}</h2>
              <p className="apple-subtitle text-lg opacity-70">{t('discovery.step5.subtitle')}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {timeCommitments.map((time) => (
                <button
                  key={time.id}
                  onClick={() => setFormData({ ...formData, timeCommitment: time.id })}
                  className={cn(
                    "apple-card p-12 flex flex-col items-center gap-8 text-center transition-all duration-500",
                    formData.timeCommitment === time.id ? "bg-primary/5 border-primary shadow-2xl scale-[1.05]" : "hover:bg-muted/40"
                  )}
                >
                  <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mb-2 transition-all duration-700", formData.timeCommitment === time.id ? "bg-primary text-white shadow-lg" : "bg-muted text-muted-foreground")}>
                    <Clock01Icon className="w-8 h-8" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-black text-2xl uppercase tracking-tighter leading-none">{time.title}</h3>
                    <p className="text-muted-foreground font-medium text-lg leading-relaxed">{time.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        );

      case 6:
        return (
          <motion.div key="step6" {...stepVariants} className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="apple-title text-4xl md:text-6xl tracking-tight leading-none">💰 {t('discovery.step6.title')}</h2>
              <p className="apple-subtitle text-lg opacity-70">{t('discovery.step6.subtitle')}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {budgetOptions.map((budget) => (
                <button
                  key={budget.id}
                  onClick={() => setFormData({ ...formData, budget: budget.id })}
                  className={cn(
                    "apple-card p-12 flex flex-col items-center gap-8 text-center transition-all duration-500",
                    formData.budget === budget.id ? "bg-primary text-white shadow-2xl scale-[1.05] ring-8 ring-primary/5" : "hover:bg-muted/40"
                  )}
                >
                  <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mb-2 transition-all duration-700", formData.budget === budget.id ? "bg-white/20" : "bg-primary/5 text-primary")}>
                    <Money01Icon className="w-8 h-8" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-black text-2xl uppercase tracking-tighter leading-none">{budget.title}</h3>
                    <p className={cn("font-medium text-lg leading-relaxed", formData.budget === budget.id ? "text-white/80" : "text-muted-foreground")}>{budget.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-muted/30 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-8">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <Badge variant="outline" className="rounded-full px-6 py-2 uppercase tracking-[0.3em] text-[11px] font-black bg-primary/10 text-primary border-primary/20">
              {t('discovery.recommendation.badge')}
            </Badge>
          </motion.div>

          <h1 className="apple-headline text-5xl md:text-8xl leading-none flex items-center justify-center gap-4 bg-linear-to-b from-foreground to-foreground/60 bg-clip-text text-transparent">
             {t('hero.title')}
            <Badge variant="secondary" className="bg-primary/10 text-primary uppercase font-black tracking-widest text-[10px] h-6">BETA</Badge>
          </h1>

          <p className="apple-subtitle text-xl md:text-2xl opacity-70 max-w-2xl mx-auto">
            {t('discovery.recommendation.subtitle')}
          </p>

          <div className="max-w-xl mx-auto space-y-6">
            <div className="flex justify-between items-end px-2">
               <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">{t('assessment.progress.analysis')}</span>
               <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Step {currentStep + 1} of 7</span>
            </div>
            <div className="h-2 w-full bg-muted/50 rounded-full overflow-hidden p-[2px] border border-border/20 shadow-inner">
              <motion.div 
                animate={{ width: `${((currentStep + 1) / 7) * 100}%` }}
                className="h-full bg-linear-to-r from-primary/60 to-primary rounded-full shadow-[0_0_10px_rgba(var(--primary),0.3)]"
                transition={{ type: "spring", stiffness: 40, damping: 15 }}
              />
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-12"
          >
            {renderStepContent()}

            <div className="flex justify-between items-center max-w-5xl mx-auto pt-16 border-t border-border/40">
              <Button
                onClick={handleBack}
                variant="ghost"
                disabled={currentStep === 0}
                className="h-16 px-10 rounded-full text-lg font-bold group"
              >
                <ArrowLeft01Icon className="w-6 h-6 mr-3 group-hover:-translate-x-1 transition-transform" />
                {t('discovery.back')}
              </Button>

              <Button
                onClick={handleNext}
                disabled={!canProceed()}
                size="xl"
                className="h-20 px-20 rounded-full text-xl font-black shadow-2xl shadow-primary/20 group"
              >
                {currentStep === 6 ? t('discovery.seeRecommendation') : t('discovery.next')}
                <ArrowRight01Icon className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
