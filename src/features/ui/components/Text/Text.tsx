import React from 'react'
import { Text as RNText, TextProps } from 'react-native'

import { FontStylesKeys, fontsStyles } from '~/features/ui/theme/fontsStyles'

export interface IText extends TextProps {
  variant?: FontStylesKeys
}
const Text = ({ variant = 'bodyLight', style, ...restProps }: IText) => {
  const variantStyles = fontsStyles[variant]
  return <RNText testID="text" style={[variantStyles, style]} {...restProps} />
}

export { Text }
