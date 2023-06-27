import { fontsStyles } from './fontsStyles'
import { metrics } from './metrics'
import { palette } from './pallete'

export const defaultTheme = {
  colors: {
    primary: palette.royalBlue,
    secondary: palette.neonPurple,
    background1: palette.charcoal,
    background2: palette.oxfordBlue,
    black: palette.black,
    white: palette.white,
  },
  fonts: fontsStyles,
  metrics,
}

export type Theme = typeof defaultTheme
