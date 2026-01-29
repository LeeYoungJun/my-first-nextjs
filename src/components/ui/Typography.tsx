import { HTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// Heading Component
const headingVariants = cva(
  'font-semibold text-[var(--color-dark-gray)]',
  {
    variants: {
      level: {
        h1: 'text-5xl leading-tight',
        h2: 'text-4xl leading-tight',
        h3: 'text-3xl leading-tight',
        h4: 'text-2xl leading-snug',
        h5: 'text-xl leading-snug',
        h6: 'text-lg leading-normal',
      },
    },
    defaultVariants: {
      level: 'h2',
    },
  }
);

export interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level, as, ...props }, ref) => {
    const Component = as || level || 'h2';
    return (
      <Component
        ref={ref}
        className={cn(headingVariants({ level: level || as, className }))}
        {...props}
      />
    );
  }
);
Heading.displayName = 'Heading';

// Text Component
const textVariants = cva(
  'text-[var(--color-dark-gray)]',
  {
    variants: {
      size: {
        xs: 'text-xs',
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
      },
      weight: {
        light: 'font-light',
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
      },
      textColor: {
        default: 'text-[var(--color-dark-gray)]',
        muted: 'text-[var(--color-medium-gray)]',
        primary: 'text-[var(--color-primary)]',
        success: 'text-[var(--color-secondary-green)]',
        warning: 'text-[var(--color-secondary-orange)]',
        danger: 'text-red-600',
      },
    },
    defaultVariants: {
      size: 'base',
      weight: 'normal',
      textColor: 'default',
    },
  }
);

export interface TextProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: 'p' | 'span' | 'div';
  color?: 'default' | 'muted' | 'primary' | 'success' | 'warning' | 'danger';
}

const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size, weight, color, as = 'p', ...props }, ref) => {
    const Component = as;
    return (
      <Component
        ref={ref}
        className={cn(textVariants({ size, weight, textColor: color, className }))}
        {...props}
      />
    );
  }
);
Text.displayName = 'Text';

export { Heading, headingVariants, Text, textVariants };
