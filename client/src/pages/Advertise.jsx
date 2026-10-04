import React, { useState } from 'react';
import { Container, Button, SectionLabel } from '../components/ui';
import { trackEvent } from '../utils/analytics';

/**
 * /advertise — Advertiser journey page.
 * Shows: How it works, campaign types, campaign builder, and a CTA.
 */

const howItWorks = [
  { step: '01', title: 'Tell us your objective', description: 'What do you want your audience to know, feel, or do?' },
  { step: '02', title: 'Choose your audience', description: 'Students, professionals, shoppers, families — who matters most?' },
  { step: '03', title: 'Choose locations', description: 'Cafés, retail, commercial spaces, events — where are they?' },
  { step: '04', title: 'Select campaign duration', description: 'A few days, a week, or an ongoing presence.' },
  { step: '05', title: 'LRM builds your network', description: 'We connect the right screens in the right places.' },
  { step: '06', title: 'Campaign goes live', description: 'Your brand appears in the physical world.' },
];

const campaignTypes = [
  {
    title: 'Local Campaign',
    description: 'Target a single area or neighbourhood with focused messaging.',
  },
  {
    title: 'Multi-Location Campaign',
    description: 'Run across multiple locations in a city for broader coverage.',
  },
  {
    title: 'Audience Network',
    description: 'Reach a specific audience type wherever they go in the network.',
  },
  {
    title: 'Event Campaign',
    description: 'Temporary high-impact advertising around a specific event.',
  },
];

const audienceOptions = ['Students', 'Young Professionals', 'Shoppers', 'Families', 'Business Visitors'];
const locationOptions = ['Café', 'Retail', 'Commercial', 'Event', 'Public Space'];
const durationOptions = ['3 Days', '7 Days', '14 Days', '30 Days'];

export default function Advertise() {
  const [audience, setAudience] = useState('Young Professionals');
  const [locations, setLocations] = useState(['Café', 'Commercial']);
  const [duration, setDuration] = useState('7 Days');

  const toggleLocation = (loc) => {
    setLocations((prev) =>
      prev.includes(loc) ? prev.filter((l) => l !== loc) : [...prev, loc]
    );
  };

  const screenCount = locations.length * 4;

  return (
    <>
      {/* Hero */}
      <section className="bg-concrete-white border-b border-slate-border py-20 lg:py-28">
        <Container>
          <div className="max-w-2xl">
            <SectionLabel>Advertise</SectionLabel>
            <h1 className="text-display-mobile lg:text-display mt-4">
              Put Your Brand Where Your Audience Already Is.
            </h1>
            <p className="text-body-lg text-ink-muted mt-6 max-w-xl">
              Build campaigns around locations, audiences and moments.
            </p>
            <div className="mt-8">
              <Button
                variant="solid"
                size="lg"
                href="/contact"
                onClick={() => trackEvent('cta_click', { page: 'advertise', type: 'start_campaign' })}
              >
                Start a Campaign →
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="bg-concrete border-b border-slate-border py-20 lg:py-28">
        <Container>
          <SectionLabel>Process</SectionLabel>
          <h2 className="text-headline-lg-mobile lg:text-headline-lg mt-4">
            How It Works
          </h2>

          <div className="mt-12 max-w-2xl">
            {howItWorks.map((item, i) => (
              <div key={item.step} className="flex gap-6">
                {/* Timeline rail */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-ink text-white flex items-center justify-center text-label-md shrink-0">
                    {item.step}
                  </div>
                  {i < howItWorks.length - 1 && (
                    <div className="w-px flex-1 bg-ink/15 min-h-[40px]" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8">
                  <h3 className="text-headline-sm">{item.title}</h3>
                  <p className="text-body-md text-ink-muted mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Campaign Types */}
      <section className="bg-concrete-white border-b border-slate-border py-20 lg:py-28">
        <Container>
          <SectionLabel>Campaigns</SectionLabel>
          <h2 className="text-headline-lg-mobile lg:text-headline-lg mt-4">
            Campaign Types
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            {campaignTypes.map((type) => (
              <div
                key={type.title}
                className="border border-slate-border rounded-md p-8 bg-concrete hover:border-ink/30 transition-colors duration-200"
              >
                <h3 className="text-headline-sm mb-2">{type.title}</h3>
                <p className="text-body-md text-ink-muted">{type.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Campaign Builder Visualization */}
      <section className="bg-concrete border-b border-slate-border py-20 lg:py-28">
        <Container>
          <SectionLabel>Builder</SectionLabel>
          <h2 className="text-headline-lg-mobile lg:text-headline-lg mt-4">
            Build Your Campaign
          </h2>

          <div className="mt-12 max-w-2xl mx-auto">
            <div className="border border-slate-border rounded-md bg-concrete-white overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-border bg-concrete flex items-center justify-between">
                <span className="text-label-lg">CAMPAIGN BUILDER</span>
                <span className="w-2 h-2 rounded-full bg-success animate-pulse-dot" />
              </div>

              <div className="p-6 space-y-6">
                {/* Audience */}
                <div>
                  <span className="text-label-sm text-ink-muted block mb-3">AUDIENCE</span>
                  <div className="flex flex-wrap gap-2">
                    {audienceOptions.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setAudience(opt)}
                        className={[
                          'px-4 py-2 text-body-sm rounded-md border cursor-pointer transition-all duration-200',
                          audience === opt ? 'bg-ink text-white border-ink' : 'border-slate-border hover:border-ink/30',
                        ].join(' ')}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Locations */}
                <div>
                  <span className="text-label-sm text-ink-muted block mb-3">LOCATIONS</span>
                  <div className="flex flex-wrap gap-2">
                    {locationOptions.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => toggleLocation(loc)}
                        className={[
                          'px-4 py-2 text-body-sm rounded-md border cursor-pointer transition-all duration-200',
                          locations.includes(loc) ? 'bg-ink text-white border-ink' : 'border-slate-border hover:border-ink/30',
                        ].join(' ')}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Duration */}
                <div>
                  <span className="text-label-sm text-ink-muted block mb-3">DURATION</span>
                  <div className="flex flex-wrap gap-2">
                    {durationOptions.map((d) => (
                      <button
                        key={d}
                        onClick={() => setDuration(d)}
                        className={[
                          'px-4 py-2 text-body-sm rounded-md border cursor-pointer transition-all duration-200',
                          duration === d ? 'bg-ink text-white border-ink' : 'border-slate-border hover:border-ink/30',
                        ].join(' ')}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Summary */}
                <div className="pt-4 border-t border-slate-border">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div>
                      <span className="text-label-sm text-ink-muted block">AUDIENCE</span>
                      <span className="text-headline-sm mt-1 block">{audience}</span>
                    </div>
                    <div>
                      <span className="text-label-sm text-ink-muted block">LOCATIONS</span>
                      <span className="text-headline-sm mt-1 block">{locations.join(' + ') || '—'}</span>
                    </div>
                    <div>
                      <span className="text-label-sm text-ink-muted block">COVERAGE</span>
                      <span className="text-headline-sm mt-1 block tabular-nums">{screenCount} Screens</span>
                    </div>
                  </div>

                  <Button
                    variant="solid"
                    size="lg"
                    href="/contact"
                    className="w-full"
                    onClick={() => trackEvent('cta_click', { page: 'advertise', type: 'build_campaign' })}
                  >
                    BUILD CAMPAIGN →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-ink text-white py-20 lg:py-28">
        <Container>
          <div className="text-center">
            <h2 className="text-headline-lg-mobile lg:text-headline-lg max-w-xl mx-auto">
              Ready to put your brand into the real world?
            </h2>
            <div className="mt-8">
              <Button
                variant="signal"
                size="lg"
                href="/contact"
                onClick={() => trackEvent('cta_click', { page: 'advertise', type: 'final_cta' })}
              >
                Start Advertising →
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
