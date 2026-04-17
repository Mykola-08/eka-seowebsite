'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceItem } from '@/shared/types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Clock01Icon, ArrowRight01Icon } from '@/lib/icons';

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { t } = useLanguage();

  return (
    <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-primary/40 border-border group">
      {service.image && (
        <div className="relative w-full aspect-4/3 -mt-6 overflow-hidden bg-muted">
          <Image
            src={service.image}
            alt={t(service.titleKey)}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <CardHeader>
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
              {service.durations && service.durations.length > 0 
                ? `${service.durations[0]} ${t('common.minutes') || 'min'}` 
                : t('services.variableDuration') || 'Variable'}
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-4 pb-6 flex flex-col sm:flex-row gap-3 border-t border-border/10 mt-auto">
        <Button asChild className="w-full sm:flex-1 shadow-none font-medium">
          <Link href={`/booking?service=${encodeURIComponent(t(service.titleKey))}`}>
            {t('nav.bookNow') || 'Book Now'}
          </Link>
        </Button>
        <Button asChild variant="outline" className="w-full sm:flex-1 shadow-none font-medium group/btn">
          <Link href={service.href}>
            {t('common.readMore') || 'Details'}
            <ArrowRight01Icon className="ml-2 w-4 h-4 text-muted-foreground group-hover/btn:translate-x-1 group-hover/btn:text-foreground transition-all" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
