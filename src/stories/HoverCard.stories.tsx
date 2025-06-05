import type { Meta, StoryObj } from '@storybook/react'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../components/ui/hover-card'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
import { Button } from '../components/ui/button'
import { CalendarIcon } from '../components/ui/icons'

const meta: Meta<typeof HoverCard> = {
  title: 'Components/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof HoverCard>

function DefaultHoverCard() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="ghost">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

function CustomContentHoverCard() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Custom Content</h4>
          <p className="text-sm text-muted-foreground">
            This is a custom hover card with additional content and styling.
          </p>
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-xs text-muted-foreground">Online</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

function ImageHoverCard() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="ghost">View Image</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&dpr=2&q=80"
            alt="Product"
            className="rounded-md object-cover"
          />
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">Product Name</h4>
            <p className="text-sm text-muted-foreground">
              A beautiful product image with hover card details.
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

function CustomStylesHoverCard() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline" className="bg-background hover:bg-accent">
          Custom Styled
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 rounded-lg border bg-card p-4 shadow-md">
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Custom Styled Card</h4>
          <p className="text-sm text-muted-foreground">
            This hover card has custom styling applied to both the trigger and
            content.
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Last updated</span>
            <span className="text-xs font-medium">2 hours ago</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

function InteractiveContentHoverCard() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline">Interactive</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Interactive Content</h4>
          <p className="text-sm text-muted-foreground">
            This hover card contains interactive elements.
          </p>
          <div className="flex space-x-2">
            <Button size="small" variant="outline">
              Action 1
            </Button>
            <Button size="small" variant="outline">
              Action 2
            </Button>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export const Default: Story = {
  render: () => <DefaultHoverCard />,
}

export const WithCustomContent: Story = {
  render: () => <CustomContentHoverCard />,
}

export const WithImage: Story = {
  render: () => <ImageHoverCard />,
}

export const WithCustomStyles: Story = {
  render: () => <CustomStylesHoverCard />,
}

export const WithInteractiveContent: Story = {
  render: () => <InteractiveContentHoverCard />,
}
