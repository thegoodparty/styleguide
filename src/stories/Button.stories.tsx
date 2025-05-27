import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../components/ui/button'
import { IconButton } from '../components/ui/icon-button'
import { DownloadIcon } from 'lucide-react'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Click Me',
    variant: 'default',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
}

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
}

export const Ghost: Story = {
  args: {
    children: 'Ghost',
    variant: 'ghost',
  },
}

export const Link: Story = {
  args: {
    children: 'Link',
    variant: 'link',
  },
}

export const Destructive: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive',
  },
}

export const Clear: Story = {
  args: {
    children: 'Clear',
    variant: 'clear',
  },
}

export const Contained: Story = {
  args: {
    children: 'Contained',
    variant: 'contained',
  },
}

export const WithIcon: Story = {
  args: {
    children: 'Download',
    variant: 'default',
  },
  render: (args) => (
    <Button {...args}>
      <DownloadIcon className="mr-2 h-4 w-4" />
      {args.children}
    </Button>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Button size="xSmall">xSmall (24px)</Button>
        <Button size="small">Small (32px)</Button>
        <Button size="medium">Medium (40px)</Button>
        <Button size="large">Large (48px)</Button>
      </div>
    </div>
  ),
}

export const IconButtonSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <IconButton size="xSmall" aria-label="Extra small icon button">
        <DownloadIcon className="h-3 w-3" />
      </IconButton>
      <IconButton size="small" aria-label="Small icon button">
        <DownloadIcon className="h-4 w-4" />
      </IconButton>
      <IconButton size="medium" aria-label="Medium icon button">
        <DownloadIcon className="h-5 w-5" />
      </IconButton>
      <IconButton size="large" aria-label="Large icon button">
        <DownloadIcon className="h-6 w-6" />
      </IconButton>
      <IconButton size="xLarge" aria-label="Extra large icon button">
        <DownloadIcon className="h-8 w-8" />
      </IconButton>
    </div>
  ),
}

export const IconButtonVariants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <IconButton variant="default" aria-label="Default icon button">
        <DownloadIcon className="h-5 w-5" />
      </IconButton>
      <IconButton variant="outline" aria-label="Outline icon button">
        <DownloadIcon className="h-5 w-5" />
      </IconButton>
      <IconButton variant="clear" aria-label="Clear icon button">
        <DownloadIcon className="h-5 w-5" />
      </IconButton>
      <IconButton variant="contained" aria-label="Contained icon button">
        <DownloadIcon className="h-5 w-5" />
      </IconButton>
    </div>
  ),
} 