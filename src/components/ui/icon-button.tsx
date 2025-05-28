import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const iconButtonVariants = cva(
  "inline-flex items-center justify-center rounded-full transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-button-default-background text-button-default-text border-button-default-border shadow-xs hover:bg-button-default-background/90",
        secondary:
          "bg-button-secondary-background text-button-secondary-text border-button-secondary-border shadow-xs hover:bg-button-secondary-background/80",
        destructive:
          "bg-button-destructive-background text-button-destructive-text border-button-destructive-border shadow-xs hover:bg-button-destructive-background/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outlined:
          "bg-button-outlined-background text-button-outlined-text border-button-outlined-border shadow-xs hover:bg-accent hover:text-accent-foreground",
        ghost:
          "bg-button-ghost-background text-button-ghost-text border-button-ghost-border hover:bg-accent hover:text-accent-foreground",
        whiteOutlined:
          "bg-button-whiteOutlined-background text-button-whiteOutlined-text border-button-whiteOutlined-border shadow-xs hover:bg-accent/20 hover:text-accent-foreground",
        whiteGhost:
          "bg-button-whiteGhost-background text-button-whiteGhost-text border-button-whiteGhost-border hover:bg-accent/20 hover:text-accent-foreground",
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