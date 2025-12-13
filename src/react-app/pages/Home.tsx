import Layout from '@/react-app/components/Layout';

import AppleHero from '@/react-app/components/AppleHero';
import TestimonialSlider from '@/react-app/components/TestimonialSlider';
import FAQ from '@/react-app/components/FAQ';
import CasosSection from '@/react-app/components/CasosSection';
import GallerySection from '@/react-app/components/GallerySection';

import SEOOptimized from '@/react-app/components/SEOOptimized';
import { Link } from 'react-router';
import { Heart, Brain, Leaf, RotateCcw } from 'lucide-react';
import { useBooking } from '../components/BookingProvider';
import { useLanguage } from '@/react-app/contexts/LanguageContext';

export default function Home() {
  const { navigateToBooking } = useBooking();
  const { t } = useLanguage();

  const services = [
    {
      id: 'Massatge',
      title: t('services.massage.title'),
      subtitle: t('services.massage.subtitle'),
      description: t('services.massage.description'),
      icon: Heart,
      color: 'from-orange-400 to-orange-600',
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800',
      href: '/serveis/massatge',
      durations: [60, 90, 120]
    },
    {
      id: 'Kinesiologia',
      title: t('services.kinesiology.title'),
      subtitle: t('services.kinesiology.subtitle'),
      description: t('services.kinesiology.description'),
      icon: Brain,
      color: 'from-blue-400 to-blue-600',
      image: 'https://images.pexels.com/photos/7187991/pexels-photo-7187991.jpeg?auto=compress&cs=tinysrgb&w=800',
      href: '/serveis/kinesiologia',
      durations: [60, 90]
    },
    {
      id: 'Nutrició conscient',
      title: t('services.nutrition.title'),
      subtitle: t('services.nutrition.subtitle'),
      description: t('services.nutrition.description'),
      icon: Leaf,
      color: 'from-green-400 to-green-600',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      href: '/serveis/nutritio',
      durations: []
    },
    {
      id: 'Revisió 360°',
      title: t('services.revision360.title'),
      subtitle: t('services.revision360.subtitle'),
      description: t('services.revision360.description'),
      icon: RotateCcw,
      color: 'from-purple-400 to-purple-600',
      image: 'https://images.pexels.com/photos/3759656/pexels-photo-3759656.jpeg?auto=compress&cs=tinysrgb&w=800',
      href: 'https://360revision.ekabalance.com',
      isExternal: true,
      durations: [60, 90, 120]
    }
  ];

  

  const stats = [
    { number: '1500+', label: t('hero.stats.sessions') },
    { number: '10+', label: t('hero.stats.experience') },
    { number: '96%', label: t('hero.stats.clients') },
    { number: '9', label: t('hero.stats.countries') }
  ];

  return (
    <SEOOptimized
      title="EKA Balance - Centre de Teràpies Holístiques a Barcelona | Massatge & Kinesiologia"
      description="Descobreix el benestar integral a EKA Balance. Especialistes en massatge terapèutic, kinesiologia i osteobalance a Barcelona. Reserves per WhatsApp/Telegram 658867133."
      keywords="massatge terapèutic Barcelona, kinesiologia Barcelona, osteobalance, centre teràpies holístiques, benestar integral, relaxació Barcelona, Plaça Universitat"
      url="https://ekabalance.mocha.app"
    >
      <Layout>
        {/* Apple-style Hero Section */}
        <AppleHero />
        
        {/* Stats Section */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-3xl sm:text-4xl font-light text-gray-900">
                      {stat.number}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Elena Introduction Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Photo - Mobile: top, Desktop: left */}
              <div className="order-1 lg:order-1">
                <div className="relative max-w-md mx-auto lg:max-w-none">
                  <img
                    src="https://5tghbndjb61dnqaj.public.blob.vercel-storage.com/therapist_photo.jpg"
                    alt="Elena, terapeuta corporal d'EKA Balance"
                    className="w-full h-auto rounded-full object-cover aspect-square"
                  />
                </div>
              </div>

              {/* Text Content - Mobile: bottom, Desktop: right */}
              <div className="order-2 lg:order-2 flex flex-col justify-center">
                <div className="text-center lg:text-left space-y-6">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
                    {t('elena.greeting')}
                  </h2>
                  
                  <div className="text-lg sm:text-xl text-gray-700 leading-relaxed space-y-4">
                    <p>
                      {t('elena.description1')}
                    </p>
                    
                    <p>
                      {t('elena.description2')}
                    </p>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="pt-4">
                    <Link
                      to="/sobre-elena"
                      className="inline-block bg-[#FFB405] hover:bg-[#e8a204] text-[#000035] font-semibold px-8 py-3 rounded-full transition-colors duration-200"
                    >
                      {t('elena.knowMore')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-blue-100 rounded-full mb-8">
                <Heart className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-blue-700 font-medium">{t('services.ourServices')}</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                {t('services.therapiesFor')}{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                  {t('services.integralWellbeing')}
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('services.personalizedTreatments')}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {services.map((service) => {
                
                return (
                  <div
                    key={service.id}
                    className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                  >
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="mb-6">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-lg text-gray-600 mb-4">
                          {service.subtitle}
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        {service.isExternal ? (
                          <a
                            href={service.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-full transition-colors duration-200 flex items-center justify-center text-sm"
                            onClick={(e) => {
                              e.preventDefault();
                              window.open(service.href, '_blank', 'noopener,noreferrer');
                            }}
                          >
                            {t('common.moreInfo')}
                          </a>
                        ) : (
                          <Link
                            to={service.href}
                            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-full transition-colors duration-200 flex items-center justify-center text-sm"
                          >
                            {t('common.moreInfo')}
                          </Link>
                        )}
                        {service.isExternal ? (
                          <a
                            href={service.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-[#FFB405] hover:bg-[#e8a204] text-[#000035] font-semibold px-6 py-3 rounded-full transition-colors duration-200 flex items-center justify-center text-sm"
                            onClick={(e) => {
                              e.preventDefault();
                              window.open(service.href, '_blank', 'noopener,noreferrer');
                            }}
                          >
                            {t('common.bookNow')}
                          </a>
                        ) : (
                          <button
                            onClick={navigateToBooking}
                            className="flex-1 bg-[#FFB405] hover:bg-[#e8a204] text-[#000035] font-semibold px-6 py-3 rounded-full transition-colors duration-200 flex items-center justify-center text-sm"
                          >
                            {t('common.bookNow')}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* View All Services */}
            <div className="text-center mt-12">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/services"
                  className="inline-flex items-center bg-[#FFB405] hover:bg-[#e8a204] text-[#000035] font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  {t('common.discoverServices')}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/contacte"
                  className="inline-flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-full transition-all duration-200"
                >
                  {t('common.contact')}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Booking Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-8">            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/primer-cop"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-colors duration-200 inline-block"
              >
                {t('hero.dontKnowWhatToChoose')}
              </Link>
              <button
                onClick={navigateToBooking}
                className="bg-[#FFB405] hover:bg-[#e8a204] text-[#000035] font-semibold px-8 py-4 rounded-full transition-colors duration-200"
              >
                {t('common.bookNow')}
              </button>
            </div>
          </div>
        </section>
        
        {/* Testimonials with Background Image */}
        <TestimonialSlider 
          backgroundImage="https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop"
        />

        {/* Casos Section */}
        <CasosSection />

        {/* Gallery Section */}
        <GallerySection />

        {/* Why Choose EKA Balance */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
                {t('whyChoose.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('whyChoose.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-blue-200 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t('whyChoose.personalized.title')}
                </h3>
                <p className="text-gray-600">
                  {t('whyChoose.personalized.description')}
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-100 to-green-200 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t('whyChoose.holistic.title')}
                </h3>
                <p className="text-gray-600">
                  {t('whyChoose.holistic.description')}
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-100 to-orange-200 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Leaf className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t('whyChoose.experienced.title')}
                </h3>
                <p className="text-gray-600">
                  {t('whyChoose.experienced.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />
        
        

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-light mb-6">
              {t('finalCta.title')}
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              {t('finalCta.subtitle')}
            </p>
            
            <div className="flex justify-center">
              <button
                onClick={navigateToBooking}
                className="bg-[#FFB405] hover:bg-[#e8a204] text-[#000035] font-semibold px-8 py-4 rounded-full transition-colors duration-200"
              >
                {t('common.bookNow')}
              </button>
            </div>

            <div className="mt-12 text-gray-400">
              <p>📍 {t('footer.address')}</p>
              <p>✉️ {t('footer.email')}</p>
            </div>
          </div>
        </section>

        
      </Layout>
    </SEOOptimized>
  );
}
