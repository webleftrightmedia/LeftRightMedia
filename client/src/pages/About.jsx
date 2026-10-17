import React from 'react';
import { Container, Button, SectionLabel } from '../components/ui';
import { Shield, Tv, Zap, MapPin, CheckCircle2 } from 'lucide-react';

const coreStats = [
  { value: '2', label: 'PILOT CITIES', detail: 'Nadiad & Surat (Gujarat)' },
  { value: '55/45', label: 'HOST SPLIT', detail: '55% Host Menus / 45% Paid Ads' },
  { value: '0', label: 'HARDWARE NEEDED', detail: 'Runs on standard Smart TVs' },
  { value: '24hr', label: 'APPROVAL TURNAROUND', detail: 'Editorial broadcast review' },
];

const pillars = [
  {
    icon: Tv,
    title: 'Idle Screens to Active Inventory',
    description:
      'Every café counter, restaurant waiting area, and commercial lobby has a TV. Most run cable news or loop mute videos. We turn those dead screens into high-yield, connected ad inventory.',
  },
  {
    icon: MapPin,
    title: 'Precision in the Physical World',
    description:
      'Digital ads are trapped behind smartphone ad-blockers and banner fatigue. LRM places your brand in front of captive audiences while they drink coffee, shop, or wait for friends.',
  },
  {
    icon: Shield,
    title: 'Privacy Without Compromise',
    description:
      'We strictly reject facial recognition cameras and intrusive tracking. We build public broadcast media networks that respect consumer privacy while delivering real, verified impressions.',
  },
  {
    icon: Zap,
    title: 'Accessible to Local Enterprises',
    description:
      'Traditional highway billboards cost ₹50,000+ per month and lock you in. LRM lets local businesses launch contextual campaigns starting from ₹500 across neighborhood screens.',
  },
];

const timelineSteps = [
  {
    year: 'Phase 01',
    title: 'The Gujarat Pilot Hub',
    description: 'Launched pilot networks across premier cafés, lifestyle retail hubs, and commercial zones in Nadiad and Surat.',
  },
  {
    year: 'Phase 02',
    title: 'Cloud Kiosk Architecture',
    description: 'Engineered a web-native player that operates flawlessly on any browser-equipped TV without requiring proprietary hardware boxes.',
  },
  {
    year: 'Phase 03',
    title: 'Event Digital Signage',
    description: 'Expanded into trade expos, exhibitions, and university festivals with rapid-deploy wayfinding and dynamic sponsor loops.',
  },
  {
    year: 'Phase 04',
    title: 'Gujarat & Tier-2 Expansion',
    description: 'Scaling connected DOOH nodes into Ahmedabad, Vadodara, Rajkot, and nationwide Tier-2/3 commercial corridors.',
  },
];

export default function About() {
  return (
    <article className="bg-concrete">
      {/* 01 Hero Section */}
      <section className="bg-concrete-white border-b border-slate-border py-20 lg:py-28">
        <Container>
          <div className="max-w-3xl">
            <SectionLabel>About Left Right Media</SectionLabel>
            <h1 className="text-display-mobile lg:text-display mt-4 text-ink">
              Building the Media Network Around the Physical World.
            </h1>
            <p className="text-body-lg text-ink-muted mt-6 max-w-2xl leading-relaxed">
              We connect digital screens across physical locations—cafés, retail counters, commercial hubs, and event domes—into a programmatic advertising network that speaks to real people in real places.
            </p>
          </div>

          {/* Core Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 border-t border-slate-border pt-12">
            {coreStats.map((stat) => (
              <div key={stat.label} className="border border-slate-border rounded-md bg-concrete p-6">
                <span className="text-display-mobile font-display text-ink block">{stat.value}</span>
                <span className="text-label-sm text-accent font-semibold block mt-1">{stat.label}</span>
                <p className="text-body-sm text-ink-muted mt-2">{stat.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 02 The Origin Story */}
      <section className="py-20 lg:py-28 bg-concrete border-b border-slate-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="text-headline-lg-mobile lg:text-headline-lg mt-4 text-ink">
                Why We Started Left Right Media.
              </h2>
              <p className="text-body-lg text-ink-muted mt-6 leading-relaxed">
                Online advertising is oversaturated. Feeds are noisy, CPMs are skyrocketing, and users tune out.
              </p>
              <p className="text-body-lg text-ink-muted mt-4 leading-relaxed">
                Yet every day, millions of people gather in physical spaces: waiting for an iced latte in a café, browsing a boutique, or attending an industry expo. In those places, thousands of high-definition screens hang completely silent or loop irrelevant cable television.
              </p>
              <p className="text-body-lg text-ink-muted mt-4 leading-relaxed">
                We founded <strong className="text-ink">Left Right Media</strong> to close this gap. We empower venue owners to turn their idle displays into revenue assets, while giving forward-thinking brands high-attention physical visibility.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="p-8 border border-slate-border rounded-md bg-concrete-white">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="text-accent" size={24} />
                  <h3 className="text-headline-sm text-ink font-semibold">For Venue Partners</h3>
                </div>
                <p className="text-body-md text-ink-muted leading-relaxed">
                  Zero hardware investment. No complex HDMI boxes. You keep 55% of the screen time for your own menus and announcements, while the other 45% earns monthly direct bank deposits.
                </p>
              </div>

              <div className="p-8 border border-slate-border rounded-md bg-concrete-white">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="text-accent" size={24} />
                  <h3 className="text-headline-sm text-ink font-semibold">For Brand Advertisers</h3>
                </div>
                <p className="text-body-md text-ink-muted leading-relaxed">
                  Book slots across curated venues where your actual buyers spend time. Enjoy 100% viewability, verified impression time, and zero risk of banner-blindness.
                </p>
              </div>

              <div className="p-8 border border-slate-border rounded-md bg-concrete-white">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="text-accent" size={24} />
                  <h3 className="text-headline-sm text-ink font-semibold">For Event Organizers</h3>
                </div>
                <p className="text-body-md text-ink-muted leading-relaxed">
                  Instant digital screen infrastructure for multi-hall conventions and festivals. Rotate sponsors, broadcast speaker schedules, and guide visitors via QR-enabled wayfinding.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 03 Core Operating Principles */}
      <section className="py-20 lg:py-28 bg-concrete-white border-b border-slate-border">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel className="justify-center">Core Principles</SectionLabel>
            <h2 className="text-headline-lg-mobile lg:text-headline-lg mt-4 text-ink">
              The Architecture of Trust.
            </h2>
            <p className="text-body-lg text-ink-muted mt-4">
              We design every component—from our web player to our moderation pipeline—around simplicity, transparency, and respect for physical spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-8 border border-slate-border rounded-md bg-concrete hover:border-ink/40 transition-colors duration-200"
                >
                  <div className="w-12 h-12 bg-ink text-white rounded-[4px] flex items-center justify-center mb-6">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <h3 className="text-headline-sm text-ink">{pillar.title}</h3>
                  <p className="text-body-md text-ink-muted mt-3 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 04 Network Evolution Roadmap */}
      <section className="py-20 lg:py-28 bg-concrete border-b border-slate-border">
        <Container>
          <div className="max-w-3xl mb-16">
            <SectionLabel>Roadmap</SectionLabel>
            <h2 className="text-headline-lg-mobile lg:text-headline-lg mt-4 text-ink">
              Where We've Been. Where We're Heading.
            </h2>
            <p className="text-body-lg text-ink-muted mt-4">
              From our first pilot screens in Nadiad to an interconnected network across Western India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {timelineSteps.map((step) => (
              <div key={step.year} className="p-6 border border-slate-border rounded-md bg-concrete-white relative">
                <span className="text-label-sm text-accent font-semibold block mb-2">{step.year}</span>
                <h3 className="text-headline-sm text-ink mb-3">{step.title}</h3>
                <p className="text-body-sm text-ink-muted leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 05 Ground Presence & City Footprint */}
      <section className="py-20 lg:py-28 bg-concrete-white border-b border-slate-border">
        <Container>
          <div className="border border-slate-border rounded-md bg-ink text-white p-8 lg:p-14">
            <div className="max-w-2xl">
              <span className="text-label-sm text-white/50 block mb-2">LOCAL GROUND TEAMS</span>
              <h2 className="text-headline-lg-mobile lg:text-headline-lg text-white">
                On the Ground in Gujarat.
              </h2>
              <p className="text-body-lg text-white/70 mt-4 leading-relaxed">
                We aren't a remote ad network operating behind automated support desks. Our account executives, screen technicians, and creative review team live and work right in your city.
              </p>
              <div className="flex flex-wrap gap-6 mt-8">
                <div>
                  <span className="text-label-md text-accent block">NADIAD PILOT CLUSTER</span>
                  <p className="text-body-sm text-white/60 mt-1">College road, Station road & Commercial centers</p>
                </div>
                <div className="border-l border-white/20 pl-6">
                  <span className="text-label-md text-accent block">SURAT PILOT CLUSTER</span>
                  <p className="text-body-sm text-white/60 mt-1">Vesu, Piplod & Adajan high-footfall cafés & retail</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 06 CTA */}
      <section className="bg-ink text-white py-20 lg:py-28">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-display-mobile lg:text-display text-white">
              Ready to Join the Network?
            </h2>
            <p className="text-body-lg text-white/70 mt-6 leading-relaxed">
              Whether you want your brand seen by thousands of local shoppers or have a TV you want to monetize, we're ready to get you live in 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Button variant="signal" size="lg" href="/advertise">
                Start Advertising →
              </Button>
              <Button variant="outline" size="lg" href="/screen-partners" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                Host a Screen →
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </article>
  );
}
