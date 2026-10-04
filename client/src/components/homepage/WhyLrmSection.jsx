import React from 'react';
import { Container, SectionLabel } from '../ui';
import { whyLrmPillars } from '../../data/homepage';

/**
 * Section 14 — Why LRM.
 * Three value pillars: Local, Connected, Flexible.
 */
export default function WhyLrmSection() {
  return (
    <section className="bg-concrete-white border-b border-slate-border py-20 lg:py-28">
      <Container>
        <SectionLabel>Why LRM</SectionLabel>
        <h2 className="text-headline-lg-mobile lg:text-headline-lg mt-4 max-w-2xl">
          Built Around Where Attention Actually Happens.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {whyLrmPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="border border-slate-border rounded-md p-8 bg-concrete"
            >
              <h3 className="text-label-lg text-accent mb-3">
                {pillar.title}
              </h3>
              <p className="text-body-lg text-ink-muted">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
