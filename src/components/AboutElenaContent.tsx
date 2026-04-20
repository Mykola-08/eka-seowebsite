'use client';

import Link from 'next/link';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { StarIcon, FavouriteIcon } from '@/lib/icons';
import CTASection from '@/components/CTASection';
import PageLayout from '@/components/PageLayout';
import { ServiceBentoItem } from '@/components/ui/service-bento';

export default function AboutElenaContent() {
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

  // Custom Hero — split layout: image left, text right
  const CustomHero = (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[3/4] shadow-2xl">
              <Image
                src="/images/therapist_photo.jpg"
                alt={t('home.elenaAlt')}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Floating quote card */}
            <motion.div
              className="absolute -bottom-6 -right-4 lg:-right-8 bg-background border border-border rounded-2xl p-5 shadow-xl max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="text-sm text-foreground/80 italic leading-relaxed">"{t('elena.quote')}"</p>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-wider">
              {t('elena.role')}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight leading-[0.95]">
              {t('elena.name')}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('elena.bio')}
            </p>

            {/* Credential pills */}
            <div className="flex flex-wrap gap-3 py-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/60 rounded-full text-sm font-medium text-foreground/80">
                <StarIcon className="w-3.5 h-3.5 text-primary" />
                15+ {t('hero.stats.experience')}
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/60 rounded-full text-sm font-medium text-foreground/80">
                <FavouriteIcon className="w-3.5 h-3.5 text-primary" />
                800+ {t('services.stats.clients')}
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/60 rounded-full text-sm font-medium text-foreground/80">
                <StarIcon className="w-3.5 h-3.5 text-primary" />
                98% {t('services.stats.satisfaction')}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link href="/booking">
                <Button size="lg" variant="default" className="rounded-full px-8 h-14 text-base w-full sm:w-auto">
                  {t('common.bookNow')}
                </Button>
              </Link>
              <Link href="#approach">
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base w-full sm:w-auto">
                  {t('common.learnMore')}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );

  return (
    <>
      
      
      <PageLayout hero={CustomHero} className="bg-background">
        {/* Techniques Section */}
        <section id="approach" className="py-24 bg-card rounded-t-[3rem]">
          <div className="section-container relative z-10 text-center">
            <div className="mb-20">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-6 tracking-tight">
                {t('elena.approach.title')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-normal leading-relaxed">
                {t('elena.approach.desc')}
              </p>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
              className="flex flex-wrap justify-center gap-4"
            >
              {techniques.map((tech) => (
                <motion.div 
                  key={tech.id} 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="px-8 py-4 bg-secondary text-foreground/80 rounded-[2rem] font-medium cursor-default hover:bg-secondary/80 transition-colors"
                >
                  {tech.name}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Target Audience Bento */}
        <section className="py-24 bg-muted/30">
          <div className="section-container relative z-10">
            <div className="text-center mb-16">
               <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
                 {t('elena.work.title')}
               </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-300 mx-auto">
               <div className="md:col-span-2 lg:col-span-1">
                 <ServiceBentoItem 
                   title={t('elena.target.adults.title')}
                   description={t('elena.target.adults.desc')}
                   details={<p>{t('elena.target.adults.desc')}</p>}
                   image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2070"
                   delay={0}
                 />
               </div>
               <div className="col-span-1 md:col-span-1">
                 <ServiceBentoItem 
                   title={t('elena.target.children.title')}
                   description={t('elena.target.children.desc')}
                   details={<p>{t('elena.target.children.desc')}</p>}
                   image="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=2070"
                   delay={0.1}
                 />
               </div>
               <div className="col-span-1 md:col-span-2 lg:col-span-1">
                 <ServiceBentoItem 
                   title={t('elena.target.families.title')}
                   description={t('elena.target.families.desc')}
                   details={<p>{t('elena.target.families.desc')}</p>}
                   image="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=2070"
                   delay={0.2}
                 />
               </div>
            </div>
          </div>
        </section>


        <CTASection />
      </PageLayout>
    </>
  );
}
