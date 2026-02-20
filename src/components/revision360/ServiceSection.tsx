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
      title: t('revision360.service.step1.title'),
      description: t('revision360.service.step1.description'),
      details: [
        t('revision360.service.step1.details.1'),
        t('revision360.service.step1.details.2'),
        t('revision360.service.step1.details.3'),
        t('revision360.service.step1.details.4'),
      ],
      duration: '45 min',
    },
    {
      number: '02',
      title: t('revision360.service.step2.title'),
      description: t('revision360.service.step2.description'),
      details: [
        t('revision360.service.step2.details.1'),
        t('revision360.service.step2.details.2'),
        t('revision360.service.step2.details.3'),
        t('revision360.service.step2.details.4'),
      ],
      duration: '60 min',
    },
    {
      number: '03',
      title: t('revision360.service.step3.title'),
      description: t('revision360.service.step3.description'),
      details: [
        t('revision360.service.step3.details.1'),
        t('revision360.service.step3.details.2'),
        t('revision360.service.step3.details.3'),
        t('revision360.service.step3.details.4'),
      ],
      duration: '90 min',
    },
    {
      number: '04',
      title: t('revision360.service.step4.title'),
      description: t('revision360.service.step4.description'),
      details: [
        t('revision360.service.step4.details.1'),
        t('revision360.service.step4.details.2'),
        t('revision360.service.step4.details.3'),
        t('revision360.service.step4.details.4'),
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
          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-yellow-800 uppercase bg-amber-50 rounded-full border border-amber-200">
            {t('revision360.service.badge')}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-500">
              {t('revision360.service.title')}
            </span>
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">{t('revision360.service.subtitle')}</p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              className="group rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-yellow-200 hover:shadow-yellow-100/30"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-yellow-700 font-bold bg-amber-50 border border-amber-100 px-2 py-1 inline-block rounded">{t('revision360.service.step')} {step.number}</p>
                  <h3 className="mt-4 text-2xl font-bold text-gray-900 group-hover:text-yellow-700 transition-colors">{step.title}</h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-bold text-gray-900 whitespace-nowrap group-hover:bg-amber-50 group-hover:text-yellow-800 group-hover:border-amber-200 transition-colors shadow-sm">
                  <Clock3 className="h-3.5 w-3.5" />
                  {step.duration}
                </div>
              </div>

              <div className="mt-6 border-t border-gray-100 pt-6">
                <p className="text-sm font-bold text-gray-900 uppercase tracking-wide">{t('revision360.service.expect')}</p>
                <ul className="mt-4 space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-3 text-sm sm:text-base text-gray-600">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-400 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.11em] text-gray-500 font-bold">{t('revision360.service.total.title')}</p>
              <p className="mt-1 text-3xl font-bold text-gray-900">{t('revision360.service.total.duration')}</p>
            </div>
            <p className="text-gray-600 max-w-xl italic">{t('revision360.service.total.note')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
