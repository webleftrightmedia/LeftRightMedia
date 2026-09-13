import React from 'react';

const statusConfig = {
  live: {
    dot: 'bg-success',
    label: 'LIVE',
    animate: true,
  },
  offline: {
    dot: 'bg-ink-muted',
    label: 'OFFLINE',
    animate: false,
  },
  pending: {
    dot: 'bg-warning',
    label: 'PENDING',
    animate: true,
  },
};

export default function Badge({
  status = 'live',
  label,
  className = '',
  ...props
}) {
  const config = statusConfig[status] || statusConfig.live;
  const displayLabel = label || config.label;

  return (
    <span
      className={[
        'inline-flex items-center gap-1.5',
        'text-label-sm text-ink-muted',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      <span
        className={[
          'w-1.5 h-1.5 rounded-full',
          config.dot,
          config.animate ? 'animate-pulse-dot' : '',
        ]
          .filter(Boolean)
          .join(' ')}
        aria-hidden="true"
      />
      {displayLabel}
    </span>
  );
}
