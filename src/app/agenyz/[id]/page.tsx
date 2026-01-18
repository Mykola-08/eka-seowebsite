'use client';

import { useParams, notFound } from 'next/navigation';
import { products, getLocalized } from '../products';
import { useLanguage } from '@/react-app/contexts/LanguageContext';
import { Button } from 'keep-react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Check, ShoppingBag, MessageCircle, Leaf, Clock, ShieldCheck } from 'lucide-react';

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
    // Prefer long description if available, else short/regular
    const translatedDesc = getLocalized(product.longDescription || product.description, language);
    const translatedUsage = getLocalized(product.usage, language);
    
    // Handle benefits/features
    const rawBenefits = product.benefits && product.benefits.length > 0 ? product.benefits : (product.features || []);
    const translatedBenefits = rawBenefits.map(b => getLocalized(b, language));
    
    // Handle ingredients
    const translatedIngredients = (product.ingredients || []).map(i => getLocalized(i, language));

    // Construct image URL (mock or real if available)
    const imageUrl = product.image || 'https://images.pexels.com/photos/3618606/pexels-photo-3618606.jpeg?auto=compress&cs=tinysrgb&w=1200';

    return (
        <div className='bg-white min-h-screen pt-32 pb-20'>
            <div className='max-w-7xl mx-auto px-4 sm:px-8'>
                <Link href='/agenyz' className='inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors'>
                    <ArrowLeft className='w-4 h-4 mr-2' />
                    {t('common.back') || 'Back to Catalogue'}
                </Link>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start'>
                    {/* Image Section */}
                    <div className='relative rounded-3xl overflow-hidden bg-white border border-gray-100 aspect-square shadow-xl group'>
                        <div className='absolute inset-0 flex items-center justify-center p-8 bg-gradient-to-br from-white to-gray-50'>
                            <img 
                                src={imageUrl}
                                alt={translatedName}
                                className='w-full h-full object-contain hover:scale-105 transition-transform duration-700'
                            />
                        </div>
                        <div className='absolute top-6 right-6'>
                            <div className='bg-white/90 backdrop-blur shadow-sm p-2 rounded-full border border-gray-100'>
                                <ShieldCheck className='w-6 h-6 text-blue-600' />
                            </div>
                        </div>
                        <div className='absolute bottom-6 left-6'>
                            <span className='px-4 py-2 bg-blue-600/90 backdrop-blur-sm text-white text-sm font-medium rounded-full uppercase tracking-wide shadow-lg'>
                                {product.category}
                            </span>
                        </div>
                    </div>

                    {/* Info Section */}
                    <div>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight tracking-tight'>
                            {translatedName}
                        </h1>
                        
                        <div className='prose prose-lg text-gray-600 mb-10 leading-relaxed font-light'>
                            <p>{translatedDesc}</p>
                        </div>

                        {/* Tabs / Sections */}
                        <div className='space-y-8'>
                            {/* Benefits */}
                            {translatedBenefits.length > 0 && (
                                <div className='bg-blue-50/50 p-8 rounded-3xl border border-blue-100 hover:border-blue-200 transition-colors'>
                                    <h3 className='text-xl font-medium text-gray-900 mb-6 flex items-center'>
                                        <Check className='w-5 h-5 text-blue-600 mr-2' />
                                        {t('agenyz.benefits') || 'Key Benefits'}
                                    </h3>
                                    <ul className='space-y-4'>
                                        {translatedBenefits.map((benefit, idx) => (
                                            <li key={idx} className='flex items-start text-gray-700 group'>
                                                <div className='w-1.5 h-1.5 rounded-full bg-blue-400 mt-2.5 mr-3 group-hover:bg-blue-600 transition-colors' />
                                                <span className='leading-relaxed'>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Ingredients & Usage Grid */}
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                                {translatedIngredients.length > 0 && (
                                    <div className='bg-green-50/50 p-6 rounded-3xl border border-green-100 hover:border-green-200 transition-colors'>
                                        <h3 className='text-lg font-medium text-gray-900 mb-4 flex items-center'>
                                            <Leaf className='w-5 h-5 text-green-600 mr-2' />
                                            {t('agenyz.ingredients') || 'Active Ingredients'}
                                        </h3>
                                        <ul className='space-y-2'>
                                            {translatedIngredients.map((item, idx) => (
                                                <li key={idx} className='text-sm text-gray-600 flex items-center'>
                                                    <span className='w-1 h-1 rounded-full bg-green-400 mr-2' />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {translatedUsage && (
                                    <div className='bg-purple-50/50 p-6 rounded-3xl border border-purple-100 hover:border-purple-200 transition-colors'>
                                        <h3 className='text-lg font-medium text-gray-900 mb-4 flex items-center'>
                                            <Clock className='w-5 h-5 text-purple-600 mr-2' />
                                            {t('agenyz.usage') || 'Recommended Usage'}
                                        </h3>
                                        <p className='text-gray-600 text-sm leading-relaxed'>
                                            {translatedUsage}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='mt-12 flex flex-col sm:flex-row gap-4'>
                             <a 
                                href='https://agenyz.eu/catalog' 
                                target='_blank' 
                                rel='noopener noreferrer'
                                className='w-full sm:w-auto'
                            >
                                <Button 
                                    size='xl' 
                                    className='w-full sm:w-auto bg-gray-900 hover:bg-black text-white border-none rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1'
                                >
                                    <ShoppingBag className='mr-2 w-5 h-5' />
                                    {t('agenyz.buyNow') || 'Buy on Agenyz Store'}
                                </Button>
                            </a>

                            <Link href='/contact' className='w-full sm:w-auto'>
                                <Button 
                                    size='xl' 
                                    variant='outline'
                                    className='w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-900 border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all'
                                >
                                    <MessageCircle className='mr-2 w-5 h-5' />
                                    {t('agenyz.askExpert') || 'Ask Expert About This'}
                                </Button>
                            </Link>
                        </div>
                        <p className='mt-4 text-xs text-gray-400 text-center sm:text-left'>
                            * External link to official Agenyz Euro shop.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
