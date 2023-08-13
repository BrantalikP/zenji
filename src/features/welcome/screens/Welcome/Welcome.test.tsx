import { render, screen } from '@testing-library/react-native'

import { Welcome } from './Welcome'
it(`renders correctly`, () => {
  render(<Welcome />)
  expect(screen.getByText('Welcome')).toBeTruthy()
})
