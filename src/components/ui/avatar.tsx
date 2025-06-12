'use client'

import * as React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const avatarVariants = cva(
  'relative flex shrink-0 overflow-hidden rounded-full',
  {
    variants: {
      size: {
<<<<<<< HEAD
        xSmall: 'size-6',
        small: 'size-8',
        medium: 'size-10',
        large: 'size-12',
        xLarge: 'size-16',
      },
      variant: {
        default: 'bg-avatar-default-background',
        brightyellow: 'bg-avatar-brightyellow-background',
        lavender: 'bg-avatar-lavender-background',
        halogreen: 'bg-avatar-halogreen-background',
        blue: 'bg-avatar-blue-background',
        waxflower: 'bg-avatar-waxflower-background',
=======
        xSmall: "w-5 h-5",
        small: "w-6 h-6",
        medium: "w-8 h-8",
        large: "w-10 h-10",
        xLarge: "w-12 h-12",
      },
      variant: {
        default: "bg-[--color-avatar-default-background] text-[--color-avatar-default-text] border-[--color-avatar-default-border]",
        primary: "bg-[--color-avatar-primary-background] text-[--color-avatar-primary-text] border-[--color-avatar-primary-border]",
        secondary: "bg-[--color-avatar-secondary-background] text-[--color-avatar-secondary-text] border-[--color-avatar-secondary-border]",
        accent: "bg-[--color-avatar-accent-background] text-[--color-avatar-accent-text] border-[--color-avatar-accent-border]",
        success: "bg-[--color-avatar-success-background] text-[--color-avatar-success-text] border-[--color-avatar-success-border]",
        info: "bg-[--color-avatar-info-background] text-[--color-avatar-info-text] border-[--color-avatar-info-border]",
        warning: "bg-[--color-avatar-warning-background] text-[--color-avatar-warning-text] border-[--color-avatar-warning-border]",
>>>>>>> ca08013 (Experimented with token changes and updated components with those token changes. Ready for review.)
      },
    },
    defaultVariants: {
      size: 'medium',
      variant: 'default',
    },
  },
)

const avatarBadgeVariants = cva(
<<<<<<< HEAD
  'absolute flex items-center justify-center rounded-full bg-brand-cream ring-2 ring-brand-cream',
  {
    variants: {
      size: {
        small: 'size-3',
        medium: 'size-4',
        large: 'size-5',
=======
  "absolute flex items-center justify-center rounded-full bg-[--color-avatar-badge-background] text-[--color-avatar-badge-text] border-[--color-avatar-badge-border] ring-2 ring-[--color-avatar-badge-background]",
  {
    variants: {
      size: {
        small: "w-3 h-3 text-xs",
        medium: "w-4 h-4 text-xs", 
        large: "w-5 h-5 text-sm",
>>>>>>> ca08013 (Experimented with token changes and updated components with those token changes. Ready for review.)
      },
      position: {
        'top-left': 'top-0 left-0',
        'top-right': 'top-0 right-0',
        'bottom-left': 'bottom-0 left-0',
        'bottom-right': 'bottom-0 right-0',
      },
    },
    defaultVariants: {
      size: 'medium',
      position: 'bottom-right',
    },
  },
)

interface AvatarProps
  extends React.ComponentProps<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarVariants> {}

interface AvatarBadgeProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof avatarBadgeVariants> {}

function Avatar({ className, size, variant, ...props }: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(avatarVariants({ size, variant, className }))}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn('aspect-square size-full object-cover', className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        'flex size-full items-center justify-center rounded-full text-sm font-medium',
        className,
      )}
      {...props}
    />
  )
}

function AvatarIcon({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="avatar-icon"
      className={cn(
        'flex size-full items-center justify-center rounded-full',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function AvatarBadge({
  className,
  size,
  position,
  ...props
}: AvatarBadgeProps) {
  return (
    <div
      data-slot="avatar-badge"
      className={cn(avatarBadgeVariants({ size, position, className }))}
      {...props}
    />
  )
}

// Compound component pattern
Avatar.Image = AvatarImage
Avatar.Fallback = AvatarFallback
Avatar.Icon = AvatarIcon
Avatar.Badge = AvatarBadge

export { Avatar, AvatarImage, AvatarFallback, AvatarIcon, AvatarBadge }
