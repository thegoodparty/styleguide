import { Input } from '../components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select'
import { Toggle } from '../components/ui/toggle'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '../components/ui/menubar'
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
} from '../components/ui/command'

export default {
  title: 'Design System/Form Sizing',
  parameters: {
    docs: {
      description: {
        component: 'Standardized 40px height for all form controls.',
      },
    },
  },
}

export const DefaultSizing = () => (
  <div className="space-y-8 p-6 max-w-2xl">
    <h3 className="text-lg font-semibold mb-4">
      All Form Controls - 40px Height
    </h3>
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <label className="w-24 text-sm">Input:</label>
        <Input placeholder="Standard input..." className="flex-1" />
      </div>

      <div className="flex items-center gap-4">
        <label className="w-24 text-sm">Select:</label>
        <Select>
          <SelectTrigger className="flex-1">
            <SelectValue placeholder="Choose option..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
            <SelectItem value="2">Option 2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-4">
        <label className="w-24 text-sm">Toggle:</label>
        <Toggle>Toggle me</Toggle>
      </div>

      <div className="flex items-center gap-4">
        <label className="w-24 text-sm">Tabs:</label>
        <Tabs defaultValue="1" className="flex-1">
          <TabsList>
            <TabsTrigger value="1">Tab 1</TabsTrigger>
            <TabsTrigger value="2">Tab 2</TabsTrigger>
            <TabsTrigger value="3">Tab 3</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="flex items-center gap-4">
        <label className="w-24 text-sm">Menubar:</label>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>New</MenubarItem>
              <MenubarItem>Open</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Copy</MenubarItem>
              <MenubarItem>Paste</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>

      <div className="flex items-start gap-4">
        <label className="w-24 text-sm pt-2">Command:</label>
        <Command className="flex-1 border rounded-md">
          <CommandInput placeholder="Search..." />
        </Command>
      </div>
    </div>
  </div>
)

export const SizeVariants = () => (
  <div className="space-y-8 p-6">
    <h3 className="text-lg font-semibold mb-4">Size Variants</h3>
    <div className="space-y-6">
      <div>
        <p className="text-sm text-gray-600 mb-2">Small (32px)</p>
        <div className="flex items-center gap-2">
          <Select>
            <SelectTrigger size="sm">
              <SelectValue placeholder="Small select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Option</SelectItem>
            </SelectContent>
          </Select>
          <Toggle size="sm">Small</Toggle>
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-600 mb-2">Default (40px)</p>
        <div className="flex items-center gap-2">
          <Input placeholder="Default input" />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Default select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Option</SelectItem>
            </SelectContent>
          </Select>
          <Toggle>Default</Toggle>
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-600 mb-2">Large (40px)</p>
        <div className="flex items-center gap-2">
          <Toggle size="lg">Large Toggle</Toggle>
          <span className="text-sm text-gray-500">
            (Note: Only Toggle has large variant at 40px)
          </span>
        </div>
      </div>
    </div>
  </div>
)

export const AlignmentTest = () => (
  <div className="space-y-8 p-6">
    <h3 className="text-lg font-semibold mb-4">Alignment Test</h3>
    <p className="text-sm text-gray-600 mb-4">
      All form controls should align perfectly at 40px height
    </p>

    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="flex items-center gap-2">
        <Input placeholder="Search..." className="max-w-xs" />
        <Select>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="active">Active</SelectItem>
          </SelectContent>
        </Select>
        <Toggle variant="outline">Options</Toggle>
        <Menubar className="ml-auto">
          <MenubarMenu>
            <MenubarTrigger>Actions</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Export</MenubarItem>
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>

    <div className="mt-4 p-4 bg-blue-50 rounded text-sm">
      <p>✓ All controls are exactly 40px (2.5rem) in height</p>
      <p>✓ Consistent visual weight across different control types</p>
      <p>✓ Proper alignment when used together in forms</p>
    </div>
  </div>
)
