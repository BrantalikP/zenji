import { Meta, StoryObj } from '@storybook/react-native'
import React from 'react'
import { View } from 'react-native'

import { Text, type IText } from './Text'

const meta: Meta<IText> = {
  title: 'Text',
  component: Text,
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
      <Text variant="h1">Heading 1</Text>
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
