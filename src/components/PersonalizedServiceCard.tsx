'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { PersonalizedServiceItem } from '@/shared/types';
import LazyImage from '@/components/LazyImage';
import { Clock } from 'lucide-react';

interface PersonalizedServiceCardProps {
  service: PersonalizedServiceItem;
}

export default function PersonalizedServiceCard({ service }: PersonalizedServiceCardProps) {
  const { t } = useLanguage();

  return (
    <div className="group h-full flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-6 sm:p-8 border border-gray-100/50">
       <div className="relative h-64 sm:h-72 overflow-hidden rounded-2xl mb-6">
          <LazyImage
            src={service.image}
            alt={t(service.titleKey)}
            className="w-full h-full object-cover transition-transform duration-700 ease-out-quart group-hover:scale-105"
          />
        </div>
        
      <div className="flex flex-col flex-grow">
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3 tracking-tight">
          {t(service.titleKey)}
        </h3>
        
        <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed font-normal">
          {t(service.descriptionKey)}
        </p>

        {/* Bullet Points */}
        {service.benefitsKeys && service.benefitsKeys.length > 0 && (
          <ul className="space-y-3 mb-8">
            {service.benefitsKeys.map((key, i) => (
              <li key={i} className="flex items-start text-sm sm:text-base text-gray-700 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 mr-3 flex-shrink-0" />
                {t(key)}
              </li>
            ))}
          </ul>
        )}

        {/* Expected Result Box - Styled cleanly */}
        {service.resultKey && (
             <div className="bg-secondary/50 rounded-xl p-5 mb-8 border border-gray-100">
                <div className="flex flex-col gap-1">
                     <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                         {t('common.expectedResult') || 'Expected Result:'}
                     </span>
                     <p className="text-sm sm:text-base font-semibold text-gray-900">
                         {t(service.resultKey)}
                     </p>
                </div>
            </div>
        )}
        
        {/* Price and Duration Row */}
         <div className="flex items-center justify-between mb-6 mt-auto text-sm font-medium text-gray-500">
            <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{service.duration || '1 h'}</span>
            </div>
             <span className="text-lg text-gray-900 font-semibold">
                {service.price ? `${service.price} EUR` : 'Ask price'}
            </span>
        </div>

        {/* Buttons - Primary & Outline Combination */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/booking" className="w-full">
             <Button 
                variant="primary"
                size="lg"
                className="w-full text-base font-medium"
             >
               {t('nav.bookNow')}
            </Button>
          </Link>
          <Link href={service.href} className="w-full">
             <Button 
                variant="outline"
                size="lg"
                className="w-full text-base font-medium"
                >
               {t('common.readMore') || 'Learn more'}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
