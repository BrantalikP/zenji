import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Alert } from 'react-native'

import { CustomBottomTabBar } from './BottomTabBar'
import { mockDescriptors, mockState } from './mocks/bottomBarMocks'

const meta = {
  title: 'Navigation/ButtonTabBar',
  component: CustomBottomTabBar,
} satisfies Meta<typeof CustomBottomTabBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    state: mockState,
    descriptors: mockDescriptors,
  },
}
