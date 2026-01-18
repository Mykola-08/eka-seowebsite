'use client';

import SEOHead from '@/react-app/components/SEOHead';
import Link from 'next/link';
import { Button } from 'keep-react';
import { Sparkles, Zap, Shield, Brain, ArrowRight, CheckCircle2, Activity, Leaf, Dna } from 'lucide-react';
import { useLanguage } from '@/react-app/contexts/LanguageContext';
import FloatingBiomedSymbols from '@/app/components/FloatingBiomedSymbols';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { products, categories } from './products';

export default function AgenyzPage() {
    const { t } = useLanguage();
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProducts = selectedCategory === 'All' 
        ? products 
        : products.filter(p => p.category === selectedCategory);

    return (
        <>
            <SEOHead
                title='Agenyz - Unlock Your Cellular Potential | EKA Balance'
                description='Discover Agenyz bio-available supplements. Smart cell food designed to restore balance, defy aging, and fuel your vitality at the DNA level.'
                keywords='Agenyz, biohacking, cellular nutrition, XBi-A, liposomal vitamins, anti-aging, EKA Balance'
            />

            {/* Hero Section - Unified Gradient */}
            <section className='relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50'>
                <FloatingBiomedSymbols />
                <div className='absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]' />
                
                <div className='max-w-7xl mx-auto px-4 sm:px-8 relative z-10'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
                        <div className='order-2 lg:order-1 text-center lg:text-left'>
                            <div className='inline-flex items-center px-4 py-2 bg-blue-100/50 rounded-full mb-8 border border-blue-100'>
                                <Dna className='w-4 h-4 text-blue-600 mr-2' />
                                <span className='text-blue-700 font-medium text-sm tracking-wide uppercase'>{t('agenyz.hero.biohacking') || 'Bio-Innovation'}</span>
                            </div>

                            <h1 className='text-5xl sm:text-6xl font-light text-gray-900 mb-6 leading-tight tracking-tight'>
                                {t('agenyz.page.title') || 'Unlock Your Cellular Potential'}
                            </h1>

                            <p className='text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed font-light'>
                                {t('agenyz.page.subtitle') || 'Bio-available supplements designed to restore balance, defy aging, and fuel your vitality at the DNA level.'}
                            </p>

                            <p className='text-lg text-gray-700 mb-10 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0'>
                                {t('agenyz.page.description') || 'True health isn\'t just about what you eat—it\'s about what your cells absorb. Agenyz represents the next generation of Smart Cell Food, combining rare natural extracts with cutting-edge delivery technologies.'}
                            </p>

                            <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                                <Link href='/booking'>
                                    <Button 
                                        size='xl'
                                        className='bg-[#FFB405] hover:bg-[#e8a204] text-[#000035] font-medium px-8 py-4 rounded-2xl transition-all duration-200 shadow-xl border-none hover:scale-105'
                                    >
                                        {t('common.bookNow')}
                                    </Button>
                                </Link>
                                <a
                                    href='https://agenyz.com'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <Button 
                                        size='xl'
                                        className='bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-2xl transition-all duration-200 shadow-xl border-none hover:scale-105'
                                    >
                                        {t('agenyz.cta.visitStore') || 'Visit Agenyz Store'}
                                        <ArrowRight className='ml-2 w-5 h-5' />
                                    </Button>
                                </a>
                            </div>
                        </div>

                        <div className='order-1 lg:order-2'>
                             <div className='relative group'>
                                <div className='absolute inset-0 bg-gradient-to-tr from-blue-200 to-indigo-200 rounded-[2.5rem] blur-xl opacity-30 group-hover:opacity-50 transition-duration-500' />
                                <img
                                    src='https://images.pexels.com/photos/3618606/pexels-photo-3618606.jpeg?auto=compress&cs=tinysrgb&w=1200'
                                    alt='Advanced supplements and cellular nutrition'
                                    className='relative w-full h-auto aspect-[4/3] object-cover rounded-[2.5rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]'
                                />
                                <div className='absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20'>
                                    <div className='flex items-center space-x-3'>
                                        <span className='relative flex h-3 w-3'>
                                          <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
                                          <span className='relative inline-flex rounded-full h-3 w-3 bg-green-500'></span>
                                        </span>
                                        <span className='text-sm font-medium text-gray-700'>{t('agenyz.hero.available') || 'Available for Order'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Agenyz / Technology Section */}
            <section className='py-24 bg-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-8'>
                    <div className='text-center mb-16'>
                        <h2 className='text-4xl font-light text-gray-900 mb-6'>
                            {t('agenyz.why.title') || 'Why Choose Agenyz?'}
                        </h2>
                        <p className='text-xl text-gray-600 font-light max-w-2xl mx-auto'>
                            {t('agenyz.why.subtitle') || 'Where Nature Meets Bio-Innovation.'}
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div className='p-8 bg-blue-50/50 rounded-3xl hover:bg-blue-50 transition-colors duration-300 border border-blue-100/50'>
                            <div className='w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 mx-auto md:mx-0'>
                                <Activity className='w-7 h-7' />
                            </div>
                            <h3 className='text-xl font-medium text-gray-900 mb-4 text-center md:text-left'>XBi-A Technology</h3>
                            <p className='text-gray-600 leading-relaxed font-light text-center md:text-left'>
                                Our proprietary bioavailability booster helps nutrients cross the cell membrane, ensuring you get maximum benefit from every capsule.
                            </p>
                        </div>

                        <div className='p-8 bg-purple-50/50 rounded-3xl hover:bg-purple-50 transition-colors duration-300 border border-purple-100/50'>
                            <div className='w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6 mx-auto md:mx-0'>
                                <Shield className='w-7 h-7' />
                            </div>
                            <h3 className='text-xl font-medium text-gray-900 mb-4 text-center md:text-left'>3D Guard Approach</h3>
                            <p className='text-gray-600 leading-relaxed font-light text-center md:text-left'>
                                We protect the cell at three levels: genetic (DNA), structural (membrane), and functional (energy).
                            </p>
                        </div>

                        <div className='p-8 bg-green-50/50 rounded-3xl hover:bg-green-50 transition-colors duration-300 border border-green-100/50'>
                            <div className='w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6 mx-auto md:mx-0'>
                                <Leaf className='w-7 h-7' />
                            </div>
                            <h3 className='text-xl font-medium text-gray-900 mb-4 text-center md:text-left'>Clean & Pure</h3>
                            <p className='text-gray-600 leading-relaxed font-light text-center md:text-left'>
                                Innovative formulas free from harsh synthetics, heavy metals, and unnecessary fillers. Produced under strict GMP and ISO 22000 standards.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

             {/* Product Catalogue Section */}
            <section className='py-24 bg-gray-50' id='catalogue'>
                <div className='max-w-7xl mx-auto px-4 sm:px-8'>
                    <div className='text-center mb-16'>
                        <span className='text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block'>
                            {t('agenyz.catalogue.subtitle') || 'Our Collection'}
                        </span>
                        <h2 className='text-4xl md:text-5xl font-light text-gray-900 mb-6'>
                            {t('agenyz.catalogue.title') || 'Agenyz Product Catalogue'}
                        </h2>
                        <p className='text-xl text-gray-600 font-light max-w-2xl mx-auto'>
                            {t('agenyz.catalogue.desc') || 'Explore our comprehensive range of bio-additives and functional foods designed for your cellular health.'}
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className='flex flex-wrap justify-center gap-3 mb-16'>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 }
                            >
                                {t(genyz.category.) || category}
                            </button>
                        ))}
                    </div>

                    {/* Products Grid */}
                    <motion.div 
                        layout
                        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                    >
                        <AnimatePresence>
                            {filteredProducts.map((product) => (
                                <Link href={/agenyz/} key={product.id} className='h-full block'>
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3 }}
                                        className='bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full group'
                                    >
                                        <div className='mb-4 flex items-start justify-between'>
                                            <span className='px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full uppercase tracking-wide'>
                                                {t(genyz.category.) || product.category}
                                            </span>
                                        </div>

                                        <div className='relative w-full h-56 mb-6 bg-white rounded-2xl overflow-hidden flex items-center justify-center p-4'>
                                            {product.image ? (
                                                <img 
                                                    src={product.image} 
                                                    alt={product.name}
                                                    className='w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500 will-change-transform'
                                                    loading='lazy'
                                                />
                                            ) : (
                                                <div className='w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-300'>
                                                    <Sparkles className='w-8 h-8' />
                                                </div>
                                            )}
                                        </div>

                                        <h3 className='text-2xl font-light text-gray-900 mb-4 group-hover:text-blue-700 transition-colors'>
                                            {t(genyz.product..name) || product.name}
                                        </h3>
                                        
                                        <p className='text-gray-600 mb-6 flex-grow leading-relaxed font-light line-clamp-3'>
                                            {t(genyz.product..desc) || product.shortDescription || product.description}
                                        </p>

                                        {product.features && (
                                            <ul className='space-y-2 mb-8'>
                                                {(t(genyz.product..features) 
                                                    ? t(genyz.product..features).split(',').map(f => f.trim()) 
                                                    : product.features.slice(0, 3)
                                                ).map((feature, idx) => (
                                                    <li key={idx} className='flex items-center text-sm text-gray-500'>
                                                        <CheckCircle2 className='w-4 h-4 text-green-500 mr-2 flex-shrink-0' />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        <div className='pt-6 border-t border-gray-100 flex items-center justify-between mt-auto'>
                                            <span className='text-sm font-medium text-gray-400'>{t('agenyz.viewDetails') || 'View details'}</span>
                                            <Button size='sm' className='bg-transparent hover:bg-blue-50 text-blue-600 border border-blue-200 pointer-events-none'>
                                                <ArrowRight className='w-4 h-4' />
                                            </Button>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>
        </>
    );
}


