import { MakeStylesProps } from '~/types'

type StylesKeys = 'primaryContainer' | 'primaryText'

export const styles: MakeStylesProps<StylesKeys> = (theme) => ({
  primaryContainer: {
    backgroundColor: theme.colors.primary,
    padding: 24.5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: 38,
  },
  primaryText: {
    color: theme.colors.white,
  },
  tertiaryContainer: {
    backgroundColor: 'transparent',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  tertiaryText: {
    color: theme.colors.textSecondary,
  },
})
