import { Button } from './Button'
import { fontsStyles } from '../../theme/fontsStyles'
import { defaultTheme } from '../../theme/themes'

import { render, screen } from '~/utils/test-utils'

describe(`Button`, () => {
  it(`renders correctly`, () => {
    render(<Button label="Button" disableUppercase />)

    expect(screen.getByText('Button')).toBeTruthy()
  })
  it(`default variant is set correctly`, () => {
    const { getByTestId } = render(<Button label="Button" disableUppercase />)

    const button = getByTestId('button')
    // container is within an array of styles
    const backgroundColor = button.props.style[0].backgroundColor
    expect(backgroundColor).toBe(defaultTheme.colors.primary)
  })
  it(`changing the variant prop works correctly`, () => {
    const { getByTestId } = render(<Button variant="tertiary" label="Button" disableUppercase />)

    const button = getByTestId('button')
    // container is within an array of styles
    const backgroundColor = button.props.style[0].backgroundColor
    expect(backgroundColor).toBe('transparent')
  })
  it(`Text font styles are correct`, () => {
    const { getByTestId } = render(<Button label="Button" disableUppercase />)

    const text = getByTestId('text')

    const fontStyles = text.props.style[0]
    expect(fontStyles).toBe(fontsStyles.button)
  })
})
