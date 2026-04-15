import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/contexts/LanguageTypes';
import { HugeiconsIcon } from '@hugeicons/react';
import { Cancel01Icon, GlobeIcon } from '@hugeicons/core-free-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollLock } from '@/hooks/useScrollLock';
import { Button } from '@/components/ui/button';

export default function LanguagePopup() {
    const { showLanguagePopup, setShowLanguagePopup, confirmLanguage, t } = useLanguage();

    useScrollLock(showLanguagePopup);

    if (!showLanguagePopup) return null;

    const languages: { code: Language; label: string; flag: string }[] = [
        { code: 'ca', label: 'Català', flag: '🇦🇩' },
        { code: 'es', label: 'Español', flag: '🇪🇸' },
        { code: 'en', label: 'English', flag: '🇬🇧' },
        { code: 'ru', label: 'Русский', flag: '🇷🇺' }
    ];

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-90 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs"
                onClick={() => setShowLanguagePopup(false)}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="bg-white rounded-3xl  max-w-md w-full p-8 relative border border-gray-100"
                    onClick={(e) => e.stopPropagation()}
                >
                    <Button
                        onClick={() => setShowLanguagePopup(false)}
                        variant="ghost"
                        size="icon"
                        className="absolute top-4 right-4 rounded-full"
                        aria-label="Close"
                    >
                        <HugeiconsIcon icon={Cancel01Icon} className="w-5 h-5" aria-hidden="true"  />
                    </Button>

                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <HugeiconsIcon icon={GlobeIcon} className="w-8 h-8 text-primary"  />
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                            {t('language.popup.title')}
                        </h2>
                        <p className="text-gray-600">
                            {t('language.popup.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                        {languages.map((lang) => (
                            <Button
                                key={lang.code}
                                onClick={() => confirmLanguage(lang.code)}
                                variant="outline-solid"
                                className="justify-start h-auto p-4 rounded-xl"
                            >
                                <span className="text-2xl mr-4">{lang.flag}</span>
                                <span className="font-medium">
                                    {lang.label}
                                </span>
                            </Button>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
