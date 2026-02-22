'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LegalLayout from '@/components/templates/LegalLayout';

export default function PrivacyPolicyContent() {
  const { t } = useLanguage();

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      content: (
        <>
          <p>
            This Privacy Policy explains how we collect, use, process, store, protect, and share data when you access or use our website, applications, and services ("Services"). By using the Services, you agree to this Policy.
          </p>
        </>
      )
    },
    {
      id: 'disclaimer',
      title: 'Complementary Methods Disclaimer',
      content: (
        <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
          <p className="mb-4">
            EKA Balance services are complementary wellness services. They are not medical diagnosis or treatment and do not replace care from licensed medical or mental-health professionals.
          </p>
          <ul className="list-disc ml-5 space-y-2">
            <li>Do not stop prescribed medication or medical care based on website content.</li>
            <li>Consult your physician for medical decisions, symptoms, or health emergencies.</li>
            <li>If you are in immediate danger, call emergency services right away.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'data-controller',
      title: 'Data Controller',
      content: (
        <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <span className="font-medium text-gray-900 w-32 flex-shrink-0">Name:</span>
            <span className="text-gray-700">Olena Kucherova Dryzhak (EKA Balance)</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center">
            <span className="font-medium text-gray-900 w-32 flex-shrink-0">Address:</span>
            <span className="text-gray-700">Calle Plata 1, 08191 Rubí, Barcelona, Spain</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center">
            <span className="font-medium text-gray-900 w-32 flex-shrink-0">Phone:</span>
            <span className="text-gray-700">+34 658 867 133</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center">
            <span className="font-medium text-gray-900 w-32 flex-shrink-0">Email:</span>
            <a href="mailto:legal@ekabalance.com" className="text-blue-600 hover:text-blue-800 transition-colors">
              legal@ekabalance.com
            </a>
          </div>
        </div>
      )
    },
    {
      id: 'data-collection',
      title: 'Data We Collect',
      content: (
        <>
          <p className="mb-6">
            We collect all types of personal, technical, behavioral, and sensitive data, including but not limited to the following:
          </p>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-200 pl-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Identification Data</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Full name, Username, Email address
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Phone number, Postal address, Date of birth
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-rose-200 pl-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Sensitive & Special Category Data</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-rose-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Health information, Physical condition, Wellness data
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-rose-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Biometric identifiers
                </li>
              </ul>
            </div>
          </div>
        </>
      )
    },
    {
      id: 'legal-basis',
      title: 'Legal Basis (GDPR Art. 6)',
      content: (
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="bg-green-50/50 rounded-2xl p-6 border border-green-100">
            <h3 className="text-lg font-medium text-gray-900 mb-3">Consent</h3>
            <p className="text-sm">Marketing, Non-essential cookies, Health data processing.</p>
          </div>
          <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100">
            <h3 className="text-lg font-medium text-gray-900 mb-3">Contractual Necessity</h3>
            <p className="text-sm">Providing services, Payments, Account management.</p>
          </div>
          <div className="bg-purple-50/50 rounded-2xl p-6 border border-purple-100">
            <h3 className="text-lg font-medium text-gray-900 mb-3">Legal Obligations</h3>
            <p className="text-sm">Tax regulations, Health & safety, Consumer laws.</p>
          </div>
          <div className="bg-orange-50/50 rounded-2xl p-6 border border-orange-100">
            <h3 className="text-lg font-medium text-gray-900 mb-3">Legitimate Interests</h3>
            <p className="text-sm">Improving services, Fraud prevention, Security.</p>
          </div>
        </div>
      )
    },
    {
      id: 'your-rights',
      title: 'Your Rights (GDPR)',
      content: (
        <div className="space-y-6">
          <div className="border border-gray-100 bg-gray-50/50 rounded-2xl p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Right of Access</h3>
            <p>You have the right to confirm if we process your data and access it.</p>
          </div>
          <div className="border border-gray-100 bg-gray-50/50 rounded-2xl p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Right to Erasure</h3>
            <p>You can request deletion of your data under certain conditions.</p>
          </div>
          <div className="border border-gray-100 bg-gray-50/50 rounded-2xl p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Right to Portability</h3>
            <p>Receive your data in a structured, machine-readable format.</p>
          </div>
          <div className="bg-blue-50/50 rounded-2xl p-6 mt-4 border border-blue-100">
            <p className="text-sm">To exercise your rights, email: <a href="mailto:dpo@ekabalance.com" className="text-blue-600 underline">dpo@ekabalance.com</a></p>
          </div>
        </div>
      )
    }
  ];

  return (
    <LegalLayout
      title={t('footer.privacyPolicy') || 'Privacy Policy'}
      lastUpdated="November 15, 2025"
      sections={sections}
    />
  );
}
