<<<<<<< HEAD
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio'
=======
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"
import { cn } from "@/lib/utils"
>>>>>>> ca08013 (Experimented with token changes and updated components with those token changes. Ready for review.)

function AspectRatio({
  className,
  ...props
}: React.ComponentProps<typeof AspectRatioPrimitive.Root>) {
  return (
    <AspectRatioPrimitive.Root 
      data-slot="aspect-ratio" 
      className={cn(
        "relative overflow-hidden",
        className
      )}
      {...props} 
    />
  )
}

export { AspectRatio }
