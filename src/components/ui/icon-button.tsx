import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

// Loading spinner component for icon buttons
const LoadingSpinner = ({ className }: { className?: string }) => (
  <svg
    className={cn('animate-spin', className)}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
)

const iconButtonVariants = cva(
  'inline-flex items-center justify-center rounded-full transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border',
  {
    variants: {
      variant: {
        default:
          'bg-button-default-background text-button-default-text border-button-default-border hover:bg-button-default-backgroundHover disabled:bg-button-default-backgroundDisabled',
        secondary:
          'bg-button-secondary-background text-button-secondary-text border-button-secondary-border hover:bg-button-secondary-backgroundHover disabled:bg-button-secondary-backgroundDisabled',
        destructive:
          'bg-button-destructive-background text-button-destructive-text border-button-destructive-border hover:bg-button-destructive-backgroundHover disabled:bg-button-destructive-backgroundDisabled focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40',
        outline:
          'bg-button-outline-background text-button-outline-text border-button-outline-border hover:bg-button-outline-backgroundHover disabled:bg-button-outline-backgroundDisabled focus-visible:border-button-outline-borderFocus focus-visible:ring-[3px]',
        ghost:
          'bg-button-ghost-background text-button-ghost-text border-button-ghost-border hover:bg-button-ghost-backgroundHover disabled:bg-button-ghost-backgroundDisabled focus-visible:border-button-ghost-borderFocus focus-visible:ring-[3px]',
        link: 'bg-transparent text-[color:var(--semantic-text-link)] border-transparent hover:text-[color:var(--semantic-text-link-hover)] disabled:opacity-50 focus-visible:ring-[color:var(--semantic-text-link)]/20 focus-visible:ring-[3px] focus-visible:border-transparent',
        whiteOutline: 'bg-transparent text-white border-white/20 hover:bg-white/10 disabled:bg-transparent disabled:text-white/50 disabled:border-white/10 focus-visible:border-white focus-visible:ring-white/20 focus-visible:ring-[3px]',
        whiteGhost: 'bg-transparent text-white border-transparent hover:bg-white/10 disabled:bg-transparent disabled:text-white/50 focus-visible:border-white/20 focus-visible:ring-white/20 focus-visible:ring-[3px]',
      },
      size: {
        xSmall: 'size-6',
        small: 'size-8',
        medium: 'size-10',
        large: 'size-12',
        xLarge: 'size-16',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  },
)

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  asChild?: boolean
  loading?: boolean
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(({
  className,
  variant,
  size,
  asChild = false,
  loading = false,
  children,
  disabled,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : 'button'
  const isDisabled = disabled || loading

  // Calculate spinner size based on button size
  const getSpinnerSize = () => {
    switch (size) {
      case 'xSmall':
        return 'size-3'
      case 'small':
        return 'size-4'
      case 'medium':
        return 'size-5'
      case 'large':
        return 'size-6'
      case 'xLarge':
        return 'size-8'
      default:
        return 'size-5'
    }
  }

  return (
    <Comp
      ref={ref}
      data-slot="icon-button"
      className={cn(iconButtonVariants({ variant, size, className }))}
      disabled={isDisabled}
      {...props}
    >
      {loading ? <LoadingSpinner className={getSpinnerSize()} /> : children}
    </Comp>
  )
})

IconButton.displayName = 'IconButton'

export { IconButton, iconButtonVariants, type IconButtonProps }
