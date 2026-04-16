'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceItem } from '@/shared/types';
import { ServiceBentoItem } from '@/components/ui/service-bento';

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { t } = useLanguage();

  const details = (
     <div className="flex flex-col items-center text-center">
       {service.benefitsKeys && service.benefitsKeys.length > 0 && (
         <div className="mb-8 w-full">
           <h4 className="text-xl font-semibold tracking-tight text-gray-900 mb-4">{t('services.mainBenefits')}</h4>
           <ul className="space-y-3 flex flex-col items-center">
             {service.benefitsKeys.map((key, i) => (
               <li key={i} className="flex items-center text-lg text-gray-600">  
                 <span className="w-2 h-2 rounded-full bg-black mr-3 flex-shrink-0" />
                 {t(key)}
               </li>
             ))}
           </ul>
         </div>
       )}
       <div className="flex items-center justify-center gap-6 mt-8 p-6 bg-gray-50 rounded-2xl w-full">
          <div className="flex flex-col items-center">
             <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">{t('common.duration')}</span>
             <span className="text-xl font-semibold text-gray-900">{service.durations && service.durations.length > 0 ? `${service.durations[0]} ${t('common.minutes')}` : t('services.variableDuration')}</span>
          </div>
          <div className="w-px h-12 bg-gray-200"></div>
          <div className="flex flex-col items-center">
             <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">{t('common.price')}</span>
             <span className="text-xl font-semibold text-gray-900">{service.price ? `${service.price} €` : t('common.consultPrice')}</span>
          </div>
       </div>
     </div>
  );

  return (
    <ServiceBentoItem 
        title={t(service.titleKey)}
        description={t(service.descriptionKey)}
        image={service.image}
        details={details}
        readMoreUrl={service.href}
    />
  );
}
