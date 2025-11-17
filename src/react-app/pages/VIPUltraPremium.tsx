import Layout from '@/react-app/components/Layout';
import SEOHead from '@/react-app/components/SEOHead';
import { Crown, Home, Clock, Sparkles, ArrowRight, CheckCircle, Shield, Star, Heart, Phone, Award, Zap, Globe, Diamond } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/react-app/contexts/LanguageContext';

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

const plans = [
  {
    name: 'Bronze Elite',
    price: '390',
    sessions: 2,
    description: 'Accés exclusiu al món VIP',
    features: [
      '2 sessions mensuals (1,5h)',
      'Control de salut integral',
      'Desplaçaments inclosos',
      'Seguiment personalitzat',
      'Accés prioritari',
      'Material premium'
    ],
    popular: false,
    tier: 'bronze'
  },
  {
    name: 'Silver Elite',
    price: '690',
    sessions: 3,
    description: 'L\'equilibri perfecte per a professionals',
    features: [
      '3 sessions mensuals (1,5h)',
      'Control de salut avançat',
      'Desplaçaments premium',
      'Família 50% descompte',
      'Sessions transferibles',
      'Consultoria nutricional',
      'Línia directa VIP'
    ],
    popular: true,
    tier: 'silver'
  },
  {
    name: 'Gold Elite',
    price: '990',
    sessions: 4,
    description: 'L\'experiència VIP definitiva',
    features: [
      '4 sessions mensuals (1,5h)',
      'Control de salut premium',
      'Desplaçaments 24/7',
      'Família completament gratuïta',
      'Sessions il·limitades transferibles',
      'Consultoria integral',
      'Concierge de salut personal',
      'Accés exclusiu a esdeveniments'
    ],
    popular: false,
    tier: 'gold'
  }
];

const luxuryFeatures = [
  {
    icon: Diamond,
    title: 'Experiència Diamond',
    description: 'Servei d\'elit amb els millors professionals i tecnologia més avançada del sector'
  },
  {
    icon: Award,
    title: 'Certificació Internacional',
    description: 'Reconeixement mundial per excel·lència en serveis de salut i benestar premium'
  },
  {
    icon: Globe,
    title: 'Xarxa Global Elite',
    description: 'Accés a centres d\'elit i especialistes reconeguts internacionalment'
  },
  {
    icon: Zap,
    title: 'Tecnologia d\'Avantguarda',
    description: 'Equips i tècniques més innovadores per a resultats excepcionals i ràpids'
  }
];

export default function VIPUltraPremium() {
  const { t } = useLanguage();
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

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
            <span className="text-white font-bold tracking-wider text-xl">INNER CIRCLE ELITE</span>
            <Diamond className="ml-4 w-8 h-8 text-yellow-400" />
          </div>

          <h1 className="text-7xl sm:text-8xl lg:text-9xl font-light mb-12 leading-tight tracking-tighter">
            <span className="block bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
              BEYOND
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl font-medium text-white/90 italic mt-4">
              wellness
            </span>
          </h1>

          <p className="text-2xl sm:text-3xl text-white/80 mb-20 max-w-5xl mx-auto font-light leading-relaxed">
            Entra al cercle més exclusiu de salut i benestar a Barcelona.<br />
            <span className="text-yellow-400 font-medium">Només per a aquells que busquen la perfecció.</span>
          </p>

          {/* Luxury CTA */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
            <a
              href="https://wa.me/34658867133?text=Hola,%20estic%20interessat%20en%20els%20plans%20VIP%20Inner%20Circle.%20M'agradaria%20rebre%20més%20informació."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-gray-900 font-bold px-12 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-yellow-400/30"
            >
              <span className="text-xl tracking-wide">UNIR-ME A L'INNER CIRCLE</span>
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
              <div className="text-white/70 text-sm uppercase tracking-wider">Clients Elite</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-yellow-400 mb-2">24/7</div>
              <div className="text-white/70 text-sm uppercase tracking-wider">Concierge</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-yellow-400 mb-2">100%</div>
              <div className="text-white/70 text-sm uppercase tracking-wider">Exclusivitat</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-yellow-400 mb-2">∞</div>
              <div className="text-white/70 text-sm uppercase tracking-wider">Possibilitats</div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Features Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-2 bg-yellow-100 rounded-full mb-8">
              <Sparkles className="mr-2 w-5 h-5 text-yellow-600" />
              <span className="text-yellow-700 font-medium text-sm tracking-wide">EXPERIÈNCIA INIGUALABLE</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
              Benvingut a <span className="text-yellow-500 font-medium">l'elit</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light">
              Descobreix què significa formar part del cercle més exclusiu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {luxuryFeatures.map((feature, index) => {
              const Icon = feature.icon;
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
      <section className="py-32 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
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
              <span className="text-white font-medium text-sm tracking-wide">MEMBRESIES D'ELIT</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-light mb-6 leading-tight">
              Tria la teva <span className="text-yellow-400 font-medium">experiència elite</span>
            </h2>
            <p className="text-2xl text-white/80 max-w-4xl mx-auto font-light">
              Cada pla està meticulosament dissenyat per oferir una experiència inoblidable.
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
                        MÉS EXCLUSIU
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
                          <span className="text-2xl text-white/60 ml-2">€/mes</span>
                        </div>
                        <p className="text-white/50 text-sm">
                          {plan.sessions} sessions exclusives mensuals
                        </p>
                      </div>

                      {/* Features */}
                      <div className="space-y-5 mb-12">
                        {plan.features.map((feature, featureIndex) => (
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
                        Contactar per a {plan.name}
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
              Beneficis que només els membres de l'Inner Circle poden gaudir.
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
              Veus d'<span className="text-yellow-500 font-medium">excel·lència</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light">
              Experiències reals dels nostres membres de l'Inner Circle.
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
            <span className="text-white font-bold tracking-wider text-lg">L'INNER CIRCLE T'ESPERA</span>
            <Heart className="ml-4 w-6 h-6 text-yellow-400" />
          </div>

          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-light text-white mb-12 leading-tight">
            Preparat per<br />
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent font-medium italic">
              transcendir
            </span>
          </h2>

          <p className="text-2xl text-gray-300 mb-20 max-w-4xl mx-auto font-light leading-relaxed">
            Només els qui busquen l'excel·lència poden formar part d'aquesta experiència única.<br />
            <span className="text-yellow-400 font-medium">La teva transformació comença aquí.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
            <a
              href="https://wa.me/34658867133?text=Hola,%20estic%20interessat%20en%20unir-me%20al%20Inner%20Circle%20VIP.%20M'agradaria%20una%20consulta%20personalitzada."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-gray-900 font-bold px-12 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-yellow-400/30"
            >
              <span className="text-xl tracking-wide">UNIR-ME A L'INNER CIRCLE</span>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-white/10">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-yellow-400 font-semibold text-lg mb-2">UBICACIÓ EXCLUSIVA</h3>
              <p className="text-white/70">📍 Carrer Pelai, 12, Barcelona</p>
              <p className="text-white/50 text-sm mt-2">Centre d'excel·lència internacional</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-yellow-400 font-semibold text-lg mb-2">SERVEI CONCIERGE</h3>
              <p className="text-white/70">🕐 Disponibilitat 24/7 per a Gold</p>
              <p className="text-white/50 text-sm mt-2">Atenció personalitzada sempre</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-yellow-400 font-semibold text-lg mb-2">GARANTIA TOTAL</h3>
              <p className="text-white/70">📞 Línia directa VIP exclusiva</p>
              <p className="text-white/50 text-sm mt-2">Satisfacció garantida al 100%</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
