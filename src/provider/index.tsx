import { useFonts } from 'expo-font'
import { SplashScreen } from 'expo-router'

import { ThemeProvider } from '~/contexts/Theme'

export const Provider = ({ children }) => {
  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('assets/fonts/Inter-Regular.ttf'),
    'Inter-Bold': require('assets/fonts/Inter-Bold.ttf'),
    'Inter-Medium': require('assets/fonts/Inter-Medium.ttf'),
    'Inter-SemiBold': require('assets/fonts/Inter-SemiBold.ttf'),
    'Poppins-SemiBold': require('assets/fonts/Poppins-SemiBold.ttf'),
  })

  return (
    <ThemeProvider>
      {!fontsLoaded && <SplashScreen />}
      {fontsLoaded && children}
    </ThemeProvider>
  )
}
