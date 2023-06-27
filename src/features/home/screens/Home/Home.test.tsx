import { render, screen } from '@testing-library/react-native'

import { Home } from './Home'
it(`renders correctly`, () => {
  render(<Home />)
  expect(screen.getByText('Home')).toBeTruthy()
})
