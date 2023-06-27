import { render, screen } from '@testing-library/react-native'

import { DashboardScreen } from './DashboardScreen'
it(`renders correctly`, () => {
  render(<DashboardScreen />)
  expect(screen.getByText('DashboardScreen')).toBeTruthy()
})
