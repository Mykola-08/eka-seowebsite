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
  
  const colorMap: Record<string, { text: string; dot: string; border: string }> = {
    orange: { text: 'text-orange-600', dot: 'bg-orange-500', border: 'hover:border-orange-200' },
    blue: { text: 'text-blue-600', dot: 'bg-blue-500', border: 'hover:border-blue-200' },
    green: { text: 'text-green-600', dot: 'bg-green-500', border: 'hover:border-green-200' },
    purple: { text: 'text-purple-600', dot: 'bg-purple-500', border: 'hover:border-purple-200' },
    pink: { text: 'text-pink-600', dot: 'bg-pink-500', border: 'hover:border-pink-200' },
    amber: { text: 'text-amber-600', dot: 'bg-amber-500', border: 'hover:border-amber-200' },
    red: { text: 'text-red-600', dot: 'bg-red-500', border: 'hover:border-red-200' },
  };

  const theme = colorMap[service.color] || { text: 'text-primary-700', dot: 'bg-primary-500', border: 'hover:border-gray-200' };

  return (
    <div className={`group h-full flex flex-col bg-white rounded-[2rem] overflow-hidden border border-gray-100 transition-all duration-300 ${theme.border} hover:shadow-lg hover:shadow-gray-100/50`}>
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
        {/* Helper text/subtitle in color */}
        <p className={`text-sm font-medium mb-3 ${theme.text}`}>
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
                  <span className={`w-1.5 h-1.5 rounded-full ${theme.dot} mt-2 mr-2 flex-shrink-0 opacity-60`} />
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
              className="w-full p-2.5 normal-case"
            >
              {t('common.readMore') || 'Read More'}
            </Button>
          </Link>
          <Link href="/booking" className="flex-1">
            <Button
              variant="primary"
              className="w-full p-2.5 normal-case shadow-none"
            >
              {t('nav.bookNow')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
