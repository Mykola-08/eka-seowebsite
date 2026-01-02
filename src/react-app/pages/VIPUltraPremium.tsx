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
    name: 'vip.plan.bronze',
    description: 'vip.plan.bronze.description',
    price: 'vip.plan.bronze.price',
    sessions: '2',
    popular: false,
    features: ['vip.service.priority.title', 'vip.benefits.transferable', 'vip.benefits.monthly']
  },
  {
    tier: 'silver',
    name: 'vip.plan.silver',
    description: 'vip.plan.silver.description',
    price: 'vip.plan.silver.price',
    sessions: '4',
    popular: true,
    features: ['vip.plan.bronze', 'vip.service.displacements.title', 'vip.benefits.monthlyDesc']
  },
  {
    tier: 'gold',
    name: 'vip.plan.gold',
    description: 'vip.plan.gold.description',
    price: 'vip.plan.gold.price',
    sessions: '8',
    popular: false,
    features: ['vip.plan.silver', 'vip.stats.concierge', 'vip.service.family.title']
  }
];

const defaultLuxuryFeatures = [
  {
    icon: 'Diamond',
    title: 'vip.mostExclusive',
    description: 'vip.experienceDescription'
  },
  {
    icon: 'Award',
    title: 'vip.voicesOfExcellence',
    description: 'vip.testimonialsSubtitle'
  },
  {
    icon: 'Globe',
    title: 'vip.benefits.barcelona',
    description: 'vip.benefits.barcelonaDesc'
  },
  {
    icon: 'Zap',
    title: 'vip.service.priority.title',
    description: 'vip.service.priority.description'
  }
];

const vipServices = [
  {
    icon: Home,
    title: 'vip.service.displacements.title',
    description: 'vip.service.displacements.description',
    features: ['vip.benefits.barcelona', 'vip.stats.concierge', 'vip.service.priority.title', 'vip.benefits.transferable']
  },
  {
    icon: Clock,
    title: 'vip.service.health.title',
    description: 'vip.service.health.description',
    features: ['vip.benefits.monthly', 'vip.benefits.monthlyDesc', 'vip.stats.control', 'vip.benefits.sessions']
  },
  {
    icon: Sparkles,
    title: 'vip.service.family.title',
    description: 'vip.service.family.description',
    features: ['vip.stats.family', 'vip.benefits.transferable', 'vip.benefits.transferableDesc', 'vip.service.family.title']
  },
  {
    icon: Shield,
    title: 'vip.service.priority.title',
    description: 'vip.service.priority.description',
    features: ['vip.stats.concierge', 'vip.service.priority.title', 'vip.service.priority.description', 'vip.stats.exclusivity']
  }
];

const testimonials = [
  {
    name: 'Marina Castellví',
    role: 'vip.testimonials.role1',
    rating: 5,
    comment: 'vip.testimonials.comment1',
    tier: 'GOLD'
  },
  {
    name: 'Dr. Albert Vidal',
    role: 'vip.testimonials.role2',
    rating: 5,
    comment: 'vip.testimonials.comment2',
    tier: 'GOLD'
  },
  {
    name: 'Laura Montserrat',
    role: 'vip.testimonials.role3',
    rating: 5,
    comment: 'vip.testimonials.comment3',
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
          border: 'border-amber-500/30',
          hoverBorder: 'border-amber-400/60',
          accent: 'text-amber-400',
          bg: 'bg-amber-900/10',
          gradient: 'from-amber-600 to-amber-700',
          shadow: 'shadow-amber-500/10'
        };
      case 'silver':
        return {
          border: 'border-slate-400/30',
          hoverBorder: 'border-slate-200/60',
          accent: 'text-slate-200',
          bg: 'bg-slate-800/10',
          gradient: 'from-slate-400 to-slate-600',
          shadow: 'shadow-slate-400/10'
        };
      case 'gold':
        return {
          border: 'border-yellow-500/40',
          hoverBorder: 'border-yellow-400',
          accent: 'text-yellow-400',
          bg: 'bg-yellow-900/20',
          gradient: 'from-yellow-400 via-yellow-500 to-amber-600',
          shadow: 'shadow-yellow-500/30',
          glow: 'shadow-[0_0_30px_rgba(234,179,8,0.2)]'
        };
      default:
        return {
          border: 'border-gray-500/30',
          hoverBorder: 'border-gray-400',
          accent: 'text-gray-400',
          bg: 'bg-gray-800/10',
          gradient: 'from-gray-500 to-gray-600',
          shadow: 'shadow-gray-500/5'
        };
    }
  };

  return (
    <Layout>
      <SEOHead
        title={t('seo.vip.title')}
        description={t('seo.vip.description')}
        keywords={t('seo.vip.keywords')}
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
          <div className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-yellow-900/40 via-yellow-600/20 to-yellow-900/40 backdrop-blur-xl border border-yellow-500/50 rounded-2xl mb-16 shadow-[0_0_30px_rgba(234,179,8,0.2)]">
            <Diamond className="mr-4 w-6 h-6 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
            <span className="text-yellow-100 font-bold tracking-[0.2em] text-lg uppercase bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 bg-clip-text text-transparent">{t('vip.hero.badge')}</span>
            <Diamond className="ml-4 w-6 h-6 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
          </div>

          <h1 className="text-7xl sm:text-8xl lg:text-9xl font-extralight mb-12 leading-tight tracking-tighter">
            <span className="block bg-gradient-to-b from-yellow-100 via-yellow-300 to-yellow-600 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(234,179,8,0.3)]">
              {t('vip.hero.title.beyond')}
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl font-light text-gray-300 italic mt-6 tracking-wide">
              {t('vip.hero.title.wellness')}
            </span>
          </h1>

          <p className="text-2xl sm:text-3xl text-white/80 mb-20 max-w-5xl mx-auto font-light leading-relaxed">
            {t('vip.hero.subtitle')}
          </p>

          {/* Luxury CTA */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
            <a
              href={`https://wa.me/34658867133?text=${encodeURIComponent(t('vip.whatsapp.messageGeneral'))}`}
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { val: '< 1%', label: 'vip.stats.clients' },
              { val: '24/7', label: 'vip.stats.concierge' },
              { val: '100%', label: 'vip.stats.exclusivity' },
              { val: '∞', label: 'vip.stats.possibilities' }
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 border border-yellow-500/20 bg-yellow-900/5 rounded-2xl backdrop-blur-sm hover:border-yellow-500/40 transition-colors duration-300">
                <div className="text-4xl font-light text-yellow-400 mb-2 drop-shadow-[0_0_10px_rgba(234,179,8,0.3)]">{stat.val}</div>
                <div className="text-yellow-100/60 text-xs uppercase tracking-[0.2em]">{t(stat.label)}</div>
              </div>
            ))}
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
                  {t('vip.dashboard.status')} <span className={`font-bold ${vipTier !== 'none' ? 'text-yellow-400' : 'text-gray-300'}`}>{vipTier === 'none' ? t('vip.tier.standard') : `${vipTier.toUpperCase()} ELITE`}</span>
                </p>
              </div>

              <div className="flex gap-4">
                {vipTier !== 'none' ? (
                  <Link
                    to="/booking"
                    className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black px-6 py-3 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(234,179,8,0.4)] hover:shadow-[0_0_25px_rgba(234,179,8,0.6)]"
                  >
                    <Calendar className="w-5 h-5" />
                    {t('vip.dashboard.priorityBooking')}
                  </Link>
                ) : (
                  <button
                    onClick={() => document.getElementById('plans-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-full font-medium transition-colors border border-yellow-500/30 hover:border-yellow-400/60 shadow-[0_0_10px_rgba(234,179,8,0.1)]"
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
            <div className="inline-flex items-center px-6 py-2 bg-yellow-100 rounded-2xl mb-8">
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
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 shadow-xl hover:shadow-[0_20px_50px_rgba(234,179,8,0.15)] border border-gray-100 hover:border-yellow-400/50 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100/20 rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-150"></div>
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-[0_10px_20px_rgba(234,179,8,0.3)]">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-700 transition-colors">{t(feature.title)}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed font-light">{t(feature.description)}</p>
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
            <div className="inline-flex items-center px-6 py-2 bg-yellow-500/10 backdrop-blur-md rounded-2xl mb-8 border border-yellow-400/20">
              <Crown className="mr-2 w-5 h-5 text-yellow-400" />
              <span className="text-yellow-200 font-medium text-sm tracking-wide">{t('vip.plans.badge')}</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-light mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent">
                {t('vip.plans.title')}
              </span>
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
                  <div className={`relative h-full backdrop-blur-lg border-2 rounded-3xl overflow-hidden transition-all duration-500 ${isHovered
                      ? `shadow-2xl ${colors.hoverBorder} transform scale-105 ${colors.glow || ''}`
                      : `shadow-lg ${colors.border} ${colors.bg}`
                    }`}>
                    <div className="p-10">
                      {/* Header */}
                      <div className="text-center mb-10">
                        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${colors.gradient} mb-8 transition-transform duration-300 ${isHovered ? 'scale-110 rotate-3 shadow-lg' : ''}`}>
                          <Crown className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-3xl font-light text-white mb-4">
                          {t(plan.name)}
                        </h3>
                        <p className="text-white/70 mb-8 font-light text-lg">
                          {t(plan.description)}
                        </p>
                        <div className="flex items-baseline justify-center mb-2">
                          <span className="text-6xl font-light text-white">
                            {t(plan.price)}
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
                            <span className="text-white/90 font-light text-lg">{t(feature)}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <a
                        href={`https://wa.me/34658867133?text=${encodeURIComponent(t('vip.whatsapp.message', { plan: t(plan.name) }))}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block w-full text-center py-5 rounded-full font-bold text-lg transition-all duration-300 ${plan.popular
                          ? `bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 hover:from-yellow-500 hover:to-amber-600 shadow-xl ${colors.shadow}`
                          : 'bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20'
                          }`}
                      >
                        {t('vip.plans.contact')} {t(plan.name)}
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
                          {t(service.title)}
                        </h3>
                        <p className="text-gray-600 text-lg mb-6 font-light leading-relaxed">
                          {t(service.description)}
                        </p>
                        <div className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center space-x-3"
                            >
                              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                              <span className="text-gray-700 font-light">{t(feature)}</span>
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
                    <div className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider ${testimonial.tier === 'GOLD'
                      ? 'bg-yellow-400 text-gray-900'
                      : 'bg-gray-200 text-gray-700'
                      }`}>
                      {testimonial.tier} ELITE
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-700 text-lg mb-10 leading-relaxed font-light">
                    &quot;{t(testimonial.comment)}&quot;
                  </blockquote>

                  {/* Author */}
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">{testimonial.name}</p>
                    <p className="text-gray-500">{t(testimonial.role)}</p>
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
          <div className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-yellow-900/40 via-yellow-600/20 to-yellow-900/40 backdrop-blur-xl border border-yellow-500/50 rounded-full mb-16 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
            <Heart className="mr-4 w-6 h-6 text-yellow-400 drop-shadow-[0_0_5px_rgba(234,179,8,0.5)]" />
            <span className="text-yellow-100 font-bold tracking-wider text-lg">{t('vip.cta.badge')}</span>
            <Heart className="ml-4 w-6 h-6 text-yellow-400 drop-shadow-[0_0_5px_rgba(234,179,8,0.5)]" />
          </div>

          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-light text-white mb-12 leading-tight">
            {t('vip.cta.title')}<br />
            <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent font-medium italic drop-shadow-[0_0_15px_rgba(234,179,8,0.2)]">
              {t('vip.hero.title.beyond')}
            </span>
          </h2>

          <p className="text-2xl text-gray-300 mb-20 max-w-4xl mx-auto font-light leading-relaxed">
            {t('vip.cta.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
            <a
              href={`https://wa.me/34658867133?text=${encodeURIComponent(t('vip.whatsapp.messageGeneral'))}`}
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
