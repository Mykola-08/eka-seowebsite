'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Sparkles, ExternalLink } from '@/lib/icons';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEOUpdater from '@/components/SEOUpdater';
import { products, categories, getLocalized } from '@/app/agenyz/products';

export default function AgenyzContent() {
    const { language, t } = useLanguage();
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(p => p.category === selectedCategory);

    const featuredProducts = products.filter(p =>
        ['CellGenetiX', '3D-Matrix', 'Octomagnesium-XBi-A'].includes(p.id)
    );

    const stats = [
        { value: '98%', label: 'Bioavailability', sub: 'XBi-A technology' },
        { value: '100%', label: 'Natural', sub: 'No synthetic additives' },
        { value: '8', label: 'Mg Forms', sub: 'OctoMagnesium complex' },
        { value: '12+', label: 'Products', sub: 'Cellular formula range' },
    ];

    return (
        <>
            <SEOUpdater
                titleKey="agenyz.seo.title"
                descriptionKey="agenyz.seo.description"
                keywordsKey="agenyz.seo.keywords"
            />

            {/* ── Dark Hero ── */}
            <section className="relative bg-black min-h-[88svh] flex flex-col items-center justify-center overflow-hidden px-6 pt-20 pb-24">
                {/* Subtle radial glow */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.03] blur-3xl" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-white/[0.04] to-transparent" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
                    className="relative z-10 text-center max-w-4xl mx-auto"
                >
                    {/* Wordmark */}
                    <p className="text-white/30 text-xs tracking-[0.35em] uppercase mb-6 font-medium">
                        Agenyz — Bio Innovation
                    </p>

                    {/* Main headline */}
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.95] mb-8">
                        Cellular health.<br />
                        <span className="text-white/60">Designed for you.</span>
                    </h1>

                    <p className="text-white/50 text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed font-light">
                        {t('agenyz.page.subtitle') || 'Bio-available supplements with patented XBi-A® technology — engineered for optimal absorption at the cellular level.'}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            asChild
                            size="lg"
                            className="rounded-full font-semibold px-8"
                        >
                            <Link href="#catalogue">
                                {t('agenyz.catalogue.title') || 'View Products'}
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </Button>
                        <a
                            href="https://agenyz.es"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                size="lg"
                                variant="outline"
                                className="rounded-full /20 px-8"
                            >
                                Visit agenyz.es
                                <ExternalLink className="w-4 h-4 ml-2" />
                            </Button>
                        </a>
                    </div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
                >
                    <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
                    <p className="text-white/20 text-[10px] tracking-widest uppercase">Scroll</p>
                </motion.div>
            </section>

            {/* ── XBi-A Technology Stats ── */}
            <section className="bg-black border-t border-white/[0.06] py-16">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="text-white/30 text-xs tracking-[0.3em] uppercase font-medium">Technology</span>
                        <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight mt-2">
                            XBi-A<sup className="text-base text-white/40">™</sup> Technology
                        </h2>
                        <p className="text-white/40 mt-3 max-w-md mx-auto text-sm leading-relaxed">
                            Patented bioavailability complex that enhances nutrient absorption up to 60% compared to standard supplements.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="bg-black px-6 py-8 text-center"
                            >
                                <p className="text-4xl md:text-5xl font-bold text-white tracking-tight">{stat.value}</p>
                                <p className="text-white/80 font-semibold mt-1 text-sm">{stat.label}</p>
                                <p className="text-white/30 text-xs mt-0.5">{stat.sub}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Dark to light transition ── */}
            <div className="h-16 bg-gradient-to-b from-black to-[#f9f9fb]" aria-hidden="true" />

            {/* ── Featured Products Bento ── */}
            <section className="py-20 bg-[#f9f9fb]">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 mb-4">
                            {t('agenyz.bento.title') || 'Smart Cell Food'}
                        </h2>
                        <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-xl mx-auto">
                            {t('agenyz.bento.subtitle') || 'The next generation of bio-innovation for your longevity and health.'}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {featuredProducts.map((product, idx) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={idx === 0 ? 'md:col-span-2' : ''}
                            >
                                <Link
                                    href={`/agenyz/${product.id}`}
                                      className="group block h-full bg-white rounded-[2rem] overflow-hidden transition-all duration-500 border border-gray-100 hover:border-gray-200"
                                >
                                    <div className={`relative w-full bg-zinc-50 flex items-center justify-center ${idx === 0 ? 'h-72 md:h-80' : 'h-64'}`}>
                                        {product.image ? (
                                            <Image
                                                src={product.image}
                                                alt={getLocalized(product.name, language)}
                                                fill
                                                className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                        ) : (
                                            <Sparkles className="w-12 h-12 text-gray-200" />
                                        )}
                                    </div>
                                    <div className="p-6 md:p-8">
                                        <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">{product.category}</span>
                                        <h3 className="text-2xl font-bold text-gray-900 tracking-tight mt-1 mb-2">
                                            {getLocalized(product.name, language)}
                                        </h3>
                                        <p className="text-gray-500 leading-relaxed line-clamp-2 text-sm">
                                            {getLocalized(product.shortDescription || product.description, language)}
                                        </p>
                                        {product.benefits && (
                                            <ul className="mt-4 space-y-1.5">
                                                {product.benefits.slice(0, 3).map((b, i) => (
                                                    <li key={i} className="flex items-center text-sm text-gray-600 gap-2">
                                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                                                        {getLocalized(b, language)}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                        <div className="mt-5 flex items-center text-sm font-semibold text-gray-900 group-hover:gap-2 transition-all gap-1">
                                            {t('agenyz.viewDetails') || 'View details'}
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Full Catalogue ── */}
            <section className="py-24 bg-white" id="catalogue">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <div className="text-center mb-14">
                        <span className="text-gray-400 font-semibold tracking-widest uppercase text-xs mb-3 block">
                            {t('agenyz.catalogue.subtitle') || 'Our Collection'}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-5">
                            {t('agenyz.catalogue.title') || 'Agenyz Product Catalogue'}
                        </h2>
                        <p className="text-lg text-gray-500 font-medium max-w-xl mx-auto">
                            {t('agenyz.catalogue.desc') || 'Explore our range of bio-additives designed for your cellular health.'}
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-2 mb-14">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-5 py-2.5 min-h-[40px] rounded-full text-sm font-semibold transition-all duration-200 ${selectedCategory === category
                                    ? 'bg-black text-white shadow-sm scale-105'
                                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                    }`}
                            >
                                {t(`agenyz.category.${category}`) || category}
                            </button>
                        ))}
                    </div>

                    {/* Products Grid */}
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence mode="popLayout">
                            {filteredProducts.map((product) => (
                                <Link href={`/agenyz/${product.id}`} key={product.id} className="h-full block group">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, y: 16 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.35 }}
                                          className="bg-zinc-50 border border-gray-100/80 rounded-[2.5rem] p-7 flex flex-col h-full transition-all duration-400 hover:bg-zinc-100/50"
                                    >
                                        <div className="mb-5">
                                            <span className="px-3.5 py-1.5 bg-white text-gray-500 text-xs font-bold rounded-full uppercase tracking-widest border border-gray-100">
                                                {t(`agenyz.category.${product.category}`) || product.category}
                                            </span>
                                        </div>

                                        <div className="relative w-full h-56 mb-6 flex items-center justify-center p-4 group-hover:scale-105 transition-transform duration-400">
                                            {product.image ? (
                                                  <div className="relative w-full h-full">
                                                    <Image
                                                        src={product.image}
                                                        alt={getLocalized(product.name, language)}
                                                        fill
                                                        className="object-contain"
                                                        sizes="(max-width: 768px) 100vw, 33vw"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-gray-200 border border-gray-50">
                                                    <Sparkles className="w-8 h-8" />
                                                </div>
                                            )}
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight group-hover:text-black transition-colors">
                                            {getLocalized(product.name, language)}
                                        </h3>

                                        <p className="text-gray-500 mb-5 flex-grow leading-relaxed text-sm line-clamp-3">
                                            {getLocalized(product.shortDescription || product.description, language)}
                                        </p>

                                        <div className="pt-5 border-t border-gray-100 flex items-center justify-between mt-auto">
                                            <span className="text-sm font-bold text-gray-400 group-hover:text-gray-900 transition-colors">
                                                {t('agenyz.viewDetails') || 'View details'}
                                            </span>
                                            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center border border-gray-100 group-hover:bg-black group-hover:text-white transition-all duration-300">
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* ── Bottom CTA ── */}
            <section className="bg-black py-20 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-xl mx-auto"
                >
                    <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-4">Agenyz Store</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                        Ready to elevate your cellular health?
                    </h2>
                    <p className="text-white/50 mb-8 text-sm leading-relaxed">
                        Purchase directly from the official Agenyz store with worldwide shipping.
                    </p>
                    <a href="https://agenyz.es" target="_blank" rel="noopener noreferrer">
                        <Button
                            size="lg"
                            className="rounded-full font-semibold px-10"
                        >
                            Shop at agenyz.es
                            <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                    </a>
                </motion.div>
            </section>
        </>
    );
}
