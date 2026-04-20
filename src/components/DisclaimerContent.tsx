'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/PageLayout';
import { Alert01Icon, FavouriteIcon, ShieldBanIcon, StethoscopeIcon, InformationCircleIcon, CallIcon } from '@/lib/icons';
import Link from 'next/link';

const Block = ({ icon: Icon, title, children, color = 'amber' }: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
  color?: 'amber' | 'blue' | 'rose' | 'gray';
}) => {
  const styles: Record<string, string> = {
    amber: 'border border-warning/30 bg-warning/10',
    blue: 'border border-border bg-primary/5',
    rose: 'border border-destructive/30 bg-destructive/5',
    gray: 'border border-border bg-muted/40',
  };
  const iconStyles: Record<string, string> = {
    amber: 'text-warning-foreground bg-warning/20',
    blue: 'text-primary bg-primary/10',
    rose: 'text-destructive bg-destructive/10',
    gray: 'text-foreground/80 bg-muted',
  };
  return (
    <div className={`rounded-[2rem] p-6 sm:p-8 ${styles[color]}`}>
      <div className="flex items-start gap-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${iconStyles[color]}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base font-medium text-foreground mb-3">{title}</h3>
          <div className="text-sm text-foreground/80 leading-relaxed space-y-2">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default function DisclaimerContent() {
  const { t } = useLanguage();

  const notItems = [
    t('legal.disclaimer.not.item1'),
    t('legal.disclaimer.not.item2'),
    t('legal.disclaimer.not.item3'),
    t('legal.disclaimer.not.item4'),
    t('legal.disclaimer.not.item5'),
  ];

  const consultItems = [
    t('legal.disclaimer.consult.item1'),
    t('legal.disclaimer.consult.item2'),
    t('legal.disclaimer.consult.item3'),
    t('legal.disclaimer.consult.item4'),
    t('legal.disclaimer.consult.item5'),
    t('legal.disclaimer.consult.item6'),
  ];

  const liabilityItems = [
    t('legal.disclaimer.liability.item1'),
    t('legal.disclaimer.liability.item2'),
    t('legal.disclaimer.liability.item3'),
    t('legal.disclaimer.liability.item4'),
  ];

  const emergencyNumbers = [
    { country: t('legal.disclaimer.emergency.spain'), number: '112' },
    { country: t('legal.disclaimer.emergency.general'), number: '112' },
    { country: t('legal.disclaimer.emergency.crisis'), number: '024' },
  ];

  return (
    <PageLayout
      hero={{
        title: t('footer.disclaimer'),
        subtitle: t('legal.disclaimer.subtitle'),
      }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-8 py-12 space-y-8">

        {/* Top alert */}
        <div className="rounded-[2rem] border border-warning/30 bg-warning/10 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <Alert01Icon className="w-7 h-7 text-foreground shrink-0 mt-0.5" />
            <div>
              <p className="text-xl font-medium text-foreground mb-3">
                {t('common.healthDisclaimerTitle')}
              </p>
              <p className="text-foreground/90 font-medium text-lg mb-4">
                {t('common.consultDoctor')}
              </p>
            </div>
          </div>
        </div>

        {/* What EKA Balance is */}
        <Block icon={FavouriteIcon} title={t('legal.disclaimer.what.title')} color="blue">
          <p>{t('legal.disclaimer.what.body1')}</p>
          <p>{t('legal.disclaimer.what.body2')}</p>
        </Block>

        {/* What it is NOT */}
        <Block icon={ShieldBanIcon} title={t('legal.disclaimer.not.title')} color="rose">
          <ul className="space-y-2">
            {notItems.map(item => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-destructive shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Block>

        {/* Doctor consultation */}
        <Block icon={StethoscopeIcon} title={t('legal.disclaimer.consult.title')} color="amber">
          <p className="font-medium text-foreground">{t('legal.disclaimer.consult.intro')}</p>
          <ul className="space-y-2 mt-2">
            {consultItems.map(item => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-foreground font-medium">{t('legal.disclaimer.consult.warning')}</p>
        </Block>

        {/* No liability */}
        <Block icon={InformationCircleIcon} title={t('legal.disclaimer.liability.title')} color="gray">
          <p>{t('legal.disclaimer.liability.intro')}</p>
          <ul className="space-y-2 mt-2">
            {liabilityItems.map(item => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground/60 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-3">{t('legal.disclaimer.liability.vary')}</p>
        </Block>

        {/* Emergency */}
        <Block icon={CallIcon} title={t('legal.disclaimer.emergency.title')} color="rose">
          <p className="font-medium text-destructive text-base">{t('legal.disclaimer.emergency.call')}</p>
          <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
            {emergencyNumbers.map(({ country, number }) => (
              <div key={country} className="bg-card border border-border rounded-[2rem] p-3 text-center">
                <p className="text-2xl font-medium text-destructive">{number}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{country}</p>
              </div>
            ))}
          </div>
        </Block>

        {/* Footer note */}
        <div className="rounded-[2rem] bg-muted/40 border border-border p-6 text-sm text-foreground/80 space-y-3">
          <p>{t('legal.disclaimer.footer.law')}</p>
          <p>{t('legal.disclaimer.footer.confirm')}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/terms-of-service" className="text-primary hover:underline text-sm">{t('legal.disclaimer.links.terms')}</Link>
            <Link href="/privacy-policy" className="text-primary hover:underline text-sm">{t('legal.disclaimer.links.privacy')}</Link>
            <Link href="/booking" className="text-primary hover:underline text-sm">{t('legal.disclaimer.links.booking')}</Link>
          </div>
        </div>

      </div>
    </PageLayout>
  );
}
