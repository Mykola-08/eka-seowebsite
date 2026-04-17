'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';
import SEOUpdater from '@/components/SEOUpdater';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { products, getLocalized } from '@/app/agenyz/products';
import { Sparkles, Leaf, ShieldCheck } from '@/lib/icons';

export default function AgenyzContent() {
  const { language, t } = useLanguage();

  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <>
      <SEOUpdater
        titleKey="agenyz.seo.title"
        descriptionKey="agenyz.seo.description"
        keywordsKey="agenyz.seo.keywords"
      />

      <PageLayout
        hero={{
          title: t('agenyz.hero.title') || 'Agenyz Â· Cellular Nutrition',
          subtitle:
            t('agenyz.hero.subtitle') ||
            'Bio-available supplements designed to restore balance, defy aging, and fuel your vitality at the DNA level.',
          badge: t('agenyz.hero.badge') || 'Our Partner',
        }}
      >
        {/* Value props */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Leaf,
                  title: t('agenyz.value.vegan.title') || '100% Vegan',
                  desc:
                    t('agenyz.value.vegan.desc') ||
                    'Plant-based, ethically sourced ingredients in every formula.',
                },
                {
                  icon: Sparkles,
                  title: t('agenyz.value.absorption.title') || 'XBi-AÂ® Absorption',
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

        {/* Catalogue */}
        <section className="py-16 sm:py-20 lg:py-24 bg-card">
          <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-6 text-balance text-foreground">
                {t('agenyz.catalog.title') || 'The Catalogue'}
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto tracking-tight font-medium">
                {t('agenyz.catalog.subtitle') ||
                  'Explore the full range of cellular nutrition products.'}
              </p>
            </div>

            {categories.map((category) => {
              const items = products.filter((p) => p.category === category);
              return (
                <div key={category} className="mb-16 last:mb-0">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
                      {category}
                    </h3>
                    <Badge variant="secondary" className="rounded-full">
                      {items.length}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {items.map((product) => {
                      const name = getLocalized(product.name, language);
                      const desc = getLocalized(
                        product.shortDescription || product.description,
                        language
                      );
                      const href = `/agenyz/${product.id}`;
                      return (
                        <Link key={product.id} href={href} className="group">
                          <Card className="flex flex-col h-full overflow-hidden transition-colors hover:border-foreground/25 border-border">
                            <div className="relative aspect-square bg-muted overflow-hidden">
                              {product.image && (
                                <Image
                                  src={product.image}
                                  alt={name}
                                  fill
                                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                  className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                                />
                              )}
                            </div>
                            <CardContent className="p-6 flex-1 flex flex-col">
                              <h4 className="text-lg font-semibold tracking-tight text-foreground mb-2 line-clamp-2">
                                {name}
                              </h4>
                              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                                {desc}
                              </p>
                              {product.price && (
                                <p className="mt-4 text-base font-semibold text-foreground">
                                  {product.price}
                                </p>
                              )}
                            </CardContent>
                          </Card>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-6 text-foreground">
              {t('agenyz.cta.title') || 'Shop the full store on Agenyz'}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              {t('agenyz.cta.subtitle') ||
                'Browse the complete range, read ingredient details, and place orders through the official Agenyz storefront.'}
            </p>
            <Button asChild size="lg" className="rounded-full h-12 px-8">
              <a href="https://agenyz.es" target="_blank" rel="noopener noreferrer">
                {t('agenyz.cta.button') || 'Visit agenyz.es'}
              </a>
            </Button>
          </div>
        </section>
      </PageLayout>
    </>
  );
}
