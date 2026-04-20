'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Calendar01Icon,
  Message01Icon,
  MailIcon,
  Location01Icon,
  Copy01Icon,
  CheckmarkCircle01Icon as CheckmarkBadge01Icon,
  SparklesIcon,
  FlashIcon,
  Activity01Icon,
  CheckCircle,
  Clock01Icon,
  ZapIcon
} from '@/lib/icons';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnalytics } from '@/hooks/useAnalytics';
import PageLayout from './PageLayout';
import FAQ from '@/components/FAQ';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

function BookingContentInner() {
  const { t } = useLanguage();
  const { logEvent } = useAnalytics();
  const searchParams = useSearchParams();
  const [copied, setCopied] = useState(false);

  const service = searchParams.get('service');
  const isComplete = searchParams.get('assessment') === 'complete';
  const intensity = searchParams.get('intensity');
  const mood = searchParams.get('mood');
  const energy = searchParams.get('energy');
  const profile = searchParams.get('profile');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('hello@ekabalance.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      logEvent('booking_page_email_copied');
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const getServiceTitle = (id: string) => {
    const services: Record<string, string> = {
      'kinesiology': t('services.kinesiology.title'),
      'massage': t('services.massage.title'),
      'nutrition': t('services.nutrition.title'),
      'constelaciones': t('services.constelaciones.title'),
      'revision-360': t('services.revision360.title')
    };
    return services[id] || id;
  };

  const getServiceImage = (id: string) => {
    const images: Record<string, string> = {
      'kinesiology': 'https://images.pexels.com/photos/4098157/pexels-photo-4098157.jpeg?auto=compress&cs=tinysrgb&w=800',
      'massage': 'https://images.pexels.com/photos/3997983/pexels-photo-3997983.jpeg?auto=compress&cs=tinysrgb&w=800',
      'nutrition': 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      'constelaciones': 'https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&w=800',
      'revision-360': 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=800'
    };
    return images[id] || images['kinesiology'];
  };

  // Custom hero — centered, no image
  const CustomHero = (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Badge variant="outline" className="mb-6 px-4 py-1 rounded-full border-primary/20 text-primary bg-primary/5 uppercase tracking-wider text-[10px] font-bold">
            {t('booking.badge')}
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-6 leading-[0.95]">
            {t('booking.hero.title')}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10">
            {t('booking.hero.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['booking.benefits.whatsapp', 'booking.benefits.flexible', 'booking.benefits.confirmation'].map((key, i) => (
              <div key={i} className="inline-flex items-center gap-2 px-4 py-2 bg-muted/60 rounded-full text-sm font-medium text-foreground/80">
                <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                {t(key)}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );

  return (
    <PageLayout hero={CustomHero} className="bg-background">

      {/* Personalized Summary Section */}
      <AnimatePresence>
        {isComplete && service && (
          <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-12"
          >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="overflow-hidden rounded-apple border border-primary/20 shadow-xl bg-card grid md:grid-cols-12">
                <div className="md:col-span-4 relative min-h-[220px]">
                  <Image src={getServiceImage(service)} alt={service} fill className="object-cover" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <Badge className="bg-primary text-white uppercase tracking-wider text-[9px] font-bold mb-2">{t('booking.recommended.badge')}</Badge>
                    <h3 className="text-white font-semibold text-xl leading-tight">{getServiceTitle(service)}</h3>
                  </div>
                </div>
                <div className="md:col-span-8 p-8 flex flex-col justify-center gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <SparklesIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-primary">{t('booking.analysis.title')}</p>
                      <p className="text-lg font-semibold">{t('booking.analysis.subtitle')}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      { label: t('booking.label.intensity'), value: `${intensity}/10`, icon: FlashIcon },
                      { label: t('booking.label.profile'), value: profile || 'Personal', icon: Activity01Icon },
                      { label: t('booking.label.mood'), value: mood || 'Neutral', icon: ZapIcon },
                      { label: t('booking.label.energy'), value: energy || 'Normal', icon: ZapIcon },
                    ].map((item, i) => (
                      <div key={i} className="space-y-1">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{item.label}</p>
                        <div className="flex items-center gap-2">
                          <item.icon className="w-4 h-4 text-primary" />
                          <span className="font-semibold text-lg capitalize">{item.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Booking Options */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight mb-4">
              {t('booking.contact.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-background rounded-apple p-8 border border-border/50 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Message01Icon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">{t('booking.direct.title')}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8 flex-1">{t('booking.direct.description')}</p>
              <a
                href={`https://wa.me/34658867133?text=${encodeURIComponent(
                  isComplete
                    ? `Hi Elena! I just completed the assessment.\nRecommended Service: ${getServiceTitle(service || '')}\nIntensity: ${intensity}/10\nProfile: ${profile}\nMood: ${mood}\nEnergy: ${energy}`
                    : t('whatsapp.booking')
                )}`}
                onClick={() => {
                  logEvent('booking_page_whatsapp_click');
                  fetch('/api/hubspot/track-booking', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ assessment: isComplete, service }),
                  }).catch((err) => console.warn('[hubspot] track-booking failed', err));
                }}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button size="lg" className="w-full rounded-full h-14 text-base bg-green-600 hover:bg-green-700 text-white">
                  <Message01Icon className="w-5 h-5 mr-2" />
                  {t('booking.direct.button')}
                </Button>
              </a>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-background rounded-apple p-8 border border-border/50 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <MailIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">{t('booking.email.title')}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8 flex-1">{t('booking.email.description')}</p>
              <div className="w-full space-y-3">
                <a href="mailto:hello@ekabalance.com" onClick={() => logEvent('booking_page_email_click')} className="w-full block">
                  <Button size="lg" variant="outline" className="w-full rounded-full h-14 text-base">
                    <MailIcon className="w-5 h-5 mr-2" />
                    {t('booking.email.button')}
                  </Button>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="w-full flex items-center justify-center gap-3 px-5 py-3 rounded-full bg-muted/60 border border-border/50 hover:bg-muted transition-colors"
                >
                  <span className="text-sm font-medium text-foreground">hello@ekabalance.com</span>
                  {copied
                    ? <CheckmarkBadge01Icon className="w-4 h-4 text-green-500" />
                    : <Copy01Icon className="w-4 h-4 text-muted-foreground" />
                  }
                </button>
                {copied && <p className="text-xs text-green-600 font-medium text-center">{t('common.copied')}</p>}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight mb-4">
              {t('booking.help.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Location & Email */}
            <div className="bg-muted/30 rounded-apple p-8 border border-border/50 space-y-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <Location01Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">{t('booking.help.contactDirect')}</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-background border border-border/50">
                  <MailIcon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-1">{t('common.email')}</p>
                    <p className="font-medium text-foreground">{t('booking.help.email')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-background border border-border/50">
                  <Location01Icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-1">{t('common.address')}</p>
                    <p className="font-medium text-foreground">{t('booking.help.address')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-muted/30 rounded-apple p-8 border border-border/50 space-y-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <Clock01Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">{t('booking.help.hours')}</h3>
              </div>
              <div className="space-y-3">
                {[
                  { value: t('booking.help.hours.weekdays') },
                  { value: t('booking.help.hours.saturday') },
                  { value: t('booking.help.hours.sunday') },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-background border border-border/40">
                    <Calendar01Icon className="w-4 h-4 text-primary/60 shrink-0" />
                    <span className="text-sm font-medium text-foreground/80">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-muted-foreground text-lg leading-relaxed italic">
              &quot;{t('booking.help.footer')}&quot;
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        title={t('contact.faq.title')}
        subtitle={t('contact.faq.subtitle')}
        items={[
          { id: '1', question: t('contact.faq.q1.title'), answer: t('contact.faq.q1.answer') },
          { id: '2', question: t('contact.faq.q2.title'), answer: t('contact.faq.q2.answer') },
          { id: '3', question: t('contact.faq.q3.title'), answer: t('contact.faq.q3.answer') },
          { id: '4', question: t('contact.faq.q4.title'), answer: t('contact.faq.q4.answer') },
        ]}
      />
    </PageLayout>
  );
}

export default function BookingContent() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"><SparklesIcon className="w-12 h-12 text-primary animate-pulse" /></div>}>
      <BookingContentInner />
    </Suspense>
  );
}
