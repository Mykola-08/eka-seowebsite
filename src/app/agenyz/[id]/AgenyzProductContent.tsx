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
        <div className="min-h-svh bg-background">
            {/* Sticky Mobile CTA */}
            <div className='fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-md border-t border-border z-50 md:hidden'>
                <a href={getStoreUrl(product.slug)} target='_blank' rel='noopener noreferrer' className='block w-full'>
                    <Button size='lg' className="w-full rounded-full h-14 font-semibold">
                        {t('agenyz.buyNow') || 'Buy Now'}
                    </Button>
                </a>
            </div>

            {/* Back Button */}
            <div className='absolute top-24 left-4 md:left-8 z-20'>
                <Link href='/agenyz' className='group inline-flex items-center text-gray-500 hover:text-black transition-colors bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-gray-100'>
                    <ArrowLeft className='w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform' />
                    <span className='font-semibold text-sm tracking-tight'>{t('common.back') || 'Back'}</span>
                </Link>
            </div>

            {/* HERO SECTION */}
            <section className='pt-32 pb-16 lg:pt-48 lg:pb-32 relative overflow-hidden bg-white'>
                <div className='absolute inset-0 bg-[url("/grid.svg")] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-50' />

                <div className='max-w-7xl mx-auto px-4 sm:px-8 relative z-10'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center'>

                        {/* Product Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className='relative order-1 lg:order-2 flex justify-center'
                        >
                            <div className='relative w-full max-w-lg aspect-square group'>
                                <div className='absolute inset-0 bg-primary-100 rounded-full blur-[100px] opacity-40 group-hover:opacity-60 transition-opacity duration-1000' />
                                <img
                                    src={imageUrl}
                                    alt={translatedName}
                                    className='relative w-full h-full object-contain drop-0_20px_50px_rgba(0,0,0,0.15)] z-10 hover:scale-105 transition-transform duration-700 ease-out'
                                />
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className='absolute -bottom-4 right-0 md:bottom-12 md:-right-4 bg-white/90 backdrop-blur-xl border border-white/20 p-5 rounded-[2rem] z-20 flex items-center gap-4'
                                >
                                    <div className='w-12 h-12 flex items-center justify-center bg-primary-50 rounded-2xl text-primary-600'>
                                        <Leaf className='w-6 h-6' />
                                    </div>
                                    <div>
                                        <p className='text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-0.5'>{t('agenyz.label.type') || 'Type'}</p>
                                        <p className='text-sm font-bold text-gray-900 tracking-tight'>{t('agenyz.label.bioactive') || 'Bio-Active'}</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Text Content */}
                        <div className='order-2 lg:order-1'>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className='inline-flex items-center px-4 py-1.5 bg-gray-100 border border-gray-100 text-gray-600 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-8'
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
                                <div className='flex items-center gap-3'>
                                    <div className='w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center'>
                                        <Microscope className='w-5 h-5 text-purple-500' />
                                    </div>
                                    <span className='text-sm font-bold text-gray-900 tracking-tight'>{t('agenyz.label.labTested') || 'Lab Tested'}</span>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <div className='w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center'>
                                        <Zap className='w-5 h-5 text-yellow-500' />
                                    </div>
                                    <span className='text-sm font-bold text-gray-900 tracking-tight'>{t('agenyz.label.highBioavailability') || 'High Bioavailability'}</span>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className='flex flex-col sm:flex-row gap-4'
                            >
                                <a href={getStoreUrl(product.slug)} target='_blank' rel='noopener noreferrer' className='flex-1 sm:flex-none'>
                                    <Button size='xl' className="w-full sm:w-auto px-10 py-7 rounded-full font-bold transition-all">
                                        <ShoppingBag className='mr-3 w-6 h-6' />
                                        {t('agenyz.buyNow') || 'Order Now'}
                                    </Button>
                                </a>
                                <Link href='/booking' className='flex-1 sm:flex-none'>
                                    <Button size='xl' variant='outline' className="w-full sm:w-auto px-10 py-7 rounded-full font-bold transition-all">
                                        <MessageCircle className='mr-3 w-6 h-6' />
                                        {t('common.askQuestions') || 'Consult Expert'}
                                    </Button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>

            {/* DETAILS GRID */}
            <section className='py-20 bg-gray-50'>
                <div className='max-w-7xl mx-auto px-4 sm:px-8'>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>

                        <div className='lg:col-span-2 space-y-8'>
                            <div className='bg-white rounded-3xl p-8 md:p-10 border border-gray-100'>
                                <h3 className='text-2xl font-light text-gray-900 mb-6'>{t('agenyz.aboutProduct') || 'About the Formula'}</h3>
                                <div className='prose prose-lg text-gray-600 font-light leading-relaxed max-w-none'>
                                    <p>{translatedDesc}</p>
                                </div>
                            </div>

                            {translatedIngredients.length > 0 && (
                                <div className='bg-white rounded-3xl p-8 md:p-10 border border-gray-100'>
                                    <h3 className='text-2xl font-light text-gray-900 mb-8 flex items-center'>
                                        <Leaf className='w-6 h-6 text-green-500 mr-3' />
                                        {t('agenyz.ingredients') || 'Active Interactions'}
                                    </h3>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                        {translatedIngredients.map((ing, i) => (
                                            <div key={i} className='flex items-center p-4 rounded-2xl bg-gray-50 border border-gray-100'>
                                                <div className='w-2 h-2 rounded-full bg-green-400 mr-4' />
                                                <span className='font-medium text-gray-700'>{ing}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className='space-y-8'>
                            {translatedBenefits.length > 0 && (
                                <div className='bg-gradient-to-br from-[#000035] to-[#000060] rounded-3xl p-8 text-white relative overflow-hidden'>
                                    <div className='absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl' />
                                    <h3 className='text-xl font-medium mb-6 relative z-10 flex items-center'>
                                        <Zap className='w-5 h-5 text-yellow-400 mr-2' />
                                        {t('agenyz.benefits') || 'Key Benefits'}
                                    </h3>
                                    <ul className='space-y-4 relative z-10'>
                                        {translatedBenefits.map((b, i) => (
                                            <li key={i} className='flex items-start text-blue-100 text-sm leading-relaxed'>
                                                <Check className='w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0' />
                                                {b}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

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
