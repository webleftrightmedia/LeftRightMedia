import React from 'react';

const variants = {
  solid: {
    base: 'bg-ink text-white hover:bg-accent',
    className: '',
  },
  outline: {
    base: 'bg-transparent text-ink border border-ink hover:bg-ink hover:text-white',
    className: '',
  },
  signal: {
    base: 'bg-accent text-ink hover:bg-accent-hover hover:text-white transition-colors',
    className: '',
  },
  'secondary-solid': {
    base: 'bg-accent-secondary text-white hover:bg-accent-secondary-hover',
    className: '',
  },
  'secondary-outline': {
    base: 'bg-transparent text-accent-secondary border border-accent-secondary hover:bg-accent-secondary hover:text-white',
    className: '',
  },
  ghost: {
    base: 'bg-transparent text-ink-muted hover:text-ink hover:bg-ink/5',
    className: '',
  },
};

const sizes = {
  sm: 'px-4 py-1.5 text-body-sm',
  md: 'px-6 py-2.5 text-body-md',
  lg: 'px-8 py-3 text-body-lg',
};

export default function Button({
  variant = 'solid',
  size = 'md',
  children,
  className = '',
  disabled = false,
  type = 'button',
  onClick,
  href,
  ...props
}) {
  const variantStyles = variants[variant]?.base || variants.solid.base;
  const sizeStyles = sizes[size] || sizes.md;

  const baseClasses = [
    'inline-flex items-center justify-center',
    'font-display font-semibold',
    'rounded-md',
    'transition-all duration-200',
    'active:scale-[0.98]',
    'cursor-pointer',
    'select-none',
    'whitespace-nowrap',
    variantStyles,
    sizeStyles,
    disabled ? 'opacity-50 pointer-events-none' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <a href={href} className={baseClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
