import type { Meta, StoryObj } from '@storybook/react'
import { TagContainer } from '../components/ui/tag-container'

const meta: Meta<typeof TagContainer> = {
  component: TagContainer,
  title: 'Components/TagContainer',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    layout: {
      control: { type: 'select' },
      options: ['default', 'compact', 'spacious'],
    },
  },
}
export default meta

type Story = StoryObj<typeof TagContainer>

const sampleLinks = [
  { id: '1', label: 'Design System', href: '/design-system' },
  { id: '2', label: 'Components', href: '/components' },
  { id: '3', label: 'Documentation', href: '/docs' },
  { id: '4', label: 'Getting Started', href: '/getting-started' },
  { id: '5', label: 'Tutorials', href: '/tutorials' },
  { id: '6', label: 'Examples', href: '/examples' },
  { id: '7', label: 'API Reference', href: '/api' },
  { id: '8', label: 'Changelog', href: '/changelog' },
  { id: '9', label: 'Support', href: '/support' },
  { id: '10', label: 'Community', href: '/community' },
  { id: '11', label: 'Blog', href: '/blog' },
  { id: '12', label: 'Resources', href: '/resources' },
  { id: '13', label: 'Tools', href: '/tools' },
  { id: '14', label: 'Integrations', href: '/integrations' },
  { id: '15', label: 'Plugins', href: '/plugins' },
  { id: '16', label: 'Templates', href: '/templates' },
  { id: '17', label: 'Showcase', href: '/showcase' },
  { id: '18', label: 'Pricing', href: '/pricing' },
  { id: '19', label: 'Enterprise', href: '/enterprise' },
  { id: '20', label: 'Contact', href: '/contact' },
  { id: '21', label: 'About', href: '/about' },
  { id: '22', label: 'Careers', href: '/careers' },
  { id: '23', label: 'Press', href: '/press' },
  { id: '24', label: 'Legal', href: '/legal' },
]

export const Default: Story = {
  render: (args) => (
    <div className="bg-[#F1E5FF] p-12 rounded-[24px]">
      <h4 className="text-4xl font-semibold mb-8">Explore all topics</h4>
      <TagContainer {...args} />
    </div>
  ),
  args: {
    links: sampleLinks.slice(0, 8),
  },
}

export const ManyLinks: Story = {
  args: {
    links: sampleLinks,
  },
}

export const SmallSize: Story = {
  args: {
    links: sampleLinks.slice(0, 12),
    size: 'small',
  },
}

export const LargeSize: Story = {
  args: {
    links: sampleLinks.slice(0, 12),
    size: 'large',
  },
}

export const CompactLayout: Story = {
  args: {
    links: sampleLinks.slice(0, 12),
    layout: 'compact',
  },
}

export const SpaciousLayout: Story = {
  args: {
    links: sampleLinks.slice(0, 12),
    layout: 'spacious',
  },
}

export const CustomMaxRows: Story = {
  args: {
    links: sampleLinks,
    maxRows: 2,
  },
}

export const Responsive: Story = {
  render: () => (
    <div className="space-y-8 w-full max-w-4xl">
      <div>
        <h3 className="text-sm font-medium mb-2">Mobile (320px)</h3>
        <div className="w-80 border rounded-lg p-4">
          <TagContainer links={sampleLinks} />
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Tablet (768px)</h3>
        <div className="w-96 border rounded-lg p-4">
          <TagContainer links={sampleLinks} />
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Desktop (1024px+)</h3>
        <div className="w-full border rounded-lg p-4">
          <TagContainer links={sampleLinks} />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
}

export const FourRowLimit: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="border rounded-lg p-4">
        <h3 className="text-sm font-medium mb-2">4-Row Limit (Default)</h3>
        <TagContainer links={sampleLinks} />
      </div>
      
      <div className="border rounded-lg p-4">
        <h3 className="text-sm font-medium mb-2">2-Row Limit</h3>
        <TagContainer links={sampleLinks} maxRows={2} />
      </div>
      
      <div className="border rounded-lg p-4">
        <h3 className="text-sm font-medium mb-2">1-Row Limit</h3>
        <TagContainer links={sampleLinks} maxRows={1} />
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
} 