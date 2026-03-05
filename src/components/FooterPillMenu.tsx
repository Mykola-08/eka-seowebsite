'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Sparkles, Calendar, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/shared/utils';

export default function FooterPillMenu() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const items = [
    { href: '/', label: t('nav.home'), icon: Home },
    { href: '/services', label: t('nav.services'), icon: Sparkles },
    { href: '/booking', label: t('nav.bookNow'), icon: Calendar },
    { href: '/contact', label: t('nav.contact'), icon: MessageCircle },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-sm px-4 md:hidden">
      <nav className="bg-white/90 backdrop-blur-lg border border-white/20  rounded-full px-2 py-2 flex justify-between items-center ring-1 ring-black/5">
        {items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center w-full py-1 rounded-full transition-all duration-300 relative group",
                 isActive ? "text-eka-dark font-medium" : "text-gray-500 hover:text-gray-900"
              )}
            >
              <div className={cn(
                  "p-2 rounded-full transition-all duration-300 relative",
                  isActive ? "bg-gold/20" : "bg-transparent group-hover:bg-gray-100"
              )}>
                <item.icon className={cn("w-5 h-5", isActive && "fill-current")} />
              </div>
              
              <span className="text-[10px] mt-1">{item.label}</span>

              {isActive && (
                <motion.span 
                    layoutId="pill-active"
                    className="absolute -bottom-1 w-1 h-1 bg-gold rounded-full"
                />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
