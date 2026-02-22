'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LegalLayout from '@/components/templates/LegalLayout';

export default function CookiePolicyContent() {
  const { t } = useLanguage();

  const sections = [
    {
      id: 'what-are-cookies',
      title: 'What Are Cookies?',
      content: (
        <p>
          Cookies are small text files stored on your device when you visit our website. They help us provide, secure, and improve our Services by complying with GDPR requirements.
        </p>
      )
    },
    {
      id: 'types-cookies',
      title: 'Types of Cookies We Use',
      content: (
        <div className="space-y-6">
          <div className="border border-gray-100 bg-gray-50/50 rounded-2xl p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Essential Cookies</h3>
            <p>Necessary for the website to function. Cannot be switched off.</p>
          </div>
          <div className="border border-gray-100 bg-gray-50/50 rounded-2xl p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Analytical Cookies</h3>
            <p>Help us understand how visitors interact with the website (e.g., Google Analytics).</p>
          </div>
        </div>
      )
    },
    {
      id: 'managing-cookies',
      title: 'Managing Cookies',
      content: (
        <p>
          You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
        </p>
      )
    },
    {
      id: 'disclaimer',
      title: 'Complementary Services Notice',
      content: (
        <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
          <p>
            The EKA Balance website presents complementary wellness services. Website content is informational and is not medical advice.
          </p>
        </div>
      )
    }
  ];

  return (
    <LegalLayout
      title={t('footer.cookiePolicy') || 'Cookie Policy'}
      lastUpdated="November 15, 2025"
      sections={sections}
    />
  );
}
