import type { Meta, StoryObj } from '@storybook/react'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '../components/ui/command'

const meta: Meta<typeof Command> = {
  title: 'Components/Command',
  component: Command,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Command>

export const Default: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search</CommandItem>
          <CommandItem>Settings</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>Profile</CommandItem>
          <CommandItem>Billing</CommandItem>
          <CommandItem>Settings</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}

export const WithShortcuts: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            Calendar
            <CommandShortcut>⌘C</CommandShortcut>
          </CommandItem>
          <CommandItem>
            Search
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
          <CommandItem>
            Settings
            <CommandShortcut>⌘,</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}

export const WithDialog: Story = {
  render: () => (
    <CommandDialog>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search</CommandItem>
          <CommandItem>Settings</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>Profile</CommandItem>
          <CommandItem>Billing</CommandItem>
          <CommandItem>Settings</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  ),
}

export const WithNestedGroups: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="File">
          <CommandItem>New File</CommandItem>
          <CommandItem>Open File</CommandItem>
          <CommandItem>Save</CommandItem>
          <CommandItem>Save As</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Edit">
          <CommandItem>Undo</CommandItem>
          <CommandItem>Redo</CommandItem>
          <CommandItem>Cut</CommandItem>
          <CommandItem>Copy</CommandItem>
          <CommandItem>Paste</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="View">
          <CommandItem>Zoom In</CommandItem>
          <CommandItem>Zoom Out</CommandItem>
          <CommandItem>Toggle Fullscreen</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}

export const WithCustomStyling: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md">
      <CommandInput
        placeholder="Type a command or search..."
        className="border-b px-4 py-3"
      />
      <CommandList className="p-2">
        <CommandEmpty className="py-6 text-center text-sm">
          No results found.
        </CommandEmpty>
        <CommandGroup
          heading="Favorites"
          className="text-xs font-medium text-muted-foreground"
        >
          <CommandItem className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm">
            <span>⭐</span>
            <span>Starred Items</span>
          </CommandItem>
          <CommandItem className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm">
            <span>📁</span>
            <span>Recent Files</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator className="my-2" />
        <CommandGroup
          heading="Settings"
          className="text-xs font-medium text-muted-foreground"
        >
          <CommandItem className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm">
            <span>👤</span>
            <span>Profile</span>
          </CommandItem>
          <CommandItem className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm">
            <span>⚙️</span>
            <span>Settings</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}
