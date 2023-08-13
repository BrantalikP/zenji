import { render, screen } from '@testing-library/react-native'

import { Input } from './Input'
it(`renders correctly`, () => {
  render(<Input />)
  expect(screen.getByText('Input')).toBeTruthy()
})
