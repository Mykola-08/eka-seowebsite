'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/PageLayout';
import { Alert01Icon, CookieIcon, BarChartIcon, Settings01Icon } from '@/lib/icons';

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

export default function CookiePolicyContent() {
  const { t } = useLanguage();

  const toc = [
    { href: '#disclaimer', label: t('legal.cookie.toc.notice') },
    { href: '#what', label: t('legal.cookie.toc.what') },
    { href: '#types', label: t('legal.cookie.toc.types') },
    { href: '#manage', label: t('legal.cookie.toc.manage') },
  ];

  const cookieTypes = [
    {
      title: t('legal.cookie.essential.title'),
      desc: t('legal.cookie.essential.desc'),
      required: true,
    },
    {
      title: t('legal.cookie.analytics.title'),
      desc: t('legal.cookie.analytics.desc'),
      required: false,
    },
    {
      title: t('legal.cookie.preference.title'),
      desc: t('legal.cookie.preference.desc'),
      required: false,
    },
  ];

  const browserSettings = [
    t('legal.cookie.browser.chrome'),
    t('legal.cookie.browser.firefox'),
    t('legal.cookie.browser.safari'),
    t('legal.cookie.browser.edge'),
  ];

  return (
    <PageLayout
      hero={{ title: t('footer.cookiePolicy'), subtitle: `${t('common.lastUpdated')}: ${t('legal.date')}` }}
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

            {/* Health notice */}
            <div id="disclaimer" className="scroll-mt-24 rounded-apple border border-warning/30 bg-warning/10 p-6">
              <div className="flex items-start gap-4">
                <Alert01Icon className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground mb-1">{t('legal.wellness.notice.title')}</p>
                  <p className="text-foreground/80 text-sm">
                    {t('legal.wellness.notice.body')}{' '}
                    <strong>{t('legal.wellness.notice.warning')}</strong>
                  </p>
                  <a href="/disclaimer" className="text-xs text-muted-foreground underline hover:text-foreground mt-2 inline-block">
                    {t('legal.wellness.notice.link')}
                  </a>
                </div>
              </div>
            </div>

            <Section id="what" icon={CookieIcon} title={t('legal.cookie.what.title')}>
              <p>{t('legal.cookie.what.body')}</p>
            </Section>

            <Section id="types" icon={BarChartIcon} title={t('legal.cookie.types.title')}>
              <div className="grid gap-4">
                {cookieTypes.map(({ title, desc, required }) => (
                  <div key={title} className="rounded-apple border border-border bg-muted/40 p-5">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium text-foreground text-sm">{title}</p>
                      <span className={`text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full ${required ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                        {required ? t('legal.cookie.alwaysActive') : t('legal.cookie.optional')}
                      </span>
                    </div>
                    <p className="text-sm text-foreground/80">{desc}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="manage" icon={Settings01Icon} title={t('legal.cookie.manage.title')}>
              <p>{t('legal.cookie.manage.body1')}</p>
              <p>{t('legal.cookie.manage.body2')}</p>
              <div className="rounded-apple bg-muted/40 border border-border p-5 text-sm">
                <p className="font-medium text-foreground mb-2">{t('legal.cookie.browser.title')}</p>
                <ul className="space-y-1 text-foreground/80">
                  {browserSettings.map(item => (
                    <li key={item} className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-muted-foreground/60 shrink-0"/>{item}</li>
                  ))}
                </ul>
              </div>
              <p>
                {t('legal.cookie.contact.prefix')}{' '}
                <a href="mailto:legal@ekabalance.com" className="text-primary hover:underline">legal@ekabalance.com</a>
              </p>
            </Section>

            <div className="border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
              {t('legal.gdpr.cookie')}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
