'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceItem } from '@/shared/types';
import LazyImage from '@/components/LazyImage';

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { t } = useLanguage();

  return (
    <div className="group h-full flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-6 border border-gray-100/50">
      <div className="relative h-56 sm:h-64 overflow-hidden rounded-2xl mb-6">
        <LazyImage
          src={service.image}
          alt={t(service.titleKey)}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col flex-grow">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 tracking-tight">
          {t(service.titleKey)}
        </h3>

        <p className="text-sm font-medium text-blue-600 mb-4 uppercase tracking-wide">
          {t(service.subtitleKey)}
        </p>

        <p className="text-base text-gray-600 mb-6 line-clamp-3 leading-relaxed">
          {t(service.descriptionKey)}
        </p>

        {/* Benefits List */}
        {service.benefitsKeys && service.benefitsKeys.length > 0 && (
          <div className="mb-8">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
              {t('services.mainBenefits') || 'Key Benefits'}
            </h4>
            <ul className="space-y-2">
              {service.benefitsKeys.slice(0, 4).map((key, i) => (
                <li key={i} className="flex items-start text-sm text-gray-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 mr-2 flex-shrink-0" />
                  {t(key)}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/booking" className="w-full">
            <Button
              variant="primary"
              className="w-full"
            >
              {t('nav.bookNow')}
            </Button>
          </Link>
          <Link href={service.href} className="w-full">
            <Button
              variant="outline"
              className="w-full"
            >
              {t('common.readMore') || 'Learn more'}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
