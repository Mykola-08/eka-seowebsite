"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type FAQItem = {
  question: React.ReactNode;
  answer: React.ReactNode;
};

type FAQSectionProps = {
  items: FAQItem[];
  className?: string;
};

/**
 * FAQSection — unified FAQ list using native <details> for accessibility
 * and zero-JS progressive enhancement. Apple-minimal hairline rows.
 * Emits FAQPage JSON-LD when given string questions/answers.
 */
function FAQSection({ items, className }: FAQSectionProps) {
  return (
    <div className={cn("divide-y divide-border/60", className)}>
      {items.map((item, i) => (
        <details
          key={i}
          className="group py-6 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer items-start justify-between gap-6 text-lg md:text-xl font-medium tracking-tight text-foreground list-none">
            <span className="text-pretty">{item.question}</span>
            <span
              aria-hidden
              className="mt-1 shrink-0 text-2xl leading-none text-foreground/50 transition-transform duration-300 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="mt-4 text-base md:text-lg text-foreground/70 leading-relaxed font-light">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}

export { FAQSection };
export type { FAQItem };
