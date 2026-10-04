import React from 'react';
import { Container, Button } from '../ui';
import { finalCtaButtons } from '../../data/homepage';

/**
 * Section 18 — Final CTA.
 * Visually strong final call-to-action using the existing LRM visual language.
 */
export default function FinalCtaSection() {
  return (
    <section className="bg-ink text-white py-20 lg:py-28">
      <Container>
        <div className="text-center">
          <h2 className="text-display-mobile lg:text-display max-w-2xl mx-auto">
            Where Do You Want Your Brand to Be Seen?
          </h2>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-12">
            {finalCtaButtons.map((btn) => (
              <Button
                key={btn.label}
                variant="signal"
                size="lg"
                href={btn.href}
              >
                {btn.label}
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
