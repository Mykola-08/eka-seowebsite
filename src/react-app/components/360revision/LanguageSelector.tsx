import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '@/react-app/hooks/useLanguage';
import { Language } from '@/react-app/contexts/LanguageContext';

interface LanguageOption {
  code: Language;
  name: string; // This will be a translation key
  flag: string;
}

const languages: LanguageOption[] = [
  { code: 'ca', name: 'lang.catalan', flag: '🏴󠁥󠁳󠁣󠁴󠁿' },
  { code: 'en', name: 'lang.english', flag: '🇬🇧' },
  { code: 'es', name: 'lang.spanish', flag: '🇪🇸' },
  { code: 'ru', name: 'lang.russian', flag: '🇷🇺' }
];

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 bg-zinc-800/60 border border-amber-500/20 text-amber-200 rounded-lg backdrop-blur-sm hover:bg-zinc-800/80 hover:border-amber-500/40 transition-all duration-200"
        whileHover={{ 
          scale: 1.02
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">
          {currentLanguage?.flag} {currentLanguage ? t(currentLanguage.name) : 'Català'}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-full left-0 mb-2 w-48 bg-zinc-800/95 border border-amber-500/30 rounded-lg backdrop-blur-sm shadow-xl z-50"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="py-2">
              {languages.map((lang) => (
                <motion.button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full flex items-center space-x-3 px-4 py-2 text-left transition-colors duration-200 ${
                    language === lang.code 
                      ? 'bg-amber-500/20 text-amber-200' 
                      : 'text-zinc-300 hover:bg-zinc-700/50 hover:text-amber-200'
                  }`}
                  whileHover={{ 
                    backgroundColor: language === lang.code ? "rgba(245, 158, 11, 0.3)" : "rgba(82, 82, 91, 0.5)",
                    x: 2
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.1 }}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span className="text-sm font-medium">{t(lang.name)}</span>
                  {language === lang.code && (
                    <motion.div 
                      className="ml-auto w-2 h-2 bg-amber-400 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
