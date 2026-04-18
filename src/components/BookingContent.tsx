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
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnalytics } from '@/hooks/useAnalytics';
import PageLayout from './PageLayout';
import FAQ from '@/components/FAQ';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

function BookingContentInner() {
  const { t } = useLanguage();
  const { logEvent } = useAnalytics();
  const searchParams = useSearchParams();
  const [copied, setCopied] = useState(false);

  // Assessment Data from URL
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
      {/* Personalized Summary Section */}
      <AnimatePresence>
        {isComplete && service && (
          <motion.section 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-12 relative z-20 -mt-20"
          >
            <div className="section-container max-w-5xl mx-auto">
               <div className="apple-card overflow-hidden grid md:grid-cols-12 border-primary/20 shadow-2xl shadow-primary/10 bg-card">
                  <div className="md:col-span-4 relative min-h-[250px]">
                     <Image src={getServiceImage(service)} alt={service} fill className="object-cover" />
                     <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                     <div className="absolute bottom-6 left-6 right-6">
                        <Badge className="bg-primary text-white uppercase tracking-widest text-[9px] font-black mb-2">RECOMMENDED</Badge>
                        <h3 className="text-white font-black text-xl leading-tight">{getServiceTitle(service)}</h3>
                     </div>
                  </div>
                  <div className="md:col-span-8 p-8 md:p-12 flex flex-col justify-center space-y-8">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                           <SparklesIcon className="w-5 h-5" />
                        </div>
                        <div>
                           <h4 className="font-black text-xs uppercase tracking-[0.2em] text-primary">Assessment Analysis</h4>
                           <p className="text-lg font-bold">Your personalized path is ready</p>
                        </div>
                     </div>
                     
                     <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                        <div className="space-y-1">
                           <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Intensity</span>
                           <div className="flex items-center gap-2">
                              <FlashIcon className={cn("w-4 h-4", parseInt(intensity || '0') > 7 ? "text-destructive" : "text-primary")} />
                              <span className="font-black text-lg">{intensity}/10</span>
                           </div>
                        </div>
                        <div className="space-y-1">
                           <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Profile</span>
                           <div className="flex items-center gap-2">
                              <Activity01Icon className="w-4 h-4 text-primary" />
                              <span className="font-black text-lg capitalize">{profile || 'Personal'}</span>
                           </div>
                        </div>
                        <div className="space-y-1">
                           <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Mood</span>
                           <div className="flex items-center gap-2">
                              <ZapIcon className="w-4 h-4 text-primary" />
                              <span className="font-black text-lg capitalize">{mood || 'Neutral'}</span>
                           </div>
                        </div>
                        <div className="space-y-1">
                           <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Energy</span>
                           <div className="flex items-center gap-2">
                              <ZapIcon className="w-4 h-4 text-primary" />
                              <span className="font-black text-lg capitalize">{energy || 'Normal'}</span>
                           </div>
                        </div>
                     </div>

                     <div className="pt-4 border-t border-border/60">
                        <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                           We have pre-filled your booking request with these details. Simply click the WhatsApp button below to send your profile directly to Elena.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Booking Option Section */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="section-container relative z-10 max-w-5xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Option 1: WhatsApp */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="h-full"
            >
              <Card className="rounded-[40px] p-10 sm:p-16 text-center border-primary/10 shadow-2xl shadow-primary/5 transition-all duration-500 hover:shadow-primary/10 group h-full flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-whatsapp/5 rounded-bl-full transition-transform duration-700 group-hover:scale-110" />
                
                <div className="w-24 h-24 bg-brand-whatsapp/10 rounded-[30px] flex items-center justify-center mx-auto mb-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-brand-whatsapp/5">
                  <Message01Icon className="w-12 h-12 text-brand-whatsapp stroke-[2.5px]" />
                </div>
                
                <h3 className="text-3xl font-black text-foreground mb-6 tracking-tight uppercase">
                  {t('booking.direct.title')}
                </h3>
                <p className="text-muted-foreground mb-12 leading-relaxed font-medium text-lg max-w-xs mx-auto">
                  {t('booking.direct.description')}
                </p>
                
                <div className="mt-auto w-full">
                  <a
                    href={`https://wa.me/34658867133?text=${encodeURIComponent(
                      isComplete 
                        ? `Hi Elena! I just completed the assessment. 
Recommended Service: ${getServiceTitle(service || '')}
Intensity: ${intensity}/10
Profile: ${profile}
Mood: ${mood}
Energy: ${energy}` 
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
                    className="block"
                  >
                    <Button variant="default" size="xl" className="w-full rounded-full h-20 text-lg font-black bg-brand-whatsapp hover:bg-brand-whatsapp/90 text-white shadow-xl shadow-brand-whatsapp/20 transition-all group-hover:scale-[1.02]">
                      <Message01Icon className="w-6 h-6 mr-3" />
                      {t('booking.direct.button')}
                    </Button>
                  </a>
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] mt-6 opacity-60">Response in &lt; 24h</p>
                </div>
              </Card>
            </motion.div>

            {/* Option 2: Email */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="h-full"
            >
              <Card className="rounded-[40px] p-10 sm:p-16 text-center border-border/60 shadow-xl transition-all duration-500 hover:shadow-2xl group h-full flex flex-col items-center justify-center relative overflow-hidden bg-muted/20">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-tr-full transition-transform duration-700 group-hover:scale-110" />

                <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-10 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                  <MailIcon className="w-12 h-12 text-primary stroke-[2.5px]" />
                </div>
                
                <h3 className="text-3xl font-black text-foreground mb-6 tracking-tight uppercase">
                  {t('booking.email.title')}
                </h3>
                <p className="text-muted-foreground mb-12 leading-relaxed font-medium text-lg max-w-xs mx-auto">
                  {t('booking.email.description')}
                </p>
                
                <div className="mt-auto flex flex-col items-center gap-6 w-full">
                  <a
                    href="mailto:hello@ekabalance.com"
                    onClick={() => logEvent('booking_page_email_click')}
                    className="w-full"
                  >
                    <Button variant="outline" size="xl" className="w-full h-20 rounded-full border-primary/20 hover:bg-primary/5 text-lg font-black transition-all group-hover:border-primary/40">
                      <MailIcon className="w-6 h-6 mr-3" />
                      {t('booking.email.button')}
                    </Button>
                  </a>
                  
                  <button 
                    onClick={handleCopyEmail}
                    className="group flex flex-col items-center justify-center transition-all"
                  >
                    <div className="px-6 py-3 rounded-full bg-background border border-border/60 shadow-sm flex items-center gap-3 transition-all hover:border-primary/20 hover:shadow-md">
                      <span className="text-foreground font-black text-sm tracking-tight">hello@ekabalance.com</span>
                      {copied ? (
                        <CheckmarkBadge01Icon className="w-5 h-5 text-green-500 animate-in zoom-in" />
                      ) : (
                        <Copy01Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      )}
                    </div>
                    <span className={cn(
                      "text-[10px] font-black uppercase tracking-widest mt-3 transition-all duration-300",
                      copied ? "text-green-600 translate-y-0 opacity-100" : "text-muted-foreground opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                    )}>
                      {copied ? t('common.copied') || 'Copied!' : t('common.clickToCopy') || 'Click to copy'}
                    </span>
                  </button>
                </div>
              </Card>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Enhanced Contact Info */}
      <section className="py-24 bg-muted/40 relative">
        <div className="section-container max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
             <h3 className="text-4xl font-black tracking-tight text-foreground uppercase">
               {t('booking.help.title')}
             </h3>
             <div className="h-1.5 w-24 bg-primary/20 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-card p-10 rounded-[40px] border border-border/60 shadow-lg space-y-10"
            >
              <div className="flex items-center gap-6">
                 <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                   <Location01Icon className="w-8 h-8" />
                 </div>
                 <h4 className="text-2xl font-black tracking-tight">{t('booking.help.contactDirect')}</h4>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-5 p-6 rounded-3xl bg-muted/40 group transition-colors hover:bg-muted/60">
                  <MailIcon className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Email Address</p>
                    <p className="text-lg font-bold">{t('booking.help.email')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 p-6 rounded-3xl bg-muted/40 group transition-colors hover:bg-muted/60">
                  <Location01Icon className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Location</p>
                    <p className="text-lg font-bold">{t('booking.help.address')}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-card p-10 rounded-[40px] border border-border/60 shadow-lg space-y-10"
            >
              <div className="flex items-center gap-6">
                 <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                   <Clock01Icon className="w-8 h-8" />
                 </div>
                 <h4 className="text-2xl font-black tracking-tight">{t('booking.help.hours')}</h4>
              </div>

              <div className="space-y-4">
                 {[
                   { label: 'Weekdays', value: t('booking.help.hours.weekdays'), icon: Calendar01Icon },
                   { label: 'Saturday', value: t('booking.help.hours.saturday'), icon: Calendar01Icon },
                   { label: 'Sunday', value: t('booking.help.hours.sunday'), icon: CheckCircle }
                 ].map((item, i) => (
                   <div key={i} className="flex items-center justify-between p-4 border-b border-border/40 last:border-0">
                      <div className="flex items-center gap-3">
                         <item.icon className="w-4 h-4 text-primary/40" />
                         <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">{item.label}</span>
                      </div>
                      <span className="font-bold">{item.value}</span>
                   </div>
                 ))}
              </div>
              <div className="p-6 rounded-3xl bg-primary/5 border border-primary/10 text-center">
                 <p className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Prioritize Emergency Requests</p>
              </div>
            </motion.div>
          </div>

          <div className="text-center max-w-2xl mx-auto space-y-6">
            <p className="text-muted-foreground text-lg font-medium italic leading-relaxed">
              &quot;{t('booking.help.footer')}&quot;
            </p>
            <div className="flex items-center justify-center gap-1 opacity-20">
               {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-foreground" />)}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Premium Styling */}
      <div className="bg-card py-10">
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
      </div>
    </PageLayout>
  );
}

export default function BookingContent() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-secondary flex items-center justify-center"><SparklesIcon className="w-12 h-12 text-primary animate-pulse" /></div>}>
      <BookingContentInner />
    </Suspense>
  );
}
