'use client';

import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';

interface LegalSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface LegalLayoutProps {
  title: string;
  subtitle?: string;
  sections: LegalSection[];
  lastUpdated?: string;
}

export default function LegalLayout({
  title,
  subtitle,
  sections,
  lastUpdated
}: LegalLayoutProps) {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '');

  // Handle scroll spy for active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Header offset
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <PageLayout
      hero={{
        title: title,
        subtitle: lastUpdated ? `${t('policy.lastUpdated') || 'Last Updated'}: ${lastUpdated}` : subtitle || '',
        badge: t('footer.legal') || 'Legal'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Side Navigation - Sticky on Desktop */}
          <aside className="lg:w-1/4 order-2 lg:order-1">
            <div className="sticky top-28 bg-white rounded-2xl border border-gray-100 shadow-sm p-2 overflow-hidden">
              <nav className="flex flex-col space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-between group ${
                      activeSection === section.id
                        ? 'bg-blue-50 text-blue-700 shadow-sm'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <span>{section.title}</span>
                    {activeSection === section.id && (
                      <ChevronRight className="w-4 h-4 text-blue-500 animate-in fade-in slide-in-from-left-2 duration-300" />
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:w-3/4 order-1 lg:order-2 space-y-12">
            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className="bg-white rounded-[2rem] p-8 md:p-10 border border-gray-100 shadow-sm scroll-mt-28 transition-all duration-500 hover:shadow-md"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold mr-3">
                    {index + 1}
                  </span>
                  {section.title}
                </h2>
                <div className="prose prose-lg prose-blue max-w-none text-gray-600 leading-relaxed font-light">
                  {section.content}
                </div>
              </section>
            ))}
          </main>

        </div>
      </div>
    </PageLayout>
  );
}
