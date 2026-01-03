import SEOHead from '@/react-app/components/SEOHead';
import { Link } from 'react-router';
import { Button } from 'keep-react';
import { useBooking } from '@/react-app/hooks/useBooking';
import { useLanguage } from '@/react-app/hooks/useLanguage';

const personalizedServices = [
  {
    id: 'office-workers',
    title: 'personalizedServices.officeWorkers',
    description: 'personalizedServices.officeWorkers.desc',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop',
    href: '/services/office-workers'
  },
  {
    id: 'athletes',
    title: 'personalizedServices.athletes',
    description: 'personalizedServices.athletes.desc',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1920&h=1080&fit=crop',
    href: '/services/athletes'
  },
  {
    id: 'artists',
    title: 'personalizedServices.artists',
    description: 'personalizedServices.artists.desc',
    image: 'https://images.unsplash.com/photo-1599447421405-0c325d26d77e?w=1920&h=1080&fit=crop',
    href: '/services/artists'
  },
  {
    id: 'musicians',
    title: 'personalizedServices.musicians',
    description: 'personalizedServices.musicians.desc',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&h=1080&fit=crop',
    href: '/services/musicians'
  },
  {
    id: 'students',
    title: 'personalizedServices.students',
    description: 'personalizedServices.students.desc',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1920&h=1080&fit=crop',
    href: '/services/students'
  }
];

export default function PersonalizedServices() {
  const { navigateToBooking } = useBooking();
  const { t } = useLanguage();

  return (
    <>
      <SEOHead
        title={t('personalizedServices.title')}
        description={t('personalizedServices.subtitle')}
        keywords="personalized services, office workers, athletes, artists, musicians, students"
      />
      
      {/* Hero Section */}
      <section 
        className="bg-section-full min-h-screen flex items-center"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1920)`
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalizedServices.map((service) => (
              <div key={service.id} className="squircle-card bg-white overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                <div className="squircle-image aspect-[16/10] overflow-hidden flex-shrink-0">
                  <img
                    src={service.image}
                    alt={t(service.title)}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="apple-title mb-4 text-xl font-semibold">
                    {t(service.title)}
                  </h3>
                  
                  <p className="apple-body mb-6 text-gray-600 flex-grow line-clamp-4">
                    {t(service.description)}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                    <button
                      onClick={() => navigateToBooking()}
                      className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-3 rounded-xl font-medium transition-colors text-sm"
                    >
                      {t('common.reserve')}
                    </button>
                    <Link to={service.href} className="flex-1">
                      <Button 
                        variant="outline"
                        className="w-full border-gray-200 text-gray-700 hover:bg-gray-50 px-4 py-3 rounded-xl font-medium text-sm"
                      >
                        {t('common.moreInfo')}
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

      
    </>
  );
}
