import { fontsStyles } from './fontsStyles'
import { metrics } from './metrics'
import { palette } from './palette'

export const defaultTheme = {
  colors: {
    primary: palette.turquoiseBlue,
    secondary: palette.monteCarlo,
    background1: palette.springWood,
    black: palette.black,
    white: palette.white,
    textPrimary: palette.santasGray,
    textSecondary: palette.brightGray,
  },
  fonts: fontsStyles,
  metrics,
}

export type Theme = typeof defaultTheme
