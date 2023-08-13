import { MakeStylesProps } from '~/types'

type StylesKeys = 'container' | 'title' | 'text'

export const styles: MakeStylesProps<StylesKeys> = (theme) => ({
  container: {
    flex: 1,
    // justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.m,
  },
  title: {},
  text: {},
})
