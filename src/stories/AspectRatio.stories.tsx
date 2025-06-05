import type { Meta, StoryObj } from '@storybook/react'
import { AspectRatio } from '../components/ui/aspect-ratio'

const meta: Meta<typeof AspectRatio> = {
  title: 'Components/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
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
          className="rounded-md object-cover"
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
          className="rounded-md object-cover"
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
          className="rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  ),
}

export const WithBackground: Story = {
  render: () => (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9}>
        <div className="flex h-full w-full items-center justify-center rounded-md bg-muted">
          <span className="text-4xl">16:9</span>
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
          className="rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  ),
}
