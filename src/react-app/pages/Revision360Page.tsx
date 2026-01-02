import React from 'react';
import Layout from '../components/Layout';
import { useLanguage } from '../hooks/useLanguage';
import { useBooking } from '../hooks/useBooking';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Heart, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Quote
} from 'lucide-react';

const Revision360Page: React.FC = () => {
  const { t } = useLanguage();
  const { navigateToBooking } = useBooking();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-800">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 z-10 pt-20">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={stagger}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span 
              variants={fadeIn}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-amber-800 bg-amber-100 rounded-full uppercase"
            >
              {t('services.completeReview')}
            </motion.span>
            
            <motion.h1 
              variants={fadeIn}
              className="text-5xl md:text-7xl font-serif text-stone-800 dark:text-stone-100 mb-8 leading-tight"
            >
              {t('hero.title')}
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl text-stone-600 dark:text-stone-300 mb-8 font-light"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.p 
              variants={fadeIn}
              className="text-lg text-stone-500 dark:text-stone-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div 
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button 
                onClick={() => navigateToBooking()}
                className="px-8 py-4 bg-stone-800 text-white rounded-full hover:bg-stone-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                {t('hero.cta')}
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why 360 Section */}
      <section className="py-24 bg-white dark:bg-stone-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-stone-800 dark:text-stone-100 mb-4">{t('why.title')}</h2>
            <p className="text-xl text-stone-600 dark:text-stone-400">{t('why.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Activity,
                title: 'why.physical.title',
                desc: 'why.physical.desc',
                color: 'text-rose-500',
                bg: 'bg-rose-50 dark:bg-rose-900/20'
              },
              {
                icon: Heart,
                title: 'why.emotional.title',
                desc: 'why.emotional.desc',
                color: 'text-amber-500',
                bg: 'bg-amber-50 dark:bg-amber-900/20'
              },
              {
                icon: Zap,
                title: 'why.energetic.title',
                desc: 'why.energetic.desc',
                color: 'text-violet-500',
                bg: 'bg-violet-50 dark:bg-violet-900/20'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-8 rounded-3xl bg-stone-50 dark:bg-stone-800 hover:shadow-xl transition-shadow"
              >
                <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-serif text-stone-800 dark:text-stone-100 mb-4">{t(item.title)}</h3>
                <p className="text-stone-600 dark:text-stone-400 leading-relaxed">{t(item.desc)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-stone-100 dark:bg-stone-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-center text-stone-800 dark:text-stone-100 mb-16">{t('service.title')}</h2>
          
          <div className="max-w-5xl mx-auto space-y-12">
            {[1, 2, 3, 4].map((step, index) => (
              <motion.div 
                key={step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-8 items-start bg-white dark:bg-stone-900 p-8 rounded-3xl shadow-sm"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-stone-800 text-white rounded-full flex items-center justify-center font-serif text-xl">
                  {step}
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-serif text-stone-800 dark:text-stone-100 mb-4">
                    {t(`service.step${step}.title`)}
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400 mb-6 text-lg">
                    {t(`service.step${step}.desc`)}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {[1, 2, 3, 4].map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-stone-500 dark:text-stone-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{t(`service.step${step}.details.${detail}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-white dark:bg-stone-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-stone-800 dark:text-stone-100 mb-4">{t('benefits.science')}</h2>
            <p className="text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto">{t('benefits.philosophy')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-stone-50 dark:bg-stone-800 border border-stone-100 dark:border-stone-700"
              >
                <h3 className="text-xl font-serif text-stone-800 dark:text-stone-100 mb-2">
                  {t(`benefits.benefit${num}.title`)}
                </h3>
                <p className="text-stone-600 dark:text-stone-400 text-sm mb-4 font-medium">
                  {t(`benefits.benefit${num}.description`)}
                </p>
                <p className="text-stone-500 dark:text-stone-500 text-xs italic border-t border-stone-200 dark:border-stone-700 pt-4">
                  "{t(`benefits.benefit${num}.science`)}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-amber-400 uppercase tracking-widest text-sm font-medium mb-4 block">{t('story.title')}</span>
              <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">"{t('story.intro')}"</h2>
            </div>
            
            <div className="space-y-6 text-lg text-stone-300 leading-relaxed font-light">
              <p>{t('story.paragraph1')}</p>
              <p>{t('story.paragraph2')}</p>
              <p>{t('story.paragraph3')}</p>
              <p>{t('story.paragraph4')}</p>
              <blockquote className="border-l-4 border-amber-400 pl-6 py-4 my-8 text-2xl font-serif text-white italic">
                {t('story.paragraph5')}
              </blockquote>
              <p className="text-amber-200/80 text-center mt-12 font-medium">
                {t('story.philosophy')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-stone-50 dark:bg-stone-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-center text-stone-800 dark:text-stone-100 mb-16">
            {t('testimonials.resultsAchieved')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {['maria', 'david', 'jennifer', 'alex'].map((person) => (
              <motion.div
                key={person}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-stone-900 p-8 rounded-3xl shadow-sm"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center text-amber-600 dark:text-amber-400">
                    <Quote className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100">{t(`testimonials.${person}.name`)}</h3>
                    <p className="text-stone-500 dark:text-stone-400 text-sm">{t(`testimonials.${person}.issue`)}</p>
                  </div>
                </div>
                
                <p className="text-stone-600 dark:text-stone-300 mb-6 italic">"{t(`testimonials.${person}.quote`)}"</p>
                
                <div className="space-y-3 border-t border-stone-100 dark:border-stone-800 pt-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-500">{t('testimonials.resultsAchieved')}</span>
                    <span className="font-medium text-green-600 dark:text-green-400 text-right max-w-[60%]">{t(`testimonials.${person}.result`)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-500">{t('testimonials.timeframe')}</span>
                    <span className="font-medium text-stone-800 dark:text-stone-200">{t(`testimonials.${person}.timeframe`)}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Variants */}
      <section className="py-24 bg-white dark:bg-stone-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-center text-stone-800 dark:text-stone-100 mb-16">{t('variants.title')}</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {['mapping', 'alignment', 'integral'].map((variant, index) => (
              <motion.div
                key={variant}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-8 rounded-3xl border-2 flex flex-col ${
                  index === 1 
                    ? 'border-amber-400 bg-stone-50 dark:bg-stone-800 shadow-xl scale-105 z-10' 
                    : 'border-stone-100 dark:border-stone-800 bg-white dark:bg-stone-900'
                }`}
              >
                {index === 1 && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-400 text-stone-900 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-serif text-stone-800 dark:text-stone-100 mb-2">{t(`variants.${variant}.title`)}</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-bold text-stone-900 dark:text-white">{t(`variants.${variant}.price`)}</span>
                  <span className="text-stone-500 dark:text-stone-400 text-sm">/ {t(`variants.${variant}.duration`)}</span>
                </div>
                
                <p className="text-stone-600 dark:text-stone-400 mb-8 flex-grow">{t(`variants.${variant}.desc`)}</p>
                
                <button 
                  onClick={() => navigateToBooking()}
                  className={`w-full py-4 rounded-xl font-medium transition-colors ${
                    index === 1
                      ? 'bg-stone-800 text-white hover:bg-stone-700'
                      : 'bg-stone-100 text-stone-800 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-200'
                  }`}
                >
                  {t('variants.book')}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prompt / Approach */}
      <section className="py-24 bg-stone-100 dark:bg-stone-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white dark:bg-stone-900 p-12 rounded-3xl shadow-sm">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-grow space-y-6">
                <h2 className="text-3xl font-serif text-stone-800 dark:text-stone-100 mb-6">{t('prompt.title')}</h2>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-stone-800 dark:text-stone-200">{t('prompt.diagnosis')}</h4>
                    <p className="text-stone-600 dark:text-stone-400">{t('prompt.diagnosisDesc')}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800 dark:text-stone-200">{t('prompt.integrativeTechniques')}</h4>
                    <p className="text-stone-600 dark:text-stone-400">{t('prompt.techniquesDesc')}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800 dark:text-stone-200">{t('prompt.layeredProcesses')}</h4>
                    <p className="text-stone-600 dark:text-stone-400">{t('prompt.layeredDesc')}</p>
                  </div>
                </div>

                <div className="pt-8 border-t border-stone-100 dark:border-stone-800">
                  <p className="text-stone-800 dark:text-stone-200 font-medium mb-2">{t('prompt.forWho')}</p>
                  <p className="text-stone-600 dark:text-stone-400 italic">{t('prompt.forWhoDesc')}</p>
                </div>
                
                <div className="pt-4 text-right">
                  <p className="font-serif text-xl text-stone-800 dark:text-stone-200">{t('prompt.signature')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Revision360Page;
