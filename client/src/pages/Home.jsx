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
import SEO from '../components/SEO';
import faqs from '../data/faqs';

const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://leftrightmedia.in/#business',
      'name': 'LeftRightMedia',
      'url': 'https://leftrightmedia.in',
      'logo': 'https://leftrightmedia.in/arrow2-removebg.png',
      'image': 'https://leftrightmedia.in/og-image.jpg',
      'description': 'LeftRightMedia connects brands with captive audiences through a network of digital screens in cafes, retail, and commercial hubs across Gujarat.',
      'areaServed': [
        { '@type': 'City', 'name': 'Surat' },
        { '@type': 'City', 'name': 'Nadiad' },
        { '@type': 'State', 'name': 'Gujarat' },
        { '@type': 'Country', 'name': 'India' }
      ],
      'priceRange': '₹₹'
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://leftrightmedia.in/#faq',
      'mainEntity': faqs.map(f => ({
        '@type': 'Question',
        'name': f.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': f.answer
        }
      }))
    }
  ]
};

/**
 * Homepage — exact storytelling sequence per master specification.
 * Seamless narrative flow with alternating contrast and high engagement.
 */
export default function Home() {
  return (
    <>
      <SEO
        title="Digital Screen Advertising Network in Gujarat"
        description="Reach captive audiences across premium cafes, retail hubs, and commercial spaces through connected digital TV screens in Nadiad, Surat, and across Gujarat."
        schema={homeSchema}
      />
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
