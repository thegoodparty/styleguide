'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Circle, CircleCheck } from 'lucide-react'

import { cn } from '@/lib/utils'

function TaskCheckbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="task-checkbox"
      className={cn(
        'group peer size-5 shrink-0 cursor-pointer outline-none',
        'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:rounded-full',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <Circle className="size-5 text-muted-foreground group-hover:hidden group-data-[state=checked]:hidden" />
      <CircleCheck className="hidden size-5 text-foreground group-hover:block group-data-[state=checked]:block group-data-[state=checked]:text-custom-default-focus" />
    </CheckboxPrimitive.Root>
  )
}

export { TaskCheckbox }
