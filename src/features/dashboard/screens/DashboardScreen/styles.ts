import { MakeStylesProps } from '~/types'

type StylesKeys = 'container' | 'title' | 'text'

export const styles: MakeStylesProps<StylesKeys> = (theme) => ({
  container: {
    flex: 1,
    paddingLeft: 16,
    justifyContent: 'center',
    paddingBottom: 16,
    alignItems: 'stretch',
    backgroundColor: theme.colors.background1,
    paddingTop: 16,
  },
  title: {},
  text: {},
})
