'use client';

import { notFound } from 'next/navigation';
import { products, getLocalized } from '@/app/agenyz/products';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowLeft01Icon, ShoppingBag01Icon, Message01Icon, SecurityCheckIcon, MicroscopeIcon, FlashIcon, Leaf01Icon, Tick01Icon } from '@hugeicons/core-free-icons';
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
        <div className="min-h-svh bg-background">
            {/* Sticky Mobile CTA */}
            <div className='fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-md border-t border-border z-50 md:hidden'>
                <a href={getStoreUrl(product.slug)} target='_blank' rel='noopener noreferrer' className='block w-full'>
                    <Button size='lg' className='w-full'>
                        {t('agenyz.buyNow') || 'Buy Now'}
                    </Button>
                </a>
            </div>

            {/* Back Button */}
            <div className='fixed top-24 left-4 md:left-8 z-50'>
                <Link href='/agenyz' className='group inline-flex items-center text-muted-foreground hover:text-foreground transition-colors bg-background/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-border shadow-xs'>
                    <HugeiconsIcon icon={ArrowLeft01Icon} className='w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform'  />
                    <span className='font-semibold text-sm tracking-tight'>{t('common.back') || 'Back'}</span>
                </Link>
            </div>

            {/* Standardized Hero inside PageLayout */}
            <PageLayout
                hero={{
                    badge: `${t(`agenyz.category.${product.category}`) || product.category} Series`,
                    title: translatedName,
                    subtitle: translatedShortDesc,
                    icon: <HugeiconsIcon icon={Leaf01Icon} className="w-5 h-5 text-primary"  />
                }}
                className="bg-background pt-24"
                mainClassName="bg-background"
            >
                <div className="bg-background w-full">
                    {/* Immersive Full-Width Product Banner Region (Removes squished aspect square) */}
                    <div className="w-full border-y border-border bg-muted/10 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center mask-[linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-50" />
                        <div className="max-w-7xl mx-auto py-16 px-4 md:px-8 relative z-10">
                            <motion.div 
                               initial={{ opacity: 0, y: 20 }}
                               animate={{ opacity: 1, y: 0 }}
                               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                               className="w-full flex justify-center"
                            >
                                <div className="relative w-full aspect-square md:h-125 md:w-125 rounded-3xl shadow-sm border border-border bg-card/50 overflow-hidden">
                                    <Image 
                                        src={imageUrl} 
                                        alt={translatedName}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 500px"
                                        className="object-contain p-4"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
                        <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center max-w-2xl mx-auto">
                            <a href={getStoreUrl(product.slug)} target='_blank' rel='noopener noreferrer' className="w-full">
                                <Button size='lg' className="w-full px-8 rounded-full shadow-sm text-base h-12">
                                    <HugeiconsIcon icon={ShoppingBag01Icon} className='mr-2 w-5 h-5'  />
                                    {t('agenyz.buyNow') || 'Order Now'}
                                </Button>
                            </a>
                            <Link href='/booking' className="w-full">
                                <Button size='lg' variant='outline' className="w-full px-8 rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.05)] text-base h-12 bg-background">
                                    <HugeiconsIcon icon={Message01Icon} className='mr-2 w-5 h-5'  />
                                    {t('common.askQuestions') || 'Consult Expert'}
                                </Button>
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                            {/* Main Description */}
                            <div className="lg:col-span-2 space-y-8">
                                <Card className="shadow-none border border-border bg-card">
                                    <CardHeader className="pb-4">
                                        <CardTitle className="text-2xl font-bold flex items-center tracking-tight">
                                            <HugeiconsIcon icon={Leaf01Icon} className="w-6 h-6 mr-3 text-primary"  />
                                            {t('agenyz.aboutProduct') || 'About the Formula'}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-lg text-muted-foreground leading-relaxed">
                                            {translatedDesc}
                                        </p>
                                    </CardContent>
                                </Card>

                                <Accordion type="single" collapsible defaultValue="ingredients" className="w-full bg-card rounded-2xl border border-border shadow-none">
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
                                                    <HugeiconsIcon icon={MicroscopeIcon} className="w-6 h-6 text-primary mt-0.5 shrink-0"  />
                                                    <p className="font-medium text-foreground leading-relaxed">{translatedUsage}</p>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    )}
                                </Accordion>
                            </div>

                            {/* Benefits Sidebar */}
                            <div className="lg:col-span-1 space-y-8">
                                {translatedBenefits.length > 0 && (
                                    <Card className="bg-primary/10 border-primary/20 shadow-none overflow-hidden relative">
                                        <CardHeader className="pb-4">
                                            <CardTitle className="text-xl font-bold flex items-center gap-2 text-primary relative z-10">
                                                <HugeiconsIcon icon={FlashIcon} className="w-5 h-5"  />
                                                {t('agenyz.benefits') || 'Key Benefits'}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="relative z-10">
                                            <ul className="space-y-4">
                                                {translatedBenefits.map((b, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <HugeiconsIcon icon={Tick01Icon} className="w-5 h-5 text-primary shrink-0 mt-0.5"  />
                                                        <span className="text-foreground font-medium text-sm leading-snug">{b}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                )}

                                <div className='bg-card rounded-2xl p-6 border border-border grid grid-cols-2 gap-4 shadow-none'>
                                    <div className='text-center p-2'>
                                        <div className='mx-auto w-10 h-10 bg-muted rounded-full flex items-center justify-center mb-3 text-muted-foreground'>
                                            <HugeiconsIcon icon={SecurityCheckIcon} className='w-5 h-5'  />
                                        </div>
                                        <p className='text-xs font-bold text-foreground uppercase tracking-widest'>{t('agenyz.label.quality') || 'Quality'}</p>
                                    </div>
                                    <div className='text-center p-2'>
                                        <div className='mx-auto w-10 h-10 bg-muted rounded-full flex items-center justify-center mb-3 text-muted-foreground'>
                                            <HugeiconsIcon icon={Leaf01Icon} className='w-5 h-5'  />
                                        </div>
                                        <p className='text-xs font-bold text-foreground uppercase tracking-widest'>{t('agenyz.label.natural') || 'Natural'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageLayout>
        </div>
    );
}
