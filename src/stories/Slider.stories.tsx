import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from '../components/ui/slider'

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {
  render: () => (
    <div className="w-[200px] space-y-4">
      <Slider defaultValue={[50]} max={100} step={1} />
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="w-[200px] space-y-4">
      <div className="flex items-center justify-between">
        <label htmlFor="volume" className="text-sm font-medium">
          Volume
        </label>
        <span className="text-sm text-muted-foreground">50%</span>
      </div>
      <Slider id="volume" defaultValue={[50]} max={100} step={1} />
    </div>
  ),
}

export const Range: Story = {
  render: () => (
    <div className="w-[200px] space-y-4">
      <div className="flex items-center justify-between">
        <label htmlFor="range" className="text-sm font-medium">
          Range
        </label>
        <span className="text-sm text-muted-foreground">20-80</span>
      </div>
      <Slider id="range" defaultValue={[20, 80]} max={100} step={1} />
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="w-[200px] space-y-4">
      <Slider defaultValue={[50]} max={100} step={1} disabled />
    </div>
  ),
}

export const WithSteps: Story = {
  render: () => (
    <div className="w-[200px] space-y-4">
      <div className="flex items-center justify-between">
        <label htmlFor="steps" className="text-sm font-medium">
          Steps
        </label>
        <span className="text-sm text-muted-foreground">5</span>
      </div>
      <Slider id="steps" defaultValue={[5]} max={10} step={1} />
    </div>
  ),
}
