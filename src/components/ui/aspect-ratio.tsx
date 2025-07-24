import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio'
import { cn } from '@/lib/utils'

function AspectRatio({
  className,
  ...props
}: React.ComponentProps<typeof AspectRatioPrimitive.Root>) {
  return (
    <AspectRatioPrimitive.Root
      data-slot="aspect-ratio"
      className={cn('relative overflow-hidden', className)}
      {...props}
    />
  )
}

export { AspectRatio }
