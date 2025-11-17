import { useState } from 'react';
import { CheckCircle, Sparkles, Crown, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { useBooking } from './BookingProvider';
import { useDiscount } from '@/react-app/contexts/DiscountContext';
import { 
  InView, 
  TextShimmer, 
  AnimatedNumber,
  Tilt,
  Magnetic,
  BorderTrail,
  GlowEffect,
  AnimatedBackground
} from './MotionPrimitives';

const plans = [
  {
    id: 'individual',
    name: 'Sessió Individual',
    price: 65,
    originalPrice: null,
    sessions: 1,
    validityMonths: 1,
    popular: false,
    description: 'Perfecte per començar el teu viatge de benestar',
    features: [
      'Una sessió de 60 minuts',
      'Consulta inicial inclosa',
      'Suport per email',
      'Material informatiu personalitzat'
    ],
    icon: Heart,
    buttonText: 'Reservar sessió'
  },
  {
    id: 'pack-benestar',
    name: 'Pack Benestar',
    price: 180,
    originalPrice: 195,
    sessions: 3,
    validityMonths: 2,
    popular: true,
    description: 'La millor opció per veure resultats reals',
    features: [
      '3 sessions de 60 minuts',
      'Reserva prioritària',
      'Seguiment personalitzat',
      'Descompte del 8%',
      'Suport telefònic'
    ],
    icon: Sparkles,
    buttonText: 'Començar ara'
  },
  {
    id: 'pack-premium',
    name: 'Pack Premium',
    price: 350,
    originalPrice: 390,
    sessions: 6,
    validityMonths: 4,
    popular: false,
    description: 'Transformació completa amb resultats duradors',
    features: [
      '6 sessions de 60 minuts',
      'Terapeuta dedicat',
      'Pla personalitzat',
      'Descompte del 10%',
      'Suport prioritari 24/7',
      'Revisió trimestral'
    ],
    icon: Crown,
    buttonText: 'Triar Premium'
  }
];

const features = [
  {
    title: 'Sense compromisos',
    description: 'Cancel·la o canvia la teva cita fins 24h abans sense cost'
  },
  {
    title: 'Garantia de satisfacció',
    description: 'Si no estàs satisfet amb la primera sessió, te la reemborsen'
  },
  {
    title: 'Professionals certificats',
    description: 'Tots els nostres terapeutes tenen certificacions oficials'
  },
  {
    title: 'Equip professional',
    description: 'Utilitzem només equip i productes de màxima qualitat'
  }
];

export default function EnhancedPricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const { navigateToBooking } = useBooking();
  const { calculateDiscountedPrice, selectedDiscount } = useDiscount();

  const formatPrice = (price: number) => `${price}€`;

  const calculateSavings = (price: number, originalPrice: number | null) => {
    if (!originalPrice) return 0;
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  };

  return (
    <section className="py-24 aurora-bg-subtle relative overflow-hidden">
      <AnimatedBackground className="absolute inset-0" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Animated Header */}
        <InView
          variants={{ 
            hidden: { opacity: 0, y: 30 }, 
            visible: { opacity: 1, y: 0 } 
          }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-20">
            <GlowEffect>
              <div className="inline-flex items-center px-6 py-3 bg-yellow-100 rounded-full mb-8">
                <Sparkles className="w-5 h-5 text-yellow-600 mr-2" />
                <span className="text-yellow-600 font-medium">Tarifes transparents</span>
              </div>
            </GlowEffect>
            
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              Tria el teu{' '}
              <TextShimmer className="text-yellow-500 font-medium">
                pla de benestar
              </TextShimmer>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Packs dissenyats per a cada necessitat, amb la flexibilitat i qualitat que et mereixes
            </p>
          </div>
        </InView>

        {/* Glow Effects */}
        <GlowEffect className="aurora-orb aurora-orb-medium absolute top-32 right-10 opacity-40" />
        <GlowEffect className="aurora-orb aurora-orb-small absolute bottom-32 left-10 opacity-50" />

        {/* Animated Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const discountedPrice = calculateDiscountedPrice(plan.price);
            const originalSavings = calculateSavings(plan.price, plan.originalPrice);
            const additionalSavings = selectedDiscount ? plan.price - discountedPrice : 0;
            const totalSavings = originalSavings + (additionalSavings > 0 ? Math.round((additionalSavings / plan.price) * 100) : 0);
            
            return (
              <InView
                key={plan.id}
                variants={{ 
                  hidden: { opacity: 0, y: 50 }, 
                  visible: { opacity: 1, y: 0 } 
                }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <BorderTrail>
                  <Tilt
                    className={`aurora-glass-card relative cursor-pointer transition-all duration-300 h-full ${
                      plan.popular 
                        ? 'ring-2 ring-yellow-400/50 transform scale-105' 
                        : selectedPlan === plan.id
                        ? 'ring-2 ring-yellow-400/50'
                        : ''
                    }`}
                    onClick={() => setSelectedPlan(selectedPlan === plan.id ? null : plan.id)}
                  >
                    {/* Popular Badge */}
                    {plan.popular && (
                      <GlowEffect className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                        <div className="bg-yellow-400 text-gray-900 px-4 py-1.5 rounded-full text-sm font-medium shadow-lg">
                          Més popular
                        </div>
                      </GlowEffect>
                    )}

                    {/* Savings Badge */}
                    {(originalSavings > 0 || selectedDiscount) && (
                      <div className="absolute top-6 right-6 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                        Estalvia {totalSavings}%
                      </div>
                    )}

                    <div className="p-8">
                      {/* Icon & Title */}
                      <div className="text-center mb-8">
                        <GlowEffect className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                          <Icon className="w-8 h-8 text-yellow-600" />
                        </GlowEffect>
                        
                        <h3 className="text-2xl font-medium text-gray-900 mb-2">
                          {plan.name}
                        </h3>
                        
                        <p className="text-gray-600 text-sm">
                          {plan.description}
                        </p>
                      </div>

                      {/* Animated Pricing */}
                      <div className="text-center mb-8">
                        <div className="mb-2">
                          <span className="text-4xl font-light text-gray-900">
                            <AnimatedNumber value={Math.round(discountedPrice)} />€
                          </span>
                          {(plan.originalPrice || selectedDiscount) && (
                            <span className="text-lg text-gray-400 line-through ml-2">
                              {formatPrice(plan.originalPrice || plan.price)}
                            </span>
                          )}
                        </div>
                        {selectedDiscount && (
                          <div className="text-sm text-green-600 font-medium mb-2">
                            {selectedDiscount.name} aplicat (-{selectedDiscount.percentage}%)
                          </div>
                        )}
                        <div className="text-sm text-gray-500">
                          {plan.sessions} sessió{plan.sessions > 1 ? 's' : ''} · Validesa {plan.validityMonths} mes{plan.validityMonths > 1 ? 'os' : ''}
                        </div>
                      </div>

                      {/* Features */}
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-600">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <Magnetic>
                        <button
                          onClick={navigateToBooking}
                          className={`w-full py-4 rounded-xl font-medium transition-all duration-200 text-center ${
                            plan.popular
                              ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-900 shadow-sm hover:shadow-md'
                              : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                          }`}
                        >
                          {plan.buttonText}
                        </button>
                      </Magnetic>
                    </div>
                  </Tilt>
                </BorderTrail>
              </InView>
            );
          })}
        </div>

        {/* Animated Features Grid */}
        <InView
          variants={{ 
            hidden: { opacity: 0 }, 
            visible: { opacity: 1 } 
          }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <InView
                key={feature.title}
                variants={{ 
                  hidden: { opacity: 0, y: 20 }, 
                  visible: { opacity: 1, y: 0 } 
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Tilt className="bg-gray-50 rounded-2xl p-6 text-center h-full">
                  <GlowEffect className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-yellow-600" />
                  </GlowEffect>
                  <h4 className="font-medium text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {feature.description}
                  </p>
                </Tilt>
              </InView>
            ))}
          </div>
        </InView>

        {/* Animated Bottom CTA */}
        <InView
          variants={{ 
            hidden: { opacity: 0, y: 30 }, 
            visible: { opacity: 1, y: 0 } 
          }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <BorderTrail className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-medium text-gray-900 mb-4">
                No estàs segur quin pla triar?
              </h3>
              <p className="text-gray-600 mb-6">
                Fes la nostra avaluació gratuïta i descobreix quin tractament s'adapta millor a les teves necessitats
              </p>
              <Magnetic>
                <Link
                  to="/services"
                  className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium transition-colors group"
                >
                  Descobrir els nostres serveis
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Magnetic>
            </BorderTrail>
          </div>
        </InView>
      </div>
    </section>
  );
}
