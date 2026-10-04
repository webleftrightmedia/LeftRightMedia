import React from 'react';
import { Container, SectionLabel } from '../../ui';
import ImpactComparison from './ImpactComparison';

export default function ImpactSection() {
  return (
    <section className="bg-concrete-white border-b border-slate-border py-20 lg:py-28 relative overflow-hidden">
      <Container>
        <div className="flex flex-col items-center text-center mb-16">
          <SectionLabel>// THE IMPACT</SectionLabel>
          <h2 className="text-headline-lg-mobile lg:text-headline-lg mt-4 max-w-4xl text-ink">
            From Isolated Screens to a <span className="text-[#34C759]">City Network.</span>
          </h2>
          <p className="text-body-lg text-ink-muted mt-6 max-w-2xl font-medium">
            <span className="font-bold text-ink">Same campaign.</span> Wider reach. Smarter results.
          </p>
        </div>
        
        <ImpactComparison />
        
        <div className="mt-20 text-center">
          <p className="text-headline-sm lg:text-headline-md text-ink max-w-3xl mx-auto">
            The difference isn't another screen.<br/>
            It's the <span className="text-[#34C759]">network</span> behind them.
          </p>
        </div>
      </Container>
    </section>
  );
}
