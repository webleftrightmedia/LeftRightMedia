import React, { useEffect, useRef, useState } from 'react';
import { Container, SectionLabel } from '../ui';
import { dayTimeline } from '../../data/homepage';

/**
 * Section 15 — A Day. A City. A Campaign.
 * Vertical timeline showing a brand's campaign throughout a single day.
 */
export default function DayTimelineSection() {
  const sectionRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          dayTimeline.forEach((_, i) => {
            setTimeout(() => setVisibleCount(i + 1), 400 * (i + 1));
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-concrete border-b border-slate-border py-20 lg:py-28"
    >
      <Container>
        <div className="text-center mb-16">
          <SectionLabel>Campaign</SectionLabel>
          <h2 className="text-headline-lg-mobile lg:text-headline-lg mt-4">
            A Day. A City. A Campaign.
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-md mx-auto">
          {dayTimeline.map((entry, i) => (
            <div
              key={entry.time}
              className={[
                'flex gap-6 transition-all duration-600',
                i < visibleCount ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
              ].join(' ')}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Timeline rail */}
              <div className="flex flex-col items-center">
                <div className={[
                  'w-3 h-3 rounded-full border-2 transition-colors duration-500',
                  i < visibleCount ? 'bg-accent border-accent' : 'bg-transparent border-slate-border',
                ].join(' ')} />
                {i < dayTimeline.length - 1 && (
                  <div className={[
                    'w-px flex-1 min-h-[60px] transition-colors duration-500',
                    i < visibleCount ? 'bg-ink/20' : 'bg-slate-border',
                  ].join(' ')} />
                )}
              </div>

              {/* Content */}
              <div className="pb-10">
                <span className="text-label-lg text-accent tabular-nums">{entry.time}</span>
                <h3 className="text-headline-sm mt-1">{entry.location}</h3>
                <p className="text-body-md text-ink-muted mt-1">{entry.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-body-lg text-ink-muted text-center mt-8">
          One brand. Multiple moments. One connected network.
        </p>
      </Container>
    </section>
  );
}
