import { Home } from './Home'

import { render, screen } from '~/utils/test-utils'

it(`renders correctly`, () => {
  render(<Home />)
  expect(screen.getByText('Home')).toBeTruthy()
})
