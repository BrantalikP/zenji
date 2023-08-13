import { render, screen } from '@testing-library/react-native'

import { SelectTile } from './SelectTile'
it(`renders correctly`, () => {
  render(<SelectTile />)
  expect(screen.getByText('SelectTile')).toBeTruthy()
})
