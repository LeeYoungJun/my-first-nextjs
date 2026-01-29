import { HTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const alertVariants = cva(
  'relative w-full rounded-lg border p-4',
  {
    variants: {
      variant: {
        default: 'bg-white border-[var(--color-light-gray)] text-[var(--color-dark-gray)]',
        info: 'bg-blue-50 border-[var(--color-primary)] text-[var(--color-primary-dark)]',
        success: 'bg-green-50 border-[var(--color-secondary-green)] text-green-800',
        warning: 'bg-orange-50 border-[var(--color-secondary-orange)] text-orange-800',
        danger: 'bg-red-50 border-red-500 text-red-800',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface AlertProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, title, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant, className }))}
        {...props}
      >
        {title && (
          <h5 className="mb-1 font-semibold">{title}</h5>
        )}
        <div className="text-sm">{children}</div>
      </div>
    );
  }
);

Alert.displayName = 'Alert';

export { Alert, alertVariants };
