import { Meta, StoryObj } from '@storybook/react-native'

import { StorybookButton } from './StorybookButton'

const meta: Meta = {
  title: 'StorybookButton',
  component: StorybookButton,
  argTypes: {},
}

export default meta

type Story = StoryObj

export const Basic: Story = {
  storyName: 'Basic',
  args: {},
}
