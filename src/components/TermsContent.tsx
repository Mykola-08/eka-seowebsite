'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/PageLayout';
import { AlertTriangle, Users, Layers, XCircle, Phone } from '@/lib/icons';

const Section = ({ id, icon: Icon, title, children }: { id: string; icon: React.ElementType; title: string; children: React.ReactNode }) => (
  <section id={id} className="scroll-mt-24">
    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/60">
      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <h2 className="text-xl font-medium text-foreground tracking-tight">{title}</h2>
    </div>
    <div className="space-y-4 text-foreground/80 leading-relaxed">{children}</div>
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
          <aside className="hidden lg:block w-52 shrink-0 sticky top-24 self-start">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">Contents</p>
            <nav className="space-y-1">
              {toc.map(item => (
                <a key={item.href} href={item.href}
                  className="block text-sm text-muted-foreground hover:text-foreground py-1.5 border-l border-border hover:border-primary pl-3 transition-colors duration-150">
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0 space-y-14">

            {/* Medical disclaimer — always first, always prominent */}
            <div id="disclaimer" className="scroll-mt-24 rounded-[2rem] border border-warning/30 bg-warning/10 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-foreground shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-lg font-medium text-foreground mb-3">Wellness Disclaimer</h2>
                  <p className="text-foreground/90 mb-4 font-medium">
                    EKA Balance provides complementary and alternative wellness services. These services are <strong>not medical treatment, diagnosis, or a substitute for licensed healthcare</strong>.
                  </p>
                  <ul className="space-y-2 text-foreground/80 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <strong>Consult your doctor before making any health decision.</strong> <em>Consulta a tu médico antes de tomar ninguna decisión de salud.</em>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      Do not stop, reduce, or change prescribed medications or medical treatment based on any content or session received at EKA Balance.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      Results from complementary therapy vary by person. No specific outcome is guaranteed.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      EKA Balance accepts no liability for health decisions made without consulting a licensed physician.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      In any medical emergency, call <strong>112</strong> immediately.
                    </li>
                  </ul>
                  <p className="mt-4 text-xs text-muted-foreground">
                      Read the full <a href="/disclaimer" className="underline font-medium hover:text-foreground">Wellness Disclaimer</a>.
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
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-[2rem] bg-primary/5 border border-border p-5 text-sm">
                <p className="text-foreground">
                  <strong>Important:</strong> Continue following your physician&apos;s recommendations. EKA Balance services work <em>alongside</em> conventional medicine, not in place of it.
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
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
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
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section id="limitations" icon={XCircle} title="4. Limitations of Liability">
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
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-muted-foreground/60 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section id="contact" icon={Phone} title="5. Contact">
              <div className="grid gap-4 sm:grid-cols-2 text-sm">
                <div className="rounded-[2rem] bg-primary/5 border border-border p-5 space-y-1">
                  <p className="font-medium text-foreground">Legal Inquiries</p>
                  <a href="mailto:legal@ekabalance.com" className="text-primary hover:underline block">legal@ekabalance.com</a>
                  <p className="text-muted-foreground">Calle Plata 1, 08191 Rubí, Barcelona</p>
                </div>
                <div className="rounded-[2rem] bg-muted/40 border border-border p-5 space-y-1">
                  <p className="font-medium text-foreground">Data Protection Officer</p>
                  <a href="mailto:dpo@ekabalance.com" className="text-primary hover:underline block">dpo@ekabalance.com</a>
                  <p className="text-muted-foreground">+34 658 867 133</p>
                </div>
              </div>
            </Section>

            <div className="border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
              These Terms comply with applicable EU and Spanish consumer protection and data protection laws.
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
