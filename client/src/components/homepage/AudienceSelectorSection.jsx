import React, { useState } from 'react';
import { Container, SectionLabel } from '../ui';
import { audiences, locationOptions, timeOptions } from '../../data/homepage';

/**
 * Section 05 — Advertiser Problem / Audience Selector
 * Interactive three-step selector demonstrating LRM's targeting.
 */
const steps = [
  { question: 'Who are you trying to reach?', options: audiences, key: 'audience' },
  { question: 'Where should they see you?', options: locationOptions, key: 'location' },
  { question: 'When should they see you?', options: timeOptions, key: 'time' },
];

export default function AudienceSelectorSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState({ audience: null, location: null, time: null });
  const [complete, setComplete] = useState(false);

  const handleSelect = (key, value) => {
    const updated = { ...selections, [key]: value };
    setSelections(updated);

    if (currentStep < steps.length - 1) {
      setTimeout(() => setCurrentStep((s) => s + 1), 400);
    } else {
      setTimeout(() => setComplete(true), 400);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelections({ audience: null, location: null, time: null });
    setComplete(false);
  };

  const step = steps[currentStep];

  return (
    <section className="bg-concrete-white border-b border-slate-border py-20 lg:py-28">
      <Container>
        <SectionLabel>Targeting</SectionLabel>
        <h2 className="text-headline-lg-mobile lg:text-headline-lg mt-4 max-w-2xl">
          Stop Advertising Everywhere.<br />
          Start Advertising Where It Matters.
        </h2>

        <div className="mt-12 max-w-xl">
          {!complete ? (
            <>
              {/* Step indicator */}
              <div className="flex gap-2 mb-6">
                {steps.map((s, i) => (
                  <div
                    key={s.key}
                    className={[
                      'h-1 flex-1 rounded-full transition-all duration-300',
                      i <= currentStep ? 'bg-ink' : 'bg-slate-border',
                    ].join(' ')}
                  />
                ))}
              </div>

              {/* Question */}
              <p className="text-headline-sm text-ink mb-6">
                {step.question}
              </p>

              {/* Options */}
              <div className="flex flex-wrap gap-3">
                {step.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSelect(step.key, option)}
                    className={[
                      'px-5 py-2.5 border rounded-md text-body-md',
                      'transition-all duration-200 cursor-pointer',
                      selections[step.key] === option
                        ? 'bg-ink text-white border-ink'
                        : 'border-slate-border hover:border-ink/40 bg-concrete',
                    ].join(' ')}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {/* Previous selections */}
              {currentStep > 0 && (
                <div className="mt-6 pt-4 border-t border-slate-border">
                  {Object.entries(selections).map(([key, val]) =>
                    val ? (
                      <span key={key} className="text-label-sm text-ink-muted mr-4">
                        {key.toUpperCase()}: <span className="text-ink font-semibold">{val}</span>
                      </span>
                    ) : null
                  )}
                </div>
              )}
            </>
          ) : (
            /* Completion message */
            <div className="text-center py-8">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="px-4 py-2 bg-ink text-white rounded-md text-label-md">{selections.audience}</span>
                <span className="text-ink-muted self-center">×</span>
                <span className="px-4 py-2 bg-ink text-white rounded-md text-label-md">{selections.location}</span>
                <span className="text-ink-muted self-center">×</span>
                <span className="px-4 py-2 bg-ink text-white rounded-md text-label-md">{selections.time}</span>
              </div>
              <p className="text-headline-sm text-ink">
                Build your campaign around places, audiences and moments.
              </p>
              <button
                onClick={handleReset}
                className="mt-6 text-body-md text-ink-muted hover:text-ink underline underline-offset-4 cursor-pointer"
              >
                Try again
              </button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
