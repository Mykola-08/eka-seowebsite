'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { PersonalizedServiceItem } from '@/shared/types';
import { ServiceBentoItem } from '@/components/ui/service-bento';
import { Clock } from 'lucide-react';

interface PersonalizedServiceCardProps {
  service: PersonalizedServiceItem;
}

export default function PersonalizedServiceCard({ service }: PersonalizedServiceCardProps) {
  const { t } = useLanguage();

  const details = (
    <>
      {service.benefitsKeys && service.benefitsKeys.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold tracking-wider text-gray-400 uppercase mb-2.5">{t('services.mainBenefits') || 'Main Benefits'}</h4>
          <ul className="space-y-1.5">
            {service.benefitsKeys.map((key, i) => (
              <li key={i} className="flex items-start text-sm text-gray-600">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 mr-2.5 flex-shrink-0" />
                {t(key)}
              </li>
            ))}
          </ul>
        </div>
      )}

      {service.resultKey && (
        <div className="bg-gray-50 rounded-xl p-4 mb-4 border border-gray-100">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest block mb-1">
            {t('common.expectedResult') || 'Expected Result'}
          </span>
          <p className="text-sm font-semibold text-gray-900">{t(service.resultKey)}</p>
        </div>
      )}

      <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-100 rounded-xl mt-auto">
        <div className="flex flex-col gap-0.5">
          <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">{t('common.duration') || 'Duration'}</span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-semibold text-gray-900">{service.duration ? `${service.duration} ${t('common.minutes') || 'min'}` : `60 ${t('common.minutes') || 'min'}`}</span>
          </div>
        </div>
        <div className="flex flex-col items-end gap-0.5">
          <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">{t('common.price') || 'Price'}</span>
          <span className="text-base font-semibold text-gray-900">{service.price ? `${service.price} €` : t('common.consultPrice')}</span>
        </div>
      </div>
    </>
  );

  return (
    <ServiceBentoItem 
        title={t(service.titleKey)}
        description={t(service.descriptionKey)}
        image={service.image}
        details={details}
        bookUrl={`/booking?service=${encodeURIComponent(t(service.titleKey))}`}
        bookText={t('nav.bookNow') || 'Book Now'}
        readMoreUrl={service.href}
    />
  );
}
