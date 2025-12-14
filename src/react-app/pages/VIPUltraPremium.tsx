/* eslint-disable @typescript-eslint/no-explicit-any */
import Layout from '@/react-app/components/Layout';
import SEOHead from '@/react-app/components/SEOHead';
import { Crown, Home, Clock, Sparkles, ArrowRight, CheckCircle, Shield, Star, Heart, Phone, Award, Zap, Globe, Diamond, User, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/react-app/hooks/useLanguage';
import { useSupabaseAuth } from '@/react-app/hooks/useSupabaseAuth';
import { supabase } from '@/react-app/lib/supabase';
import { Link } from 'react-router';

const iconMap = {
  Diamond,
  Award,
  Globe,
  Zap
};

const defaultPlans = [
  {
    tier: 'bronze',
    name: 'Bronze',
    description: 'Accés essencial al món VIP',
    price: '150',
    sessions: '2',
    popular: false,
    features: ['Accés prioritari', 'Descomptes en serveis addicionals', 'Atenció personalitzada']
  },
  {
    tier: 'silver',
    name: 'Silver',
    description: 'Equilibri perfecte per a la teva salut',
    price: '250',
    sessions: '4',
    popular: true,
    features: ['Tots els beneficis Bronze', 'Sessions a domicili', 'Seguiment mensual']
  },
  {
    tier: 'gold',
    name: 'Gold',
    description: 'L\'experiència definitiva sense límits',
    price: '500',
    sessions: '8',
    popular: false,
    features: ['Tots els beneficis Silver', 'Disponibilitat 24/7', 'Accés a esdeveniments exclusius']
  }
];

const defaultLuxuryFeatures = [
  {
    icon: 'Diamond',
    title: 'Exclusivitat Total',
    description: 'Accés limitat a un grup selecte de membres per garantir la màxima atenció.'
  },
  {
    icon: 'Award',
    title: 'Excel·lència Certificada',
    description: 'Professionals amb la màxima qualificació i experiència internacional.'
  },
  {
    icon: 'Globe',
    title: 'Cobertura Global',
    description: 'Serveis disponibles allà on siguis, amb la mateixa qualitat de sempre.'
  },
  {
    icon: 'Zap',
    title: 'Resposta Immediata',
    description: 'Canal de comunicació directe i prioritari per a qualsevol necessitat.'
  }
];

const vipServices = [
  {
    icon: Home,
    title: 'Desplaçaments exclusius',
    description: 'Servei VIP a domicili o oficina amb total discreció i flexibilitat horària absoluta',
    features: ['Equip portàtil de luxe', 'Horaris 24/7 disponibles', 'Màxima privacitat', 'Transport premium inclòs']
  },
  {
    icon: Clock,
    title: 'Seguiment personalitzat',
    description: 'Monitoratge continu de salut amb tecnologia avançada i atenció mèdica personalitzada',
    features: ['Anàlisi biomètrics', 'Informes mensuals PDF', 'Consulta telemàtica', 'Seguiment 365 dies']
  },
  {
    icon: Sparkles,
    title: 'Privilegis familiars',
    description: 'Extensió dels beneficis VIP a la teva família directa amb condicions preferents',
    features: ['Parella inclosa', 'Fills amb descompte', 'Sessions transferibles', 'Atenció familiar prioritària']
  },
  {
    icon: Shield,
    title: 'Accés prioritari',
    description: 'Garantia d\'atenció immediata amb temps de resposta exclusius per a membres VIP',
    features: ['Resposta menor a 2h', 'Urgències 24/7', 'Línia directa VIP', 'Disponibilitat garantida']
  }
];

const testimonials = [
  {
    name: 'Marina Castellví',
    role: 'CEO, Tech Company',
    rating: 5,
    comment: 'El servei Gold VIP ha transformat completament la meva qualitat de vida. L\'atenció personalitzada i la disponibilitat 24/7 són incomparables.',
    tier: 'GOLD'
  },
  {
    name: 'Dr. Albert Vidal',
    role: 'Cirurgià cardiovascular',
    rating: 5,
    comment: 'Com a professional de la salut, puc afirmar que EKA Balance ofereix un estàndard d\'excel·lència que supera les meves expectatives més exigents.',
    tier: 'GOLD'
  },
  {
    name: 'Laura Montserrat',
    role: 'Emprenedora',
    rating: 5,
    comment: 'El pla Silver VIP m\'ha permès cuidar la meva família i mantenir l\'equilibri entre vida professional i personal. Una inversió que val la pena.',
    tier: 'SILVER'
  }
];

export default function VIPUltraPremium() {
  const { t } = useLanguage();
  const { user } = useSupabaseAuth();
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
  const [vipTier, setVipTier] = useState<string>('none');
  const [loadingTier, setLoadingTier] = useState(true);
  const [plans, setPlans] = useState<any[]>([]);
  const [luxuryFeatures, setLuxuryFeatures] = useState<any[]>([]);

  useEffect(() => {
    const fetchContent = async () => {
      const { data: plansData } = await supabase
        .from('content_blocks')
        .select('data')
        .eq('key', 'vip_features')
        .single();
      
      if (plansData) {
        setPlans(plansData.data as any[]);
      } else {
        setPlans(defaultPlans);
      }

      const { data: luxuryData } = await supabase
        .from('content_blocks')
        .select('data')
        .eq('key', 'luxury_features')
        .single();
      
      if (luxuryData) {
        setLuxuryFeatures(luxuryData.data as any[]);
      } else {
        setLuxuryFeatures(defaultLuxuryFeatures);
      }
    };
    fetchContent();
  }, []);

  useEffect(() => {
    if (user) {
      const fetchTier = async () => {
        const { data } = await supabase
          .from('user_profiles')
          .select('vip_tier')
          .eq('user_id', user.id)
          .single();
        
        if (data) {
          setVipTier(data.vip_tier || 'none');
        }
        setLoadingTier(false);
      };
      fetchTier();
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLoadingTier(false);
    }
  }, [user]);

  const getTierColors = (tier: string) => {
    switch (tier) {
      case 'bronze':
        return {
          border: 'border-amber-200',
          accent: 'text-amber-600',
          bg: 'bg-amber-50',
          gradient: 'from-amber-600 to-amber-700'
        };
      case 'silver':
        return {
          border: 'border-gray-300',
          accent: 'text-gray-700',
          bg: 'bg-gray-50',
          gradient: 'from-gray-500 to-gray-700'
        };
      case 'gold':
        return {
          border: 'border-yellow-300',
          accent: 'text-yellow-600',
          bg: 'bg-yellow-50',
          gradient: 'from-yellow-500 to-yellow-600'
        };
      default:
        return {
          border: 'border-gray-200',
          accent: 'text-gray-600',
          bg: 'bg-gray-50',
          gradient: 'from-gray-400 to-gray-600'
        };
    }
  };

  return (
    <Layout>
      <SEOHead
        title="Inner Circle VIP - Experiència Premium Exclusiva | EKA Balance"
        description="Uneix-te al cercle interior VIP d'EKA Balance. Plans Bronze, Silver i Gold Elite amb beneficis exclusius, atenció 24/7 i experiències personalitzades."
        keywords="VIP Elite Barcelona, plans exclusius salut, cercle interior wellness, control salut premium"
      />
      
      {/* Ultra Premium Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 overflow-hidden">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/20 to-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/15 to-purple-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-12"></div>
        </div>

        {/* Luxury Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 text-center text-white">
          {/* Ultra Premium Badge */}
          <div className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-yellow-400/20 to-amber-500/20 backdrop-blur-xl border border-yellow-400/30 rounded-full mb-16">
            <Diamond className="mr-4 w-8 h-8 text-yellow-400" />
            <span className="text-white font-bold tracking-wider text-xl">{t('vip.hero.badge')}</span>
            <Diamond className="ml-4 w-8 h-8 text-yellow-400" />
          </div>

          <h1 className="text-7xl sm:text-8xl lg:text-9xl font-light mb-12 leading-tight tracking-tighter">
            <span className="block bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
              {t('vip.hero.title.beyond')}
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl font-medium text-white/90 italic mt-4">
              {t('vip.hero.title.wellness')}
            </span>
          </h1>

          <p className="text-2xl sm:text-3xl text-white/80 mb-20 max-w-5xl mx-auto font-light leading-relaxed">
            {t('vip.hero.subtitle')}
          </p>

          {/* Luxury CTA */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
            <a
              href="https://wa.me/34658867133?text=Hola,%20estic%20interessat%20en%20els%20plans%20VIP%20Inner%20Circle.%20M'agradaria%20rebre%20més%20informació."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-gray-900 font-bold px-12 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-yellow-400/30"
            >
              <span className="text-xl tracking-wide">{t('vip.hero.cta.join')}</span>
              <Crown className="ml-4 w-7 h-7 group-hover:animate-bounce" />
            </a>

            <a
              href="tel:+34658867133"
              className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold px-12 py-6 rounded-full transition-all duration-300"
            >
              <Phone className="w-6 h-6 mr-4" />
              <span className="text-xl tracking-wide">658 867 133</span>
            </a>
          </div>

          {/* Exclusive Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-light text-yellow-400 mb-2">&lt; 1%</div>
              <div className="text-white/70 text-sm uppercase tracking-wider">{t('vip.stats.clients')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-yellow-400 mb-2">24/7</div>
              <div className="text-white/70 text-sm uppercase tracking-wider">{t('vip.stats.concierge')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-yellow-400 mb-2">100%</div>
              <div className="text-white/70 text-sm uppercase tracking-wider">{t('vip.stats.exclusivity')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-yellow-400 mb-2">∞</div>
              <div className="text-white/70 text-sm uppercase tracking-wider">{t('vip.stats.possibilities')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Member Dashboard Section (Visible only to logged-in users) */}
      {user && !loadingTier && (
        <section className="py-16 bg-gray-900 border-y border-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <User className="w-6 h-6 text-yellow-400" />
                  <span className="text-yellow-400 font-medium tracking-wider text-sm">{t('vip.dashboard.member')}</span>
                </div>
                <h2 className="text-3xl text-white font-light mb-2">
                  {t('vip.dashboard.hello')} <span className="font-medium">{user.email?.split('@')[0]}</span>
                </h2>
                <p className="text-gray-400">
                  {t('vip.dashboard.status')} <span className={`font-bold ${vipTier !== 'none' ? 'text-yellow-400' : 'text-gray-300'}`}>{vipTier === 'none' ? 'Estàndard' : `${vipTier.toUpperCase()} ELITE`}</span>
                </p>
              </div>

              <div className="flex gap-4">
                {vipTier !== 'none' ? (
                  <Link 
                    to="/booking" 
                    className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-bold transition-colors"
                  >
                    <Calendar className="w-5 h-5" />
                    {t('vip.dashboard.priorityBooking')}
                  </Link>
                ) : (
                  <button 
                    onClick={() => document.getElementById('plans-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-medium transition-colors border border-white/20"
                  >
                    <Crown className="w-5 h-5 text-yellow-400" />
                    {t('vip.dashboard.viewPlans')}
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Luxury Features Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-2 bg-yellow-100 rounded-full mb-8">
              <Sparkles className="mr-2 w-5 h-5 text-yellow-600" />
              <span className="text-yellow-700 font-medium text-sm tracking-wide">{t('vip.features.badge')}</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
              {t('vip.features.title')}
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light">
              {t('vip.features.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {luxuryFeatures.map((feature, index) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap] || Diamond;
              return (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 shadow-xl hover:shadow-2xl border border-gray-100 hover:border-yellow-200 transition-all duration-300">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ultra Premium Plans Section */}
      <section id="plans-section" className="py-32 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -rotate-12"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-2 bg-white/10 backdrop-blur-md rounded-full mb-8">
              <Crown className="mr-2 w-5 h-5 text-yellow-400" />
              <span className="text-white font-medium text-sm tracking-wide">{t('vip.plans.badge')}</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-light mb-6 leading-tight">
              {t('vip.plans.title')}
            </h2>
            <p className="text-2xl text-white/80 max-w-4xl mx-auto font-light">
              {t('vip.plans.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan) => {
              const colors = getTierColors(plan.tier);
              const isHovered = hoveredPlan === plan.tier;
              
              return (
                <div
                  key={plan.tier}
                  onMouseEnter={() => setHoveredPlan(plan.tier)}
                  onMouseLeave={() => setHoveredPlan(null)}
                  className={`relative group ${plan.popular ? 'lg:scale-110 lg:-translate-y-8' : ''}`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 px-8 py-3 rounded-full text-sm font-bold shadow-lg">
                        {t('vip.plans.popular')}
                      </div>
                    </div>
                  )}

                  {/* Premium Card */}
                  <div className={`relative h-full bg-white/5 backdrop-blur-lg border-2 rounded-3xl overflow-hidden transition-all duration-500 ${
                    isHovered ? 'shadow-2xl border-white/30 transform scale-105' : 'shadow-lg border-white/10'
                  }`}>
                    <div className="p-10">
                      {/* Header */}
                      <div className="text-center mb-10">
                        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${colors.gradient} mb-8 transition-transform duration-300 ${isHovered ? 'scale-110 rotate-3' : ''}`}>
                          <Crown className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-3xl font-light text-white mb-4">
                          {plan.name}
                        </h3>
                        <p className="text-white/70 mb-8 font-light text-lg">
                          {plan.description}
                        </p>
                        <div className="flex items-baseline justify-center mb-2">
                          <span className="text-6xl font-light text-white">
                            {plan.price}
                          </span>
                          <span className="text-2xl text-white/60 ml-2">{t('vip.plans.perMonth')}</span>
                        </div>
                        <p className="text-white/50 text-sm">
                          {plan.sessions} {t('vip.plans.sessions')}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="space-y-5 mb-12">
                        {plan.features.map((feature: string, featureIndex: number) => (
                          <div
                            key={featureIndex}
                            className="flex items-center space-x-4"
                          >
                            <div className="w-6 h-6 rounded-full bg-green-400/20 flex items-center justify-center flex-shrink-0">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                            </div>
                            <span className="text-white/90 font-light text-lg">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <a
                        href={`https://wa.me/34658867133?text=Hola,%20estic%20interessat%20en%20el%20pla%20VIP%20${plan.name}.%20M'agradaria%20rebre%20més%20informació.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block w-full text-center py-5 rounded-full font-bold text-lg transition-all duration-300 ${
                          plan.popular
                            ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 hover:from-yellow-500 hover:to-amber-600 shadow-lg hover:shadow-xl'
                            : 'bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20'
                        }`}
                      >
                        {t('vip.plans.contact')} {plan.name}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Premium Benefits Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-light text-gray-900 mb-6">
              {t('vip.exclusivePrivileges')} 
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light">
              {t('vip.features.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {vipServices.map((service, serviceIndex) => {
              const Icon = service.icon;
              
              return (
                <div
                  key={serviceIndex}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 hover:border-yellow-200">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-xl rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-lg mb-6 font-light leading-relaxed">
                          {service.description}
                        </p>
                        <div className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center space-x-3"
                            >
                              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                              <span className="text-gray-700 font-light">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials without profile images */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-light text-gray-900 mb-6">
              {t('vip.testimonials.title')}
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light">
              {t('vip.testimonials.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, testimonialIndex) => (
              <div
                key={testimonialIndex}
                className="group"
              >
                <div className="bg-white rounded-3xl p-10 hover:shadow-2xl transition-all duration-300 h-full border border-gray-100">
                  {/* Tier Badge */}
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider ${
                      testimonial.tier === 'GOLD'
                        ? 'bg-yellow-400 text-gray-900'
                        : 'bg-gray-200 text-gray-700'
                    }`}>
                      {testimonial.tier} ELITE
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-700 text-lg mb-10 leading-relaxed font-light">
                    &quot;{testimonial.comment}&quot;
                  </blockquote>

                  {/* Author */}
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ultra Luxury Final CTA */}
      <section className="py-32 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        {/* Ultra premium background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 text-center">
          <div className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-yellow-400/20 to-amber-500/20 backdrop-blur-xl border border-yellow-400/30 rounded-full mb-16">
            <Heart className="mr-4 w-6 h-6 text-yellow-400" />
            <span className="text-white font-bold tracking-wider text-lg">{t('vip.cta.badge')}</span>
            <Heart className="ml-4 w-6 h-6 text-yellow-400" />
          </div>

          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-light text-white mb-12 leading-tight">
            {t('vip.cta.title')}<br />
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent font-medium italic">
              {t('vip.hero.title.beyond')}
            </span>
          </h2>

          <p className="text-2xl text-gray-300 mb-20 max-w-4xl mx-auto font-light leading-relaxed">
            {t('vip.cta.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
            <a
              href="https://wa.me/34658867133?text=Hola,%20estic%20interessat%20en%20unir-me%20al%20Inner%20Circle%20VIP.%20M'agradaria%20una%20consulta%20personalitzada."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-gray-900 font-bold px-12 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-yellow-400/30"
            >
              <span className="text-xl tracking-wide">{t('vip.hero.cta.join')}</span>
              <ArrowRight className="ml-4 w-7 h-7 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <a
              href="tel:+34658867133"
              className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold px-12 py-6 rounded-full transition-all duration-300"
            >
              <Phone className="w-6 h-6 mr-4" />
              <span className="text-xl tracking-wide">658 867 133</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
