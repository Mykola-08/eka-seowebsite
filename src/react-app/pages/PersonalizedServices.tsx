import SEOHead from '@/react-app/components/SEOHead';
import { Link } from 'react-router';
import { Button } from 'keep-react';
import { useLanguage } from '@/react-app/hooks/useLanguage';
import { PERSONALIZED_SERVICES_DATA } from '@/shared/constants';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PersonalizedServices() {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead
        title={t('personalizedServices.title')}
        description={t('personalizedServices.subtitle')}
        keywords="personalized services, office workers, athletes, artists, musicians, students"
      />
      
      {/* Unified Gradient Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
             <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-100 shadow-sm mb-8">
              <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent uppercase tracking-wider">
                {t('personalizedServices.title')}
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-light text-gray-900 mb-8 tracking-tight leading-tight">
              {t('services.therapiesFor')}{' '}
              <span className="font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t('services.integralWellbeing')}
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              {t('personalizedServices.subtitle')}
            </p>

            <Link to="/booking">
              <Button 
                size="xl" 
                className="bg-[#FFB405] hover:bg-[#e8a204] text-[#000035] px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 shadow-xl border-none"
              >
                {t('personalizedServices.cta')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Service Cards Grid - Unified Design */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              {t('personalizedServices.choose.title')}
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              {t('personalizedServices.choose.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PERSONALIZED_SERVICES_DATA.map((service, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={service.id}
                className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={t(service.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-medium mb-2">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-white/90 line-clamp-2 mb-6 font-light">
                    {t(service.descriptionKey)}
                  </p>
                  
                  <Link 
                    to={service.href} 
                    className="inline-flex items-center text-white font-medium hover:underline"
                  >
                    {t('common.readMore')} <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-light text-gray-900 mb-8">
            {t('footer.readyToBegin')}
          </h2>
          <div className="justify-center flex">
             <Link to="/contact">
                <Button 
                  size="xl" 
                  className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-4 rounded-2xl font-medium transition-all shadow-sm hover:shadow-md"
                >
                  {t('nav.contact')}
                </Button>
             </Link>
          </div>
        </div>
      </section>
    </>
  );
}
