'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Sparkles, Calendar, Briefcase } from '@/lib/icons';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/shared/utils';

const items = [
  { href: '/', icon: Home, labelKey: 'nav.home', exact: true },
  { href: '/services', icon: Sparkles, labelKey: 'nav.services', exact: false },
  { href: '/for-business', icon: Briefcase, labelKey: 'personalizedServices.business', exact: false },
  { href: '/booking', icon: Calendar, labelKey: 'nav.bookNow', exact: true },
] as const;

export default function FooterPillMenu() {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    /* Sits flush at bottom; padding accounts for iOS home-indicator safe area */
    <div
      className="fixed bottom-0 left-0 right-0 z-[115] flex justify-center px-4"
      style={{ paddingBottom: 'max(1.25rem, env(safe-area-inset-bottom))' }}
    >
      <nav
        className={[
          /* Match the scrolled header's glass style exactly */
          'bg-white/90 backdrop-blur-2xl',
          'border border-gray-200/50',
          'rounded-2xl p-1.5',
          'flex items-stretch gap-0.5',
          /* Soft lift shadow that matches dropdown panels */
          'shadow-[0_8px_30px_rgba(0,0,0,0.07)]',
          'ring-1 ring-black/[0.04]',
          'w-full',
        ].join(' ')}
        style={{ maxWidth: 'min(400px, 100%)' }}
        aria-label="Main navigation"
      >
        {items.map((item) => {
          const label = t(item.labelKey);
          const isActive = item.exact
            ? pathname === item.href
            : pathname === item.href || pathname.startsWith(item.href + '/');

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? 'page' : undefined}
              className={cn(
                'relative flex flex-col items-center justify-center flex-1 py-2 px-2 rounded-xl',
                'transition-colors duration-150 active:scale-[0.93] select-none',
                isActive ? 'text-white' : 'text-gray-400 hover:text-gray-700',
              )}
            >
              {/* Sliding dark-pill active background — animates between tabs */}
              {isActive && (
                <motion.div
                  layoutId="pill-active-bg"
                  className="absolute inset-0 rounded-xl bg-[#1d1d1f]"
                  transition={{ type: 'spring', stiffness: 420, damping: 38 }}
                />
              )}

              <span className="relative z-10 flex flex-col items-center gap-[3px]">
                <item.icon
                  className="w-[18px] h-[18px]"
                  strokeWidth={isActive ? 2.25 : 1.75}
                  aria-hidden="true"
                />
                <span className="text-[10px] font-medium leading-none whitespace-nowrap tracking-tight">
                  {label}
                </span>
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
