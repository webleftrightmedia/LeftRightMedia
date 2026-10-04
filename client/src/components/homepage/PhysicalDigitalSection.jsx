import React from 'react';
import { Container, SectionLabel } from '../ui';

/**
 * Section 12 — Physical + Digital.
 * Shows how LRM bridges the digital advertising world with the physical world.
 */
const digitalSide = ['Websites', 'Apps', 'Social Media'];
const physicalSide = ['Cafés', 'Retail', 'Commercial', 'Events', 'Public Spaces'];

export default function PhysicalDigitalSection() {
  return (
    <section className="bg-concrete-white border-b border-slate-border py-20 lg:py-28">
      <Container>
        <div className="text-center mb-16">
          <SectionLabel>Vision</SectionLabel>
          <h2 className="text-headline-lg-mobile lg:text-headline-lg mt-4 max-w-2xl mx-auto">
            The Internet Changed Digital Advertising.<br />
            We're Connecting It to the Physical World.
          </h2>
        </div>

        {/* Bridge visualization */}
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Digital side */}
            <div className="text-center">
              <span className="text-label-md text-ink-muted block mb-4">DIGITAL WORLD</span>
              <div className="space-y-2">
                {digitalSide.map((item) => (
                  <div
                    key={item}
                    className="px-4 py-2.5 border border-slate-border rounded-md text-body-md text-ink-muted"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* LRM Bridge */}
            <div className="flex flex-col items-center py-6">
              <div className="w-px h-8 bg-ink/20 md:hidden" />
              <div className="hidden md:block w-full h-px bg-ink/20" />
              <div className="my-3 px-6 py-3 bg-ink text-white rounded-md text-label-lg text-center">
                LEFT RIGHT<br />MEDIA
              </div>
              <div className="w-px h-8 bg-ink/20 md:hidden" />
              <div className="hidden md:block w-full h-px bg-ink/20" />
            </div>

            {/* Physical side */}
            <div className="text-center">
              <span className="text-label-md text-ink-muted block mb-4">PHYSICAL WORLD</span>
              <div className="space-y-2">
                {physicalSide.map((item) => (
                  <div
                    key={item}
                    className="px-4 py-2.5 border border-ink rounded-md text-body-md text-ink font-medium"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
