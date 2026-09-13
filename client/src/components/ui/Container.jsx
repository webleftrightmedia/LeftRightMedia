import React from 'react';

export default function Container({
  children,
  className = '',
  as: Component = 'div',
  ...props
}) {
  return (
    <Component
      className={[
        'w-full max-w-[1680px] mx-auto',
        'px-(--spacing-margin) md:px-8 lg:px-(--spacing-margin)',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </Component>
  );
}
