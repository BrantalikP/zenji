import { Meta, StoryObj } from '@storybook/react-native'

import { Input, type IInput } from './Input'

const meta: Meta<IInput> = {
  title: 'Input',
  component: Input,
  argTypes: {},
}

export default meta

type Story = StoryObj<IInput>

export const Basic: Story = {
  storyName: 'Basic',
  args: {},
}
