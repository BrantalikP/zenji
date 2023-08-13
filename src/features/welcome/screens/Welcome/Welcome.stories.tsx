import { Meta, StoryObj } from '@storybook/react-native'

import { Welcome, type IWelcome } from './Welcome'

const meta: Meta<IWelcome> = {
  title: 'Welcome',
  component: Welcome,
  argTypes: {},
}

export default meta

type Story = StoryObj<IWelcome>

export const Basic: Story = {
  storyName: 'Basic',
  args: {},
}
