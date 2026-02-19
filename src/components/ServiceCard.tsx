'use client';

import { Button } from 'keep-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceItem } from '@/shared/types';
import LazyImage from '@/components/LazyImage';

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { t } = useLanguage();
  
  // Minimalist palette - replacing multi-color system with unified EKA accents
  const palette = { text: 'text-primary-700', dot: 'bg-primary-500' };

  return (
    <div className="group h-full flex flex-col bg-white rounded-[2rem] overflow-hidden border border-gray-100 transition-all duration-300 hover:border-gray-200 hover:shadow-lg hover:shadow-gray-100/50">
      <div className="relative h-48 sm:h-56 overflow-hidden m-2 rounded-[1.5rem]">
        <LazyImage
          src={service.image}
          alt={t(service.titleKey)}
          className="w-full h-full object-cover transition-transform duration-700 ease-out-quart group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 heading-3">
          {t(service.titleKey)}
        </h3>
        {/* Helper text/subtitle in orange/color */}
        <p className={`text-sm font-medium mb-3 ${palette.text}`}>
          {t(service.subtitleKey)}
        </p>

        <p className="text-body text-sm mb-6 line-clamp-3 text-gray-500">
          {t(service.descriptionKey)}
        </p>

        {/* Benefits List */}
        {service.benefitsKeys && service.benefitsKeys.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              {t('services.mainBenefits') || 'Key Benefits'}
            </h4>
            <ul className="space-y-2">
              {service.benefitsKeys.slice(0, 4).map((key, i) => (
                <li key={i} className="flex items-start text-sm text-gray-600">
                  <span className={`w-1.5 h-1.5 rounded-full ${palette.dot} mt-2 mr-2 flex-shrink-0 opacity-60`} />
                  {t(key)}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-auto flex gap-3 pt-4">
          <Link href={service.href} className="flex-1">
            <Button
              variant="outline"
              className="w-full btn btn-sm rounded-full p-2.5 normal-case border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900 bg-transparent"
            >
              {t('common.readMore') || 'Read More'}
            </Button>
          </Link>
          <Link href="/booking" className="flex-1">
            <Button
              className="w-full btn btn-sm rounded-full p-2.5 normal-case border-none font-medium bg-gray-900 text-white hover:bg-gray-800 shadow-none"
            >
              {t('nav.bookNow')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
