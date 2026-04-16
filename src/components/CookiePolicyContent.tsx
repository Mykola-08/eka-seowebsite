'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/PageLayout';
import { AlertTriangle, Cookie, Settings, BarChart2 } from '@/lib/icons';

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
  { href: '#disclaimer', label: 'Health Notice' },
  { href: '#what', label: 'What Are Cookies' },
  { href: '#types', label: 'Types We Use' },
  { href: '#manage', label: 'Managing Cookies' },
];

export default function CookiePolicyContent() {
  const { t } = useLanguage();

  return (
    <PageLayout
      hero={{ title: t('footer.cookiePolicy') || 'Cookie Policy', subtitle: 'Last updated: November 15, 2025' }}
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

            {/* Health notice */}
            <div id="disclaimer" className="scroll-mt-24 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-amber-900 mb-1">Complementary Wellness Notice</p>
                  <p className="text-amber-800 text-sm">
                    This website presents complementary and alternative wellness services. Nothing on this site constitutes medical advice, diagnosis, or treatment.{' '}
                    <strong>Always consult your doctor before making any health decision.</strong>{' '}
                    <em>Consulta a tu médico antes de tomar ninguna decisión de salud.</em>
                  </p>
                  <a href="/disclaimer" className="text-xs text-amber-700 underline hover:text-amber-900 mt-2 inline-block">
                    Full Alternative Therapy Disclaimer →
                  </a>
                </div>
              </div>
            </div>

            <Section id="what" icon={Cookie} title="1. What Are Cookies (GDPR Art. 4(11))">
              <p>
                Cookies are small text files placed on your device when you visit our website. They help us provide a functional, secure, and improved experience. Cookies may be first-party (set by us) or third-party (set by external services like analytics).
              </p>
            </Section>

            <Section id="types" icon={BarChart2} title="2. Cookies We Use">
              <div className="grid gap-4">
                {[
                  {
                    color: 'green',
                    title: 'Essential Cookies',
                    desc: 'Required for the website to function. They cannot be disabled. Used for navigation, security, and booking flows.',
                    required: true,
                  },
                  {
                    color: 'blue',
                    title: 'Analytics Cookies',
                    desc: 'Help us understand how visitors use our site (e.g., Google Analytics). Used anonymously to improve content and performance.',
                    required: false,
                  },
                  {
                    color: 'purple',
                    title: 'Preference Cookies',
                    desc: 'Remember your language and region settings so you don\'t need to reselect them on each visit.',
                    required: false,
                  },
                ].map(({ color, title, desc, required }) => (
                  <div key={title} className={`rounded-xl border border-${color}-100 bg-${color}-50/30 p-5`}>
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-semibold text-gray-800 text-sm">{title}</p>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${required ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                        {required ? 'Always Active' : 'Optional'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{desc}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="manage" icon={Settings} title="3. Managing Cookies">
              <p>
                You can manage, restrict, or delete cookies at any time through your browser settings. Disabling non-essential cookies will not affect core website functionality.
              </p>
              <p>
                You may also withdraw consent granted through our cookie banner at any time by clearing your browser cookies and revisiting the site.
              </p>
              <div className="rounded-xl bg-gray-50 border border-gray-100 p-5 text-sm">
                <p className="font-semibold text-gray-800 mb-2">Browser Cookie Settings</p>
                <ul className="space-y-1 text-gray-600">
                  {['Chrome: Settings → Privacy → Cookies', 'Firefox: Options → Privacy → Cookies', 'Safari: Preferences → Privacy', 'Edge: Settings → Privacy → Cookies'].map(item => (
                    <li key={item} className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-400 flex-shrink-0"/>{item}</li>
                  ))}
                </ul>
              </div>
              <p>
                For questions, contact: <a href="mailto:legal@ekabalance.com" className="text-primary hover:underline">legal@ekabalance.com</a>
              </p>
            </Section>

            <div className="border-t border-gray-100 pt-6 text-center text-xs text-gray-400">
              This Cookie Policy complies with Regulation (EU) 2016/679 (GDPR).
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
