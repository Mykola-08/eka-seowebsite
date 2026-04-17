'use client';

import type React from 'react';
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
  return (
    <PageLayout
      hero={{
        title: 'Wellness Disclaimer',
        subtitle: 'Please read before booking or using any EKA Balance service',
      }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-8 py-12 space-y-8">

        {/* Top alert */}
        <div className="rounded-[2rem] border border-warning/30 bg-warning/10 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <Alert01Icon className="w-7 h-7 text-foreground shrink-0 mt-0.5" />
            <div>
              <p className="text-xl font-medium text-foreground mb-3">
                These are wellness and complementary services.
              </p>
              <p className="text-foreground/90 font-medium text-lg mb-4">
                Always consult your doctor before making any health decision.
              </p>
              <p className="text-foreground/90 font-medium">
                Consulta a tu médico antes de tomar ninguna decisión relacionada con tu salud.
              </p>
              <p className="text-foreground/80 mt-2">
                Consulteu el vostre metge abans de prendre cap decisió relacionada amb la vostra salut.
              </p>
            </div>
          </div>
        </div>

        {/* What EKA Balance is */}
        <Block icon={FavouriteIcon} title="What EKA Balance Is" color="blue">
          <p>
            EKA Balance offers complementary and alternative wellness services, including holistic massage, movement coaching, nutritional guidance, somatic bodywork, and integrative wellness sessions.
          </p>
          <p>
            These services are designed to <strong>support your overall wellbeing</strong> alongside — not instead of — conventional medicine. Our practitioners are trained wellness professionals, not licensed medical doctors.
          </p>
        </Block>

        {/* What it is NOT */}
        <Block icon={ShieldBanIcon} title="What EKA Balance Is Not" color="rose">
          <ul className="space-y-2">
            {[
              'EKA Balance does not provide medical diagnosis of any disease, disorder, or condition.',
              'EKA Balance does not provide medical treatment, prescription, or cure.',
              'EKA Balance sessions do not replace consultations with your physician, specialist, or licensed mental-health professional.',
              'No content on this website constitutes medical advice.',
              'EKA Balance does not claim to treat, cure, prevent, or mitigate any medical condition.',
            ].map(item => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-destructive shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Block>

        {/* Doctor consultation */}
        <Block icon={StethoscopeIcon} title="Always Consult Your Doctor First" color="amber">
          <p className="font-medium text-foreground">
            Before beginning any complementary or alternative wellness service, consult your licensed physician, especially if you:
          </p>
          <ul className="space-y-2 mt-2">
            {[
              'Have a pre-existing health condition or ongoing wellness concern',
              'Are currently taking prescribed medication',
              'Are pregnant or breastfeeding',
              'Have recently undergone surgery or a medical procedure',
              'Experience persistent, acute, or unexplained physical concerns',
              'Are under the care of a specialist (cardiologist, oncologist, psychiatrist, etc.)',
            ].map(item => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-foreground font-medium">
            Do not stop, reduce, or modify any prescribed healthcare plan based on anything received or read at EKA Balance.
          </p>
        </Block>

        {/* No liability */}
        <Block icon={InformationCircleIcon} title="Limitation of Liability" color="gray">
          <p>
            EKA Balance and its practitioners accept <strong>no medical or legal responsibility</strong> for any health outcomes — positive or negative — arising from:
          </p>
          <ul className="space-y-2 mt-2">
            {[
              'Decisions made without first consulting a licensed physician',
              'Any modification or discontinuation of prescribed medical care',
              'Individual variation in response to complementary services',
              'Pre-existing conditions not disclosed prior to sessions',
            ].map(item => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground/60 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-3">
            Results from complementary wellness services vary from person to person. No specific result is guaranteed.
          </p>
        </Block>

        {/* Emergency */}
        <Block icon={CallIcon} title="Medical Emergency" color="rose">
          <p className="font-medium text-destructive text-base">
            If you are experiencing a medical emergency, call emergency services immediately.
          </p>
          <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              { country: 'Spain (EU)', number: '112' },
              { country: 'General Emergency', number: '112' },
              { country: 'Crisis Line (ES)', number: '024' },
            ].map(({ country, number }) => (
              <div key={country} className="bg-card border border-border rounded-[2rem] p-3 text-center">
                <p className="text-2xl font-medium text-destructive">{number}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{country}</p>
              </div>
            ))}
          </div>
        </Block>

        {/* Footer note */}
        <div className="rounded-[2rem] bg-muted/40 border border-border p-6 text-sm text-foreground/80 space-y-3">
          <p>
            This disclaimer is provided in accordance with Spanish consumer protection law (Real Decreto Legislativo 1/2007), EU Directive 2011/83/EU on consumer rights, and applicable professional wellness practice standards.
          </p>
          <p>
            By booking or using any EKA Balance service, you confirm that you have read and understood this disclaimer.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/terms-of-service" className="text-primary hover:underline text-sm">Terms of Service</Link>
            <Link href="/privacy-policy" className="text-primary hover:underline text-sm">Privacy Policy</Link>
            <Link href="/booking" className="text-primary hover:underline text-sm">Contact Us & Book</Link>
          </div>
        </div>

      </div>
    </PageLayout>
  );
}
