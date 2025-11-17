import Layout from '@/react-app/components/Layout';
import SEOHead from '@/react-app/components/SEOHead';
import { Clock } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from 'keep-react';
import { useBooking } from '../components/BookingProvider';
import { useLanguage } from '@/react-app/contexts/LanguageContext';

const personalizedServices = [
  {
    id: 'office-workers',
    title: 'personalizedServices.officeWorkers',
    description: 'personalizedServices.officeWorkers.desc',
    benefits: [
      'personalizedServices.officeWorkers.benefit1',
      'personalizedServices.officeWorkers.benefit2',
      'personalizedServices.officeWorkers.benefit3'
    ],
    result: 'personalizedServices.officeWorkers.result',
    duration: '1 h',
    price: '70 €',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '/serveis/treballadors-oficina'
  },
  {
    id: 'athletes',
    title: 'personalizedServices.athletes',
    description: 'personalizedServices.athletes.desc',
    benefits: [
      'personalizedServices.athletes.benefit1',
      'personalizedServices.athletes.benefit2',
      'personalizedServices.athletes.benefit3'
    ],
    result: 'personalizedServices.athletes.result',
    duration: '1 h',
    price: '70 €',
    image: 'https://images.pexels.com/photos/3768593/pexels-photo-3768593.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '/serveis/esportistes'
  },
  {
    id: 'artists',
    title: 'personalizedServices.artists',
    description: 'personalizedServices.artists.desc',
    benefits: [
      'personalizedServices.artists.benefit1',
      'personalizedServices.artists.benefit2',
      'personalizedServices.artists.benefit3'
    ],
    result: 'personalizedServices.artists.result',
    duration: '1 h',
    price: '70 €',
    image: 'https://images.pexels.com/photos/3760613/pexels-photo-3760613.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '/serveis/artistes'
  },
  {
    id: 'musicians',
    title: 'personalizedServices.musicians',
    description: 'personalizedServices.musicians.desc',
    benefits: [
      'personalizedServices.musicians.benefit1',
      'personalizedServices.musicians.benefit2',
      'personalizedServices.musicians.benefit3'
    ],
    result: 'personalizedServices.musicians.result',
    duration: '1 h',
    price: '70 €',
    image: 'https://images.pexels.com/photos/4472042/pexels-photo-4472042.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '/serveis/musics',
    hasPlans: true
  },
  {
    id: 'students',
    title: 'personalizedServices.students',
    description: 'personalizedServices.students.desc',
    benefits: [
      'personalizedServices.students.benefit1',
      'personalizedServices.students.benefit2',
      'personalizedServices.students.benefit3'
    ],
    result: 'personalizedServices.students.result',
    duration: '1 h',
    price: '70 €',
    image: 'https://images.pexels.com/photos/3807755/pexels-photo-3807755.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '/serveis/estudiants'
  }
];

export default function PersonalizedServices() {
  const { navigateToBooking } = useBooking();
  const { t } = useLanguage();

  return (
    <Layout>
      <SEOHead
        title="Serveis Personalitzats - EKA Balance Barcelona"
        description="Tria el servei que més s'adapta a tu: treballadors d'oficina, esportistes, artistes, músics i estudiants. Cuida el teu cos amb teràpies personalitzades."
        keywords="serveis personalitzats Barcelona, massatge oficina, esportistes, artistes, músics, estudiants"
      />
      
      {/* Hero Section */}
      <section 
        className="bg-section-full min-h-screen flex items-center"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/3759656/pexels-photo-3759656.jpeg?auto=compress&cs=tinysrgb&w=1920)`
        }}
      >
        <div className="bg-overlay" />
        
        <div className="relative z-10 apple-container text-center text-white">
          <h1 className="apple-large-title text-white mb-8">
            {t('personalizedServices.title')}
          </h1>
          
          <p className="apple-subtitle text-white/90 mb-12 max-w-3xl mx-auto">
            {t('personalizedServices.subtitle')}
          </p>
          
          <Link to="/booking">
            <Button 
              size="xl" 
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 shadow-xl"
            >
              {t('personalizedServices.cta')}
            </Button>
          </Link>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-6">
            {t('personalizedServices.difference.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-2xl">
              <h3 className="font-semibold text-gray-900 mb-3">{t('personalizedServices.main.title')}</h3>
              <ul className="text-sm text-gray-600 space-y-2 text-left">
                <li>• {t('personalizedServices.main.list1')}</li>
                <li>• {t('personalizedServices.main.list2')}</li>
                <li>• {t('personalizedServices.main.list3')}</li>
                <li>• {t('personalizedServices.main.list4')}</li>
              </ul>
            </div>
            <div className="p-6 bg-yellow-50 rounded-2xl">
              <h3 className="font-semibold text-yellow-900 mb-3">{t('personalizedServices.special.title')}</h3>
              <ul className="text-sm text-yellow-800 space-y-2 text-left">
                <li>• {t('personalizedServices.special.list1')}</li>
                <li>• {t('personalizedServices.special.list2')}</li>
                <li>• {t('personalizedServices.special.list3')}</li>
                <li>• {t('personalizedServices.special.list4')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="apple-section bg-white">
        <div className="apple-container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              {t('personalizedServices.choose.title')}
            </h2>
            <p className="text-xl text-gray-600 font-light">
              {t('personalizedServices.choose.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {personalizedServices.map((service) => (
              <div key={service.id} className="squircle-card bg-white overflow-hidden">
                <div className="squircle-image aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt={t(service.title)}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-8">
                  <h3 className="apple-title mb-4">
                    {t(service.title)}
                  </h3>
                  
                  <p className="apple-body mb-6">
                    {t(service.description)}
                  </p>

                  <div className="mb-6">
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700 text-sm">{t(benefit)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 p-4 bg-yellow-50 rounded-2xl">
                    <div className="font-semibold text-yellow-900 text-sm mb-2">
                      {t('artists.result.title')}:
                    </div>
                    <div className="text-yellow-800 text-sm">
                      {t(service.result)}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="text-2xl font-light text-gray-900">
                      {service.price}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={navigateToBooking}
                      className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-2xl font-medium transition-colors"
                    >
                      {t('common.reserve')}
                    </button>
                    <Link to={service.href} className="flex-1">
                      <Button 
                        variant="outline"
                        className="w-full border-gray-200 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-2xl font-medium"
                      >
                        {service.hasPlans ? t('common.seePlans') : t('common.moreInfo')}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book a Session CTA */}
      <section 
        className="bg-section-full py-24"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=1920)`
        }}
      >
        <div className="bg-overlay-dark" />
        
        <div className="relative z-10 apple-container text-center text-white">
          <h2 className="apple-headline text-white mb-6">
            {t('personalizedServices.bookNow.title')}
          </h2>
          
          <p className="apple-subtitle text-white/90 mb-12 max-w-2xl mx-auto">
            {t('personalizedServices.bookNow.subtitle')}
          </p>
          
          <Link to="/booking">
            <Button 
              size="xl" 
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-12 py-6 rounded-2xl font-medium transition-all duration-300 hover:scale-105 shadow-2xl text-lg"
            >
              {t('common.reserveNow')}
            </Button>
          </Link>
        </div>
      </section>

      
    </Layout>
  );
}
