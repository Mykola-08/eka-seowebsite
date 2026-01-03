/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import {
  Crown, Home, Clock, Sparkles, ArrowRight, CheckCircle,
  Shield, Star, Heart, Phone, Award, Zap, Globe, Diamond,
  User, Calendar
} from 'lucide-react';

import SEOHead from '@/react-app/components/SEOHead';
import Layout from '@/react-app/components/Layout';
import { useLanguage } from '@/react-app/hooks/useLanguage';
import { useSupabaseAuth } from '@/react-app/hooks/useSupabaseAuth';
import { supabase } from '@/react-app/lib/supabase';

// --- Constants & Data ---

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

// --- Components ---

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
    const fetchTier = async () => {
      if (user) {
        const { data } = await supabase
          .from('user_profiles')
          .select('vip_tier')
          .eq('user_id', user.id)
          .single();

        if (data) {
          setVipTier(data.vip_tier || 'none');
        }
      }
      setLoadingTier(false);
    };

    if (user) {
      fetchTier();
    } else {
      const timer = setTimeout(() => setLoadingTier(false), 0);
      return () => clearTimeout(timer);
    }
  }, [user]);

  const getTierColors = (tier: string) => {
    switch (tier) {
      case 'bronze':
        return {
          border: 'border-amber-700/50',
          hoverBorder: 'border-amber-500',
          accent: 'text-amber-500',
          bg: 'bg-amber-950/30',
          gradient: 'from-amber-700 to-amber-900',
          shadow: 'shadow-amber-900/20'
        };
      case 'silver':
        return {
          border: 'border-zinc-400/30',
          hoverBorder: 'border-zinc-200',
          accent: 'text-zinc-300',
          bg: 'bg-zinc-800/30',
          gradient: 'from-zinc-400 to-zinc-600',
          shadow: 'shadow-zinc-500/10'
        };
      case 'gold':
        return {
          border: 'border-amber-400/50',
          hoverBorder: 'border-amber-300',
          accent: 'text-amber-300',
          bg: 'bg-amber-900/20',
          gradient: 'from-amber-300 via-amber-500 to-amber-700',
          shadow: 'shadow-amber-500/30',
          glow: 'shadow-[0_0_30px_rgba(245,158,11,0.2)]'
        };
      default:
        return {
          border: 'border-zinc-700',
          hoverBorder: 'border-zinc-500',
          accent: 'text-zinc-500',
          bg: 'bg-zinc-900/50',
          gradient: 'from-zinc-700 to-zinc-800',
          shadow: 'shadow-zinc-900/50'
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

      <div className="bg-black min-h-screen text-white selection:bg-amber-500/30">

        {/* --- Hero Section --- */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-black to-black" />
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px]"
              animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-700/10 rounded-full blur-[100px]"
              animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.2, 1] }}
              transition={{ duration: 10, repeat: Infinity, delay: 2 }}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-950/20 backdrop-blur-sm mb-8"
            >
              <Crown className="w-4 h-4 text-amber-400" />
              <span className="text-amber-200 text-xs font-medium tracking-[0.2em] uppercase">
                {t('vip.hero.badge')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8"
            >
              <span className="block text-white mb-2">{t('vip.hero.title.beyond')}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 font-medium italic">
                {t('vip.hero.title.wellness')}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed mb-12"
            >
              {t('vip.hero.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <a
                href={`https://wa.me/34658867133?text=${encodeURIComponent(t('vip.whatsapp.messageGeneral'))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-amber-500 text-black font-medium rounded-full overflow-hidden transition-transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-2">
                  {t('vip.hero.cta.join')}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>

              <a
                href="tel:+34658867133"
                className="px-8 py-4 border border-zinc-700 text-zinc-300 rounded-full hover:bg-zinc-900 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>658 867 133</span>
              </a>
            </motion.div>
          </div>
        </section>

        {/* --- Member Dashboard (Conditional) --- */}
        {user && !loadingTier && (
          <section className="py-12 border-y border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <User className="w-5 h-5 text-amber-400" />
                    <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">{t('vip.dashboard.member')}</span>
                  </div>
                  <h2 className="text-2xl font-light text-white">
                    {t('vip.dashboard.hello')} <span className="font-medium text-amber-100">{user.email?.split('@')[0]}</span>
                  </h2>
                  <p className="text-zinc-400 mt-1">
                    {t('vip.dashboard.status')} <span className={`font-medium ${vipTier !== 'none' ? 'text-amber-400' : 'text-zinc-500'}`}>
                      {vipTier === 'none' ? t('vip.tier.standard') : `${vipTier.toUpperCase()} ELITE`}
                    </span>
                  </p>
                </div>

                <div className="flex gap-4">
                  {vipTier !== 'none' ? (
                    <Link
                      to="/booking"
                      className="px-6 py-3 bg-amber-500 text-black rounded-full font-medium hover:bg-amber-400 transition-colors flex items-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      {t('vip.dashboard.priorityBooking')}
                    </Link>
                  ) : (
                    <button
                      onClick={() => document.getElementById('plans-section')?.scrollIntoView({ behavior: 'smooth' })}
                      className="px-6 py-3 border border-amber-500/30 text-amber-200 rounded-full hover:bg-amber-950/30 transition-colors flex items-center gap-2"
                    >
                      <Crown className="w-4 h-4" />
                      {t('vip.dashboard.viewPlans')}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* --- Luxury Features --- */}
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-amber-500 text-sm font-medium tracking-[0.2em] uppercase block mb-4">
                {t('vip.features.badge')}
              </span>
              <h2 className="text-4xl md:text-5xl font-light mb-6">{t('vip.features.title')}</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto font-light text-lg">
                {t('vip.features.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {luxuryFeatures.map((feature, index) => {
                const Icon = iconMap[feature.icon as keyof typeof iconMap] || Diamond;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-amber-500/30 transition-all duration-500"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-7 h-7 text-amber-400" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-3 group-hover:text-amber-200 transition-colors">
                      {t(feature.title)}
                    </h3>
                    <p className="text-zinc-400 font-light leading-relaxed">
                      {t(feature.description)}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- Plans Section --- */}
        <section id="plans-section" className="py-32 bg-zinc-900/30 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-amber-500 text-sm font-medium tracking-[0.2em] uppercase block mb-4">
                {t('vip.plans.badge')}
              </span>
              <h2 className="text-4xl md:text-5xl font-light mb-6">{t('vip.plans.title')}</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {plans.map((plan, index) => {
                const colors = getTierColors(plan.tier);
                const isHovered = hoveredPlan === plan.tier;

                return (
                  <motion.div
                    key={plan.tier}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredPlan(plan.tier)}
                    onMouseLeave={() => setHoveredPlan(null)}
                    className={`relative rounded-3xl border transition-all duration-500 overflow-hidden ${plan.popular ? 'lg:-mt-8 lg:mb-8 z-10' : ''
                      } ${isHovered ? colors.hoverBorder : colors.border} ${colors.bg} ${plan.tier === 'gold' && isHovered ? 'shadow-[0_0_60px_rgba(245,158,11,0.3)] ring-1 ring-amber-400/50 scale-[1.02]' : ''
                      }`}
                  >
                    {plan.tier === 'gold' && (
                      <div className={`absolute inset-0 bg-gradient-to-tr from-amber-500/0 via-amber-500/5 to-amber-500/0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
                    )}
                    {plan.popular && (
                      <div className="absolute top-0 left-0 w-full py-2 bg-amber-500 text-black text-center text-xs font-bold uppercase tracking-wider">
                        {t('vip.plans.popular')}
                      </div>
                    )}

                    <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                      <div className="text-center mb-8">
                        <h3 className={`text-2xl font-light mb-2 ${colors.accent}`}>
                          {t(plan.name)}
                        </h3>
                        <div className="flex items-baseline justify-center gap-1 mb-4">
                          <span className="text-4xl font-medium text-white">{t(plan.price)}</span>
                          <span className="text-zinc-500 text-sm">{t('vip.plans.perMonth')}</span>
                        </div>
                        <p className="text-zinc-400 text-sm font-light min-h-[3rem]">
                          {t(plan.description)}
                        </p>
                      </div>

                      <div className="space-y-4 mb-8">
                        {plan.features.map((feature: string, i: number) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle className={`w-5 h-5 flex-shrink-0 ${colors.accent}`} />
                            <span className="text-zinc-300 text-sm font-light">{t(feature)}</span>
                          </div>
                        ))}
                      </div>

                      <a
                        href={`https://wa.me/34658867133?text=${encodeURIComponent(t('vip.whatsapp.message', { plan: t(plan.name) }))}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block w-full py-4 rounded-xl text-center font-medium transition-all duration-300 ${plan.popular
                            ? 'bg-amber-500 text-black hover:bg-amber-400'
                            : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                          }`}
                      >
                        {t('vip.plans.contact')}
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- Exclusive Privileges --- */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-light mb-6">{t('vip.exclusivePrivileges')}</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {vipServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="group p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800 hover:border-amber-500/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                        <Icon className="w-6 h-6 text-amber-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-white mb-3">{t(service.title)}</h3>
                        <p className="text-zinc-400 font-light mb-6 text-sm leading-relaxed">
                          {t(service.description)}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                              <span className="text-zinc-300 text-xs font-light">{t(feature)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- Testimonials --- */}
        <section className="py-32 bg-zinc-900/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-light mb-6">{t('vip.testimonials.title')}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-3xl bg-black border border-zinc-800"
                >
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                      ))}
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${testimonial.tier === 'GOLD' ? 'bg-amber-500/20 text-amber-400' : 'bg-zinc-800 text-zinc-400'
                      }`}>
                      {testimonial.tier}
                    </span>
                  </div>
                  <blockquote className="text-zinc-300 font-light italic mb-8 leading-relaxed">
                    "{t(testimonial.comment)}"
                  </blockquote>
                  <div>
                    <div className="text-white font-medium">{testimonial.name}</div>
                    <div className="text-zinc-500 text-sm">{t(testimonial.role)}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Final CTA --- */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-amber-950/10 to-black pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-amber-500/30 bg-amber-950/30 backdrop-blur-sm mb-12">
              <Heart className="w-4 h-4 text-amber-400" />
              <span className="text-amber-200 text-sm font-medium tracking-wider">{t('vip.cta.badge')}</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-light mb-8">
              {t('vip.cta.title')}
              <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 font-medium italic">
                {t('vip.hero.title.beyond')}
              </span>
            </h2>

            <p className="text-xl text-zinc-400 mb-12 font-light">
              {t('vip.cta.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href={`https://wa.me/34658867133?text=${encodeURIComponent(t('vip.whatsapp.messageGeneral'))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-amber-500 text-black font-medium rounded-full hover:bg-amber-400 transition-all hover:scale-105 shadow-lg shadow-amber-900/20"
              >
                {t('vip.hero.cta.join')}
              </a>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
