import React from 'react';
import { Container, SectionLabel, Button } from '../ui';

/**
 * Section 08 — Screen Partners introduction.
 * Shows the value flow: YOUR SCREEN → JOIN → CAMPAIGNS → EARN.
 */
const flowSteps = [
  { label: 'YOUR SCREEN', sublabel: 'Already has an audience' },
  { label: 'JOIN THE NETWORK', sublabel: 'Connect to LRM' },
  { label: 'RECEIVE CAMPAIGNS', sublabel: 'From LRM advertisers' },
  { label: 'EARN FROM YOUR INVENTORY', sublabel: 'Monetize your screen' },
];

export default function ScreenPartnersSection() {
  return (
    <section className="bg-concrete border-b border-slate-border py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div>
            <SectionLabel>Screen Partners</SectionLabel>
            <h2 className="text-headline-lg-mobile lg:text-headline-lg mt-4">
              Have a Screen?<br />
              Put It to Work.
            </h2>
            <p className="text-body-lg text-ink-muted mt-4 max-w-md">
              Your screen already has an audience. LeftRightMedia helps turn that attention into advertising inventory.
            </p>
            <div className="mt-8">
              <Button variant="outline" size="lg" href="/screen-partners">
                Become a Screen Partner →
              </Button>
            </div>
          </div>

          {/* Flow visualization */}
          <div className="flex flex-col gap-1">
            {flowSteps.map((step, i) => (
              <React.Fragment key={step.label}>
                <div className={['border rounded-md bg-concrete-white px-6 py-4 flex items-center justify-between', i === flowSteps.length - 1 ? 'border-success/40 bg-success/5' : 'border-slate-border'].join(' ')}>
                  <div>
                    <span className="text-label-md text-ink block">{step.label}</span>
                    <span className="text-body-sm text-ink-muted">{step.sublabel}</span>
                  </div>
                  <span className={['text-label-sm tabular-nums', i === flowSteps.length - 1 ? 'text-success font-bold' : 'text-ink-muted'].join(' ')}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                {i < flowSteps.length - 1 && (
                  <div className="flex justify-center py-1">
                    <div className="w-px h-4 bg-ink/20" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
