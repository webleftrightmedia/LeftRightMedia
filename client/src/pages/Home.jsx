import React, { lazy, Suspense } from 'react';
import HeroSection from '../components/homepage/HeroSection';
import SEO from '../components/SEO';
import faqs from '../data/faqs';

const BelowTheFold = lazy(() => import('../components/homepage/BelowTheFold'));

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
      {/* 01 Hero Section (Immediate Above-The-Fold Paint) */}
      <HeroSection />

      {/* 02-19 Below-The-Fold Sections (Deferred for Instant First Paint & Minimal Unused JS) */}
      <Suspense fallback={null}>
        <BelowTheFold />
      </Suspense>
    </>
  );
}
