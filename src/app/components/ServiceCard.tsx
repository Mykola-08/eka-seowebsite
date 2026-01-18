'use client';

import { Button } from 'keep-react';
import Link from 'next/link';
import { useLanguage } from '@/react-app/contexts/LanguageContext';
import { ServiceItem } from '@/shared/types';
import LazyImage from '@/react-app/components/LazyImage';

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { t } = useLanguage();

  return (
    <div className="card h-full flex flex-col hover:shadow-xl transition-all duration-300 ease-out-quart">
       <div className="relative h-48 sm:h-56 overflow-hidden">
          <LazyImage
            src={service.image}
            alt={t(service.titleKey)}
            className="w-full h-full object-cover transition-transform duration-700 ease-out-quart hover:scale-105"
          />
        </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2 heading-3">
          {t(service.titleKey)}
        </h3>
        {/* Helper text/subtitle in orange/color */}
         <p className={`text-sm font-medium mb-3 text-${service.color}-600`}>
          {t(service.subtitleKey)}
        </p>
        
        <p className="text-body text-sm mb-6 line-clamp-3">
          {t(service.descriptionKey)}
        </p>

        {/* Benefits List */}
        {service.benefitsKeys && service.benefitsKeys.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">
              {t('services.mainBenefits') || 'Key Benefits'}
            </h4>
            <ul className="space-y-2">
              {service.benefitsKeys.slice(0, 4).map((key, i) => (
                <li key={i} className="flex items-start text-sm text-gray-600">
                  <span className={`w-1.5 h-1.5 rounded-full bg-${service.color}-500 mt-1.5 mr-2 flex-shrink-0`} />
                  {t(key)}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-auto flex gap-3 pt-4 border-t border-gray-100">
             <Link href={service.href} className="flex-1">
            <Button 
                variant="outline"
                className="w-full btn btn-sm btn-outline rounded-xl p-2.5 normal-case"
                >
                {t('common.readMore') || 'Read More'}
            </Button>
          </Link>
          <Link href="/booking" className="flex-1">
             <Button 
                className="w-full btn btn-sm btn-accent rounded-xl p-2.5 normal-case border-none"
             >
              {t('nav.bookNow')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
