import Layout from '@/react-app/components/Layout';
import SEOHead from '@/react-app/components/SEOHead';
import { Crown, CheckCircle, Star, Heart, Shield, Clock, Users, Sparkles, Award, Zap, Globe, Phone } from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '@/react-app/contexts/LanguageContext';

const testimonials = [
  {
    name: 'Marina Soler',
    role: 'Empresària',
    rating: 5,
    comment: 'Sóc client Gold VIP des de fa un any. La comoditat de tenir les sessions a casa i el seguiment constant de la meva salut han canviat la meva qualitat de vida completament.',
    tier: 'GOLD'
  },
  {
    name: 'Albert Roca',
    role: 'Director executiu',
    rating: 5,
    comment: 'El Silver VIP em permet cuidar la meva família i a mi mateix. Els desplaçaments a la feina són perfectes per al meu horari executiu.',
    tier: 'SILVER'
  },
  {
    name: 'Carmen Vidal',
    role: 'Metgessa',
    rating: 5,
    comment: 'El Bronze VIP és perfecte per començar. L\'atenció personalitzada i els controls mensuals m\'han ajudat a millorar significativament la meva salut.',
    tier: 'BRONZE'
  }
];

const exclusiveFeatures = [
  {
    icon: Crown,
    title: 'Servei Exclusiu 24/7',
    description: 'Accés prioritari i disponibilitat completa per a emergències i consultes urgents'
  },
  {
    icon: Shield,
    title: 'Garantia de Resultats',
    description: 'Assegurem millores mesurables o reemborsar el 100% del cost del tractament'
  },
  {
    icon: Sparkles,
    title: 'Tecnologia Avançada',
    description: 'Equips de darrera generació i tècniques innovadores per a resultats superiors'
  },
  {
    icon: Globe,
    title: 'Xarxa Internacional',
    description: 'Accés a especialistes i centres d\'elit a nivell mundial per a casos complexos'
  },
  {
    icon: Award,
    title: 'Certificacions Premium',
    description: 'Tots els nostres terapeutes tenen certificacions internacionals d\'excel·lència'
  },
  {
    icon: Zap,
    title: 'Resultats Accelerats',
    description: 'Protocols intensius per a recuperació ràpida i eficient'
  }
];

export default function VIPNew() {
  const { t } = useLanguage();

  

  const vipServices = [
    {
      icon: Heart,
      title: t('vip.service.displacements.title'),
      description: t('vip.service.displacements.description'),
      features: ['Equip professional portàtil', 'Horaris adaptats a tu', 'Privacitat absoluta', 'Transport inclòs segons pla']
    },
    {
      icon: Shield,
      title: t('vip.service.health.title'),
      description: t('vip.service.health.description'),
      features: ['Tests de salut regulars', 'Informes detallats en PDF', 'Anàlisi personalitzada', 'Seguiment constant']
    },
    {
      icon: Users,
      title: t('vip.service.family.title'),
      description: t('vip.service.family.description'),
      features: ['Parella i fills coberts', 'Descomptes segons pla', 'Sessions transferibles', 'Atenció familiar integral']
    },
    {
      icon: Clock,
      title: t('vip.service.priority.title'),
      description: t('vip.service.priority.description'),
      features: ['Temps de resposta garantit', 'Sortides urgents', 'Consulta prioritària', 'Disponibilitat preferent']
    }
  ];

  return (
    <Layout>
      <SEOHead
        title={t('vip.title')}
        description={t('vip.description')}
        keywords="plans VIP salut Barcelona, control salut mensual, sessions familiars, Bronze Silver Gold VIP, EKA Balance VIP"
      />
      
      {/* Luxury Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 text-center text-white">
          {/* Premium Badge */}
          <div className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-12">
            <Crown className="mr-3 w-6 h-6 text-yellow-400" />
            <span className="text-white font-medium tracking-wide text-lg">EXPERIÈNCIA VIP EXCLUSIVA</span>
            <Crown className="ml-3 w-6 h-6 text-yellow-400" />
          </div>
          
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-light mb-8 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              EKA BALANCE
            </span>
            <br />
            <span className="text-4xl sm:text-5xl md:text-6xl font-medium text-white/90">
              VIP ELITE
            </span>
          </h1>
          
          <p className="text-2xl sm:text-3xl text-white/80 mb-16 max-w-4xl mx-auto font-light leading-relaxed">
            {t('vip.hero.subtitle')} <br />
            <span className="text-yellow-400 font-medium">Perquè mereixes el millor.</span>
          </p>

          {/* Luxury Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-20 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl sm:text-6xl font-light text-yellow-400 mb-3">24/7</div>
              <div className="text-white/70 text-sm uppercase tracking-wider">Disponibilitat</div>
            </div>
            <div className="text-center">
              <div className="text-5xl sm:text-6xl font-light text-yellow-400 mb-3">1.5h</div>
              <div className="text-white/70 text-sm uppercase tracking-wider">Sessions exclusives</div>
            </div>
            <div className="text-center">
              <div className="text-5xl sm:text-6xl font-light text-yellow-400 mb-3">100%</div>
              <div className="text-white/70 text-sm uppercase tracking-wider">Satisfacció</div>
            </div>
            <div className="text-center">
              <div className="text-5xl sm:text-6xl font-light text-yellow-400 mb-3">BCN</div>
              <div className="text-white/70 text-sm uppercase tracking-wider">Cobertura total</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/booking"
              className="group inline-flex items-center bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-semibold px-12 py-5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-yellow-400/20"
            >
              <span className="text-xl tracking-wide">RESERVA VIP EXCLUSIVA</span>
              <Crown className="ml-4 w-6 h-6 group-hover:animate-pulse" />
            </Link>
            <a
              href="tel:+34658867133"
              className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-semibold px-12 py-5 rounded-full transition-all duration-300"
            >
              <Phone className="w-6 h-6 mr-4" />
              <span className="text-xl tracking-wide">658 867 133</span>
            </a>
          </div>
        </div>
      </section>

      {/* Exclusive Features Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-2 bg-yellow-100 rounded-full mb-8">
              <Sparkles className="mr-2 w-5 h-5 text-yellow-600" />
              <span className="text-yellow-700 font-medium text-sm tracking-wide">CARACTERÍSTIQUES EXCLUSIVES</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Què et fa <span className="text-yellow-500 font-medium">especial</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              Com a membre VIP, tens accés a beneficis exclusius que no trobaràs enlloc més.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exclusiveFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-yellow-200 transition-all duration-300 h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-xl text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VIP Services */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
              {t('vip.includes.title')}
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              {t('vip.includes.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {vipServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-yellow-200"
                >
                  <div className="flex items-start mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:from-yellow-400 group-hover:to-yellow-500 transition-all duration-300">
                      <Icon className="w-8 h-8 text-gray-700 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-medium text-gray-900 mb-4 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-lg text-gray-600 font-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-gray-700 text-lg">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Luxury Pricing Comparison */}
      <section className="py-32 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-2 bg-white/10 backdrop-blur-md rounded-full mb-8">
              <Crown className="mr-2 w-5 h-5 text-yellow-400" />
              <span className="text-white font-medium text-sm tracking-wide">PLANS D'EXCEL·LÈNCIA</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
              Tria la teva <span className="text-yellow-400 font-medium">experiència</span>
            </h2>
            <p className="text-2xl text-white/80 max-w-4xl mx-auto font-light leading-relaxed">
              Cada pla està dissenyat per oferir una experiència única i personalitzada.
            </p>
          </div>

          {/* VIP Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bronze Plan */}
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-amber-400/30 transition-all duration-300 hover:shadow-2xl">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-light text-white mb-2">{t('vip.plan.bronze')}</h3>
                <div className="text-5xl font-light text-amber-400 mb-2">390€<span className="text-lg text-white/60">/mes</span></div>
                <p className="text-white/70">{t('vip.plan.bronze.description')}</p>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />2 sessions/mes (1,5h)</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Control salut mensual</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Desplaçaments inclosos</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Seguiment personalitzat</li>
              </ul>
              <Link to="/booking" className="w-full inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 rounded-full transition-colors text-lg">
                Consulta Bronze
              </Link>
            </div>

            {/* Silver Plan - Featured */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 relative transform scale-105 hover:shadow-2xl transition-all duration-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gray-700 to-gray-900 text-white px-8 py-3 rounded-full text-sm font-semibold">
                {t('vip.plan.popular')}
              </div>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-light text-white mb-2">{t('vip.plan.silver')}</h3>
                <div className="text-5xl font-light text-gray-300 mb-2">690€<span className="text-lg text-white/60">/mes</span></div>
                <p className="text-white/70">{t('vip.plan.silver.description')}</p>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />3 sessions/mes (1,5h)</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Control salut mensual</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Desplaçaments inclosos</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Família 50% descompte</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Sessions transferibles</li>
              </ul>
              <Link to="/booking" className="w-full inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gray-900 font-semibold py-4 rounded-full transition-colors text-lg">
                Consulta Silver
              </Link>
            </div>

            {/* Gold Plan */}
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-yellow-400/30 transition-all duration-300 hover:shadow-2xl">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-light text-white mb-2">{t('vip.plan.gold')}</h3>
                <div className="text-5xl font-light text-yellow-400 mb-2">990€<span className="text-lg text-white/60">/mes</span></div>
                <p className="text-white/70">{t('vip.plan.gold.description')}</p>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />4 sessions/mes (1,5h)</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Control salut mensual</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Desplaçaments inclosos</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Família gratis</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Sessions transferibles</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Atenció prioritària</li>
              </ul>
              <Link to="/booking" className="w-full inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-4 rounded-full transition-colors text-lg">
                Consulta Gold
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Testimonials without images */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light text-gray-900 mb-6 leading-tight">
              {t('vip.testimonials.title') || 'Clients VIP satisfets'}
            </h2>
            <p className="text-2xl text-gray-600 font-light">{t('vip.testimonials.subtitle') || 'Experiències reals dels nostres plans VIP'}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-3xl p-10 relative hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute top-8 right-8">
                  <div className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider ${
                    testimonial.tier === 'GOLD'
                      ? 'bg-yellow-400 text-gray-900'
                      : testimonial.tier === 'SILVER'
                      ? 'bg-gray-300 text-gray-700'
                      : 'bg-amber-200 text-amber-800'
                  }`}>
                    CLIENT {testimonial.tier}
                  </div>
                </div>
                
                <div className="flex items-center mb-8">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current mr-1" />
                  ))}
                </div>
                
                <blockquote className="text-lg text-gray-700 mb-8 leading-relaxed font-light">
                  "{testimonial.comment}"
                </blockquote>
                
                <div>
                  <p className="font-semibold text-gray-900 text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Contact Section */}
      <section className="py-32 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <div className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-12">
            <Crown className="mr-3 w-6 h-6 text-yellow-400" />
            <span className="text-white font-medium tracking-wide text-lg">LA TEVA TRANSFORMACIÓ COMENÇA ARA</span>
            <Crown className="ml-3 w-6 h-6 text-yellow-400" />
          </div>
          
          <h2 className="text-6xl md:text-7xl font-light mb-8 leading-tight">
            Preparat per ser <br />
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent font-medium">
              VIP
            </span>
          </h2>
          <p className="text-2xl text-gray-300 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
            {t('vip.final.subtitle')} <br />
            <span className="text-yellow-400">La teva salut mereix el millor tractament.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Link
              to="/booking"
              className="group inline-flex items-center bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-bold px-12 py-5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-yellow-400/20"
            >
              <span className="text-xl tracking-wide">UNIR-SE A L'ELITE</span>
              <Crown className="ml-4 w-6 h-6 group-hover:animate-bounce" />
            </Link>
            <a
              href="tel:+34658867133"
              className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold px-12 py-5 rounded-full transition-all duration-300"
            >
              <Phone className="w-6 h-6 mr-4" />
              <span className="text-xl tracking-wide">658 867 133</span>
            </a>
          </div>

          <div className="mt-20 pt-20 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-yellow-400 font-semibold mb-2">UBICACIÓ EXCLUSIVA</h3>
                <p className="text-white/70">📍 Carrer Pelai, 12, Barcelona</p>
              </div>
              <div>
                <h3 className="text-yellow-400 font-semibold mb-2">DISPONIBILITAT VIP</h3>
                <p className="text-white/70">🕐 24/7 per a clients Gold</p>
              </div>
              <div>
                <h3 className="text-yellow-400 font-semibold mb-2">SUPORT DIRECTE</h3>
                <p className="text-white/70">📞 Línia directa VIP</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
