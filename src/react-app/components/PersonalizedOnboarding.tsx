import React, { useState } from 'react';
import { Link } from 'react-router';
import { ChevronRight, Heart, Brain, Leaf, Clock, User, Target, Sparkles, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/react-app/contexts/LanguageContext';

interface OnboardingData {
  userType: string;
  goals: string[];
  preferredFeeling: string;
  approach: string;
  timePreference: number;
}

interface Question {
  id: string;
  type: 'single' | 'multiple';
  options: Array<{
    id: string;
    label: string;
    icon?: React.ComponentType<any>;
  }>;
}

export default function PersonalizedOnboarding() {
  const { t } = useLanguage();
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<OnboardingData>({
    userType: '',
    goals: [],
    preferredFeeling: '',
    approach: '',
    timePreference: 60
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [recommendations, setRecommendations] = useState<any[]>([]);

  const questions: Question[] = [
    {
      id: 'userType',
      type: 'single',
      options: [
        { id: 'student', label: t('onboarding.userTypes.student'), icon: User },
        { id: 'office', label: t('onboarding.userTypes.office'), icon: User },
        { id: 'artist', label: t('onboarding.userTypes.artist'), icon: User },
        { id: 'musician', label: t('onboarding.userTypes.musician'), icon: User },
        { id: 'athlete', label: t('onboarding.userTypes.athlete'), icon: User },
        { id: 'parent', label: t('onboarding.userTypes.parent'), icon: User },
        { id: 'entrepreneur', label: t('onboarding.userTypes.entrepreneur'), icon: User },
        { id: 'therapist', label: t('onboarding.userTypes.therapist'), icon: User },
        { id: 'senior', label: t('onboarding.userTypes.senior'), icon: User },
        { id: 'other', label: t('onboarding.userTypes.other'), icon: User }
      ]
    },
    {
      id: 'goals',
      type: 'multiple',
      options: [
        { id: 'stress', label: t('onboarding.goals.stress'), icon: Heart },
        { id: 'pain', label: t('onboarding.goals.pain'), icon: Heart },
        { id: 'posture', label: t('onboarding.goals.posture'), icon: Brain },
        { id: 'sleep', label: t('onboarding.goals.sleep'), icon: Leaf },
        { id: 'energy', label: t('onboarding.goals.energy'), icon: Sparkles },
        { id: 'focus', label: t('onboarding.goals.focus'), icon: Brain },
        { id: 'bodyAwareness', label: t('onboarding.goals.bodyAwareness'), icon: Target },
        { id: 'feelGood', label: t('onboarding.goals.feelGood'), icon: Heart }
      ]
    },
    {
      id: 'preferredFeeling',
      type: 'single',
      options: [
        { id: 'calm', label: t('onboarding.feelings.calm'), icon: Leaf },
        { id: 'light', label: t('onboarding.feelings.light'), icon: Sparkles },
        { id: 'energized', label: t('onboarding.feelings.energized'), icon: Sparkles },
        { id: 'focused', label: t('onboarding.feelings.focused'), icon: Brain },
        { id: 'confident', label: t('onboarding.feelings.confident'), icon: Target }
      ]
    },
    {
      id: 'approach',
      type: 'single',
      options: [
        { id: 'massage', label: t('onboarding.approaches.massage'), icon: Heart },
        { id: 'kinesiology', label: t('onboarding.approaches.kinesiology'), icon: Brain },
        { id: 'feldenkrais', label: t('onboarding.approaches.feldenkrais'), icon: Target },
        { id: 'energy', label: t('onboarding.approaches.energy'), icon: Sparkles },
        { id: 'open', label: t('onboarding.approaches.open'), icon: Heart }
      ]
    },
    {
      id: 'timePreference',
      type: 'single',
      options: [
        { id: '60', label: t('onboarding.time.60min'), icon: Clock },
        { id: '90', label: t('onboarding.time.90min'), icon: Clock },
        { id: '120', label: t('onboarding.time.120min'), icon: Clock }
      ]
    }
  ];

  const currentQuestion = questions[currentStep];
  const isLastStep = currentStep === questions.length - 1;

  const handleSelection = (questionId: string, optionId: string) => {
    if (questionId === 'goals') {
      setData(prev => ({
        ...prev,
        goals: prev.goals.includes(optionId)
          ? prev.goals.filter(g => g !== optionId)
          : [...prev.goals, optionId]
      }));
    } else {
      setData(prev => ({
        ...prev,
        [questionId]: questionId === 'timePreference' ? parseInt(optionId) : optionId
      }));
    }
  };

  const canProceed = () => {
    const question = questions[currentStep];
    if (question.id === 'goals') {
      return data.goals.length > 0;
    }
    return data[question.id as keyof OnboardingData] !== '';
  };

  const nextStep = () => {
    if (isLastStep) {
      processResults();
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const processResults = async () => {
    setIsProcessing(true);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Generate recommendations based on user data
    const recs = generateRecommendations(data);
    setRecommendations(recs);
    setIsProcessing(false);
    setShowResults(true);
  };

  const generateRecommendations = (userData: OnboardingData): any[] => {
    const recommendations = [];
    
    // Base recommendations on user type and goals
    if (userData.goals.includes('stress') || userData.goals.includes('pain')) {
      recommendations.push({
        id: 'massage',
        title: t('services.massage.title'),
        description: t('recommendations.massage.description'),
        link: '/serveis/massatge',
        personalizedLink: getPersonalizedLink(userData.userType)
      });
    }
    
    if (userData.goals.includes('energy') || userData.goals.includes('focus')) {
      recommendations.push({
        id: 'kinesiology',
        title: t('services.kinesiology.title'),
        description: t('recommendations.kinesiology.description'),
        link: '/serveis/kinesiologia',
        personalizedLink: getPersonalizedLink(userData.userType)
      });
    }
    
    if (userData.goals.includes('bodyAwareness') || userData.approach === 'feldenkrais') {
      recommendations.push({
        id: 'feldenkrais',
        title: t('services.feldenkrais.title'),
        description: t('recommendations.feldenkrais.description'),
        link: '/serveis/feldenkrais',
        personalizedLink: getPersonalizedLink(userData.userType)
      });
    }
    
    return recommendations.slice(0, 3); // Return top 3 recommendations
  };

  const getPersonalizedLink = (userType: string): string => {
    const userTypeMap: Record<string, string> = {
      student: 'estudiants',
      office: 'treballadors-oficina',
      artist: 'artistes',
      musician: 'musics',
      athlete: 'esportistes',
      parent: 'pares',
      entrepreneur: 'emprenedors',
      therapist: 'terapeutes',
      senior: 'persones-grans'
    };
    
    const mappedType = userTypeMap[userType] || userType;
    return `/per-a-${mappedType}`;
  };

  const startOnboarding = () => {
    setShowWelcome(false);
  };

  // Welcome Screen - Full Page
  if (showWelcome) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full mb-8">
            <Heart className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-8 leading-tight">
            🌿 {t('onboarding.welcome.title')}
          </h1>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed max-w-xl mx-auto">
            {t('onboarding.welcome.description')}
          </p>
          <button
            onClick={startOnboarding}
            className="inline-flex items-center bg-[#FFB405] hover:bg-[#e8a204] text-[#000035] font-semibold px-10 py-4 rounded-full transition-colors duration-200 text-lg"
          >
            {t('common.getStarted')}
            <ChevronRight className="w-6 h-6 ml-3" />
          </button>
        </div>
      </div>
    );
  }

  // Results Screen - Full Page
  if (showResults) {
    return (
      <div className="min-h-screen bg-white py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              {t('onboarding.results.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('onboarding.results.subtitle')}
            </p>
          </div>

          <div className="grid gap-6 mb-8">
            {recommendations.map((rec, index) => (
              <div key={rec.id} className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {rec.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {rec.description}
                    </p>
                  </div>
                  <div className="text-right ml-4">
                    <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      #{index + 1} {t('onboarding.results.recommended')}
                    </span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Link
                    to={rec.link}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-full transition-colors duration-200 flex items-center justify-center text-sm"
                  >
                    {t('common.learnMore')}
                  </Link>
                  <Link
                    to={rec.personalizedLink}
                    className="flex-1 bg-[#FFB405] hover:bg-[#e8a204] text-[#000035] font-semibold px-4 py-2 rounded-full transition-colors duration-200 flex items-center justify-center text-sm"
                  >
                    {t('onboarding.results.personalizedInfo')}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/booking"
              className="inline-flex items-center bg-[#FFB405] hover:bg-[#e8a204] text-[#000035] font-semibold px-8 py-4 rounded-full transition-colors duration-200"
            >
              {t('common.bookNow')}
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Processing Screen - Full Page
  if (isProcessing) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-8 animate-pulse">
            <Brain className="w-10 h-10 text-blue-600" />
          </div>
          <h2 className="text-2xl font-light text-gray-900 mb-4">
            {t('onboarding.processing.title')}
          </h2>
          <p className="text-gray-600">
            {t('onboarding.processing.subtitle')}
          </p>
          <div className="mt-8">
            <div className="w-64 h-2 bg-gray-200 rounded-full mx-auto overflow-hidden">
              <div className="h-full bg-blue-600 rounded-full animate-pulse" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Onboarding Form - Full Page, Single Screen
  return (
    <div className="min-h-screen bg-white py-6 px-4 flex flex-col">
      <div className="max-w-5xl mx-auto flex-1 flex flex-col">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm text-gray-600 font-medium">
              {t('onboarding.progress.step')} {currentStep + 1} {t('onboarding.progress.of')} {questions.length}
            </span>
            <span className="text-sm text-gray-600 font-medium">
              {Math.round(((currentStep + 1) / questions.length) * 100)}%
            </span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="flex-1 flex flex-col justify-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-8 text-center">
            {t(`onboarding.questions.${currentQuestion.id}.title`)}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {currentQuestion.options.map((option) => {
              const isSelected = currentQuestion.id === 'goals' 
                ? data.goals.includes(option.id)
                : data[currentQuestion.id as keyof OnboardingData] === option.id;

              return (
                <button
                  key={option.id}
                  onClick={() => handleSelection(currentQuestion.id, option.id)}
                  className={`
                    p-4 rounded-xl border-2 transition-all duration-200 text-left min-h-[80px] flex items-center
                    ${isSelected 
                      ? 'border-blue-600 bg-blue-50' 
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                    }
                  `}
                >
                  <div className="flex items-center space-x-3 w-full">
                    {option.icon && (
                      <div className={`
                        w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0
                        ${isSelected ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}
                      `}>
                        <option.icon className="w-4 h-4" />
                      </div>
                    )}
                    <span className={`font-medium text-sm ${isSelected ? 'text-blue-900' : 'text-gray-900'}`}>
                      {option.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => setCurrentStep(prev => prev - 1)}
            disabled={currentStep === 0}
            className={`
              px-6 py-3 rounded-full font-semibold transition-colors duration-200
              ${currentStep === 0 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }
            `}
          >
            {t('common.back')}
          </button>

          <button
            onClick={nextStep}
            disabled={!canProceed()}
            className={`
              px-8 py-3 rounded-full font-semibold transition-colors duration-200 flex items-center
              ${canProceed() 
                ? 'bg-[#FFB405] hover:bg-[#e8a204] text-[#000035]' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }
            `}
          >
            {isLastStep ? t('onboarding.finish') : t('common.continue')}
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
