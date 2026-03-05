'use client';

import { Clock, Tag } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceItem } from '@/shared/types';
import LazyImage from '@/components/LazyImage';

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { t } = useLanguage();

  return (
    <Card className="group h-full flex flex-col rounded-3xl overflow-hidden   transition-shadow duration-300 border border-gray-100/50 bg-white">
      <div className="p-6 pb-0">
        <div className="relative h-56 sm:h-64 overflow-hidden rounded-2xl mb-6">
          <LazyImage
            src={service.image}
            alt={t(service.titleKey)}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <CardHeader className="px-6 pt-0 pb-2">
        <CardTitle className="text-xl sm:text-2xl font-semibold text-gray-900 tracking-tight mb-1">
          {t(service.titleKey)}
        </CardTitle>
        <CardDescription className="text-sm font-medium text-blue-600 uppercase tracking-wide">
          {t(service.subtitleKey)}
        </CardDescription>
      </CardHeader>

      <CardContent className="px-6 py-4 flex-grow flex flex-col justify-between">
        <div className="mb-6">
          <p className="text-base text-gray-600 line-clamp-3 leading-relaxed mb-6">
            {t(service.descriptionKey)}
          </p>

          {/* Benefits List */}
          {service.benefitsKeys && service.benefitsKeys.length > 0 && (
            <div className="mb-8">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                {t('services.mainBenefits')}
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
        </div>

        {/* Price and Duration Row */}
        <div className="flex items-center justify-between mt-auto text-sm font-medium text-gray-500 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{service.durations && service.durations.length > 0 ? `${service.durations[0]} ${t('common.minutes')}` : t('services.variableDuration')}</span>
            </div>
             <span className="text-lg text-gray-900 font-semibold flex items-center gap-1.5">
                <Tag className="w-4 h-4 text-primary" />
                {service.price ? `${service.price} €` : t('common.consultPrice')}
            </span>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
          <Link href={`/booking?service=${encodeURIComponent(t(service.titleKey))}`} className="w-full">
            <Button
              variant="default"
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
              {t('common.readMore')}
            </Button>
          </Link>
      </CardFooter>
    </Card>
  );
}
