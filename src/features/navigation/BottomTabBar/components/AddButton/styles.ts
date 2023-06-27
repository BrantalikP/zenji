import { MakeStylesProps } from '~/types'

type StylesKeys = 'container'

export const styles: MakeStylesProps<StylesKeys> = (theme) => ({
  container: {
    height: 40,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.metrics.borderRadii.l,
  },
})
