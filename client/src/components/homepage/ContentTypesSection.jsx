import React from 'react';
import { Container, SectionLabel } from '../ui';
import { contentTypes } from '../../data/homepage';

/**
 * Section 13 — More Than Advertisements.
 * Displays the range of content types that can be displayed on LRM screens.
 */
export default function ContentTypesSection() {
  return (
    <section className="bg-concrete border-b border-slate-border py-20 lg:py-28">
      <Container>
        <SectionLabel>Capabilities</SectionLabel>
        <h2 className="text-headline-lg-mobile lg:text-headline-lg mt-4">
          More Than Advertisements.
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-12">
          {contentTypes.map((type, i) => (
            <div
              key={type}
              className="border border-slate-border rounded-md px-5 py-4 bg-concrete-white hover:border-ink/30 transition-colors duration-200"
            >
              <span className="text-label-sm text-ink-muted block mb-2">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-headline-sm text-ink">{type}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
