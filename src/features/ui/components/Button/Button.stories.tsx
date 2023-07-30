import { Meta, StoryObj } from '@storybook/react-native'
import { View } from 'react-native'

import { Button, type IButton } from './Button'

const meta: Meta<IButton> = {
  title: 'Button',
  component: Button,
  argTypes: {},
  args: {
    label: 'Button',
  },
  decorators: [
    (Story) => (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 20,
        }}>
        <Story />
      </View>
    ),
  ],
}

export default meta

type Story = StoryObj<IButton>

export const Default: Story = {
  storyName: 'Default',
  args: { label: 'Default Button' },
}

export const Primary: Story = {
  storyName: 'Primary',
  args: { label: 'Primary Button', variant: 'primary' },
}
export const Tertiary: Story = {
  storyName: 'Tertiary',
  args: { label: 'Tertiary Button', variant: 'tertiary' },
}
