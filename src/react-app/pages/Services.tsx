import SEOHead from '@/react-app/components/SEOHead';
import { Link } from 'react-router';
import { Heart, Brain, Leaf, RotateCcw } from 'lucide-react';
import { useLanguage } from '@/react-app/hooks/useLanguage';


export default function Services() {
  const { t } = useLanguage();

  interface ServiceItem {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    icon: React.ElementType;
    color: string;
    durations: number[];
    image: string;
    href: string;
    benefits: string[];
    isExternal?: boolean;
  }

  const services: ServiceItem[] = [
    {
      id: 'massatge',
      title: t('services.massage.title'),
      subtitle: t('services.massage.subtitle'),
      description: t('services.massage.description'),
      icon: Heart,
      color: 'orange',
      durations: [60, 90, 120],
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800',
      href: '/services/massage',
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
      image: 'https://images.pexels.com/photos/5793694/pexels-photo-5793694.jpeg?auto=compress&cs=tinysrgb&w=800',
      href: '/services/kinesiology',
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
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      href: '/services/nutrition',
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
      image: 'https://images.pexels.com/photos/3759656/pexels-photo-3759656.jpeg?auto=compress&cs=tinysrgb&w=800',
      href: '/360-revision',
      benefits: [t('services.benefits.assessment'), t('services.benefits.plan'), t('services.benefits.recommendations'), t('services.benefits.followup')]
    },
    {
      id: 'suplements',
      title: t('service.supplements.title'),
      subtitle: t('nutrition.page.subtitle'),
      description: t('nutrition.page.description'),
      icon: Leaf,
      color: 'green',
      durations: [],
      image: 'https://images.pexels.com/photos/8845019/pexels-photo-8845019.jpeg?auto=compress&cs=tinysrgb&w=800',
      href: '/services/supplements',
      benefits: [t('services.benefits.vitality'), t('services.benefits.habits'), t('services.benefits.energy'), t('services.benefits.longterm')]
    },
    {
      id: 'sistemica',
      title: t('service.systemic.title'),
      subtitle: t('kinesiology.page.subtitle'),
      description: t('kinesiology.page.description'),
      icon: Heart,
      color: 'pink',
      durations: [],
      image: 'https://images.pexels.com/photos/7176036/pexels-photo-7176036.jpeg?auto=compress&cs=tinysrgb&w=800',
      href: '/services/systemic',
      benefits: [t('services.benefits.blockages'), t('services.benefits.stress'), t('services.benefits.assessment'), t('services.benefits.longterm')]
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
      },
      pink: {
        bg: 'bg-pink-50',
        border: 'border-pink-200',
        icon: 'text-pink-600',
        iconBg: 'bg-pink-100',
        button: 'bg-pink-500 hover:bg-pink-600',
        text: 'text-pink-600'
      }
    };
    return colors[color as keyof typeof colors] || colors.orange;
  };



  return (
    <>
      <SEOHead
        title={t('seo.services.title')}
        description={t('seo.services.description')}
        keywords={t('seo.services.keywords')}
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

      {/* Consultation Banner */}
      <section className="bg-blue-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <p className="text-white font-medium text-lg">
            {t('booking.service.consultation')}
          </p>
          <Link
            to="/booking?service=consultation"
            className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-6 py-2 rounded-full transition-colors duration-200 text-sm"
          >
            {t('common.bookNow')}
          </Link>
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
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden flex-shrink-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-1">
                    <div className="mb-6 flex-grow">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className={`text-lg font-medium ${colors.text} mb-4`}>
                        {service.subtitle}
                      </p>
                      <p className="text-gray-800 leading-relaxed">
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
                    <div className="flex flex-col sm:flex-row gap-3 mt-auto">
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
              <p className="text-gray-700">
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
              <p className="text-gray-700">
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
              <p className="text-gray-700">
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
        </div>
      </section>


    </>
  );
}
