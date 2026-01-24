"use client";

import { useState, useEffect } from 'react';
import { CheckCircle, Sparkles, Crown, Heart, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useBooking } from '@/hooks/useBooking';
import { useDiscount } from '@/contexts/DiscountContext';
import { useAnalytics } from '@/hooks/useAnalytics';
import { useLanguage } from '@/contexts/LanguageContext';
// import { supabase } from '@/lib/supabase';

const iconMap = {
  Heart,
  Sparkles,
  Crown
};

const features = [
  {
    title: 'pricing.guarantee.nocommitment.title',
    description: 'pricing.guarantee.nocommitment.desc'
  },
  {
    title: 'pricing.guarantee.satisfaction.title',
    description: 'pricing.guarantee.satisfaction.desc'
  },
  {
    title: 'pricing.guarantee.certified.title',
    description: 'pricing.guarantee.certified.desc'
  },
  {
    title: 'pricing.guarantee.equipment.title',
    description: 'pricing.guarantee.equipment.desc'
  }
];

type PricingPlan = {
  id: string;
  name: string;
  price: number;
  originalPrice: number | null;
  description: string;
  features: string[];
  icon: string;
  popular: boolean;
};

export default function PricingSection() {
  const { t } = useLanguage();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [plans] = useState<PricingPlan[]>([
    {
      id: 'basic',
      name: 'pricing.plan.basic.name',
      price: 60,
      originalPrice: null,
      description: 'pricing.plan.basic.desc',
      features: ['pricing.feature.massage', 'pricing.feature.kinesiology', 'pricing.feature.osteopathy'],
      icon: 'Heart',
      popular: false
    },
    {
      id: 'pack3',
      name: 'pricing.plan.pack3.name',
      price: 165,
      originalPrice: 180,
      description: 'pricing.plan.pack3.desc',
      features: ['pricing.feature.save15', 'pricing.feature.valid3months', 'pricing.feature.transferable'],
      icon: 'Sparkles',
      popular: true
    },
    {
      id: 'pack5',
      name: 'pricing.plan.pack5.name',
      price: 275,
      originalPrice: 300,
      description: 'pricing.plan.pack5.desc',
      features: ['pricing.feature.save25', 'pricing.feature.valid6months', 'pricing.feature.priority'],
      icon: 'Crown',
      popular: false
    }
  ]);
  const { navigateToBooking } = useBooking();
  const { logEvent } = useAnalytics();
  const { calculateDiscountedPrice, selectedDiscount } = useDiscount();

  useEffect(() => {
    /*
    const fetchData = async () => {
      const { data } = await supabase
        .from('content_blocks')
        .select('data')
        .eq('key', 'pricing_plans')
        .single();

      if (data) {
        // setPlans(data.data as PricingPlan[]);
      }
    };
    fetchData();
    */
    // Plans are now statically defined in the state initialization
    /* const staticPlans = [
      {
        id: 'basic',
        name: 'Sessió Individual',
        price: 60,
        originalPrice: null,
        description: 'Una sessió completa de 60 minuts',
        features: ['Massatge Terapèutic', 'Kinesiologia', 'Osteopatia Suau'],
        icon: 'Heart',
        popular: false
      },
      {
        id: 'pack3',
        name: 'Pack Benestar (3)',
        price: 165,
        originalPrice: 180,
        description: 'Pack de 3 sessions per un seguiment continu',
        features: ['Estalvia 15€', 'Vàlid per 3 mesos', 'Transferible'],
        icon: 'Sparkles',
        popular: true
      },
      {
        id: 'pack5',
        name: 'Pack Transformació (5)',
        price: 275,
        originalPrice: 300,
        description: 'Tractament integral per canvis profunds',
        features: ['Estalvia 25€', 'Vàlid per 6 mesos', 'Prioritat de reserva'],
        icon: 'Crown',
        popular: false
      }
    ];
    // setPlans(staticPlans);
    */
  }, []);

  const formatPrice = (price: number) => `${price}€`;

  const calculateSavings = (price: number, originalPrice: number | null) => {
    if (!originalPrice) return 0;
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  };

  return (
    <section className="py-24 aurora-bg-subtle relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-2 bg-accent-light/20 border border-accent-light/30 rounded-full mb-8">
            <span className="text-accent-dark font-medium text-sm uppercase tracking-wide">{t('pricing.badge')}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-eka-dark mb-8">
            {t('pricing.title.part1')}{' '}
            <span className="text-accent font-medium">
              {t('pricing.title.part2')}
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Aurora Orbs */}
        <div className="aurora-orb aurora-orb-medium absolute top-32 right-10 opacity-40"></div>
        <div className="aurora-orb aurora-orb-small absolute bottom-32 left-10 opacity-50"></div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          {plans.map((plan) => {
            const Icon = iconMap[plan.icon as keyof typeof iconMap] || Heart;
            const discountedPrice = calculateDiscountedPrice(plan.price);
            const originalSavings = calculateSavings(plan.price, plan.originalPrice);
            const additionalSavings = selectedDiscount ? plan.price - discountedPrice : 0;
            const totalSavings = originalSavings + (additionalSavings > 0 ? Math.round((additionalSavings / plan.price) * 100) : 0);

            return (
              <div
                key={plan.id}
                className={`aurora-glass-card squircle-large relative cursor-pointer transition-all duration-300 ${plan.popular
                  ? 'ring-2 ring-accent/50 transform scale-105'
                  : selectedPlan === plan.id
                    ? 'ring-2 ring-accent/50'
                    : ''
                  }`}
                onClick={() => setSelectedPlan(selectedPlan === plan.id ? null : plan.id)}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-accent text-eka-dark px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">
                      {t('pricing.popular')}
                    </div>
                  </div>
                )}

                {/* Savings Badge */}
                {(originalSavings > 0 || selectedDiscount) && (
                  <div className="absolute top-6 right-6 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                    {t('pricing.save', { percent: totalSavings })}
                  </div>
                )}

                <div className="p-8">
                  {/* Icon & Title */}
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-accent/10 squircle flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>

                    <h3 className="text-2xl font-medium text-eka-dark mb-2">
                      {t(plan.name)}
                    </h3>

                    <p className="text-gray-600 text-sm">
                      {t(plan.description)}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-8">
                    <div className="mb-2">
                      <span className="text-4xl font-light text-eka-dark">
                        {formatPrice(Math.round(discountedPrice))}
                      </span>
                      {(plan.originalPrice || selectedDiscount) && (
                        <span className="text-lg text-gray-400 line-through ml-2">
                          {formatPrice(plan.originalPrice || plan.price)}
                        </span>
                      )}
                    </div>
                    {selectedDiscount && (
                      <div className="text-sm text-green-600 font-medium mb-2">
                        {selectedDiscount.name} {t('pricing.discount_applied')} (-{selectedDiscount.percentage}%)
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature: string, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">
                          {t(feature)}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => {
                      logEvent('select_pricing_plan', {
                        plan_id: plan.id,
                        plan_name: plan.name,
                        price: plan.price
                      });
                      navigateToBooking(plan.name);
                    }}
                    className={`w-full py-4 rounded-apple font-medium transition-all duration-200 text-center ${plan.popular
                      ? 'bg-accent hover:bg-accent-dark text-eka-dark shadow-sm hover:shadow-md'
                      : 'bg-gray-100 hover:bg-gray-200 text-eka-dark'
                      }`}
                  >
                    {t('pricing.plan.select')}
                  </button>
                </div>
              </div>
            );
          })}
        </div>


        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-50 squircle p-6 text-center"
            >
              <div className="w-12 h-12 bg-accent/10 squircle flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-medium text-eka-dark mb-2">
                {t(feature.title)}
              </h4>
              <p className="text-sm text-gray-600">
                {t(feature.description)}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gray-50 rounded-apple-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-medium text-eka-dark mb-4">
              {t('pricing.cta.unsure.title')}
            </h3>
            <p className="text-gray-600 mb-6">
              {t('pricing.cta.unsure.subtitle')}
            </p>
            <Link
              href="/services"
              className="inline-flex items-center text-accent hover:text-accent-dark font-medium transition-colors group"
            >
              {t('pricing.cta.unsure.button')}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

