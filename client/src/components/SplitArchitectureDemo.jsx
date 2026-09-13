import React, { useState, useEffect } from 'react';
import { Container, SectionLabel } from './ui';
import pricing from '../data/pricing.config';

const hostContentItems = [
  'Today\'s Menu — Lunch Specials',
  'Happy Hour — 4pm to 7pm',
  'Weekend Brunch Menu',
  'Chef\'s Recommendations',
];

const adContentItems = [
  'Patel Electronics — Diwali Sale',
  'Sunrise Gym — New Year Offer',
  'City Hospital — Free Health Camp',
  'Royal Jewellers — Wedding Season',
];

export default function SplitArchitectureDemo() {
  const [hostIndex, setHostIndex] = useState(0);
  const [adIndex, setAdIndex] = useState(0);

  // Cycle content to demonstrate the split
  useEffect(() => {
    const hostTimer = setInterval(() => {
      setHostIndex((i) => (i + 1) % hostContentItems.length);
    }, 3000);
    const adTimer = setInterval(() => {
      setAdIndex((i) => (i + 1) % adContentItems.length);
    }, 4000);
    return () => {
      clearInterval(hostTimer);
      clearInterval(adTimer);
    };
  }, []);

  return (
    <section id="split-architecture" className="py-20 lg:py-24 bg-concrete-white border-y border-slate-border">
      <Container>
        <div className="text-center mb-12">
          <SectionLabel className="justify-center">The Split</SectionLabel>
          <h2 className="text-headline-lg-mobile lg:text-headline-lg mt-3">
            One screen. Two purposes.
          </h2>
          <p className="text-body-lg text-ink-muted mt-3 max-w-2xl mx-auto">
            {pricing.revenueShare.hostPercent}% of the screen stays yours — your menu, your promos, your brand.
            {' '}The other {pricing.revenueShare.platformPercent}% runs local ads and puts money in your pocket.
          </p>
        </div>

        {/* Demo screen */}
        <div className="max-w-3xl mx-auto">
          <div className="border border-slate-border rounded-xl shadow-sm overflow-hidden">
            {/* Screen bezel */}
            <div className="bg-ink px-3 py-2 flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-error/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-warning/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-success/80" />
              </div>
              <span className="text-label-sm text-white/40 ml-2">LIVE PREVIEW — CAFÉ MOSAIC, NADIAD</span>
            </div>

            {/* Split display */}
            <div className="aspect-video flex">
              {/* Host content — 55% */}
              <div
                className="bg-ink-light flex flex-col items-center justify-center relative"
                style={{ width: `${pricing.revenueShare.hostPercent}%` }}
              >
                <div className="absolute top-3 left-3">
                  <span className="text-label-sm text-white/30">HOST CONTENT</span>
                </div>
                <div className="text-center px-6">
                  <p className="text-white/20 text-label-sm mb-2">NOW SHOWING</p>
                  <p className="text-white font-display text-lg md:text-xl font-semibold">
                    {hostContentItems[hostIndex]}
                  </p>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="text-label-sm text-accent tabular-nums">
                    {pricing.revenueShare.hostPercent}%
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="w-px bg-slate-divider" />

              {/* Ad zone — 45% */}
              <div
                className="bg-slate-dark flex flex-col items-center justify-center relative"
                style={{ width: `${pricing.revenueShare.platformPercent}%` }}
              >
                <div className="absolute top-3 left-3">
                  <span className="text-label-sm text-white/30">AD ZONE</span>
                </div>
                <div className="text-center px-4">
                  <p className="text-white/20 text-label-sm mb-2">SPONSORED</p>
                  <p className="text-white font-display text-sm md:text-base font-semibold">
                    {adContentItems[adIndex]}
                  </p>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="text-label-sm text-accent tabular-nums">
                    {pricing.revenueShare.platformPercent}%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Labels below */}
          <div className="flex mt-4 gap-4">
            <div style={{ width: `${pricing.revenueShare.hostPercent}%` }}>
              <p className="text-label-md text-ink">{pricing.revenueShare.hostPercent}% Your Content</p>
              <p className="text-body-sm text-ink-muted">Menus, offers, branding — whatever you want, whenever you want</p>
            </div>
            <div style={{ width: `${pricing.revenueShare.platformPercent}%` }}>
              <p className="text-label-md text-ink">{pricing.revenueShare.platformPercent}% Ads That Pay You</p>
              <p className="text-body-sm text-ink-muted">Local businesses advertise here — and you earn from every slot</p>
            </div>
          </div>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {[
            'Auto-Scheduling',
            'Content Moderation',
            'Real-Time Analytics',
            'Remote Management',
          ].map((feature) => (
            <span
              key={feature}
              className="text-label-md text-ink-muted border border-slate-border rounded-full px-5 py-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm cursor-default bg-white"
            >
              {feature}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
