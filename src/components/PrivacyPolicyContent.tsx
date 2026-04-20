'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/PageLayout';
import { Alert01Icon, UserCheck01Icon, File01Icon, JusticeScale01Icon, SecurityCheckIcon, MailIcon } from '@/lib/icons';

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

export default function PrivacyPolicyContent() {
  const { t } = useLanguage();

  const toc = [
    { href: '#disclaimer', label: t('legal.privacy.toc.disclaimer') },
    { href: '#controller', label: t('legal.privacy.toc.controller') },
    { href: '#data', label: t('legal.privacy.toc.data') },
    { href: '#basis', label: t('legal.privacy.toc.basis') },
    { href: '#rights', label: t('legal.privacy.toc.rights') },
    { href: '#contact', label: t('legal.privacy.toc.contact') },
  ];

  const personalItems = [
    t('legal.privacy.data.personal.fullName'),
    t('legal.privacy.data.personal.email'),
    t('legal.privacy.data.personal.phone'),
    t('legal.privacy.data.personal.address'),
    t('legal.privacy.data.personal.dob'),
  ];

  const wellnessItems = [
    t('legal.privacy.data.wellness.item1'),
    t('legal.privacy.data.wellness.item2'),
    t('legal.privacy.data.wellness.item3'),
    t('legal.privacy.data.wellness.item4'),
  ];

  const legalBases = [
    {
      title: t('legal.privacy.basis.consent.title'),
      items: [
        t('legal.privacy.basis.consent.item1'),
        t('legal.privacy.basis.consent.item2'),
        t('legal.privacy.basis.consent.item3'),
      ],
    },
    {
      title: t('legal.privacy.basis.contract.title'),
      items: [
        t('legal.privacy.basis.contract.item1'),
        t('legal.privacy.basis.contract.item2'),
        t('legal.privacy.basis.contract.item3'),
      ],
    },
    {
      title: t('legal.privacy.basis.legal.title'),
      items: [
        t('legal.privacy.basis.legal.item1'),
        t('legal.privacy.basis.legal.item2'),
        t('legal.privacy.basis.legal.item3'),
      ],
    },
    {
      title: t('legal.privacy.basis.interest.title'),
      items: [
        t('legal.privacy.basis.interest.item1'),
        t('legal.privacy.basis.interest.item2'),
        t('legal.privacy.basis.interest.item3'),
      ],
    },
  ];

  const rights = [
    { right: t('legal.privacy.right.access'), desc: t('legal.privacy.right.access.desc') },
    { right: t('legal.privacy.right.erasure'), desc: t('legal.privacy.right.erasure.desc') },
    { right: t('legal.privacy.right.rectification'), desc: t('legal.privacy.right.rectification.desc') },
    { right: t('legal.privacy.right.portability'), desc: t('legal.privacy.right.portability.desc') },
    { right: t('legal.privacy.right.objection'), desc: t('legal.privacy.right.objection.desc') },
  ];

  return (
    <PageLayout
      hero={{ title: t('footer.privacyPolicy'), subtitle: `${t('common.lastUpdated')}: ${t('legal.date')}` }}
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
                <Alert01Icon className="w-6 h-6 text-foreground shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-lg font-medium text-foreground mb-3">{t('common.healthDisclaimerTitle')}</h2>
                  <p className="text-foreground/90 mb-4 font-medium">{t('legal.privacy.warning.body')}</p>
                  <ul className="space-y-2 text-foreground/80 text-sm">
                    {[
                      t('legal.privacy.warning.stopMedication'),
                      t('legal.privacy.warning.emergency'),
                      t('legal.privacy.warning.noResponsibility'),
                    ].map(item => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs text-muted-foreground">
                    {t('legal.privacy.warning.link')}{' '}
                    <a href="/disclaimer" className="underline font-medium hover:text-foreground">{t('footer.disclaimer')}</a>
                  </p>
                </div>
              </div>
            </div>

            <Section id="controller" icon={UserCheck01Icon} title={t('common.dataController')}>
              <div className="bg-muted/40 border border-border rounded-[2rem] p-6 grid sm:grid-cols-2 gap-4 text-sm">
                {[
                  [t('common.name'), 'Olena Kucherova Dryzhak (EKA Balance)'],
                  [t('common.address'), 'Carrer Pelai, 12, 08001 Barcelona, Spain'],
                  [t('common.phone'), '+34 658 867 133'],
                  [t('common.email'), 'legal@ekabalance.com'],
                ].map(([label, value]) => (
                  <div key={label}>
                    <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">{label}</span>
                    <span className="text-foreground">{label === t('common.email') ? <a href={`mailto:${value}`} className="text-primary hover:underline">{value}</a> : value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-[2rem] border border-border bg-primary/5 p-6 grid sm:grid-cols-2 gap-4 text-sm">
                <div className="sm:col-span-2"><span className="text-xs font-medium uppercase tracking-wider text-primary">{t('legal.privacy.dpo.title')}</span></div>
                {[
                  [t('common.name'), 'Olena Kucherova Dryzhak'],
                  [t('common.email'), 'dpo@ekabalance.com'],
                  [t('common.phone'), '+34 658 867 133'],
                ].map(([label, value]) => (
                  <div key={label}>
                    <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">{label}</span>
                    <span className="text-foreground">{label === t('common.email') ? <a href={`mailto:${value}`} className="text-primary hover:underline">{value}</a> : value}</span>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="data" icon={File01Icon} title={t('legal.privacy.data.title')}>
              <p>{t('legal.privacy.data.intro')}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-[2rem] border border-border bg-primary/5 p-5">
                  <p className="font-medium text-foreground text-sm mb-2">{t('legal.privacy.data.personal.title')}</p>
                  <ul className="space-y-1 text-sm text-foreground/80">
                    {personalItems.map(item => (
                      <li key={item} className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary/50 shrink-0"/>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[2rem] border border-border bg-muted/40 p-5">
                  <p className="font-medium text-foreground text-sm mb-2">{t('legal.privacy.data.wellness.title')}</p>
                  <ul className="space-y-1 text-sm text-foreground/80">
                    {wellnessItems.map(item => (
                      <li key={item} className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-muted-foreground/60 shrink-0"/>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Section>

            <Section id="basis" icon={JusticeScale01Icon} title={t('legal.privacy.basis.title')}>
              <div className="grid sm:grid-cols-2 gap-4">
                {legalBases.map(({ title, items }) => (
                  <div key={title} className="rounded-[2rem] border border-border bg-muted/40 p-5">
                    <p className="font-medium text-foreground text-sm mb-2">{title}</p>
                    <ul className="space-y-1 text-sm text-foreground/80">
                      {items.map(item => <li key={item} className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary/50 shrink-0"/>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="rights" icon={SecurityCheckIcon} title={t('legal.privacy.rights.title')}>
              <div className="space-y-3">
                {rights.map(({ right, desc }) => (
                  <div key={right} className="flex gap-4 rounded-[2rem] bg-muted/40 p-4 border border-border">
                    <span className="font-medium text-foreground text-sm w-36 shrink-0">{right}</span>
                    <span className="text-sm text-foreground/80">{desc}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-[2rem] bg-primary/5 border border-border p-5 text-sm">
                <p className="font-medium text-foreground mb-1">{t('legal.privacy.toc.contact')}:</p>
                <a href="mailto:dpo@ekabalance.com" className="text-primary hover:underline">dpo@ekabalance.com</a>
              </div>
            </Section>

            <Section id="contact" icon={MailIcon} title={`${t('legal.privacy.toc.contact')} & ${t('legal.privacy.contact.authority.title')}`}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[2rem] bg-muted/40 border border-border p-5 text-sm space-y-2">
                  <p className="font-medium text-foreground">{t('legal.privacy.dpo.title')}</p>
                  <p className="text-foreground/80">Olena Kucherova Dryzhak</p>
                  <a href="mailto:dpo@ekabalance.com" className="text-primary hover:underline block">dpo@ekabalance.com</a>
                </div>
                <div className="rounded-[2rem] bg-destructive/5 border border-destructive/20 p-5 text-sm space-y-2">
                  <p className="font-medium text-foreground">{t('legal.privacy.contact.authority.title')}</p>
                  <p className="text-foreground/80">{t('legal.privacy.contact.authority.name')}</p>
                  <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline block">www.aepd.es</a>
                </div>
              </div>
            </Section>

            <div className="border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
              {t('legal.gdpr.privacy')}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
