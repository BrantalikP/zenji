import { Meta, StoryObj } from '@storybook/react-native'
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds'
import { palette } from '../../src/features/ui/theme/palette'
import React from 'react'
import { View } from 'react-native'

import { Text, type IText } from '../../src/features/ui/components/Text'

const meta: Meta<IText> = {
  title: 'AppText',
  component: Text,
  parameters: {
    backgrounds: {
      default: 'warm',
      values: [
        { name: 'background', value: palette.springWood, default: true },
        { name: 'white', value: 'white' },
        { name: 'black', value: 'black' },
      ],
    },
  },
  decorators: [
    withBackgrounds,
    (Story) => (
      <View
        style={{
          flex: 1,
        }}>
        <Story />
      </View>
    ),
  ],
}

export default meta

type Story = StoryObj<IText>

export const Basic: Story = {
  storyName: 'Typography',

  render: ({ ...restProps }) => (
    <View
      style={{
        padding: 20,
        paddingTop: 40,
      }}>
      <Text variant="h1" {...restProps}>
        Heading 1
      </Text>
      <Text variant="h2">Heading 2</Text>
      <Text variant="h2">Heading 3</Text>
      <Text variant="h3">Heading 4</Text>
      <Text variant="h4">Heading 5</Text>
      <Text variant="h5">Heading 6</Text>
      <Text variant="h6">body</Text>
      <Text variant="link">link</Text>
      <Text variant="bodyLight">body light</Text>
      <Text variant="button">button</Text>
      <Text variant="bodySmall">body small</Text>
      <Text variant="caption">caption</Text>
    </View>
  ),
}
