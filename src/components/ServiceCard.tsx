'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceItem } from '@/shared/types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { HugeiconsIcon } from '@hugeicons/react';
import { Clock01Icon, ArrowRight01Icon } from '@hugeicons/core-free-icons';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { t } = useLanguage();

  const details = (
     <div className="flex flex-col items-center text-center">
       {service.benefitsKeys && service.benefitsKeys.length > 0 && (
         <div className="mb-8 w-full">
           <h4 className="text-xl font-semibold tracking-tight text-foreground mb-4">{t('services.mainBenefits')}</h4>
           <ul className="space-y-3 flex flex-col items-center">
             {service.benefitsKeys.map((key, i) => (
               <li key={i} className="flex items-center text-lg text-muted-foreground">  
                 <span className="w-2 h-2 rounded-full bg-foreground mr-3 flex-shrink-0" />
                 {t(key)}
               </li>
             ))}
           </ul>
         </div>
       )}
       <div className="flex items-center justify-center gap-6 mt-8 p-6 bg-muted/50 rounded-2xl w-full">
          <div className="flex flex-col items-center">
             <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{t('common.duration')}</span>
             <span className="text-xl font-semibold text-foreground">{service.durations && service.durations.length > 0 ? `${service.durations[0]} ${t('common.minutes')}` : t('services.variableDuration')}</span>
          </div>
          <div className="w-px h-12 bg-muted"></div>
          <div className="flex flex-col items-center">
             <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{t('common.price')}</span>
             <span className="text-xl font-semibold text-foreground">{service.price ? `${service.price} €` : t('common.consultPrice')}</span>
          </div>
       </div>
     </div>
  );

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all hover:shadow-md border-border/50 group">
      {service.image && (
        <div className="relative w-full h-48 overflow-hidden bg-muted">
          <Image 
            src={service.image} 
            alt={t(service.titleKey)}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent" />
        </div>
      )}
      <CardHeader className={service.image ? 'pt-4 relative z-10' : ''}>
        <div className="flex justify-between items-start gap-4 mb-2">
          <CardTitle className="text-2xl font-bold leading-tight">
            {t(service.titleKey)}
          </CardTitle>
          <Badge variant="secondary" className="whitespace-nowrap">
            {service.price ? `${service.price} €` : t('common.consultPrice') || 'Consult'}
          </Badge>
        </div>
        <CardDescription className="text-base text-muted-foreground line-clamp-2">
          {t(service.descriptionKey)}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="grow space-y-6">
        {service.benefitsKeys && service.benefitsKeys.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {t('services.mainBenefits') || 'Main Benefits'}
            </h4>
            <ul className="space-y-2">
              {service.benefitsKeys.slice(0, 3).map((key, i) => (
                <li key={i} className="flex items-start text-sm text-foreground/80 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-3 shrink-0" />
                  {t(key)}
                </li>
              ))}
              {service.benefitsKeys.length > 3 && (
                <li className="flex items-start text-sm text-muted-foreground italic pl-4.5">
                  + {service.benefitsKeys.length - 3} {language === 'ru' ? 'еще' : language === 'es' ? 'más' : language === 'ca' ? 'més' : 'more'}
                </li>
              )}
            </ul>
          </div>
        )}

        <div className="flex items-center justify-between text-sm pt-4 border-t border-border/50">
          <div className="flex items-center gap-2 text-muted-foreground font-medium">
            <HugeiconsIcon icon={Clock01Icon} className="w-4 h-4 text-primary/70" />
            <span>
              {service.durations && service.durations.length > 0 
                ? `${service.durations[0]} ${t('common.minutes') || 'min'}` 
                : t('services.variableDuration') || 'Variable'}
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0 flex flex-col sm:flex-row gap-3">
        <Button asChild className="w-full sm:flex-1 rounded-full">
          <Link href={`/booking?service=${encodeURIComponent(t(service.titleKey))}`}>
            {t('nav.bookNow') || 'Book Now'}
          </Link>
        </Button>
        <Button asChild variant="outline" className="w-full sm:flex-1 rounded-full group/btn">
          <Link href={service.href}>
            {t('common.readMore') || 'Details'}
            <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
