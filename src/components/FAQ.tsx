'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/Accordion';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ = () => {
  const { t } = useLanguage();

  const faqItems: FAQItem[] = [
    {
      id: 'item-1',
      question: t('faq.q1.question'),
      answer: t('faq.q1.answer')
    },
    {
      id: 'item-2',
      question: t('faq.q2.question'),
      answer: t('faq.q2.answer')
    },
    {
      id: 'item-3',
      question: t('faq.q3.question'),
      answer: t('faq.q3.answer')
    },
    {
      id: 'item-4',
      question: t('faq.q4.question'),
      answer: t('faq.q4.answer')
    },
    {
      id: 'item-5',
      question: t('faq.q5.question'),
      answer: t('faq.q5.answer')
    }
  ];

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="section-container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-white border border-gray-100 text-gray-500 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6 tracking-tight">
            {t('faq.title')}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 ring-1 ring-black/5">
          <Accordion type="single" collapsible defaultValue="item-1">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border-b-gray-100 last:border-0 px-4">
                <AccordionTrigger className="text-lg font-medium text-gray-900 hover:text-primary-600 hover:no-underline py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base leading-relaxed text-gray-600 pb-6 pr-8 font-light">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

