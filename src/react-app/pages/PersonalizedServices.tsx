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
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&h=1080&fit=crop',
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-section-full">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(/images/personalized-bg.jpg)`
          }}
        />

        {/* Overlay for text readability */}
        <div className="bg-overlay-dark" />
        
        <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl lg:text-9xl text-white mb-8 font-black tracking-tighter drop-shadow-2xl">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {personalizedServices.map((service) => (
              <div key={service.id} className="group relative overflow-hidden rounded-[30px] aspect-[4/5] shadow-2xl transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
                <div className="absolute inset-0">
                  <img 
                    src={service.image} 
                    alt={t(service.title)} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
                </div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 text-white">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                    {t(service.title)}
                  </h3>
                  <p className="text-lg text-gray-200 mb-8 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 delay-100">
                    {t(service.description)}
                  </p>
                  <div className="flex gap-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-200 transition-all duration-500">
                    <button
                      onClick={() => navigateToBooking()}
                      className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      {t('common.reserve')}
                    </button>
                    <Link to={service.href} className="flex-1">
                      <Button 
                        className="w-full bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-black border-none rounded-full px-6 py-3 transition-all duration-300"
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
