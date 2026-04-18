'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Leaf, ShieldCheck, Zap } from '@/lib/icons';

const WA_NUMBER = '34658867133';

export default function AgenyzContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageLayout
        seo={{
          title: t('agenyz.seo.title'),
          description: t('agenyz.seo.description'),
          keywords: t('agenyz.seo.keywords'),
        }}
      >
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-48 overflow-hidden bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                {t('agenyz.brand.badge') || 'Agenyz · Bio Innovation'}
              </div>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tighter text-foreground mb-8">
                {t('agenyz.hero.title.line1') || 'Cellular health.'}
                <br />
                <span className="text-muted-foreground">{t('agenyz.hero.title.line2') || 'Designed for you.'}</span>
              </h1>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="rounded-full px-8 h-14 text-base shadow-none">
                  <a href="https://agenyz.es" target="_blank" rel="noopener noreferrer">
                    {t('agenyz.hero.visitStore') || 'Visit agenyz.es'}
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 text-base shadow-none bg-transparent">
                  <Link href="#consultation">
                    {t('agenyz.consultation.cta') || 'Free Consultation'}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Value Props */}
        <section className="py-16 sm:py-20 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Leaf,
                  title: t('agenyz.value.vegan.title') || '100% Vegan',
                  desc: t('agenyz.value.vegan.desc') || 'Plant-based, ethically sourced ingredients in every formula.',
                },
                {
                  icon: Zap,
                  title: t('agenyz.value.absorption.title') || 'XBi-A Absorption',
                  desc:
                    t('agenyz.value.absorption.desc') ||
                    'Patented complex that boosts bioavailability by up to 60%.',
                },
                {
                  icon: ShieldCheck,
                  title: t('agenyz.value.science.title') || 'Clinically Backed',
                  desc:
                    t('agenyz.value.science.desc') ||
                    'Formulated with microencapsulation and research-led dosages.',
                },
              ].map((item, i) => (
                <Card key={i} className="bg-card border-border">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-6">
                      <item.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight mb-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Free Consultation CTA */}
        <section id="consultation" className="py-16 sm:py-20 lg:py-24 bg-background">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-primary/5 border border-primary/10 rounded-[2.5rem] p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-10 text-center md:text-left relative overflow-hidden">
               <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                  <Sparkles className="w-64 h-64 text-primary" />
               </div>
               
              <div className="flex-1 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
                  <Sparkles className="w-3.5 h-3.5" />
                  {t('agenyz.consultation.badge')}
                </div>
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
                  {t('agenyz.consultation.title')}
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  {t('agenyz.consultation.desc')}
                </p>
              </div>
              <div className="shrink-0 relative z-10">
                <Button asChild size="lg" className="rounded-full px-10 h-16 text-lg shadow-none">
                  <a 
                    href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(t('agenyz.consultation.cta'))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('agenyz.consultation.cta')}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Agenyz Brand */}
        <section className="py-16 sm:py-20 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-4 text-foreground">
                {t('agenyz.why.title') || 'Why Agenyz?'}
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('agenyz.why.subtitle') || 'Science-backed benefits for your body and mind.'}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-card border-border transition-all hover:border-foreground/20">
                <CardContent className="p-8 md:p-10 flex flex-col justify-center h-full">
                  <div className="mb-6 flex justify-start">
                    <Badge variant="secondary" className="rounded-full px-4 py-1 text-sm font-medium">
                      {t('agenyz.stats.clients') || '200k+ Clients'}
                    </Badge>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4 text-foreground">
                    {t('agenyz.brand.eco.title') || 'Eco-Community'}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg sm:text-xl">
                    {t('agenyz.brand.eco.desc') || 'We are creating a community filled with understanding, respect, gratitude, and love for oneself and our environment.'}
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border transition-all hover:border-foreground/20">
                <CardContent className="p-8 md:p-10 flex flex-col justify-center h-full">
                  <div className="mb-6 flex justify-start">
                    <Badge variant="secondary" className="rounded-full px-4 py-1 text-sm font-medium">
                      {t('agenyz.stats.cases') || '13 Clinical Studies'}
                    </Badge>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4 text-foreground">
                    {t('agenyz.brand.bio.title') || 'Biohacking'}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg sm:text-xl">
                    {t('agenyz.brand.bio.desc') || 'Innovative products to improve physical form, increase energy levels and slow down the aging process.'}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* General Product Info */}
        <section className="py-16 sm:py-20 lg:py-24 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-8 text-balance text-foreground">
              {t('agenyz.general.title') || 'Advanced Nutrition & Biohacking'}
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground tracking-tight font-medium mb-12">
              {t('agenyz.general.subtitle') || 'A complete range of supplements designed to optimize your body and mind.'}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-16">
              <div className="bg-background rounded-3xl p-8 border border-border">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {t('agenyz.general.desc1') || 'Agenyz products stand out for their innovative approach to health. Using premium natural ingredients and the patented XBi-A absorption technology, each formula is designed for maximum bioavailability and effectiveness at the cellular level.'}
                </p>
              </div>
              <div className="bg-background rounded-3xl p-8 border border-border">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {t('agenyz.general.desc2') || 'From immune support and sustained energy to cognitive clarity and cellular regeneration, discover how the Agenyz product ecosystem can elevate your quality of life.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-6 text-foreground">
              {t('agenyz.brand.cta') || 'Join the Community'}
            </h2>
            <div className="flex flex-col items-center gap-4">
              <Button asChild size="lg" className="rounded-full px-12 h-16 text-lg shadow-none">
                <a href="https://agenyz.es" target="_blank" rel="noopener noreferrer">
                  {t('agenyz.cta.visitStore') || 'Go to Shop'}
                </a>
              </Button>
              <p className="text-muted-foreground text-sm mt-2 max-w-sm text-center">
                {t('agenyz.redirect.notice') || 'You will be redirected to our partner website.'}
              </p>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
}
