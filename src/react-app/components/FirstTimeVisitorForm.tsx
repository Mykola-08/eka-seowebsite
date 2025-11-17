import { useState } from 'react';
import { ArrowRight, ArrowLeft, Users, Briefcase, Palette, Music, BookOpen, Dumbbell, CheckCircle, Sparkles, Target, Heart, Calendar, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '@/react-app/contexts/LanguageContext';

interface UserProfile {
  type: string;
  goals: string[];
  timeAvailable: string;
  experience: string;
  intensity: string;
}

interface ServiceRecommendation {
  service: string;
  description: string;
  price: number; // Single price instead of range
  originalPrice?: number; // For discount display
  duration: string;
  benefits: string[];
  icon: React.ComponentType<any>;
  color: string;
  href: string;
  matchPercentage: number;
  specialOffer?: string;
}

export default function FirstTimeVisitorForm({ onClose }: { onClose?: () => void }) {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [profile, setProfile] = useState<UserProfile>({
    type: '',
    goals: [],
    timeAvailable: '',
    experience: '',
    intensity: ''
  });
  const [showRecommendation, setShowRecommendation] = useState(false);

  const userTypes = [
    {
      id: 'office-worker',
      title: t('form.userType.officeWorker'),
      description: t('form.userType.officeWorkerDesc'),
      icon: Briefcase,
      href: '/serveis/treballadors-oficina'
    },
    {
      id: 'athlete',
      title: t('form.userType.athlete'),
      description: t('form.userType.athleteDesc'),
      icon: Dumbbell,
      href: '/serveis/esportistes'
    },
    {
      id: 'artist',
      title: t('form.userType.artist'),
      description: t('form.userType.artistDesc'),
      icon: Palette,
      href: '/serveis/artistes'
    },
    {
      id: 'musician',
      title: t('form.userType.musician'),
      description: t('form.userType.musicianDesc'),
      icon: Music,
      href: '/serveis/musics'
    },
    {
      id: 'student',
      title: t('form.userType.student'),
      description: t('form.userType.studentDesc'),
      icon: BookOpen,
      href: '/serveis/estudiants'
    },
    {
      id: 'general',
      title: t('form.userType.general'),
      description: t('form.userType.generalDesc'),
      icon: Users,
      href: '/services'
    }
  ];

  const goals = [
    t('form.goals.musclePain'),
    t('form.goals.stress'),
    t('form.goals.posture'),
    t('form.goals.relaxation'),
    t('form.goals.recovery'),
    t('form.goals.sleep'),
    t('form.goals.emotions'),
    t('form.goals.energy')
  ];

  const timeOptions = [
    { id: 'short', label: t('form.time.short'), value: '45-60 min' },
    { id: 'standard', label: t('form.time.standard'), value: '60-90 min' },
    { id: 'long', label: t('form.time.long'), value: '90-120 min' }
  ];

  const experienceOptions = [
    { id: 'none', label: t('form.experience.none'), description: t('form.experience.noneDesc') },
    { id: 'some', label: t('form.experience.some'), description: t('form.experience.someDesc') },
    { id: 'experienced', label: t('form.experience.experienced'), description: t('form.experience.experiencedDesc') }
  ];

  const intensityOptions = [
    { id: 'gentle', label: t('form.intensity.gentle'), description: t('form.intensity.gentleDesc') },
    { id: 'medium', label: t('form.intensity.medium'), description: t('form.intensity.mediumDesc') },
    { id: 'deep', label: t('form.intensity.deep'), description: t('form.intensity.deepDesc') }
  ];

  const getRecommendation = (): ServiceRecommendation => {
    const hasPhysicalGoals = profile.goals.some(goal => 
      goal.includes(t('form.goals.musclePain')) || goal.includes(t('form.goals.posture')) || goal.includes(t('form.goals.recovery'))
    );
    const hasEmotionalGoals = profile.goals.some(goal => 
      goal.includes(t('form.goals.stress')) || goal.includes(t('form.goals.relaxation')) || goal.includes(t('form.goals.emotions')) || goal.includes(t('form.goals.sleep'))
    );
    const wantsDeepWork = profile.intensity === 'deep';
    const wantsGentle = profile.intensity === 'gentle';

    if (profile.type === 'office-worker') {
      return {
        service: t('form.recommendation.officeWorker.title'),
        description: t('form.recommendation.officeWorker.desc'),
        price: 75,
        originalPrice: 85,
        duration: profile.timeAvailable || '60-90 min',
        benefits: [
          t('form.recommendation.officeWorker.benefit1'),
          t('form.recommendation.officeWorker.benefit2'),
          t('form.recommendation.officeWorker.benefit3'),
          t('form.recommendation.officeWorker.benefit4')
        ],
        icon: Briefcase,
        color: 'blue',
        href: '/serveis/treballadors-oficina',
        matchPercentage: 95,
        specialOffer: t('form.recommendation.firstTimeDiscount')
      };
    }

    if (profile.type === 'athlete') {
      return {
        service: t('form.recommendation.athlete.title'),
        description: t('form.recommendation.athlete.desc'),
        price: 85,
        originalPrice: 95,
        duration: profile.timeAvailable || '90-120 min',
        benefits: [
          t('form.recommendation.athlete.benefit1'),
          t('form.recommendation.athlete.benefit2'),
          t('form.recommendation.athlete.benefit3'),
          t('form.recommendation.athlete.benefit4')
        ],
        icon: Dumbbell,
        color: 'orange',
        href: '/serveis/esportistes',
        matchPercentage: 92,
        specialOffer: t('form.recommendation.athleteSpecial')
      };
    }

    if (profile.type === 'artist') {
      return {
        service: t('form.recommendation.artist.title'),
        description: t('form.recommendation.artist.desc'),
        price: 70,
        duration: profile.timeAvailable || '60-90 min',
        benefits: [
          t('form.recommendation.artist.benefit1'),
          t('form.recommendation.artist.benefit2'),
          t('form.recommendation.artist.benefit3'),
          t('form.recommendation.artist.benefit4')
        ],
        icon: Palette,
        color: 'purple',
        href: '/serveis/artistes',
        matchPercentage: 88
      };
    }

    if (profile.type === 'musician') {
      return {
        service: t('form.recommendation.musician.title'),
        description: t('form.recommendation.musician.desc'),
        price: 80,
        duration: profile.timeAvailable || '60-90 min',
        benefits: [
          t('form.recommendation.musician.benefit1'),
          t('form.recommendation.musician.benefit2'),
          t('form.recommendation.musician.benefit3'),
          t('form.recommendation.musician.benefit4')
        ],
        icon: Music,
        color: 'green',
        href: '/serveis/musics',
        matchPercentage: 90
      };
    }

    if (profile.type === 'student') {
      return {
        service: t('form.recommendation.student.title'),
        description: t('form.recommendation.student.desc'),
        price: 60,
        originalPrice: 75,
        duration: profile.timeAvailable || '60 min',
        benefits: [
          t('form.recommendation.student.benefit1'),
          t('form.recommendation.student.benefit2'),
          t('form.recommendation.student.benefit3'),
          t('form.recommendation.student.benefit4')
        ],
        icon: BookOpen,
        color: 'indigo',
        href: '/serveis/estudiants',
        matchPercentage: 87,
        specialOffer: t('form.recommendation.studentDiscount')
      };
    }

    // Default recommendation based on goals and preferences
    if (hasPhysicalGoals && hasEmotionalGoals) {
      return {
        service: t('form.recommendation.holistic.title'),
        description: t('form.recommendation.holistic.desc'),
        price: 90,
        duration: profile.timeAvailable || '90 min',
        benefits: [
          t('form.recommendation.holistic.benefit1'),
          t('form.recommendation.holistic.benefit2'),
          t('form.recommendation.holistic.benefit3'),
          t('form.recommendation.holistic.benefit4')
        ],
        icon: Sparkles,
        color: 'gradient',
        href: '/services',
        matchPercentage: 94
      };
    }

    if (hasPhysicalGoals && wantsDeepWork) {
      return {
        service: t('form.recommendation.therapeutic.title'),
        description: t('form.recommendation.therapeutic.desc'),
        price: 70,
        duration: profile.timeAvailable || '60-90 min',
        benefits: [
          t('form.recommendation.therapeutic.benefit1'),
          t('form.recommendation.therapeutic.benefit2'),
          t('form.recommendation.therapeutic.benefit3'),
          t('form.recommendation.therapeutic.benefit4')
        ],
        icon: Heart,
        color: 'blue',
        href: '/serveis/massatge',
        matchPercentage: 91
      };
    }

    if (hasEmotionalGoals || wantsGentle) {
      return {
        service: t('form.recommendation.kinesiology.title'),
        description: t('form.recommendation.kinesiology.desc'),
        price: 80,
        duration: profile.timeAvailable || '90 min',
        benefits: [
          t('form.recommendation.kinesiology.benefit1'),
          t('form.recommendation.kinesiology.benefit2'),
          t('form.recommendation.kinesiology.benefit3'),
          t('form.recommendation.kinesiology.benefit4')
        ],
        icon: Target,
        color: 'purple',
        href: '/serveis/kinesiologia',
        matchPercentage: 89
      };
    }

    // General recommendation
    return {
      service: t('form.recommendation.discovery.title'),
      description: t('form.recommendation.discovery.desc'),
      price: 65,
      originalPrice: 75,
      duration: '90 min',
      benefits: [
        t('form.recommendation.discovery.benefit1'),
        t('form.recommendation.discovery.benefit2'),
        t('form.recommendation.discovery.benefit3'),
        t('form.recommendation.discovery.benefit4')
      ],
      icon: Users,
      color: 'blue',
      href: '/services',
      matchPercentage: 85,
      specialOffer: t('form.recommendation.discoverySpecial')
    };
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowRecommendation(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return profile.type !== '';
      case 2:
        return profile.goals.length > 0;
      case 3:
        return profile.timeAvailable !== '';
      case 4:
        return profile.experience !== '';
      case 5:
        return profile.intensity !== '';
      default:
        return false;
    }
  };

  const recommendation = showRecommendation ? getRecommendation() : null;
  const Icon = recommendation?.icon;

  const generateWhatsAppMessage = (rec: ServiceRecommendation): string => {
    const userName = profile.type === 'office-worker' ? 'treballador/a d\'oficina' :
                     profile.type === 'athlete' ? 'esportista' :
                     profile.type === 'artist' ? 'artista' :
                     profile.type === 'musician' ? 'músic/a' :
                     profile.type === 'student' ? 'estudiant' :
                     'persona interessada en teràpia holística';

    const goalsList = profile.goals.slice(0, 3).join(', ');
    
    return `Hola Elena! 👋

Acabo de completar el formulari de recomanació personalitzada i m'agradaria reservar una sessió.

📋 **El meu perfil:** ${userName}
🎯 **Objectius:** ${goalsList}
⏱️ **Temps disponible:** ${profile.timeAvailable}
💆‍♀️ **Servei recomanat:** ${rec.service}
💰 **Preu:** ${rec.price}€

El sistema m'ha donat una compatibilitat del ${rec.matchPercentage}% amb aquest servei.

Puc reservar una cita? Gràcies! 🌿`;
  };

  const handleWhatsAppContact = (rec: ServiceRecommendation) => {
    const message = generateWhatsAppMessage(rec);
    const whatsappUrl = `https://wa.me/34688491323?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleBookingRedirect = (rec: ServiceRecommendation) => {
    // Store recommendation data for booking page
    localStorage.setItem('recommendedService', JSON.stringify({
      service: rec.service,
      price: rec.price,
      duration: rec.duration,
      userProfile: profile
    }));
    window.location.href = '/booking';
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 border-blue-200 text-blue-900',
      orange: 'bg-orange-50 border-orange-200 text-orange-900',
      purple: 'bg-purple-50 border-purple-200 text-purple-900',
      green: 'bg-green-50 border-green-200 text-green-900',
      indigo: 'bg-indigo-50 border-indigo-200 text-indigo-900',
      gradient: 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200 text-blue-900'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  if (showRecommendation && recommendation) {
    return (
      <div className="bg-white rounded-[40px] max-w-5xl mx-auto p-8 sm:p-12 border border-gray-200 animate-scale-in">
        {/* Success Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-6 py-3 bg-green-50 rounded-full mb-6 border border-green-200">
            <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-green-700 font-medium text-sm">{t('form.recommendation.badge')}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
            {t('form.recommendation.title')}
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('form.recommendation.subtitle')}
          </p>
        </div>

        {/* Enhanced Recommendation Card */}
        <div className={`rounded-[32px] border ${getColorClasses(recommendation.color)} p-8 sm:p-12 mb-8 relative overflow-hidden`}>
          {/* Match Percentage Badge */}
          <div className="absolute top-6 right-6 flex items-center bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 border border-white/50">
            <Star className="w-4 h-4 text-yellow-500 mr-1 fill-current" />
            <span className="text-sm font-semibold text-gray-900">{recommendation.matchPercentage}%</span>
          </div>

          {/* Special Offer Badge */}
          {recommendation.specialOffer && (
            <div className="absolute top-6 left-6 bg-gradient-to-r from-yellow-400 to-orange-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-semibold">
              🎉 {recommendation.specialOffer}
            </div>
          )}

          <div className="text-center">
            {Icon && (
              <div className="w-24 h-24 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8 border border-white/50 shadow-lg">
                <Icon className="w-12 h-12 text-gray-700" />
              </div>
            )}
            
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
              {recommendation.service}
            </h3>
            
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
              {recommendation.description}
            </p>

            {/* Price Display - Enhanced */}
            <div className="bg-white/80 backdrop-blur-sm rounded-[24px] p-8 mb-8 border border-white/50 max-w-md mx-auto">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  {recommendation.originalPrice && (
                    <span className="text-2xl text-gray-400 line-through mr-3">
                      {recommendation.originalPrice}€
                    </span>
                  )}
                  <span className="text-4xl sm:text-5xl font-bold text-gray-900">
                    {recommendation.price}€
                  </span>
                </div>
                <p className="text-gray-600 mb-2">{recommendation.duration}</p>
                {recommendation.originalPrice && (
                  <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Estalvies {recommendation.originalPrice - recommendation.price}€
                  </div>
                )}
              </div>
            </div>

            {/* Benefits - Enhanced Grid */}
            <div className="mb-10">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">{t('form.recommendation.benefits')}:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {recommendation.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start text-gray-700 p-4 bg-white/60 backdrop-blur-sm rounded-[20px] border border-white/30">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button
                onClick={() => handleBookingRedirect(recommendation)}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center hover:scale-[1.02] hover:shadow-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                {t('common.bookNow')}
              </button>

              <button
                onClick={() => handleWhatsAppContact(recommendation)}
                className="bg-[#25D366] hover:bg-[#20bf5a] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center hover:scale-[1.02] hover:shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp
              </button>

              <Link
                to={recommendation.href}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center hover:scale-[1.02]"
              >
                <MapPin className="w-5 h-5 mr-2" />
                {t('common.moreInfo')}
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              {t('form.recommendation.guarantee')}
            </span>
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              Barcelona · Presencial
            </span>
          </div>
          
          <div className="flex justify-center gap-6">
            <button
              onClick={() => setShowRecommendation(false)}
              className="text-gray-500 hover:text-gray-700 font-medium text-sm transition-colors duration-200"
            >
              {t('form.backToForm')}
            </button>
            {onClose && (
              <button
                onClick={onClose}
                className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
              >
                {t('form.close')}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[40px] max-w-4xl mx-auto p-12 sm:p-16 border border-gray-200 animate-fade-in-up">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-8 py-4 bg-blue-50 rounded-full mb-8 border border-blue-200">
          <Sparkles className="w-6 h-6 text-blue-600 mr-3" />
          <span className="text-blue-700 font-medium apple-caption">{t('form.badge')}</span>
        </div>
        
        <h2 className="apple-headline mb-6">
          {t('form.title')}
        </h2>
        
        <p className="apple-subtitle max-w-2xl mx-auto mb-10">
          {t('form.subtitle')}
        </p>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center space-x-3 mb-12">
          {[1, 2, 3, 4, 5].map((step) => (
            <div
              key={step}
              className={`h-2 rounded-full transition-all duration-500 ease-out ${
                step === currentStep 
                  ? 'w-12 bg-blue-600 shadow-md' 
                  : step < currentStep 
                    ? 'w-8 bg-blue-400' 
                    : 'w-6 bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Form Steps */}
      <div className="min-h-[500px]">
        {/* Step 1: User Type */}
        {currentStep === 1 && (
          <div className="animate-fade-in">
            <h3 className="apple-title text-center mb-10 text-gray-900">
              {t('form.step1.question')}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {userTypes.map((type) => {
                const TypeIcon = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => setProfile({ ...profile, type: type.id })}
                    className={`text-left p-8 rounded-[24px] border transition-all duration-300 hover:scale-[1.02] ${
                      profile.type === type.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-6 mt-1 border border-gray-200">
                        <TypeIcon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2 text-lg">{type.title}</h4>
                        <p className="apple-body text-gray-600">{type.description}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 2: Goals */}
        {currentStep === 2 && (
          <div className="animate-fade-in">
            <h3 className="apple-title text-center mb-10 text-gray-900">
              {t('form.step2.question')}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {goals.map((goal) => (
                <button
                  key={goal}
                  onClick={() => {
                    const newGoals = profile.goals.includes(goal)
                      ? profile.goals.filter(g => g !== goal)
                      : [...profile.goals, goal];
                    setProfile({ ...profile, goals: newGoals });
                  }}
                  className={`text-left p-6 rounded-[20px] border transition-all duration-300 hover:scale-[1.02] ${
                    profile.goals.includes(goal)
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 font-medium">{goal}</span>
                    {profile.goals.includes(goal) && (
                      <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 ml-3" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Time Available */}
        {currentStep === 3 && (
          <div className="animate-fade-in">
            <h3 className="apple-title text-center mb-10 text-gray-900">
              {t('form.step3.question')}
            </h3>
            
            <div className="space-y-6">
              {timeOptions.map((time) => (
                <button
                  key={time.id}
                  onClick={() => setProfile({ ...profile, timeAvailable: time.value })}
                  className={`w-full text-left p-8 rounded-[24px] border transition-all duration-300 hover:scale-[1.02] ${
                    profile.timeAvailable === time.value
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">{time.label}</h4>
                  <p className="apple-body text-gray-600">{time.value}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Experience */}
        {currentStep === 4 && (
          <div className="animate-fade-in">
            <h3 className="apple-title text-center mb-10 text-gray-900">
              {t('form.step4.question')}
            </h3>
            
            <div className="space-y-6">
              {experienceOptions.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setProfile({ ...profile, experience: exp.id })}
                  className={`w-full text-left p-8 rounded-[24px] border transition-all duration-300 hover:scale-[1.02] ${
                    profile.experience === exp.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg">{exp.label}</h4>
                  <p className="apple-body text-gray-600">{exp.description}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 5: Intensity Preference */}
        {currentStep === 5 && (
          <div className="animate-fade-in">
            <h3 className="apple-title text-center mb-10 text-gray-900">
              {t('form.step5.question')}
            </h3>
            
            <div className="space-y-6">
              {intensityOptions.map((intensity) => (
                <button
                  key={intensity.id}
                  onClick={() => setProfile({ ...profile, intensity: intensity.id })}
                  className={`w-full text-left p-8 rounded-[24px] border transition-all duration-300 hover:scale-[1.02] ${
                    profile.intensity === intensity.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg">{intensity.label}</h4>
                  <p className="apple-body text-gray-600">{intensity.description}</p>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
        <button
          onClick={handleBack}
          className={`flex items-center px-8 py-4 rounded-full font-medium transition-all duration-300 ${
            currentStep === 1
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:scale-[1.02]'
          }`}
          disabled={currentStep === 1}
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          {t('form.previous')}
        </button>

        <span className="apple-caption text-gray-500">
          {t('form.step')} {currentStep} {t('form.of')} 5
        </span>

        <button
          onClick={handleNext}
          className={`flex items-center px-8 py-4 rounded-full font-medium transition-all duration-300 ${
            canProceed()
              ? 'bg-blue-600 hover:bg-blue-700 text-white hover:scale-[1.02]'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
          disabled={!canProceed()}
        >
          {currentStep === 5 ? t('form.seeRecommendation') : t('form.next')}
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>

      {/* Close Button */}
      {onClose && (
        <div className="text-center mt-8">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-sm transition-colors duration-200"
          >
            {t('form.closeForm')}
          </button>
        </div>
      )}
    </div>
  );
}
