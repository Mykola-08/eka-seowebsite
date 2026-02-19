import { motion } from 'framer-motion';
import { Clock3 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServiceStep {
  number: string;
  title: string;
  description: string;
  details: string[];
  duration: string;
}

export default function ServiceSection() {
  const { t } = useLanguage();

  const steps: ServiceStep[] = [
    {
      number: '01',
      title: t('service.step1.title'),
      description: t('service.step1.description'),
      details: [
        t('service.step1.details.1'),
        t('service.step1.details.2'),
        t('service.step1.details.3'),
        t('service.step1.details.4'),
      ],
      duration: '45 min',
    },
    {
      number: '02',
      title: t('service.step2.title'),
      description: t('service.step2.description'),
      details: [
        t('service.step2.details.1'),
        t('service.step2.details.2'),
        t('service.step2.details.3'),
        t('service.step2.details.4'),
      ],
      duration: '60 min',
    },
    {
      number: '03',
      title: t('service.step3.title'),
      description: t('service.step3.description'),
      details: [
        t('service.step3.details.1'),
        t('service.step3.details.2'),
        t('service.step3.details.3'),
        t('service.step3.details.4'),
      ],
      duration: '90 min',
    },
    {
      number: '04',
      title: t('service.step4.title'),
      description: t('service.step4.description'),
      details: [
        t('service.step4.details.1'),
        t('service.step4.details.2'),
        t('service.step4.details.3'),
        t('service.step4.details.4'),
      ],
      duration: '30 min',
    },
  ];

  return (
    <section id="process" className="relative py-20 sm:py-24 bg-white">
      <div className="section-container">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-[#0071e3] uppercase bg-blue-50 rounded-full border border-blue-100">
            {t('labels.process')}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight">{t('service.title')}</h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">{t('service.subtitle')}</p>
        </motion.div>


        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="group relative flex flex-col p-8 rounded-2xl bg-gray-50/50 border border-gray-100/80 hover:bg-white hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50/50 transition-all duration-300"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900 tracking-tight">{step.title}</h3>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#0071e3] border border-blue-100">
                  {step.duration}
                </span>
              </div>
              <p className="text-base text-gray-500 leading-relaxed mb-6">{step.description}</p>
              <div className="grid gap-3 sm:grid-cols-2 mt-auto pt-6 border-t border-gray-100 group-hover:border-blue-50 transition-colors">
                {step.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center gap-2.5 text-sm text-gray-500 group-hover:text-gray-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0071e3]/60 group-hover:bg-[#0071e3] transition-colors shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 rounded-2xl border border-blue-100 bg-blue-50/50 p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-[#0071e3] font-bold mb-2">{t('service.total.title')}</p>
            <p className="text-3xl font-bold text-gray-900 tracking-tight">{t('service.total.duration')}</p>
          </div>
          <p className="text-gray-600 max-w-xl text-lg font-medium">{t('service.total.note')}</p>
        </motion.div>
      </div>
    </section>
  );
}
