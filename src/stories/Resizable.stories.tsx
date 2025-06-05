import type { Meta, StoryObj } from '@storybook/react'
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '../components/ui/resizable'

const meta: Meta<typeof ResizablePanelGroup> = {
  title: 'Components/Resizable',
  component: ResizablePanelGroup,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ResizablePanelGroup>

export const Default: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] w-full max-w-md rounded-lg border"
    >
      <ResizablePanel
        defaultSize={50}
        minSize={20}
        maxSize={80}
        className="bg-muted p-4"
      >
        Panel 1
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel
        defaultSize={50}
        minSize={20}
        maxSize={80}
        className="bg-muted-foreground p-4"
      >
        Panel 2
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}
