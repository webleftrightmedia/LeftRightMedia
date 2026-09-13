import React from 'react';
import { Container, SectionLabel } from '../components/ui';

export default function PlaceholderPage({ title, label }) {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="max-w-3xl mx-auto">
          <SectionLabel>{label}</SectionLabel>
          <h1 className="text-headline-lg-mobile lg:text-headline-lg mt-3">
            {title}
          </h1>
          <div className="mt-8 text-body-lg text-ink-muted p-8 border border-slate-border rounded-[4px] bg-concrete-white border-dashed">
            <p>This is a placeholder page. The actual content for {title} will be added later.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
