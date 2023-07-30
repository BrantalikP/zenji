import { useStyles } from '@brantalikp/rn-resize'
import { Link } from 'expo-router'
import React from 'react'
import type { ComponentProps, ElementRef } from 'react'
import { Pressable, StyleProp, TextStyle, ViewStyle } from 'react-native'

import { styles } from './styles'

import { Text } from '~/features/ui/components/Text'

export interface IButton extends ComponentProps<typeof Pressable> {
  label: string
  variant?: 'primary' | 'secondary' | 'tertiary'
  containerStyles?: StyleProp<ViewStyle>
  textStyles?: StyleProp<TextStyle>
  disableUppercase?: boolean
}

const Button = React.forwardRef<ElementRef<typeof Link>, IButton>(
  (
    { label, variant = 'primary', containerStyles, textStyles, disableUppercase = false, ...props },
    ref,
  ) => {
    const themedStyles = useStyles(styles)
    const variantContainerStyles = themedStyles[`${variant}Container`]
    const variantTextStyles = themedStyles[`${variant}Text`]
    const transformedLabel = disableUppercase ? label : label?.toUpperCase()
    return (
      <Pressable style={[variantContainerStyles, containerStyles]} {...ref} {...props}>
        <Text style={[variantTextStyles, textStyles]} variant="button">
          {transformedLabel}
        </Text>
      </Pressable>
    )
  },
)

export { Button }
