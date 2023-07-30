import { render, screen } from '@testing-library/react-native'

import { Button } from './Button'
it(`renders correctly`, () => {
  render(<Button label="Button" />)
  expect(screen.getByText('Button')).toBeTruthy()
})
