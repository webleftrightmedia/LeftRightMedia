import React, { useState, useEffect } from 'react';
import { Container, Button, SectionLabel } from './ui';
import heroCafe from '../assets/hero-cafe.png';

const stats = [
  { value: '42+', label: 'Screens Live' },
  { value: '28 Min', label: 'To Go Live' },
  { value: '11,500+', label: 'Daily Eyeballs' },
  { value: '100%', label: 'Uptime' },
];

const TICKER_WORDS = [
  "accessible.",
  "visible.",
  "affordable.",
  "real.",
  "unignorable.",
  "frictionless.",
  "precise."
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % TICKER_WORDS.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-concrete-white border-b border-slate-border">
      <Container className="py-16 lg:py-20">
        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <div className="space-y-6">
            <SectionLabel>Left Right Media</SectionLabel>

            <h1 className="text-display-mobile lg:text-display leading-tight">
              <span className="font-normal text-ink">Making advertising</span>
              <br />
              <div className="inline-grid overflow-hidden h-[1.2em] align-bottom text-accent">
                <div 
                  className="flex flex-col"
                  style={{ 
                    transform: `translateY(calc(-${wordIndex} * 1.2em))`,
                    transition: 'transform 70ms cubic-bezier(0.68, -0.55, 0.265, 1.55)'
                  }}
                >
                  {TICKER_WORDS.map((word) => (
                    <span 
                      key={word} 
                      className="h-[1.2em] flex items-center font-black tracking-wide uppercase"
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            </h1>

            <p className="text-body-lg text-ink-muted max-w-lg">
              We turn idle commercial screens into local ad networks.
              Café owners earn passive income. Advertisers reach real 
              people in real shops — not impressions on a dashboard.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button variant="solid" size="lg" href="#lead-form">
                Run an Ad Campaign →
              </Button>
              <Button variant="outline" size="lg" href="#lead-form">
                List Your Screen — Free
              </Button>
            </div>
          </div>

          {/* Right — image */}
          <div className="relative">
            <div className="border border-slate-border rounded-xl shadow-sm overflow-hidden">
              <img
                src={heroCafe}
                alt="Smart TV displaying content in a modern café"
                width={720}
                height={480}
                className="w-full aspect-[3/2] object-cover"
                loading="eager"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-ink text-white px-4 py-2 rounded-md shadow-md">
              <span className="text-label-sm">LIVE ACROSS GUJARAT</span>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-slate-border">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-headline-lg tabular-nums" data-numeric>
                {stat.value}
              </p>
              <p className="text-label-md text-ink-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
