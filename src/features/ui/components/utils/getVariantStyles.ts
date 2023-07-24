import { match } from 'ts-pattern'

import { FontStylesKeys, fontsStyles } from '../../theme/fontsStyles'

export const getVariantStyles = (variant: FontStylesKeys) => {
  return match(variant)
    .with('h1', () => ({ ...fontsStyles.h1 }))
    .with('h2', () => ({ ...fontsStyles.h2 }))
    .with('h3', () => ({ ...fontsStyles.h3 }))
    .with('h4', () => ({ ...fontsStyles.h4 }))
    .with('h5', () => ({ ...fontsStyles.h5 }))
    .with('h6', () => ({ ...fontsStyles.h6 }))
    .with('body', () => ({ ...fontsStyles.body }))
    .with('bodyLight', () => ({ ...fontsStyles.bodyLight }))
    .with('bodySmall', () => ({ ...fontsStyles.bodySmall }))
    .with('button', () => ({ ...fontsStyles.button }))
    .with('link', () => ({ ...fontsStyles.link }))
    .with('caption', () => ({ ...fontsStyles.caption }))
    .exhaustive()
}
