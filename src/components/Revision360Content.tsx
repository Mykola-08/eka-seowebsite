'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Section, PageHero, FeatureGrid, CTABlock, type Feature } from '@/components/layout';
import FAQ from '@/components/FAQ';

import {
  Activity,
  Brain,
  Compass,
  Heart,
  Layers,
  MapPin,
  Moon,
  RotateCcw,
  Shield,
  Smile,
  Sparkles,
  Wind,
  Zap,
  CheckCircle,
  ArrowRight,
  AlertCircle
} from '@/lib/icons';

const WA_NUMBER = '34658867133';

export default function Revision360Content() {
  const { t } = useLanguage();

  const bookHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(t('revision360.whatsapp.booking'))}`;
  const discoveryHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    "Hola, m'agradaria programar una trucada de descobriment."
  )}`;

  const layers: Feature[] = [
    {
      icon: <Activity className="h-6 w-6" />,
      title: t('revision360.why360.layers.physical'),
      description: t('revision360.why360.physical.desc'),
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: t('revision360.why360.layers.structural'),
      description: t('revision360.why360.structural.desc'),
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: t('revision360.why360.layers.emotional'),
      description: t('revision360.why360.emotional.desc'),
    },
    {
      icon: <Wind className="h-6 w-6" />,
      title: t('revision360.why360.layers.energetic'),
      description: t('revision360.why360.energetic.desc'),
    },
  ];

  const benefits: Feature[] = [
    { icon: <Brain className="h-5 w-5" />, title: t('revision360.benefits.benefit1.title'), description: t('revision360.benefits.benefit1.description') },
    { icon: <Heart className="h-5 w-5" />, title: t('revision360.benefits.benefit2.title'), description: t('revision360.benefits.benefit2.description') },
    { icon: <Zap className="h-5 w-5" />, title: t('revision360.benefits.benefit3.title'), description: t('revision360.benefits.benefit3.description') },
    { icon: <Shield className="h-5 w-5" />, title: t('revision360.benefits.benefit4.title'), description: t('revision360.benefits.benefit4.description') },
    { icon: <Moon className="h-5 w-5" />, title: t('revision360.benefits.benefit5.title'), description: t('revision360.benefits.benefit5.description') },
    { icon: <Smile className="h-5 w-5" />, title: t('revision360.benefits.benefit6.title'), description: t('revision360.benefits.benefit6.description') },
    { icon: <Activity className="h-5 w-5" />, title: t('revision360.benefits.benefit7.title'), description: t('revision360.benefits.benefit7.description') },
    { icon: <Compass className="h-5 w-5" />, title: t('revision360.benefits.benefit8.title'), description: t('revision360.benefits.benefit8.description') },
    { icon: <Sparkles className="h-5 w-5" />, title: t('revision360.benefits.benefit9.title'), description: t('revision360.benefits.benefit9.description') },
  ];

  const variantKeys = [
    { key: 'reset', icon: <RotateCcw className="h-6 w-6" /> },
    { key: 'mapping', icon: <MapPin className="h-6 w-6" /> },
    { key: 'alignment', icon: <Compass className="h-6 w-6" /> },
    { key: 'integral', icon: <Sparkles className="h-6 w-6" /> },
  ];

  const faqItems = [
    {
      id: 'faq-1',
      question: t('revision360.faq.q1'),
      answer: t('revision360.faq.a1')
    },
    {
      id: 'faq-2',
      question: t('revision360.faq.q2'),
      answer: t('revision360.faq.a2')
    },
    {
      id: 'faq-3',
      question: t('revision360.faq.q3'),
      answer: t('revision360.faq.a3')
    }
  ];

  const _t = (key: string) => {
    const val = t(key);
    return val === key ? '' : val;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <Section spacing="loose" className="pt-32">
        <PageHero
          eyebrow={t('revision360.hero.badge')}
          title={t('revision360.hero.title')}
          subtitle={t('revision360.hero.subtitle')}
          actions={
            <>
              <Button asChild size="lg" className="px-8 shadow-none font-medium">
                <a href={bookHref} target="_blank" rel="noopener noreferrer">
                  {t('revision360.hero.cta.book')}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8 shadow-none font-medium">
                <a href="#process">{t('revision360.hero.cta.learn')}</a>
              </Button>
            </>
          }
        />
        <blockquote className="mx-auto mt-16 max-w-2xl text-center text-sm font-light italic leading-relaxed text-foreground/60">
          &ldquo;{t('revision360.hero.quote')}&rdquo;
        </blockquote>
      </Section>

      {/* Why 360 */}
      <Section tone="muted">
        <PageHero
          eyebrow={t('revision360.why360.badge')}
          title={t('revision360.why360.title')}
          subtitle={t('revision360.why360.subtitle')}
        />
        <div className="mt-16">
          <FeatureGrid features={layers} columns={2} />
        </div>
      </Section>

      {/* Process Timeline */}
      <Section id="process">
        <PageHero
          eyebrow={t('revision360.service.badge')}
          title={t('revision360.service.title')}
          subtitle={t('revision360.service.subtitle')}
        />
        <div className="mt-16 max-w-4xl mx-auto space-y-12">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex flex-col md:flex-row gap-6 md:gap-12">
              <div className="md:w-1/3 flex-shrink-0">
                <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                  {t('revision360.service.step')} {step}
                </div>
                <h3 className="text-2xl font-medium text-foreground tracking-tight">
                  {t(`revision360.service.step${step}.title`)}
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {t(`revision360.service.step${step}.description`)}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[1, 2, 3, 4].map((idx) => {
                    const detail = _t(`revision360.service.step${step}.details.${idx}`);
                    if (!detail || detail.includes('revision360.service')) return null;
                    return (
                      <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                        <div className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-primary/60" />
                        <span>{detail}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center max-w-2xl mx-auto">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">{t('revision360.service.total.title')}</p>
            <p className="text-3xl font-medium mt-2 text-foreground">{t('revision360.service.total.duration')}</p>
            <p className="text-muted-foreground mt-3 leading-relaxed">{t('revision360.service.total.note')}</p>
        </div>
      </Section>

      {/* Variants (Rich Service Cards) */}
      <Section tone="muted">
        <PageHero
          eyebrow={t('revision360.variants.badge')}
          title={t('revision360.variants.title')}
          subtitle={t('revision360.variants.subtitle')}
        />
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {variantKeys.map((variant) => (
            <div key={variant.key} className="bg-background rounded-[2rem] p-8 sm:p-10 border border-border/50 flex flex-col h-full shadow-none hover:border-primary/20 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                 <div className="p-3 rounded-xl bg-primary/10 text-primary">
                   {variant.icon}
                 </div>
                 <div>
                   <h3 className="text-2xl font-semibold tracking-tight text-foreground">{t(`revision360.variants.${variant.key}.title`)}</h3>
                   <p className="text-primary font-medium">{t(`revision360.variants.${variant.key}.duration`)}</p>
                 </div>
              </div>
              
              <p className="text-lg font-medium text-foreground mb-2">{t(`revision360.variants.${variant.key}.subtitle`)}</p>
              <p className="text-muted-foreground mb-8 text-pretty leading-relaxed flex-grow">{t(`revision360.variants.${variant.key}.description`)}</p>
              
              <div className="space-y-6 pt-6 border-t border-border/40 mt-auto">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">{t('revision360.variants.idealFor')}</h4>
                  <ul className="space-y-3">
                    {[1, 2, 3, 4].map((idx) => {
                      const item = _t(`revision360.variants.${variant.key}.idealFor.${idx}`);
                      if (!item || item.includes('revision360.')) return null;
                      return (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <CheckCircle className="h-5 w-5 text-primary/70 shrink-0" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">{t('revision360.variants.includes')}</h4>
                  <ul className="space-y-3">
                    {[1, 2, 3, 4].map((idx) => {
                      const item = _t(`revision360.variants.${variant.key}.includes.${idx}`);
                      if (!item || item.includes('revision360.')) return null;
                      return (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <ArrowRight className="h-5 w-5 text-foreground/40 shrink-0" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section>
        <PageHero
          eyebrow={t('revision360.benefits.badge')}
          title={t('revision360.benefits.title')}
          subtitle={t('revision360.benefits.subtitle')}
        />
        <div className="mt-16">
          <FeatureGrid features={benefits} columns={3} />
        </div>
        <blockquote className="mx-auto mt-20 max-w-3xl text-center text-xl font-light italic leading-relaxed text-foreground/70 md:text-2xl">
          &ldquo;{t('revision360.benefits.philosophy')}&rdquo;
        </blockquote>
      </Section>

      {/* FAQ */}
      <Section tone="muted">
         <FAQ 
           items={faqItems} 
           title={t('revision360.faq.title')} 
           subtitle={_t('revision360.faq.subtitle')}
         />
      </Section>

      {/* Disclaimer */}
      <Section className="py-0">
        <div className="max-w-3xl mx-auto p-8 rounded-[2rem] bg-amber-50/50 border border-amber-100 flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
          <p className="text-amber-900/80 text-sm leading-relaxed font-medium">
            {t('revision360.final.disclaimer')}
          </p>
        </div>
      </Section>

      {/* Final invitation */}
      <Section spacing="loose" bleed>
        <CTABlock
          tone="soft"
          eyebrow="EKA Balance · 360° Integral Method"
          title={t('revision360.final.title')}
          subtitle={t('revision360.final.subtitle')}
          actions={
            <>
              <Button asChild size="lg" className="px-8 shadow-none font-medium">
                <a href={bookHref} target="_blank" rel="noopener noreferrer">
                  {t('common.bookNow') || t('revision360.hero.cta.book')}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="px-8 shadow-none font-medium bg-transparent"
              >
                <a href={discoveryHref} target="_blank" rel="noopener noreferrer">
                  {t('cta.scheduleDiscoveryCall') || "Programar trucada"}
                </a>
              </Button>
            </>
          }
        />
      </Section>
    </div>
  );
}
