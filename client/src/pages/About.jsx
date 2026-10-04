import React from 'react';
import { Container, Button, SectionLabel } from '../components/ui';

/**
 * /about — About page.
 * Shows: Hero, vision, mission, and what LRM is building.
 */

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-concrete-white border-b border-slate-border py-20 lg:py-28">
        <Container>
          <div className="max-w-2xl">
            <SectionLabel>About</SectionLabel>
            <h1 className="text-display-mobile lg:text-display mt-4">
              We're Building the Media Network Around the Physical World.
            </h1>
            <p className="text-body-lg text-ink-muted mt-6 max-w-xl">
              LeftRightMedia is building a connected digital advertising platform that brings brands, audiences, screens and physical places together.
            </p>
          </div>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="bg-concrete border-b border-slate-border py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="border border-slate-border rounded-md bg-concrete-white p-8">
              <span className="text-label-lg text-ink-muted block mb-4">VISION</span>
              <p className="text-headline-sm text-ink">
                Make every suitable digital screen a potential part of a connected advertising network.
              </p>
            </div>

            {/* Mission */}
            <div className="border border-slate-border rounded-md bg-concrete-white p-8">
              <span className="text-label-lg text-ink-muted block mb-4">MISSION</span>
              <p className="text-headline-sm text-ink">
                Make physical-space advertising more connected, accessible and measurable.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* What We're Building */}
      <section className="bg-concrete-white border-b border-slate-border py-20 lg:py-28">
        <Container>
          <SectionLabel>Platform</SectionLabel>
          <h2 className="text-headline-lg-mobile lg:text-headline-lg mt-4">
            What We're Building
          </h2>

          <div className="mt-12 max-w-2xl">
            <div className="space-y-6">
              <div className="border-l-2 border-ink pl-6">
                <h3 className="text-headline-sm mb-2">A Connected Advertising Network</h3>
                <p className="text-body-lg text-ink-muted">
                  We're connecting digital screens across physical locations — cafés, retail, commercial spaces, events — into a single advertising network that brands can use to reach real audiences.
                </p>
              </div>

              <div className="border-l-2 border-ink pl-6">
                <h3 className="text-headline-sm mb-2">Three Audiences, One Platform</h3>
                <p className="text-body-lg text-ink-muted">
                  Advertisers reach their audiences. Screen partners monetize their screens. Event organizers build digital infrastructure around their events. Everyone benefits from the connected network.
                </p>
              </div>

              <div className="border-l-2 border-ink pl-6">
                <h3 className="text-headline-sm mb-2">Physical Meets Digital</h3>
                <p className="text-body-lg text-ink-muted">
                  The internet changed digital advertising forever. We believe the next frontier is connecting that capability to the physical world — where people actually live, work, shop and gather.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Network Status */}
      <section className="bg-concrete border-b border-slate-border py-20 lg:py-28">
        <Container>
          <div className="text-center">
            <h2 className="text-headline-lg-mobile lg:text-headline-lg">
              Our Network Is Growing.
            </h2>
            <p className="text-body-lg text-ink-muted mt-4 max-w-lg mx-auto">
              We're building the advertising infrastructure for the physical world — one screen, one location, one event at a time.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 px-6 py-3 border border-slate-border rounded-md bg-concrete-white">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse-dot" />
              <span className="text-label-md text-ink">NETWORK EXPANDING</span>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-ink text-white py-20 lg:py-28">
        <Container>
          <div className="text-center">
            <h2 className="text-headline-lg-mobile lg:text-headline-lg max-w-xl mx-auto">
              Want to be part of what we're building?
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button variant="signal" size="lg" href="/advertise">
                Advertise with LRM →
              </Button>
              <Button variant="outline" size="lg" href="/contact" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                Get in Touch →
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
