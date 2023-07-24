import React from 'react'
import { Text as RNText, TextProps } from 'react-native'

import { getVariantStyles } from '../utils/getVariantStyles'

import { FontStylesKeys } from '~/features/ui/theme/fontsStyles'

export interface IText extends TextProps {
  variant?: FontStylesKeys
}
const Text = ({ variant = 'bodyLight', ...restProps }: IText) => {
  const variantStyles = getVariantStyles(variant)
  return <RNText style={{ ...variantStyles }} {...restProps} />
}

export { Text }
