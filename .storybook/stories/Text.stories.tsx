import { Meta, StoryObj } from '@storybook/react-native'
import React from 'react'
import { View } from 'react-native'

import { Text, type IText } from '../../src/features/ui/components/Text'

const meta: Meta<IText> = {
  title: 'AppText',
  component: Text,

  decorators: [
    (Story) => (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Story />
      </View>
    ),
  ],
}

export default meta

type Story = StoryObj<IText>

export const Basic: Story = {
  storyName: 'Basic',
  args: {
    disabled: false,
    text: 'Tap me',
  },
}
