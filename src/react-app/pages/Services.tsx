import Layout from '@/react-app/components/Layout';
import SEOHead from '@/react-app/components/SEOHead';
import { Link } from 'react-router';
import { Heart, Brain, Leaf, RotateCcw } from 'lucide-react';
import { useLanguage } from '@/react-app/contexts/LanguageContext';


export default function Services() {
  const { t } = useLanguage();
  
  const services = [
    {
      id: 'massatge',
      title: t('services.massage.title'),
      subtitle: t('services.massage.subtitle'),
      description: t('services.massage.description'),
      icon: Heart,
      color: 'orange',
      durations: [60, 90, 120],
      image: 'https://mocha-cdn.com/019867be-db17-7148-8002-575a3f797108/massage-therapy.jpg',
      href: '/serveis/massatge',
      benefits: [t('services.benefits.reduces'), t('services.benefits.stress'), t('services.benefits.circulation'), t('services.benefits.relaxation')]
    },
    {
      id: 'kinesiologia',
      title: t('services.kinesiology.title'),
      subtitle: t('services.kinesiology.subtitle'),
      description: t('services.kinesiology.description'),
      icon: Brain,
      color: 'blue',
      durations: [60, 90],
      image: 'https://mocha-cdn.com/019867be-db17-7148-8002-575a3f797108/kinesiology-treatment.jpg',
      href: '/serveis/kinesiologia',
      benefits: [t('services.benefits.blockages'), t('services.benefits.posture'), t('services.benefits.stress'), t('services.benefits.energy')]
    },
    {
      id: 'nutritio',
      title: t('services.nutrition.title'),
      subtitle: t('services.nutrition.subtitle'),
      description: t('services.nutrition.description'),
      icon: Leaf,
      color: 'green',
      durations: [],
      image: 'https://mocha-cdn.com/019867be-db17-7148-8002-575a3f797108/healthy-nutrition.jpg',
      href: '/serveis/nutritio',
      benefits: [t('services.benefits.habits'), t('services.benefits.vitality'), t('services.benefits.weight'), t('services.benefits.longterm')]
    },
    {
      id: 'revisio360',
      title: t('services.revision360.title'),
      subtitle: t('services.revision360.subtitle'),
      description: t('services.revision360.description'),
      icon: RotateCcw,
      color: 'purple',
      durations: [60, 90, 120],
      image: 'https://mocha-cdn.com/019867be-db17-7148-8002-575a3f797108/wellness-center.jpg',
      href: 'https://360revision.ekabalance.com',
      isExternal: true,
      benefits: [t('services.benefits.assessment'), t('services.benefits.plan'), t('services.benefits.recommendations'), t('services.benefits.followup')]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        icon: 'text-orange-600',
        iconBg: 'bg-orange-100',
        button: 'bg-orange-500 hover:bg-orange-600',
        text: 'text-orange-600'
      },
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        icon: 'text-blue-600',
        iconBg: 'bg-blue-100',
        button: 'bg-blue-500 hover:bg-blue-600',
        text: 'text-blue-600'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        icon: 'text-green-600',
        iconBg: 'bg-green-100',
        button: 'bg-green-500 hover:bg-green-600',
        text: 'text-green-600'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        icon: 'text-purple-600',
        iconBg: 'bg-purple-100',
        button: 'bg-purple-500 hover:bg-purple-600',
        text: 'text-purple-600'
      }
    };
    return colors[color as keyof typeof colors] || colors.orange;
  };

  

  return (
    <Layout>
      <SEOHead
        title="Serveis de Teràpies Holístiques a Barcelona | EKA Balance"
        description="Descobreix els nostres serveis: massatge terapèutic, kinesiologia, nutrició conscient i revisió 360°. Centre de benestar integral a Barcelona."
        keywords="serveis terapèutics Barcelona, massatge, kinesiologia, nutrició, revisió integral, teràpies holístiques"
      />

      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-blue-100 rounded-full mb-8">
            <Heart className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-blue-700 font-medium">{t('services.integralWellbeingFor')}</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
            {t('services.ourServices')}{' '}
            <span className="text-blue-600 font-medium">{t('services.ourServices2')}</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            {t('services.wellnessPath')}
          </p>

          <div className="flex justify-center">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center bg-[#FFB405] hover:bg-[#e8a204] text-[#000035] font-semibold px-8 py-4 rounded-full transition-colors duration-200"
            >
              {t('common.bookNow')}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service) => {
              const colors = getColorClasses(service.color);
              
              return (
                <div
                  key={service.id}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
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
                      <p className={`text-lg font-medium ${colors.text} mb-4`}>
                        {service.subtitle}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Benefits */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-4">{t('services.mainBenefits')}</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-600">
                            <div className={`w-2 h-2 ${colors.button} rounded-full mr-2 flex-shrink-0`}></div>
                            {benefit}
                          </div>
                        ))}
                      </div>
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
                        <Link
                          to="/booking"
                          className="flex-1 bg-[#FFB405] hover:bg-[#e8a204] text-[#000035] font-semibold px-6 py-3 rounded-full transition-colors duration-200 flex items-center justify-center text-sm"
                        >
                          {t('common.bookNow')}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Booking Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
              {t('services.quickBooking')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('services.quickBookingSubtitle')}
            </p>
          </div>
          
          <div className="flex justify-center">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center bg-[#FFB405] hover:bg-[#e8a204] text-[#000035] font-semibold px-8 py-4 rounded-full transition-colors duration-200"
            >
              {t('common.bookNow')}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
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
              <div className="w-20 h-20 bg-green-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
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
              <div className="w-20 h-20 bg-orange-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
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

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-light mb-6">
            {t('services.readyToStart')}
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            {t('services.contactUsToBook')}
          </p>
          
          <div className="flex justify-center">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center bg-[#FFB405] hover:bg-[#e8a204] text-[#000035] font-semibold px-8 py-4 rounded-full transition-colors duration-200"
            >
              {t('common.bookNow')}
            </Link>
          </div>

          <div className="mt-12 text-gray-400">
            <p>{t('footer.address')}</p>
            <p>{t('footer.email')}</p>
          </div>
        </div>
      </section>

      
    </Layout>
  );
}
