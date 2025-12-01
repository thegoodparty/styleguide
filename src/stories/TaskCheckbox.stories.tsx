import type { Meta, StoryObj } from '@storybook/react'
import { TaskCheckbox } from '../components/ui/task-checkbox'
import { Label } from '../components/ui/label'

const meta: Meta<typeof TaskCheckbox> = {
  title: 'Components/TaskCheckbox',
  component: TaskCheckbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A circular checkbox component used for task items. Features three visual states: unchecked (empty circle outline), hover (circle with checkmark preview), and checked (circle with checkmark in lighter gray).',
      },
    },
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Controlled checked state',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Default checked state (uncontrolled)',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the checkbox is required',
    },
    name: {
      control: 'text',
      description: 'Name attribute for form submission',
    },
    value: {
      control: 'text',
      description: 'Value attribute for form submission',
    },
  },
}

export default meta
type Story = StoryObj<typeof TaskCheckbox>

export const Playground: Story = {
  args: {
    defaultChecked: false,
    disabled: false,
  },
  render: (args) => (
    <div className="flex items-center gap-3">
      <TaskCheckbox id="playground" {...args} />
      <Label htmlFor="playground">Task checkbox</Label>
    </div>
  ),
}

export const Unchecked: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <TaskCheckbox id="task-unchecked" />
      <Label htmlFor="task-unchecked">Hover to see the check preview</Label>
    </div>
  ),
}

export const Checked: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <TaskCheckbox id="task-checked" defaultChecked />
      <Label htmlFor="task-checked">Completed task</Label>
    </div>
  ),
}
