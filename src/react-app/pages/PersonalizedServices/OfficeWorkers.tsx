import Layout from '@/react-app/components/Layout';
import SEOHead from '@/react-app/components/SEOHead';
import { Clock } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from 'keep-react';
import { useLanguage } from '@/react-app/contexts/LanguageContext';


export default function OfficeWorkers() {
  const { t } = useLanguage();

  return (
    <Layout>
      <SEOHead
        title="Serveis per a Treballadors d'Oficina - EKA Balance Barcelona"
        description="Teràpies especialitzades per a treballadors d'oficina: alleuja tensions, millora postura i gestiona l'estrès laboral. Sessions d'1 hora per 70€."
        keywords="massatge oficina Barcelona, estrès laboral, dolor esquena ordinador, kinesiologia treballadors"
      />
      
      {/* Hero Section */}
      <section 
        className="bg-section-full min-h-screen flex items-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop)`
        }}
      >
        <div className="bg-overlay" />
        
        <div className="relative z-10 apple-container text-center text-white">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-8 border border-white/20">
            <span className="font-medium">{t('personalizedServices.officeWorkers')}</span>
          </div>
          
          <h1 className="apple-large-title text-white mb-8">
            {t('personalizedServices.officeWorkers')}
          </h1>
          
          <p className="apple-subtitle text-white/90 mb-12 max-w-3xl mx-auto">
            {t('personalizedServices.officeWorkers.desc')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105"
            >
              {t('common.reserveSession')}
            </Link>
          </div>
        </div>
      </section>

      {/* Problems & Benefits */}
      <section className="apple-section bg-white">
        <div className="apple-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Problems */}
            <div>
              <h2 className="apple-headline mb-8 text-red-600">
                {t('athletes.challenges.title')}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t('personalizedServices.officeWorkers.benefit1')}</h3>
                    <p className="text-gray-600">Dolor al coll, espatlles i esquena per postures incorrectes davant l'ordinador</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t('personalizedServices.officeWorkers.benefit3')}</h3>
                    <p className="text-gray-600">Pressió constant, deadlines i excés de responsabilitats que afecten el benestar</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Sedentarisme</h3>
                    <p className="text-gray-600">Pèrdua de mobilitat i flexibilitat per passar massa hores assegut</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="apple-headline mb-8 text-green-600">
                {t('athletes.help.title')}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t('personalizedServices.officeWorkers.benefit1')}</h3>
                    <p className="text-gray-600">Tècniques específiques per descontracturar zones afectades pel treball d'oficina</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t('personalizedServices.officeWorkers.benefit2')}</h3>
                    <p className="text-gray-600">Exercicis i correccions posturals per prevenir futurs problemes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t('personalizedServices.officeWorkers.benefit3')}</h3>
                    <p className="text-gray-600">Tècniques de relaxació i mindfulness adaptades a l'entorn professional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="apple-section bg-blue-50">
        <div className="apple-container text-center">
          <div className="squircle-card bg-white p-12 max-w-4xl mx-auto">
            <h2 className="apple-headline mb-6 text-blue-600">
              {t('athletes.result.title')}
            </h2>
            <p className="apple-subtitle mb-8">
              {t('personalizedServices.officeWorkers.result')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-light text-blue-600 mb-2">85%</div>
                <div className="text-gray-600">{t('office.stats.pain')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-blue-600 mb-2">92%</div>
                <div className="text-gray-600">{t('office.stats.posture')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-blue-600 mb-2">78%</div>
                <div className="text-gray-600">{t('office.stats.stress')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Card */}
      <section className="apple-section bg-white">
        <div className="apple-container-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="squircle-image">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
                alt="Sessió de massatge terapèutic per a treballadors d'oficina"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h3 className="apple-title mb-6">
                {t('office.session.title')}
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-gray-500 mr-3" />
                  <span className="text-gray-700">1 {t('common.hour')}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-3xl font-light text-gray-900">70€</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/booking"
                  className="flex-1 inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-medium"
                >
                  {t('common.reserve')}
                </Link>
                <Link to="/services" className="flex-1">
                  <Button 
                    variant="outline"
                    className="w-full border-gray-200 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-2xl font-medium"
                  >
                    {t('office.session.plans')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
