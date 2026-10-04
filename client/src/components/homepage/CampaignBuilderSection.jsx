import React, { useState } from 'react';
import { Container, SectionLabel, Button } from '../ui';

/**
 * Section 06 — Campaign Builder Visualization
 * A realistic campaign-builder mockup that makes LRM feel like a technology platform.
 */
const audienceOptions = ['Students', 'Young Professionals', 'Shoppers', 'Families', 'Business Visitors'];
const locationOpts = ['Café', 'Retail', 'Commercial', 'Event', 'Public Space'];
const durationOpts = ['3 Days', '7 Days', '14 Days', '30 Days'];

export default function CampaignBuilderSection() {
  const [audience, setAudience] = useState('Young Professionals');
  const [locations, setLocations] = useState(['Café', 'Commercial']);
  const [duration, setDuration] = useState('7 Days');

  const toggleLocation = (loc) => {
    setLocations((prev) =>
      prev.includes(loc) ? prev.filter((l) => l !== loc) : [...prev, loc]
    );
  };

  const screenCount = locations.length * 4; // illustrative calculation

  return (
    <section className="bg-concrete border-b border-slate-border py-20 lg:py-28">
      <Container>
        <SectionLabel>Platform</SectionLabel>
        <h2 className="text-headline-lg-mobile lg:text-headline-lg mt-4 max-w-xl">
          Build a Campaign Around a Place.
        </h2>

        <div className="mt-12 max-w-2xl mx-auto">
          {/* Campaign builder card */}
          <div className="border border-slate-border rounded-md bg-concrete-white overflow-hidden">
            {/* Header */}
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
                        'px-4 py-2 text-body-sm rounded-md border cursor-pointer',
                        'transition-all duration-200',
                        audience === opt
                          ? 'bg-ink text-white border-ink'
                          : 'border-slate-border hover:border-ink/30',
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
                  {locationOpts.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => toggleLocation(loc)}
                      className={[
                        'px-4 py-2 text-body-sm rounded-md border cursor-pointer',
                        'transition-all duration-200',
                        locations.includes(loc)
                          ? 'bg-ink text-white border-ink'
                          : 'border-slate-border hover:border-ink/30',
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
                  {durationOpts.map((d) => (
                    <button
                      key={d}
                      onClick={() => setDuration(d)}
                      className={[
                        'px-4 py-2 text-body-sm rounded-md border cursor-pointer',
                        'transition-all duration-200',
                        duration === d
                          ? 'bg-ink text-white border-ink'
                          : 'border-slate-border hover:border-ink/30',
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

                <Button variant="solid" size="lg" href="/advertise" className="w-full">
                  BUILD CAMPAIGN →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
