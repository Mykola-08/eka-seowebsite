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

  const colorMap: Record<string, { dot: string; border: string }> = {
    orange: { dot: 'bg-orange-500', border: 'hover:border-orange-200' },
    blue: { dot: 'bg-blue-500', border: 'hover:border-blue-200' },
    green: { dot: 'bg-green-500', border: 'hover:border-green-200' },
    purple: { dot: 'bg-purple-500', border: 'hover:border-purple-200' },
    pink: { dot: 'bg-pink-500', border: 'hover:border-pink-200' },
    amber: { dot: 'bg-amber-500', border: 'hover:border-amber-200' },
    red: { dot: 'bg-red-500', border: 'hover:border-red-200' },
  };

  const theme = colorMap[service.color] || { dot: 'bg-accent', border: 'hover:border-gray-200' };

  return (
    <div className={`group h-full flex flex-col glassy-blue rounded-[2rem] overflow-hidden transition-all duration-300 ${theme.border}`}>
       <div className="relative h-48 sm:h-56 overflow-hidden m-2 rounded-[1.5rem]">
          <LazyImage
            src={service.image}
            alt={t(service.titleKey)}
            className="w-full h-full object-cover transition-transform duration-700 ease-out-quart group-hover:scale-105"
          />
        </div>
        
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="heading-3 mb-3">
          {t(service.titleKey)}
        </h3>
        
        <p className="text-body text-sm mb-6">
          {t(service.descriptionKey)}
        </p>

        {/* Bullet Points */}
        {service.benefitsKeys && service.benefitsKeys.length > 0 && (
          <ul className="space-y-3 mb-8">
            {service.benefitsKeys.map((key, i) => (
              <li key={i} className="flex items-start text-sm text-gray-700">
                <span className={`w-2 h-2 rounded-full ${theme.dot} mt-1.5 mr-3 flex-shrink-0`} />
                {t(key)}
              </li>
            ))}
          </ul>
        )}

        {/* Expected Result Box */}
        {service.resultKey && (
             <div className="bg-accent-light/30 rounded-xl p-4 mb-6 border border-accent/20">
                <div className="flex flex-col gap-1">
                     <span className="text-xs font-bold text-accent-dark uppercase tracking-wide opacity-80">
                         {t('common.expectedResult') || 'Expected Result:'}
                     </span>
                     <p className="text-sm font-medium text-gray-900">
                         {t(service.resultKey)}
                     </p>
                </div>
            </div>
        )}
        
        {/* Price and Duration Row */}
         <div className="flex items-center justify-between mb-8 mt-auto text-sm text-gray-500">
            <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{service.duration || '1 h'}</span>
            </div>
             <span className="text-xl font-medium text-gray-900">
                {service.price ? `${service.price} EUR` : 'Ask price'}
            </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <Link href="/booking" className="flex-1">
             <Button 
                variant="primary"
                className="w-full py-3 border-none normal-case"
             >
               {t('nav.bookNow')}
            </Button>
          </Link>
          <Link href={service.href} className="flex-1">
             <Button 
                variant="outline"
                className="w-full py-3 normal-case"
                >
               {t('common.readMore') || 'Read More'}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

