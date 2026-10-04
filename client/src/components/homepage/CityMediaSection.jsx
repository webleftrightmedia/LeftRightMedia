import React, { useState } from 'react';
import { Container, SectionLabel } from '../ui';
import { cityLocations } from '../../data/homepage';

/**
 * Section 03 — The City Is Your Media
 * Interactive location cards that visually transform to show screen connection.
 */
export default function CityMediaSection() {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="bg-concrete-white border-b border-slate-border py-20 lg:py-28">
      <Container>
        <SectionLabel>The Network</SectionLabel>
        <h2 className="text-headline-lg-mobile lg:text-headline-lg mt-4 max-w-xl">
          The City Is Your Media.
        </h2>
        <p className="text-body-lg text-ink-muted mt-4 max-w-lg">
          Every place has an audience.<br />
          Every screen has an opportunity.<br />
          We connect them.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-12">
          {cityLocations.map((loc) => {
            const isActive = activeId === loc.id;
            return (
              <button
                key={loc.id}
                onClick={() => setActiveId(isActive ? null : loc.id)}
                className={[
                  'group relative flex flex-col items-center justify-center',
                  'py-8 px-4 border rounded-md cursor-pointer',
                  'transition-all duration-300',
                  isActive
                    ? 'bg-ink text-white border-ink scale-[1.03]'
                    : 'bg-concrete border-slate-border hover:border-ink/30',
                ].join(' ')}
              >
                <span className="text-3xl mb-3" aria-hidden="true">{loc.icon}</span>
                <span className="text-label-md">{loc.label}</span>

                {/* Screen connection indicator */}
                <div
                  className={[
                    'absolute -bottom-3 left-1/2 -translate-x-1/2',
                    'w-2 h-2 rounded-full bg-accent',
                    'transition-all duration-300',
                    isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0',
                  ].join(' ')}
                />
                {isActive && (
                  <span className="text-label-sm mt-3 text-accent opacity-90">
                    ● SCREEN CONNECTED
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
