import React, { useState, useEffect } from 'react';
import { Container } from '../ui';

/**
 * Section 11 — Event Screen Experience.
 * An illustrative event screen mockup showing multi-purpose screen content.
 */
const screenModes = [
  { label: 'ADVERTISE', content: 'ABC TECHNOLOGIES', sub: 'HALL B · STALL 24' },
  { label: 'INFORM', content: 'KEYNOTE AT 3:00 PM', sub: 'MAIN STAGE · HALL A' },
  { label: 'NAVIGATE', content: '← HALL A          HALL C →', sub: 'YOU ARE HERE · HALL B' },
  { label: 'ENGAGE', content: '[ SCAN FOR DETAILS ]', sub: 'QR EXPERIENCE' },
];

export default function EventScreenSection() {
  const [modeIndex, setModeIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setModeIndex((prev) => (prev + 1) % screenModes.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const mode = screenModes[modeIndex];

  return (
    <section className="bg-ink text-white border-b border-slate-divider py-20 lg:py-28">
      <Container>
        <div className="max-w-xl mx-auto">
          {/* Screen mockup */}
          <div className="border border-white/15 rounded-md overflow-hidden">
            {/* Screen header */}
            <div className="px-6 py-3 border-b border-white/10 flex items-center justify-between bg-white/5">
              <span className="text-label-md text-accent">TECH VAPI 2026</span>
              <span className="text-label-sm text-white/30">ILLUSTRATIVE EXAMPLE</span>
            </div>

            {/* Screen content — cycles through modes */}
            <div className="px-6 py-12 text-center min-h-[200px] flex flex-col items-center justify-center">
              <p className="text-headline-lg text-white transition-all duration-500">
                {mode.content}
              </p>
              <p className="text-label-md text-white/40 mt-3">
                {mode.sub}
              </p>
            </div>

            {/* Screen footer / mode indicator */}
            <div className="px-6 py-3 border-t border-white/10 flex items-center justify-between">
              <div className="flex gap-3">
                {screenModes.map((m, i) => (
                  <button
                    key={m.label}
                    onClick={() => setModeIndex(i)}
                    className={[
                      'text-label-sm cursor-pointer transition-colors duration-200',
                      i === modeIndex ? 'text-accent' : 'text-white/30 hover:text-white/50',
                    ].join(' ')}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <p className="text-body-lg text-white/50 mt-8 text-center">
            One screen. Multiple jobs.
          </p>
        </div>
      </Container>
    </section>
  );
}
