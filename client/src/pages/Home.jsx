import React, { lazy, Suspense } from 'react';
import Hero from '../components/Hero';
import ValueProps from '../components/ValueProps';
import SplitArchitectureDemo from '../components/SplitArchitectureDemo';

// Lazy load below-the-fold components
const ActiveNodes = lazy(() => import('../components/ActiveNodes'));
const PricingSnapshot = lazy(() => import('../components/PricingSnapshot'));
const TrustSignals = lazy(() => import('../components/TrustSignals'));
const LeadCaptureForm = lazy(() => import('../components/LeadCaptureForm'));
const FAQ = lazy(() => import('../components/FAQ'));

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProps />
      <SplitArchitectureDemo />
      
      <Suspense fallback={<div className="h-64 animate-pulse bg-concrete flex items-center justify-center text-ink-muted">Loading modules...</div>}>
        <ActiveNodes />
        <PricingSnapshot />
        <TrustSignals />
        <LeadCaptureForm />
        <FAQ />
      </Suspense>
    </>
  );
}
