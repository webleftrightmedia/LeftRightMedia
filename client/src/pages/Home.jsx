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

/**
 * Homepage — exact storytelling sequence per master specification.
 * Sections 01–18 in order.
 */
export default function Home() {
  return (
    <>
      {/* 01 */ } <HeroSection />
      {/* 02 */ } <PlatformSection />
      {/* 04 */ } <ImpactSection />
      {/* 05 */ } <AudienceSelectorSection />
      {/* 06 */ } <CampaignBuilderSection />
      {/* 08 */ } <ScreenPartnersSection />
      {/* 09 */ } <EventsIntroSection />
      {/* 10 */ } <EventCapabilitiesSection />
      {/* 11 */ } <EventScreenSection />
      {/* 12 */ } <PhysicalDigitalSection />
      {/* 13 */ } <ContentTypesSection />
      {/* 14 */ } <WhyLrmSection />
      {/* 15 */ } <DayTimelineSection />
      {/* 16 */ } <ProofSection />
      {/* 17 */ } <PathSelectionSection />
      {/* 18 */ } <FinalCtaSection />
    </>
  );
}
