import React from 'react';
import { Container, Button, SectionLabel } from '../components/ui';

export default function ThankYou() {
  return (
    <section className="py-32 lg:py-48 flex items-center justify-center text-center">
      <Container>
        <div className="relative w-32 h-32 mx-auto mb-10 flex items-center justify-center animate-container-pop">
          {/* Subtle Outer Pulse */}
          <div className="absolute inset-0 bg-success/15 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
          
          {/* FaceID Style Animated Checkmark */}
          <svg className="w-24 h-24 text-success relative z-10 overflow-visible" viewBox="0 0 52 52">
            <circle 
              className="animate-draw-circle"
              cx="26" cy="26" r="22" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              pathLength="100"
            />
            <path 
              className="animate-draw-check"
              fill="none" 
              stroke="currentColor" 
              strokeWidth="5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M14 27l7 7 16-16" 
              pathLength="100"
            />
          </svg>
        </div>
        <SectionLabel className="justify-center">Success</SectionLabel>
        <h1 className="text-display-mobile lg:text-display mt-4">
          We've received your details.
        </h1>
        <p className="text-body-lg text-ink-muted mt-4 max-w-lg mx-auto">
          Someone from our local team will reach out within 24 hours to help you get started.
        </p>
        <div className="mt-8">
          <Button variant="outline" size="lg" href="/">
            Return Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
