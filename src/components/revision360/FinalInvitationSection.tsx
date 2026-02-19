import { motion } from 'framer-motion';
import { CalendarCheck2, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function FinalInvitationSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 sm:py-24 bg-gray-50">
      <div className="section-container">
        <motion.div
          className="rounded-3xl bg-white border border-gray-100 shadow-xl shadow-gray-200/50 p-10 sm:p-16 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-[#0071e3] to-blue-600" />
          
          <h2 className="mt-6 text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            {t('final.title')}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500 text-lg leading-relaxed">
            {t('final.subtitle')}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/34658867133?text=${encodeURIComponent(t('whatsapp.booking'))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#0071e3] px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-[#0077ED] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071e3] transition-all"
            >
              <CalendarCheck2 className="mr-2 h-5 w-5" />
              {t('final.cta')}
            </a>
            <a
              href="https://wa.me/34658867133?text=Hola%2C%20m%27agradaria%20programar%20una%20trucada%20de%20descobriment.%20Podr%C3%ADem%20parlar%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:ring-gray-400 transition-all"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              {t('cta.scheduleDiscoveryCall')}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center rounded-full bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">{t('labels.noInsuranceNeeded')}</span>
            <span className="inline-flex items-center rounded-full bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">{t('labels.flexibleSchedules')}</span>
            <span className="inline-flex items-center rounded-full bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">{t('labels.personalizedApproach')}</span>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-gray-100 pt-12">
            <div className="p-4">
              <p className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tighter">500+</p>
              <p className="mt-2 text-xs text-gray-400 font-bold uppercase tracking-widest">{t('final.stat1')}</p>
            </div>
            <div className="p-4 sm:border-l border-gray-100">
              <p className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tighter">15+</p>
              <p className="mt-2 text-xs text-gray-400 font-bold uppercase tracking-widest">{t('final.stat2')}</p>
            </div>
            <div className="p-4 sm:border-l border-gray-100">
              <p className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tighter">98%</p>
              <p className="mt-2 text-xs text-gray-400 font-bold uppercase tracking-widest">{t('final.stat3')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
