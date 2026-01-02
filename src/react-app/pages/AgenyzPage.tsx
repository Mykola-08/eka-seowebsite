import Layout from '@/react-app/components/Layout';
import SEOHead from '@/react-app/components/SEOHead';
import { Sparkles, Zap, Shield, Brain } from 'lucide-react';
import { useBooking } from '@/react-app/hooks/useBooking';
import { useLanguage } from '@/react-app/hooks/useLanguage';

export default function AgenyzPage() {
    const { navigateToBooking } = useBooking();
    const { t } = useLanguage();

    return (
        <Layout>
            <SEOHead
                title="Agenyz - Cellular Nutrition"
                description="Biohacking and advanced supplements for cellular regeneration."
                keywords="agenyz, supplements, biohacking, cellular nutrition"
            />

            {/* Hero Section */}
            <section className="py-12 sm:py-20 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
                                <span className="text-blue-700 font-medium text-sm">Biohacking & Nutrition</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
                                {t('agenyz.page.title') || 'Agenyz Cellular Nutrition'}
                            </h1>

                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                {t('agenyz.page.subtitle') || 'Advanced supplements for deep cellular regeneration and vitality.'}
                            </p>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                {t('agenyz.page.description') || 'Discover the power of biohacking with Agenyz. These supplements are designed to work at the cellular level, restoring energy, immunity, and youthfulness from the inside out.'}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={navigateToBooking}
                                    className="bg-[#FFB405] hover:bg-[#e8a204] text-[#000035] font-semibold px-8 py-4 rounded-full transition-colors duration-200"
                                >
                                    {t('common.bookNow')}
                                </button>
                                <a
                                    href="https://agenyz.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-colors duration-200 text-center"
                                >
                                    Visit Agenyz Store
                                </a>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="relative">
                                <img
                                    src="https://images.pexels.com/photos/3618606/pexels-photo-3618606.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                    alt="Advanced supplements and cellular nutrition"
                                    className="w-full h-[400px] sm:h-[500px] object-cover rounded-3xl shadow-2xl"
                                />
                                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                                        <span className="text-sm font-medium text-gray-700">Available for Order</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
                            Why Agenyz?
                        </h2>
                        <p className="text-xl text-gray-600">
                            Science-backed benefits for your body and mind.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-2xl">
                            <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                                <Zap className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('agenyz.benefits.energy') || 'Infinite Energy'}</h3>
                                <p className="text-gray-600">Restores mitochondrial function for sustained daily energy.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-2xl">
                            <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                                <Shield className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('agenyz.benefits.immunity') || 'Immune Defense'}</h3>
                                <p className="text-gray-600">Strengthens your body's natural defense systems.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-2xl">
                            <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                                <Brain className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('agenyz.benefits.cell') || 'Cognitive Clarity'}</h3>
                                <p className="text-gray-600">Enhances focus, memory, and mental performance.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-2xl">
                            <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                                <Sparkles className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('agenyz.benefits.antiaging') || 'Anti-Aging Effect'}</h3>
                                <p className="text-gray-600">Combats oxidative stress and slows down aging processes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
                        Ready to upgrade your health?
                    </h2>
                    <div className="flex justify-center gap-4">
                        <button
                            onClick={navigateToBooking}
                            className="bg-[#FFB405] hover:bg-[#e8a204] text-[#000035] font-semibold px-8 py-4 rounded-full transition-colors duration-200"
                        >
                            Consult with Elena
                        </button>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
