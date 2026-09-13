import React from 'react';
import { Container, SectionLabel } from './ui';
import { Wifi, ShieldCheck, Headphones } from 'lucide-react';

const trustBadges = [
  {
    icon: Wifi,
    title: 'No Extra Hardware',
    description: 'Got a Smart TV? That\'s all you need. Plug in and earn.',
  },
  {
    icon: ShieldCheck,
    title: 'No Lock-In',
    description: 'Month-to-month. Disconnect your screen whenever you want.',
  },
  {
    icon: Headphones,
    title: 'Real People, Not Chatbots',
    description: 'Our team is on the ground in your city. Call, WhatsApp, or walk in.',
  },
];

export default function TrustSignals() {
  return (
    <section className="py-20 lg:py-24 bg-ink text-white">
      <Container>
        <div className="text-center mb-4">
          <SectionLabel className="justify-center !text-white/40">From the Ground</SectionLabel>
          <h2 className="text-headline-lg-mobile lg:text-headline-lg mt-3 text-white">
            Don't take our word for it.
          </h2>
        </div>

        {/* Quote */}
        <blockquote className="max-w-3xl mx-auto text-center my-12">
          <p className="text-headline-md lg:text-headline-lg text-white/80 font-display italic">
            "We put up one screen at the counter. Forgot about it. Now it pays for our
            monthly chai supply and then some. ₹15,000 last month — from a TV that was
            showing nothing."
          </p>
          <footer className="mt-6">
            <span className="text-label-md text-white/50">
              — Early Pilot Partner, Nadiad
            </span>
          </footer>
        </blockquote>

        <div className="h-px bg-white/10 my-12" />

        {/* Trust badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div key={badge.title} className="text-center">
                <div className="w-12 h-12 bg-white/10 rounded-[4px] flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-accent" />
                </div>
                <h3 className="text-headline-sm text-white">{badge.title}</h3>
                <p className="text-body-md text-white/60 mt-2">{badge.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
