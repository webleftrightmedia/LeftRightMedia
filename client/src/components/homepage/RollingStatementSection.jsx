import React, { useEffect, useRef } from 'react';
import { rollingStatement } from '../../data/homepage';

/**
 * Section 02 — Signature rolling advertising statement.
 * Preserves the existing LRM rolling/marquee animation identity.
 * Uses a CSS-driven infinite scroll for performance.
 */
export default function RollingStatementSection() {
  const trackRef = useRef(null);

  // Duplicate content for seamless loop
  const repeated = `${rollingStatement}  ·  ${rollingStatement}  ·  ${rollingStatement}  ·  ${rollingStatement}  ·  `;

  return (
    <section className="bg-ink overflow-hidden py-5 select-none" aria-label="Brand statement">
      <div
        ref={trackRef}
        className="flex whitespace-nowrap"
        style={{
          animation: 'rolling-scroll 20s linear infinite',
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
