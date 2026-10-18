import React from 'react';
import {
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
} from './index';
import TrustSignals from '../TrustSignals';
import FAQ from '../FAQ';

export default function BelowTheFold() {
  return (
    <>
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
