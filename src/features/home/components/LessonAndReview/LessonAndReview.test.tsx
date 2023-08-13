import { render, screen } from '@testing-library/react-native'

import { LessonAndReview } from './LessonAndReview'
it(`renders correctly`, () => {
  render(<LessonAndReview />)
  expect(screen.getByText('LessonAndReview')).toBeTruthy()
})
