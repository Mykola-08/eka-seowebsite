'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  ArrowRight01Icon, 
  ArrowLeft01Icon, 
  SmileIcon, 
  FavouriteIcon, 
  ZapIcon, 
  Moon02Icon, 
  Money01Icon, 
  Location01Icon, 
  LaptopProgrammingIcon, 
  BodyPartMuscleIcon, 
  UserIcon, 
  Home01Icon, 
  Brain01Icon, 
  Activity01Icon,
  Clock01Icon,
  CheckCircle,
  SparklesIcon,
  FlashIcon,
  Message01Icon,
  InformationCircleIcon
} from '@/lib/icons';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { ProblemState } from '@/lib/funnel-data';

// -------------------------------------------------------------------------------- //
// TYPES & DATA
// -------------------------------------------------------------------------------- //

type Step = 'profile' | 'goals' | 'intensity' | 'duration' | 'energy' | 'mood' | 'location' | 'processing' | 'result';

type Profile = 'office' | 'athlete' | 'artist' | 'musician' | 'student' | 'parent' | 'other';
type Goal = 'stress' | 'pain' | 'posture' | 'sleep' | 'energy' | 'focus' | 'relationships' | 'family' | 'selfworth' | 'money';
type Intensity = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type Duration = 'days' | 'weeks' | 'months' | 'years';
type Energy = 'low' | 'medium' | 'high';
type Mood = 'stressed' | 'sad' | 'frustrated' | 'calm';
type Location = 'barcelona' | 'rubi' | 'online';

interface AssessmentData {
  profile: Profile | null;
  goals: Goal[];
  intensity: Intensity;
  duration: Duration | null;
  energy: Energy | null;
  mood: Mood | null;
  location: Location | null;
}

const PROFILES: { id: Profile; labelKey: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: 'office', labelKey: 'onboarding.userTypes.office', icon: LaptopProgrammingIcon },
  { id: 'athlete', labelKey: 'onboarding.userTypes.athlete', icon: Activity01Icon },
  { id: 'artist', labelKey: 'onboarding.userTypes.artist', icon: SmileIcon },
  { id: 'musician', labelKey: 'onboarding.userTypes.musician', icon: Activity01Icon },
  { id: 'student', labelKey: 'onboarding.userTypes.student', icon: Brain01Icon },
  { id: 'parent', labelKey: 'onboarding.userTypes.parent', icon: Home01Icon },
  { id: 'other', labelKey: 'onboarding.userTypes.other', icon: UserIcon },
];

const GOALS: { id: Goal; labelKey: string; icon: React.ComponentType<{ className?: string }>; category: 'physical' | 'mental' | 'systemic' }[] = [
  { id: 'stress', labelKey: 'onboarding.goals.stress', icon: Brain01Icon, category: 'mental' },
  { id: 'pain', labelKey: 'onboarding.goals.pain', icon: BodyPartMuscleIcon, category: 'physical' },
  { id: 'posture', labelKey: 'onboarding.goals.posture', icon: UserIcon, category: 'physical' },
  { id: 'sleep', labelKey: 'onboarding.goals.sleep', icon: Moon02Icon, category: 'mental' },
  { id: 'energy', labelKey: 'onboarding.goals.energy', icon: ZapIcon, category: 'mental' },
  { id: 'focus', labelKey: 'onboarding.goals.focus', icon: Activity01Icon, category: 'mental' },
  { id: 'relationships', labelKey: 'onboarding.goals.relationships', icon: FavouriteIcon, category: 'systemic' },
  { id: 'family', labelKey: 'onboarding.goals.family', icon: Home01Icon, category: 'systemic' },
  { id: 'selfworth', labelKey: 'onboarding.goals.selfworth', icon: SmileIcon, category: 'mental' },
  { id: 'money', labelKey: 'onboarding.goals.money', icon: Money01Icon, category: 'systemic' },
];

const DURATIONS: { id: Duration; labelKey: string }[] = [
  { id: 'days', labelKey: 'assessment.duration.days' },
  { id: 'weeks', labelKey: 'assessment.duration.weeks' },
  { id: 'months', labelKey: 'assessment.duration.months' },
  { id: 'years', labelKey: 'assessment.duration.years' },
];

const ENERGIES: { id: Energy; labelKey: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: 'low', labelKey: 'assessment.energy.low', icon: Moon02Icon },
  { id: 'medium', labelKey: 'assessment.energy.medium', icon: Activity01Icon },
  { id: 'high', labelKey: 'assessment.energy.high', icon: ZapIcon },
];

const MOODS: { id: Mood; labelKey: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: 'stressed', labelKey: 'assessment.mood.stressed', icon: FlashIcon },
  { id: 'sad', labelKey: 'assessment.mood.sad', icon: Moon02Icon },
  { id: 'frustrated', labelKey: 'assessment.mood.frustrated', icon: FlashIcon },
  { id: 'calm', labelKey: 'assessment.mood.calm', icon: SmileIcon },
];

const LOCATIONS: { id: Location; labelKey: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: 'barcelona', labelKey: 'form.location.barcelona', icon: Location01Icon },
  { id: 'rubi', labelKey: 'form.location.rubi', icon: Location01Icon },
  { id: 'online', labelKey: 'form.location.online', icon: LaptopProgrammingIcon },
];

// -------------------------------------------------------------------------------- //
// RECOMMENDATION LOGIC
// -------------------------------------------------------------------------------- //

interface FinalRecommendation {
  serviceId: string;
  titleKey: string;
  descKey: string;
  image: string;
  duration: string;
  price: string;
  href: string;
  whyKeys: string[];
  tags: string[];
}

function calculateRecommendation(data: AssessmentData): FinalRecommendation {
  const isChronic = data.duration === 'months' || data.duration === 'years';
  const highIntensity = data.intensity >= 7;
  const systemicFocus = data.goals.some(g => GOALS.find(goal => goal.id === g)?.category === 'systemic');
  const lowEnergy = data.energy === 'low';

  // 1. VIP/360 REVISION (Highest level)
  if (isChronic && highIntensity) {
    return {
      serviceId: 'revision-360',
      titleKey: 'services.revision360.title',
      descKey: 'services.revision360.description',
      image: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '4-9 sessions',
      price: 'From 280€',
      href: '/360-revision',
      whyKeys: ['assessment.why.chronic', 'assessment.why.intensity'],
      tags: ['Premium', 'Comprehensive']
    };
  }

  // 2. FAMILY CONSTELLATIONS (Systemic)
  if (systemicFocus || data.mood === 'sad') {
    return {
      serviceId: 'constelaciones',
      titleKey: 'services.constelaciones.title',
      descKey: 'services.constelaciones.description',
      image: 'https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '90 min',
      price: '90€',
      href: '/services/constelaciones',
      whyKeys: ['assessment.why.systemic', 'assessment.why.emotional'],
      tags: ['Systemic', 'Deep']
    };
  }

  // 3. NUTRITION (Bioenergetic)
  if (lowEnergy) {
    return {
      serviceId: 'nutrition',
      titleKey: 'services.nutrition.title',
      descKey: 'services.nutrition.description',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '60 min',
      price: '70€',
      href: '/services/nutrition',
      whyKeys: ['assessment.why.energy', 'assessment.why.biochemical'],
      tags: ['Metabolic', 'Vitality']
    };
  }

  // 4. KINESIOLOGY (Balanced/Default)
  if (data.profile === 'office' || data.profile === 'student' || data.mood === 'stressed') {
    return {
      serviceId: 'kinesiology',
      titleKey: 'services.kinesiology.title',
      descKey: 'services.kinesiology.description',
      image: 'https://images.pexels.com/photos/4098157/pexels-photo-4098157.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '60-90 min',
      price: '70-90€',
      href: '/services/kinesiology',
      whyKeys: ['assessment.why.balanced', 'assessment.why.stress'],
      tags: ['Holistic', 'Precision']
    };
  }

  // 5. MASSAGE (Physical Focus)
  return {
    serviceId: 'massage',
    titleKey: 'services.massage.title',
    descKey: 'services.massage.description',
    image: 'https://images.pexels.com/photos/3997983/pexels-photo-3997983.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '60-90 min',
    price: '70-90€',
    href: '/services/massage',
    whyKeys: ['assessment.why.physical', 'assessment.why.tension'],
    tags: ['Restorative', 'Manual']
  };
}

// -------------------------------------------------------------------------------- //
// COMPONENT
// -------------------------------------------------------------------------------- //

interface FirstTimeWizardProps {
  onComplete?: (problem: ProblemState) => void;
}

function getProblemStateFromGoals(goals: Goal[]): ProblemState {
  if (goals.includes('pain')) return 'back_pain';
  if (goals.includes('stress')) return 'stress_anxiety';
  if (goals.includes('sleep')) return 'sleep';
  if (goals.includes('posture')) return 'posture_office';
  if (goals.includes('energy')) return 'fatigue';
  if (goals.includes('focus')) return 'headaches';
  if (goals.some(g => ['relationships', 'family', 'selfworth', 'money'].includes(g))) return 'emotional_block';
  return 'back_pain';
}

export default function FirstTimeWizard({ onComplete }: FirstTimeWizardProps) {
  const { t } = useLanguage();
  const [step, setStep] = useState<Step>('profile');
  const [data, setData] = useState<AssessmentData>({
    profile: null,
    goals: [],
    intensity: 5,
    duration: null,
    energy: null,
    mood: null,
    location: null,
  });

  const [processingState, setProcessingState] = useState(0);

  // Auto-advance for processing
  useEffect(() => {
    if (step === 'processing') {
      const timer = setInterval(() => {
        setProcessingState(prev => {
          if (prev >= 3) {
            clearInterval(timer);
            setStep('result');
            // Trigger completion callback when analysis is done
            if (onComplete) {
              onComplete(getProblemStateFromGoals(data.goals));
            }
            return prev;
          }
          return prev + 1;
        });
      }, 1200);
      return () => clearInterval(timer);
    }
  }, [step, onComplete, data.goals]);

  const toggleGoal = (goal: Goal) => {
    setData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal) ? prev.goals.filter(g => g !== goal) : [...prev.goals, goal]
    }));
  };

  const stepsOrder: Step[] = ['profile', 'goals', 'intensity', 'duration', 'energy', 'mood', 'location'];
  const currentIndex = stepsOrder.indexOf(step);
  const totalSteps = stepsOrder.length;

  const nextStep = () => {
    if (currentIndex < totalSteps - 1) {
      setStep(stepsOrder[currentIndex + 1]);
    } else {
      setStep('processing');
    }
  };

  const prevStep = () => {
    if (currentIndex > 0) {
      setStep(stepsOrder[currentIndex - 1]);
    }
  };

  const wizardVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  const renderStep = () => {
    switch (step) {
      case 'profile':
        return (
          <motion.div key="profile" {...wizardVariants} className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="apple-title text-3xl md:text-5xl">{t('form.step1.question')}</h2>
              <p className="apple-subtitle">{t('discovery.step1.subtitle')}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {PROFILES.map(p => (
                <button
                  key={p.id}
                  onClick={() => { setData(prev => ({ ...prev, profile: p.id })); nextStep(); }}
                  className={cn(
                    "apple-card p-8 flex flex-col items-center gap-4 group transition-all duration-300",
                    data.profile === p.id ? "bg-primary/5 border-primary" : "hover:bg-muted/40"
                  )}
                >
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500",
                    data.profile === p.id ? "bg-primary text-white scale-110 shadow-lg shadow-primary/20" : "bg-muted text-muted-foreground group-hover:bg-background"
                  )}>
                    <p.icon className="w-8 h-8" />
                  </div>
                  <span className="font-bold text-center text-sm">{t(p.labelKey)}</span>
                </button>
              ))}
            </div>
          </motion.div>
        );

      case 'goals':
        return (
          <motion.div key="goals" {...wizardVariants} className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="apple-title text-3xl md:text-5xl">{t('onboarding.questions.goals.title')}</h2>
              <p className="apple-subtitle">{t('form.step2.question')}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {GOALS.map(g => (
                <button
                  key={g.id}
                  onClick={() => toggleGoal(g.id)}
                  className={cn(
                    "apple-card p-6 flex flex-col items-center gap-4 relative",
                    data.goals.includes(g.id) ? "bg-primary/5 border-primary" : "hover:bg-muted/40"
                  )}
                >
                  <g.icon className={cn("w-6 h-6", data.goals.includes(g.id) ? "text-primary" : "text-muted-foreground")} />
                  <span className="text-xs font-bold text-center leading-tight">{t(g.labelKey)}</span>
                  {data.goals.includes(g.id) && (
                    <motion.div layoutId="check" className="absolute top-2 right-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
            <div className="flex justify-center pt-8">
               <Button size="xl" className="rounded-full px-12" disabled={data.goals.length === 0} onClick={nextStep}>
                 {t('common.next')} <ArrowRight01Icon className="ml-2 w-5 h-5" />
               </Button>
            </div>
          </motion.div>
        );

      case 'intensity':
        return (
          <motion.div key="intensity" {...wizardVariants} className="space-y-12 max-w-2xl mx-auto">
            <div className="text-center space-y-4">
              <h2 className="apple-title text-3xl md:text-5xl">{t('assessment.step.intensity.title')}</h2>
              <p className="apple-subtitle">{t('assessment.step.intensity.desc')}</p>
            </div>
            <div className="space-y-8">
               <div className="flex justify-between px-2 text-2xl font-black text-primary">
                  <span>1</span>
                  <span className="text-5xl">{data.intensity}</span>
                  <span>10</span>
               </div>
               <input 
                 type="range" 
                 min="1" 
                 max="10" 
                 step="1" 
                 value={data.intensity}
                 onChange={(e) => setData(prev => ({ ...prev, intensity: parseInt(e.target.value) as Intensity }))}
                 className="w-full h-3 bg-muted rounded-full appearance-none cursor-pointer accent-primary"
               />
               <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                  <span>Mild discomfort</span>
                  <span>Severe pain</span>
               </div>
            </div>
            <div className="flex justify-center gap-4">
               <Button variant="ghost" size="lg" className="rounded-full" onClick={prevStep}>
                 <ArrowLeft01Icon className="mr-2 w-4 h-4" /> {t('common.back')}
               </Button>
               <Button size="xl" className="rounded-full px-12" onClick={nextStep}>
                 {t('common.next')} <ArrowRight01Icon className="ml-2 w-5 h-5" />
               </Button>
            </div>
          </motion.div>
        );

      case 'duration':
        return (
          <motion.div key="duration" {...wizardVariants} className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="apple-title text-3xl md:text-5xl">{t('assessment.step.duration.title')}</h2>
              <p className="apple-subtitle">{t('assessment.step.duration.desc')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
               {DURATIONS.map(d => (
                 <button
                   key={d.id}
                   onClick={() => { setData(prev => ({ ...prev, duration: d.id })); nextStep(); }}
                   className={cn(
                     "apple-card p-10 text-xl font-bold transition-all duration-300",
                     data.duration === d.id ? "bg-primary text-white" : "hover:bg-muted/40"
                   )}
                 >
                   {t(d.labelKey)}
                 </button>
               ))}
            </div>
            <div className="flex justify-center">
               <Button variant="ghost" onClick={prevStep} className="rounded-full">
                 <ArrowLeft01Icon className="mr-2 w-4 h-4" /> {t('common.back')}
               </Button>
            </div>
          </motion.div>
        );

      case 'energy':
        return (
          <motion.div key="energy" {...wizardVariants} className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="apple-title text-3xl md:text-5xl">{t('assessment.step.energy.title')}</h2>
              <p className="apple-subtitle">{t('assessment.step.energy.desc')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
               {ENERGIES.map(e => (
                 <button
                   key={e.id}
                   onClick={() => { setData(prev => ({ ...prev, energy: e.id })); nextStep(); }}
                   className={cn(
                     "apple-card p-10 flex flex-col items-center gap-6 group",
                     data.energy === e.id ? "bg-primary/5 border-primary shadow-lg shadow-primary/5" : "hover:bg-muted/40"
                   )}
                 >
                    <div className={cn(
                      "w-20 h-20 rounded-3xl flex items-center justify-center transition-all duration-500",
                      data.energy === e.id ? "bg-primary text-white scale-110" : "bg-muted text-muted-foreground group-hover:bg-background"
                    )}>
                      <e.icon className="w-10 h-10" />
                    </div>
                    <span className="font-bold text-center leading-tight">{t(e.labelKey)}</span>
                 </button>
               ))}
            </div>
            <div className="flex justify-center">
               <Button variant="ghost" onClick={prevStep} className="rounded-full">
                 <ArrowLeft01Icon className="mr-2 w-4 h-4" /> {t('common.back')}
               </Button>
            </div>
          </motion.div>
        );

      case 'mood':
        return (
          <motion.div key="mood" {...wizardVariants} className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="apple-title text-3xl md:text-5xl">{t('assessment.step.mood.title')}</h2>
              <p className="apple-subtitle">{t('assessment.step.mood.desc')}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {MOODS.map(m => (
                 <button
                   key={m.id}
                   onClick={() => { setData(prev => ({ ...prev, mood: m.id })); nextStep(); }}
                   className={cn(
                     "apple-card p-10 flex flex-col items-center gap-4 group",
                     data.mood === m.id ? "bg-primary text-white" : "hover:bg-muted/40"
                   )}
                 >
                   <m.icon className={cn("w-8 h-8 transition-colors", data.mood === m.id ? "text-white" : "text-primary")} />
                   <span className="font-bold text-sm text-center">{t(m.labelKey)}</span>
                 </button>
               ))}
            </div>
            <div className="flex justify-center">
               <Button variant="ghost" onClick={prevStep} className="rounded-full">
                 <ArrowLeft01Icon className="mr-2 w-4 h-4" /> {t('common.back')}
               </Button>
            </div>
          </motion.div>
        );

      case 'location':
        return (
          <motion.div key="location" {...wizardVariants} className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="apple-title text-3xl md:text-5xl">{t('discovery.step.location.title')}</h2>
              <p className="apple-subtitle">{t('discovery.step.location.subtitle')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
               {LOCATIONS.map(l => (
                 <button
                   key={l.id}
                   onClick={() => { setData(prev => ({ ...prev, location: l.id })); nextStep(); }}
                   className={cn(
                     "apple-card p-10 flex flex-col items-center gap-6 group",
                     data.location === l.id ? "bg-primary/5 border-primary shadow-lg shadow-primary/5" : "hover:bg-muted/40"
                   )}
                 >
                    <div className={cn(
                      "w-20 h-20 rounded-3xl flex items-center justify-center transition-all duration-500",
                      data.location === l.id ? "bg-primary text-white scale-110" : "bg-muted text-muted-foreground group-hover:bg-background"
                    )}>
                      <l.icon className="w-10 h-10" />
                    </div>
                    <span className="font-bold text-center leading-tight">{t(l.labelKey)}</span>
                 </button>
               ))}
            </div>
            <div className="flex justify-center">
               <Button variant="ghost" onClick={prevStep} className="rounded-full">
                 <ArrowLeft01Icon className="mr-2 w-4 h-4" /> {t('common.back')}
               </Button>
            </div>
          </motion.div>
        );

      case 'processing':
        return (
          <motion.div key="processing" {...wizardVariants} className="py-20 flex flex-col items-center justify-center space-y-12">
            <div className="relative w-40 h-40">
                <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-0 rounded-full border-t-2 border-primary/20 border-r-2 border-primary/10"
                />
                <motion.div 
                   animate={{ scale: [1, 1.1, 1] }}
                   transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute inset-0 flex items-center justify-center"
                >
                   <SparklesIcon className="w-16 h-16 text-primary" />
                </motion.div>
            </div>
            <div className="text-center space-y-4">
               <h2 className="apple-title text-3xl">{t('assessment.processing.title')}</h2>
               <div className="flex flex-col items-center gap-2">
                  <AnimatePresence mode="wait">
                    <motion.p 
                      key={processingState}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-primary font-bold uppercase tracking-[0.2em] text-[10px]"
                    >
                      {t(`assessment.processing.step${Math.min(processingState + 1, 3)}`)}
                    </motion.p>
                  </AnimatePresence>
                  <div className="flex gap-1">
                     {[0, 1, 2].map(i => (
                        <div key={i} className={cn("w-1.5 h-1.5 rounded-full transition-colors", i <= processingState ? "bg-primary" : "bg-muted")} />
                     ))}
                  </div>
               </div>
            </div>
          </motion.div>
        );

      case 'result': {
        const recommendation = calculateRecommendation(data);
        return (
          <motion.div key="result" {...wizardVariants} className="space-y-16">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
               <Badge variant="outline" className="rounded-full px-4 py-1 uppercase tracking-widest text-[10px] font-black bg-primary/5 text-primary border-primary/10">
                 Analysis Completed
               </Badge>
               <h2 className="apple-title text-4xl md:text-7xl leading-[0.95]">{t('assessment.result.match')}</h2>
               <h3 className="apple-subtitle">{t('form.recommendation.subtitle')}</h3>
            </div>

            <div className="apple-card overflow-hidden grid lg:grid-cols-5 min-h-[600px] border-primary/10 shadow-2xl shadow-primary/5">
                <div className="lg:col-span-2 relative min-h-[400px] lg:min-h-full">
                  <Image 
                    src={recommendation.image} 
                    alt={t(recommendation.titleKey)} 
                    fill 
                    className="object-cover" 
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-10 left-10 right-10 space-y-6">
                     <div className="flex flex-wrap gap-2">
                        {recommendation.tags.map((tag, i) => (
                          <Badge key={i} className="bg-white/10 backdrop-blur-xl border-white/20 text-white uppercase tracking-widest text-[9px] font-black">
                            {tag}
                          </Badge>
                        ))}
                     </div>
                     <div className="space-y-2">
                        <div className="flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-widest">
                           <Clock01Icon className="w-4 h-4" /> {recommendation.duration}
                        </div>
                        <div className="text-white text-4xl font-black">{recommendation.price}</div>
                     </div>
                  </div>
                </div>

                <div className="lg:col-span-3 p-10 md:p-20 flex flex-col justify-center space-y-12">
                   <div className="space-y-6">
                      <h3 className="apple-title text-3xl md:text-5xl leading-tight">{t(recommendation.titleKey)}</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">{t(recommendation.descKey)}</p>
                   </div>

                   <div className="space-y-8 pt-10 border-t border-border/60">
                      <div className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-[10px]">
                         <InformationCircleIcon className="w-4 h-4" /> {t('assessment.result.why')}
                      </div>
                      <div className="grid sm:grid-cols-2 gap-6">
                         {recommendation.whyKeys.map((key, i) => (
                            <div key={i} className="flex gap-4 items-start">
                               <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                  <CheckCircle className="w-3 h-3 text-primary" />
                               </div>
                               <p className="text-sm font-semibold text-foreground/80 leading-snug">{t(key)}</p>
                            </div>
                         ))}
                      </div>
                   </div>

                   <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button asChild size="xl" className="flex-1 rounded-full h-18 text-lg font-black shadow-lg shadow-primary/20 group">
                         <Link href={`/booking?service=${recommendation.serviceId}&assessment=complete&intensity=${data.intensity}&mood=${data.mood}&energy=${data.energy}`}>
                            {t('assessment.result.book.prefilled')}
                            <ArrowRight01Icon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                         </Link>
                      </Button>
                      <Button asChild variant="outline" size="xl" className="rounded-full h-18 px-10 border-border hover:bg-muted bg-transparent">
                         <Link href={recommendation.href}>{t('common.learnMore')}</Link>
                      </Button>
                   </div>
                </div>
            </div>

            <div className="flex flex-col items-center gap-8 py-10">
               <div className="p-8 apple-card bg-muted/30 border-dashed border-2 flex flex-col md:flex-row items-center gap-8 max-w-3xl w-full">
                  <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center shadow-sm">
                     <Message01Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1 text-center md:text-left space-y-2">
                     <h4 className="font-black text-lg">Prefer personal contact?</h4>
                     <p className="text-sm text-muted-foreground font-medium">Send your assessment results directly to Elena via WhatsApp for a preliminary advice.</p>
                  </div>
                  <Button variant="secondary" className="rounded-full px-8 h-14 font-bold shrink-0">
                     Chat with Elena
                  </Button>
               </div>

               <button 
                 onClick={() => { setStep('profile'); setData({ profile: null, goals: [], intensity: 5, duration: null, energy: null, mood: null, location: null }); }}
                 className="text-muted-foreground hover:text-foreground font-bold uppercase tracking-widest text-[10px] transition-colors underline underline-offset-8 decoration-border"
               >
                 {t('form.startOver')}
               </button>
            </div>
          </motion.div>
        );
      }
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6">
      
      {/* Dynamic Progress Indicator */}
      {step !== 'processing' && step !== 'result' && (
        <div className="max-w-md mx-auto mb-20 space-y-6">
           <div className="flex justify-between items-end">
              <div className="space-y-1">
                 <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Wellness Assessment</p>
                 <h3 className="font-bold text-sm">Personalizing your path</h3>
              </div>
              <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Step {currentIndex + 1} of {totalSteps}</p>
           </div>
           <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
              <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: `${((currentIndex + 1) / totalSteps) * 100}%` }}
                 className="h-full bg-primary"
                 transition={{ type: "spring", stiffness: 50, damping: 20 }}
              />
           </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {renderStep()}
      </AnimatePresence>
    </div>
  );
}
