'use client';

import ContactFormOptimized from '@/components/ContactFormOptimized';
import { MessageCircle, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import PageLayout from './PageLayout';
import { motion } from 'framer-motion';
import SEOUpdater from '@/components/SEOUpdater';

export default function ContactContent() {
  const { t } = useLanguage();

  return (
    <>
      <SEOUpdater 
        titleKey="seo.contact.title"
        descriptionKey="seo.contact.description"
        keywordsKey="seo.contact.keywords"
      />
      <PageLayout
        hero={{
          title: t('contact.hero.title') || "Contacta amb nosaltres",
          subtitle: t('contact.hero.description') || "Estem aquí per ajudar-te. Envia'ns un missatge i et respondrem el més aviat possible.",
          badge: t('contact.hero.badge') || "Contacte",
          icon: <MessageCircle className="w-4 h-4" />
        }}
      >
          {/* Quick buttons overlay */}
          <div className="relative -mt-10 mb-20 z-20">
               <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="https://wa.me/34658867133"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                    <Button 
                      size="xl"
                      className="bg-[#25D366] hover:bg-[#128C7E] text-white font-medium px-8 py-4 shadow-lg shadow-green-500/20 hover:shadow-green-500/30 border-none normal-case gap-3 transition-all duration-300 hover:scale-105"
                    >
                      <MessageCircle className="w-6 h-6" />
                      <span className="text-lg">{t('contact.whatsapp')}</span>
                    </Button>
                </a>
                <a href="tel:+34658867133" className="group">
                   <Button 
                      size="xl"
                      variant="primary"
                      className="px-8 py-4 gap-3 border-none normal-case"
                   >
                      <Phone className="w-6 h-6" />
                      <span className="text-lg">{t('contact.callNow')}</span>
                   </Button>
                </a>
              </div>
          </div>

          {/* Contact Form Section */}
          <section className="bg-transparent relative pb-24">
            <div className="section-container">
              <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 shadow-2xl shadow-gray-200/50 border border-gray-100/50 rounded-[2.5rem]">
                 <div className="text-center mb-10">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">{t('contact.form.title') || 'Send us a message'}</h2>
                    <p className="text-gray-500 font-light">{t('contact.form.subtitle') || 'We normally respond within 24 hours'}</p>
                 </div>
                 <ContactFormOptimized />
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-24 bg-gray-50/50">
            <div className="section-container max-w-4xl mx-auto">
              <div className="text-center mb-16">
                 <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-6">
                   FAQ
                 </span>
                 <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight mb-6">
                   {t('contact.faq.title')}
                 </h2>
                 <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
                   {t('contact.faq.subtitle') || 'Everything you need to know about contacting us'}
                 </p>
              </div>
              
              <div className="grid gap-6">
                {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      key={i}
                      className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                     >
                      <h3 className="font-semibold text-gray-900 mb-3 text-lg tracking-tight">{t(`contact.faq.q${i}.title`)}</h3>
                      <p className="text-gray-600 leading-relaxed font-light">
                        {t(`contact.faq.q${i}.answer`)}
                      </p>
                    </motion.div>
                ))}
              </div>
            </div>
          </section>
      </PageLayout>
    </>
  );
}
