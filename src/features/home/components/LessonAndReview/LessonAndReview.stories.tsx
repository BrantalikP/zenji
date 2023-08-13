import { Meta, StoryObj } from '@storybook/react-native'

import { LessonAndReview, type ILessonAndReview } from './LessonAndReview'

const meta: Meta<ILessonAndReview> = {
  title: 'LessonAndReview',
  component: LessonAndReview,
  argTypes: {},
}

export default meta

type Story = StoryObj<ILessonAndReview>

export const Basic: Story = {
  storyName: 'Basic',
  args: {},
}
