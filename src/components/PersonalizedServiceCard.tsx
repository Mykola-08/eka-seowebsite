'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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
    <Card className="group h-full flex flex-col bg-white rounded-3xl overflow-hidden   transition-shadow duration-300 border border-gray-100/50">
       <div className="p-6 sm:p-8 pb-0">
          <div className="relative h-64 sm:h-72 overflow-hidden rounded-2xl mb-6">
              <LazyImage
                src={service.image}
                alt={t(service.titleKey)}
                className="w-full h-full object-cover"
              />
            </div>
       </div>
        
      <CardHeader className="px-6 sm:px-8 pt-0 pb-2">
        <CardTitle className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight">
          {t(service.titleKey)}
        </CardTitle>
      </CardHeader>
        
      <CardContent className="px-6 sm:px-8 py-4 flex-grow flex flex-col">
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
         <div className="flex items-center justify-between mt-auto text-sm font-medium text-gray-500 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{service.duration ? `${service.duration} ${t('common.minutes')}` : `60 ${t('common.minutes')}`}</span>
            </div>
             <span className="text-lg text-gray-900 font-semibold">
                {service.price ? `${service.price} EUR` : t('common.consultPrice')}
            </span>
        </div>
      </CardContent>

      <CardFooter className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
          <Link href={`/booking?service=${encodeURIComponent(t(service.titleKey))}`} className="w-full">
             <Button 
                variant="default"
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
      </CardFooter>
    </Card>
  );
}
