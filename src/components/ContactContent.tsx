'use client';

import ContactFormOptimized from '@/components/ContactFormOptimized';
import { MessageCircle, Phone, HelpCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from 'keep-react';
import PageLayout from './PageLayout';
import { motion } from 'framer-motion';
import SEOUpdater from '@/components/SEOUpdater';

export default function ContactContent() {
  const { t } = useLanguage();

  return (
    <>
      <SEOUpdater 
        titleKey="seo.contact.title"
        descKey="seo.contact.description"
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
          <div className="relative -mt-8 mb-16 z-20">
               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://wa.me/34658867133"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    <Button 
                      size="xl"
                      className="bg-[#25D366] hover:bg-[#128C7E] text-white font-medium px-8 py-4 rounded-apple shadow-xl border-none normal-case"
                    >
                      <MessageCircle className="w-6 h-6 mr-2" />
                      {t('contact.whatsapp')}
                    </Button>
                </a>
                <a href="tel:+34658867133">
                   <Button 
                      size="xl"
                      className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-8 py-4 rounded-apple shadow-xl border-none normal-case"
                   >
                      <Phone className="w-6 h-6 mr-2" />
                      {t('contact.callNow')}
                   </Button>
                </a>
              </div>
          </div>

          {/* Contact Form Section */}
          <section className="pb-24 bg-transparent relative">
            <div className="section-container">
              <div className="card max-w-2xl mx-auto bg-white p-6 sm:p-10 shadow-2xl border-gray-100/50 rounded-apple-lg">
                 <ContactFormOptimized />
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-24 bg-gray-50 border-t border-gray-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-8">
              <div className="text-center mb-12">
                 <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4 text-primary-600">
                   <HelpCircle className="w-6 h-6" />
                 </div>
                 <h2 className="heading-2">
                   {t('contact.faq.title')}
                 </h2>
              </div>
              
              <div className="space-y-6">
                {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      key={i}
                      className="card p-8 hover:shadow-md"
                     >
                      <h3 className="font-semibold text-gray-900 mb-3 text-lg">{t(`contact.faq.q${i}.title`)}</h3>
                      <p className="text-body">
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
