import { MakeStylesProps } from '~/types'

type StylesKeys = 'container'

export const styles: MakeStylesProps<StylesKeys> = (theme) => ({
  container: {
    position: 'absolute',
    bottom: theme.spacing['3xl'],
    right: theme.spacing['3xl'],
  },
})
