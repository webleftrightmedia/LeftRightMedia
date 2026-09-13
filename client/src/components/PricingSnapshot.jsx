import React from 'react';
import { Container, Button, SectionLabel } from './ui';
import pricing from '../data/pricing.config';
import { ArrowRight } from 'lucide-react';

export default function PricingSnapshot() {
  return (
    <section id="pricing" className="py-20 lg:py-24 bg-concrete-white border-y border-slate-border">
      <Container>
        <div className="text-center mb-12">
          <SectionLabel className="justify-center">Pricing</SectionLabel>
          <h2 className="text-headline-lg-mobile lg:text-headline-lg mt-3">
            What it costs. Nothing complicated.
          </h2>
          <p className="text-body-lg text-ink-muted mt-3">
            No surprise fees. No annual contracts. Walk away whenever.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Advertiser pricing */}
          <div className="border border-slate-border rounded-[4px] p-8 flex flex-col h-full">
            <span className="text-label-lg text-ink">For Advertisers</span>
            <div className="mt-6 mb-4">
              <span className="text-display-mobile font-display tabular-nums">
                {pricing.advertiser.currency}{pricing.advertiser.amount}
              </span>
              <span className="text-body-lg text-ink-muted ml-2">
                / {pricing.advertiser.unit}
              </span>
            </div>
            <p className="text-body-md text-ink-muted mb-6">
              {pricing.advertiser.description}
            </p>
            <ul className="space-y-2 mb-8">
              {[
                'Choose any screen in any city',
                'Upload your own creative or use ours',
                'See exactly how many people saw it',
                'Cancel with 24 hours notice — full refund',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-body-md">
                  <ArrowRight size={14} className="text-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-4">
              <Button variant="solid" href="#lead-form" className="w-full">
                Start Advertising
              </Button>
            </div>
          </div>

          {/* Host pricing */}
          <div className="border border-ink rounded-[4px] p-8 bg-ink text-white flex flex-col h-full">
            <span className="text-label-lg text-white">For Hosts</span>
            <div className="mt-6 mb-4">
              <span className="text-display-mobile font-display">
                {pricing.host.label}
              </span>
            </div>
            <p className="text-body-md text-white/60 mb-6">
              {pricing.host.description}
            </p>
            <ul className="space-y-2 mb-8">
              {[
                'Use the TV you already have',
                `Keep ${pricing.revenueShare.hostPercent}% of ad revenue`,
                'Paid monthly, straight to your bank',
                'Unplug anytime — no questions asked',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-body-md text-white/80">
                  <ArrowRight size={14} className="text-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-4">
              <Button variant="signal" href="#lead-form" className="w-full">
                Sign Up as Host
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
