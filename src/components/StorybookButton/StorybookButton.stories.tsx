import { Meta, StoryObj } from '@storybook/react-native'

import { StorybookButton, type IStorybookButton } from './StorybookButton'

const meta: Meta<IStorybookButton> = {
  title: 'StorybookButton',
  component: StorybookButton,
  argTypes: {},
}

export default meta

type Story = StoryObj<IStorybookButton>

export const Basic: Story = {
  storyName: 'Basic',
  args: {},
}
