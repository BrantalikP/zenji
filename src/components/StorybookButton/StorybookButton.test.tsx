import { render, screen } from '@testing-library/react-native'

import { StorybookButton } from './StorybookButton'
it(`renders correctly`, () => {
  render(<StorybookButton />)
  expect(screen.getByText('StorybookButton')).toBeTruthy()
})
