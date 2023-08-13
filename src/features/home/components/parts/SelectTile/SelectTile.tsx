import { useStyles } from '@brantalikp/rn-resize'
import type { FC } from 'react'
import { View } from 'react-native'

import { styles } from './styles'

import { Text } from '~/components'

export interface ISelectTile {
  // TODO: define props
}

const SelectTile: FC<ISelectTile> = () => {
  const { container } = useStyles(styles)
  return (
    <View style={container}>
      <Text>SelectTile</Text>
    </View>
  )
}

export { SelectTile }
