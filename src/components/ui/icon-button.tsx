import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const iconButtonVariants = cva(
  "inline-flex items-center justify-center rounded-full transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border",
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
        xSmall: "size-6",
        small: "size-8",
        medium: "size-10",
        large: "size-12",
        xLarge: "size-16",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "medium",
    },
  }
)

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  asChild?: boolean
}

function IconButton({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: IconButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="icon-button"
      className={cn(iconButtonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { IconButton, iconButtonVariants } 