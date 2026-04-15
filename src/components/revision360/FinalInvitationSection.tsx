'use client';

import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { CalendarCheckIn01Icon, Message01Icon } from '@hugeicons/core-free-icons';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import ParallaxBackground from '@/components/ParallaxBackground';

export default function FinalInvitationSection() {
  const { t } = useLanguage();

  return (
    <ParallaxBackground
      src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1920"
      className="py-24 sm:py-32"
      overlayOpacity={0.7}
    >
      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-black/40 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.35em] text-white backdrop-blur-md">
            <HugeiconsIcon icon={CalendarCheckIn01Icon} className="h-3.5 w-3.5" aria-hidden="true"  />
            EKA Balance · 360° Integral Method
          </span>
          
          <h2 className="mb-8 text-balance text-6xl font-bold leading-[0.95] tracking-tighter text-white sm:text-7xl lg:text-[7rem]">
            {t('revision360.final.title')}
          </h2>
          
          <p className="mx-auto mb-12 max-w-3xl text-xl font-light leading-relaxed text-white/80 sm:text-3xl">
            {t('revision360.final.subtitle')}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-16 rounded-full bg-white px-10 text-base font-medium text-black shadow-xl transition-all hover:-translate-y-0.5 hover:bg-white/90"
            >
              <a
                href={`https://wa.me/34658867133?text=${encodeURIComponent(t('whatsapp.booking'))}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <HugeiconsIcon icon={CalendarCheckIn01Icon} className="mr-2 h-5 w-5"  />
                {t('common.bookNow')}
              </a>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-16 rounded-full border-white/20 bg-black/20 px-10 text-base font-medium text-white backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white hover:text-black"
            >
              <a
                href="https://wa.me/34658867133?text=Hola%2C%20m%27agradaria%20programar%20una%20trucada%20de%20descobriment.%20Podr%C3%ADem%20parlar%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HugeiconsIcon icon={Message01Icon} className="mr-2 h-5 w-5"  />
                {t('cta.scheduleDiscoveryCall')}
              </a>
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">{t('labels.noInsuranceNeeded')}</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">{t('labels.flexibleSchedules')}</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">{t('labels.personalizedApproach')}</span>
          </div>
        </motion.div>
      </div>
    </ParallaxBackground>
  );
}
