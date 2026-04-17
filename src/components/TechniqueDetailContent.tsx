"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowLeft01Icon } from '@/lib/icons';
import Link from 'next/link';
import CTASection from '@/components/CTASection';

// Move map to shared or props if needed, but safe here for rendering logic if id is passed
const techniqueMap: Record<string, string> = {
  'myofascial': 'technique.myofascial',
  'kinesio': 'technique.kinesio',
  'reflexology': 'technique.reflexology',
  'lymphatic': 'technique.lymphatic',
  'craniosacral': 'technique.craniosacral',
  'acupressure': 'technique.acupressure'
};

interface TechniqueDetailContentProps {
  id: string;
}

export default function TechniqueDetailContent({ id }: TechniqueDetailContentProps) {
  const { t } = useLanguage();
  
  // Handled in page.tsx technically, but good for safety
  if (!techniqueMap[id]) {
    return (
      <div className="min-h-screen pt-32 px-4 text-center">
        <h1 className="text-2xl font-medium text-foreground">Technique not found</h1>
        <Link href="/" className="text-primary hover:text-primary mt-4 inline-block">
          {t('common.back')}
        </Link>
      </div>
    );
  }

  const baseKey = techniqueMap[id];

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/#techniques" 
          className="inline-flex items-center text-foreground/80 hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft01Icon className="w-5 h-5 mr-2 transition-colors" />
          {t('common.back')}
        </Link>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-medium text-foreground mb-6">
            {t(`${baseKey}.title`)}
          </h1>
          
          <div className="prose prose-lg text-foreground/80 max-w-none">
            <p>
              {t(`${baseKey}.desc`)}
            </p>
          </div>
          
          <div className="mt-12 p-8 bg-card rounded-[2rem] border border-orange-100">
             <h3 className="text-xl font-semibold text-foreground mb-4">{t('technique.why')}</h3>
             <p className="text-muted-foreground">
                {t(`${baseKey}.why`)}
             </p>
          </div>
        </motion.div>
      </div>
      
      <CTASection />
    </div>
  );
}
