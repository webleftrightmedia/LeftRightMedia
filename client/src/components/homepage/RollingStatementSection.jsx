import React from 'react';
import { rollingStatement } from '../../data/homepage';

/**
 * Section 02 — Signature rolling advertising statement.
 * Preserves the existing LRM rolling/marquee animation identity.
 * Uses a CSS-driven infinite scroll for performance.
 */
export default function RollingStatementSection() {
  // Duplicate content for seamless loop
  const repeated = `${rollingStatement}  ·  ${rollingStatement}  ·  ${rollingStatement}  ·  ${rollingStatement}  ·  `;

  return (
    <section className="bg-ink overflow-hidden py-4 select-none border-y border-white/10" aria-label="Brand statement">
      <div
        className="flex w-max whitespace-nowrap hover:[animation-play-state:paused]"
        style={{
          animation: 'rolling-scroll 24s linear infinite',
        }}
      >
        <span className="text-label-lg text-white/90 tracking-[0.08em] shrink-0 pr-4">
          {repeated}
        </span>
        <span className="text-label-lg text-white/90 tracking-[0.08em] shrink-0 pr-4" aria-hidden="true">
          {repeated}
        </span>
      </div>
    </section>
  );
}
