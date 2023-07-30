import { MakeStylesProps } from '~/types'

type StylesKeys = 'container' | 'title' | 'text'

export const styles: MakeStylesProps<StylesKeys> = (theme) => ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {},
  text: {},
})
