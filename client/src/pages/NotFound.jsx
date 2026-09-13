import React from 'react';
import { Container, Button, SectionLabel } from '../components/ui';

export default function NotFound() {
  return (
    <section className="py-32 lg:py-48 flex items-center justify-center text-center">
      <Container>
        <SectionLabel className="justify-center">Error 404</SectionLabel>
        <h1 className="text-display-mobile lg:text-display mt-4">
          Page Not Found.
        </h1>
        <p className="text-body-lg text-ink-muted mt-4 max-w-lg mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Button variant="solid" size="lg" href="/">
            Return Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
