import { useParams, Link } from 'react-router';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin } from 'lucide-react';
import SEOHead from '@/react-app/components/SEOHead';
import { useLanguage } from '@/react-app/hooks/useLanguage';

export default function TechniqueDetail() {
  const { id } = useParams();
  const { t } = useLanguage();

  const techniqueMap: Record<string, string> = {
    'movement-lesson': 'technique.movement_lesson',
    'jka': 'technique.jka',
    'tmr': 'technique.tmr',
    'kgh': 'technique.kgh',
    'ke': 'technique.ke',
    'kb': 'technique.kb',
    'osteobalance': 'technique.osteobalance',
    'sujok': 'technique.sujok',
    'quiromasaje': 'technique.quiromasaje',
  };

  const baseKey = techniqueMap[id || ''];

  if (!baseKey) {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center text-white">
          Technique not found
        </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`${t(`${baseKey}.title`)} - Elena Kucherova`}
        description={t(`${baseKey}.desc`)}
        url={`https://ekabalance.com/technique/${id}`}
      />
      
      <div className="bg-black min-h-screen text-zinc-200 selection:bg-amber-500/30 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <Link to="/about-elena" className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('technique.back')}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400 mb-6">
              {t(`${baseKey}.title`)}
            </h1>

            <div className="flex items-center text-zinc-400 mb-8">
                <MapPin className="w-5 h-5 mr-2 text-amber-500" />
                <span>{t('technique.location')} <span className="text-zinc-200">{t(`${baseKey}.location`)}</span></span>
            </div>

            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-zinc-300 font-light leading-relaxed">
                {t(`${baseKey}.desc`)}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
