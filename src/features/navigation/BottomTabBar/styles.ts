import { MakeStylesProps } from '~/types'

type StylesKeys = 'container'

export const styles: MakeStylesProps<StylesKeys> = (theme) => ({
  container: {
    flexDirection: 'row',
    height: 96,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background1,
    gap: theme.metrics.spacing['3xl'],
  },
})
