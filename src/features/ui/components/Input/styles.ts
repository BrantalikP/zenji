import { MakeStylesProps } from '~/types'

type StylesKeys = 'container'

export const styles: MakeStylesProps<StylesKeys> = (theme) => ({
  container: {
    width: '100%',
    height: 40,
    backgroundColor: theme.colors.inputBackground,
  },
})
