'use client';

import { useState } from 'react';
import { MessageCircle, Calendar, Calendar01Icon, Message01Icon, MailIcon, Location01Icon, Copy01Icon, CheckmarkCircle01Icon as CheckmarkBadge01Icon } from '@/lib/icons';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnalytics } from '@/hooks/useAnalytics';
import PageLayout from './PageLayout';
import FAQ from '@/components/FAQ';
import { motion } from 'framer-motion';

export default function BookingContent() {
  const { t } = useLanguage();
  const { logEvent } = useAnalytics();
  const [copied, setCopied] = useState(false);

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

  return (
    <PageLayout
      hero={{
        title: t('booking.hero.title') || "Reserva la teva cita",
        subtitle: t('booking.hero.subtitle') || "Tria l'opció que et sigui més còmoda per començar el teu camí cap al benestar.",
        badge: t('booking.badge') || "Reserves",
        icon: <Calendar01Icon className="w-4 h-4" />
      }}
      className="bg-secondary"
    >
      {/* Booking Option Section */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="section-container relative z-10 max-w-5xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Option 1: WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="h-full"
            >
              <Card className="rounded-apple p-8 sm:p-12 text-center border-border/50 shadow-sm transition duration-300 h-full flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-brand-whatsapp/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Message01Icon className="w-10 h-10 text-brand-whatsapp stroke-[2px]" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4 tracking-tight">
                  {t('booking.direct.title')}
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed font-normal text-base max-w-sm mx-auto">
                  {t('booking.direct.description')}
                </p>
                <div className="mt-auto">
                  <a
                    href="https://wa.me/34658867133"
                    onClick={() => {
                      logEvent('booking_page_whatsapp_click');
                      fetch('/api/hubspot/track-booking', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({}),
                      }).catch((err) => console.warn('[hubspot] track-booking failed', err));
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="default" size="xl" className="w-full sm:w-auto px-10 bg-brand-whatsapp hover:bg-brand-whatsapp/90 text-white rounded-full">
                      <Message01Icon className="w-5 h-5 mr-2" />
                      {t('booking.direct.button')}
                    </Button>
                  </a>
                </div>
              </Card>
            </motion.div>

            {/* Option 2: Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="h-full"
            >
              <Card className="rounded-apple p-8 sm:p-12 text-center border-border/50 shadow-sm transition duration-300 h-full flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MailIcon className="w-10 h-10 text-primary stroke-[2px]" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4 tracking-tight">
                  {t('booking.email.title')}
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed font-normal text-base max-w-sm mx-auto">
                  {t('booking.email.description')}
                </p>
                <div className="mt-auto flex flex-col items-center gap-4">
                  <a
                    href="mailto:hello@ekabalance.com"
                    onClick={() => logEvent('booking_page_email_click')}
                  >
                    <Button variant="outline" size="xl" className="w-full sm:w-auto px-10 rounded-full border-primary/20 hover:bg-primary/5">
                      <MailIcon className="w-5 h-5 mr-2" />
                      {t('booking.email.button')}
                    </Button>
                  </a>
                  
                  <button 
                    onClick={handleCopyEmail}
                    className="group flex flex-col items-center justify-center text-sm transition-colors"
                  >
                    <span className="text-foreground font-medium flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-muted transition-colors">
                      hello@ekabalance.com
                      {copied ? (
                        <CheckmarkBadge01Icon className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy01Icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                      )}
                    </span>
                    <span className="text-xs text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {copied ? t('common.copied') || 'Copied!' : t('common.clickToCopy') || 'Click to copy'}
                    </span>
                  </button>
                </div>
              </Card>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="section-container max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-12 tracking-tight">
            {t('booking.help.title')}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card p-8 rounded-apple border border-border shadow-sm">
              <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-4">{t('booking.help.contactDirect')}</h4>
              <div className="flex flex-col items-center space-y-4 text-muted-foreground text-sm">
                <div className="flex items-center space-x-3 w-full max-w-70">
                  <MailIcon className="w-5 h-5 text-primary/80 shrink-0" />
                  <span className="text-left">{t('booking.help.email')}</span>
                </div>
                <div className="flex items-center space-x-3 w-full max-w-70">
                  <Location01Icon className="w-5 h-5 text-primary/80 shrink-0" />
                  <span className="text-left">{t('booking.help.address')}</span>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-apple border border-border shadow-sm">
              <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <Calendar className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-4">{t('booking.help.hours')}</h4>
              <div className="flex flex-col items-start mx-auto w-fit space-y-2 text-muted-foreground text-sm">
                <p>{t('booking.help.hours.weekdays')}</p>
                <p>{t('booking.help.hours.saturday')}</p>
                <p>{t('booking.help.hours.sunday')}</p>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground text-sm font-normal max-w-2xl mx-auto">
            {t('booking.help.footer')}
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ 
        title={t('contact.faq.title')}
        subtitle={t('contact.faq.subtitle') || 'Everything you need to know about contacting us'}
        items={[
            { id: '1', question: t('contact.faq.q1.title'), answer: t('contact.faq.q1.answer') },
            { id: '2', question: t('contact.faq.q2.title'), answer: t('contact.faq.q2.answer') },
            { id: '3', question: t('contact.faq.q3.title'), answer: t('contact.faq.q3.answer') },
            { id: '4', question: t('contact.faq.q4.title'), answer: t('contact.faq.q4.answer') }
        ]}
      />
    </PageLayout>
  );
}
