'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/PageLayout';
import { AlertTriangle, Users, Layers, Ban, Phone } from '@/lib/icons';

const Section = ({ id, icon: Icon, title, children }: { id: string; icon: React.ElementType; title: string; children: React.ReactNode }) => (
  <section id={id} className="scroll-mt-24">
    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
      <div className="w-9 h-9 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <h2 className="text-xl font-semibold text-gray-900 tracking-tight">{title}</h2>
    </div>
    <div className="space-y-4 text-gray-600 leading-relaxed">{children}</div>
  </section>
);

const toc = [
  { href: '#disclaimer', label: 'Health Disclaimer' },
  { href: '#nature', label: 'Nature of Services' },
  { href: '#acceptance', label: 'Acceptance' },
  { href: '#eligibility', label: 'Eligibility' },
  { href: '#limitations', label: 'Limitations' },
  { href: '#contact', label: 'Contact' },
];

export default function TermsContent() {
  const { t } = useLanguage();

  return (
    <PageLayout
      hero={{ title: t('footer.termsOfService') || 'Terms of Service', subtitle: 'Last updated: November 15, 2025' }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* Sticky TOC */}
          <aside className="hidden lg:block w-52 flex-shrink-0 sticky top-24 self-start">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Contents</p>
            <nav className="space-y-1">
              {toc.map(item => (
                <a key={item.href} href={item.href}
                  className="block text-sm text-gray-500 hover:text-gray-900 py-1.5 border-l-2 border-gray-100 hover:border-primary pl-3 transition-colors duration-150">
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0 space-y-14">

            {/* Medical disclaimer — always first, always prominent */}
            <div id="disclaimer" className="scroll-mt-24 rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-lg font-bold text-amber-900 mb-3">Alternative Therapy Disclaimer</h2>
                  <p className="text-amber-800 mb-4 font-medium">
                    EKA Balance provides complementary and alternative wellness services. These services are <strong>not medical treatment, diagnosis, or a substitute for licensed healthcare</strong>.
                  </p>
                  <ul className="space-y-2 text-amber-800 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-600 flex-shrink-0" />
                      <strong>Consult your doctor before making any health decision.</strong> <em>Consulta a tu médico antes de tomar ninguna decisión de salud.</em>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-600 flex-shrink-0" />
                      Do not stop, reduce, or change prescribed medications or medical treatment based on any content or session received at EKA Balance.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-600 flex-shrink-0" />
                      Results from complementary therapy vary by person. No specific outcome is guaranteed.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-600 flex-shrink-0" />
                      EKA Balance accepts no liability for health decisions made without consulting a licensed physician.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-600 flex-shrink-0" />
                      In any medical emergency, call <strong>112</strong> immediately.
                    </li>
                  </ul>
                  <p className="mt-4 text-xs text-amber-700">
                    Read the full <a href="/disclaimer" className="underline font-medium hover:text-amber-900">Alternative Therapy Disclaimer</a>.
                  </p>
                </div>
              </div>
            </div>

            <Section id="nature" icon={Layers} title="1. Nature of Services">
              <p>
                EKA Balance provides complementary and integrative wellness services including therapeutic massage, kinesiology, nutritional guidance, somatic education, and bodywork. These services are:
              </p>
              <ul className="space-y-2 ml-1">
                {[
                  'Supportive and educational in nature',
                  'Complementary — not primary or medical care',
                  'Not intended to diagnose, treat, cure, or prevent any disease or condition',
                  'Not a substitute for licensed medical, psychiatric, or mental-health care',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-xl bg-blue-50/50 border border-blue-100 p-5 text-sm">
                <p className="text-blue-800">
                  <strong>Important:</strong> Continue following your physician's recommendations. EKA Balance services work <em>alongside</em> conventional medicine, not in place of it.
                </p>
              </div>
            </Section>

            <Section id="acceptance" icon={Users} title="2. Acceptance of Terms">
              <p>
                By booking, accessing, or using EKA Balance services, you confirm that you have read, understood, and agree to these Terms and our Privacy Policy.
              </p>
              <p>Your use constitutes explicit consent to:</p>
              <ul className="space-y-2 ml-1">
                {[
                  'The collection and processing of personal data as described in our Privacy Policy',
                  'The use of cookies as described in our Cookie Policy',
                  'The nature of complementary wellness services as described in these Terms',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section id="eligibility" icon={Users} title="3. Eligibility">
              <p>By using our services, you confirm that:</p>
              <ul className="space-y-2 ml-1">
                {[
                  'You are at least 18 years old, or have parental consent if between 16–18',
                  'You have the legal capacity to enter into binding agreements',
                  'You will provide accurate and complete information',
                  'You will comply with all applicable laws',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section id="limitations" icon={Ban} title="4. Limitations of Liability">
              <p>
                EKA Balance and its practitioners are not liable for any health outcome, direct or indirect, arising from:
              </p>
              <ul className="space-y-2 ml-1">
                {[
                  'Decisions made without consulting a licensed physician',
                  'Stopping or modifying prescribed medical treatment',
                  'Any pre-existing medical condition not disclosed prior to sessions',
                  'Individual variation in response to complementary therapy',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section id="contact" icon={Phone} title="5. Contact">
              <div className="grid gap-4 sm:grid-cols-2 text-sm">
                <div className="rounded-xl bg-blue-50/50 border border-blue-100 p-5 space-y-1">
                  <p className="font-semibold text-gray-800">Legal Inquiries</p>
                  <a href="mailto:legal@ekabalance.com" className="text-primary hover:underline block">legal@ekabalance.com</a>
                  <p className="text-gray-500">Calle Plata 1, 08191 Rubí, Barcelona</p>
                </div>
                <div className="rounded-xl bg-gray-50 border border-gray-100 p-5 space-y-1">
                  <p className="font-semibold text-gray-800">Data Protection Officer</p>
                  <a href="mailto:dpo@ekabalance.com" className="text-primary hover:underline block">dpo@ekabalance.com</a>
                  <p className="text-gray-500">+34 658 867 133</p>
                </div>
              </div>
            </Section>

            <div className="border-t border-gray-100 pt-6 text-center text-xs text-gray-400">
              These Terms comply with applicable EU and Spanish consumer protection and data protection laws.
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
