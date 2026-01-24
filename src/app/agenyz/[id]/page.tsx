'use client';

import { useParams, notFound } from 'next/navigation';
import { products, getLocalized } from '@/app/agenyz/products';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from 'keep-react';
import Link from 'next/link';
import { ArrowLeft, Check, ShoppingBag, MessageCircle, Leaf, Clock, ShieldCheck, Zap, Microscope, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const dynamic = 'force-dynamic';

export default function ProductPage() {
    const params = useParams();
    const { language, t } = useLanguage();

    // params.id can be string or array. Safely handle it.
    const id = Array.isArray(params.id) ? params.id[0] : params.id;

    // Find product case-insensitive or exact
    const product = products.find(p => p.id === id || p.id.toLowerCase() === (id as string).toLowerCase());

    if (!product) {
        return notFound();
    }

    // Localized Content
    const translatedName = getLocalized(product.name, language);
    const translatedDesc = getLocalized(product.longDescription || product.description, language);
    const translatedShortDesc = getLocalized(product.shortDescription || product.description, language);
    const translatedUsage = getLocalized(product.usage, language);

    const rawBenefits = product.benefits && product.benefits.length > 0 ? product.benefits : (product.features || []);
    const translatedBenefits = rawBenefits.map(b => getLocalized(b, language));

    const translatedIngredients = (product.ingredients || []).map(i => getLocalized(i, language));

    // Fallback image if none provided
    const imageUrl = product.image || 'https://images.pexels.com/photos/3618606/pexels-photo-3618606.jpeg?auto=compress&cs=tinysrgb&w=1200';

    return (
        <div className='bg-white min-h-screen'>
            {/* Sticky Mobile CTA */}
            <div className='fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-lg border-t border-gray-100 z-50 md:hidden'>
                <a href='https://agenyz.eu/catalog' target='_blank' rel='noopener noreferrer' className='block w-full'>
                    <Button size='lg' className='w-full btn btn-primary rounded-xl shadow-lg'>
                        {t('agenyz.buyNow') || 'Buy Now'}
                    </Button>
                </a>
            </div>

            {/* Navigation Bar Placeholder (Back Button) */}
            <div className='absolute top-24 left-4 md:left-8 z-20'>
                <Link href='/agenyz' className='group inline-flex items-center text-gray-500 hover:text-blue-600 transition-colors bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-100/50 hover:border-blue-100'>
                    <ArrowLeft className='w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform' />
                    <span className='font-medium text-sm'>{t('common.back') || 'Back'}</span>
                </Link>
            </div>

            {/* HERO SECTION */}
            <section className='pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden'>
                <div className='absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent -z-10' />

                <div className='max-w-7xl mx-auto px-4 sm:px-8'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'>

                        {/* Product Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className='relative order-1 lg:order-2 flex justify-center'
                        >
                            <div className='relative w-full max-w-md aspect-square'>
                                <div className='absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse-slow' />
                                <img
                                    src={imageUrl}
                                    alt={translatedName}
                                    className='relative w-full h-full object-contain drop-shadow-2xl z-10'
                                />
                                {/* Floating Badges */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className='absolute -bottom-4 right-0 md:bottom-8 md:-right-8 bg-white/90 backdrop-blur border border-white/20 p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3'
                                >
                                    <div className='p-2 bg-green-100 rounded-xl text-green-600'>
                                        <Leaf className='w-6 h-6' />
                                    </div>
                                    <div>
                                        <p className='text-xs text-gray-400 font-bold uppercase tracking-wider'>Type</p>
                                        <p className='text-sm font-semibold text-gray-800'>Bio-Active</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Text Content */}
                        <div className='order-2 lg:order-1'>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className='inline-flex items-center px-3 py-1 bg-blue-50 border border-blue-100 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6'
                            >
                                <Zap className='w-3 h-3 mr-2' />
                                {product.category} Series
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className='text-5xl lg:text-7xl font-light text-gray-900 mb-6 tracking-tight'
                            >
                                {translatedName}
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className='text-xl text-gray-500 font-light leading-relaxed mb-8 max-w-lg'
                            >
                                {translatedShortDesc}
                            </motion.p>

                            {/* Key Stats / Icons Row */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className='flex flex-wrap gap-6 mb-10 border-t border-b border-gray-100 py-6'
                            >
                                <div className='flex items-center gap-2'>
                                    <ShieldCheck className='w-5 h-5 text-blue-500' />
                                    <span className='text-sm font-medium text-gray-600'>DNA Protection</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <Microscope className='w-5 h-5 text-purple-500' />
                                    <span className='text-sm font-medium text-gray-600'>Lab Tested</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <Zap className='w-5 h-5 text-yellow-500' />
                                    <span className='text-sm font-medium text-gray-600'>High Bioavailability</span>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className='flex flex-col sm:flex-row gap-4'
                            >
                                <a href='https://agenyz.eu/catalog' target='_blank' rel='noopener noreferrer' className='flex-1 sm:flex-none'>
                                    <Button size='xl' className='w-full sm:w-auto btn btn-primary text-lg px-8 py-4 rounded-xl shadow-lg shadow-blue-500/20'>
                                        <ShoppingBag className='mr-2 w-5 h-5' />
                                        {t('agenyz.buyNow') || 'Order Now'}
                                    </Button>
                                </a>
                                <Link href='/contact' className='flex-1 sm:flex-none'>
                                    <Button size='xl' variant='outline' className='w-full sm:w-auto border-gray-200 hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-xl'>
                                        <MessageCircle className='mr-2 w-5 h-5' />
                                        {t('agenyz.askExpert')}
                                    </Button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DETAILS GRID */}
            <section className='py-20 bg-gray-50'>
                <div className='max-w-7xl mx-auto px-4 sm:px-8'>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>

                        {/* Description Column (2 cols) */}
                        <div className='lg:col-span-2 space-y-8'>
                            {/* About Card */}
                            <div className='bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100'>
                                <h3 className='text-2xl font-light text-gray-900 mb-6'>{t('agenyz.aboutProduct') || 'About the Formula'}</h3>
                                <div className='prose prose-lg text-gray-600 font-light leading-relaxed max-w-none'>
                                    <p>{translatedDesc}</p>
                                </div>
                            </div>

                            {/* Ingredients Card */}
                            {translatedIngredients.length > 0 && (
                                <div className='bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100'>
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

                        {/* Sidebar Column (1 col) */}
                        <div className='space-y-8'>
                            {/* Benefits Widget */}
                            {translatedBenefits.length > 0 && (
                                <div className='bg-gradient-to-br from-[#000035] to-[#000060] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden'>
                                    {/* Abstract shapes */}
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

                            {/* Usage Widget */}
                            {translatedUsage && (
                                <div className='bg-purple-50 rounded-3xl p-8 border border-purple-100'>
                                    <h3 className='text-lg font-medium text-purple-900 mb-4 flex items-center'>
                                        <Clock className='w-5 h-5 text-purple-600 mr-2' />
                                        {t('agenyz.usage') || 'How to Use'}
                                    </h3>
                                    <p className='text-purple-800/80 leading-relaxed font-light'>
                                        {translatedUsage}
                                    </p>
                                </div>
                            )}

                            {/* Trust Badges */}
                            <div className='bg-white rounded-3xl p-6 border border-gray-100 grid grid-cols-2 gap-4'>
                                <div className='text-center p-2'>
                                    <div className='mx-auto w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mb-2 text-gray-400'>
                                        <ShieldCheck className='w-5 h-5' />
                                    </div>
                                    <p className='text-xs font-semibold text-gray-500 uppercase'>Quality</p>
                                </div>
                                <div className='text-center p-2'>
                                    <div className='mx-auto w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mb-2 text-gray-400'>
                                        <Leaf className='w-5 h-5' />
                                    </div>
                                    <p className='text-xs font-semibold text-gray-500 uppercase'>Natural</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
