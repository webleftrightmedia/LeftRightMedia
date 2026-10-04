import React, { useState, useEffect } from 'react';
import { Container, Button, SectionLabel } from '../components/ui';
import { trackEvent } from '../utils/analytics';

/**
 * /events — LRM Events page.
 * Shows: Hero, capabilities, event screen mockup, event network flow, and CTA.
 */

const capabilities = [
  { title: 'ADVERTISE', description: 'Promote exhibitors, sponsors and brands across event screens.' },
  { title: 'INFORM', description: 'Show schedules, announcements and event updates in real time.' },
  { title: 'NAVIGATE', description: 'Help visitors find booths, domes and important locations.' },
  { title: 'CONNECT', description: 'Use QR experiences to take visitors from the physical event to digital content.' },
];

const networkFlow = [
  { label: 'EVENT ORGANIZER', sublabel: 'Plans the event infrastructure' },
  { label: 'LRM EVENT NETWORK', sublabel: 'Digital screens deployed across the venue' },
  { label: 'ADS + INFORMATION + NAVIGATION', sublabel: 'Multi-purpose screen content' },
  { label: 'VISITORS + EXHIBITORS + SPONSORS', sublabel: 'Everyone benefits from the network' },
];

const screenModes = [
  { label: 'ADVERTISE', content: 'ABC TECHNOLOGIES', sub: 'HALL B · STALL 24' },
  { label: 'INFORM', content: 'KEYNOTE AT 3:00 PM', sub: 'MAIN STAGE · HALL A' },
  { label: 'NAVIGATE', content: '← HALL A          HALL C →', sub: 'YOU ARE HERE · HALL B' },
  { label: 'ENGAGE', content: '[ SCAN FOR DETAILS ]', sub: 'QR EXPERIENCE' },
];

export default function Events() {
  const [modeIndex, setModeIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setModeIndex((prev) => (prev + 1) % screenModes.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const mode = screenModes[modeIndex];

  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-white border-b border-slate-divider py-20 lg:py-28">
        <Container>
          <div className="max-w-2xl">
            <span className="text-label-md text-accent tracking-[0.06em]">LRM EVENTS</span>
            <h1 className="text-display-mobile lg:text-display mt-4">
              Turn Events Into Connected Media Networks.
            </h1>
            <p className="text-body-lg text-white/50 mt-6 max-w-xl">
              Digital advertising, information and navigation — built around your event.
            </p>
            <div className="mt-8">
              <Button
                variant="signal"
                size="lg"
                href="/contact"
                onClick={() => trackEvent('cta_click', { page: 'events', type: 'plan_network' })}
              >
                Plan Your Event Network →
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="bg-ink-light text-white border-b border-slate-divider py-20 lg:py-28">
        <Container>
          <h2 className="text-headline-lg-mobile lg:text-headline-lg text-center mb-12">
            Advertise. Inform. Navigate. Connect.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className="border border-white/10 rounded-md p-6 hover:border-white/25 transition-colors duration-200"
              >
                <span className="text-label-sm text-white/40 block mb-4">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-headline-sm text-white mb-2">{cap.title}</h3>
                <p className="text-body-md text-white/50">{cap.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Event Screen Mockup */}
      <section className="bg-ink text-white border-b border-slate-divider py-20 lg:py-28">
        <Container>
          <div className="text-center mb-12">
            <SectionLabel className="text-white/40">Screen Experience</SectionLabel>
            <h2 className="text-headline-lg-mobile lg:text-headline-lg mt-4">
              One Screen. Multiple Jobs.
            </h2>
          </div>

          <div className="max-w-xl mx-auto">
            <div className="border border-white/15 rounded-md overflow-hidden">
              <div className="px-6 py-3 border-b border-white/10 flex items-center justify-between bg-white/5">
                <span className="text-label-md text-accent">TECH VAPI 2026</span>
                <span className="text-label-sm text-white/30">ILLUSTRATIVE EXAMPLE</span>
              </div>

              <div className="px-6 py-12 text-center min-h-[200px] flex flex-col items-center justify-center">
                <p className="text-headline-lg text-white transition-all duration-500">{mode.content}</p>
                <p className="text-label-md text-white/40 mt-3">{mode.sub}</p>
              </div>

              <div className="px-6 py-3 border-t border-white/10 flex items-center gap-3">
                {screenModes.map((m, i) => (
                  <button
                    key={m.label}
                    onClick={() => setModeIndex(i)}
                    className={[
                      'text-label-sm cursor-pointer transition-colors duration-200',
                      i === modeIndex ? 'text-accent' : 'text-white/30 hover:text-white/50',
                    ].join(' ')}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Event Network Flow */}
      <section className="bg-concrete-white border-b border-slate-border py-20 lg:py-28">
        <Container>
          <SectionLabel>Network</SectionLabel>
          <h2 className="text-headline-lg-mobile lg:text-headline-lg mt-4">
            How the Event Network Works
          </h2>

          <div className="mt-12 max-w-xl mx-auto flex flex-col gap-1">
            {networkFlow.map((step, i) => (
              <React.Fragment key={step.label}>
                <div className="border border-slate-border rounded-md bg-concrete px-6 py-5 flex items-center justify-between">
                  <div>
                    <span className="text-label-md text-ink block">{step.label}</span>
                    <span className="text-body-sm text-ink-muted mt-0.5 block">{step.sublabel}</span>
                  </div>
                  <span className="text-label-sm text-ink-muted tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                {i < networkFlow.length - 1 && (
                  <div className="flex justify-center py-1">
                    <div className="w-px h-4 bg-ink/20" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </Container>
      </section>

      {/* Event services detail */}
      <section className="bg-concrete border-b border-slate-border py-20 lg:py-28">
        <Container>
          <SectionLabel>Services</SectionLabel>
          <h2 className="text-headline-lg-mobile lg:text-headline-lg mt-4">
            What LRM Events Can Provide
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {[
              'Exhibitor Advertising',
              'Sponsor Visibility',
              'Visitor Information',
              'Wayfinding & Navigation',
              'QR Engagement',
              'Event Network Infrastructure',
            ].map((service, i) => (
              <div
                key={service}
                className="border border-slate-border rounded-md bg-concrete-white px-6 py-5 hover:border-ink/30 transition-colors duration-200"
              >
                <span className="text-label-sm text-ink-muted block mb-2">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-headline-sm">{service}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-ink text-white py-20 lg:py-28">
        <Container>
          <div className="text-center">
            <span className="text-label-md text-accent tracking-[0.06em] block mb-4">LRM EVENTS</span>
            <h2 className="text-headline-lg-mobile lg:text-headline-lg max-w-xl mx-auto">
              Ready to build a digital network around your event?
            </h2>
            <div className="mt-8">
              <Button
                variant="signal"
                size="lg"
                href="/contact"
                onClick={() => trackEvent('cta_click', { page: 'events', type: 'final_cta' })}
              >
                Plan Your Event Network →
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
