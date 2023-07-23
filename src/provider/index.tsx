import { ThemeProvider } from '@brantalikp/rn-resize'
import { QueryClientProvider } from '@tanstack/react-query'
import { useFonts } from 'expo-font'
import { SplashScreen } from 'expo-router'
import { useEffect } from 'react'

import { queryClient } from '~/config/queryClient'
import { defaultTheme } from '~/features/ui/theme/themes'

export const Provider = ({ children }) => {
  const [fontsLoaded] = useFonts({
    'HelveticaNeue-Bold': require('assets/fonts/HelveticaNeue-Bold.ttf'),
    'HelveticaNeue-Regular': require('assets/fonts/HelveticaNeue-Regular.ttf'),
    'HelveticaNeue-Thin': require('assets/fonts/HelveticaNeue-Thin.ttf'),
  })

  SplashScreen.preventAutoHideAsync()

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync()
  }, [fontsLoaded])

  if (!fontsLoaded) return null

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
