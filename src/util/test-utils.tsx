import { RenderOptions, render } from '@testing-library/react-native'
import { JSXElementConstructor, ReactElement, ReactNode } from 'react'

import { ThemeProvider } from '~/contexts/Theme'

const AllTheProviders = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

const customRender = (
  ui: ReactElement<unknown, string | JSXElementConstructor<any>>,
  options?: RenderOptions,
) => render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react-native'

// override render method
export { customRender as render }
