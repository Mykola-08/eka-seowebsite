import Layout from '@/react-app/components/Layout';
import SEOHead from '@/react-app/components/SEOHead';
import { useLanguage } from '@/react-app/contexts/LanguageContext';
import { Clock } from 'lucide-react';

export default function Revisio360() {
  const { t } = useLanguage();

  const benefits = [
    t('revisio360.benefit1'),
    t('revisio360.benefit2'),
    t('revisio360.benefit3'),
    t('revisio360.benefit4')
  ];

  const whatIncludes = [
    {
      title: t('revisio360.includes.postural'),
      description: t('revisio360.includes.posturalDesc')
    },
    {
      title: t('revisio360.includes.energetic'),
      description: t('revisio360.includes.energeticDesc')
    },
    {
      title: t('revisio360.includes.report'),
      description: t('revisio360.includes.reportDesc')
    }
  ];

  const durations = [60, 90, 120];

  const getDurationLabel = (duration: number) => {
    if (duration === 60) return t('revisio360.duration.essential');
    if (duration === 90) return t('revisio360.duration.complete');
    return t('revisio360.duration.exhaustive');
  };

  const processSteps = [
    { step: '1', title: t('revisio360.process.step1'), desc: t('revisio360.process.step1Desc') },
    { step: '2', title: t('revisio360.process.step2'), desc: t('revisio360.process.step2Desc') },
    { step: '3', title: t('revisio360.process.step3'), desc: t('revisio360.process.step3Desc') },
    { step: '4', title: t('revisio360.process.step4'), desc: t('revisio360.process.step4Desc') }
  ];

  return (
    <Layout>
      <SEOHead
        title={t('revisio360.title')}
        description={t('revisio360.hero.description')}
        keywords="revisió integral Barcelona, avaluació postural, anàlisi energètic, pla personalitzat benestar, EKA Balance 360"
      />

      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-white via-purple-50/30 to-indigo-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-6">
                <span className="text-purple-700 font-medium text-sm">{t('revisio360.badge')}</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
                {t('revisio360.hero.title')}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t('revisio360.hero.subtitle')}
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {t('revisio360.hero.description')}
              </p>

              <div className="flex justify-center">
                <a
                  href="https://360revision.ekabalance.com/?ref=ekabalance.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#FFB405] hover:bg-[#e8a204] text-[#000035] font-semibold px-8 py-4 rounded-full transition-colors duration-200"
                >
                  {t('common.bookNow')}
                </a>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="https://mocha-cdn.com/019867be-db17-7148-8002-575a3f797108/wellness-center.jpg"
                  alt={t('revisio360.badge')}
                  className="w-full h-[400px] sm:h-[500px] object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">{t('revisio360.benefit1').substring(0, 20)}...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
              {t('revisio360.includes.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('revisio360.includes.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whatIncludes.map((item, index) => (
              <div key={index} className="text-center p-6 bg-purple-50 rounded-2xl">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-white rounded-lg"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
              {t('revisio360.booking.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('revisio360.booking.subtitle')}
            </p>
          </div>
          
          <div className="flex justify-center">
            <a
              href="https://360revision.ekabalance.com/?ref=ekabalance.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#FFB405] hover:bg-[#e8a204] text-[#000035] font-semibold px-8 py-4 rounded-full transition-colors duration-200"
            >
              {t('common.bookNow')}
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
              {t('revisio360.benefits.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('revisio360.benefits.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-purple-50 rounded-2xl">
                <div className="w-3 h-3 bg-purple-600 rounded-full flex-shrink-0 mt-2"></div>
                <span className="text-lg text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Duration & Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
            {t('revisio360.duration.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            {t('revisio360.duration.subtitle')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {durations.map((duration) => (
              <div key={duration} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {duration} {t('revisio360.duration.minutes')}
                </h3>
                <p className="text-gray-600 mb-6">
                  {getDurationLabel(duration)}
                </p>
                <a
                  href="https://360revision.ekabalance.com/?ref=ekabalance.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center bg-purple-100 hover:bg-purple-200 text-purple-700 font-semibold py-3 rounded-full transition-colors duration-200"
                >
                  {t('common.bookNow')}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
              {t('revisio360.process.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('revisio360.process.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-500 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-light mb-6">
            {t('revisio360.final.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('revisio360.final.subtitle')}
          </p>
          
          <div className="flex justify-center">
            <a
              href="https://360revision.ekabalance.com/?ref=ekabalance.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-purple-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-50 transition-colors duration-200"
            >
              {t('common.bookNow')}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
