---
to: src/features/<%= feature %>/<%= category %>/<%= name %>/styles.ts
---
import { MakeStylesProps } from '~/types'

type StylesKeys = 'container'

export const styles: MakeStylesProps<StylesKeys> = (theme) => ({
  container: {},
})

