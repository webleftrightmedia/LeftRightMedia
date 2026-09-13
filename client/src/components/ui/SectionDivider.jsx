import React from 'react';

export default function SectionDivider({ label, className = '' }) {
  if (label) {
    return (
      <div
        className={[
          'flex items-center gap-4',
          'py-1',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <div className="flex-1 h-px bg-slate-border" />
        <span className="text-label-sm text-ink-muted shrink-0">
          {label}
        </span>
        <div className="flex-1 h-px bg-slate-border" />
      </div>
    );
  }

  return (
    <hr
      className={[
        'border-none h-px bg-slate-border',
        'w-full',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    />
  );
}
