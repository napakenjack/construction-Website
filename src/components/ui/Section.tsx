import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  bg?: 'white' | 'light' | 'dark' | 'brand';
}

export const Section = ({ children, className = '', containerClassName = '', id, bg = 'white', ...props }: SectionProps) => {
  const bgColors = {
    white: 'bg-white',
    light: 'bg-graphite-50',
    dark: 'bg-graphite-950 text-white',
    brand: 'bg-brand-500 text-white',
  };

  return (
    <section id={id} className={`py-20 md:py-28 ${bgColors[bg]} ${className}`} {...props}>
      <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};

export const SectionHeader = ({ title, subtitle, align = 'left', className = '' }: { title: string, subtitle?: string, align?: 'left' | 'center', className?: string }) => {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : ''} ${className}`}>
      {subtitle && (
        <span className="block text-brand-500 font-semibold tracking-wider uppercase text-sm mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
        {title}
      </h2>
    </div>
  );
};
