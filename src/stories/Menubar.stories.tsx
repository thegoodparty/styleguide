import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '../components/ui/menubar'
import {
  FileIcon,
  PencilIcon,
  EyeIcon,
  HelpCircleIcon,
  SettingsIcon,
  UserIcon,
  LogOutIcon,
} from '../components/ui/icons'

const meta: Meta<typeof Menubar> = {
  title: 'Components/Menubar',
  component: Menubar,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Menubar>

function DefaultMenubar() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            New Window <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>New Incognito Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Share
            <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Cut <MenubarShortcut>⌘X</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Copy <MenubarShortcut>⌘C</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Paste <MenubarShortcut>⌘V</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Zoom In <MenubarShortcut>⌘+</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Zoom Out <MenubarShortcut>⌘-</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Toggle Fullscreen <MenubarShortcut>⌘F</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Help</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Documentation</MenubarItem>
          <MenubarItem>Support</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>About</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

function IconsMenubar() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger className="flex items-center gap-2">
          <FileIcon className="h-4 w-4" />
          File
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem className="flex items-center gap-2">
            <FileIcon className="h-4 w-4" />
            New File
          </MenubarItem>
          <MenubarItem className="flex items-center gap-2">
            <PencilIcon className="h-4 w-4" />
            Edit
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem className="flex items-center gap-2">
            <SettingsIcon className="h-4 w-4" />
            Settings
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="flex items-center gap-2">
          <EyeIcon className="h-4 w-4" />
          View
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Zoom In</MenubarItem>
          <MenubarItem>Zoom Out</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Fullscreen</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="flex items-center gap-2">
          <HelpCircleIcon className="h-4 w-4" />
          Help
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Documentation</MenubarItem>
          <MenubarItem>Support</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

function SubMenuMenubar() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New File</MenubarItem>
          <MenubarItem>Open...</MenubarItem>
          <MenubarSeparator />
          <MenubarMenu>
            <MenubarTrigger>Share</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Email</MenubarItem>
              <MenubarItem>Message</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>More...</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Undo</MenubarItem>
          <MenubarItem>Redo</MenubarItem>
          <MenubarSeparator />
          <MenubarMenu>
            <MenubarTrigger>Find</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Find in File</MenubarItem>
              <MenubarItem>Find in Project</MenubarItem>
              <MenubarItem>Find in Workspace</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

function UserMenuMenubar() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger className="flex items-center gap-2">
          <UserIcon className="h-4 w-4" />
          Account
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem className="flex items-center gap-2">
            <UserIcon className="h-4 w-4" />
            Profile
          </MenubarItem>
          <MenubarItem className="flex items-center gap-2">
            <SettingsIcon className="h-4 w-4" />
            Settings
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem className="flex items-center gap-2 text-red-500">
            <LogOutIcon className="h-4 w-4" />
            Logout
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

function CustomStylesMenubar() {
  return (
    <Menubar className="rounded-lg border bg-card p-1">
      <MenubarMenu>
        <MenubarTrigger className="rounded-md px-3 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
          File
        </MenubarTrigger>
        <MenubarContent className="rounded-lg border bg-card p-1">
          <MenubarItem className="rounded-md px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">
            New File
          </MenubarItem>
          <MenubarItem className="rounded-md px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">
            Open...
          </MenubarItem>
          <MenubarSeparator className="my-1" />
          <MenubarItem className="rounded-md px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">
            Save
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export const Default: Story = {
  render: () => <DefaultMenubar />,
}

export const WithIcons: Story = {
  render: () => <IconsMenubar />,
}

export const WithSubMenu: Story = {
  render: () => <SubMenuMenubar />,
}

export const WithUserMenu: Story = {
  render: () => <UserMenuMenubar />,
}

export const WithCustomStyles: Story = {
  render: () => <CustomStylesMenubar />,
}
