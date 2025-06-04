import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border",
  {
    variants: {
      variant: {
        default:
          "bg-button-default-background text-button-default-text border-button-default-border shadow-xs hover:bg-button-default-backgroundHover disabled:bg-button-default-backgroundDisabled",
        secondary:
          "bg-button-secondary-background text-button-secondary-text border-button-secondary-border shadow-xs hover:bg-button-secondary-backgroundHover disabled:bg-button-secondary-backgroundDisabled",
        destructive:
          "bg-button-destructive-background text-button-destructive-text border-button-destructive-border shadow-xs hover:bg-button-destructive-backgroundHover disabled:bg-button-destructive-backgroundDisabled focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "bg-button-outline-background text-button-outline-text border-button-outline-border shadow-xs hover:bg-button-outline-backgroundHover disabled:bg-button-outline-backgroundDisabled focus-visible:border-button-outline-borderFocus focus-visible:ring-[3px]",
        ghost:
          "bg-button-ghost-background text-button-ghost-text border-button-ghost-border hover:bg-button-ghost-backgroundHover disabled:bg-button-ghost-backgroundDisabled focus-visible:border-button-ghost-borderFocus focus-visible:ring-[3px]",
        whiteOutline:
          "bg-button-whiteOutline-background text-button-whiteOutline-text border-button-whiteOutline-border shadow-xs hover:bg-button-whiteOutline-backgroundHover disabled:bg-button-whiteOutline-backgroundDisabled focus-visible:border-button-whiteOutline-borderFocus focus-visible:ring-[3px]",
        whiteGhost:
          "bg-button-whiteGhost-background text-button-whiteGhost-text border-button-whiteGhost-border hover:bg-button-whiteGhost-backgroundHover disabled:bg-button-whiteGhost-backgroundDisabled focus-visible:border-button-whiteGhost-borderFocus focus-visible:ring-[3px]",
      },
      size: {
        xSmall: "h-6 px-3 py-1.5 button-text-small has-[>svg]:px-2",
        small: "h-8 px-4 py-2 button-text-medium has-[>svg]:px-3",
        medium: "h-10 px-5 py-2.5 button-text-large has-[>svg]:px-4",
        large: "h-12 px-6 py-3 button-text-large has-[>svg]:px-5",
      },
      iconPosition: {
        left: "", // Default flex direction
        right: "flex-row-reverse",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "medium",
      iconPosition: "left",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  icon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, iconPosition, asChild = false, icon, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, iconPosition, className }))}
        ref={ref}
        {...props}
      >
        {icon}
        {children}
      </Comp>
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }
