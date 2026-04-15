'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HugeiconsIcon } from '@hugeicons/react';
import { Briefcase01Icon, Calendar01Icon, Home01Icon, SparklesIcon } from '@hugeicons/core-free-icons';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const items = [
  { href: '/', icon: Home01Icon, labelKey: 'nav.home', exact: true },
  { href: '/services', icon: SparklesIcon, labelKey: 'nav.services', exact: false },
  { href: '/for-business', icon: Briefcase01Icon, labelKey: 'personalizedServices.business', exact: false },
  { href: '/booking', icon: Calendar01Icon, labelKey: 'nav.bookNow', exact: true },
] as const;

export default function FooterPillMenu() {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    /* Sits flush at bottom; padding accounts for iOS home-indicator safe area */
    <div
      className="fixed bottom-0 left-0 right-0 z-(--z-modal) flex justify-center px-4"
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
          'ring-1 ring-black/4',
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
                  className="absolute inset-0 rounded-xl bg-primary"
                  transition={{ type: 'spring', stiffness: 420, damping: 38 }}
                />
              )}

              <span className="relative z-10 flex flex-col items-center gap-0.75">
                <HugeiconsIcon icon={item.icon}
                  className="w-4.5 h-4.5"
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
