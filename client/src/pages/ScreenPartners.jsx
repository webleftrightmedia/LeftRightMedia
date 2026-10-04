import React from 'react';
import { Container, Button, SectionLabel } from '../components/ui';
import { trackEvent } from '../utils/analytics';

/**
 * /screen-partners — Screen Partner journey page.
 * Shows: Hero, partnership flow, LRM responsibilities, and application CTA.
 */

const partnerFlow = [
  { label: 'YOUR SCREEN', sublabel: 'You own a digital screen in a commercial location.' },
  { label: 'JOIN LRM', sublabel: 'Register your screen with the LeftRightMedia network.' },
  { label: 'AVAILABLE INVENTORY', sublabel: 'Your screen becomes part of an advertising network.' },
  { label: 'CAMPAIGNS', sublabel: 'LRM connects your screen with advertising campaigns.' },
  { label: 'REVENUE', sublabel: 'Earn from advertising displayed on your screen.' },
];

const lrmResponsibilities = [
  'Advertiser acquisition',
  'Campaign management',
  'Content scheduling',
  'Advertising operations',
  'Reporting',
];

export default function ScreenPartners() {
  return (
    <>
      {/* Hero */}
      <section className="bg-concrete-white border-b border-slate-border py-20 lg:py-28">
        <Container>
          <div className="max-w-2xl">
            <SectionLabel>Screen Partners</SectionLabel>
            <h1 className="text-display-mobile lg:text-display mt-4">
              Have a Screen?<br />
              Put It to Work.
            </h1>
            <p className="text-body-lg text-ink-muted mt-6 max-w-xl">
              Turn your screen into advertising inventory. Your screen already has an audience — LeftRightMedia helps you monetize that attention.
            </p>
            <div className="mt-8">
              <Button
                variant="solid"
                size="lg"
                href="/contact"
                onClick={() => trackEvent('cta_click', { page: 'screen-partners', type: 'apply' })}
              >
                Apply to Become a Screen Partner →
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Partnership Flow */}
      <section className="bg-concrete border-b border-slate-border py-20 lg:py-28">
        <Container>
          <SectionLabel>Process</SectionLabel>
          <h2 className="text-headline-lg-mobile lg:text-headline-lg mt-4">
            How It Works
          </h2>

          <div className="mt-12 max-w-xl mx-auto flex flex-col gap-1">
            {partnerFlow.map((step, i) => (
              <React.Fragment key={step.label}>
                <div className="border border-slate-border rounded-md bg-concrete-white px-6 py-5 flex items-center justify-between">
                  <div>
                    <span className="text-label-md text-ink block">{step.label}</span>
                    <span className="text-body-sm text-ink-muted mt-0.5 block">{step.sublabel}</span>
                  </div>
                  <span className="text-label-sm text-ink-muted tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                {i < partnerFlow.length - 1 && (
                  <div className="flex justify-center py-1">
                    <div className="w-px h-4 bg-ink/20" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </Container>
      </section>

      {/* What LRM Handles */}
      <section className="bg-concrete-white border-b border-slate-border py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel>Partnership</SectionLabel>
              <h2 className="text-headline-lg-mobile lg:text-headline-lg mt-4">
                What LRM Handles
              </h2>
              <p className="text-body-lg text-ink-muted mt-4 max-w-md">
                You provide the screen and the location. We handle the advertising operations.
              </p>
            </div>

            <div className="space-y-3">
              {lrmResponsibilities.map((item, i) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border border-slate-border rounded-md bg-concrete px-6 py-4"
                >
                  <span className="text-label-sm text-ink-muted tabular-nums w-8">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-headline-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-ink text-white py-20 lg:py-28">
        <Container>
          <div className="text-center">
            <h2 className="text-headline-lg-mobile lg:text-headline-lg max-w-xl mx-auto">
              Ready to turn your screen into advertising inventory?
            </h2>
            <div className="mt-8">
              <Button
                variant="signal"
                size="lg"
                href="/contact"
                onClick={() => trackEvent('cta_click', { page: 'screen-partners', type: 'final_cta' })}
              >
                Apply to Become a Screen Partner →
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
