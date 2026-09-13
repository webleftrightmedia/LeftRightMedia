import React from 'react';
import { Container, Button, SectionLabel } from './ui';
import { Monitor, TrendingUp, Shield, Zap, BarChart3, MapPin } from 'lucide-react';

const hostBenefits = [
  {
    icon: Monitor,
    title: 'Your TV, Your Rules',
    description: 'Works with any Smart TV you already own. No new hardware, no setup headaches, no technician visits.',
  },
  {
    icon: TrendingUp,
    title: 'Earn While You Work',
    description: 'Your screen makes money in the background. Payouts hit your bank account every month — UPI or NEFT.',
  },
  {
    icon: Shield,
    title: 'You Stay in Control',
    description: '55% of screen time is still yours — show your menu, your promos, your brand. We only use the rest.',
  },
];

const advertiserBenefits = [
  {
    icon: MapPin,
    title: 'Reach People, Not Profiles',
    description: 'Your ad plays in real cafés, gyms, and shops — in front of actual humans, not bots or scroll-past impressions.',
  },
  {
    icon: Zap,
    title: 'Live in Under an Hour',
    description: 'Pick a screen, pick a time slot, upload your creative. No agency, no minimum spend, no 2-week wait.',
  },
  {
    icon: BarChart3,
    title: 'Know What You Paid For',
    description: 'We track foot traffic and screen uptime — not vanity metrics. You see exactly where your ₹500 went.',
  },
];

function BenefitCard({ icon: Icon, title, description }) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 shrink-0 bg-concrete rounded-[4px] flex items-center justify-center">
        <Icon size={20} className="text-ink" />
      </div>
      <div>
        <h4 className="text-headline-sm">{title}</h4>
        <p className="text-body-md text-ink-muted mt-1">{description}</p>
      </div>
    </div>
  );
}

export default function ValueProps() {
  return (
    <section className="py-20 lg:py-24">
      <Container>
        <div className="text-center mb-16">
          <SectionLabel className="justify-center">How It Works</SectionLabel>
          <h2 className="text-headline-lg-mobile lg:text-headline-lg mt-3">
            Two sides. One network.
          </h2>
          <p className="text-body-lg text-ink-muted mt-3 max-w-2xl mx-auto">
            Got a screen? Earn from it. Need eyeballs? Rent one. Either way, you're live in a day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* For Hosts */}
          <div className="bg-concrete-white border border-slate-border rounded-[4px] p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-label-lg text-ink">For Venue Owners</span>
              <span className="text-label-sm text-ink-muted">— Earn from your idle screen</span>
            </div>
            <div className="space-y-6">
              {hostBenefits.map((b) => (
                <BenefitCard key={b.title} {...b} />
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-slate-border">
              <Button variant="outline" href="#lead-form">
                List My Screen — Free →
              </Button>
            </div>
          </div>

          {/* For Advertisers */}
          <div className="bg-concrete-white border border-slate-border rounded-[4px] p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-label-lg text-ink">For Advertisers</span>
              <span className="text-label-sm text-ink-muted">— Put your brand on real screens</span>
            </div>
            <div className="space-y-6">
              {advertiserBenefits.map((b) => (
                <BenefitCard key={b.title} {...b} />
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-slate-border">
              <Button variant="solid" href="#lead-form">
                Book Your First Slot →
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
