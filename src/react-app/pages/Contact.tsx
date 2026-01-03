import SEOOptimized from '@/react-app/components/SEOOptimized';
import Layout from '@/react-app/components/Layout';
import ContactFormOptimized from '@/react-app/components/ContactFormOptimized';
import { MessageCircle, Phone } from 'lucide-react';
import { useLanguage } from '@/react-app/hooks/useLanguage';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <SEOOptimized
      title={t('seo.contact.title')}
      description={t('seo.contact.description')}
      keywords={t('seo.contact.keywords')}
      url="https://ekabalance.com/contact"
    >
      <Layout>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-blue-100 rounded-full mb-8">
              <MessageCircle className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-blue-700 font-medium">{t('contact.hero.badge')}</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
              {t('contact.hero.title')}{' '}
              <span className="text-blue-600 font-medium">{t('contact.hero.titleHighlight')}</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              {t('contact.hero.description')}
            </p>

            {/* Quick contact options */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="https://wa.me/34658867133"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {t('contact.whatsapp')}
              </a>
              <a
                href="tel:+34658867133"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                {t('contact.callNow')}
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <ContactFormOptimized />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-8">
            <h2 className="text-2xl font-light text-gray-900 mb-8 text-center">
              {t('contact.faq.title')}
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{t('contact.faq.q1.title')}</h3>
                <p className="text-gray-600">
                  {t('contact.faq.q1.answer')}
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{t('contact.faq.q2.title')}</h3>
                <p className="text-gray-600">
                  {t('contact.faq.q2.answer')}
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{t('contact.faq.q3.title')}</h3>
                <p className="text-gray-600">
                  {t('contact.faq.q3.answer')}
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{t('contact.faq.q4.title')}</h3>
                <p className="text-gray-600">
                  {t('contact.faq.q4.answer')}
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </SEOOptimized>
  );
}
