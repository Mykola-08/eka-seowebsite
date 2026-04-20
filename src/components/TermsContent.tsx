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

export default function TermsContent() {
  const { t } = useLanguage();

  const toc = [
    { href: '#disclaimer', label: t('legal.terms.toc.disclaimer') },
    { href: '#nature', label: t('legal.terms.toc.nature') },
    { href: '#acceptance', label: t('legal.terms.toc.acceptance') },
    { href: '#eligibility', label: t('legal.terms.toc.eligibility') },
    { href: '#limitations', label: t('legal.terms.toc.limitations') },
    { href: '#contact', label: t('legal.terms.toc.contact') },
  ];

  const natureItems = [
    t('legal.terms.nature.item1'),
    t('legal.terms.nature.item2'),
    t('legal.terms.nature.item3'),
    t('legal.terms.nature.item4'),
  ];

  const acceptanceItems = [
    t('legal.terms.acceptance.item1'),
    t('legal.terms.acceptance.item2'),
    t('legal.terms.acceptance.item3'),
  ];

  const eligibilityItems = [
    t('legal.terms.eligibility.item1'),
    t('legal.terms.eligibility.item2'),
    t('legal.terms.eligibility.item3'),
    t('legal.terms.eligibility.item4'),
  ];

  const limitationItems = [
    t('legal.terms.limitations.item1'),
    t('legal.terms.limitations.item2'),
    t('legal.terms.limitations.item3'),
    t('legal.terms.limitations.item4'),
  ];

  return (
    <PageLayout
      hero={{ title: t('footer.termsOfService'), subtitle: `${t('common.lastUpdated')}: ${t('legal.date')}` }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* Sticky TOC */}
          <aside className="hidden lg:block w-52 shrink-0 sticky top-24 self-start">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">{t('common.contents')}</p>
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

            {/* Medical disclaimer */}
            <div id="disclaimer" className="scroll-mt-24 rounded-[2rem] border border-warning/30 bg-warning/10 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-foreground shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-lg font-medium text-foreground mb-3">{t('common.healthDisclaimerTitle')}</h2>
                  <p className="text-foreground/90 mb-4 font-medium">{t('legal.terms.warning.body')}</p>
                  <ul className="space-y-2 text-foreground/80 text-sm">
                    {[
                      t('legal.terms.warning.stopMedication'),
                      t('legal.terms.warning.variability'),
                      t('legal.terms.warning.noLiability'),
                      t('legal.terms.warning.emergency'),
                    ].map(item => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs text-muted-foreground">
                    <a href="/disclaimer" className="underline font-medium hover:text-foreground">{t('legal.terms.warning.link')}</a>
                  </p>
                </div>
              </div>
            </div>

            <Section id="nature" icon={Layers} title={t('legal.terms.nature.title')}>
              <p>{t('legal.terms.nature.intro')}</p>
              <ul className="space-y-2 ml-1">
                {natureItems.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-[2rem] bg-primary/5 border border-border p-5 text-sm">
                <p className="text-foreground">{t('legal.terms.nature.important')}</p>
              </div>
            </Section>

            <Section id="acceptance" icon={Users} title={t('legal.terms.acceptance.title')}>
              <p>{t('legal.terms.acceptance.body')}</p>
              <p>{t('legal.terms.acceptance.intro')}</p>
              <ul className="space-y-2 ml-1">
                {acceptanceItems.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section id="eligibility" icon={Users} title={t('legal.terms.eligibility.title')}>
              <p>{t('legal.terms.eligibility.intro')}</p>
              <ul className="space-y-2 ml-1">
                {eligibilityItems.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section id="limitations" icon={XCircle} title={t('legal.terms.limitations.title')}>
              <p>{t('legal.terms.limitations.intro')}</p>
              <ul className="space-y-2 ml-1">
                {limitationItems.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-muted-foreground/60 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section id="contact" icon={Phone} title={t('legal.terms.contact.title')}>
              <div className="grid gap-4 sm:grid-cols-2 text-sm">
                <div className="rounded-[2rem] bg-primary/5 border border-border p-5 space-y-1">
                  <p className="font-medium text-foreground">{t('legal.terms.contact.legal')}</p>
                  <a href="mailto:legal@ekabalance.com" className="text-primary hover:underline block">legal@ekabalance.com</a>
                  <p className="text-muted-foreground">Carrer Pelai, 12, 08001 Barcelona</p>
                </div>
                <div className="rounded-[2rem] bg-muted/40 border border-border p-5 space-y-1">
                  <p className="font-medium text-foreground">{t('legal.terms.contact.dpo')}</p>
                  <a href="mailto:dpo@ekabalance.com" className="text-primary hover:underline block">dpo@ekabalance.com</a>
                  <p className="text-muted-foreground">+34 658 867 133</p>
                </div>
              </div>
            </Section>

            <div className="border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
              {t('legal.gdpr.terms')}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
