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
    inputBackground: palette.brightGray,
  },
  fonts: fontsStyles,
  spacing: metrics.spacing,
}

export type Theme = typeof defaultTheme
