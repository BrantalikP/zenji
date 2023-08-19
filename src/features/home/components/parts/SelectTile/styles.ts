import { vs } from '@brantalikp/rn-resize'

import { MakeStylesProps } from '~/types'

type StylesKeys = 'container'

export const styles: MakeStylesProps<StylesKeys> = (theme) => ({
  container: {
    height: vs(210),
    width: '100%',
  },
})
