'use client';

import PageLayout from '@/components/PageLayout';
import { AlertTriangle, Stethoscope, Heart, Phone, ShieldOff, Info } from '@/lib/icons';
import Link from 'next/link';

const Block = ({ icon: Icon, title, children, color = 'amber' }: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  color?: 'amber' | 'blue' | 'rose' | 'gray';
}) => {
  const styles: Record<string, string> = {
    amber: 'border-amber-200 bg-amber-50',
    blue: 'border-blue-100 bg-blue-50/40',
    rose: 'border-rose-100 bg-rose-50/40',
    gray: 'border-gray-100 bg-gray-50',
  };
  const iconStyles: Record<string, string> = {
    amber: 'text-amber-600 bg-amber-100',
    blue: 'text-blue-600 bg-blue-100',
    rose: 'text-rose-600 bg-rose-100',
    gray: 'text-gray-600 bg-gray-100',
  };
  return (
    <div className={`rounded-2xl border p-6 sm:p-8 ${styles[color]}`}>
      <div className="flex items-start gap-4">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${iconStyles[color]}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base font-bold text-gray-900 mb-3">{title}</h3>
          <div className="text-sm text-gray-700 leading-relaxed space-y-2">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default function DisclaimerContent() {
  return (
    <PageLayout
      hero={{
        title: 'Alternative Therapy Disclaimer',
        subtitle: 'Please read before booking or using any EKA Balance service',
      }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-8 py-12 space-y-8">

        {/* Top alert */}
        <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-7 h-7 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xl font-bold text-amber-900 mb-3">
                These are not medical services.
              </p>
              <p className="text-amber-800 font-semibold text-lg mb-4">
                Always consult your doctor before making any health decision.
              </p>
              <p className="text-amber-800 font-semibold">
                Consulta a tu médico antes de tomar ninguna decisión relacionada con tu salud.
              </p>
              <p className="text-amber-700 mt-2">
                Consulteu el vostre metge abans de prendre cap decisió relacionada amb la vostra salut.
              </p>
            </div>
          </div>
        </div>

        {/* What EKA Balance is */}
        <Block icon={Heart} title="What EKA Balance Is" color="blue">
          <p>
            EKA Balance offers complementary and alternative wellness services, including therapeutic massage, kinesiology, nutritional coaching, somatic bodywork, and integrative wellness sessions.
          </p>
          <p>
            These services are designed to <strong>support your overall wellbeing</strong> alongside — not instead of — conventional medicine. Our practitioners are trained wellness professionals, not licensed medical doctors.
          </p>
        </Block>

        {/* What it is NOT */}
        <Block icon={ShieldOff} title="What EKA Balance Is Not" color="rose">
          <ul className="space-y-2">
            {[
              'EKA Balance does not provide medical diagnosis of any disease, disorder, or condition.',
              'EKA Balance does not provide medical treatment, prescription, or cure.',
              'EKA Balance sessions do not replace consultations with your physician, specialist, or licensed mental-health professional.',
              'No content on this website constitutes medical advice.',
              'EKA Balance does not claim to treat, cure, prevent, or mitigate any medical condition.',
            ].map(item => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Block>

        {/* Doctor consultation */}
        <Block icon={Stethoscope} title="Always Consult Your Doctor First" color="amber">
          <p className="font-semibold text-amber-900">
            Before beginning any complementary or alternative therapy, consult your licensed physician, especially if you:
          </p>
          <ul className="space-y-2 mt-2">
            {[
              'Have a diagnosed medical condition or chronic illness',
              'Are currently taking prescribed medication',
              'Are pregnant or breastfeeding',
              'Have recently undergone surgery or a medical procedure',
              'Experience persistent, acute, or unexplained symptoms',
              'Are under the care of a specialist (cardiologist, oncologist, psychiatrist, etc.)',
            ].map(item => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-600 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-amber-900 font-medium">
            Do not stop, reduce, or modify any prescribed medical treatment based on anything received or read at EKA Balance.
          </p>
        </Block>

        {/* No liability */}
        <Block icon={Info} title="Limitation of Liability" color="gray">
          <p>
            EKA Balance and its practitioners accept <strong>no medical or legal responsibility</strong> for any health outcomes — positive or negative — arising from:
          </p>
          <ul className="space-y-2 mt-2">
            {[
              'Decisions made without first consulting a licensed physician',
              'Any modification or discontinuation of prescribed medical care',
              'Individual variation in response to complementary therapy',
              'Pre-existing conditions not disclosed prior to sessions',
            ].map(item => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-3">
            Results from complementary wellness services vary from person to person. No specific result is guaranteed.
          </p>
        </Block>

        {/* Emergency */}
        <Block icon={Phone} title="Medical Emergency" color="rose">
          <p className="font-bold text-rose-800 text-base">
            If you are experiencing a medical emergency, call emergency services immediately.
          </p>
          <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              { country: 'Spain (EU)', number: '112' },
              { country: 'General Emergency', number: '112' },
              { country: 'Crisis Line (ES)', number: '024' },
            ].map(({ country, number }) => (
              <div key={country} className="bg-white rounded-xl border border-rose-100 p-3 text-center">
                <p className="text-2xl font-bold text-rose-600">{number}</p>
                <p className="text-xs text-gray-500 mt-0.5">{country}</p>
              </div>
            ))}
          </div>
        </Block>

        {/* Footer note */}
        <div className="rounded-2xl bg-gray-50 border border-gray-100 p-6 text-sm text-gray-600 space-y-3">
          <p>
            This disclaimer is provided in accordance with Spanish consumer protection law (Real Decreto Legislativo 1/2007), EU Directive 2011/83/EU on consumer rights, and applicable professional wellness practice standards.
          </p>
          <p>
            By booking or using any EKA Balance service, you confirm that you have read and understood this disclaimer.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/terms-of-service" className="text-primary hover:underline text-sm">Terms of Service</Link>
            <Link href="/privacy-policy" className="text-primary hover:underline text-sm">Privacy Policy</Link>
            <Link href="/contact" className="text-primary hover:underline text-sm">Contact Us</Link>
          </div>
        </div>

      </div>
    </PageLayout>
  );
}
