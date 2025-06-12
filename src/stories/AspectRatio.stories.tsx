import type { Meta, StoryObj } from '@storybook/react'
import { AspectRatio } from '../components/ui/aspect-ratio'

const meta: Meta<typeof AspectRatio> = {
  title: 'Components/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A component for maintaining consistent aspect ratios while properly containing content.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof AspectRatio>

export const Default: Story = {
  render: () => (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9}>
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          className="h-full w-full rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  ),
}

export const Square: Story = {
  render: () => (
    <div className="w-[300px]">
      <AspectRatio ratio={1}>
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&dpr=2&q=80"
          alt="Photo by Daniele Levis Pelusi"
          className="h-full w-full rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  ),
}

export const Portrait: Story = {
  render: () => (
    <div className="w-[200px]">
      <AspectRatio ratio={3 / 4}>
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&dpr=2&q=80"
          alt="Photo by Aiony Haust"
          className="h-full w-full rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  ),
}

export const WithBackground: Story = {
  render: () => (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9}>
        <div className="flex h-full w-full items-center justify-center rounded-md bg-slate-100 border border-slate-200">
          <span className="text-4xl font-semibold text-slate-700">16:9</span>
        </div>
      </AspectRatio>
    </div>
  ),
}

export const WithVideo: Story = {
  render: () => (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9}>
        <video
          src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          controls
          className="h-full w-full rounded-md"
        />
      </AspectRatio>
    </div>
  ),
}

export const ResponsiveContainer: Story = {
  render: () => (
    <div className="max-w-2xl">
      <AspectRatio ratio={16 / 9}>
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          className="h-full w-full rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  ),
}

export const WithoutWrapperDiv: Story = {
  render: () => (
    <AspectRatio ratio={16 / 9} className="max-w-md">
      <div className="flex h-full w-full items-center justify-center rounded-md bg-gradient-to-br from-blue-400 to-purple-600 text-white">
        <span className="text-2xl font-bold">No Wrapper Needed!</span>
      </div>
    </AspectRatio>
  ),
}

export const MultipleRatios: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <AspectRatio ratio={1} className="max-w-sm">
        <div className="flex h-full w-full items-center justify-center rounded-md bg-red-100">
          <span className="text-lg font-semibold">1:1</span>
        </div>
      </AspectRatio>
      <AspectRatio ratio={16 / 9} className="max-w-sm">
        <div className="flex h-full w-full items-center justify-center rounded-md bg-green-100">
          <span className="text-lg font-semibold">16:9</span>
        </div>
      </AspectRatio>
      <AspectRatio ratio={4 / 3} className="max-w-sm">
        <div className="flex h-full w-full items-center justify-center rounded-md bg-blue-100">
          <span className="text-lg font-semibold">4:3</span>
        </div>
      </AspectRatio>
    </div>
  ),
}
