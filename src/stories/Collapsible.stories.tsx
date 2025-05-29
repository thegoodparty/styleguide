import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../components/ui/collapsible'
import { ChevronDownIcon } from '../components/ui/icons'

const meta: Meta<typeof Collapsible> = {
  title: 'Components/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Collapsible>

export const Default: Story = {
  render: () => (
    <Collapsible className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4">
        <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="small" className="w-9 p-0">
            <ChevronDownIcon className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 font-mono text-sm">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
}

export const WithCustomTrigger: Story = {
  render: () => (
    <Collapsible className="w-[350px] space-y-2">
      <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg border p-4 font-medium">
        <span>Click to expand</span>
        <ChevronDownIcon className="h-4 w-4" />
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3">
          <h4 className="mb-2 font-semibold">Content Title</h4>
          <p className="text-sm text-muted-foreground">
            This is some example content that can be expanded and collapsed.
          </p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
}

export const WithNestedContent: Story = {
  render: () => (
    <Collapsible className="w-[350px] space-y-2">
      <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg border p-4 font-medium">
        <span>Parent Section</span>
        <ChevronDownIcon className="h-4 w-4" />
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2">
        <Collapsible className="space-y-2">
          <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg border p-4 font-medium">
            <span>Child Section 1</span>
            <ChevronDownIcon className="h-4 w-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-3">
              <p className="text-sm">Child section 1 content</p>
            </div>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible className="space-y-2">
          <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg border p-4 font-medium">
            <span>Child Section 2</span>
            <ChevronDownIcon className="h-4 w-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-3">
              <p className="text-sm">Child section 2 content</p>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CollapsibleContent>
    </Collapsible>
  ),
}

export const WithCustomStyles: Story = {
  render: () => (
    <Collapsible className="w-[350px] space-y-2">
      <CollapsibleTrigger className="group flex w-full items-center justify-between rounded-lg border bg-card p-4 font-medium transition-colors hover:bg-accent">
        <span>Custom Styled Section</span>
        <ChevronDownIcon className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border bg-card p-4">
          <h4 className="mb-2 text-lg font-semibold">Section Title</h4>
          <p className="text-sm text-muted-foreground">
            This section has custom styling applied to both the trigger and content.
          </p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
}

export const WithAnimation: Story = {
  render: () => (
    <Collapsible className="w-[350px] space-y-2">
      <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg border p-4 font-medium">
        <span>Animated Section</span>
        <ChevronDownIcon className="h-4 w-4 transition-transform duration-200" />
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border p-4">
          <p className="text-sm">
            This content will animate when expanding and collapsing.
          </p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
} 