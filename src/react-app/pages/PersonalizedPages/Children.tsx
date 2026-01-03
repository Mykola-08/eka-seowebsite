import Layout from '@/react-app/components/Layout';
import SEOHead from '@/react-app/components/SEOHead';
import { Link } from 'react-router';
import { ArrowLeft, Baby } from 'lucide-react';
import { useLanguage } from '@/react-app/hooks/useLanguage';
import { motion } from 'framer-motion';

export default function Children() {
  const { t } = useLanguage();

  return (
    <Layout>
      <SEOHead
        title={`${t('elena.target.children.title')} - EKA Balance`}
        description={t('elena.target.children.desc')}
        url="https://ekabalance.com/services/children"
      />
      
      <div className="bg-white min-h-screen pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <Link to="/personalized-services" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('common.back')}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Baby className="w-8 h-8 text-blue-600" />
            </div>

            <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-8">
              {t('elena.target.children.title')}
            </h1>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed">
                {t('elena.target.children.desc')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
