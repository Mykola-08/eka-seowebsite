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

interface FAQProps {
  items?: FAQItem[];
  title?: string;
  subtitle?: string;
}

const FAQ = ({ items, title, subtitle }: FAQProps) => {
  const { t } = useLanguage();

  const defaultItems: FAQItem[] = [
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

  const faqItems = items || defaultItems;

  if (faqItems.length === 0) return null;

  return (
    <section className="py-24 bg-card">
      <div className="section-container max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold text-foreground mb-6 tracking-tight">
            {title || t('faq.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-normal leading-relaxed">
            {subtitle || t('faq.subtitle')}
          </p>
        </div>

        <div className="w-full">
          <Accordion type="single" collapsible defaultValue="item-1" className="flex flex-col gap-4">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="bg-muted/40 rounded-2xl px-6 sm:px-8 border-none transition-all duration-300">
                <AccordionTrigger className="text-lg sm:text-xl font-medium text-foreground hover:text-primary hover:no-underline py-6 text-left transition-colors duration-200">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lg leading-relaxed text-muted-foreground pb-6 pr-4 font-normal">
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
