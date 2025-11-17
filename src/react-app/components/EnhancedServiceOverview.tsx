import { ArrowRight, Heart, Briefcase, Star, Target, Brain, Sparkles } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { 
  InView, 
  TextShimmer, 
  AnimatedBackground,
  BorderTrail,
  GlowEffect
} from './MotionPrimitives';

const services = [
  {
    icon: Brain,
    title: 'Sessions Individuals',
    subtitle: 'Atenció personalitzada',
    description: 'Tractaments adaptats específicament a les teves necessitats úniques i objectius de benestar',
    features: ['Massatge terapèutic', 'Kinesiologia', 'Osteobalance', 'Feldenkrais'],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
    badge: 'Més sol·licitat'
  },
  {
    icon: Heart,
    title: 'Teràpia Familiar',
    subtitle: 'Cuidem de tota la família',
    description: 'Sessions especialitzades per a famílies amb nens amb necessitats especials i situacions úniques',
    features: ['Enfocament integral', 'Ambient familiar', 'Tècniques adaptades', 'Seguiment continu'],
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop'
  },
  {
    icon: Briefcase,
    title: 'Serveis Corporatius',
    subtitle: 'Benestar empresarial',
    description: 'Programes integrals de benestar dissenyats per millorar la productivitat i satisfacció dels equips',
    features: ['Sessions al lloc de treball', 'Programes grupals', 'Gestió de l\'estrès', 'Millor rendiment'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    badge: 'Preferit pels clients'
  }
];

const therapyTypes = [
  {
    name: 'Massatge Terapèutic',
    description: 'Alleujar tensions musculars i millorar la circulació',
    icon: '💆‍♀️',
    benefits: ['Reducció del dolor', 'Millora de la circulació', 'Relaxació profunda']
  },
  {
    name: 'Kinesiologia',
    description: 'Equilibri energètic i emocional del cos',
    icon: '⚡',
    benefits: ['Equilibri emocional', 'Reducció de l\'estrès', 'Millora energètica']
  },
  {
    name: 'Osteobalance',
    description: 'Correcció postural i tractament integral',
    icon: '🦴',
    benefits: ['Correcció postural', 'Mobilitat articular', 'Tractament holístic']
  },
  {
    name: 'Feldenkrais',
    description: 'Consciència corporal i moviment fluid',
    icon: '🤸‍♀️',
    benefits: ['Consciència corporal', 'Flexibilitat', 'Moviment natural']
  }
];

const locations = [
  {
    name: 'Barcelona',
    address: 'Plaça Universitat, 5',
    description: 'Centre modern i tranquil al cor de Barcelona',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=400&fit=crop',
    features: ['Equipament complet', 'Ambient tranquil', 'Transport públic', 'Accessible']
  }
];

export default function EnhancedServiceOverview() {
  return (
    <section className="py-24 aurora-section-cool relative">
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
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-sm mb-8">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-sm font-medium text-gray-700">
                Els nostres serveis
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              Teràpies que{' '}
              <TextShimmer className="text-yellow-500 font-medium">
                transformen
              </TextShimmer>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light">
              Descobreix la nostra gamma completa de teràpies integratives, dissenyades per restaurar l'equilibri 
              entre cos, ment i emoció de manera holística i personalitzada.
            </p>
          </div>
        </InView>

        {/* Glow Effects */}
        <GlowEffect className="aurora-orb aurora-orb-large absolute top-40 right-10 opacity-60" />
        <GlowEffect className="aurora-orb aurora-orb-medium absolute bottom-40 left-10 opacity-50" />

        {/* Main Services with Animations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <InView
                key={service.title}
                variants={{ 
                  hidden: { opacity: 0, y: 50 }, 
                  visible: { opacity: 1, y: 0 } 
                }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <BorderTrail>
                  <div className="aurora-glass-card overflow-hidden transition-all duration-300 group h-full">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      <div className="absolute top-6 left-6">
                        <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <Icon className="w-6 h-6 text-gray-700" />
                        </div>
                      </div>
                      {service.badge && (
                        <div className="absolute top-6 right-6">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-800 backdrop-blur-sm">
                            {service.badge}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="p-8">
                      <div className="mb-6">
                        <p className="text-sm font-medium text-yellow-600 mb-2">
                          {service.subtitle}
                        </p>
                        <h3 className="text-2xl font-medium text-gray-900 mb-4">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      
                      <div className="space-y-3 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></div>
                            <span className="text-sm text-gray-600">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Link
                          to="/services"
                          className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium transition-colors group"
                        >
                          Descobrir més
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </BorderTrail>
              </InView>
            );
          })}
        </div>

        {/* Therapy Types with Staggered Animation */}
        <InView
          variants={{ 
            hidden: { opacity: 0 }, 
            visible: { opacity: 1 } 
          }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-32">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-light text-gray-900 mb-6">
                Les nostres especialitats
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Cada teràpia està dissenyada per abordar aspectes específics del teu benestar
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {therapyTypes.map((therapy, index) => (
                <InView
                  key={therapy.name}
                  variants={{ 
                    hidden: { opacity: 0, y: 30 }, 
                    visible: { opacity: 1, y: 0 } 
                  }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 h-full">
                    <div className="text-4xl mb-4">{therapy.icon}</div>
                    <h4 className="text-lg font-medium text-gray-900 mb-3">
                      {therapy.name}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4">
                      {therapy.description}
                    </p>
                    <div className="space-y-2">
                      {therapy.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center justify-center">
                          <Target className="w-3 h-3 text-yellow-500 mr-2" />
                          <span className="text-xs text-gray-500">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </InView>
              ))}
            </div>
          </div>
        </InView>

        {/* Locations with Animation */}
        <InView
          variants={{ 
            hidden: { opacity: 0, y: 30 }, 
            visible: { opacity: 1, y: 0 } 
          }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-20">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-light text-gray-900 mb-6">
                Les nostres ubicacions
              </h3>
              <p className="text-lg text-gray-600">
                Centres especialitzats dissenyats per al teu màxim confort i benestar
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {locations.map((location, index) => (
                <InView
                  key={location.name}
                  variants={{ 
                    hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 }, 
                    visible: { opacity: 1, x: 0 } 
                  }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={location.image}
                        alt={location.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <h4 className="text-2xl font-medium mb-1">{location.name}</h4>
                        <p className="text-white/90 text-sm">{location.address}</p>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <p className="text-gray-600 mb-6">
                        {location.description}
                      </p>
                      <div className="space-y-2">
                        {location.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                            <span className="text-sm text-gray-600">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </InView>
              ))}
            </div>
          </div>
        </InView>

        {/* Featured Revisió 360° with Glow Effect */}
        <InView
          variants={{ 
            hidden: { opacity: 0, scale: 0.9 }, 
            visible: { opacity: 1, scale: 1 } 
          }}
          transition={{ duration: 0.6 }}
        >
          <BorderTrail className="bg-gradient-to-br from-amber-50 via-orange-50/50 to-yellow-50 rounded-3xl p-12 text-center mb-20 relative overflow-hidden">
            <GlowEffect className="absolute top-6 right-6">
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Servei exclusiu
              </span>
            </GlowEffect>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-light text-gray-900 mb-6">
                <TextShimmer>Revisió 360°</TextShimmer>
              </h3>
              <p className="text-xl text-gray-700 font-light mb-8 max-w-2xl mx-auto">
                No cal que triïs. Ens ocupem de tot. Et fem una avaluació completa i 
                t'acompanyem amb el que realment necessites.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <a
                    href="https://360revision.ekabalance.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium px-8 py-4 rounded-2xl hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open('https://360revision.ekabalance.com', '_blank', 'noopener,noreferrer');
                    }}
                  >
                    Descobreix aquest servei
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    to="/booking"
                    className="inline-flex items-center bg-white text-gray-900 font-medium px-8 py-4 rounded-2xl border border-gray-200 hover:bg-gray-50 transition-all duration-300"
                  >
                    Reserva ara
                  </Link>
                </motion.div>
              </div>
            </div>
          </BorderTrail>
        </InView>

        {/* Testimonial with Animation */}
        <InView
          variants={{ 
            hidden: { opacity: 0, y: 30 }, 
            visible: { opacity: 1, y: 0 } 
          }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
            <div className="flex justify-center mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current mx-1" />
              ))}
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-light text-gray-900 mb-8 italic">
              "L'Elena té un do especial per trobar exactament el que necessita el teu cos. 
              Després de les seves sessions, sempre surto renovada i amb més energia."
            </blockquote>
            
            <div className="flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face"
                alt="Maria Rodríguez"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div className="text-left">
                <p className="font-medium text-gray-900">Maria Rodríguez</p>
                <p className="text-sm text-gray-500">Client habitual · Barcelona</p>
              </div>
            </div>
          </div>
        </InView>
      </div>
    </section>
  );
}
