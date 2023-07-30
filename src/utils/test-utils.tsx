import { ThemeProvider } from '@brantalikp/rn-resize'
import { QueryClientProvider } from '@tanstack/react-query'
import { RenderOptions, render } from '@testing-library/react-native'
import { JSXElementConstructor, ReactElement } from 'react'

import { generateQueryClient } from '~/config/queryClient'
import { defaultTheme } from '~/features/ui/theme/themes'

// make a function to generate a unique query client for each test
const generateTestQueryClient = () => {
  const client = generateQueryClient()
  const options = client.getDefaultOptions()
  options.queries = {
    ...options.queries,
    retry: false,
  }
  return client
}

const AllTheProviders = ({ children }) => {
  const queryClient = generateTestQueryClient()
  return (
    <ThemeProvider
      theme={defaultTheme}
      options={{
        baseWidth: 414,
        baseHeight: 896,
      }}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  )
}

const customRender = (
  ui: ReactElement<unknown, string | JSXElementConstructor<any>>,
  options?: RenderOptions,
) => render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react-native'

// override render method
export { customRender as render }
