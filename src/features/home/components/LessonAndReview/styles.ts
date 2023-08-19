import { MakeStylesProps } from '~/types'

type StylesKeys = 'container'

export const styles: MakeStylesProps<StylesKeys> = (theme) => ({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
})
