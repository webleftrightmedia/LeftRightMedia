import React from 'react';
import { Container } from '../ui';
import { eventCapabilities } from '../../data/homepage';

/**
 * Section 10 — Event Capabilities.
 * Four capabilities: Advertise, Inform, Navigate, Connect.
 */
export default function EventCapabilitiesSection() {
  return (
    <section className="bg-ink-light text-white border-b border-slate-divider py-20 lg:py-28">
      <Container>
        <h2 className="text-headline-lg-mobile lg:text-headline-lg text-center">
          Advertise. Inform. Navigate. Connect.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {eventCapabilities.map((cap, i) => (
            <div
              key={cap.title}
              className="border border-white/10 rounded-md p-6 hover:border-white/25 transition-colors duration-200"
            >
              <span className="text-label-sm text-white/40 block mb-4">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-headline-sm text-white mb-2">
                {cap.title}
              </h3>
              <p className="text-body-md text-white/50">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
