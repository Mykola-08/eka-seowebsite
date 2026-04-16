'use client';

import { notFound } from 'next/navigation';
import { products, getLocalized } from '@/app/agenyz/products';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Check, ShoppingBag, MessageCircle, Leaf, Clock, ShieldCheck, Zap, Microscope } from '@/lib/icons';
import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/Accordion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function AgenyzProductContent({ id }: { id: string }) {
    const { language, t } = useLanguage();

    const product = products.find(p => p.id === id || p.id.toLowerCase() === id.toLowerCase());

    if (!product) {
        return notFound();
    }

    const translatedName = getLocalized(product.name, language);
    const translatedDesc = getLocalized(product.longDescription || product.description, language);
    const translatedShortDesc = getLocalized(product.shortDescription || product.description, language);
    const translatedUsage = getLocalized(product.usage, language);

    const rawBenefits = product.benefits && product.benefits.length > 0 ? product.benefits : (product.features || []);
    const translatedBenefits = rawBenefits.map(b => getLocalized(b, language));
    const translatedIngredients = (product.ingredients || []).map(i => getLocalized(i, language));

    const imageUrl = product.image || 'https://images.pexels.com/photos/3618606/pexels-photo-3618606.jpeg?auto=compress&cs=tinysrgb&w=1200';

    const getStoreUrl = (slug?: string) => {
        if (!slug) return 'https://agenyz.es';
        return `https://agenyz.es/products/${slug}`;
    };

    return (
        <PageLayout>
            {/* Sticky Mobile CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-md border-t border-border z-50 md:hidden">
                <Button asChild size="lg" className="w-full rounded-full h-14 font-semibold">
                    <a href={getStoreUrl(product.slug)} target="_blank" rel="noopener noreferrer">
                        {t('agenyz.buyNow') || 'Buy Now'}
                    </a>
                </Button>
            </div>

            {/* Back Button */}
            <div className="absolute top-24 left-4 md:left-8 z-20">
                <Button asChild variant="outline" className="rounded-full backdrop-blur-md bg-card/80 border-border">
                    <Link href="/agenyz" className="group">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-semibold text-sm tracking-tight">{t('common.back') || 'Back'}</span>
                    </Link>
                </Button>
            </div>

            {/* HERO SECTION */}
            <section className="pt-32 pb-16 lg:pt-48 lg:pb-32 relative overflow-hidden bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                        {/* Product Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="relative order-1 lg:order-2 flex justify-center"
                        >
                            <div className="relative w-full max-w-lg aspect-square rounded-3xl border border-border bg-card/50 overflow-hidden">
                                <Image
                                    src={imageUrl}
                                    alt={translatedName}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 500px"
                                    className="object-contain p-4"
                                />
                            </div>
                        </motion.div>

                        {/* Text Content */}
                        <div className="order-2 lg:order-1 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center px-4 py-1.5 bg-muted border border-border text-muted-foreground rounded-full text-[10px] font-bold uppercase tracking-[0.2em]"
                            >
                                {t('agenyz.label.bioactive') || 'Bio-Active'}
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground tracking-tighter leading-[1.05]"
                            >
                                {translatedName}
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-muted-foreground leading-relaxed max-w-xl"
                            >
                                {translatedShortDesc}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <Button asChild size="xl" className="sm:w-auto px-10 py-7 rounded-full font-bold">
                                    <a href={getStoreUrl(product.slug)} target="_blank" rel="noopener noreferrer">
                                        <ShoppingBag className="mr-3 w-6 h-6" />
                                        {t('agenyz.buyNow') || 'Order Now'}
                                    </a>
                                </Button>
                                <Button asChild size="xl" variant="outline" className="sm:w-auto px-10 py-7 rounded-full font-bold">
                                    <Link href="/booking">
                                        <MessageCircle className="mr-3 w-6 h-6" />
                                        {t('common.askQuestions') || 'Consult Expert'}
                                    </Link>
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DETAILS GRID */}
            <section className="py-20 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Left Column (2/3): Description + Accordion */}
                        <div className="lg:col-span-2 space-y-8">
                            <Card className="rounded-3xl border border-border shadow-none">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-light text-foreground">
                                        {t('agenyz.aboutProduct') || 'About the Formula'}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground font-light leading-relaxed">
                                        {translatedDesc}
                                    </p>
                                </CardContent>
                            </Card>

                            <Accordion type="single" collapsible defaultValue="ingredients" className="w-full bg-card rounded-3xl border border-border shadow-none">
                                {translatedIngredients.length > 0 && (
                                    <AccordionItem value="ingredients" className="border-b border-border px-6">
                                        <AccordionTrigger className="text-lg font-bold hover:no-underline py-5">
                                            {t('agenyz.ingredients') || 'Active Ingredients'}
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-6">
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                                                {translatedIngredients.map((ing, i) => (
                                                    <li key={i} className="flex items-center gap-3 bg-muted/40 p-3.5 rounded-xl border border-border/50">
                                                        <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                                                        <span className="font-medium text-foreground tracking-tight text-sm leading-tight">{ing}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                )}
                                {translatedUsage && (
                                    <AccordionItem value="usage" className="border-0 px-6">
                                        <AccordionTrigger className="text-lg font-bold hover:no-underline py-5">
                                            {t('agenyz.usage') || 'How to Use'}
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-6">
                                            <div className="bg-primary/5 border border-primary/20 p-5 rounded-xl flex items-start gap-4">
                                                <Clock className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                                                <p className="font-medium text-foreground leading-relaxed">{translatedUsage}</p>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                )}
                            </Accordion>
                        </div>

                        {/* Right Column (1/3): Benefits + Trust Badges */}
                        <div className="lg:col-span-1 space-y-8">
                            {translatedBenefits.length > 0 && (
                                <Card className="bg-primary/10 border-primary/20 shadow-none overflow-hidden relative rounded-3xl">
                                    <CardHeader className="pb-4">
                                        <CardTitle className="text-xl font-bold flex items-center gap-2 text-primary relative z-10">
                                            <Zap className="w-5 h-5" />
                                            {t('agenyz.benefits') || 'Key Benefits'}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="relative z-10">
                                        <ul className="space-y-4">
                                            {translatedBenefits.map((b, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                                    <span className="text-foreground font-medium text-sm leading-snug">{b}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            )}

                            <div className="bg-card rounded-3xl p-6 border border-border grid grid-cols-2 gap-4 shadow-none">
                                <div className="text-center p-2">
                                    <div className="mx-auto w-10 h-10 bg-muted rounded-full flex items-center justify-center mb-3 text-muted-foreground">
                                        <ShieldCheck className="w-5 h-5" />
                                    </div>
                                    <p className="text-xs font-bold text-foreground uppercase tracking-widest">{t('agenyz.label.quality') || 'Quality'}</p>
                                </div>
                                <div className="text-center p-2">
                                    <div className="mx-auto w-10 h-10 bg-muted rounded-full flex items-center justify-center mb-3 text-muted-foreground">
                                        <Leaf className="w-5 h-5" />
                                    </div>
                                    <p className="text-xs font-bold text-foreground uppercase tracking-widest">{t('agenyz.label.natural') || 'Natural'}</p>
                                </div>
                                <div className="text-center p-2">
                                    <div className="mx-auto w-10 h-10 bg-muted rounded-full flex items-center justify-center mb-3 text-muted-foreground">
                                        <Microscope className="w-5 h-5" />
                                    </div>
                                    <p className="text-xs font-bold text-foreground uppercase tracking-widest">{t('agenyz.label.labTested') || 'Lab Tested'}</p>
                                </div>
                                <div className="text-center p-2">
                                    <div className="mx-auto w-10 h-10 bg-muted rounded-full flex items-center justify-center mb-3 text-muted-foreground">
                                        <Zap className="w-5 h-5" />
                                    </div>
                                    <p className="text-xs font-bold text-foreground uppercase tracking-widest">{t('agenyz.label.highBioavailability') || 'Bioavailable'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
}
