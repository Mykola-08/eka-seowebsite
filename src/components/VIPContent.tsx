'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Crown, GlobeIcon, FlashIcon, Home01Icon, Clock01Icon,
  SparklesIcon, Shield01Icon, Tick01Icon, Diamond01Icon, StarIcon, Award01Icon,
  ArrowRight01Icon
} from '@/lib/icons';
import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/PageLayout';
import CTASection from '@/components/CTASection';
import { cn } from '@/lib/utils';

// --- Constants & Data ---

const defaultPlans = [
  {
    tier: 'bronze',
    name: 'vip.plan.bronze',
    description: 'vip.plan.bronze.description',
    price: 'vip.plan.bronze.price',
    sessions: '2',
    popular: false,
    color: 'amber',
    features: ['vip.service.priority.title', 'vip.benefits.transferable', 'vip.benefits.monthly']
  },
  {
    tier: 'silver',
    name: 'vip.plan.silver',
    description: 'vip.plan.silver.description',
    price: 'vip.plan.silver.price',
    sessions: '4',
    popular: true,
    color: 'blue',
    features: ['vip.plan.bronze', 'vip.service.displacements.title', 'vip.benefits.monthlyDesc']
  },
  {
    tier: 'gold',
    name: 'vip.plan.gold',
    description: 'vip.plan.gold.description',
    price: 'vip.plan.gold.price',
    sessions: '8',
    popular: false,
    color: 'primary',
    features: ['vip.plan.silver', 'vip.stats.concierge', 'vip.service.family.title']
  }
];

const defaultLuxuryFeatures = [
  {
    icon: Diamond01Icon,
    title: 'vip.mostExclusive',
    description: 'vip.experienceDescription'
  },
  {
    icon: Award01Icon,
    title: 'vip.voicesOfExcellence',
    description: 'vip.testimonialsSubtitle'
  },
  {
    icon: GlobeIcon,
    title: 'vip.benefits.barcelona',
    description: 'vip.benefits.barcelonaDesc'
  },
  {
    icon: FlashIcon,
    title: 'vip.service.priority.title',
    description: 'vip.service.priority.description'
  }
];

const vipServices = [
  {
    icon: Home01Icon,
    title: 'vip.service.displacements.title',
    description: 'vip.service.displacements.description',
    features: ['vip.benefits.barcelona', 'vip.stats.concierge', 'vip.service.priority.title', 'vip.benefits.transferable']
  },
  {
    icon: Clock01Icon,
    title: 'vip.service.health.title',
    description: 'vip.service.health.description',
    features: ['vip.benefits.monthly', 'vip.benefits.monthlyDesc', 'vip.stats.control', 'vip.benefits.sessions']
  },
  {
    icon: SparklesIcon,
    title: 'vip.service.family.title',
    description: 'vip.service.family.description',
    features: ['vip.stats.family', 'vip.benefits.transferable', 'vip.benefits.transferableDesc', 'vip.service.family.title']
  },
  {
    icon: Shield01Icon,
    title: 'vip.service.priority.title',
    description: 'vip.service.priority.description',
    features: ['vip.stats.concierge', 'vip.service.priority.title', 'vip.service.priority.description', 'vip.stats.exclusivity']
  }
];

const testimonials = [
  {
    name: 'Marina Castellví',
    role: 'vip.testimonials.role1',
    rating: 5,
    comment: 'vip.testimonials.comment1',
    tier: 'GOLD'
  },
  {
    name: 'Dr. Albert Vidal',
    role: 'vip.testimonials.role2',
    rating: 5,
    comment: 'vip.testimonials.comment2',
    tier: 'GOLD'
  },
  {
    name: 'Laura Montserrat',
    role: 'vip.testimonials.role3',
    rating: 5,
    comment: 'vip.testimonials.comment3',
    tier: 'SILVER'
  }
];

const ComparativeTable = () => {
  const { t } = useLanguage();

  const features = [
    { key: 'sessions', label: 'vip.table.sessions', bronze: '2', silver: '4', gold: '8' },
    { key: 'priority', label: 'vip.service.priority.title', bronze: false, silver: true, gold: true },
    { key: 'home', label: 'vip.service.displacements.title', bronze: false, silver: true, gold: true },
    { key: 'family', label: 'vip.service.family.title', bronze: false, silver: false, gold: true },
    { key: 'concierge', label: 'vip.stats.concierge', bronze: false, silver: false, gold: true },
    { key: 'transferable', label: 'vip.benefits.transferable', bronze: true, silver: true, gold: true },
  ];

  const renderValue = (val: string | boolean) => {
    if (typeof val === 'boolean') {
      return val ? <Tick01Icon className="w-5 h-5 text-primary mx-auto" /> : <div className="w-1.5 h-1.5 bg-muted rounded-full mx-auto" />;
    }
    return <span className="text-foreground/80 font-semibold">{val}</span>;
  };

  return (
    <section className="py-32 relative bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="apple-title text-3xl md:text-5xl mb-6">
            {t('vip.table.title') || 'Compare Plans'}
          </h2>
          <p className="apple-subtitle max-w-2xl mx-auto">
             Detailed benefits of each membership tier.
          </p>
        </div>
        
        <div className="overflow-x-auto rounded-[2.5rem] bg-card border border-border shadow-sm">
          <table className="w-full min-w-150 border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="p-8 text-left text-muted-foreground font-semibold uppercase tracking-widest text-[10px] w-1/3 border-b border-border bg-muted/20">Benefits</th>
                <th className="p-8 text-center text-foreground font-bold text-sm tracking-widest border-b border-border bg-muted/20">BRONZE</th>
                <th className="p-8 text-center text-foreground font-bold text-sm tracking-widest border-b border-border bg-muted/20">SILVER</th>
                <th className="p-8 text-center text-primary font-bold text-sm tracking-widest border-b border-border bg-muted/20">GOLD</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature) => (
                <tr key={feature.key} className="group transition-colors">
                  <td className={cn(
                      "p-8 text-foreground/80 font-medium border-b border-border/60 group-last:border-0 transition-colors",
                      "group-hover:bg-muted/30"
                  )}>{t(feature.label)}</td>
                  <td className="p-8 text-center border-b border-border/60 group-last:border-0 group-hover:bg-muted/30 transition-colors">
                    {renderValue(feature.bronze)}
                  </td>
                  <td className="p-8 text-center border-b border-border/60 group-last:border-0 group-hover:bg-muted/30 transition-colors">
                    {renderValue(feature.silver)}
                  </td>
                  <td className="p-8 text-center border-b border-border/60 group-last:border-0 group-hover:bg-muted/30 transition-colors font-bold">
                    {renderValue(feature.gold)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

// --- Components ---

export default function VIPContent() {
  const { t } = useLanguage();

  return (
    <PageLayout
      seo={{
        title: t('vip.seo.title'),
        description: t('vip.seo.description'),
        keywords: t('vip.seo.keywords'),
      }}
    >
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/10 selection:text-primary">
        
        {/* Hero Section */}
        <section className="relative pt-40 pb-32 overflow-hidden bg-background">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(0,113,227,0.05),transparent)] pointer-events-none" />
          
          <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-10">
                <Crown className="w-4 h-4 text-primary" />
                <span className="text-primary font-bold uppercase tracking-[0.2em] text-[10px]">Club VIP EKA</span>
              </div>

              <h1 className="apple-headline text-5xl md:text-8xl mb-10 leading-[0.95]">
                {t('vip.hero.title') || 'Exclusivity Beyond Wellness'}
              </h1>

              <p className="apple-subtitle max-w-3xl mx-auto mb-14">
                {t('vip.hero.subtitle') || 'Join our inner circle for a transformative, high-performance well-being experience in Barcelona.'}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="xl" className="rounded-full px-12 h-18 text-lg font-semibold shadow-none group" asChild>
                    <Link href="#pricing">
                        {t('vip.cta.apply') || 'View memberships'}
                        <ArrowRight01Icon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="xl" className="rounded-full px-10 h-18 text-lg font-medium text-muted-foreground hover:text-foreground" asChild>
                      <Link href="/about-elena">{t('nav.aboutElena')}</Link>
                  </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Luxury Features Grid */}
        <section className="py-32 bg-muted/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {defaultLuxuryFeatures.map((feature, idx) => {
                const Icon = feature.icon || Diamond01Icon;
                return (
                  <div key={idx} className="apple-card p-10 flex flex-col gap-6 group hover:border-primary/20 transition-all duration-500">
                    <div className="w-16 h-16 rounded-3xl bg-background border border-border flex items-center justify-center transition-all duration-500 group-hover:bg-primary/5 group-hover:scale-110">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                        <h3 className="apple-title text-xl mb-3">{t(feature.title)}</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm font-medium">{t(feature.description)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-40 bg-background overflow-hidden relative">
           <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-24 max-w-3xl mx-auto">
                 <Badge variant="outline" className="mb-6 px-4 py-1 rounded-full border-primary/20 text-primary bg-primary/5 uppercase tracking-widest text-[10px] font-bold">
                    Signature Services
                 </Badge>
                 <h2 className="apple-title text-4xl md:text-6xl mb-8 leading-tight">{t('vip.services.title')}</h2>
                 <p className="apple-subtitle">{t('vip.services.subtitle')}</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-10">
                 {vipServices.map((service, idx) => (
                   <div key={idx} className="apple-card p-12 hover:bg-muted/10 transition-all duration-500">
                      <div className="flex flex-col md:flex-row items-start gap-10">
                         <div className="w-20 h-20 rounded-[2.5rem] bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0">
                            <service.icon className="w-10 h-10 text-primary" />
                         </div>
                         <div className="flex-1">
                            <h3 className="apple-title text-2xl mb-4 leading-tight">{t(service.title)}</h3>
                            <p className="text-muted-foreground mb-8 text-lg font-medium leading-relaxed">{t(service.description)}</p>
                            <div className="grid sm:grid-cols-2 gap-4 pt-8 border-t border-border/60">
                               {service.features.map((feat, i) => (
                                 <div key={i} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                                    <span className="text-xs font-bold uppercase tracking-wider text-foreground/70">{t(feat)}</span>
                                 </div>
                               ))}
                            </div>
                         </div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Pricing / Tiers */}
        <section id="pricing" className="py-40 bg-muted/20 relative">
          <div className="max-w-7xl mx-auto px-6">
             <div className="text-center mb-24 max-w-3xl mx-auto">
               <h2 className="apple-title text-4xl md:text-6xl mb-8 leading-tight">{t('vip.pricing.title')}</h2>
               <p className="apple-subtitle">{t('vip.pricing.subtitle')}</p>
             </div>

             <div className="grid lg:grid-cols-3 gap-10 items-stretch">
               {defaultPlans.map((plan) => (
                 <div 
                   key={plan.tier}
                   className={cn(
                       "apple-card p-10 flex flex-col relative transition-all duration-500",
                       plan.popular ? "bg-card border-primary/20 ring-1 ring-primary/10" : "bg-card/50"
                   )}
                 >
                   {plan.popular && (
                     <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-primary/20 z-10">
                       Recommended
                     </div>
                   )}

                   <div className="mb-10">
                      <h3 className="text-sm font-black uppercase tracking-[0.2em] text-muted-foreground mb-1">{t(plan.name)}</h3>
                      <div className="flex items-baseline gap-1 mt-6">
                         <span className="text-5xl md:text-6xl font-bold tracking-tighter text-foreground">{t(plan.price)}</span>
                         <span className="text-muted-foreground font-bold text-lg tracking-tight">/mo</span>
                      </div>
                      <p className="text-muted-foreground mt-8 text-sm font-medium leading-relaxed min-h-12">{t(plan.description)}</p>
                   </div>

                   <div className="space-y-5 mb-12 flex-grow">
                      {plan.features.map((feature: string, i: number) => (
                        <div key={i} className="flex items-start gap-3">
                           <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                <Tick01Icon className="w-3 h-3 text-primary" />
                           </div>
                           <span className="text-foreground/80 text-sm font-semibold">{t(feature)}</span>
                        </div>
                      ))}
                   </div>

                   <Button 
                     size="lg"
                     variant={plan.popular ? 'default' : 'outline'}
                     className={cn(
                         "w-full h-16 rounded-full text-base font-bold shadow-none transition-all",
                         !plan.popular && "border-border hover:bg-muted"
                     )}
                   >
                     {t('vip.cta.select')}
                   </Button>
                 </div>
               ))}
             </div>
          </div>
        </section>

        <ComparativeTable />

        {/* Testimonials */}
        <section className="py-40 bg-background overflow-hidden relative">
           <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="text-center mb-24">
                 <h2 className="apple-title text-4xl md:text-5xl mb-6">{t('vip.testimonials.title')}</h2>
                 <p className="apple-subtitle">{t('vip.voicesOfExcellence')}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                 {testimonials.map((test, i) => (
                    <div key={i} className="apple-card p-10 bg-muted/10 hover:bg-muted/20 transition-all duration-500">
                       <div className="flex gap-1 mb-8">
                          {[...Array(test.rating)].map((_, j) => (
                             <StarIcon key={j} className="w-4 h-4 fill-primary text-primary" />
                          ))}
                       </div>
                       <p className="text-foreground/80 mb-10 italic leading-relaxed text-lg font-medium">"{t(test.comment)}"</p>
                       <div className="flex flex-col">
                          <p className="text-foreground font-bold tracking-tight">{test.name}</p>
                          <p className="text-primary text-[10px] font-black uppercase tracking-[0.1em] mt-1">{t(test.role)}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        <CTASection />

      </div>
    </PageLayout>
  );
}
