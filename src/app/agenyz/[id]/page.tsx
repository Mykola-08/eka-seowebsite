'use client';

import { useParams, notFound } from 'next/navigation';
import { products } from '../products';
import { useLanguage } from '@/react-app/contexts/LanguageContext';
import { Button } from 'keep-react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Check } from 'lucide-react';

export default function ProductPage() {
    const params = useParams();
    const { t } = useLanguage();
    
    // params.id can be string or array. Safely handle it.
    const id = Array.isArray(params.id) ? params.id[0] : params.id;

    // Find product case-insensitive or exact
    const product = products.find(p => p.id === id || p.id.toLowerCase() === (id as string).toLowerCase());
    
    if (!product) {
        return notFound();
    }

    // Dynamic keys
    const titleKey = `agenyz.product.${product.id.toLowerCase()}.name`;
    const descKey = `agenyz.product.${product.id.toLowerCase()}.desc`;
    // Features keys in translation file generally use the casing from ID passed to script or manual
    // Checked file: 'agenyz.product.CellGenetiX.features' (Mixed Case)
    // So we use product.id directly
    const featuresKey = `agenyz.product.${product.id}.features`; 
    
    const translatedName = t(titleKey) || product.name;
    const translatedDesc = t(descKey) || product.description;
    
    const translatedFeaturesString = t(featuresKey); 
    // Fallback to product.features if no translation, or parsed translation string
    const featuresList = translatedFeaturesString 
        ? translatedFeaturesString.split(',').map(s => s.trim()) 
        : product.features || [];

    // Construct image URL (mock or real if available)
    const imageUrl = product.image || "https://images.pexels.com/photos/3618606/pexels-photo-3618606.jpeg?auto=compress&cs=tinysrgb&w=1200";

    return (
        <div className="bg-white min-h-screen pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <Link href="/agenyz" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {t('common.back') || 'Back'}
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Image Section */}
                    <div className="relative rounded-3xl overflow-hidden bg-gray-50 aspect-square shadow-lg">
                        <img 
                            src={imageUrl}
                            alt={translatedName}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Info Section */}
                    <div>
                        <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                            {t(`agenyz.category.${product.category}`) || product.category}
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight tracking-tight">
                            {translatedName}
                        </h1>
                        
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                            {translatedDesc}
                        </p>

                        <div className="mb-10 bg-gray-50 p-6 rounded-2xl">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">
                                {t('agenyz.features') || 'Key benefits'}
                            </h3>
                            <ul className="space-y-3">
                                {featuresList.map((feature, idx) => (
                                    <li key={idx} className="flex items-start text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex gap-4">
                             <a 
                                href="https://agenyz.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto"
                            >
                                <Button 
                                    size="xl" 
                                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white border-none rounded-xl shadow-md hover:shadow-lg transition-all"
                                >
                                    {t('agenyz.buyNow') || 'Buy on Agenyz'}
                                    <ExternalLink className="w-4 h-4 ml-2" />
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}