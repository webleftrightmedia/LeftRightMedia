import React from 'react';

export default function SectionLabel({
  children,
  className = '',
  ...props
}) {
  return (
    <span
      className={[
        'text-label-md text-ink-muted',
        'block',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {'// '}
      {children}
    </span>
  );
}
