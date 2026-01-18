'use client';

import { useLanguage } from '@/react-app/contexts/LanguageContext';
import PageLayout from '@/app/components/PageLayout';

export default function CookiePolicyContent() {
  const { t } = useLanguage();
  
  return (
    <PageLayout 
        title={t('footer.cookiePolicy') || 'Cookie Policy'} 
        subtitle={`${t('policy.lastUpdated') || 'Last Updated'}: November 15, 2025`}
    >
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12">
            <div className="bg-white rounded-[2.5rem] shadow-xl shadow-blue-900/5 border border-gray-100 overflow-hidden p-8 md:p-12">
                
                 {/* Introduction */}
                 <div className="mb-12">
                  <p className="text-gray-700 leading-relaxed text-lg font-light">
                    This Cookie Policy explains how we use cookies and similar technologies on our website in compliance with GDPR requirements.
                  </p>
                </div>

                {/* What Cookies Are */}
                <div className="mb-12">
                  <h2 className="text-xl font-medium text-gray-900 mb-6 border-b border-gray-200 pb-4">
                    1. What Cookies Are (GDPR Article 4(11))
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Cookies are small text files stored on your device when you visit our website. They help us provide, secure, and improve our Services.
                  </p>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-100 pt-8 mt-12">
                  <p className="text-center text-gray-400 text-sm">
                    This Cookie Policy is provided in compliance with the General Data Protection Regulation (EU) 2016/679.
                  </p>
                </div>

            </div>
        </div>
    </PageLayout>
  );
}
