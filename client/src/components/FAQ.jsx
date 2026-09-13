import React, { useState } from 'react';
import { Container, SectionLabel } from './ui';
import { ChevronDown } from 'lucide-react';
import faqs from '../data/faqs';

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-slate-border">
      <button
        type="button"
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
        id={`faq-trigger-${faq.id}`}
      >
        <span className="text-headline-sm pr-4">{faq.question}</span>
        <ChevronDown
          size={20}
          className={[
            'shrink-0 text-ink-muted transition-transform duration-300 ease-[cubic-bezier(0.87,0,0.13,1)]',
            isOpen ? 'rotate-180 text-ink' : '',
          ].join(' ')}
        />
      </button>
      {isOpen && (
        <div
          id={`faq-answer-${faq.id}`}
          role="region"
          aria-labelledby={`faq-trigger-${faq.id}`}
          className="pb-5 animate-in fade-in slide-in-from-top-1 duration-300"
        >
          <p className="text-body-lg text-ink-muted max-w-2xl">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="faq" className="py-20 lg:py-24">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel className="justify-center">FAQ</SectionLabel>
            <h2 className="text-headline-lg-mobile lg:text-headline-lg mt-3">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="border-t border-slate-border">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
