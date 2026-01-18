import SEOHead from '@/react-app/components/SEOHead';
import { Link } from 'react-router';
import { Button } from 'keep-react';
import { Sparkles, Zap, Shield, Brain, ArrowRight, Heart, Leaf, Droplets, Baby, FlaskConical, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/react-app/contexts/LanguageContext';
import { useState } from 'react';

// Product data with translation keys and categories
const PRODUCTS = [
    // Cell Elixir products
    { id: 'cellgenetix', nameKey: 'agenyz.product.cellgenetix.name', descKey: 'agenyz.product.cellgenetix.desc', category: 'Cell Elixir', image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400', link: 'https://agenyz.eu/catalog/health' },
    { id: 'alpha-omega-q10', nameKey: 'agenyz.product.alpha-omega-q10.name', descKey: 'agenyz.product.alpha-omega-q10.desc', category: 'Cell Elixir', image: 'https://images.pexels.com/photos/4047148/pexels-photo-4047148.jpeg?auto=compress&cs=tinysrgb&w=400', link: 'https://agenyz.eu/catalog/health' },
    { id: 'octomagnesium', nameKey: 'agenyz.product.octomagnesium.name', descKey: 'agenyz.product.octomagnesium.desc', category: 'Cell Elixir', image: 'https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=400', link: 'https://agenyz.eu/catalog/11056' },

    // 3D Guard products
    { id: '3d-matrix', nameKey: 'agenyz.product.3d-matrix.name', descKey: 'agenyz.product.3d-matrix.desc', category: '3D Guard', image: 'https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=400', link: 'https://agenyz.eu/catalog/224' },
    { id: 'hepaart', nameKey: 'agenyz.product.hepaart.name', descKey: 'agenyz.product.hepaart.desc', category: '3D Guard', image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400', link: 'https://agenyz.eu/catalog/health' },
    { id: 'cellguard', nameKey: 'agenyz.product.cellguard.name', descKey: 'agenyz.product.cellguard.desc', category: '3D Guard', image: 'https://images.pexels.com/photos/3683051/pexels-photo-3683051.jpeg?auto=compress&cs=tinysrgb&w=400', link: 'https://agenyz.eu/catalog/health' },
    { id: 'ursus', nameKey: 'agenyz.product.ursus.name', descKey: 'agenyz.product.ursus.desc', category: '3D Guard', image: 'https://images.pexels.com/photos/4047077/pexels-photo-4047077.jpeg?auto=compress&cs=tinysrgb&w=400', link: 'https://agenyz.eu/catalog/health' },
    { id: 'candidel', nameKey: 'agenyz.product.candidel.name', descKey: 'agenyz.product.candidel.desc', category: '3D Guard', image: 'https://images.pexels.com/photos/4021769/pexels-photo-4021769.jpeg?auto=compress&cs=tinysrgb&w=400', link: 'https://agenyz.eu/catalog/health' },
    { id: 'infladel', nameKey: 'agenyz.product.infladel.name', descKey: 'agenyz.product.infladel.desc', category: '3D Guard', image: 'https://images.pexels.com/photos/4047184/pexels-photo-4047184.jpeg?auto=compress&cs=tinysrgb&w=400', link: 'https://agenyz.eu/catalog/health' },
    { id: 'cats-claw', nameKey: 'agenyz.product.cats-claw.name', descKey: 'agenyz.product.cats-claw.desc', category: '3D Guard', image: 'https://images.pexels.com/photos/3683051/pexels-photo-3683051.jpeg?auto=compress&cs=tinysrgb&w=400', link: 'https://agenyz.eu/catalog/10886' },
    { id: 'paradetox', nameKey: 'agenyz.product.paradetox.name', descKey: 'agenyz.product.paradetox.desc', category: '3D Guard', image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400', link: 'https://agenyz.eu/catalog/10887' },
    { id: 'oculyz', nameKey: 'agenyz.product.oculyz.name', descKey: 'agenyz.product.oculyz.desc', category: '3D Guard', image: 'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=400', link: 'https://agenyz.eu/catalog/10555' },

    // Beauty Drone products
    { id: 'serum-progressive-anti-age', nameKey: 'agenyz.product.serum-progressive-anti-age.name', descKey: 'agenyz.product.serum-progressive-anti-age.desc', category: 'Beauty Drone', image: 'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=400', link: 'https://agenyz.eu/catalog/10933' },
    { id: 'eye-lifting-cream', nameKey: 'agenyz.product.eye-lifting-cream.name', descKey: 'agenyz.product.eye-lifting-cream.desc', category: 'Beauty Drone', image: 'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=400', link: 'https://agenyz.eu/catalog/health' },
    { id: 'hyaluronic-aqua-cream', nameKey: 'agenyz.product.hyaluronic-aqua-cream.name', descKey: 'agenyz.product.hyaluronic-aqua-cream.desc', category: 'Beauty Drone', image: 'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=400', link: 'https://agenyz.eu/catalog/health' },
    { id: 'youth-secret', nameKey: 'agenyz.product.youth-secret.name', descKey: 'agenyz.product.youth-secret.desc', category: 'Beauty Drone', image: 'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=400', link: 'https://agenyz.eu/catalog/10933' },
    { id: 'collagen-blend', nameKey: 'agenyz.product.collagen-blend.name', descKey: 'agenyz.product.collagen-blend.desc', category: 'Beauty Drone', image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400', link: 'https://agenyz.eu/catalog/11090' },

    // Functional Food products
    { id: 'iq-mct-powder', nameKey: 'agenyz.product.iq-mct-powder.name', descKey: 'agenyz.product.iq-mct-powder.desc', category: 'Functional Food', image: 'https://images.pexels.com/photos/4047184/pexels-photo-4047184.jpeg?auto=compress&cs=tinysrgb&w=400', link: 'https://agenyz.eu/catalog/246' },
    { id: 'alpha-shake-mct', nameKey: 'agenyz.product.alpha-shake-mct.name', descKey: 'agenyz.product.alpha-shake-mct.desc', category: 'Functional Food', image: 'https://images.pexels.com/photos/4047184/pexels-photo-4047184.jpeg?auto=compress&cs=tinysrgb&w=400', link: 'https://agenyz.eu/catalog/health' },
    { id: 'chocolate-iq-shock', nameKey: 'agenyz.product.chocolate-iq-shock.name', descKey: 'agenyz.product.chocolate-iq-shock.desc', category: 'Functional Food', image: 'https://images.pexels.com/photos/4047184/pexels-photo-4047184.jpeg?auto=compress&cs=tinysrgb&w=400', link: 'https://agenyz.eu/catalog/health' },
    { id: 'slim-hit', nameKey: 'agenyz.product.slim-hit.name', descKey: 'agenyz.product.slim-hit.desc', category: 'Functional Food', image: 'https://images.pexels.com/photos/4047184/pexels-photo-4047184.jpeg?auto=compress&cs=tinysrgb&w=400', link: 'https://agenyz.eu/catalog/health' },

    // True Aqua products
    { id: 'ph-balance-cell', nameKey: 'agenyz.product.ph-balance-cell.name', descKey: 'agenyz.product.ph-balance-cell.desc', category: 'True Aqua', image: 'https://images.pexels.com/photos/4021769/pexels-photo-4021769.jpeg?auto=compress&cs=tinysrgb&w=400', link: 'https://agenyz.eu/catalog/248' },
    { id: 'immune-cell', nameKey: 'agenyz.product.immune-cell.name', descKey: 'agenyz.product.immune-cell.desc', category: 'True Aqua', image: 'https://images.pexels.com/photos/4021769/pexels-photo-4021769.jpeg?auto=compress&cs=tinysrgb&w=400', link: 'https://agenyz.eu/catalog/health' },
    { id: 'sorbio-detox-cell', nameKey: 'agenyz.product.sorbio-detox-cell.name', descKey: 'agenyz.product.sorbio-detox-cell.desc', category: 'True Aqua', image: 'https://images.pexels.com/photos/4021769/pexels-photo-4021769.jpeg?auto=compress&cs=tinysrgb&w=400', link: 'https://agenyz.eu/catalog/health' },

    // KidYZ products
    { id: 'gummyz-kidyz', nameKey: 'agenyz.product.gummyz-kidyz.name', descKey: 'agenyz.product.gummyz-kidyz.desc', category: 'KidYZ', image: 'https://images.pexels.com/photos/4047077/pexels-photo-4047077.jpeg?auto=compress&cs=tinysrgb&w=400', link: 'https://agenyz.eu/catalog/10968' },
    { id: 'gummies-stress', nameKey: 'agenyz.product.gummies-stress.name', descKey: 'agenyz.product.gummies-stress.desc', category: 'KidYZ', image: 'https://images.pexels.com/photos/4047077/pexels-photo-4047077.jpeg?auto=compress&cs=tinysrgb&w=400', link: 'https://agenyz.eu/catalog/10814' },
];

const CATEGORIES = ['All', 'Cell Elixir', '3D Guard', 'Beauty Drone', 'Functional Food', 'True Aqua', 'KidYZ'];

// Category icons
const categoryIcons: Record<string, React.ElementType> = {
    'All': Sparkles,
    'Cell Elixir': FlaskConical,
    '3D Guard': Shield,
    'Beauty Drone': Heart,
    'Functional Food': Leaf,
    'True Aqua': Droplets,
    'KidYZ': Baby,
};

export default function AgenyzPage() {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProducts = activeCategory === 'All'
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === activeCategory);

    return (
        <>
            <SEOHead
                title={t('agenyz.page.title') || 'Agenyz - Cellular Nutrition'}
                description={t('agenyz.page.description') || 'Biohacking and advanced supplements for cellular regeneration.'}
                keywords="agenyz, supplements, biohacking, cellular nutrition, XBi-A"
            />

            {/* Hero Section - Premium Dark Theme */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                    {/* Glowing orbs */}
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl" />

                    {/* Grid pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

                    {/* DNA Helix decorative pattern - left side */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 opacity-20">
                        <svg viewBox="0 0 100 600" className="h-full w-full" preserveAspectRatio="none">
                            <path d="M50 0 Q80 50 50 100 Q20 150 50 200 Q80 250 50 300 Q20 350 50 400 Q80 450 50 500 Q20 550 50 600" fill="none" stroke="url(#gradient1)" strokeWidth="2" />
                            <path d="M50 0 Q20 50 50 100 Q80 150 50 200 Q20 250 50 300 Q80 350 50 400 Q20 450 50 500 Q80 550 50 600" fill="none" stroke="url(#gradient1)" strokeWidth="2" />
                            <defs>
                                <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#3B82F6" />
                                    <stop offset="50%" stopColor="#8B5CF6" />
                                    <stop offset="100%" stopColor="#3B82F6" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 py-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Content */}
                        <div className="text-center lg:text-left">
                            {/* XBi-A Badge */}
                            <div className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full mb-8 border border-white/10">
                                <FlaskConical className="w-4 h-4 text-blue-400 mr-2" />
                                <span className="text-blue-300 font-medium text-sm tracking-wider uppercase">XBi-A® Technology</span>
                                <div className="ml-3 w-px h-4 bg-white/20" />
                                <span className="ml-3 text-purple-300 text-sm font-medium">{t('agenyz.hero.biohacking')}</span>
                            </div>

                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                                <span className="block">{t('agenyz.page.title').split(' ')[0]}</span>
                                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    {t('agenyz.page.title').split(' ').slice(1).join(' ')}
                                </span>
                            </h1>

                            <p className="text-xl sm:text-2xl text-blue-100/80 mb-6 leading-relaxed font-light">
                                {t('agenyz.page.subtitle')}
                            </p>

                            <p className="text-lg text-blue-200/60 mb-10 leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
                                {t('agenyz.page.description')}
                            </p>

                            {/* CTA Button */}
                            <div className="flex justify-center lg:justify-start mb-12">
                                <Link to="/booking">
                                    <Button
                                        size="xl"
                                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium px-10 py-4 rounded-2xl transition-all duration-300 border-none hover:scale-105"
                                    >
                                        {t('common.bookNow')}
                                    </Button>
                                </Link>
                            </div>

                            {/* Trust Badges */}
                            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start">
                                <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <Shield className="w-4 h-4 text-green-400" />
                                    </div>
                                    <span className="text-sm text-blue-200/70">100% Natural</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                                        <Zap className="w-4 h-4 text-blue-400" />
                                    </div>
                                    <span className="text-sm text-blue-200/70">98% Bioavailable</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                                        <FlaskConical className="w-4 h-4 text-purple-400" />
                                    </div>
                                    <span className="text-sm text-blue-200/70">Lab Tested</span>
                                </div>
                            </div>
                        </div>

                        {/* Product Showcase Image */}
                        <div className="relative flex items-center justify-center">
                            {/* Glow effect behind image */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-purple-500/30 blur-3xl scale-75" />

                            {/* Main product image */}
                            <div className="relative z-10 animate-[float_6s_ease-in-out_infinite]">
                                <img
                                    src="/agenyz-products.png"
                                    alt="Agenyz Products - Cellular Nutrition Supplements"
                                    className="w-full max-w-lg h-auto drop-shadow-2xl"
                                />
                            </div>

                            {/* Available badge */}
                            <div className="absolute bottom-4 right-4 z-30">
                                <div className="bg-white/10 backdrop-blur-md rounded-2xl px-5 py-3 border border-white/20">
                                    <div className="flex items-center space-x-3">
                                        <span className="relative flex h-3 w-3">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                        </span>
                                        <span className="text-sm font-medium text-white">{t('agenyz.hero.available')}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative rings */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full" />
                        </div>
                    </div>
                </div>

                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-light text-gray-900 mb-6">
                            {t('agenyz.why.title')}
                        </h2>
                        <p className="text-xl text-gray-600 font-light">
                            {t('agenyz.why.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex items-start space-x-6 p-8 bg-blue-50/50 rounded-3xl hover:bg-blue-50 transition-colors duration-300">
                            <div className="flex-shrink-0 p-4 bg-blue-100 rounded-2xl text-blue-600">
                                <Zap className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-medium text-gray-900 mb-3">{t('agenyz.benefits.energy')}</h3>
                                <p className="text-gray-600 leading-relaxed font-light">{t('agenyz.benefits.energy.desc')}</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-6 p-8 bg-purple-50/50 rounded-3xl hover:bg-purple-50 transition-colors duration-300">
                            <div className="flex-shrink-0 p-4 bg-purple-100 rounded-2xl text-purple-600">
                                <Shield className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-medium text-gray-900 mb-3">{t('agenyz.benefits.immunity')}</h3>
                                <p className="text-gray-600 leading-relaxed font-light">{t('agenyz.benefits.immunity.desc')}</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-6 p-8 bg-indigo-50/50 rounded-3xl hover:bg-indigo-50 transition-colors duration-300">
                            <div className="flex-shrink-0 p-4 bg-indigo-100 rounded-2xl text-indigo-600">
                                <Brain className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-medium text-gray-900 mb-3">{t('agenyz.benefits.brain')}</h3>
                                <p className="text-gray-600 leading-relaxed font-light">{t('agenyz.benefits.brain.desc')}</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-6 p-8 bg-pink-50/50 rounded-3xl hover:bg-pink-50 transition-colors duration-300">
                            <div className="flex-shrink-0 p-4 bg-pink-100 rounded-2xl text-pink-600">
                                <Sparkles className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-medium text-gray-900 mb-3">{t('agenyz.benefits.youth')}</h3>
                                <p className="text-gray-600 leading-relaxed font-light">{t('agenyz.benefits.youth.desc')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Catalogue Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center px-6 py-2 bg-blue-50 border border-blue-100 rounded-full mb-8">
                            <span className="text-blue-700 font-medium text-sm uppercase tracking-wide">{t('agenyz.catalogue.subtitle')}</span>
                        </div>
                        <h2 className="text-4xl font-light text-gray-900 mb-6">
                            {t('agenyz.catalogue.title')}
                        </h2>
                        <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                            {t('agenyz.catalogue.desc')}
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {CATEGORIES.map((category) => {
                            const Icon = categoryIcons[category] || Sparkles;
                            return (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`inline-flex items-center px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-200 ${activeCategory === category
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                        }`}
                                >
                                    <Icon className="w-4 h-4 mr-2" />
                                    {t(`agenyz.category.${category}`)}
                                </button>
                            );
                        })}
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map((product) => (
                            <a
                                key={product.id}
                                href={product.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                                    <img
                                        src={product.image}
                                        alt={t(product.nameKey)}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">
                                            {t(`agenyz.category.${product.category}`)}
                                        </span>
                                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {t(product.nameKey)}
                                    </h3>
                                    <p className="text-gray-600 font-light text-sm leading-relaxed line-clamp-3">
                                        {t(product.descKey)}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* View All Products CTA */}
                    <div className="text-center mt-12">
                        <a
                            href="https://agenyz.eu/catalog"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                size="xl"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-10 py-4 rounded-2xl transition-all duration-200 border-none hover:scale-105"
                            >
                                {t('agenyz.cta.visitStore')}
                                <ExternalLink className="ml-2 w-5 h-5" />
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* XBi-A Technology Section */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden relative">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500 rounded-full blur-3xl" />
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10">
                    <div className="text-center">
                        <div className="inline-flex items-center px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
                            <FlaskConical className="w-4 h-4 text-blue-300 mr-2" />
                            <span className="text-blue-200 font-medium text-sm uppercase tracking-wide">XBi-A® Technology</span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl font-light mb-8 leading-tight">
                            Advanced{' '}
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-medium">
                                Bioavailability
                            </span>
                        </h2>

                        <p className="text-xl text-blue-100/80 font-light leading-relaxed max-w-3xl mx-auto mb-10">
                            Agenyz products feature the proprietary XBi-A® complex - a cutting-edge technology that dramatically enhances the absorption and effectiveness of active ingredients at the cellular level. This ensures maximum benefit from every supplement.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                                <div className="text-4xl font-bold text-blue-400 mb-2">98%</div>
                                <p className="text-blue-100/70 text-sm">Bioavailability rate</p>
                            </div>
                            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                                <div className="text-4xl font-bold text-purple-400 mb-2">5x</div>
                                <p className="text-blue-100/70 text-sm">Faster absorption</p>
                            </div>
                            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                                <div className="text-4xl font-bold text-indigo-400 mb-2">100%</div>
                                <p className="text-blue-100/70 text-sm">Natural ingredients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
