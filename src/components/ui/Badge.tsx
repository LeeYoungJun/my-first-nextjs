import { HTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center font-medium',
  {
    variants: {
      variant: {
        default: 'bg-[var(--color-primary)] text-white',
        secondary: 'bg-[var(--color-light-gray)] text-[var(--color-dark-gray)]',
        success: 'bg-[var(--color-secondary-green)] text-white',
        warning: 'bg-[var(--color-secondary-orange)] text-white',
        danger: 'bg-red-600 text-white',
        purple: 'bg-[var(--color-secondary-purple)] text-white',
        outline: 'bg-transparent border-2 border-[var(--color-primary)] text-[var(--color-primary)]',
      },
      size: {
        sm: 'text-xs px-2 py-0.5 rounded',
        md: 'text-sm px-2.5 py-1 rounded-md',
        lg: 'text-base px-3 py-1.5 rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';

export { Badge, badgeVariants };
