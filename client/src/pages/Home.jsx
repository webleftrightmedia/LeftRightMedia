import React from 'react';
import {
  HeroSection,
  PlatformSection,
  ImpactSection,
  AudienceSelectorSection,
  CampaignBuilderSection,
  ScreenPartnersSection,
  EventsIntroSection,
  EventCapabilitiesSection,
  EventScreenSection,
  PhysicalDigitalSection,
  ContentTypesSection,
  WhyLrmSection,
  DayTimelineSection,
  ProofSection,
  PathSelectionSection,
  FinalCtaSection,
} from '../components/homepage';
import TrustSignals from '../components/TrustSignals';
import FAQ from '../components/FAQ';

/**
 * Homepage — exact storytelling sequence per master specification.
 * Seamless narrative flow with alternating contrast and high engagement.
 */
export default function Home() {
  return (
    <>
      {/* 01 Hero */} <HeroSection />
      {/* 02 Platform Architecture */} <PlatformSection />
      {/* 04 Network Impact */} <ImpactSection />
      {/* 05 Audience Selector */} <AudienceSelectorSection />
      {/* 06 Interactive Campaign Builder */} <CampaignBuilderSection />
      {/* 07 Screen Partners Value Flow */} <ScreenPartnersSection />
      {/* 08 Events Introduction */} <EventsIntroSection />
      {/* 09 Event Capabilities */} <EventCapabilitiesSection />
      {/* 10 Event Screen Preview */} <EventScreenSection />
      {/* 11 Physical-Digital Integration */} <PhysicalDigitalSection />
      {/* 12 Dynamic Content Types */} <ContentTypesSection />
      {/* 13 Strategic Pillars */} <WhyLrmSection />
      {/* 14 Day in the Life Timeline */} <DayTimelineSection />
      {/* 15 Network Expansion Status */} <ProofSection />
      {/* 16 Ground-level Trust & Proof */} <TrustSignals />
      {/* 17 Audience Path Routing */} <PathSelectionSection />
      {/* 18 Frequently Asked Questions */} <FAQ />
      {/* 19 Final Monolithic Call to Action */} <FinalCtaSection />
    </>
  );
}
