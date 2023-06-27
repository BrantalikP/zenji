import { CustomBottomTabBar } from './BottomTabBar'
import { mockDescriptors, mockState } from './mocks/bottomBarMocks'

import { render, fireEvent, screen } from '~/util/test-utils'

let state = mockState

const mockNavigate = ({ name }) => {
  state = {
    ...state,
    index: state.routes.findIndex((route) => route.name === name),
  }
}

const mockNavigation = {
  navigate: jest.fn(mockNavigate),
  emit: () => ({
    defaultPrevented: false,
  }),
}

describe('BottomTabBar', () => {
  it('focus works as expected', () => {
    const { rerender } = render(
      <CustomBottomTabBar
        state={state}
        descriptors={mockDescriptors}
        navigation={mockNavigation}
      />,
    )

    const searchTab = screen.getByTestId('tab-search')
    const dashboardTab = screen.getByTestId('tab-dashboard')
    const projectTab = screen.getByTestId('tab-projects')

    fireEvent.press(dashboardTab)
    fireEvent.press(projectTab)
    fireEvent.press(searchTab)

    rerender(
      <CustomBottomTabBar
        state={state}
        descriptors={mockDescriptors}
        navigation={mockNavigation}
      />,
    )

    expect(mockNavigation.navigate).toHaveBeenCalledWith({ name: 'search', merge: true })

    expect(searchTab.props.isFocused).toBe(true)

    fireEvent.press(searchTab)
  })
})
