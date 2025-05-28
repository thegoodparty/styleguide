import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
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
        xSmall: "h-6 px-3 py-1.5 text-xs has-[>svg]:px-2",
        small: "h-8 px-4 py-2 has-[>svg]:px-3",
        medium: "h-10 px-5 py-2.5 has-[>svg]:px-4",
        large: "h-12 px-6 py-3 text-base has-[>svg]:px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "medium",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
