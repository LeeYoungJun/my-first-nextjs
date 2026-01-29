import { HTMLAttributes, forwardRef } from 'react';
import Image from 'next/image';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Badge } from './Badge';

const imageCardVariants = cva(
  'group overflow-hidden rounded-lg bg-white transition-all',
  {
    variants: {
      variant: {
        default: 'border border-[var(--color-light-gray)] shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)]',
        elevated: 'shadow-[var(--shadow-lg)] hover:shadow-[var(--shadow-xl)]',
        outline: 'border border-[var(--color-light-gray)] hover:border-[var(--color-primary)]',
        ghost: 'hover:bg-[var(--background-secondary)]',
      },
      imagePosition: {
        top: 'flex flex-col',
        left: 'flex flex-row',
        right: 'flex flex-row-reverse',
        background: 'relative',
      },
    },
    defaultVariants: {
      variant: 'default',
      imagePosition: 'top',
    },
  }
);

const imageContainerVariants = cva(
  'relative overflow-hidden',
  {
    variants: {
      imagePosition: {
        top: 'w-full',
        left: 'flex-shrink-0',
        right: 'flex-shrink-0',
        background: 'absolute inset-0',
      },
      aspectRatio: {
        video: 'aspect-video',
        square: 'aspect-square',
        portrait: 'aspect-[3/4]',
        wide: 'aspect-[2/1]',
        auto: '',
      },
    },
    defaultVariants: {
      imagePosition: 'top',
      aspectRatio: 'video',
    },
  }
);

export interface ImageCardProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title'>,
    VariantProps<typeof imageCardVariants> {
  // Image props
  src: string;
  alt: string;
  imageWidth?: number;
  imageHeight?: number;
  aspectRatio?: 'video' | 'square' | 'portrait' | 'wide' | 'auto';
  objectFit?: 'cover' | 'contain' | 'fill';

  // Content props
  title?: React.ReactNode;
  description?: React.ReactNode;
  badge?: string;
  badgeVariant?: 'default' | 'secondary' | 'success' | 'warning' | 'danger' | 'purple' | 'outline';

  // Layout props
  contentPadding?: 'none' | 'sm' | 'md' | 'lg';

  // Actions
  footer?: React.ReactNode;
  overlay?: React.ReactNode;

  // Interaction
  href?: string;
  onClick?: () => void;
}

const ImageCard = forwardRef<HTMLDivElement, ImageCardProps>(
  (
    {
      className,
      variant,
      imagePosition,
      src,
      alt,
      imageWidth,
      imageHeight,
      aspectRatio = 'video',
      objectFit = 'cover',
      title,
      description,
      badge,
      badgeVariant = 'default',
      contentPadding = 'md',
      footer,
      overlay,
      href,
      onClick,
      children,
      ...props
    },
    ref
  ) => {
    const paddingClasses = {
      none: 'p-0',
      sm: 'p-3',
      md: 'p-4',
      lg: 'p-6',
    };

    const horizontalImageSize = imagePosition === 'left' || imagePosition === 'right'
      ? 'w-1/3 min-w-[120px] max-w-[200px]'
      : '';

    const content = (
      <>
        {/* Image Container */}
        <div
          className={cn(
            imageContainerVariants({
              imagePosition,
              aspectRatio: imagePosition === 'background' ? 'auto' : aspectRatio
            }),
            horizontalImageSize,
            imagePosition === 'background' && 'h-full'
          )}
        >
          {src.startsWith('/') || src.startsWith('http') ? (
            <Image
              src={src}
              alt={alt}
              fill={!imageWidth || !imageHeight}
              width={imageWidth}
              height={imageHeight}
              className={cn(
                'transition-transform duration-300 group-hover:scale-105',
                objectFit === 'cover' && 'object-cover',
                objectFit === 'contain' && 'object-contain',
                objectFit === 'fill' && 'object-fill',
                (!imageWidth || !imageHeight) && 'absolute inset-0 w-full h-full'
              )}
            />
          ) : (
            <div className="w-full h-full bg-[var(--color-light-gray)] flex items-center justify-center">
              <svg className="w-12 h-12 text-[var(--color-medium-gray)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}

          {/* Badge on image */}
          {badge && imagePosition !== 'background' && (
            <div className="absolute top-3 left-3">
              <Badge variant={badgeVariant} size="sm">{badge}</Badge>
            </div>
          )}

          {/* Custom overlay */}
          {overlay && (
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              {overlay}
            </div>
          )}
        </div>

        {/* Content */}
        <div
          className={cn(
            'flex flex-col flex-1',
            paddingClasses[contentPadding],
            imagePosition === 'background' && 'relative z-10 text-white bg-gradient-to-t from-black/70 via-black/30 to-transparent justify-end min-h-[200px]'
          )}
        >
          {badge && imagePosition === 'background' && (
            <div className="mb-2">
              <Badge variant={badgeVariant} size="sm">{badge}</Badge>
            </div>
          )}

          {title && (
            <h3 className={cn(
              'font-semibold mb-1',
              imagePosition === 'background' ? 'text-white text-lg' : 'text-[var(--color-dark-gray)]'
            )}>
              {title}
            </h3>
          )}

          {description && (
            <p className={cn(
              'text-sm line-clamp-2',
              imagePosition === 'background' ? 'text-white/80' : 'text-[var(--color-medium-gray)]'
            )}>
              {description}
            </p>
          )}

          {children}

          {footer && (
            <div className={cn(
              'mt-auto pt-3',
              imagePosition !== 'background' && 'border-t border-[var(--color-light-gray)]'
            )}>
              {footer}
            </div>
          )}
        </div>
      </>
    );

    const cardClasses = cn(
      imageCardVariants({ variant, imagePosition, className }),
      (href || onClick) && 'cursor-pointer'
    );

    if (href) {
      return (
        <a href={href} className={cardClasses} ref={ref as React.Ref<HTMLAnchorElement>} {...props as HTMLAttributes<HTMLAnchorElement>}>
          {content}
        </a>
      );
    }

    return (
      <div
        ref={ref}
        className={cardClasses}
        onClick={onClick}
        {...props}
      >
        {content}
      </div>
    );
  }
);

ImageCard.displayName = 'ImageCard';

export { ImageCard, imageCardVariants };
