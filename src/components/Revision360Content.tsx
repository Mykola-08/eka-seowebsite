'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Section, PageHero, FeatureGrid, CTABlock, type Feature } from '@/components/layout';
import SEOUpdater from '@/components/SEOUpdater';
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

  const variants: Feature[] = [
    {
      icon: <RotateCcw className="h-6 w-6" />,
      title: t('revision360.variants.reset.title'),
      description: t('revision360.variants.reset.description'),
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: t('revision360.variants.mapping.title'),
      description: t('revision360.variants.mapping.description'),
    },
    {
      icon: <Compass className="h-6 w-6" />,
      title: t('revision360.variants.alignment.title'),
      description: t('revision360.variants.alignment.description'),
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: t('revision360.variants.integral.title'),
      description: t('revision360.variants.integral.description'),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOUpdater
        titleKey="revision360.seo.title"
        descriptionKey="revision360.seo.description"
        keywordsKey="revision360.seo.keywords"
      />

      {/* Hero */}
      <Section spacing="loose" className="pt-32">
        <PageHero
          eyebrow={t('revision360.hero.badge')}
          title={t('revision360.hero.title')}
          subtitle={t('revision360.hero.subtitle')}
          actions={
            <>
              <Button asChild size="lg" className="rounded-full px-8">
                <a href={bookHref} target="_blank" rel="noopener noreferrer">
                  {t('revision360.hero.cta.book')}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8">
                <a href="#process">{t('revision360.hero.cta.learn')}</a>
              </Button>
            </>
          }
        />
        <blockquote className="mx-auto mt-16 max-w-2xl text-center text-sm font-light italic leading-relaxed text-foreground/60">
          &ldquo;{t('revision360.hero.quote')}&rdquo;
        </blockquote>
      </Section>

      {/* Why 360 — four layers */}
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

      {/* Process */}
      <Section id="process">
        <PageHero
          eyebrow={t('revision360.service.badge')}
          title={t('revision360.service.title')}
          subtitle={t('revision360.service.subtitle')}
        />
      </Section>

      {/* Variants */}
      <Section tone="muted">
        <PageHero
          eyebrow={t('revision360.variants.badge')}
          title={t('revision360.variants.title')}
          subtitle={t('revision360.variants.subtitle')}
        />
        <div className="mt-16">
          <FeatureGrid features={variants} columns={2} />
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

      {/* Final invitation */}
      <Section spacing="loose" bleed>
        <CTABlock
          tone="bold"
          eyebrow="EKA Balance · 360° Integral Method"
          title={t('revision360.final.title')}
          subtitle={t('revision360.final.subtitle')}
          actions={
            <>
              <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
                <a href={bookHref} target="_blank" rel="noopener noreferrer">
                  {t('common.bookNow')}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a href={discoveryHref} target="_blank" rel="noopener noreferrer">
                  {t('cta.scheduleDiscoveryCall')}
                </a>
              </Button>
            </>
          }
        />
      </Section>
    </div>
  );
}
