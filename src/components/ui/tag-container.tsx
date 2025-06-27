import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { buttonVariants } from './button'

const tagContainerVariants = cva(
  "flex flex-wrap gap-2",
  {
    variants: {
      size: {
        small: 'gap-1.5',
        medium: 'gap-2',
        large: 'gap-3',
      },
      layout: {
        default: '',
        compact: 'gap-1',
        spacious: 'gap-4',
      },
    },
    defaultVariants: {
      size: 'medium',
      layout: 'default',
    },
  }
)

export interface QuickLink {
  id: string
  label: string
  href?: string
  onClick?: () => void
}

export interface TagContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tagContainerVariants> {
  links: QuickLink[]
  maxRows?: number
}

const TagContainer = React.forwardRef<HTMLDivElement, TagContainerProps>(
  (
    {
      className,
      size,
      layout,
      links,
      maxRows = 4,
      ...props
    },
    ref,
  ) => {
    // Calculate max items based on 4 rows
    // Assuming average items per row, we'll limit to prevent overflow
    const maxItems = maxRows * 6 // Conservative estimate of 6 items per row

    const displayedLinks = links.slice(0, maxItems)
    const hasMoreLinks = links.length > maxItems
    const buttonSize = size === 'small' ? 'xSmall' : size === 'large' ? 'large' : 'small'

    return (
      <div
        ref={ref}
        className={cn(
          tagContainerVariants({ size, layout, className }),
          "max-h-[calc(4*var(--tag-height,2.5rem)+3*var(--tag-gap,0.5rem))] overflow-hidden"
        )}
        style={{
          '--tag-height': size === 'small' ? '1.5rem' : size === 'large' ? '3rem' : '2.5rem',
          '--tag-gap': size === 'small' ? '0.375rem' : size === 'large' ? '0.75rem' : '0.5rem',
        } as React.CSSProperties}
        {...props}
      >
        {displayedLinks.map((link) => (
          <div key={link.id} className="flex items-center">
            {link.href ? (
              <a
                href={link.href}
                className={cn(
                  buttonVariants({ variant: 'white', size: buttonSize }),
                  'rounded-full !no-underline !text-black'
                )}
              >
                {link.label}
              </a>
            ) : (
              <button
                type="button"
                onClick={link.onClick}
                className={cn(
                  buttonVariants({ variant: 'white', size: buttonSize }),
                  'rounded-full'
                )}
              >
                {link.label}
              </button>
            )}
          </div>
        ))}
        
        {hasMoreLinks && (
          <div className="flex items-center">
            <span
              className={cn(
                buttonVariants({ variant: 'white', size: buttonSize }),
                'rounded-full cursor-default select-none'
              )}
            >
              +{links.length - maxItems} more
            </span>
          </div>
        )}
      </div>
    )
  },
)

TagContainer.displayName = 'TagContainer'

export { TagContainer, tagContainerVariants } 