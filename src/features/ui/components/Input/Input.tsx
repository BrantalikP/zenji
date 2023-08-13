import { useStyles } from '@brantalikp/rn-resize'
import type { FC } from 'react'
import { View, TextInput, TextInputProps } from 'react-native'

import { styles } from './styles'

import { Text } from '~/features/ui/components/Text'

export interface IInput extends TextInputProps {
  // TODO: define props
}

const Input: FC<IInput> = ({ style, ...restProps }) => {
  const { container } = useStyles(styles)
  return <TextInput style={[container, style]} {...restProps} />
}

export { Input }
