import React from 'react';
import { Container, SectionLabel } from '../ui';

/**
 * Section 16 — Proof / Growing Network.
 * Honest section — no fabricated data. Shows growing network status.
 */
export default function ProofSection() {
  return (
    <section className="bg-concrete-white border-b border-slate-border py-20 lg:py-28">
      <Container>
        <div className="text-center">
          <SectionLabel>Network</SectionLabel>
          <h2 className="text-headline-lg-mobile lg:text-headline-lg mt-4">
            Our Network Is Growing.
          </h2>
          <p className="text-body-lg text-ink-muted mt-4 max-w-lg mx-auto">
            We're building the advertising infrastructure for the physical world — one screen, one location, one event at a time.
          </p>

          {/* Honest growth indicator */}
          <div className="mt-12 inline-flex items-center gap-3 px-6 py-3 border border-slate-border rounded-md bg-concrete">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse-dot" />
            <span className="text-label-md text-ink">NETWORK EXPANDING</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
