import React from 'react';
import { Container, SectionLabel } from '../ui';

/**
 * Section 09 — LRM Events Introduction.
 * Introduces the events branch as a major new chapter.
 */
export default function EventsIntroSection() {
  return (
    <section className="bg-ink text-white border-b border-slate-divider py-20 lg:py-28">
      <Container>
        <div className="max-w-2xl">
          <span className="text-label-md text-accent tracking-[0.06em]">
            LRM EVENTS
          </span>

          <h2 className="text-display-mobile lg:text-display mt-4">
            When the City Becomes an Event.
          </h2>

          <p className="text-headline-sm text-white/60 mt-4">
            Turn Events Into Connected Media Networks.
          </p>

          <p className="text-body-lg text-white/50 mt-6 max-w-xl">
            Exhibitions. Expos. Conferences. Summits. Wherever thousands of people gather, LRM can create a temporary digital network that informs, guides and promotes.
          </p>
        </div>
      </Container>
    </section>
  );
}
