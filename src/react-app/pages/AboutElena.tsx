import { Link } from 'react-router';
import Layout from '@/react-app/components/Layout';
import SEOHead from '@/react-app/components/SEOHead';
import { useBooking } from '@/react-app/components/BookingProvider';
import { useLanguage } from '@/react-app/contexts/LanguageContext';
import { Mail, MessageCircle, Calendar, Heart, Brain, Sparkles } from 'lucide-react';

export default function AboutElena() {
  const { navigateToBooking } = useBooking();
  const { t } = useLanguage();

  const specializations = [
    t('elena.specialization.pain'),
    t('elena.specialization.stress'),
    t('elena.specialization.nervous'),
    t('elena.specialization.emotional'),
    t('elena.specialization.personal'),
    t('elena.specialization.support')
  ];

  const qualifications = [
    t('elena.education.kinesiology'),
    t('elena.education.feldenkrais'),
    t('elena.education.nlp'),
    t('elena.education.psychosomatic'),
    t('elena.education.massage'),
    t('elena.education.vibrational'),
    t('elena.education.transformation')
  ];

  return (
    <Layout>
      <SEOHead
        title={t('elena.title')}
        description={t('elena.about.p1')}
        keywords="Elena Kucherova, terapeuta integradora, kinesiologia Barcelona, sanació somàtica, desenvolupament personal"
        url="https://ekabalance.com/sobre-elena"
      />

      {/* Meta tag to prevent indexing */}
      <meta name="robots" content="noindex, nofollow" />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-blue-50/30 to-white min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          {/* Profile Image */}
          <div className="relative max-w-xs mx-auto mb-12">
            <div className="relative">
              <img
                src="https://5tghbndjb61dnqaj.public.blob.vercel-storage.com/therapist_photo.jpg"
                alt="Elena Kucherova"
                className="w-full h-auto rounded-full object-cover aspect-square shadow-2xl border-4 border-white"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-100/20 to-transparent"></div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-6 mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
              Elena Kucherova
            </h1>
            
            <div className="space-y-3">
              <p className="text-xl sm:text-2xl text-blue-600 font-medium">
                {t('elena.greeting').replace('Hola! Em dic Elena', '').replace('Hello! My name is Elena', '').replace('¡Hola! Me llamo Elena', '').replace('Привет! Меня зовут Елена', '') || t('elena.subtitle').split('|')[0].trim()}
              </p>
              <p className="text-lg sm:text-xl text-gray-600">
                {t('elena.subtitle')}
              </p>
            </div>

            {/* Quote */}
            <div className="max-w-3xl mx-auto mt-8">
              <blockquote className="text-xl sm:text-2xl text-gray-700 italic font-light leading-relaxed">
                "{t('elena.quote')}"
              </blockquote>
            </div>
          </div>

          {/* Experience Badge */}
          <div className="inline-flex items-center px-8 py-4 bg-white rounded-full shadow-lg border border-gray-100 mb-8">
            <Sparkles className="w-5 h-5 text-yellow-500 mr-3" />
            <span className="text-gray-900 font-medium">{t('elena.experience')}</span>
          </div>
        </div>
      </section>

      {/* About Elena */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
              {t('elena.about.title')}
            </h2>
          </div>

          <div className="prose prose-lg prose-gray max-w-none">
            <div className="text-lg leading-relaxed space-y-6 text-gray-700">
              <p>{t('elena.about.p1')}</p>
              <p>{t('elena.about.p2')}</p>
              <p>{t('elena.about.p3')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Training */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
              {t('elena.education.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('elena.education.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualifications.map((qualification, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    {qualification}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
              {t('elena.specializations.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializations.map((specialization, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 hover:from-blue-100 hover:to-blue-50 transition-all duration-300 border border-blue-100"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Heart className="w-5 h-5 text-blue-600" />
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {specialization}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-sm mb-8">
              <Brain className="w-5 h-5 text-purple-600 mr-2" />
              <span className="text-purple-700 font-medium">{t('elena.philosophy.title')}</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg">
            <div className="text-lg leading-relaxed space-y-6 text-gray-700">
              <p>{t('elena.philosophy.p1')}</p>
              <p>{t('elena.philosophy.p2')}</p>
              <p className="text-xl font-medium text-gray-900">
                {t('elena.philosophy.p3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Work with Elena */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
              {t('elena.work.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('elena.work.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button
              onClick={navigateToBooking}
              className="group bg-blue-600 hover:bg-blue-700 text-white rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Calendar className="w-8 h-8 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">{t('elena.work.book')}</h3>
              <p className="text-blue-100">{t('elena.work.bookDesc')}</p>
            </button>

            <Link
              to="/services"
              className="group bg-green-600 hover:bg-green-700 text-white rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Heart className="w-8 h-8 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">{t('elena.work.explore')}</h3>
              <p className="text-green-100">{t('elena.work.exploreDesc')}</p>
            </Link>

            <Link
              to="/contacte"
              className="group bg-purple-600 hover:bg-purple-700 text-white rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Mail className="w-8 h-8 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">{t('elena.work.contact')}</h3>
              <p className="text-purple-100">{t('elena.work.contactDesc')}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
              {t('elena.personal.title')}
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg">
            <div className="text-lg leading-relaxed text-gray-700 text-center">
              <p>{t('elena.personal.text')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Links */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <h3 className="text-2xl font-light mb-8">{t('elena.connect.title')}</h3>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a
              href="mailto:contact@ekabalance.com"
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
              <span>{t('elena.connect.email')}</span>
            </a>
            
            <a
              href="https://wa.me/34658867133"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-colors duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t('elena.connect.whatsapp')}</span>
            </a>
          </div>

          <p className="text-gray-400">
            📍 {t('footer.address')} | 📞 658 867 133
          </p>
        </div>
      </section>
    </Layout>
  );
}
