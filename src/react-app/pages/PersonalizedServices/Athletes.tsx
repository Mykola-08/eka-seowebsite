import SEOHead from '@/react-app/components/SEOHead';
import { Clock } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from 'keep-react';
import { useLanguage } from '@/react-app/hooks/useLanguage';

export default function Athletes() {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead
        title={t('athletes.seo.title')}
        description={t('athletes.seo.desc')}
        keywords={t('athletes.seo.keywords')}
      />

      {/* Hero Section */}
      <section
        className="bg-section-full min-h-screen flex items-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1920&h=1080&fit=crop)`
        }}
      >
        <div className="bg-overlay" />

        <div className="relative z-10 apple-container text-center text-white">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-8 border border-white/20">
            <span className="font-medium">{t('athletes.hero.badge')}</span>
          </div>

          <h1 className="apple-large-title text-white mb-8">
            {t('athletes.hero.title')}
          </h1>

          <p className="apple-subtitle text-white/90 mb-12 max-w-3xl mx-auto">
            {t('athletes.hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105"
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
                    <h3 className="font-semibold text-gray-900 mb-2">{t('athletes.challenge1.title')}</h3>
                    <p className="text-gray-600">{t('athletes.challenge1.desc')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t('athletes.challenge2.title')}</h3>
                    <p className="text-gray-600">{t('athletes.challenge2.desc')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t('athletes.challenge3.title')}</h3>
                    <p className="text-gray-600">{t('athletes.challenge3.desc')}</p>
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
                    <h3 className="font-semibold text-gray-900 mb-2">{t('athletes.help1.title')}</h3>
                    <p className="text-gray-600">{t('athletes.help1.desc')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t('athletes.help2.title')}</h3>
                    <p className="text-gray-600">{t('athletes.help2.desc')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t('athletes.help3.title')}</h3>
                    <p className="text-gray-600">{t('athletes.help3.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="apple-section bg-yellow-50">
        <div className="apple-container text-center">
          <div className="squircle-card bg-white p-12 max-w-4xl mx-auto">
            <h2 className="apple-headline mb-6 text-yellow-600">
              {t('athletes.result.title')}
            </h2>
            <p className="apple-subtitle mb-8">
              {t('athletes.result.desc')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-light text-yellow-600 mb-2">90%</div>
                <div className="text-gray-600">{t('athletes.stats.recovery')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-yellow-600 mb-2">85%</div>
                <div className="text-gray-600">{t('athletes.stats.flexibility')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-yellow-600 mb-2">75%</div>
                <div className="text-gray-600">{t('athletes.stats.anxiety')}</div>
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
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop"
                alt="Sessió de teràpia per a esportistes"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h3 className="apple-title mb-6">
                {t('athletes.session.title')}
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
                  className="flex-1 inline-flex items-center justify-center w-full bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-2xl font-medium"
                >
                  {t('common.reserve')}
                </Link>
                <Link to="/services" className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full border-gray-200 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-2xl font-medium"
                  >
                    {t('common.seeOtherServices')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
