'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Loader2 } from 'lucide-react';

export default function AgenyzPage() {
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://agenyz.es';
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 text-center">
      <div className="max-w-md space-y-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Agenyz
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          {t('agenyz.redirect.message')}
        </p>
        
        <div className="flex justify-center py-4">
          <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
        </div>

        <p className="text-sm text-gray-500 mt-4">
          <a href="https://agenyz.es" className="text-blue-600 hover:underline hover:text-blue-800 transition-colors">
            {t('common.clickHere')}
          </a>
        </p>
      </div>
    </div>
  );
}
