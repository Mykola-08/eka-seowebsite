'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/PageLayout';
import { Scale, ShieldCheck, UserCheck, Mail, AlertTriangle, FileText } from '@/lib/icons';

const Section = ({ id, icon: Icon, title, children }: { id: string; icon: React.ElementType; title: string; children: React.ReactNode }) => (
  <section id={id} className="scroll-mt-24">
    <div className="flex items-center gap-3 mb-6 pb-4  border-0">
      <div className="w-9 h-9 rounded-3xl bg-primary/8 flex items-center justify-center shrink-0">
        <HugeiconsIcon icon={Icon} className="w-4 h-4 text-primary" />
      </div>
      <h2 className="text-xl font-semibold text-foreground tracking-tight">{title}</h2>
    </div>
    <div className="space-y-4 text-foreground/80 leading-relaxed">{children}</div>
  </section>
);

const toc = [
  { href: '#disclaimer', label: 'Health Disclaimer' },
  { href: '#controller', label: 'Data Controller' },
  { href: '#data', label: 'Data We Collect' },
  { href: '#basis', label: 'Legal Basis' },
  { href: '#rights', label: 'Your Rights' },
  { href: '#contact', label: 'Contact' },
];

export default function PrivacyPolicyContent() {
  const { t } = useLanguage();

  return (
    <PageLayout
      hero={{ title: t('footer.privacyPolicy') || 'Privacy Policy', subtitle: 'Last updated: November 15, 2025' }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* Sticky TOC */}
          <aside className="hidden lg:block w-52 shrink-0 sticky top-24 self-start">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Contents</p>
            <nav className="space-y-1">
              {toc.map(item => (
                <a key={item.href} href={item.href}
                  className="block text-sm text-muted-foreground hover:text-foreground py-1.5 border-0 border-0 hover:border-primary pl-3 transition-colors duration-150">
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0 space-y-14">

            {/* Medical disclaimer — always first, always prominent */}
            <div id="disclaimer" className="scroll-mt-24 rounded-3xl  border-0 bg-amber-50 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <HugeiconsIcon icon={Alert01Icon} className="w-6 h-6 text-amber-600 shrink-0 mt-0.5"  />
                <div>
                  <h2 className="text-lg font-bold text-amber-900 mb-3">Important Health Disclaimer</h2>
                  <p className="text-amber-800 mb-4 font-medium">
                    EKA Balance offers complementary and alternative wellness services. Our services are <strong>not medical diagnosis, medical treatment, or a substitute for licensed healthcare</strong>.
                  </p>
                  <ul className="space-y-2 text-amber-800 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                      Always consult your doctor before making any health decision. <em>Consulta a tu médico antes de tomar ninguna decisión de salud.</em>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                      Do not stop prescribed medication or medical treatment based on information from this website.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                      If you are experiencing a medical emergency, call emergency services immediately (112 in Spain).
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                      EKA Balance takes no responsibility for health outcomes resulting from actions taken without consulting a licensed physician.
                    </li>
                  </ul>
                  <p className="mt-4 text-xs text-amber-700">
                    See our full <a href="/disclaimer" className="underline font-medium hover:text-amber-900">Alternative Therapy Disclaimer</a> for complete details.
                  </p>
                </div>
              </div>
            </div>

            <Section id="controller" icon={UserCheck01Icon} title="Data Controller">
              <div className="bg-muted/40 rounded-3xl p-6 grid sm:grid-cols-2 gap-4 text-sm">
                {[
                  ['Name', 'Olena Kucherova Dryzhak (EKA Balance)'],
                  ['Address', 'Calle Plata 1, 08191 Rubí, Barcelona, Spain'],
                  ['Phone', '+34 658 867 133'],
                  ['Email', 'legal@ekabalance.com'],
                ].map(([label, value]) => (
                  <div key={label}>
                    <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">{label}</span>
                    <span className="text-foreground">{label === 'Email' ? <a href={`mailto:${value}`} className="text-primary hover:underline">{value}</a> : value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-3xl  border-0 bg-blue-50/50 p-6 grid sm:grid-cols-2 gap-4 text-sm">
                <div className="sm:col-span-2"><span className="text-xs font-bold uppercase tracking-wider text-blue-500">Data Protection Officer (DPO)</span></div>
                {[
                  ['Name', 'Olena Kucherova Dryzhak'],
                  ['Email', 'dpo@ekabalance.com'],
                  ['Phone', '+34 658 867 133'],
                ].map(([label, value]) => (
                  <div key={label}>
                    <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">{label}</span>
                    <span className="text-foreground">{label === 'Email' ? <a href={`mailto:${value}`} className="text-primary hover:underline">{value}</a> : value}</span>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="data" icon={File01Icon} title="1. Data We Collect">
              <p>We collect personal data necessary to provide our wellness services, including:</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-3xl  border-0 bg-blue-50/30 p-5">
                  <p className="font-semibold text-foreground text-sm mb-2">Personal Identification</p>
                  <ul className="space-y-1 text-sm text-foreground/80">
                    {['Full name', 'Email address', 'Phone number', 'Postal address', 'Date of birth'].map(item => (
                      <li key={item} className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-blue-400 shrink-0"/>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl  border-0 bg-rose-50/30 p-5">
                  <p className="font-semibold text-foreground text-sm mb-2">Wellness & Health Data</p>
                  <ul className="space-y-1 text-sm text-foreground/80">
                    {['Physical condition & wellbeing notes', 'Pain or discomfort indicators', 'Session history and preferences', 'Emotional wellbeing notes (with consent)'].map(item => (
                      <li key={item} className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-rose-400 shrink-0"/>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Section>

            <Section id="basis" icon={JusticeScale01Icon} title="2. Legal Basis for Processing (GDPR Art. 6)">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { color: 'green', title: 'Consent (Art. 6(1)(a))', items: ['Marketing communications', 'Non-essential cookies', 'Wellness data with explicit consent'] },
                  { color: 'blue', title: 'Contractual Necessity', items: ['Providing booked services', 'Processing payments', 'Customer support'] },
                  { color: 'purple', title: 'Legal Obligations', items: ['Tax and accounting', 'Health & safety requirements', 'Data retention rules'] },
                  { color: 'orange', title: 'Legitimate Interests', items: ['Service improvement', 'Fraud prevention', 'Statistical analysis'] },
                ].map(({ color, title, items }) => (
                  <div key={title} className={`rounded-3xl border border-${color}-100 bg-${color}-50/30 p-5`}>
                    <p className="font-semibold text-foreground text-sm mb-2">{title}</p>
                    <ul className="space-y-1 text-sm text-foreground/80">
                      {items.map(item => <li key={item} className="flex items-center gap-2"><span className={`w-1 h-1 rounded-full bg-${color}-400 shrink-0`}/>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="rights" icon={SecurityCheckIcon} title="3. Your Rights Under GDPR (Arts. 12–22)">
              <div className="space-y-3">
                {[
                  { right: 'Access (Art. 15)', desc: 'Request a copy of all personal data we hold about you. We respond within 30 days.' },
                  { right: 'Erasure (Art. 17)', desc: 'Request deletion of your data when there is no longer a lawful basis to retain it.' },
                  { right: 'Rectification (Art. 16)', desc: 'Request correction of inaccurate or incomplete personal data.' },
                  { right: 'Portability (Art. 20)', desc: 'Receive your data in a structured, machine-readable format.' },
                  { right: 'Objection (Art. 21)', desc: 'Object to processing based on legitimate interests or for direct marketing.' },
                ].map(({ right, desc }) => (
                  <div key={right} className="flex gap-4 rounded-3xl bg-muted/40 p-4  border-0">
                    <span className="font-semibold text-foreground text-sm w-36 shrink-0">{right}</span>
                    <span className="text-sm text-foreground/80">{desc}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-3xl bg-primary/5  border-0 p-5 text-sm">
                <p className="font-semibold text-foreground mb-1">To exercise your rights, contact:</p>
                <a href="mailto:dpo@ekabalance.com" className="text-primary hover:underline">dpo@ekabalance.com</a>
              </div>
            </Section>

            <Section id="contact" icon={MailIcon} title="Contact & Supervisory Authority">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-muted/40  border-0 p-5 text-sm space-y-2">
                  <p className="font-semibold text-foreground">DPO Contact</p>
                  <p className="text-foreground/80">Olena Kucherova Dryzhak</p>
                  <a href="mailto:dpo@ekabalance.com" className="text-primary hover:underline block">dpo@ekabalance.com</a>
                </div>
                <div className="rounded-3xl bg-rose-50  border-0 p-5 text-sm space-y-2">
                  <p className="font-semibold text-foreground">Supervisory Authority</p>
                  <p className="text-foreground/80">Agencia Española de Protección de Datos (AEPD)</p>
                  <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline block">www.aepd.es</a>
                </div>
              </div>
            </Section>

            <div className=" border-0 pt-6 text-center text-xs text-muted-foreground">
              This Privacy Policy complies with Regulation (EU) 2016/679 (GDPR).
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
