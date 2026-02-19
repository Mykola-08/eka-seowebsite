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
  
  // Muted color palette per service — headline text + benefit dot
  const colorMap: Record<string, { text: string; dot: string }> = {
    orange:  { text: 'text-amber-700',   dot: 'bg-amber-400' },
    blue:    { text: 'text-blue-700',    dot: 'bg-blue-400' },
    green:   { text: 'text-emerald-700', dot: 'bg-emerald-400' },
    purple:  { text: 'text-violet-700',  dot: 'bg-violet-400' },
    pink:    { text: 'text-rose-700',    dot: 'bg-rose-400' },
  };
  const palette = colorMap[service.color] || { text: 'text-gray-700', dot: 'bg-gray-400' };

  return (
    <div className="h-full flex flex-col bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm shadow-gray-100/50">
      <div className="relative h-48 sm:h-56 overflow-hidden m-2 rounded-[1.5rem]">
        <LazyImage
          src={service.image}
          alt={t(service.titleKey)}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className={`text-xl font-semibold mb-2 heading-3 ${palette.text}`}>
          {t(service.titleKey)}
        </h3>
        {/* Helper text/subtitle */}
        <p className="text-sm font-medium mb-3 text-gray-500">
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
            <Button variant="outline" size="sm" className="w-full">
              {t('common.readMore') || 'Read More'}
            </Button>
          </Link>
          <Link href="/booking" className="flex-1">
            <Button size="sm" className="w-full">
              {t('nav.bookNow')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
