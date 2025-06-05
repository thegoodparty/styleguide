import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../components/ui/button'
import { IconButton } from '../components/ui/icon-button'
import { DownloadIcon } from '../components/ui/icons'

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

export const Destructive: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive',
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

export const WhiteGhost: Story = {
  args: {
    children: 'White Ghost',
    variant: 'whiteGhost',
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-800 p-8 rounded-lg">
        <Story />
      </div>
    ),
  ],
}

export const WhiteOutline: Story = {
  args: {
    children: 'White Outline',
    variant: 'whiteOutline',
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-800 p-8 rounded-lg">
        <Story />
      </div>
    ),
  ],
}

export const WithIcon: Story = {
  args: {
    children: 'Download',
    variant: 'default',
    icon: <DownloadIcon className="h-4 w-4" />,
  },
}

export const IconPlacement: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4 items-start">
      <Button
        {...args}
        icon={<DownloadIcon className="h-4 w-4" />}
        iconPosition="left"
      >
        Icon Left
      </Button>
      <Button
        {...args}
        icon={<DownloadIcon className="h-4 w-4" />}
        iconPosition="right"
      >
        Icon Right
      </Button>
    </div>
  ),
  args: {
    variant: 'default',
  },
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

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(
        ['default', 'secondary', 'destructive', 'outline', 'ghost'] as const
      ).map((variant) => (
        <div key={variant} className="flex gap-4">
          <Button variant={variant} size="large">
            {variant} Enabled
          </Button>
          <Button variant={variant} size="large" disabled>
            {variant} Disabled
          </Button>
        </div>
      ))}
      {/* White variants on dark background */}
      {(['whiteOutline', 'whiteGhost'] as const).map((variant) => (
        <div key={variant} className="flex gap-4 bg-gray-800 p-4 rounded-lg">
          <Button variant={variant} size="large">
            {variant} Enabled
          </Button>
          <Button variant={variant} size="large" disabled>
            {variant} Disabled
          </Button>
        </div>
      ))}
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
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        {(
          ['default', 'secondary', 'destructive', 'outline', 'ghost'] as const
        ).map((variant) => (
          <IconButton key={variant} variant={variant} aria-label={variant}>
            <DownloadIcon className="h-5 w-5" />
          </IconButton>
        ))}
      </div>
      {/* White variants on dark background */}
      <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg">
        {(['whiteOutline', 'whiteGhost'] as const).map((variant) => (
          <IconButton key={variant} variant={variant} aria-label={variant}>
            <DownloadIcon className="h-5 w-5" />
          </IconButton>
        ))}
      </div>
    </div>
  ),
}
