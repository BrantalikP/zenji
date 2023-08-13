import { Meta, StoryObj } from '@storybook/react-native'

import { SelectTile, type ISelectTile } from './SelectTile'

const meta: Meta<ISelectTile> = {
  title: 'SelectTile',
  component: SelectTile,
  argTypes: {},
}

export default meta

type Story = StoryObj<ISelectTile>

export const Basic: Story = {
  storyName: 'Basic',
  args: {},
}
