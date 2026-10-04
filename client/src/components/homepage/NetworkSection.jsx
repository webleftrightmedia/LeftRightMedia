import React, { useState, useEffect, useRef } from 'react';
import { Container, SectionLabel } from '../ui';
import { networkNodes } from '../../data/homepage';

/**
 * Section 04 — One Network. Many Places.
 * Animated network diagram showing LRM as the hub connecting locations to brands.
 */
export default function NetworkSection() {
  const [visibleCount, setVisibleCount] = useState(0);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          // Stagger reveal of network nodes
          networkNodes.forEach((_, i) => {
            setTimeout(() => setVisibleCount(i + 1), 300 * (i + 1));
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="network-section"
      className="bg-concrete border-b border-slate-border py-20 lg:py-28"
    >
      <Container>
        <div className="text-center">
          <SectionLabel>Platform</SectionLabel>
          <h2 className="text-headline-lg-mobile lg:text-headline-lg mt-4">
            One Network. Many Places.
          </h2>
        </div>

        {/* Network visualization */}
        <div className="mt-16 flex flex-col items-center gap-8">
          {/* Location nodes */}
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
            {networkNodes.map((node, i) => (
              <div
                key={node}
                className={[
                  'px-5 py-2.5 border rounded-md text-label-md',
                  'transition-all duration-500',
                  i < visibleCount
                    ? 'border-ink bg-concrete-white text-ink opacity-100 translate-y-0'
                    : 'border-transparent opacity-0 translate-y-4',
                ].join(' ')}
              >
                {node}
              </div>
            ))}
          </div>

          {/* Connecting lines */}
          <div className="flex flex-col items-center gap-1">
            <div className={[
              'w-px h-10 bg-ink/20 transition-all duration-700',
              visibleCount > 0 ? 'opacity-100' : 'opacity-0',
            ].join(' ')} />
            <div className={[
              'w-2 h-2 rounded-full bg-ink transition-all duration-500',
              visibleCount > 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-0',
            ].join(' ')} />
          </div>

          {/* LRM Hub */}
          <div className={[
            'px-8 py-4 bg-ink text-white rounded-md',
            'text-headline-sm text-center',
            'transition-all duration-700 delay-500',
            visibleCount >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
          ].join(' ')}>
            LEFT RIGHT MEDIA
          </div>

          {/* Connecting lines */}
          <div className="flex flex-col items-center gap-1">
            <div className={[
              'w-2 h-2 rounded-full bg-accent transition-all duration-500',
              visibleCount >= 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-0',
            ].join(' ')} />
            <div className={[
              'w-px h-10 bg-accent/30 transition-all duration-700',
              visibleCount >= 4 ? 'opacity-100' : 'opacity-0',
            ].join(' ')} />
          </div>

          {/* Brand destination */}
          <div className={[
            'px-8 py-4 border-2 border-accent rounded-md',
            'text-headline-sm text-accent text-center',
            'transition-all duration-700',
            visibleCount >= 5 ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
          ].join(' ')}>
            YOUR BRAND
          </div>
        </div>
      </Container>
    </section>
  );
}
