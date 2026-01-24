'use client';

import { ArrowRight, HeartPulse, Salad } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import { Button } from 'keep-react';

export default function FamiliesContent() {
  const { t } = useLanguage();

  const Hero = (
      <section className="py-12 sm:py-20 bg-gradient-to-br from-white via-green-50/30 to-emerald-50/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-6">
                <span className="text-green-700 font-medium text-sm">{t('nav.personalizedServices')}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
                {t('elena.target.families.title')}
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                {t('elena.target.families.desc')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking">
                   <Button size="xl" className="btn btn-primary bg-[#FFB405] hover:bg-[#e8a204] text-[#000035]">
                      {t('common.reserveSession')}
                   </Button>
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?w=1920&h=1080&fit=crop"
                  alt={t('elena.target.families.title')}
                  className="w-full h-[400px] sm:h-[500px] object-cover rounded-[2.5rem] shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  );

  return (
    <PageLayout>
      {Hero}
      
      {/* Recommended Services - Added for better UX */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-16">
              <h2 className="heading-2 mb-4 text-gray-900">
                Servicios Recomendados
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
                Apoyo integral para el bienestar de toda la familia.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
               {/* Kinesiology */}
               <div className="group relative bg-white rounded-3xl border border-gray-100 hover:border-green-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden">
                     <img 
                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" 
                        alt="Kinesiología"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                     />
                  </div>
                  <div className="p-8">
                     <div className="flex items-center gap-3 mb-4 text-green-600">
                        <div className="p-2 bg-green-50 rounded-full">
                            <HeartPulse className="w-6 h-6" />
                        </div>
                        <span className="font-medium">Bienestar Familiar</span>
                     </div>
                     <h3 className="text-2xl font-light text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                        {t('services.kinesiology.title')}
                     </h3>
                     <p className="text-gray-600 mb-8 font-light line-clamp-3">
                        {t('services.kinesiology.shortDesc')}
                     </p>
                     <Link href="/services/kinesiology" className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors">
                        {t('common.moreInfo')} <ArrowRight className="w-5 h-5 ml-2" />
                     </Link>
                  </div>
               </div>

               {/* Nutrition */}
               <div className="group relative bg-white rounded-3xl border border-gray-100 hover:border-green-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden">
                     <img 
                        src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop" 
                        alt="Nutrición"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                     />
                  </div>
                  <div className="p-8">
                     <div className="flex items-center gap-3 mb-4 text-green-600">
                        <div className="p-2 bg-green-50 rounded-full">
                            <Salad className="w-6 h-6" />
                        </div>
                        <span className="font-medium">Hábitos Saludables</span>
                     </div>
                     <h3 className="text-2xl font-light text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                        {t('services.nutrition.title')}
                     </h3>
                     <p className="text-gray-600 mb-8 font-light line-clamp-3">
                        {t('services.nutrition.shortDesc')}
                     </p>
                     <Link href="/services/nutrition" className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors">
                        {t('common.moreInfo')} <ArrowRight className="w-5 h-5 ml-2" />
                     </Link>
                  </div>
               </div>
            </div>
        </div>
      </section>
    </PageLayout>
  );
}
