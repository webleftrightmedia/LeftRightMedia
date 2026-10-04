import React from 'react';
import { Container, SectionLabel, Button } from '../ui';
import { audiencePaths } from '../../data/homepage';

/**
 * Section 17 — Final Path Selection.
 * Three paths for three audiences: Brands, Screen Partners, Event Organizers.
 */
export default function PathSelectionSection() {
  return (
    <section className="bg-concrete border-b border-slate-border py-20 lg:py-28">
      <Container>
        <div className="text-center mb-12">
          <SectionLabel>Get Started</SectionLabel>
          <h2 className="text-headline-lg-mobile lg:text-headline-lg mt-4">
            Where Do You Fit In?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {audiencePaths.map((path) => (
            <div
              key={path.title}
              className="border border-slate-border rounded-md bg-concrete-white p-8 flex flex-col hover:border-ink/30 transition-colors duration-200"
            >
              <h3 className="text-label-lg text-ink mb-3">
                {path.title}
              </h3>
              <p className="text-body-lg text-ink-muted flex-1">
                {path.description}
              </p>
              <div className="mt-6">
                <Button variant="outline" size="md" href={path.cta.href}>
                  {path.cta.label}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
