import { Link } from 'react-router';
import { motion } from 'framer-motion';
import SEOHead from '@/react-app/components/SEOHead';
import { useBooking } from '@/react-app/hooks/useBooking';
import { useLanguage } from '@/react-app/hooks/useLanguage';
import { Mail, MessageCircle, Calendar, Heart, Sparkles, Star } from 'lucide-react';

export default function AboutElena() {
  const { navigateToBooking } = useBooking();
  const { t } = useLanguage();

  const techniques = [
    { id: 'movement-lesson', name: t('technique.movement_lesson.title') },
    { id: 'jka', name: t('technique.jka.title') },
    { id: 'tmr', name: t('technique.tmr.title') },
    { id: 'kgh', name: t('technique.kgh.title') },
    { id: 'ke', name: t('technique.ke.title') },
    { id: 'kb', name: t('technique.kb.title') },
    { id: 'osteobalance', name: t('technique.osteobalance.title') },
    { id: 'sujok', name: t('technique.sujok.title') },
    { id: 'quiromasaje', name: t('technique.quiromasaje.title') },
  ];

  const targetGroups = [
    { title: t('elena.target.adults.title'), desc: t('elena.target.adults.desc') },
    { title: t('elena.target.children.title'), desc: t('elena.target.children.desc') },
    { title: t('elena.target.families.title'), desc: t('elena.target.families.desc') },
  ];

  return (
    <>
      <SEOHead
        title={t('elena.seo.title')}
        description={t('elena.seo.desc')}
        keywords={t('elena.seo.keywords')}
        url="https://ekabalance.com/about-elena"
      />

      <div className="bg-white min-h-screen text-gray-900 selection:bg-amber-100">

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-white via-gray-50/50 to-amber-50/30">
          {/* Ambient Background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-100/40 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-[100px]" />
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10 text-center">
            {/* Profile Image with Glow */}
            <motion.div
              className="relative max-w-xs mx-auto mb-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative group">
                <img
                  src="https://5tghbndjb61dnqaj.public.blob.vercel-storage.com/therapist_photo.jpg"
                  alt="Elena Kuchera"
                  className="relative w-full h-auto rounded-full object-cover aspect-square"
                />
              </div>
            </motion.div>

            {/* Name and Title */}
            <motion.div
              className="space-y-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 tracking-tight">
                Elena Kuchera
              </h1>

              <div className="space-y-4">
                <p className="text-2xl sm:text-3xl text-amber-600 font-medium tracking-wide">
                  {t('elena.greeting')}
                </p>
                <p className="text-xl sm:text-2xl text-blue-600 font-medium tracking-wide">
                  {t('elena.role')}
                </p>
                <p className="text-lg sm:text-xl text-gray-600 font-light max-w-2xl mx-auto">
                  {t('elena.bio')}
                </p>
              </div>

              {/* Quote */}
              <div className="max-w-3xl mx-auto mt-10">
                <blockquote className="text-xl sm:text-2xl text-gray-700 italic font-light leading-relaxed border-l-2 border-amber-500/30 pl-6">
                  "{t('elena.quote')}"
                </blockquote>
              </div>
            </motion.div>

            {/* Experience Badge */}
            <motion.div
              className="inline-flex items-center px-8 py-3 bg-white rounded-full border border-amber-100 shadow-sm mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Sparkles className="w-5 h-5 text-amber-500 mr-3" />
              <span className="text-gray-700 font-medium tracking-wide">{t('elena.experience')}</span>
            </motion.div>
          </div>
        </section>

        {/* About Elena (Approach) */}
        <section className="py-20 relative bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
                {t('elena.approach.title')}
              </h2>
            </motion.div>

            <motion.div
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-lg leading-relaxed space-y-6 text-gray-600 font-light">
                <p>{t('elena.approach.desc')}</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Techniques (Education & Training) */}
        <section className="py-20 bg-gray-50 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
                {t('elena.education.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                {t('elena.education.subtitle')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techniques.map((technique, index) => (
                <Link to={`/technique/${technique.id}`} key={index}>
                  <motion.div
                    className="h-full bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2.5 flex-shrink-0"></div>
                      <p className="text-gray-700 font-light leading-relaxed">
                        {technique.name}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Target Groups (Specializations) */}
        <section className="py-20 relative bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
                {t('elena.specializations.title')}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-6">
              {targetGroups.map((group, index) => (
                <motion.div
                  key={index}
                  className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <Heart className="w-5 h-5 text-amber-500" />
                    <h3 className="text-xl font-medium text-gray-900">{group.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed font-light group-hover:text-gray-900 transition-colors">
                    {group.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Work with Elena */}
        <section className="py-20 relative bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
                {t('elena.work.title')}
              </h2>
              <p className="text-xl text-gray-600 font-light">
                {t('elena.work.subtitle')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.button
                onClick={() => navigateToBooking()}
                className="group bg-white hover:bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md rounded-2xl p-8 transition-all duration-300 text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
                whileHover={{ y: -5 }}
              >
                <Calendar className="w-10 h-10 mb-6 text-amber-500 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-medium text-gray-900 mb-3">{t('elena.work.book')}</h3>
                <p className="text-gray-600 font-light text-sm leading-relaxed">{t('elena.work.bookDesc')}</p>
              </motion.button>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Link
                  to="/services"
                  className="block h-full group bg-white hover:bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md rounded-2xl p-8 transition-all duration-300 text-left"
                >
                  <Star className="w-10 h-10 mb-6 text-amber-500 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-medium text-gray-900 mb-3">{t('elena.work.explore')}</h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">{t('elena.work.exploreDesc')}</p>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link
                  to="/contact"
                  className="block h-full group bg-white hover:bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md rounded-2xl p-8 transition-all duration-300 text-left"
                >
                  <Mail className="w-10 h-10 mb-6 text-amber-500 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-medium text-gray-900 mb-3">{t('elena.work.contact')}</h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">{t('elena.work.contactDesc')}</p>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Links */}
        <section className="py-20 bg-black border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
            <motion.h3
              className="text-2xl font-light text-amber-100 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {t('elena.connect.title')}
            </motion.h3>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-6 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a
                href="mailto:contact@ekabalance.com"
                className="flex items-center justify-center space-x-3 bg-white hover:bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md px-8 py-4 rounded-2xl transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-amber-500 group-hover:scale-110 transition-transform" />
                <span className="text-gray-600 group-hover:text-gray-900">{t('elena.connect.email')}</span>
              </a>

              <a
                href="https://wa.me/34658867133"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-white hover:bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md px-8 py-4 rounded-2xl transition-all duration-300 group"
              >
                <MessageCircle className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />
                <span className="text-gray-600 group-hover:text-gray-900">{t('elena.connect.whatsapp')}</span>
              </a>
            </motion.div>

            <motion.p
              className="text-gray-500 font-light text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="block sm:inline mb-2 sm:mb-0">📍 {t('footer.address')}</span>
              <span className="hidden sm:inline mx-3 text-gray-300">|</span>
              <span className="block sm:inline">📞 658 867 133</span>
            </motion.p>
          </div>
        </section>
      </div>
    </>
  );
}
