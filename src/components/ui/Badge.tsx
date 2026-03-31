import React from 'react';

export const Badge = ({ children, variant = 'default', className = '' }: { children: React.ReactNode, variant?: 'default' | 'brand' | 'outline', className?: string }) => {
  const variants = {
    default: 'bg-graphite-100 text-graphite-800',
    brand: 'bg-brand-100 text-brand-800',
    outline: 'border border-graphite-200 text-graphite-600',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
