'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { PersonalizedServiceItem } from '@/shared/types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock01Icon, ArrowRight01Icon } from '@/lib/icons';

interface PersonalizedServiceCardProps {
  service: PersonalizedServiceItem;
}

export default function PersonalizedServiceCard({ service }: PersonalizedServiceCardProps) {
  const { t } = useLanguage();

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-primary/40 border-border group pt-0">
      {service.image && (
        <div className="relative w-full aspect-video overflow-hidden bg-muted border-b border-border rounded-t-apple">
          <Image 
            src={service.image} 
            alt={t(service.titleKey)}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <CardHeader className={service.image ? 'pt-5' : ''}>
        <div className="flex justify-between items-start gap-4 mb-2">
          <CardTitle className="text-2xl font-medium leading-tight">
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
        {service.resultKey && (
          <div className="bg-muted/40 p-4 rounded-apple mb-4 border border-border/40">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest block mb-1">
              {t('common.expectedResult') || 'Expected Result'}
            </span>
            <p className="text-sm font-medium text-foreground">{t(service.resultKey)}</p>
          </div>
        )}

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
            </ul>
          </div>
        )}

        <div className="flex items-center justify-between text-sm pt-4 border-t border-border/50">
          <div className="flex items-center gap-2 text-muted-foreground font-medium">
            <Clock01Icon className="w-4 h-4 text-primary/70" />
            <span>
              {service.duration 
                ? `${service.duration} ${t('common.minutes') || 'min'}` 
                : `60 ${t('common.minutes') || 'min'}`}
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
        {service.href && (
          <Button asChild variant="outline" className="w-full sm:flex-1 rounded-full group/btn">
            <Link href={service.href}>
              {t('common.readMore') || 'Details'}
              <ArrowRight01Icon className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
