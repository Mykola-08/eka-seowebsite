'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LegalLayout from '@/components/templates/LegalLayout';

export default function TermsContent() {
  const { t } = useLanguage();

  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance and Consent',
      content: (
        <>
          <p className="mb-4">
            By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.
          </p>
          <ul className="list-disc ml-5 space-y-2">
            <li>The collection and processing of your personal data</li>
            <li>The use of cookies as described in our Cookie Policy</li>
            <li>International transfers of your data</li>
          </ul>
        </>
      )
    },
    {
      id: 'eligibility',
      title: 'Eligibility',
      content: (
        <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100">
          <p className="mb-4">
            By using the Services, you confirm that you are at least 18 years old, or if 16-18, have parental consent.
          </p>
          <p>
            <strong>Parental Consent:</strong> If you are under 16, you may not use our Services. Between 16-18, you need guardian consent.
          </p>
        </div>
      )
    },
    {
      id: 'nature-services',
      title: 'Nature of Services',
      content: (
        <>
          <p className="mb-4">EKA Balance provides complementary wellness and bodywork services:</p>
          <ul className="list-disc ml-5 space-y-2 mb-6">
            <li>Educational and supportive in nature</li>
            <li>Complementary and non-medical</li>
            <li>Not intended to diagnose or cure disease</li>
          </ul>
          <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
            <p><strong>Important:</strong> Keep following your physician's recommendations. For urgent symptoms, contact emergency services.</p>
          </div>
        </>
      )
    },
    {
      id: 'contact',
      title: 'Contact Information',
      content: (
        <div className="grid gap-6">
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h3 className="text-lg font-medium text-gray-900 mb-4">General Inquiries</h3>
            <div className="space-y-2">
              <p>Email: <a href="mailto:legal@ekabalance.com" className="text-blue-600">legal@ekabalance.com</a></p>
              <p>Address: Calle Plata 1, 08191 Rubí, Barcelona, Spain</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <LegalLayout
      title={t('footer.termsOfService') || 'Terms of Service'}
      lastUpdated="November 15, 2025"
      sections={sections}
    />
  );
}
